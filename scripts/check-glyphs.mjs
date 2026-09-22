/* Reports each module glyph's bounding box and how far it sits from the
   viewBox centre. Run after editing anything in src/components/glyphs/.
   See that folder's README.md for the drawing contract. */
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../src/components/glyphs");
const CENTER = { x: 60, y: 36 };
const SAFE = { x0: 8, x1: 112, y0: 8, y1: 64 };
const TOL = 1.5;

/* Minimal path walker covering the commands this set uses. Control points are
   included in the box, which is conservative but never misses an extent. */
function pathPoints(d) {
  const pts = [];
  const tokens = d.match(/[MmLlHhVvCcSsZz]|-?\d*\.?\d+/g) ?? [];
  let i = 0, cx = 0, cy = 0, sx = 0, sy = 0, cmd = "M";
  const num = () => parseFloat(tokens[i++]);
  const push = (x, y) => pts.push([x, y]);

  while (i < tokens.length) {
    if (/[MmLlHhVvCcSsZz]/.test(tokens[i])) cmd = tokens[i++];
    const rel = cmd === cmd.toLowerCase();
    const bx = rel ? cx : 0, by = rel ? cy : 0;
    switch (cmd.toUpperCase()) {
      case "M": cx = bx + num(); cy = by + num(); sx = cx; sy = cy; push(cx, cy); cmd = rel ? "l" : "L"; break;
      case "L": cx = bx + num(); cy = by + num(); push(cx, cy); break;
      case "H": cx = bx + num(); push(cx, cy); break;
      case "V": cy = by + num(); push(cx, cy); break;
      case "C": {
        const x1 = bx + num(), y1 = by + num(), x2 = bx + num(), y2 = by + num();
        cx = bx + num(); cy = by + num();
        push(x1, y1); push(x2, y2); push(cx, cy); break;
      }
      case "S": {
        const x2 = bx + num(), y2 = by + num();
        cx = bx + num(); cy = by + num();
        push(x2, y2); push(cx, cy); break;
      }
      case "Z": cx = sx; cy = sy; push(cx, cy); break;
      default: i++;
    }
  }
  return pts;
}

function glyphBox(src) {
  const pts = [];
  for (const [, d] of src.matchAll(/<path[^>]*\sd="([^"]+)"/g)) pts.push(...pathPoints(d));
  for (const m of src.matchAll(/<rect\s+x="([-\d.]+)"\s+y="([-\d.]+)"\s+width="([-\d.]+)"\s+height="([-\d.]+)"/g)) {
    const [x, y, w, h] = m.slice(1).map(Number);
    pts.push([x, y], [x + w, y + h]);
  }
  for (const m of src.matchAll(/<circle\s+cx="([-\d.]+)"\s+cy="([-\d.]+)"\s+r="([-\d.]+)"/g)) {
    const [x, y, r] = m.slice(1).map(Number);
    pts.push([x - r, y - r], [x + r, y + r]);
  }
  if (!pts.length) return null;
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
}

const files = readdirSync(DIR).filter((f) => f.endsWith(".jsx") && !["index.jsx", "GlyphFrame.jsx"].includes(f));

let problems = 0;
console.log("glyph          x-range        cx     dx    y-range        cy     dy   safe");
for (const file of files.sort()) {
  const b = glyphBox(readFileSync(join(DIR, file), "utf8"));
  const name = file.replace(/\.jsx$/, "");
  if (!b) { console.log(`${name.padEnd(14)} (no geometry found)`); problems++; continue; }
  const cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
  const dx = cx - CENTER.x, dy = cy - CENTER.y;
  const inSafe = b.x0 >= SAFE.x0 && b.x1 <= SAFE.x1 && b.y0 >= SAFE.y0 && b.y1 <= SAFE.y1;
  const off = Math.abs(dx) > TOL || Math.abs(dy) > TOL;
  if (off || !inSafe) problems++;
  console.log(
    `${name.padEnd(14)} ${`${b.x0}..${b.x1}`.padEnd(13)} ${cx.toFixed(1).padStart(5)} ${dx >= 0 ? "+" : ""}${dx.toFixed(1).padStart(5)}` +
    `   ${`${b.y0}..${b.y1}`.padEnd(12)} ${cy.toFixed(1).padStart(5)} ${dy >= 0 ? "+" : ""}${dy.toFixed(1).padStart(5)}` +
    `   ${inSafe ? "ok" : "OUT"}${off ? "  <-- off centre" : ""}`
  );
}
console.log(problems ? `\n${problems} glyph(s) need attention` : "\nall glyphs centred and within the safe area");
process.exit(problems ? 1 : 0);
