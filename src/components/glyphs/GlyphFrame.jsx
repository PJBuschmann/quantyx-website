/* Shared <svg> shell for every module glyph.
   Keeping the frame in one place means a glyph file only ever describes
   geometry — see ./README.md for the drawing contract. */
import React from "react";

export const GLYPH_VIEWBOX = "0 0 120 72";
export const GLYPH_CENTER = { x: 60, y: 36 };

export default function GlyphFrame({
  children,
  strokeWidth = 1.25,
  /* "square" suits orthogonal diagrams; "round" avoids miter spikes on the
     acute angles of chart-like shapes. */
  linecap = "square",
  linejoin = "miter",
}) {
  return (
    <svg
      viewBox={GLYPH_VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap={linecap}
      strokeLinejoin={linejoin}
      aria-hidden="true"
      focusable="false">
      {children}
    </svg>
  );
}
