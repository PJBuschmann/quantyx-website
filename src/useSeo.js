import { useEffect } from "react";
import { SITE_URL, routeMeta } from "./routes.js";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/* Keeps <head> in sync with the active route. A crawler that executes JS
   (Google does) sees per-page title/description/canonical; link previews that
   do not execute JS fall back to the defaults in index.html. */
export function useSeo(path) {
  useEffect(() => {
    const meta = routeMeta(path);
    const title = meta?.title ?? "Quantyx Advisors";
    const description = meta?.description ?? "";
    const url = SITE_URL + (path === "/" ? "/" : path);

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [path]);
}
