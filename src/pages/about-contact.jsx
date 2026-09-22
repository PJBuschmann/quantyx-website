/* About & Contact pages */
import React from "react";
import { Nav, Footer, Page, BracketLabel, Arrow, SubNav } from "../components/shared.jsx";
import { CONTACT_ENDPOINT, CONTACT_EMAIL, OFFICES } from "../config.js";

const ABOUT_ITEMS = [
{ label: "Mission Statement", path: "/about/mission" },
{ label: "Who We Are", path: "/about/who-we-are" },
{ label: "People", path: "/about/people" },
{ label: "Our Partners", path: "/about/partners" }];


export function AboutLayout({ route, navigate, children }) {
  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div className="section-layout">
        <SubNav items={ABOUT_ITEMS} route={route} navigate={navigate} label="About Us" />
        <div className="content-body">{children}</div>
      </div>
      <Footer navigate={navigate} />
    </Page>);

}

export function Mission({ route, navigate }) {
  return (
    <AboutLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Mission <em>statement</em></h1>
      </div>
      <p className="content-intro appear" style={{ fontSize: 22, lineHeight: 1.55, color: "var(--forest-800)" }}>
        At Quantyx, our mission is to be a trusted strategic partner for Private Markets participants, providing independent risk management, valuation, and portfolio oversight solutions.
      </p>
      <p className="content-intro appear">
        By combining advanced quantitative and market expertise, regulatory insight, and proprietary technology, we deliver rigorous and tailored solutions that strengthen the reliability and robustness of our clients' core risk and valuation functions.
      </p>
      <div className="appear" style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
        {[
        { t: "Independent", d: "Structurally, operationally, financially." },
        { t: "Rigorous", d: "Methodologies audited against market standards." },
        { t: "Tailored", d: "Every mandate calibrated to the client." },
        { t: "Scalable", d: "Built on state-of-the-art technologies that scale with every mandate." }].
        map((v, i) =>
        <div key={i} style={{ background: "var(--paper)", padding: "40px 32px" }}>
            {/* <div className="mono" style={{ fontSize: 10, color: "var(--sage-500)", letterSpacing: "0.14em", marginBottom: 16 }}>{String(i + 1).padStart(2, "0")} · PRINCIPLE</div> */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 32, margin: "0 0 10px" }}>{v.t}</h3>
            <p style={{ color: "var(--muted)", margin: 0, fontSize: 14 }}>{v.d}</p>
          </div>
        )}
      </div>
    </AboutLayout>);

}

export function WhoWeAre({ route, navigate }) {
  return (
    <AboutLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Who <em>we are</em></h1>
      </div>
      <p className="content-intro appear">
        Quantyx is an independent firm founded in 2009 by Risk Management professionals with extensive experience in the Private Markets industry. <br /> With offices in Italy and Luxembourg and a strong European footprint, we support AIFM market participants throughout the entire investment lifecycle in Private Markets.
      </p>
      <p className="content-intro appear">
        Today Quantyx serves more than 170 top-tier financial institutions across 7 countries and monitors over 2000 funds.
      </p>
      <div className="appear" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
        {[
        { k: "Institutions served", v: "170+" },
        { k: "Countries", v: "7" },
        { k: "Founded", v: "2009" },
        { k: "Funds monitored", v: "2000+" }
      ].
        map((s) =>
        <div key={s.k} style={{ background: "var(--paper)", padding: "32px" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--sage-500)", letterSpacing: "0.14em", marginBottom: 12, textTransform: "uppercase" }}>{s.k}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, lineHeight: 1, color: "var(--forest-900)" }}>{s.v}</div>
          </div>
        )}
      </div>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 400, letterSpacing: "-0.02em", margin: "20px 0 24px", lineHeight: 1.05 }}>
            Locations <em style={{ fontStyle: "italic", color: "var(--sage-400)" }}></em>
          </h3>
      <div className="map-panel appear">
        <div>
          <div className="office-block">
            <h4>Milan</h4>
            <p>Via E. De Amicis 53</p>
            <p>20123 Milano (MI), Italy</p>
            <div className="office-coord">45.4581° N · 9.1778° E</div>
          </div>
        </div>
          <div className="office-block">
            <h4>Luxembourg</h4>
            <p>21 Rue Glesener</p>
            <p>L-1631 Luxembourg</p>
            <div className="office-coord">49.6027° N · 6.1305° E</div>
          </div>
        {/* <EuropeMap /> */}
      </div>
    </AboutLayout>);

}

export function EuropeMap() {
  // Simplified abstract Europe map with two office markers
  return (
    <div style={{ position: "relative", width: "100%", minHeight: 400 }}>
      <svg viewBox="0 0 400 400" style={{ width: "100%", height: "100%" }}>
        {/* grid */}
        <g stroke="#2A3D3A" strokeWidth="0.4">
          {Array.from({ length: 21 }).map((_, i) => <line key={"h" + i} x1="0" y1={i * 20} x2="400" y2={i * 20} />)}
          {Array.from({ length: 21 }).map((_, i) => <line key={"v" + i} x1={i * 20} y1="0" x2={i * 20} y2="400" />)}
        </g>
        {/* Europe abstract shape */}
        <path d="M80,80 L140,70 L200,60 L260,75 L300,90 L330,130 L340,180 L330,230 L300,270 L280,310 L240,330 L200,340 L160,330 L120,310 L100,280 L90,240 L80,200 L75,160 L78,120 Z"
        fill="#1F3A36" stroke="#8FA8A3" strokeWidth="0.8" opacity="0.5" />
        {/* UK */}
        <path d="M90,120 L110,115 L115,140 L100,150 Z" fill="#1F3A36" stroke="#8FA8A3" strokeWidth="0.8" opacity="0.4" />
        {/* Luxembourg marker */}
        <g>
          <circle cx="195" cy="175" r="22" fill="none" stroke="#C8E04B" strokeWidth="0.5" opacity="0.4">
            <animate attributeName="r" values="22;35;22" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="195" cy="175" r="5" fill="#C8E04B" />
          <line x1="195" y1="175" x2="260" y2="155" stroke="#C8E04B" strokeWidth="0.8" />
          <text x="265" y="152" fill="#C8E04B" fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="0.12em">LUXEMBOURG</text>
          <text x="265" y="165" fill="#8FA8A3" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.1em">49.60°N 6.13°E</text>
        </g>
        {/* Milan marker */}
        <g>
          <circle cx="218" cy="218" r="22" fill="none" stroke="#C8E04B" strokeWidth="0.5" opacity="0.4">
            <animate attributeName="r" values="22;35;22" dur="3s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="218" cy="218" r="5" fill="#C8E04B" />
          <line x1="218" y1="218" x2="290" y2="260" stroke="#C8E04B" strokeWidth="0.8" />
          <text x="295" y="258" fill="#C8E04B" fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="0.12em">MILAN</text>
          <text x="295" y="271" fill="#8FA8A3" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="0.1em">45.45°N 9.17°E</text>
        </g>
        {/* connecting line */}
        <line x1="195" y1="175" x2="218" y2="218" stroke="#C8E04B" strokeWidth="0.6" strokeDasharray="2 3" />
      </svg>
    </div>);

}

const PEOPLE = [
{ id: "rb", group: "partner", name: "Roberto Botter", initials: "RB", role: "Managing Partner · Founder", office: "Milan", areas: ["Risk Methodology", "AIFM Mandates"],
  bio: "Roberto co-founded Quantyx in 2009 after more than a decade leading risk functions at top European asset managers. His work shapes the firm's methodology for illiquid-asset risk modeling and its long-standing partnerships with AIFM clients across Italy and Luxembourg.",
  prev: "Risk Lead · European Asset Manager · 2001–2009" },
{ id: "ad", group: "partner", name: "Andrea Di Ciancia", initials: "AD", role: "Partner · Board Member", office: "Milan", areas: ["Private Equity", "Strategy"],
  bio: "Andrea oversees the firm's private equity and infrastructure practice. He brings two decades of buy-side experience and is responsible for the strategic direction of Quantyx's institutional client relationships.",
  prev: "Senior Investment Officer · European Pension Fund" },
{ id: "ml", group: "partner", name: "Michel Lempicki", initials: "ML", role: "Partner · Head of Luxembourg", office: "Luxembourg", areas: ["AIFMD", "Business Development"],
  bio: "Michel leads the Luxembourg office and serves as Head of Business Development for the firm's EU mandate base. He is a recognized voice in the Luxembourg AIFM ecosystem and a frequent speaker on regulatory matters.",
  prev: "Head of Risk · Luxembourg ManCo · 2008–2018" },
{ id: "mt", group: "partner", name: "Marilena Tucci", initials: "MT", role: "Partner · Operations", office: "Milan", areas: ["Operations", "Governance"],
  bio: "Marilena leads firmwide operations, governance, and the internal control framework that underpins every Quantyx mandate. She joined the partnership in 2014.",
  prev: "COO · Italian Asset Manager · 2005–2014" },
{ id: "ea", group: "partner", name: "Enrico Ascari", initials: "EA", role: "Partner · Board Member", office: "Milan", areas: ["Valuation", "Methodology"],
  bio: "Enrico chairs the Valuation Department, structurally separated from Risk Management and reporting independently to the Quantyx Board. His mandate is methodological rigor across all asset classes.",
  prev: "Head of Valuation · European Banking Group" },

{ id: "po", group: "manager", name: "Paolo Orlandi", initials: "PO", role: "Head of Business Development", office: "Milan", areas: ["Client Relations", "Mandates"],
  bio: "Paolo leads business development for the Italian market, working closely with AIFMs, institutional LPs and ManCos to design tailored risk and valuation engagements.",
  prev: "Senior Sales · European Asset Manager" },
{ id: "ef", group: "manager", name: "Elisa Feliciati", initials: "EF", role: "Head of Private Equity", office: "Milan", areas: ["LBO", "Growth Capital"],
  bio: "Elisa leads the Private Equity coverage team, with primary responsibility for LBO, growth, and special-situations mandates across the Quantyx client base.",
  prev: "Investment Director · European PE Fund" },
{ id: "dr", group: "manager", name: "Daniele Radice", initials: "DR", role: "Head of Private Debt", office: "Milan", areas: ["Direct Lending", "Distressed"],
  bio: "Daniele runs the Private Debt practice — covering direct lending, mezzanine, distressed and debt-for-control strategies for both GP and LP clients.",
  prev: "Credit Analyst · European Private Debt Fund" },
{ id: "lb", group: "manager", name: "Linda Barsotti", initials: "LB", role: "Head of Real Estate", office: "Milan", areas: ["Real Estate", "Desktop Valuation"],
  bio: "Linda leads the Real Estate team, with deep experience across core, value-add, opportunistic strategies and the firm's desktop valuation methodology.",
  prev: "RE Investment Manager · European REIM" },
{ id: "nr", group: "manager", name: "Noemi Ricchiuti", initials: "NR", role: "Head of Infrastructure", office: "Milan", areas: ["Infrastructure", "Energy Transition"],
  bio: "Noemi covers infrastructure mandates spanning equity and debt, natural resources, and the firm's growing climate-risk practice for energy-transition assets.",
  prev: "Infrastructure Analyst · European Infra Fund" },
{ id: "ff", group: "manager", name: "Federico Fort", initials: "FF", role: "Head of Fund of Funds", office: "Milan", areas: ["Primaries", "Secondaries"],
  bio: "Federico leads coverage of fund-of-funds mandates across primaries, secondaries and co-investments — including independent NAV review and LP-side oversight.",
  prev: "FoF Portfolio Manager · Italian Pension Fund" },
{ id: "as", group: "manager", name: "Angelo Soncini", initials: "AS", role: "Head of Valuation", office: "Milan", areas: ["Fair Value", "Model Control"],
  bio: "Angelo leads the day-to-day operations of the Valuation Department, with end-to-end responsibility for delegated valuation mandates and model control engagements.",
  prev: "Valuation Senior Manager · Big-4 Advisory" },
{ id: "fb", group: "manager", name: "Francesco Benedet", initials: "FB", role: "Head of LP Relations", office: "Milan", areas: ["LP Mandates", "NAV Review"],
  bio: "Francesco leads the firm's LP-facing practice, including independent NAV recalculation, fair value adjustment, and broader portfolio oversight services.",
  prev: "Investor Relations · European Sovereign LP" },
{ id: "ga", group: "manager", name: "Giammarco Agostini", initials: "GA", role: "Head of Valuation", office: "Milan", areas: ["AIFMD", "Regulatory Counsel"],
  bio: "Giammarco oversees the legal function, advising on regulatory matters across AIFMD, UCITS, MiFID and PRIIPs frameworks, and supporting the firm's delegation mandates.",
  prev: "Senior Legal Counsel · European AIFM" }];


export function PersonTile({ p, i, onClick }) {
  return (
    <button className="person-tile" onClick={onClick} style={{ animationDelay: `${i * 35}ms` }}>
      <div className="person-tile-top">
        <div className="person-tile-avatar">
          <span>{p.initials}</span>
          <svg className="person-tile-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
          </svg>
        </div>
        <div className="person-tile-meta">
          <span className="person-tile-tag">{p.group === "partner" ? "PARTNER" : "MANAGER"}</span>
          <span className="person-tile-office">◉ {p.office}</span>
        </div>
      </div>
      <div className="person-tile-body">
        <h4>{p.name}</h4>
        <div className="person-tile-role">{p.role}</div>
      </div>
      <div className="person-tile-foot">
        <span className="mono">VIEW BIO</span>
        <Arrow />
      </div>
    </button>
  );
}

export function People({ route, navigate }) {
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") setSelected(null);};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const partners = PEOPLE.filter((p) => p.group === "partner");
  const managers = PEOPLE.filter((p) => p.group === "manager");

  return (
    <AboutLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Our <em>people</em></h1>
      </div>
      <p className="content-intro appear">
        A senior team of {PEOPLE.length} dedicated professionals across Milan and Luxembourg — risk specialists, valuation experts, and quantitative practitioners. Click any card to read the full bio.
      </p>

      <div className="appear" style={{ marginTop: 56, marginBottom: 24, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <BracketLabel>PARTNERS · BOARD OF DIRECTORS</BracketLabel>
        
      </div>
      <div className="appear people-flex" style={{ marginBottom: 64 }}>
        {partners.map((p, i) =>
        <PersonTile key={p.id} p={p} i={i} onClick={() => setSelected(p)} />
        )}
      </div>

      <div className="appear" style={{ marginTop: 24, marginBottom: 24, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <BracketLabel>MANAGERS · FUNCTIONAL LEADS</BracketLabel>
        
      </div>
      <div className="appear people-flex">
        {managers.map((p, i) =>
        <PersonTile key={p.id} p={p} i={i} onClick={() => setSelected(p)} />
        )}
      </div>

      {/* Slide-in detail panel */}
      {selected &&
      <div className="bio-overlay" onClick={() => setSelected(null)}>
          <div className="bio-panel" onClick={(e) => e.stopPropagation()}>
            <button className="bio-close" onClick={() => setSelected(null)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>

            <div className="bio-header">
              <div className="bio-avatar">{selected.initials}</div>
              <div className="bio-tag mono">
                {selected.group === "partner" ? "PARTNER · BOARD" : "MANAGER · FUNCTIONAL LEAD"} · {selected.office.toUpperCase()}
              </div>
              <h2>{selected.name}</h2>
              <div className="bio-role mono">{selected.role}</div>
            </div>

            <div className="bio-body">
              <BracketLabel>BIOGRAPHY</BracketLabel>
              <p style={{ marginTop: 20 }}>{selected.bio}</p>

              <div className="bio-areas">
                <BracketLabel>AREAS OF EXPERTISE</BracketLabel>
                <div className="bio-areas-grid">
                  {selected.areas.map((a) =>
                <span key={a} className="bio-area-chip">{a}</span>
                )}
                </div>
              </div>

              <div className="bio-prev">
                <span className="mono" style={{ fontSize: 10, color: "var(--sage-500)", letterSpacing: "0.14em" }}>PREVIOUS</span>
                <div className="mono" style={{ marginTop: 8, fontSize: 12, color: "var(--forest-700)", letterSpacing: "0.06em" }}>
                  {selected.prev}
                </div>
              </div>
            </div>

            <div className="bio-foot">
              <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
                Contact via Quantyx <Arrow />
              </button>
            </div>
          </div>
        </div>
      }

      <style>{`
        .people-flex {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
          margin-bottom: 64px;
        }
        .person-tile {
          position: relative;
          text-align: left;
          background: var(--paper);
          border: 1px solid var(--line);
          padding: 20px 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 220px;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
          opacity: 0;
          animation: tile-rise 0.5s ease forwards;
        }
        @keyframes tile-rise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .person-tile::before {
          content: "";
          position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: var(--accent);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s ease;
        }
        .person-tile:hover::before { transform: scaleY(1); }
        .person-tile:hover {
          border-color: var(--forest-700);
          background: var(--bone);
          transform: translateY(-3px);
          box-shadow: 0 12px 24px -16px rgba(15, 34, 31, 0.25);
        }
        .person-tile-top {
          display: flex; align-items: center; justify-content: space-between;
        }
        .person-tile-avatar {
          position: relative;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--sage-200);
          color: var(--forest-700);
          font-family: "Cormorant Garamond", serif;
          font-size: 20px; font-weight: 500;
          display: flex; align-items: center; justify-content: center;
          letter-spacing: 0.02em;
          transition: background 0.25s ease;
        }
        .person-tile:hover .person-tile-avatar {
          background: var(--forest-700); color: var(--paper);
        }
        .person-tile-ring {
          position: absolute; inset: -6px;
          color: var(--sage-500);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.4s ease;
          transform: rotate(0);
        }
        .person-tile:hover .person-tile-ring {
          opacity: 1;
          transform: rotate(120deg);
        }
        .person-tile-meta {
          display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
        }
        .person-tile-tag {
          font-family: "JetBrains Mono", monospace;
          font-size: 9px; letter-spacing: 0.16em;
          color: var(--accent-dim);
          background: rgba(200, 224, 75, 0.15);
          padding: 3px 7px;
        }
        .person-tile:hover .person-tile-tag {
          background: var(--accent); color: var(--forest-900);
        }
        .person-tile-office {
          font-family: "JetBrains Mono", monospace;
          font-size: 9px; letter-spacing: 0.12em;
          color: var(--sage-500);
        }
        .person-tile-body { flex: 1; }
        .person-tile h4 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500; font-size: 22px;
          margin: 0 0 4px; line-height: 1.15; letter-spacing: -0.005em;
          color: var(--forest-900);
        }
        .person-tile-role {
          font-size: 13px; color: var(--muted); line-height: 1.4;
        }
        .person-tile-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid var(--line);
          font-size: 11px; letter-spacing: 0.14em;
          color: var(--forest-700);
          transition: border-color 0.2s;
        }
        .person-tile:hover .person-tile-foot { border-color: var(--forest-700); }
        .person-tile-foot .mono { font-size: 10px; }

        /* Bio overlay */
        .bio-overlay {
          position: fixed; inset: 0;
          background: rgba(15, 34, 31, 0.55);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex; justify-content: flex-end;
          animation: fade 0.25s ease;
        }
        @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
        .bio-panel {
          width: min(560px, 100vw);
          height: 100vh;
          background: var(--paper);
          overflow-y: auto;
          position: relative;
          animation: slide 0.35s cubic-bezier(.2,.8,.2,1);
          display: flex; flex-direction: column;
        }
        @keyframes slide { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .bio-close {
          position: absolute; top: 24px; right: 24px;
          width: 36px; height: 36px;
          border: 1px solid var(--line);
          background: var(--paper);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest-700);
          z-index: 2;
          transition: all 0.15s;
        }
        .bio-close:hover { background: var(--forest-700); color: var(--paper); border-color: var(--forest-700); }
        .bio-header {
          padding: 56px 48px 36px;
          background: var(--forest-900);
          color: var(--paper);
          position: relative;
          overflow: hidden;
        }
        .bio-header::after {
          content: "";
          position: absolute; right: -60px; bottom: -60px;
          width: 220px; height: 220px;
          border: 1px solid rgba(143, 168, 163, 0.2);
          border-radius: 50%;
        }
        .bio-header::before {
          content: "";
          position: absolute; right: -100px; bottom: -100px;
          width: 320px; height: 320px;
          border: 1px solid rgba(143, 168, 163, 0.1);
          border-radius: 50%;
        }
        .bio-avatar {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--forest-900);
          font-family: "Cormorant Garamond", serif;
          font-size: 34px; font-weight: 500;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          position: relative; z-index: 2;
        }
        .bio-tag {
          font-size: 10px; letter-spacing: 0.16em;
          color: var(--sage-400); margin-bottom: 16px;
          position: relative; z-index: 2;
        }
        .bio-header h2 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 400; font-size: 44px;
          margin: 0 0 8px; line-height: 1.05; letter-spacing: -0.02em;
          position: relative; z-index: 2;
        }
        .bio-role {
          font-size: 12px; color: var(--sage-300);
          letter-spacing: 0.06em; text-transform: uppercase;
          position: relative; z-index: 2;
        }
        .bio-body { padding: 40px 48px; flex: 1; }
        .bio-body p {
          color: var(--ink); font-size: 16px; line-height: 1.65;
          margin: 0;
        }
        .bio-areas { margin-top: 40px; }
        .bio-areas-grid {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;
        }
        .bio-area-chip {
          padding: 8px 14px; background: var(--bone);
          border: 1px solid var(--line);
          font-size: 12px; color: var(--forest-700);
          letter-spacing: 0.02em;
        }
        .bio-prev {
          margin-top: 40px; padding-top: 32px;
          border-top: 1px solid var(--line);
        }
        .bio-foot {
          padding: 24px 48px 40px;
          border-top: 1px solid var(--line);
          background: var(--bone);
        }
        @media (max-width: 640px) {
          .bio-panel { width: 100vw; }
          .bio-header { padding: 56px 24px 32px; }
          .bio-body, .bio-foot { padding-left: 24px; padding-right: 24px; }
          .bio-header h2 { font-size: 36px; }
        }
      `}</style>
    </AboutLayout>);
}

export function Partners({ route, navigate }) {
  const partners = ["MSCI", "WeatherTrade", "Microsoft", "Itinerari Previdenziali", "AIPB", "Nummus.info", "Nomisma", "Argus"];
  return (
    <AboutLayout route={route} navigate={navigate}>
      <div className="content-head appear">
        <h1>Our <em>partners</em></h1>
      </div>
      <p className="content-intro appear">
        Strategic relationships with data providers, technology partners, and industry bodies — extending the capabilities we deliver to every client.
      </p>
      <div className="partners-strip appear" style={{ marginTop: 64 }}>
        {partners.map((p, i) =>
        <div key={i} className="partner-logo">{p}</div>
        )}
      </div>
    </AboutLayout>);

}

/* ---------- CONTACT ---------- */
export function Contact({ route, navigate }) {
  const [form, setForm] = React.useState({ name: "", company: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setError("");

    /* No endpoint configured yet: hand the message to the visitor's mail
       client rather than silently discarding it. */
    if (!CONTACT_ENDPOINT) {
      const body = [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        `Subject: ${form.subject}`,
        "",
        form.message,
      ].filter(Boolean).join("\n");
      window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website inquiry — " + form.subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, page: "/contact", submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch (err) {
      setError(`We could not send your message. Please email us directly at ${CONTACT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  };
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <Page routeKey={route}>
      <Nav route={route} navigate={navigate} variant="light" />
      <div className="contact-layout">
        <div>
          <div className="appear" style={{ marginBottom: 48 }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 400, letterSpacing: "-0.02em", margin: "20px 0 16px", lineHeight: 1 }}>
              Let's <em style={{ fontStyle: "italic", color: "var(--forest-500)" }}>talk</em>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 16, margin: 0, maxWidth: "40ch" }}>
              For new mandates, platform demos, or general inquiries, reach either of our offices directly.
            </p>
          </div>

          {Object.entries(OFFICES).map(([key, o]) =>
          <div key={key} className="office-card appear">
            <div className="city">{o.city.toUpperCase()}</div>
            <h3>{o.name}</h3>
            <p className="addr">
              {o.address.map((line, i) =>
              <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
              )}
            </p>
            <div className="person-info">
              <div className="label">Contact</div>
              <div className="name">{o.contact.name}</div>
              <div className="role">{o.contact.role}</div>
              <div className="contact-line">
                <a href={`mailto:${o.contact.email}`}>{o.contact.email}</a>
              </div>
              {o.contact.phone &&
              <div className="contact-line">
                <a href={`tel:${o.contact.phone.replace(/\s/g, "")}`}>{o.contact.phone}</a>
              </div>
              }
            </div>
          </div>
          )}
        </div>

        <form className="form appear" onSubmit={submit}>
          <h3 style={{ marginTop: 16 }}>Get in touch</h3>
          {/* <p className="sub">We typically reply within one business day.</p> */}
          {sent ?
          <div style={{ padding: 40, background: "var(--forest-900)", color: "var(--paper)", textAlign: "center" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 12 }}>MESSAGE SENT</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, lineHeight: 1.2 }}>
                Thank you, {form.name || "there"}. <em style={{ color: "var(--sage-400)" }}>We'll be in touch</em>
              </div>
            </div> :

          <React.Fragment>
              <div className="field-row">
                <div className="field">
                  <label>Full Name *</label>
                  <input type="text" required value={form.name} onChange={upd("name")} />
                </div>
                <div className="field">
                  <label>Company *</label>
                  <input type="text" required value={form.company} onChange={upd("company")} />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Email *</label>
                  <input type="email" required value={form.email} onChange={upd("email")} />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" value={form.phone} onChange={upd("phone")} />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <select value={form.subject} onChange={upd("subject")}>
                  <option>General Inquiry</option>
                  <option>Risk Management</option>
                  <option>Valuation</option>
                  <option>QRM Platform</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="field">
                <label>Message *</label>
                <textarea required value={form.message} onChange={upd("message")} />
              </div>
              {error &&
              <div role="alert" style={{
                marginTop: 16, padding: "12px 14px", fontSize: 14,
                color: "var(--danger)", border: "1px solid var(--danger)"
              }}>{error}</div>
              }
              <button type="submit" className="btn btn-primary" style={{ marginTop: 16 }} disabled={sending}>
                {sending ? "Sending…" : "Send Message"} <Arrow />
              </button>
            </React.Fragment>
          }
        </form>
      </div>
      <Footer navigate={navigate} />
    </Page>);

}
