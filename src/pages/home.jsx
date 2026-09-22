/* Home Page */
import React from "react";
import { Footer, Page, BracketLabel, Arrow, HeroViz, AssetIcon } from "../components/shared.jsx";

const HOME_ASSETS = [
  { t: "Private Equity", d: "LBO, Expansion & Growth, Turnaround, Special Situations & Deep Value." },
  { t: "Infrastructure", d: "Companies & projects, equity & debt, natural resources, agriculture, windfarms." },
  { t: "Real Estate", d: "Core, Core+, Value-Add & Opportunistic; equity & debt; residential, office, retail." },
  { t: "Fund of Funds", d: "Primaries and secondaries; pure indirect or co-investment." },
  { t: "Private Debt", d: "First & Second Lien, Uni-tranche, Distressed & Debt-for-Control, Mezzanine." },
  { t: "Credit", d: "Direct lending, performing & non-performing loans, commercial, factoring, distressed." },
  { t: "Venture Capital", d: "Seed, early stage, Round A & B, late stage, digital, LS-BioTech, B2B & B2C." },
  { t: "Multi-strategy", d: "Multi-asset portfolios, multi-strategy funds, and hybrid structures." },
];


export function Home({ navigate }) {
  return (
    <Page routeKey="/">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" style={{ backgroundPosition: "center top", margin: "0px 0px -1px" }}></div>
        <div className="container hero-row">
          <div className="hero-content">
            <h1 style={{ fontFamily: "\"Cormorant Garamond\"" }}>
              Risk management <em>&amp;</em> valuations<br />
              for alternative <em>investments</em>
            </h1>
            <p className="hero-sub">
              Quantyx partners with GPs and LPs across European private markets, combining deep analytical expertise with proprietary technology, aligned with regulatory frameworks.
            </p>
            <div className="hero-links">
              {[
                { n: "01", label: "Quantyx RM", path: "/qrm" },
                { n: "02", label: "Risk Management", path: "/risk-management/risk-delegation-function" },
                { n: "03", label: "Valuations", path: "/valuation/valuation-delegation-function" },
                { n: "04", label: "Limited Partners", path: "/lp/portfolio-monitoring" }].
                map((item) =>
                  <button key={item.n} className="hero-link" onClick={() => navigate(item.path)}>
                    <span className="hero-link-num">{item.n}</span>
                    <span className="hero-link-label">{item.label}</span>
                    <Arrow size={13} />
                  </button>
                )}
            </div>
          </div>
          <div className="hero-viz"><HeroViz /></div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="value-strip appear">
            <div className="value-cell">
              <h3>Independent</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>Structurally, operationally and financially independent. <br />
                Valuation separated from risk management operations.</p>
            </div>
            <div className="value-cell">
              <h3>Innovation</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>Proprietary technology and quantitative methodologies built specifically for illiquid, data-scarce private-market portfolios.</p>
            </div>
            <div className="value-cell">
              <h3>Award-winning</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>An industry-recognised risk and valuation framework, certified to ISO/IEC 27001 for Information Security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET CLASSES */}
      <section className="section">
        <div className="container">
          <div className="section-head appear">
            <div>
              <h2 className="section-title" style={{ marginTop: 0 }}>
                Full coverage of <em>private asset classes</em>
              </h2>
            </div>
            <p className="section-intro">
              Dedicated teams with deep methodological expertise across the full spectrum of private market strategies.
            </p>
          </div>
          <div className="home-assets appear">
            {HOME_ASSETS.map((a, i) =>
              <div key={a.t} className="ac-card">
                <div className="ac-icon"><AssetIcon kind={a.t} size={46} /></div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container">
          <div className="appear">
          </div>
          <div className="stats-grid appear">
            <div className="stat">
              <div className="stat-label">Founded</div>
              <div className="stat-value">2009</div>
            </div>
            <div className="stat">
              <div className="stat-label">Locations</div>
              <div className="stat-value">2</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--sage-400)", marginTop: 8, letterSpacing: "0.1em" }}>ITALY · LUXEMBOURG</div>
            </div>
            <div className="stat">
              <div className="stat-label">Institutions Served</div>
              <div className="stat-value">170+</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--sage-400)", marginTop: 8, letterSpacing: "0.1em" }}>ACROSS 7 COUNTRIES</div>
            </div>
            <div className="stat">
              <div className="stat-label">Monitored Funds</div>
              <div className="stat-value">2000+</div>
            </div>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </Page>);

}

window.Home = Home;