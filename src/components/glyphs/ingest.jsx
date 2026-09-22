/* Three sources converging into a validation node, then on to storage.
   bbox x 10..110 · y 14..58 — centred on (60, 36).
   Was: the middle feed stopped at x=30 while the outer two reached x=44, so
   only two of the three inputs appeared to touch the node. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function IngestGlyph(props) {
  return (
    <GlyphFrame {...props}>
      {/* three feeds, all terminating on the node's left edge (x=45) */}
      <path d="M10 14h22l13 22" />
      <path d="M10 36h35" />
      <path d="M10 58h22l13-22" />
      {/* validation node */}
      <circle cx="52" cy="36" r="7" />
      {/* hand-off to storage */}
      <path d="M59 36h27" strokeDasharray="3 4" />
      <rect x="86" y="24" width="24" height="24" />
    </GlyphFrame>
  );
}
