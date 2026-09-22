/* An immutable log: evenly spaced entries pinned to a timeline.
   bbox x 10..110 · y 8..64 — centred on (60, 36).
   Geometry was already sound; the baseline now shares the 10..110 span used
   by the rest of the set instead of running 8..112. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function AuditGlyph(props) {
  return (
    <GlyphFrame {...props}>
      <path d="M10 36h100" />
      {/* entries at x = 24, 60, 96 — 36px apart, centred on 60 */}
      <circle cx="24" cy="36" r="5" />
      <circle cx="60" cy="36" r="5" />
      <circle cx="96" cy="36" r="5" />
      {/* leaders, alternating above and below */}
      <path d="M24 31V16M60 41v15M96 31V16" />
      <rect x="16" y="8" width="16" height="8" />
      <rect x="52" y="56" width="16" height="8" />
      <rect x="88" y="8" width="16" height="8" />
    </GlyphFrame>
  );
}
