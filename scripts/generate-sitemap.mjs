/* Regenerates public/sitemap.xml from src/routes.js.
   Run via `npm run sitemap` whenever routes change. */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const { ROUTES, SITE_URL } = await import("../src/routes.js");

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/sitemap.xml");
writeFileSync(out, xml, "utf8");
console.log(`sitemap.xml written with ${ROUTES.length} URLs`);
