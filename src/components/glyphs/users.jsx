/* Identity ring with per-row permissions. Not currently assigned to a module;
   kept as a ready alternative.
   bbox x 14..106 · y 14..58 — centred on (60, 36).
   Was: the rows started exactly on the ring's widest point and then left a
   17px gap before the trailing dots; the mark sat 8.5px left of centre. */
import React from "react";
import GlyphFrame from "./GlyphFrame.jsx";

export default function UsersGlyph(props) {
  return (
    <GlyphFrame {...props}>
      <circle cx="36" cy="36" r="22" />
      <circle cx="36" cy="36" r="10" />
      {/* three equal rows, each with a matching terminator */}
      <path d="M66 22h28M66 36h28M66 50h28" />
      <circle cx="103" cy="22" r="3" />
      <circle cx="103" cy="36" r="3" />
      <circle cx="103" cy="50" r="3" />
    </GlyphFrame>
  );
}
