import React from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import { ROUTES, REDIRECTS } from "./routes.js";
import { useSeo } from "./useSeo.js";

import { Home } from "./pages/home.jsx";
import { QRMPlatform } from "./pages/qrm.jsx";
import { RiskDelegation, RiskManagedService, RegulatoryReporting } from "./pages/risk.jsx";
import { ValuationDelegation, ServiceCoverage } from "./pages/valuation.jsx";
import {
  LPPortfolioMonitoring,
  LPNavReview,
  LPPreDeal,
  LPStrategicAllocation,
  LPWMReporting,
} from "./pages/lp.jsx";
import { Mission, WhoWeAre, People, Partners, Contact } from "./pages/about-contact.jsx";
import { News, Careers } from "./pages/content.jsx";
import NotFound from "./pages/not-found.jsx";
import { Nav } from "./components/shared.jsx";

const PAGES = {
  Home,
  QRMPlatform,
  RiskDelegation,
  RiskManagedService,
  RegulatoryReporting,
  ValuationDelegation,
  ServiceCoverage,
  LPPortfolioMonitoring,
  LPNavReview,
  LPPreDeal,
  LPStrategicAllocation,
  LPWMReporting,
  Mission,
  WhoWeAre,
  People,
  Partners,
  News,
  Careers,
  Contact,
};

/* The page components were written against a `route` / `navigate` prop pair.
   This adapter supplies both from the router so the page code stays untouched. */
function Screen({ component, path }) {
  const Page = PAGES[component];
  const navigate = useNavigate();
  useSeo(path);

  /* Home renders its nav as a transparent overlay on the dark hero, so the
     nav sits outside the page component. Every other page renders its own. */
  if (component === "Home") {
    return (
      <React.Fragment>
        <Nav route={path} navigate={navigate} />
        <Page navigate={navigate} />
      </React.Fragment>
    );
  }
  return <Page route={path} navigate={navigate} />;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <Routes>
      {ROUTES.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={<Screen component={r.component} path={r.path} />}
        />
      ))}

      {REDIRECTS.map((r) => (
        <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
      ))}

      {/* Trailing-slash variants resolve to the canonical path. */}
      <Route path="*" element={<CatchAll pathname={pathname} />} />
    </Routes>
  );
}

function CatchAll({ pathname }) {
  const trimmed = pathname.replace(/\/+$/, "");
  const known = ROUTES.some((r) => r.path === trimmed) || REDIRECTS.some((r) => r.from === trimmed);
  if (trimmed && known) return <Navigate to={trimmed} replace />;
  return <NotFoundScreen />;
}

function NotFoundScreen() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "Page not found — Quantyx Advisors";
  }, []);
  return <NotFound navigate={navigate} />;
}
