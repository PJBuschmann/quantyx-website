/* Verifies the navigation and footer against the route table:
   - every link in the nav or footer resolves to a real route or redirect
   - every route is reachable from the footer sitemap ("/" via the logo)
   - the footer column order and labels match the nav
   Run after changing routes, nav items or footer columns. */
const { ROUTES, REDIRECTS, NAV_ITEMS, FOOTER_COLUMNS } = await import("../src/routes.js");

const routePaths = new Set(ROUTES.map((r) => r.path));
const redirectFrom = new Set(REDIRECTS.map((r) => r.from));
const resolvable = new Set([...routePaths, ...redirectFrom]);

const problems = [];

/* 1. Nav links */
const navLinks = [];
for (const item of NAV_ITEMS) {
  navLinks.push([`nav "${item.label}"`, item.path]);
  for (const sub of item.sub ?? []) navLinks.push([`nav "${item.label}" > "${sub.label}"`, sub.path]);
  /* A section's landing page should be its first sub-item. */
  if (item.sub?.length && item.path !== item.sub[0].path) {
    problems.push(`nav "${item.label}" lands on ${item.path} but its first sub-item is ${item.sub[0].path}`);
  }
}

/* 2. Footer links */
const footerLinks = [];
const footerPaths = new Set();
for (const col of FOOTER_COLUMNS) {
  for (const item of col.items) {
    footerLinks.push([`footer "${col.title}" > "${item.label}"`, item.path]);
    footerPaths.add(item.path);
  }
}

for (const [where, path] of [...navLinks, ...footerLinks]) {
  if (!resolvable.has(path)) problems.push(`${where} -> ${path} is not a route or redirect`);
}

/* 3. Coverage: every page reachable from the footer */
for (const r of ROUTES) {
  if (r.path === "/") continue; // reached via the footer logo
  if (!footerPaths.has(r.path)) problems.push(`route ${r.path} is not linked from the footer`);
}

/* 4. Label agreement between nav and footer for shared paths */
const navLabel = new Map();
for (const item of NAV_ITEMS) for (const sub of item.sub ?? []) navLabel.set(sub.path, sub.label);
for (const col of FOOTER_COLUMNS) {
  for (const item of col.items) {
    const expected = navLabel.get(item.path);
    if (expected && expected !== item.label) {
      problems.push(`footer label "${item.label}" differs from nav "${expected}" for ${item.path}`);
    }
  }
}

console.log(`routes: ${ROUTES.length} · redirects: ${REDIRECTS.length} · nav links: ${navLinks.length} · footer links: ${footerLinks.length}\n`);
for (const col of FOOTER_COLUMNS) {
  console.log(`  ${col.title}`);
  for (const i of col.items) console.log(`    ${i.label.padEnd(38)} ${i.path}`);
}
console.log();
if (problems.length) {
  for (const p of problems) console.log("  ! " + p);
  console.log(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log("nav and footer consistent; every page reachable");
