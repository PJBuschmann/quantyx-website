/* Module glyph registry.
   To swap a mark, replace the geometry inside its file — nothing else in the
   app needs to change. To add one, drop in a file and register it below; the
   `g` field on a module in pages/qrm.jsx refers to these keys. */
import React from "react";

import IngestGlyph from "./ingest.jsx";
import RepoGlyph from "./repo.jsx";
import WorkflowGlyph from "./workflow.jsx";
import UsersGlyph from "./users.jsx";
import MonitorGlyph from "./monitor.jsx";
import BenchmarkGlyph from "./benchmark.jsx";
import SimulateGlyph from "./simulate.jsx";
import RegulatoryGlyph from "./regulatory.jsx";
import AuditGlyph from "./audit.jsx";
import ReportingGlyph from "./reporting.jsx";
import CertifiedGlyph from "./certified.jsx";

export const GLYPHS = {
  ingest: IngestGlyph,
  repo: RepoGlyph,
  workflow: WorkflowGlyph,
  users: UsersGlyph,
  monitor: MonitorGlyph,
  benchmark: BenchmarkGlyph,
  simulate: SimulateGlyph,
  regulatory: RegulatoryGlyph,
  audit: AuditGlyph,
  certified: CertifiedGlyph,
  reporting: ReportingGlyph,
};

export const GLYPH_KINDS = Object.keys(GLYPHS);

/* Abstract geometric marks — one per module. Stroke inherits the pillar
   colour from the surrounding .qmod-viz. */
export function ModuleGlyph({ kind, ...props }) {
  const Glyph = GLYPHS[kind];
  if (!Glyph) {
    /* Loud in development, invisible in production, rather than the previous
       silent empty <svg> when a key did not match. */
    if (import.meta.env.DEV) console.warn(`ModuleGlyph: unknown kind "${kind}"`);
    return null;
  }
  return <Glyph {...props} />;
}

export { GLYPH_VIEWBOX, GLYPH_CENTER } from "./GlyphFrame.jsx";
export default ModuleGlyph;
