/* News, Careers, About, Contact pages */
import React from "react";
import { Nav, Footer, Page, BracketLabel, Arrow } from "../components/shared.jsx";

export function News({ route, navigate }) {
  const cats = ["All", "Regulatory", "Market Insights", "Company News", "Research"];
  const [active, setActive] = React.useState("All");

  const articles = [
    { cat: "Regulatory", date: "14 APR 2026", title: "AIFMD II: What the Final Technical Standards Mean for Risk Managers", excerpt: "A granular read-through of the final RTS, with emphasis on loan-origination funds and liquidity stress testing obligations.", viz: "grid" },
    { cat: "Market Insights", date: "02 APR 2026", title: "Private Debt Q1 2026: Default Rates Stabilize Across European Direct Lending", excerpt: "Our quarterly read of the 300+ private-debt portfolios we monitor — including sector-level migration trends.", viz: "chart" },
    { cat: "Company News", date: "20 MAR 2026", title: "Quantyx Opens Expanded Luxembourg Office to Serve Growing EU Mandate Base", excerpt: "New space at 21 Rue Glesener brings the Luxembourg team to 28 professionals as delegated mandates scale.", viz: "bars" },
    { cat: "Research", date: "11 MAR 2026", title: "Monte Carlo Meets Machine Learning: A Practical Framework for Illiquid Scenarios", excerpt: "White paper outlining a hybrid approach for long-dated private-equity portfolios with sparse observable data.", viz: "waves" },
    { cat: "Regulatory", date: "28 FEB 2026", title: "PRIIPs KID Updates: Preparing for the 2026 Refresh Cycle", excerpt: "A checklist for ManCos — including performance-scenario recalibration and narrative summary adjustments.", viz: "grid" },
    { cat: "Market Insights", date: "14 FEB 2026", title: "The Secondaries Boom: What LPs Should Expect From 2026 Pricing", excerpt: "Commentary on discount compression, GP-led continuation vehicles, and the growing role of independent NAV review.", viz: "chart" },
  ];

  const filtered = active === "All" ? articles : articles.filter(a => a.cat === active);

  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="appear" style={{marginBottom: 48, paddingBottom: 40, borderBottom: "1px solid var(--line)"}}>
            <BracketLabel>NEWS &amp; INSIGHTS</BracketLabel>
            <h1 style={{fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 400, letterSpacing: "-0.02em", margin: "20px 0 0", lineHeight: 1}}>
              Perspectives from the <em style={{fontStyle: "italic", color: "var(--forest-500)"}}>private-markets desk</em>
            </h1>
          </div>
          <div className="news-filters appear">
            {cats.map(c => (
              <button key={c} className={"chip" + (active === c ? " active" : "")} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="news-grid appear">
            {filtered.map((a, i) => (
              <article key={i} className="news-card">
                <div className="news-thumb">
                  <NewsViz kind={a.viz} />
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span className="cat">{a.cat.toUpperCase()}</span>
                    <span>{a.date}</span>
                  </div>
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                  <div className="read">READ MORE <Arrow /></div>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination">
            <button className="page-btn">←</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">→</button>
          </div>
        </div>
        <div style={{height: 120}}></div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}

export function NewsViz({ kind }) {
  if (kind === "grid") {
    return (
      <svg viewBox="0 0 320 200" style={{width: "100%", height: "100%"}}>
        <rect width="320" height="200" fill="#1F3A36"/>
        <g stroke="#8FA8A3" strokeWidth="0.5" opacity="0.3">
          {Array.from({length: 10}).map((_,i)=> <line key={"h"+i} x1="0" y1={i*20+10} x2="320" y2={i*20+10}/>)}
          {Array.from({length: 16}).map((_,i)=> <line key={"v"+i} x1={i*20+10} y1="0" x2={i*20+10} y2="200"/>)}
        </g>
        <rect x="80" y="70" width="160" height="60" fill="none" stroke="#C8E04B" strokeWidth="1"/>
        <text x="160" y="105" textAnchor="middle" fill="#C8E04B" fontFamily="'JetBrains Mono', monospace" fontSize="11" letterSpacing="0.2em">AIFMD · II</text>
      </svg>
    );
  }
  if (kind === "chart") {
    return (
      <svg viewBox="0 0 320 200" style={{width: "100%", height: "100%"}}>
        <rect width="320" height="200" fill="#152E2A"/>
        <g stroke="#8FA8A3" strokeWidth="0.4" opacity="0.25">
          {Array.from({length:5}).map((_,i)=> <line key={i} x1="20" y1={40+i*30} x2="300" y2={40+i*30}/>)}
        </g>
        <path d="M20,160 L60,140 L100,150 L140,110 L180,120 L220,80 L260,90 L300,50" stroke="#C8E04B" strokeWidth="1.5" fill="none"/>
        <path d="M20,160 L60,140 L100,150 L140,110 L180,120 L220,80 L260,90 L300,50 L300,200 L20,200 Z" fill="#C8E04B" opacity="0.1"/>
        <circle cx="300" cy="50" r="3" fill="#C8E04B"/>
      </svg>
    );
  }
  if (kind === "bars") {
    return (
      <svg viewBox="0 0 320 200" style={{width: "100%", height: "100%"}}>
        <rect width="320" height="200" fill="#1F3A36"/>
        {[80, 120, 95, 140, 110, 160, 130, 175].map((h, i) => (
          <rect key={i} x={30 + i * 35} y={200 - h} width="20" height={h} fill={i === 7 ? "#C8E04B" : "#8FA8A3"} opacity={i === 7 ? 1 : 0.6}/>
        ))}
      </svg>
    );
  }
  // waves
  return (
    <svg viewBox="0 0 320 200" style={{width: "100%", height: "100%"}}>
      <rect width="320" height="200" fill="#0F221F"/>
      {[0, 1, 2, 3, 4].map(i => (
        <path key={i} d={`M0,${100 + i * 5} Q80,${60 + i * 8} 160,${100 + i * 5} T320,${100 + i * 5}`}
          stroke="#C8E04B" strokeWidth="0.8" fill="none" opacity={0.6 - i * 0.1}/>
      ))}
    </svg>
  );
}

/* ---------- CAREERS ---------- */
export function Careers({ route, navigate }) {
  const jobs = [
    { title: "Risk Analyst", loc: "Milan", dept: "Risk Management", desc: "Join our core risk team supporting AIFM mandates across private equity and infrastructure." },
    { title: "Valuation Associate", loc: "Luxembourg", dept: "Valuation", desc: "Independent valuations of illiquid portfolios — direct reporting line to the Valuation Board." },
    { title: "Quantitative Developer", loc: "Milan", dept: "Technology", desc: "Build the next generation of the QRM platform: Python / TypeScript / cloud-native stack." },
    { title: "Regulatory Reporting Specialist", loc: "Luxembourg", dept: "Compliance", desc: "Annex IV, KID production, and ad-hoc regulatory engagements for pan-European clients." },
    { title: "Senior Risk Manager", loc: "Milan / Remote", dept: "Risk Management", desc: "Lead delegated risk mandates for flagship AIFM clients; shape methodology and team growth." },
  ];
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="appear">
            <h1 style={{fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 400, letterSpacing: "-0.02em", margin: "20px 0 24px", lineHeight: 1}}>
              Build a career <em style={{fontStyle: "italic", color: "var(--forest-500)"}}>where precision matters</em>
            </h1>
            <p style={{fontSize: 18, color: "var(--muted)", maxWidth: "70ch", margin: 0, lineHeight: 1.6}}>
              Joining Quantyx means becoming part of a dynamic, meritocratic, and highly specialized environment, where professionals develop distinctive expertise in Risk Management, Asset Valuation, and Private Markets Analytics.
            </p>
          </div>
        </div>

        {/* <div style={{background: "var(--forest-900)", color: "var(--paper)", padding: "0"}}>
          <div className="container" style={{padding: "80px 40px 0"}}>
            <BracketLabel dark>CULTURE · VALUES</BracketLabel>
            <h2 style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em", margin: "20px 0 0", maxWidth: "20ch"}}>
              Four values <em style={{fontStyle: "italic", color: "var(--sage-400)"}}>that define the firm</em>
            </h2>
          </div>
          <div className="container" style={{padding: "0 40px 80px"}}>
            <div className="value-pillars appear">
              {[
                { t: "Meritocracy", d: "Advancement based on the quality of the work — nothing else." },
                { t: "Specialization", d: "Deep expertise in chosen asset classes and methodologies, not surface breadth." },
                { t: "Innovation", d: "Proprietary technology, AI, and climate-risk integration as standard." },
                { t: "Independence", d: "Accountable only to our clients; no conflicting mandates." },
              ].map((p, i) => (
                <div key={i} className="pillar">
                  <div className="pillar-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1 9L7 15L17 3" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="mono" style={{fontSize: 10, color: "var(--sage-500)", letterSpacing: "0.14em"}}>0{i+1} · VALUE</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="container" style={{padding: "0px 40px"}}>
          <div className="appear" style={{marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24}}>
            <div>
              {/* <h2 style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 400, letterSpacing: "-0.02em", margin: "16px 0 0"}}>
                Current <em style={{fontStyle: "italic", color: "var(--forest-500)"}}>openings</em>
              </h2> */}
            </div>
            <div className="mono" style={{fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em"}}>
              {jobs.length} ROLES
            </div>
          </div>
          <div className="jobs-list appear">
            {jobs.map((j, i) => (
              <div key={i} className="job-row">
                <div>
                  <div className="job-title">{j.title}</div>
                  <div style={{color: "var(--muted)", fontSize: 14, marginTop: 6, maxWidth: "50ch"}}>{j.desc}</div>
                </div>
                <div className="job-meta">◉ {j.loc}</div>
                <div className="job-meta">{j.dept}</div>
                <div className="job-apply">
                  <button className="btn btn-ghost" style={{padding: "10px 20px"}}>Apply <Arrow /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}
