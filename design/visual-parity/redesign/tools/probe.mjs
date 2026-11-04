// Compara estilos calculados de seletores equivalentes. Uso: node probe.mjs <refPage> <targetPath> <width> "<refSel>|<targetSel>" ...
import { chromium } from "@playwright/test";

const [refPage, targetPath, width, ...pairs] = process.argv.slice(2);
const props = ["display", "vertical-align", "font-size", "font-family", "font-weight", "line-height", "letter-spacing", "width", "height", "padding", "margin", "top", "left"];
const browser = await chromium.launch({ channel: "chrome" });

async function read(url, selectors) {
  const page = await (await browser.newContext({ viewport: { width: Number(width), height: 900 } })).newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return page.evaluate(([sels, keys]) => sels.map((sel) => {
    const el = document.querySelector(sel);
    if (!el) return { sel, missing: true };
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { sel, box: [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)], ...Object.fromEntries(keys.map((k) => [k, cs.getPropertyValue(k)])) };
  }), [selectors, props]);
}

const refSels = pairs.map((p) => p.split("|")[0]);
const tgtSels = pairs.map((p) => p.split("|")[1]);
const ref = await read(`http://localhost:4180/design/visual-parity/redesign/reference-html/${refPage}`, refSels);
const tgt = await read(`${process.env.PARITY_APP ?? "http://localhost:3200"}${targetPath}`, tgtSels);
for (let i = 0; i < pairs.length; i += 1) {
  console.log(`\n# ${pairs[i]}`);
  for (const key of ["box", ...props]) {
    const a = JSON.stringify(ref[i][key]); const b = JSON.stringify(tgt[i][key]);
    if (a !== b) console.log(`  ${key}: ref ${a}  ≠  alvo ${b}`);
  }
}
await browser.close();
