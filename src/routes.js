/* Single source of truth for routes + per-page SEO metadata.
   Consumed by App.jsx (routing + <head> updates) and
   scripts/generate-sitemap.mjs (sitemap.xml). */

export const SITE_URL = "https://www.quantyx.com";
export const SITE_NAME = "Quantyx Advisors";

/* component: the exported name in src/pages/*
   priority:  sitemap weighting (0.0 – 1.0) */
export const ROUTES = [
  {
    path: "/",
    component: "Home",
    title: "Quantyx Advisors - Independent Risk Management & Valuation for Private Markets",
    description:
      "Independent risk management and valuation services for alternative investments. Offices in Milan and Luxembourg. Established 2009.",
    priority: 1.0,
  },
  {
    path: "/qrm",
    component: "QRMPlatform",
    title: "Quantyx RM Platform - Risk Analytics for Private Markets",
    description:
      "Quantyx RM is our risk management platform for alternative investments: look-through analytics, stress testing, liquidity and regulatory reporting in one system.",
    priority: 0.9,
  },

  /* --- Risk Management --- */
  {
    path: "/risk-management/risk-managed-service",
    component: "RiskManagedService",
    title: "Risk Support Service - Quantyx Advisors",
    description:
      "Risk measurement, monitoring and reporting support for private markets portfolios across all major alternative asset classes.",
    priority: 0.8,
  },
  {
    path: "/risk-management/risk-delegation-function",
    component: "RiskDelegation",
    title: "Risk Delegation Function - Quantyx Advisors",
    description:
      "Outsourced permanent risk management function for AIFMs and ManCos, delivered to AIFMD and CSSF expectations.",
    priority: 0.8,
  },
  {
    path: "/risk-management/regulatory-reporting",
    component: "RegulatoryReporting",
    title: "Regulatory Reporting - AIFMD, Solvency II, PRIIPs | Quantyx Advisors",
    description:
      "Production and filing support for AIFMD Annex IV, Solvency II TPT, PRIIPs KID and other regulatory reporting obligations.",
    priority: 0.8,
  },

  /* --- Valuation --- */
  {
    path: "/valuation/service-coverage",
    component: "ServiceCoverage",
    title: "Valuation Support Services - Quantyx Advisors",
    description:
      "Independent fair value measurement across private equity, private debt, real estate, infrastructure and illiquid instruments.",
    priority: 0.8,
  },

  /* --- Limited Partners --- */
  {
    path: "/valuation/valuation-delegation-function",
    component: "ValuationDelegation",
    title: "Valuation Delegation Function - Quantyx Advisors",
    description:
      "Independent external valuer under AIFMD Article 19, providing the delegated valuation function for alternative investment funds.",
    priority: 0.8,
  },
  {
    path: "/lp/portfolio-monitoring",
    component: "LPPortfolioMonitoring",
    title: "Portfolio Monitoring & Risk Analysis for LPs - Quantyx Advisors",
    description:
      "Look-through monitoring and risk analysis of private markets fund portfolios for institutional limited partners.",
    priority: 0.8,
  },
  {
    path: "/lp/nav-review",
    component: "LPNavReview",
    title: "NAV Review & Fair Value Adjustment - Quantyx Advisors",
    description:
      "Independent review of GP-reported NAVs and fair value adjustments for limited partners and wealth managers.",
    priority: 0.8,
  },
  {
    path: "/lp/pre-deal-analysis",
    component: "LPPreDeal",
    title: "Pre-Deal Analysis for Limited Partners - Quantyx Advisors",
    description:
      "Quantitative due diligence and pre-commitment analysis of private markets funds and co-investment opportunities.",
    priority: 0.7,
  },
  {
    path: "/lp/strategic-asset-allocation",
    component: "LPStrategicAllocation",
    title: "Strategic Asset Allocation for Private Markets - Quantyx Advisors",
    description:
      "Strategic asset allocation and commitment pacing models for portfolios with meaningful private markets exposure.",
    priority: 0.7,
  },
  {
    path: "/lp/wm-reporting",
    component: "LPWMReporting",
    title: "Client-Ready Reporting for Wealth Managers - Quantyx Advisors",
    description:
      "White-label private markets reporting for wealth managers, private banks and multi-family offices.",
    priority: 0.7,
  },

  /* --- About --- */
  {
    path: "/about/mission",
    component: "Mission",
    title: "Our Mission - Quantyx Advisors",
    description:
      "Why Quantyx exists: independent, rigorous, institutional-grade risk and valuation analysis for private markets.",
    priority: 0.6,
  },
  {
    path: "/about/who-we-are",
    component: "WhoWeAre",
    title: "Who We Are - Quantyx Advisors",
    description:
      "An independent firm founded in 2009, serving AIFMs, GPs, LPs and ManCos across the European private markets ecosystem.",
    priority: 0.6,
  },
  {
    path: "/about/people",
    component: "People",
    title: "People - Quantyx Advisors",
    description: "The team behind Quantyx Advisors in Milan and Luxembourg.",
    priority: 0.6,
  },
  {
    path: "/about/partners",
    component: "Partners",
    title: "Our Partners - Quantyx Advisors",
    description: "Technology and data partners supporting the Quantyx service offering.",
    priority: 0.5,
  },

  /* --- Company --- */
  {
    path: "/news",
    component: "News",
    title: "News & Insights - Quantyx Advisors",
    description:
      "Regulatory updates, market insights and research on risk management and valuation in private markets.",
    priority: 0.7,
  },
  {
    path: "/careers",
    component: "Careers",
    title: "Careers - Quantyx Advisors",
    description:
      "Open roles at Quantyx Advisors in Milan and Luxembourg for quantitative, risk and valuation professionals.",
    priority: 0.6,
  },
  {
    path: "/contact",
    component: "Contact",
    title: "Contact - Quantyx Advisors",
    description:
      "Get in touch with Quantyx Advisors in Milan or Luxembourg for new mandates, platform demos or general inquiries.",
    priority: 0.7,
  },
];

/* Legacy / convenience paths that redirect to a canonical route.
   Kept so section landing URLs and older prototype links resolve. */
export const REDIRECTS = [
  { from: "/risk-management", to: "/risk-management/risk-managed-service" },
  { from: "/risk-management/qrm-platform", to: "/qrm" },
  { from: "/valuation", to: "/valuation/service-coverage" },
  { from: "/lp", to: "/lp/portfolio-monitoring" },
  { from: "/lp/overview", to: "/lp/portfolio-monitoring" },
  { from: "/lp/risk-management", to: "/lp/portfolio-monitoring" },
  { from: "/lp/fair-value-adjustment", to: "/lp/nav-review" },
  { from: "/about", to: "/about/mission" },
];

/* Main navigation. `path` is the section landing page and follows the
   first sub-item; `base` is what the active state matches on. */
export const NAV_ITEMS = [
{ label: "Quantyx RM", path: "/qrm", base: "/qrm" ,
  sub: [
  { label: "Quantyx RM Platform", path: "/qrm" }]
},
{
  label: "Risk Management", path: "/risk-management/risk-managed-service", base: "/risk-management",
  sub: [
  { label: "Risk Support Service", path: "/risk-management/risk-managed-service" },
  { label: "Risk Delegation Function", path: "/risk-management/risk-delegation-function" },
  { label: "Regulatory Reporting", path: "/risk-management/regulatory-reporting" }]

},
{
  label: "Valuations", path: "/valuation/service-coverage", base: "/valuation",
  sub: [
  { label: "Valuation Support Services", path: "/valuation/service-coverage" },
  { label: "Valuation Delegation Function", path: "/valuation/valuation-delegation-function" }]

},
{
  label: "Limited Partners", path: "/lp/portfolio-monitoring", base: "/lp",
  sub: [
  { label: "Portfolio Monitoring & Risk Analysis", path: "/lp/portfolio-monitoring" },
  { label: "NAV Review & Fair Value Adjustment", path: "/lp/nav-review" },
  { label: "Pre-Deal Analysis", path: "/lp/pre-deal-analysis" },
  { label: "Strategic Asset Allocation", path: "/lp/strategic-asset-allocation" },
  { label: "WM Client-Ready Reporting", path: "/lp/wm-reporting" }]

},
{ label: "News", path: "/news", base: "/news" },
{ label: "Careers", path: "/careers", base: "/careers" },
{
  label: "About Us", path: "/about/mission", base: "/about",
  sub: [
  { label: "Mission Statement", path: "/about/mission" },
  { label: "Who We Are", path: "/about/who-we-are" },
  { label: "People", path: "/about/people" },
  { label: "Our Partners", path: "/about/partners" }]

}];

/* Footer sitemap, derived from NAV_ITEMS so the two cannot drift apart.
   Column order and labels follow the main navigation; every route in ROUTES
   is reachable from here except "/" (the footer logo). Verified by
   scripts/check-sitemap.mjs. */
const navSubs = (base) => NAV_ITEMS.find((i) => i.base === base)?.sub ?? [];

export const FOOTER_COLUMNS = [
  {
    title: "Quantyx RM",
    items: [{ label: "Quantyx RM Platform", path: "/qrm" }],
  },
  {
    title: "Risk Management",
    items: navSubs("/risk-management"),
  },
  { title: "Valuations", items: navSubs("/valuation") },
  { title: "Limited Partners", items: navSubs("/lp") },
  {
    title: "Company",
    items: [
      ...navSubs("/about"),
      { label: "News", path: "/news" },
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export const routeMeta = (path) => ROUTES.find((r) => r.path === path);
