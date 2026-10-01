/* Contact form endpoint (Vercel serverless function, served at /api/contact).
   Receives the JSON payload posted by the Contact page and forwards it to
   CONTACT_TO through Resend's HTTP API.

   Environment variables (Vercel → Project → Settings → Environment Variables):
     RESEND_API_KEY  required. Resend API key; never exposed to the browser.
     CONTACT_TO      optional. Recipient, default info@quantyx.com.
     CONTACT_FROM    optional. Sender on a domain verified in Resend,
                     default "Quantyx Website <website@quantyx.com>". */

const TO = process.env.CONTACT_TO || "info@quantyx.com";
const FROM = process.env.CONTACT_FROM || "Quantyx Website <website@quantyx.com>";

const SUBJECTS = ["General Inquiry", "Risk Management", "Valuation", "QRM Platform", "Careers"];
const LIMITS = { name: 200, company: 200, email: 254, phone: 50, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Best-effort per-IP rate limit. Memory is per function instance, so this
   only slows down bursts; it is not a hard guarantee. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const clean = (v) => (typeof v === "string" ? v.trim() : "");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ error: "Invalid request" });

  /* Honeypot: the hidden "website" field is only ever filled in by bots.
     Pretend success so they don't retry. */
  if (clean(body.website)) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return res.status(429).json({ error: "Too many requests" });

  const f = {
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email),
    phone: clean(body.phone),
    subject: SUBJECTS.includes(body.subject) ? body.subject : "General Inquiry",
    message: clean(body.message),
  };
  if (!f.name || !f.company || !f.message || !EMAIL_RE.test(f.email)) {
    return res.status(400).json({ error: "Missing or invalid fields" });
  }
  for (const [k, max] of Object.entries(LIMITS)) {
    if (f[k].length > max) return res.status(400).json({ error: `${k} is too long` });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email is not configured" });
  }

  const rows = [
    ["Name", f.name],
    ["Company", f.company],
    ["Email", f.email],
    ["Phone", f.phone],
    ["Subject", f.subject],
  ].filter(([, v]) => v);

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", f.message].join("\n");
  const html =
    `<table cellpadding="4" style="font-family:sans-serif;font-size:14px">` +
    rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(f.message)}</p>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: f.email,
        subject: `Website inquiry — ${f.subject}`,
        text,
        html,
      }),
    });
    if (!r.ok) {
      console.error("contact: Resend error", r.status, await r.text());
      return res.status(502).json({ error: "Could not send message" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact: Resend request failed", err);
    return res.status(502).json({ error: "Could not send message" });
  }
}
