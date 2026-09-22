# Module glyphs

One file per mark, each default-exporting a React component. To change a
glyph, edit only its file. To add one, create the file and register the key in
`index.jsx`; modules in `../../pages/qrm.jsx` select a glyph by that key via
their `g` field.

## Drawing contract

- **viewBox `0 0 120 72`** (15:8). The frame comes from `GlyphFrame.jsx` — a
  glyph file contributes geometry only, never its own `<svg>`.
- **Centre is (60, 36).** Aim for the *composition's* bounding box to be
  centred there, not merely each element individually. This was the main fault
  in the original set: marks measured out at centres of 51.5 to 59.
- **Safe area** x 8..112, y 8..64. Rendered width is 62% of the tile
  (max 168px), so 1 unit is roughly 1.4 CSS px at the largest size.
- **Stroke only, never fill.** `stroke="currentColor"` and `fill="none"` are
  set on the frame so the mark picks up its pillar colour. Stroke width 1.25.
- **Mirror what the motif implies.** If a shape fans, branches or stacks, make
  the offsets about y=36 equal — the old Monte Carlo fan used offsets of
  16/6/8/16 and read as a mistake.
- **Close the gaps.** Elements meant to connect should meet exactly, or be
  separated by a consistent gap (6px in this set). Several original glyphs had
  a connector stopping short of the node it pointed at.
- **Share one span.** Where a glyph has a baseline or axis, the content above
  it should span the same range, and any repeated group should be centred
  within it.
- `strokeDasharray="3 4"` marks inferred or projected elements; `"2 5"` is
  used for a ground/axis line.
- Pass `linecap="round" linejoin="round"` to the frame for chart-like shapes
  with acute vertices — a miter join spikes badly at small sizes.

## Checking a change

`node scripts/check-glyphs.mjs` parses every glyph's coordinates and reports
each composition's bounding box and its offset from centre.
