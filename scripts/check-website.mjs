// One compact production smoke test; no real form submissions or external services.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { pathToFileURL } from "node:url";
import { routes } from "../lib/locale.ts";

const base = "http://127.0.0.1:3210";
const site = "https://www.hg-systeme.de";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3210"], { stdio: "inherit", env: { ...process.env, HG_CONTACT_FORM_ENABLED: "false", HG_INSTAGRAM_ENABLED: "false" } });
const pages = Object.entries(routes).flatMap(([key, pair]) => ["de", "en"].map(lang => ({ key, lang, path: pair[lang] })));
const known = new Set(pages.map(p => p.path));
const normalize = p => p.replace(/\/$/, "") || "/";
let browser;
try {
  let ready = false;
  for (let i = 0; i < 40; i++) {
    try { if ((await fetch(base)).ok) { ready = true; break; } } catch {}
    await sleep(500);
  }
  assert(ready, "Next.js server did not start");
  for (const p of pages) {
    const response = await fetch(base + p.path, { redirect: "manual" });
    assert.equal(response.status, 200, p.path);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff", p.path);
    assert.equal(response.headers.get("x-frame-options"), "DENY", p.path);
    assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin", p.path);
    assert.match(response.headers.get("permissions-policy") || "", /camera=\(\)/, p.path);
    assert(!response.headers.get("x-robots-tag")?.includes("noindex"), p.path + " production header");
    const html = await response.text();
    assert(html.includes('lang="' + p.lang + '"'), p.path + " language");
    assert(html.includes('id="main"'), p.path + " main landmark");
    const robots = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => m[0]).find(t => /name="robots"/i.test(t));
    assert(robots, p.path + " robots metadata");
    assert.equal(/noindex/.test(robots), p.key === "thanks", p.path + " indexability");
    for (const match of html.matchAll(/<a\b[^>]*\bhref="(\/[^"]*)"[^>]*>/gi)) {
      const link = match[1];
      if (link.startsWith("//")) continue;
      const url = new URL(link, base);
      if (url.origin === base) assert(known.has(normalize(url.pathname)), p.path + " broken internal link " + link);
    }
    const other = routes[p.key][p.lang === "de" ? "en" : "de"];
    assert(html.includes('href="' + other + '"'), p.path + " language switch");
  }
  const robots = await (await fetch(base + "/robots.txt")).text();
  assert.match(robots, /Allow:\s*\//i);
  assert(robots.includes(site + "/sitemap.xml"));
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  for (const p of pages) {
    const url = site + p.path;
    assert.equal(sitemap.includes("<loc>" + url + "</loc>"), p.key !== "thanks", "sitemap " + p.path);
  }
  assert.equal((await fetch(base + "/hg-missing-check")).status, 404);
  assert.equal((await fetch(base + "/en/hg-missing-check")).status, 404);
  console.log("HTTP, metadata, internal links and sitemap: " + pages.length + " pages checked.");

  if (process.env.HG_BROWSER_MODULE) {
    const { chromium } = await import(pathToFileURL(process.env.HG_BROWSER_MODULE).href);
    browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--no-sandbox"] });
    const page = await browser.newPage();
    // The form and map stay inactive; block unexpected third-party requests.
    await page.route("**/*", route => route.request().url().startsWith(base + "/") ? route.continue() : route.abort());
    for (const width of [320, 390, 844, 1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const path of ["/", "/en", "/kontakt", "/en/contact", "/impressum", "/en/privacy", "/zertifikate", "/en/services"]) {
        await page.goto(base + path, { waitUntil: "domcontentloaded" });
        await page.evaluate(() => document.fonts.ready);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        assert(!overflow, path + " horizontal overflow at " + width + "px");
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + "/", { waitUntil: "domcontentloaded" });
    const mobile = page.locator("header details.mobile-nav");
    await mobile.locator("summary").click();
    assert(await mobile.locator("nav").isVisible(), "mobile menu");
    await mobile.locator('a[href="/kontakt"]').click();
    await page.waitForURL(base + "/kontakt");
    assert(await page.getByRole("heading", { name: "Kontaktformular", exact: true }).isVisible(), "contact page");
    console.log("Responsive overflow and mobile navigation checks passed.");
  }
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
