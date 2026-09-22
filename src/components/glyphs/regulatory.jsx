/* A reporting matrix with the final cell validated.
   bbox x 10..110 · y 10..62 — centred on (60, 36).
   Was: a 3x2 grid whose third column was 22 wide against 28 for the others,
   and the grid sat 2px below centre. Now a uniform 28x22 cell on an 8px gap:
   3*28 + 2*8 = 100 wide, 2*22 + 8 = 52 tall, so it fills 10..110 / 10..62. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function RegulatoryGlyph(props) {
  return (
    <GlyphFrame {...props}>
      <rect x="10" y="10" width="28" height="22" />
      <rect x="46" y="10" width="28" height="22" />
      <rect x="82" y="10" width="28" height="22" />
      <rect x="10" y="40" width="28" height="22" />
      <rect x="46" y="40" width="28" height="22" />
      {/* final cell: validated rather than drawn */}
      <path d="M89 51l5 6 10-12" />
    </GlyphFrame>
  );
}
