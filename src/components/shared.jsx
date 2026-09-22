/* Shared components: Logo, Nav, Footer, BracketLabel, Visuals */
import React, { useState, useEffect, useRef } from "react";
import { LINKEDIN_URL } from "../config.js";
import { NAV_ITEMS, FOOTER_COLUMNS } from "../routes.js";

/* Internal links are real <a href> elements — crawlable, middle-clickable,
   and openable in a new tab — but navigate client-side on a plain click. */
export function SiteLink({ to, navigate, children, ...rest }) {
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={onClick} {...rest}>{children}</a>;
}


/* Inlined so it can be used as a component and inherit colour from its link.
   A plain `import icon from "./x.svg"` under Vite yields a URL string, not a
   component, so using it as a JSX tag renders nothing. */
export function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 382 382" fill="currentColor"
      aria-hidden="true" focusable="false">
      <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
        L341.91,330.654L341.91,330.654z" />
    </svg>);

}

export function QuantyxLogo({ dark, small }) {
  const h = small ? 28 : 40;
  return (
    <div role="img" aria-label="Quantyx"
      className={"brand-mark" + (dark ? " on-dark" : "")}
      style={{ height: h }} />);

}

export function BracketLabel({ children, dark }) {
  return <span className={"bracket" + (dark ? " on-dark" : "")}>{children}</span>;
}

export function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.2" />
    </svg>);

}

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}



export function Nav({ route, navigate, variant }) {
  const scrolled = useScrolled();
  const forceLight = variant === "light";
  const cls = "nav " + (forceLight ? "light" : scrolled ? "scrolled" : "");
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [route]);
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {document.body.style.overflow = "";};
  }, [menu]);
  const go = (p) => {setMenu(false);navigate(p);};

  return (
    <React.Fragment>
    <nav className={cls}>
      <SiteLink to="/" navigate={navigate} aria-label="Quantyx Advisors — home" style={{ cursor: "pointer" }}>
        <QuantyxLogo dark={!forceLight} small />
      </SiteLink>
      <div className="nav-links">
        {NAV_ITEMS.map((item) =>
        <div key={item.label} className="nav-link-wrap">
            <SiteLink
            to={item.path}
            navigate={navigate}
            className={"nav-link" + (route.startsWith(item.base) ? " active" : "")}
            aria-current={route.startsWith(item.base) ? "page" : undefined}>
              {item.label}
            </SiteLink>
            {item.sub &&
          <div className="nav-dropdown">
                {item.sub.map((s) =>
            <SiteLink key={s.path} to={s.path} navigate={navigate}>{s.label}</SiteLink>
            )}
              </div>
          }
          </div>
        )}
      </div>
      <div className="nav-cta">
        <button className="btn btn-accent" onClick={() => navigate("/contact")} style={{ backgroundColor: "rgb(219, 240, 121)" }}>
          Contact Us <Arrow />
        </button>
        <button className={"nav-toggle" + (menu ? " open" : "")} aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><i /></button>
      </div>
    </nav>
    <div className={"nav-drawer-scrim" + (menu ? " open" : "")} onClick={() => setMenu(false)} />
    <aside className={"nav-drawer" + (menu ? " open" : "")}>
      {NAV_ITEMS.map((item) =>
      <div key={item.label} className="nav-drawer-group">
          <SiteLink
          to={item.path}
          navigate={go}
          className={"nav-drawer-top" + (route.startsWith(item.base) ? " active" : "")}>{item.label}</SiteLink>
          {item.sub &&
        <div className="nav-drawer-sub">
              {item.sub.map((s) => <SiteLink key={s.path} to={s.path} navigate={go}>{s.label}</SiteLink>)}
            </div>
        }
        </div>
      )}
      <div className="nav-drawer-cta">
        <button className="btn btn-accent" onClick={() => go("/contact")} style={{ backgroundColor: "rgb(219, 240, 121)" }}>
          Contact Us <Arrow />
        </button>
      </div>
    </aside>
    </React.Fragment>);

}

export function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <QuantyxLogo dark />
          <p className="tagline">Risk Management &amp; Valuations for Private Markets.</p>
          {LINKEDIN_URL &&
          <div style={{ marginTop: 20 }}>
            <a className="footer-social" href={LINKEDIN_URL}
              target="_blank" rel="noopener noreferrer"
              aria-label="Quantyx Advisors on LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          }
        </div>
        <div className="footer-nav-grid">
          {FOOTER_COLUMNS.map((col) =>
          <div key={col.title} className="footer-col">
            <h5>{col.title}</h5>
            <ul>
              {col.items.map((item) =>
              <li key={item.path}>
                <SiteLink to={item.path} navigate={navigate}>{item.label}</SiteLink>
              </li>
              )}
            </ul>
          </div>
          )}
        </div>
        <div className="footer-offices">
          <h5 style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: "#8FA8A3", letterSpacing: "0.14em",
            margin: "0 0 20px", textTransform: "uppercase", fontWeight: 500
          }}>Offices</h5>
          <p className="city">Milan · IT</p>
          <p>Via E. De Amicis 53</p>
          <p>20123 Milano (MI)</p>
          <p className="city">Luxembourg · LU</p>
          <p>21 Rue Glesener</p>
          <p>L-1631 Luxembourg</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 · QUANTYX ADVISORS · ALL RIGHTS RESERVED</div>
        {/* TODO: these need real pages before launch (GDPR / cookie consent).
            Rendered as plain text for now so nothing links to a dead URL. */}
        <div className="right">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Legal</span>
        </div>
      </div>
    </footer>);

}

/* --- Hero Visualization: Monte Carlo fan of simulated NAV paths --- */
export function HeroViz() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current, cv = canvasRef.current, ctx = cv.getContext("2d");
    const LIME = [200, 224, 75], SAGE = [168, 189, 184], PAPER = [247, 245, 240];
    const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const HIST = 34, STEPS = 60, NPATH = 160, CYCLE = 9;

    // seeded RNG so every cycle is a fresh but deterministic simulation
    const rng = (seed) => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const gauss = (r) => { let u = 0; while (!u) u = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); };
    const pct = (arr, q) => { const s = [...arr].sort((a, b) => a - b); return s[Math.floor(q * (s.length - 1))]; };

    let W = 0, H = 0, r, hist, paths, sig, cycle = -1, raf, visible = true;
    const reset = (seed) => {
      r = rng(seed); sig = 0.016 + r() * 0.006;
      hist = [0]; for (let i = 1; i < HIST; i++) hist.push(hist[i - 1] + 0.006 + gauss(r) * 0.018);
      paths = [];
    };
    const size = () => {
      const b = wrap.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1);
      W = b.width; H = b.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    size();
    window.addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(wrap);

    const draw = (t) => {
      const cyc = Math.floor(t / CYCLE);
      if (cyc !== cycle) { cycle = cyc; reset(11 + cyc * 97); }
      const ct = t - cyc * CYCLE;
      const target = reduce ? NPATH : Math.min(NPATH, Math.floor((ct / 5) * NPATH));
      while (paths.length < target) {
        const p = [hist[HIST - 1]];
        for (let i = 1; i <= STEPS; i++) p.push(p[i - 1] + 0.003 + gauss(r) * sig);
        paths.push(p);
      }
      const fade = !reduce && ct > CYCLE - 0.8 ? (CYCLE - ct) / 0.8 : 1;

      ctx.clearRect(0, 0, W, H);
      const x0 = W * 0.04, xT = W * 0.4, x1 = W * 0.96, base = hist[HIST - 1];
      const Y = (v) => H * 0.58 - (v - base) * H * 0.75;
      const XH = (i) => x0 + ((xT - x0) * i) / (HIST - 1);
      const XF = (i) => xT + ((x1 - xT) * i) / STEPS;
      ctx.globalAlpha = fade;

      // "today" divider
      const gd = ctx.createLinearGradient(0, H * 0.12, 0, H * 0.9);
      gd.addColorStop(0, rgba(SAGE, 0)); gd.addColorStop(0.5, rgba(SAGE, 0.22)); gd.addColorStop(1, rgba(SAGE, 0));
      ctx.strokeStyle = gd; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(xT, H * 0.12); ctx.lineTo(xT, H * 0.9); ctx.stroke();

      // 5th–95th percentile band + median
      if (paths.length > 12) {
        const lo = [], hi = [], md = [];
        for (let i = 0; i <= STEPS; i++) {
          const col = paths.map((p) => p[i]);
          lo.push(pct(col, 0.05)); hi.push(pct(col, 0.95)); md.push(pct(col, 0.5));
        }
        const band = Math.min(1, (paths.length - 12) / 60);
        const gb = ctx.createLinearGradient(xT, 0, x1, 0);
        gb.addColorStop(0, rgba(LIME, 0.02)); gb.addColorStop(1, rgba(LIME, 0.14 * band));
        ctx.fillStyle = gb; ctx.beginPath();
        hi.forEach((v, i) => ctx.lineTo(XF(i), Y(v)));
        for (let i = STEPS; i >= 0; i--) ctx.lineTo(XF(i), Y(lo[i]));
        ctx.fill();
        ctx.strokeStyle = rgba(LIME, 0.9 * band); ctx.lineWidth = 2;
        ctx.beginPath(); md.forEach((v, i) => ctx.lineTo(XF(i), Y(v))); ctx.stroke();
        ctx.fillStyle = rgba(LIME, band);
        ctx.beginPath(); ctx.arc(XF(STEPS), Y(md[STEPS]), 3.5, 0, Math.PI * 2); ctx.fill();
      }

      // simulated paths, newest ones highlighted
      ctx.lineWidth = 1;
      paths.forEach((p, k) => {
        ctx.strokeStyle = k >= paths.length - 3 ? rgba(PAPER, 0.5) : rgba(LIME, 0.07);
        ctx.beginPath(); p.forEach((v, i) => ctx.lineTo(XF(i), Y(v))); ctx.stroke();
      });

      // realised history up to today
      const gh = ctx.createLinearGradient(x0, 0, xT, 0);
      gh.addColorStop(0, rgba(PAPER, 0)); gh.addColorStop(1, rgba(PAPER, 0.95));
      ctx.strokeStyle = gh; ctx.lineWidth = 2;
      ctx.beginPath(); hist.forEach((v, i) => ctx.lineTo(XH(i), Y(v))); ctx.stroke();
      ctx.fillStyle = rgba(PAPER, 1);
      ctx.beginPath(); ctx.arc(xT, Y(base), 4, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    };

    const t0 = performance.now();
    const frame = (now) => {
      if (visible) draw(Math.max(0, now - t0) / 1000);
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); io.disconnect(); };
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%", height: "100%" }} aria-hidden="true">
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}

/* decorative geometric mark used inside service panels */
export function GeoMark({ kind = "grid" }) {
  if (kind === "grid") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <g stroke="#8FA8A3" strokeWidth="0.6">
          {Array.from({ length: 11 }).map((_, i) =>
          <line key={"h" + i} x1="0" y1={i * 20} x2="200" y2={i * 20} />
          )}
          {Array.from({ length: 11 }).map((_, i) =>
          <line key={"v" + i} x1={i * 20} y1="0" x2={i * 20} y2="200" />
          )}
        </g>
        <circle cx="100" cy="100" r="60" stroke="#C8E04B" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="30" stroke="#C8E04B" strokeWidth="1" fill="none" />
      </svg>);

  }
  // chart
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <g stroke="#8FA8A3" strokeWidth="0.5" opacity="0.6">
        {Array.from({ length: 5 }).map((_, i) =>
        <line key={i} x1="0" y1={40 + i * 30} x2="200" y2={40 + i * 30} />
        )}
      </g>
      <path d="M0,150 L20,130 L40,140 L60,100 L80,110 L100,80 L120,85 L140,60 L160,70 L180,40 L200,30"
      stroke="#C8E04B" strokeWidth="1.5" fill="none" />
      <path d="M0,150 L20,130 L40,140 L60,100 L80,110 L100,80 L120,85 L140,60 L160,70 L180,40 L200,30 L200,200 L0,200 Z"
      fill="#C8E04B" opacity="0.08" />
    </svg>);

}

/* SubNav for Risk Management / Valuation / About sections */
export function SubNav({ items, route, navigate, label }) {
  return (
    <aside className="subnav">
      <div className="subnav-label">{label}</div>
      <div className="subnav-list">
        {items.map((it, i) =>
        <button
          key={it.path}
          className={"subnav-item" + (route === it.path ? " active" : "")}
          onClick={() => navigate(it.path)}>
          
            <span>{it.label}</span>
          </button>
        )}
      </div>
    </aside>);

}

/* Page wrapper: adds appear-on-scroll behavior */
export function Page({ children, routeKey }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add("in");});
    }, { threshold: 0.08 });
    const observe = () => {
      document.querySelectorAll(".appear").forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
        io.observe(el);
      });
    };
    observe();
    const raf = requestAnimationFrame(observe);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [routeKey]);
  return <div>{children}</div>;
}

export function AssetIcon({ kind, size = 56 }) {
  const stroke = "#1F3A36";
  const accent = "#C8E04B";
  const sage = "#8FA8A3";
  const props = { width: size, height: size, viewBox: "0 0 64 64", fill: "none" };
  switch (kind) {
    case "Private Equity":
      // building / acquisition
      return (
        <svg {...props}>
          <rect x="10" y="22" width="18" height="30" stroke={stroke} strokeWidth="1"/>
          <rect x="28" y="14" width="22" height="38" stroke={stroke} strokeWidth="1" fill="none"/>
          <line x1="34" y1="20" x2="44" y2="20" stroke={sage} strokeWidth="0.8"/>
          <line x1="34" y1="26" x2="44" y2="26" stroke={sage} strokeWidth="0.8"/>
          <line x1="34" y1="32" x2="44" y2="32" stroke={sage} strokeWidth="0.8"/>
          <line x1="34" y1="38" x2="44" y2="38" stroke={sage} strokeWidth="0.8"/>
          <rect x="36" y="44" width="6" height="8" fill={accent}/>
          <line x1="6" y1="52" x2="58" y2="52" stroke={stroke} strokeWidth="1"/>
        </svg>
      );
    case "Infrastructure":
      // bridge / pylons
      return (
        <svg {...props}>
          <line x1="6" y1="46" x2="58" y2="46" stroke={stroke} strokeWidth="1"/>
          <line x1="14" y1="46" x2="14" y2="20" stroke={stroke} strokeWidth="1"/>
          <line x1="32" y1="46" x2="32" y2="14" stroke={stroke} strokeWidth="1"/>
          <line x1="50" y1="46" x2="50" y2="20" stroke={stroke} strokeWidth="1"/>
          <path d="M14,20 L32,14 L50,20" stroke={accent} strokeWidth="1" fill="none"/>
          <path d="M14,28 L32,22 L50,28" stroke={sage} strokeWidth="0.7" fill="none"/>
          <path d="M14,36 L32,30 L50,36" stroke={sage} strokeWidth="0.7" fill="none"/>
          <line x1="6" y1="52" x2="58" y2="52" stroke={sage} strokeWidth="0.6" strokeDasharray="2 2"/>
        </svg>
      );
    case "Real Estate":
      // skyline
      return (
        <svg {...props}>
          <line x1="6" y1="52" x2="58" y2="52" stroke={stroke} strokeWidth="1"/>
          <rect x="10" y="32" width="10" height="20" stroke={stroke} strokeWidth="1"/>
          <rect x="22" y="22" width="12" height="30" stroke={stroke} strokeWidth="1"/>
          <rect x="36" y="28" width="8" height="24" stroke={stroke} strokeWidth="1"/>
          <rect x="46" y="18" width="10" height="34" stroke={stroke} strokeWidth="1"/>
          <rect x="48" y="20" width="2" height="2" fill={accent}/>
          <rect x="52" y="20" width="2" height="2" fill={accent}/>
          <rect x="48" y="26" width="2" height="2" fill={sage}/>
          <rect x="52" y="26" width="2" height="2" fill={sage}/>
          <rect x="25" y="26" width="2" height="2" fill={sage}/>
          <rect x="29" y="26" width="2" height="2" fill={sage}/>
        </svg>
      );
    case "Fund of Funds":
      // nested circles
      return (
        <svg {...props}>
          <circle cx="32" cy="32" r="22" stroke={stroke} strokeWidth="1"/>
          <circle cx="22" cy="28" r="8" stroke={sage} strokeWidth="0.8"/>
          <circle cx="40" cy="26" r="6" stroke={sage} strokeWidth="0.8"/>
          <circle cx="36" cy="40" r="9" stroke={accent} strokeWidth="1"/>
          <circle cx="22" cy="28" r="2" fill={stroke}/>
          <circle cx="40" cy="26" r="2" fill={stroke}/>
          <circle cx="36" cy="40" r="2" fill={accent}/>
        </svg>
      );
    case "Private Debt":
      // candlestick / debt notes
      return (
        <svg {...props}>
          <line x1="6" y1="52" x2="58" y2="52" stroke={stroke} strokeWidth="1"/>
          <line x1="14" y1="14" x2="14" y2="48" stroke={sage} strokeWidth="0.8"/>
          <rect x="10" y="22" width="8" height="18" fill="none" stroke={stroke} strokeWidth="1"/>
          <line x1="28" y1="18" x2="28" y2="50" stroke={sage} strokeWidth="0.8"/>
          <rect x="24" y="28" width="8" height="14" fill={accent}/>
          <line x1="42" y1="20" x2="42" y2="46" stroke={sage} strokeWidth="0.8"/>
          <rect x="38" y="24" width="8" height="20" fill="none" stroke={stroke} strokeWidth="1"/>
          <line x1="56" y1="22" x2="56" y2="44" stroke={sage} strokeWidth="0.8"/>
        </svg>
      );
    case "Credit":
      // overlapping discs / lending
      return (
        <svg {...props}>
          <circle cx="22" cy="32" r="14" stroke={stroke} strokeWidth="1"/>
          <circle cx="42" cy="32" r="14" stroke={stroke} strokeWidth="1"/>
          <path d="M32,21 A14 14 0 0 1 32,43 A14 14 0 0 0 32,21 Z" fill={accent} opacity="0.9"/>
          <line x1="6" y1="52" x2="58" y2="52" stroke={sage} strokeWidth="0.6" strokeDasharray="2 2"/>
        </svg>
      );
    case "Venture Capital":
      // upward trajectory / rocket arrow
      return (
        <svg {...props}>
          <line x1="6" y1="52" x2="58" y2="52" stroke={stroke} strokeWidth="1"/>
          <line x1="6" y1="52" x2="6" y2="14" stroke={sage} strokeWidth="0.8"/>
          <path d="M10,46 L20,40 L28,42 L38,30 L50,18" stroke={accent} strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="46" r="2" fill={stroke}/>
          <circle cx="20" cy="40" r="2" fill={stroke}/>
          <circle cx="28" cy="42" r="2" fill={stroke}/>
          <circle cx="38" cy="30" r="2" fill={stroke}/>
          <circle cx="50" cy="18" r="3" fill={accent} stroke={stroke} strokeWidth="1"/>
          <path d="M50,18 L56,12" stroke={stroke} strokeWidth="1"/>
        </svg>
      );
    case "Multi-strategy":
      // intersecting triangles
      return (
        <svg {...props}>
          <polygon points="32,12 12,52 52,52" stroke={stroke} strokeWidth="1" fill="none"/>
          <polygon points="32,20 20,48 44,48" stroke={accent} strokeWidth="1" fill="none"/>
          {/* <line x1="6" y1="52" x2="58" y2="52" stroke={sage} strokeWidth="0.6" strokeDasharray="2 2"/> */}
        </svg>
      );
    default:
      return <svg {...props}><rect x="10" y="10" width="44" height="44" stroke={stroke}/></svg>;
  }
}

export function AssetClassRow({ items }) {
  return (
    <div className="asset-rows">
      {items.map((a, i) => (
        <div key={i} className="asset-row">
          <span className="ar-num">AC · {String(i + 1).padStart(2, "0")}</span>
          <div className="ar-icon"><AssetIcon kind={a.t} /></div>
          <div className="ar-body">
            <h4>{a.t}</h4>
            <p>{a.d}</p>
          </div>
          <div className="ar-rule"></div>
        </div>
      ))}
    </div>
  );
}
