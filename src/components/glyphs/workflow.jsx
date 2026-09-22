/* A process fanning into two parallel review branches, rejoining at approval.
   bbox x 14..106 · y 12..60 — centred on (60, 36).
   Was: the elbows stopped at x=78 and the approval circle began at x=84, so
   the final node floated unconnected; the whole mark sat 6px left of centre. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function WorkflowGlyph(props) {
  return (
    <GlyphFrame {...props}>
      {/* intake */}
      <rect x="14" y="26" width="20" height="20" />
      <path d="M34 36h16" />
      {/* two branches, mirrored about y=36 */}
      <rect x="50" y="12" width="20" height="20" />
      <rect x="50" y="40" width="20" height="20" />
      {/* elbows rejoining on the spine, then into the approval node */}
      <path d="M70 22h14v14M70 50h14V36" />
      <path d="M84 36h6" />
      <circle cx="98" cy="36" r="8" />
    </GlyphFrame>
  );
}
