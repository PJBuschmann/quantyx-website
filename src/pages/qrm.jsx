/* QRM — flagship platform page (standalone top-level section) */
import React from "react";
import { Nav, Footer, Page } from "../components/shared.jsx";
import { ModuleGlyph } from "../components/glyphs/index.jsx";

export function QRMLayout({ route, navigate, children }) {
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      {children}
      <Footer navigate={navigate} />
    </Page>
  );
}

/* small reusable highlight callout */
export function QRMHighlight({ tag, keywords, title, children, dark }) {
  return (
    <div className={"highlight appear" + (dark ? " dark" : "")}>
      <div>
        <span className="tag">{tag}</span>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 6 }}>
          {keywords.map((k) => (
            <div key={k} className="mono qrm-kw">{k}</div>
          ))}
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function QRMModules({ pillars, modules }) {
  return (
    <div className="qmod-stack">
      {pillars.map((pillar) => (
        <section key={pillar.id} className="qmod-band appear" style={{ "--c": pillar.c, "--tint": pillar.tint }}>
          <header className="qmod-band-head">
            <span className="qmod-band-id">{pillar.id}</span>
            <h3 className="qmod-band-label">{pillar.label}</h3>
            <span className="qmod-band-rule"></span>
            {/* <span className="qmod-band-count">{String(modules.filter((m) => m.p === pillar.id).length).padStart(2, "0")} MODULES</span> */}
          </header>
          <div className="qmod-grid">
            {modules.filter((m) => m.p === pillar.id).map((m) => (
              <article key={m.n} className="qmod">
                <div className="qmod-viz"><ModuleGlyph kind={m.g} /></div>
                <div className="qmod-body">
                  <h4>{m.t}</h4>
                  <p>{m.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function QRMPlatform({ route, navigate }) {
  const pillars = [
    { id: "DATA", label: "Data Layer", c: "#1F3A36", tint: "#E3ECE8" },
    { id: "ANALYTICS", label: "Risk Analytics", c: "#6E7F2A", tint: "#EDF2D8" },
    { id: "GOVERNANCE", label: "Governance & Output", c: "#42606D", tint: "#E4EBEE" },
  ];
  const modules = [
    { p: "DATA", n: "01", g: "ingest", t: "AI-driven Data Collection", d: "Data integration from Administrators, GPs and Market Data providers, with AI-assisted extraction, mapping and validation." },
    { p: "DATA", n: "02", g: "repo", t: "Data Repository", d: "A client-dedicated secure repository for portfolio data, documents and analysis, with full traceability and version control." },
    { p: "DATA", n: "03", g: "workflow", t: "Workflow & Document Management", d: "Structured orchestration of risk processes, approvals and review cycles across teams and mandates. With AI-powered document management fully integrated in QRM." },
    { p: "ANALYTICS", n: "04", g: "monitor", t: "Fund & Asset Risk Monitoring", d: "Identification, measurement and continuous assessment of risk at both fund and asset level, in compliance with AIFMD rules and market best-practices." },
    { p: "ANALYTICS", n: "05", g: "benchmark", t: "Peer Groups & Benchmarking", d: "Performance comparability across strategies and geographies through QRM-developed benchmarks." },
    { p: "ANALYTICS", n: "06", g: "simulate", t: "Performance Simulation Model (PSM)", d: "Monte Carlo simulation of expected portfolio returns at maturity — a forward-looking, probabilistic view supporting investment decisions and stress-test requirements." },
    { p: "ANALYTICS", n: "07", g: "regulatory", t: "Risk & Performance Analytics", d: "Computation of regulatory risk indicators for Annex IV and other supervisory frameworks." },
    { p: "GOVERNANCE", n: "08", g: "audit", t: "Audit Trail", d: "Certified, immutable logging of every data point and calculation for complete accountability." },
    { p: "GOVERNANCE", n: "09", g: "reporting", t: "Reporting Automation & Exports", d: "Automated, fully customizable reports and data exports in any required format." },
    { p: "GOVERNANCE", n: "10", g: "certified", t: "ISO/IEC 27001 Information Security", d: "A DORA compliant platform operated under an ISO/IEC 27001 certified information security management system governing access, encryption, retention and service continuity." },
  ];

  return (
    <QRMLayout route={route} navigate={navigate}>
      {/* DARK HERO */}
      <section className="qrm-hero">
        <div className="qrm-hero-grid"></div>
        <div className="container qrm-hero-inner appear">
          <h1>The QRM <em>Platform</em></h1>
          <p className="qrm-hero-sub">
            One integrated platform for risk monitoring and management across private markets portfolios — centralizing <span className="hl">data</span>, <span className="hl">documentation</span> and <span className="hl">analytics</span> within a single secure system, engineered for traceability and data integrity.
          </p>
        </div>
      </section>

      {/* INTRO + MODULES + HIGHLIGHTS */}
      <section className="section section-cream">
        <div className="container qrm-body">
          <div className="qrm-lede appear">
            <p>
              QRM provides a <span className="hl">structured and integrated approach</span> to risk monitoring across alternative asset portfolios. Through advanced data-integration tools and AI-driven collection and calculation processes, the platform produces <span className="hl">performance and risk analyses</span>, enabling comparability across funds, strategies and geographies.
            </p>
            <p>
              Analysis tools allow for the identification, measurement and continuous assessment of risk at both fund and asset level. All within an environment built to the highest standards of security and traceability.
            </p>
          </div>

          <div className="appear" style={{ marginTop: 40, marginBottom: 8 }}>
          </div>
          <div className="appear" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {[
              { n: "01", t: "Software as a Service", d: "The platform is licensed and operated by your own team, with access to every module, data and reports." },
              { n: "02", t: "Managed Service", d: "The platform together with the risk service delivered by our risk team. Analysis, monitoring and reporting run by Quantyx alongside the technology." },
            ].map((o) => (
              <div key={o.n} style={{ background: "var(--paper)", padding: "40px 32px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 30, margin: "0 0 12px" }}>{o.t}</h3>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: 14, lineHeight: 1.6 }}>{o.d}</p>
              </div>
            ))}
          </div>

          <div className="appear" style={{ marginTop: 88, marginBottom: 24 }}>
          </div>

          <QRMModules pillars={pillars} modules={modules} />

          <div className="appear" style={{ marginTop: 88, marginBottom: 8 }}>
          </div>
{/* 
          <QRMHighlight
            tag="PSM · HIGHLIGHT"
            keywords={["MONTE CARLO", "FORWARD-LOOKING", "PROBABILISTIC"]}
            title="Performance Simulation Model (PSM)">
            The Performance Simulation Model estimates expected portfolio returns at maturity through Monte Carlo simulation. It analyzes the evolution of expected returns, providing a forward-looking and probabilistic view to support investment decisions — while addressing regulators' demands (Market &amp; Liquidity Stress Test).
          </QRMHighlight>

          <QRMHighlight
            dark
            tag="DATA · HIGHLIGHT"
            keywords={["AUTOMATED", "VALIDATED", "AUDITABLE"]}
            title="AI-Driven Data Collection">
            Proprietary extraction pipelines read administrator statements, capital-account notices and market feeds, then map and reconcile them automatically. Every figure carries its source and validation status — so analysts spend their time on judgement, not data entry.
          </QRMHighlight>

          <QRMHighlight
            tag="BENCHMARKING · HIGHLIGHT"
            keywords={["MULTI-STRATEGY", "CROSS-GEOGRAPHY", "TIME-SERIES"]}
            title="Peer Groups & Benchmarking Engine">
            QRM-developed peer groups and benchmarks make managed products genuinely comparable — across multiple strategies and geographies, and consistently over time — giving risk teams and investors an objective frame of reference.
          </QRMHighlight>

          <div className="benefits-grid appear" style={{ marginTop: 56 }}>
            {[
              "One smart repository for your entire portfolio.",
              "Certified safety and traceability for all your data and analysis.",
              "Performance comparability across strategies and geographies, over time.",
            ].map((b, i) => (
              <div key={i} className="benefit-card">
                <span className="b-num">{String(i + 1).padStart(2, "0")} / BENEFIT</span>
                <p>{b}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </QRMLayout>
  );
}
