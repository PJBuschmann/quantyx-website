/* Certified shield between two controlled boundaries.
   bbox x 8..112 · y 10..62 — centred on (60, 36).
   Was: the shield ran y 8..68, putting its centre at 38 and its tip 4px from
   the frame edge; the check mark's own centre sat at x=61.5 against the
   shield's 60. Side rules now clear the shield by an equal 10px each side.
   Round joins: the shield tip and the check are acute. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function CertifiedGlyph(props) {
  return (
    <GlyphFrame linejoin="round" {...props}>
      <path d="M60 10l28 10v18c0 15-12 22-28 24-16-2-28-9-28-24V20z" />
      <path d="M47 35l9 9 18-19" />
      <path d="M8 24h14M8 36h14M8 48h14" strokeDasharray="3 4" />
      <path d="M98 24h14M98 36h14M98 48h14" strokeDasharray="3 4" />
    </GlyphFrame>
  );
}
