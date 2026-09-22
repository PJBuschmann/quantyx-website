/* Layered store with a version history alongside.
   bbox x 12..108 · y 12..60 — centred on (60, 36).
   Was: a single dashed line ran straight through one circle, and the stack
   sat 3px left of centre. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function RepoGlyph(props) {
  return (
    <GlyphFrame {...props}>
      {/* top plate, then two lower plate edges */}
      <path d="M12 24l34-12 34 12-34 12z" />
      <path d="M12 36l34 12 34-12" />
      <path d="M12 48l34 12 34-12" />
      {/* version history: evenly spaced revisions on one spine */}
      <path d="M105 14v44" strokeDasharray="3 4" />
      <circle cx="105" cy="22" r="3" />
      <circle cx="105" cy="36" r="3" />
      <circle cx="105" cy="50" r="3" />
    </GlyphFrame>
  );
}
