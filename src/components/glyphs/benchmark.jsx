/* Peer distribution against a reference line.
   bbox x 10..110 · y 12..60 — bars centred on (60, 36).
   Was: four bars occupying 14..94 under a baseline running 8..112, leaving a
   6px margin on the left and 18px on the right. Bars are now 14 wide on an
   8px gap, so the group spans 20..100 — symmetric within the baseline. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function BenchmarkGlyph(props) {
  return (
    <GlyphFrame {...props}>
      {/* peer median */}
      <path d="M10 30h100" strokeDasharray="3 4" />
      <rect x="20" y="32" width="14" height="28" />
      <rect x="42" y="20" width="14" height="40" />
      <rect x="64" y="40" width="14" height="20" />
      <rect x="86" y="12" width="14" height="48" />
      <path d="M10 60h100" />
    </GlyphFrame>
  );
}
