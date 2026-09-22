/* Valuation pages */
import React from "react";
import { Nav, Footer, Page, SubNav } from "../components/shared.jsx";

const VAL_ITEMS = [
  { label: "Valuation Support Services", path: "/valuation/service-coverage" },
  { label: "Valuation Delegation Function", path: "/valuation/valuation-delegation-function" },
];

export function ValuationLayout({ route, navigate, children }) {
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div className="section-layout">
        <SubNav items={VAL_ITEMS} route={route} navigate={navigate} label="Valuations" />
        <div className="content-body">{children}</div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}

export function ServiceCoverage({ route, navigate }) {
  const items = [
    { t: "Independent Asset Valuation", d: "We provide comprehensive valuation services for fund portfolios, covering a wide range of asset classes, including illiquid and complex instruments." },
    { t: "Fairness Opinions", d: "We deliver independent opinions on the fairness of transactions, supporting clients in strategic decisions and ensuring transparency for stakeholders." },
    { t: "Policy Review", d: "We define and review AIF valuation policies to ensure compliance with applicable regulations and valuation standards." },
    { t: "Valuation Training", d: "We deliver tailored training programs on valuation techniques and best practices, with a focus on alternative asset classes." },
    { t: "Model Control", d: "We validate valuation models used by third parties, ensuring their accuracy, robustness, and consistency with market practices." },
  ];
  return (
    <ValuationLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Valuation Support <em>Services</em></h1>
      </div>
      <p className="content-intro appear">
        Quantyx Advisors' Valuation Services provide independent and transparent assessments across a wide range of financial instruments and alternative asset classes. We support clients with both one-off engagements and recurring services, ensuring consistency, rigor, and full alignment with regulatory and industry best practices.
      </p>
      <div className="appear" style={{marginTop: 72}}>
      </div>
      <div className="numbered-list appear">
        {items.map((it, i) => (
          <div key={i} className="numbered-item">
            <span className="n-num"></span>
            <div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </ValuationLayout>
  );
}

export function ValuationDelegation({ route, navigate }) {
  const safeguards = [
    { t: "Valuation Governance and Oversight", d: "A formal governance framework, policies, procedures and internal controls, so every valuation is produced under the same independent, documented discipline." },
    { t: "Methodology Selection and Review", d: "We define, validate and periodically review the methodologies applied to each asset class, keeping them appropriate and consistent with prevailing market standards." },
    { t: "Documentation and Audit Support", d: "Complete documentation of processes, inputs and assumptions — evidencing every judgement for auditors, boards and supervisory inspections." },
  ];
  return (
    <ValuationLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Valuation Delegation <em>Function</em></h1>
      </div>
      <p className="content-intro appear">
        Quantyx Advisors' Valuation Delegation Function offers a fully independent and comprehensive solution for the full delegation of the GP's valuation function, ensuring robust, transparent, and compliant valuation processes. Acting as an external valuation function, we assume end-to-end responsibility for the valuation of fund assets — reporting on a recurring basis to the AIFM's Board of Directors — in full alignment with regulatory requirements and industry best practices.
      </p>

      <div className="appear" style={{ marginTop: 72 }}>
      </div>
      <div className="val-core appear">
        <div className="val-core-body">
          <span className="val-core-tag mono">CORE DELIVERABLE</span>
          <h2>Independent Asset <em>Valuation</em></h2>
          <p>
            We value fund assets across a broad range of alternative asset classes, including complex and illiquid instruments, applying sound, market-consistent methodologies.
          </p>
          <div className="val-core-chips">
            <span className="mono">ALL ASSET CLASSES</span>
            <span className="mono">COMPLEX &amp; ILLIQUID</span>
            <span className="mono">MARKET-CONSISTENT</span>
            <span className="mono">BOARD-LEVEL REPORTING</span>
          </div>
        </div>
        <div className="val-core-viz" aria-hidden="true">
          <svg viewBox="0 0 220 260" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M10 250h200" strokeDasharray="2 6" />
            <path d="M20 220h30v30H20zM60 190h30v60H60zM100 150h30v100h-30zM140 120h30v130h-30zM180 84h30v166h-30" />
            <path d="M20 196l40-26 40-30 40-24 40-28" strokeDasharray="4 4" />
            <circle cx="200" cy="88" r="5" />
            <path d="M10 60h100M10 40h60" strokeDasharray="3 5" />
          </svg>
        </div>
      </div>

      <div className="appear" style={{ marginTop: 88 }}>
      </div>
      <p className="val-rail-lede appear">
        Around that output sit the controls that make it defensible. These are not separate products, they are the activities we run continuously to ensure each valuation is correct, repeatable and aligned with market standards.
      </p>
      <div className="val-rail appear">
        {safeguards.map((s, i) => (
          <div key={i} className="val-node">
            <span className="val-node-dot"></span>
            <span className="val-node-num mono"></span>
            <div className="val-node-body">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </ValuationLayout>
  );
}
