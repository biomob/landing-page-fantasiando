// Auditoria WCAG 2.1 AA automatizada (complementa testes manuais com leitor de tela).
// Uso: node design/a11y/audit.mjs [baseUrl]   (padrão http://localhost:3200)
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const BASE = process.argv[2] ?? "http://localhost:3200";
const routes = ["/", "/colecao", "/colecao?busca=tule", "/produto/vestido-estrela-dourada", "/produto/vestido-coral-verao", "/favoritos", "/sobre", "/contato", "/nao-existe"];
const viewports = [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }];
const themes = ["light", "dark"];

// Roda dentro da página: devolve as violações encontradas.
function auditPage() {
  const issues = [];
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    return { r, g, b, a };
  };
  const blend = (top, bottom) => {
    const a = top.a + bottom.a * (1 - top.a);
    if (!a) return { r: 0, g: 0, b: 0, a: 0 };
    return { r: (top.r * top.a + bottom.r * bottom.a * (1 - top.a)) / a, g: (top.g * top.a + bottom.g * bottom.a * (1 - top.a)) / a, b: (top.b * top.a + bottom.b * bottom.a * (1 - top.a)) / a, a };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const label = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls = typeof el.className === "string" ? `.${el.className.split(" ")[0].replace(/^.*?__/, "").replace(/__.*/, "")}` : "";
    return `${el.tagName.toLowerCase()}${id}${cls} "${(el.innerText || el.getAttribute("aria-label") || el.getAttribute("alt") || "").trim().slice(0, 40)}"`;
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && Number(cs.opacity) > 0 && !el.closest("[aria-hidden='true'], [vw], .vw-plugin-top-wrapper") && !(cs.position === "absolute" && cs.clip === "rect(0px, 0px, 0px, 0px)");
  };
  // Fundo efetivo: compõe as cores de fundo dos ancestrais; marca quando há imagem/foto por trás.
  const background = (el) => {
    let color = { r: 0, g: 0, b: 0, a: 0 };
    let overImage = false;
    for (let node = el; node && node.nodeType === 1; node = node.parentElement) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage.includes("url(")) overImage = true;
      const bg = parse(cs.backgroundColor);
      if (bg && bg.a > 0) {
        color = blend(color, bg);
        if (color.a >= 0.99) break;
      }
    }
    return { color: blend(color, { r: 255, g: 255, b: 255, a: 1 }), overImage };
  };

  // 1.4.3 contraste de texto + tamanho de fonte
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const text = walker.currentNode.textContent.trim();
    const el = walker.currentNode.parentElement;
    if (!text || !el || seen.has(el) || !visible(el)) continue;
    seen.add(el);
    const cs = getComputedStyle(el);
    const fg = parse(cs.color);
    const { color: bg, overImage } = background(el);
    const size = parseFloat(cs.fontSize);
    const weight = Number(cs.fontWeight);
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    const r = ratio(blend(fg, bg), bg);
    if (r < need) issues.push({ rule: overImage ? "1.4.3 contraste (sobre imagem, conferir)" : "1.4.3 contraste", el: label(el), detail: `${r.toFixed(2)}:1 < ${need}:1 · ${size}px/${weight} · texto ${cs.color} fundo rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})` });
    if (size < 12) issues.push({ rule: "fonte < 12px", el: label(el), detail: `${size}px` });
  }

  // Interativos: nome acessível, área de toque, contraste de borda dos controles
  for (const el of document.querySelectorAll("a[href], button, input:not([type=hidden]), select, textarea, summary, [role=button], [role=switch]")) {
    if (!visible(el) && !(el.matches("input[type=checkbox], input[type=radio]") && visible(el.parentElement))) continue;
    const name = (el.getAttribute("aria-label") || el.getAttribute("aria-labelledby") || el.innerText || el.getAttribute("title") || el.querySelector("img[alt]")?.getAttribute("alt") || (el.id && document.querySelector(`label[for="${el.id}"]`)?.innerText) || el.closest("label")?.innerText || el.getAttribute("placeholder") || "").trim();
    if (!name) issues.push({ rule: "4.1.2 sem nome acessível", el: label(el), detail: el.outerHTML.slice(0, 120) });
    const r = (el.matches("input[type=checkbox], input[type=radio]") && el.closest("label") ? el.closest("label") : el).getBoundingClientRect();
    const inline = getComputedStyle(el).display === "inline" && el.closest("p, li, nav[aria-label='Você está em']");
    if (!inline && (r.width < 24 || r.height < 24)) issues.push({ rule: "2.5.8 alvo < 24px", el: label(el), detail: `${Math.round(r.width)}×${Math.round(r.height)}` });
    else if (!inline && (r.width < 44 || r.height < 44) && el.matches("button, [role=button], [role=switch], input[type=checkbox], input[type=radio]")) issues.push({ rule: "2.5.5 alvo < 44px (AAA, recomendado)", el: label(el), detail: `${Math.round(r.width)}×${Math.round(r.height)}` });
    if (el.matches("input:not([type=checkbox]):not([type=radio]), select, textarea")) {
      const host = el.closest("form, label") && getComputedStyle(el).borderTopWidth === "0px" ? el.closest("form, label") : el;
      const cs = getComputedStyle(host);
      const border = parse(cs.borderTopColor);
      const { color: bg } = background(host.parentElement ?? host);
      if (border && parseFloat(cs.borderTopWidth) > 0) {
        const rr = ratio(blend(border, bg), bg);
        if (rr < 3) issues.push({ rule: "1.4.11 borda do campo", el: label(el), detail: `${rr.toFixed(2)}:1 < 3:1` });
      }
    }
  }

  // 1.1.1 imagens
  for (const img of document.querySelectorAll("img")) if (!img.hasAttribute("alt")) issues.push({ rule: "1.1.1 img sem alt", el: label(img), detail: img.src });

  // 1.3.1 estrutura
  const h1 = [...document.querySelectorAll("h1")].filter(visible);
  if (h1.length !== 1) issues.push({ rule: "1.3.1 h1", el: "page", detail: `${h1.length} h1 visíveis` });
  let last = 0;
  for (const h of [...document.querySelectorAll("h1,h2,h3,h4")].filter(visible)) {
    const level = Number(h.tagName[1]);
    if (last && level > last + 1) issues.push({ rule: "1.3.1 salto de título", el: label(h), detail: `h${last} → h${level}` });
    last = level;
  }
  if (document.querySelectorAll("main").length !== 1) issues.push({ rule: "1.3.1 landmark main", el: "page", detail: `${document.querySelectorAll("main").length}` });
  const navs = [...document.querySelectorAll("nav")].filter(visible);
  const names = navs.map((n) => n.getAttribute("aria-label"));
  if (names.some((n) => !n)) issues.push({ rule: "1.3.1 nav sem rótulo", el: "nav", detail: "" });
  const dup = names.filter((n, i) => n && names.indexOf(n) !== i);
  if (dup.length) issues.push({ rule: "1.3.1 navs com o mesmo rótulo visíveis", el: "nav", detail: dup.join(", ") });
  if (!document.documentElement.lang) issues.push({ rule: "3.1.1 lang", el: "html", detail: "" });
  return issues;
}

const browser = await chromium.launch({ channel: "chrome" });
const report = [];
for (const theme of themes) {
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    await context.addInitScript((t) => localStorage.setItem("fantasiando-theme", t), theme);
    const page = await context.newPage();
    for (const route of routes) {
      await page.goto(BASE + route, { waitUntil: "load" });
      await page.waitForTimeout(1200);
      await page.evaluate(() => document.fonts.ready);
      const issues = await page.evaluate(auditPage);
      for (const issue of issues) report.push({ theme, viewport: vp.name, route, ...issue });
    }
    await context.close();
  }
}
await browser.close();

const out = join(dirname(fileURLToPath(import.meta.url)), "reports");
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "latest.json"), JSON.stringify(report, null, 2));
const byRule = Object.groupBy(report, (r) => r.rule);
for (const [rule, items] of Object.entries(byRule)) {
  console.log(`\n## ${rule} — ${items.length}`);
  const unique = Object.groupBy(items, (r) => `${r.el} | ${r.detail}`);
  for (const [key, list] of Object.entries(unique).slice(0, 25)) {
    console.log(`  - ${key}  [${[...new Set(list.map((r) => `${r.theme}/${r.viewport}`))].join(" ")}] ${[...new Set(list.map((r) => r.route))].slice(0, 3).join(" ")}`);
  }
}
console.log(`\nTotal: ${report.length}`);
