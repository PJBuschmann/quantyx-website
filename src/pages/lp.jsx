/* Limited Partners — services section */
import React from "react";
import { Nav, Footer, Page, SubNav } from "../components/shared.jsx";

const LP_ITEMS = [
  { label: "Portfolio Monitoring & Risk Analysis", path: "/lp/portfolio-monitoring" },
  { label: "NAV Review & Fair Value Adjustment", path: "/lp/nav-review" },
  { label: "Pre-Deal Analysis", path: "/lp/pre-deal-analysis" },
  { label: "Strategic Asset Allocation", path: "/lp/strategic-asset-allocation" },
  { label: "WM Client-Ready Reporting", path: "/lp/wm-reporting" },
];

export function LPLayout({ route, navigate, children }) {
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div className="section-layout">
        <SubNav items={LP_ITEMS} route={route} navigate={navigate} label="Limited Partners" />
        <div className="content-body">{children}</div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}

/* generic "what we offer" list page */
export function LPOfferList({ route, navigate, idx, kicker, title, intro, lead, items, tag }) {
  return (
    <LPLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>{title}</h1>
      </div>
      <p className="content-intro appear">{intro}</p>
      <div className="appear" style={{ marginTop: 72 }}>
      </div>
      {lead && <p className="content-intro appear" style={{ marginTop: 20 }}>{lead}</p>}
      <div className="numbered-list appear">
        {items.map((it, i) => (
          <div key={i} className="numbered-item">
            <span className="n-num"></span>
            <div>
              <h4>{it.t}</h4>
              {it.d && <p>{it.d}</p>}
            </div>
          </div>
        ))}
      </div>
    </LPLayout>
  );
}

export function LPPortfolioMonitoring({ route, navigate }) {
  return (
    <LPOfferList
      route={route} navigate={navigate}
      idx="01"
      title={<>Portfolio Monitoring <em>&amp; Risk Analysis</em></>}
      intro="A continuous, data-driven view of an LP's private-markets exposure — consolidating positions across funds and vintages into a single decision-ready picture, with a dedicated bottom-up risk model layered on top."
      kicker="WHAT WE OFFER"
      items={[
        { t: "Portfolio Analytics", d: "Consolidated performance, returns and attribution across funds, strategies and vintages." },
        { t: "Position Keeping", d: "Accurate, up-to-date records of commitments, drawdowns, distributions and residual value." },
        { t: "Exposure Analysis", d: "Look-through exposure by strategy, sector, geography and currency across the whole portfolio." },
        { t: "Recurring Risk Assessment", d: "Portfolios' recurring risk assessment applying a dedicated bottom-up risk model based on quantitative, back-tested risk factors and underlying KRIs." },
        { t: "Cashflow Estimation", d: "Forward cashflow estimation at AIF and portfolio level, based on Monte Carlo simulation and proprietary / third-party data sets." },
      ]}
    />
  );
}

/* two-track split: paired workstreams */
export function LPSplitTracks({ tracks }) {
  return (
    <div className="lp-split appear">
      {tracks.map((tr, ti) => (
        <section key={ti} className="lp-track">
          <header className="lp-track-head">
            <span className="lp-track-key mono">{tr.key}</span>
            <h3>{tr.title}</h3>
            <p>{tr.lead}</p>
          </header>
          <ol className="lp-track-list">
            {tr.items.map((it, i) => (
              <li key={i}>
                <span className="lp-track-num mono"></span>
                <div>
                  <h4>{it.t}</h4>
                  <p>{it.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export function LPNavReview({ route, navigate }) {
  return (
    <LPLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>NAV Review <em>&amp; Fair Value Adjustment</em></h1>
      </div>
      <p className="content-intro appear">
        An additional, independent layer of oversight on reported NAVs — and, where reported values may not reflect realizable value, a quantitative framework to size the gap.
      </p>
      <div className="appear" style={{ marginTop: 72 }}>
      </div>
      <LPSplitTracks
        tracks={[
          {
            key: "A",
            title: "NAV Review",
            lead: "Testing whether the reported NAV has been produced correctly, consistently and in line with standards.",
            items: [
              { t: "Valuation Policy Assessment", d: "Assessment of GPs' valuation policy and methodology against regulatory and market standards." },
              { t: "Consistency Review", d: "Verification of the consistency of valuation processes and results across the different NAV life cycles." },
              { t: "Independent Reperformance", d: "Independent reperformance of each single investment to validate reported fair values." },
            ],
          },
          {
            key: "B",
            title: "Fair Value Adjustment",
            lead: "Sizing the distance between the reported value and the value realizable in current market conditions.",
            items: [
              { t: "Liquidity Haircuts Estimation", d: "Estimation of liquidity-driven adjustments reflecting exit constraints and market conditions." },
              { t: "Secondary Market Assessments", d: "Assessment of indicative secondary-market pricing and discount dynamics." },
              { t: "Fairness Opinions", d: "Independent fairness opinions, with clear, defensible documentation." },
            ],
          },
        ]}
      />
    </LPLayout>
  );
}

export function LPPreDeal({ route, navigate }) {
  return (
    <LPOfferList
      route={route} navigate={navigate}
      idx="03"
      title={<>Pre-Deal <em>Analysis</em></>}
      intro="Rigorous, independent assessment of new investment opportunities — before capital is committed — combining quantitative frameworks with deep qualitative judgement."
      kicker="WHAT WE OFFER"
      items={[
        { t: "Investment Opportunity Assessment", d: "Quantitative and qualitative frameworks — risk profiles and cashflow estimations, GPs' historical track records, waterfall distribution analysis, and more." },
        { t: "Global Portfolio Impact Assessment", d: "Evaluation of how a prospective commitment reshapes overall exposure, risk and liquidity across the existing portfolio." },
      ]}
    />
  );
}

export function LPStrategicAllocation({ route, navigate }) {
  return (
    <LPOfferList
      route={route} navigate={navigate}
      idx="04"
      title={<>Strategic Asset <em>Allocation</em></>}
      intro="From a blank sheet to a fully-paced programme — we help LPs build and steer private-markets allocations aligned to their objectives and liquidity profile."
      kicker="WHAT WE OFFER"
      items={[
        { t: "Portfolio Construction", d: "Design of target allocations across strategy, geography and vintage to meet return and risk objectives." },
        { t: "Commitment Pacing", d: "Multi-year commitment schedules that build and maintain the target exposure efficiently." },
        { t: "Liquidity Planning", d: "Projection and management of net cashflows to keep the programme self-funding and resilient." },
        { t: "Portfolio Growth Roadmap", d: "A forward roadmap for scaling the allocation as the programme matures." },
      ]}
    />
  );
}

export function LPWMReporting({ route, navigate }) {
  return (
    <LPOfferList
      route={route} navigate={navigate}
      idx="05" tag="NEW"
      title={<>WM Client-Ready <em>Reporting</em></>}
      intro="Reporting on private-market holdings that wealth managers and private banks can put straight in front of their own end clients — accurate, look-through and presentation-ready."
      kicker="WHAT WE OFFER"
      items={[
        { t: "Client-Ready Reporting Packs", d: "Periodic reports on private-market positions, performance and cashflows, written and laid out for the end investor rather than the analyst." },
        { t: "Look-Through Consolidation", d: "Private-market exposure consolidated alongside liquid holdings, with look-through by strategy, sector, geography and currency." },
        { t: "Valuation & Risk Transparency", d: "Reported NAVs complemented by independent valuation checks and risk indicators, so advisers can explain the numbers with confidence." },
        { t: "Branding & Distribution", d: "Fully customizable templates in the institution's own visual identity, delivered on a recurring schedule in any required format." },
      ]}
    />
  );
}
