/* Risk series over a baseline, with a straight trend line and a peak marker.
   bbox x 10..110 · y 14..58 — centred on (60, 36).
   Was: the series ended at x=104 while the baseline ran to x=112, and the
   dashed line stopped dead in mid-canvas at x=56. Vertices are now evenly
   spaced at 20px and every element shares the same 10..110 span.
   Round joins: the series has acute vertices that spike under a miter join. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function MonitorGlyph(props) {
  return (
    <GlyphFrame linecap="round" linejoin="round" {...props}>
      <path d="M10 58h100" strokeDasharray="2 5" />
      {/* trend */}
      <path d="M10 40 110 24" strokeDasharray="3 4" />
      {/* series: vertices at x = 10, 30, 50, 70, 90, 110 */}
      <path d="M10 44l20-12 20 8 20-22 20 10 20-14" />
      {/* marker on the peak vertex */}
      <circle cx="70" cy="18" r="3.5" />
    </GlyphFrame>
  );
}
