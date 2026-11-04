import { chromium } from "@playwright/test";
const routes = ["/", "/colecao", "/colecao?busca=tule", "/produto/vestido-coral-verao", "/prova-virtual", "/sobre", "/contato", "/favoritos", "/nao-existe"];
const browser = await chromium.launch({ channel: "chrome" });
for (const width of [360, 390, 768, 1024, 1440]) {
  const page = await (await browser.newContext({ viewport: { width, height: 800 } })).newPage();
  const bad = [];
  for (const route of routes) {
    await page.goto(`http://localhost:3200${route}`, { waitUntil: "networkidle" });
    const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (over > 0) bad.push(`${route} (+${over}px)`);
  }
  console.log(width, bad.length ? `OVERFLOW: ${bad.join(", ")}` : "ok");
}
await browser.close();
