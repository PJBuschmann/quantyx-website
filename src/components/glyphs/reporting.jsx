/* One report emitted to three output formats.
   bbox x 10..110 · y 10..62 — centred on (60, 36).
   Was: the body copy lines sat at y = 24/34/44, centred on 34 rather than on
   the sheet's own centre of 36; two of the three outbound lines ended in
   mid-air at x=84 while the third carried the only arrowhead. All three
   outputs are now identical and terminate in a target. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function ReportingGlyph(props) {
  return (
    <GlyphFrame {...props}>
      {/* sheet */}
      <rect x="10" y="10" width="42" height="52" />
      <path d="M18 26h26M18 36h26M18 46h18" />
      {/* three equal exports, mirrored about y=36 */}
      <path d="M60 20h36M60 36h36M60 52h36" strokeDasharray="3 4" />
      <rect x="100" y="15" width="10" height="10" />
      <rect x="100" y="31" width="10" height="10" />
      <rect x="100" y="47" width="10" height="10" />
    </GlyphFrame>
  );
}
