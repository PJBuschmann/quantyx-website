/* 404 — real not-found page rather than silently re-rendering Home,
   which would otherwise register as duplicate content. */
import React from "react";
import { Nav, Footer, Page, BracketLabel, Arrow } from "../components/shared.jsx";

export default function NotFound({ navigate }) {
  return (
    <Page routeKey="/404">
      <Nav route="/404" navigate={navigate} variant="light" />
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "180px 48px 160px",
          minHeight: "60vh",
        }}>
        <BracketLabel>ERROR · 404</BracketLabel>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(44px, 5.5vw, 72px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            margin: "20px 0 16px",
            lineHeight: 1,
          }}>
          Page <em style={{ fontStyle: "italic", color: "var(--forest-500)" }}>not found</em>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 16, margin: "0 0 40px", maxWidth: "46ch" }}>
          The page you are looking for has moved or no longer exists. Use the navigation above, or
          head back to the homepage.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to home <Arrow />
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
            Contact us <Arrow />
          </button>
        </div>
      </div>
      <Footer navigate={navigate} />
    </Page>
  );
}
