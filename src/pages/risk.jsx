/* Risk Management pages */
import React from "react";
import { Nav, Footer, Page, SubNav, BracketLabel } from "../components/shared.jsx";

const RM_ITEMS = [
  { label: "Risk Support Service", path: "/risk-management/risk-managed-service" },
  { label: "Risk Delegation Function", path: "/risk-management/risk-delegation-function" },
  { label: "Regulatory Reporting", path: "/risk-management/regulatory-reporting" },
];

const ASSET_CLASSES = [
  { t: "Private Equity", d: "LBO, Expansion & Growth, Turnaround, Special Situations & Deep Value" },
  { t: "Infrastructure", d: "Companies and projects, Equity and Debt, Natural resources, Agriculture, Windfarms" },
  { t: "Real Estate", d: "Core, Core+, Value Add, Opportunistic; Equity & Debt; Social Housing; Residential, Office, Retail" },
  { t: "Fund of Funds", d: "Primary and Secondaries; Pure indirect or co-investment" },
  { t: "Private Debt", d: "First Lien, Second Lien, Uni-tranche, Distressed & Debt for Control, Mezzanine" },
  { t: "Credit", d: "Direct Lending, Loans (Performing, UTP, NPL), Commercial, Factoring, Distressed" },
  { t: "Venture Capital", d: "Seed, Early stage, Round A & B, Late stage, Digital, LS-BioTech, B2B & B2C" },
];

export function RiskLayout({ route, navigate, children }) {
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div className="section-layout">
        <SubNav items={RM_ITEMS} route={route} navigate={navigate} label="Risk Management" />
        <div className="content-body">{children}</div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}

export function RiskManagedService({ route, navigate }) {
  /* Two levels of information, kept strictly apart: six activity areas, each
     with the capabilities that sit inside it. Wording is condensed from the
     source material; no activity has been added. */
  const areas = [
    {
      n: "01",
      t: "Fund Risk Assessment",
      d: "Fund-level risk measurement and assessment.",
      caps: ["Macro risk monitoring"],
    },
    {
      n: "02",
      t: "RMP Review",
      d: "Risk management policy and fund risk profile.",
      caps: ["Risk policies & marketing documents", "Fund risk profile"],
    },
    {
      n: "03",
      t: "Investment Restrictions",
      d: "Setup and ongoing monitoring.",
      caps: ["Risk limits & investment constraints", "Pre-trade risk analysis"],
    },
    {
      n: "04",
      t: "Asset Risk Assessment",
      d: "Asset-level risk measurement and assessment.",
      caps: ["Portfolio risk monitoring"],
    },
    {
      n: "05",
      t: "Market & Liquidity Risk",
      d: "Stress testing across market and liquidity risk.",
      caps: ["Market risk stress tests", "Liquidity stress tests"],
    },
    {
      n: "06",
      t: "Valuation Consistency",
      d: "Independent review of reported valuations.",
      caps: ["Appraisal adequacy"],
    },
  ];

  return (
    <RiskLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Risk Support <em>Service</em></h1>
      </div>
      <p className="content-intro appear">
        Assisting GPs, LPs and third-party Management Companies in performing their fund risk monitoring activities through a regulatory-driven approach, supported by a dedicated team with unique expertise.
      </p>

      <div className="rmf appear">
        <div className="rmf-head">
          <div className="rmf-title">
            <h2>
              Risk Management
            </h2>
          </div>
          <div className="rmf-meta">
            <div className="k">Six activity areas</div>
            <div className="v">Full coverage of the AIF risk regulatory framework</div>
          </div>
        </div>

        <div className="rmf-grid">
          {areas.map((a) => (
            <div key={a.n} className="rmf-cell">
              <div className="rmf-n">{a.n}</div>
              <div className="rmf-top">
                <h4>{a.t}</h4>
                <p className="rmf-desc">{a.d}</p>
              </div>
              <div className="rmf-caps">
                {a.caps.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RiskLayout>
  );
}

export function RiskDelegation({ route, navigate }) {
  const items = [
    { t: "Risk Management at AIFM and Fund Level", d: "We perform the risk function at AIFM level as well as at fund level — covering operational risks and, on request, ICT risk alongside portfolio risk." },
    { t: "Risk Framework Definition and Maintenance", d: "We support the design and ongoing update of policies, limits, and procedures aligned with the client's risk profile and applicable regulatory requirements." },
    { t: "Risk Identification, Measurement, and Monitoring", d: "We consistently monitor all key risk indicators applying advanced quantitative methodologies." },
    { t: "Independent and Transparent Reporting", d: "We deliver clear and detailed periodic reports to senior management and governing bodies, and relevant authorities if required." },
    { t: "Regulatory Support and Compliance", d: "We ensure continuous alignment with applicable regulations (e.g. AIFMD), reducing the risk of non-compliance." },
    { t: "Interaction with Internal and External Stakeholders", d: "We collaborate with internal functions, auditors, and supervisory authorities, ensuring consistency and completeness of control activities." },
  ];
  return (
    <RiskLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Risk Delegation <em>Function</em></h1>
      </div>
      <p className="content-intro appear">
        The Risk Delegation Function provides a comprehensive outsourcing service for risk management and control activities — performed at AIFM level as well as at fund level, including operational risks and, on request, ICT risk — designed to support AIFMs in meeting the highest regulatory and operational standards in line with AIFMD EU regulation.
      </p>
      <div className="appear" style={{marginTop: 72}}>
      </div>
      <div className="numbered-list appear">
        {items.map((it, i) => (
          <div key={i} className="numbered-item">
            <span></span>
            <div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </RiskLayout>
  );
}

export function RegulatoryReporting({ route, navigate }) {
  const items = [
    { t: "Ad-hoc Risk Policy Reviews", d: "We assess and review existing risk policies to ensure alignment with evolving regulatory requirements and best practices." },
    { t: "Annex IV Reporting (AIFMD)", d: "We manage the preparation and submission of Annex IV reports, ensuring completeness, data quality, and regulatory compliance." },
    { t: "KID (Key Information Document) Production", d: "We support the generation and periodic update of KIDs, ensuring clarity, accuracy, and adherence to PRIIPs regulation." },
    { t: "Executive Summary Reporting", d: "We provide concise and actionable reports for management, highlighting key risk metrics and regulatory developments." },
  ];
  return (
    <RiskLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Regulatory <em>Reporting</em></h1>
      </div>
      <p className="content-intro appear">
        Quantyx Advisors' Regulatory Reporting services support financial institutions in meeting their regulatory or business obligations through the accurate computation and reporting of risk indicators. We combine deep regulatory expertise with robust data management and analytical capabilities to ensure timely, reliable, and fully compliant reporting across multiple regulatory frameworks.
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
    </RiskLayout>
  );
}
