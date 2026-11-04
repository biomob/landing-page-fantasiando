// Captura referência (canvas renderizado) e alvo (app Next) no mesmo Chrome.
// Uso: node design/visual-parity/redesign/tools/capture.mjs [filtro]
// Requer: referência em http://localhost:4180 e app em http://localhost:3200.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const REF = "http://localhost:4180/design/visual-parity/redesign/reference-html";
const APP = process.env.PARITY_APP ?? "http://localhost:3200";

const hideCommon = "nextjs-portal { display: none !important; } [vw], [vw-access-button], .vw-plugin-top-wrapper { display: none !important; } *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }";

const cases = [
  { name: "home-1440", ref: "Main.html", target: "/", width: 1440 },
  {
    name: "home-390", ref: "Mobile.html", target: "/", width: 390,
    refCss: "body > div { height: auto !important; } nav[aria-label='Atalhos'] { display: none !important; }",
    targetCss: "nav[aria-label='Atalhos do celular'] { display: none !important; }",
  },
  { name: "colecao-1440", ref: "Colecao.html", target: "/colecao#princesas", width: 1440, startRef: "body > div > section", startTarget: "main", setup: async (page) => { await page.getByRole("complementary", { name: "Filtros" }).getByRole("button", { name: "4", exact: true }).click(); } },
  { name: "produto-1440", ref: "Produto.html", target: "/produto/vestido-estrela-dourada", width: 1440, startRef: "body > div > section", startTarget: "main" },
];

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((resolve) => { img.onload = img.onerror = resolve; }))));
  });
  await page.waitForTimeout(400);
}

// startSelector: compara só a partir do conteúdo (o header simplificado do canvas fica de fora).
async function shoot(browser, url, width, css, file, setup, startSelector) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce", locale: "pt-BR" });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: hideCommon + (css ?? "") });
  // Força o carregamento de imagens lazy antes da captura.
  await page.evaluate(() => document.querySelectorAll("img[loading='lazy']").forEach((img) => img.setAttribute("loading", "eager")));
  if (setup) await setup(page);
  await settle(page);
  if (startSelector) {
    const top = await page.evaluate((sel) => Math.round(document.querySelector(sel).getBoundingClientRect().top + scrollY), startSelector);
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.screenshot({ path: file, fullPage: true, clip: { x: 0, y: top, width, height: height - top } });
  } else {
    await page.screenshot({ path: file, fullPage: true });
  }
  await context.close();
}

const filter = process.argv[2];
const browser = await chromium.launch({ channel: "chrome" });
const manifest = { browser: browser.version(), dpr: 1, capturedAt: new Date().toISOString(), cases: [] };
for (const item of cases.filter((c) => !filter || c.name.includes(filter))) {
  for (const kind of ["reference", "target"]) mkdirSync(join(root, kind), { recursive: true });
  const refFile = join(root, "reference", `${item.name}.png`);
  const targetFile = join(root, "target", `${item.name}.png`);
  await shoot(browser, `${REF}/${item.ref}`, item.width, item.refCss, refFile, undefined, item.startRef);
  await shoot(browser, `${APP}${item.target}`, item.width, item.targetCss, targetFile, item.setup, item.startTarget);
  manifest.cases.push({ name: item.name, reference: item.ref, target: item.target, viewport: `${item.width}x900` });
  console.log("captured", item.name);
}
await browser.close();
writeFileSync(join(root, "manifest.json"), JSON.stringify(manifest, null, 2));
