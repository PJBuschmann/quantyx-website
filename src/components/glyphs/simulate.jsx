/* Monte Carlo fan from a single starting point out to a maturity line.
   bbox x 10..110 · y 12..60 — centred on (60, 36).
   Was: four paths landing at y = 20, 30, 44, 52 — offsets of 16, 6, 8, 16
   from the centre line, so the cone was visibly lopsided and had no median.
   Now five paths at y = 14, 25, 36, 47, 58: offsets 22, 11, 0, 11, 22.
   Round joins: the curve handles meet the stub at a shallow angle. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function SimulateGlyph(props) {
  return (
    <GlyphFrame linecap="round" linejoin="round" {...props}>
      {/* entry stub */}
      <path d="M10 36h10" />
      {/* fan, mirrored about y=36 */}
      <path d="M20 36C56 36 76 14 104 14" />
      <path d="M20 36C56 36 76 25 104 25" />
      <path d="M20 36h84" />
      <path d="M20 36C56 36 76 47 104 47" />
      <path d="M20 36C56 36 76 58 104 58" />
      {/* maturity */}
      <path d="M110 12v48" strokeDasharray="3 4" />
    </GlyphFrame>
  );
}
