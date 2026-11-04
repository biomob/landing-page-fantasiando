// Renderiza as pranchetas .dc.html aprovadas como HTML estático (referência de paridade).
// Uso: node design/visual-parity/redesign/tools/render-reference.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = join(here, "..", "reference-src");
const outDir = join(here, "..", "reference-html");
mkdirSync(outDir, { recursive: true });

// Blobs do canvas -> arquivos originais do projeto (mesmos pixels que o app usa).
const blobs = {
  eb8a7ee1e344f177b81fd6c234171e91: "logo-cor.png",
  "90f17e90c2ca1e5ca896b3ab15f05ff2": "logo-branco.png",
  dd35c136e26f892840b8c44dc6d55584: "banner-atelie.png",
  bcb91be6b88542f98ca0790724ec2aac: "mascote-prova-virtual.png",
  b9609c1c4f888515caaea362155d63d0: "mascote-icone.png",
  a79e4656c36d0cf1d05b18c220db92d8: "atelie-maos-costurando.png",
  "8c215611b62fe20f88091a6954c465a2": "detalhe-tecido-renda.png",
  "933aa25204c97460660e028566f59355": "foto-exemplo-crianca-vestido-rosa.png",
  "64ee5353ce98dcc41186c9ee1f7380eb": "vestido-princesa-rosa.png",
  a4e21ac1c54626a3d75340943eb2270c: "vestido-floral-rosa.png",
  ce36be1e5590394cec68bce898ac49fe: "vestido-festa-junina.png",
  fdf7c2611c29021a5261a23652c64647: "vestido-arco-iris.png",
  a44d90afa28912a2b160153cb7b8ec71: "vestido-fantasia-lilas.png",
  "1691da4f4b0cb393da15a5027f6083bc": "vestido-festa-vermelho.png",
  cb76df8096dd38ba7fa42e7a4ca2f1ee: "vestido-estrela-dourada.png",
  "1215c57f4f34540c02f31ddddb1da503": "vestido-coral.png",
  "69e26190a77baa45ea835e4e470bf3be": "categoria-princesas.png",
  "1ad2e6921efdba98e43bb1c1830c8665": "categoria-festa-junina.png",
  b066b3313076a013bdaf6f71fbc1d886: "categoria-fantasia-tematica.png",
  "9932f1970a7ff5998052032cd3759add": "categoria-aniversario.png",
};
const rewriteBlobs = (text) => text.replace(/\/_blob\/([0-9a-f]{32})/g, (_, id) => `/public/assets/${blobs[id]}`);

const localFonts = [400, 500, 600, 700].map((w) => `@font-face{font-family:Fredoka;src:url(/public/fonts/fredoka-${w}.ttf);font-weight:${w};font-display:block}`)
  .concat([400, 500, 600, 700, 800].map((w) => `@font-face{font-family:Nunito;src:url(/public/fonts/nunito-${w}.ttf);font-weight:${w};font-display:block}`))
  .concat("@font-face{font-family:Nunito;src:url(/public/fonts/nunito-800.ttf);font-weight:900;font-display:block}")
  .join("\n");

const lookup = (scope, path) => {
  const trimmed = path.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed.split(".").reduce((value, key) => (value == null ? undefined : value[key]), scope);
};
const fill = (text, scope) => text.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_, path) => {
  const value = lookup(scope, path);
  return value == null ? "" : String(value);
});

function renderChildren(node, scope, doc) {
  const out = doc.createDocumentFragment();
  for (const child of [...node.childNodes]) out.append(...renderNode(child, scope, doc));
  return [...out.childNodes];
}

function renderNode(node, scope, doc) {
  if (node.nodeType === 3) return [doc.createTextNode(fill(node.textContent, scope))];
  if (node.nodeType !== 1) return [];
  const tag = node.tagName.toLowerCase();
  if (tag === "helmet") return [];
  if (tag === "sc-for") {
    const list = lookup(scope, node.getAttribute("list").replace(/[{}]/g, "")) ?? [];
    const as = node.getAttribute("as");
    return list.flatMap((item, $index) => renderChildren(node, { ...scope, [as]: item, $index }, doc));
  }
  if (tag === "sc-if") {
    return lookup(scope, node.getAttribute("value").replace(/[{}]/g, "")) ? renderChildren(node, scope, doc) : [];
  }
  const el = doc.createElement(tag);
  for (const attr of [...node.attributes]) {
    if (/^on[A-Z]/.test(attr.name) || attr.name.startsWith("hint-")) continue;
    el.setAttribute(attr.name, fill(attr.value, scope));
  }
  el.append(...renderChildren(node, scope, doc));
  return [el];
}

// Mesmos produtos que o app mostra com o mock atual (isola design de escolha de dados).
const p = (name, price, file, badge = "") => ({ name, price, img: `/public/assets/${file}`, badge, hasBadge: Boolean(badge) });
const aurora = p("Vestido Princesa Aurora", "R$ 129,90", "vestido-princesa-rosa.png", "Mais vendido");
const junina = p("Festa Junina Doçura", "R$ 99,90", "vestido-festa-junina.png", "Novidade");
const estrela = p("Vestido Estrela Dourada", "R$ 159,90", "vestido-estrela-dourada.png", "Edição limitada");
const floral = p("Vestido Floral Encantado", "R$ 119,90", "vestido-floral-rosa.png");
const lilas = p("Vestido Tule Lilás", "R$ 149,90", "vestido-fantasia-lilas.png");
const vermelho = p("Vestido Festa Vermelho", "R$ 129,90", "vestido-festa-vermelho.png");
const overrides = {
  "Main.dc.html": { products: [{ ...aurora, cat: "Princesas" }, { ...junina, cat: "Festa junina" }, { ...estrela, cat: "Princesas" }, { ...floral, cat: "Aniversário" }] },
  "Mobile.dc.html": { products: [aurora, junina, estrela, floral] },
  "Colecao.dc.html": { firstRow: [aurora, estrela, lilas], secondRow: [] },
  "Produto.dc.html": {
    related: [aurora, floral, lilas, vermelho],
    // O produto real tem 2 fotos (frente + detalhe do tecido).
    thumbs: [
      { img: "/public/assets/vestido-estrela-dourada.png", label: "Foto de frente", active: true, border: "3px solid #a8475d" },
      { img: "/public/assets/detalhe-tecido-renda.png", label: "Detalhe do tecido", active: false, border: "1px solid #f0e2dd" },
    ],
  },
};
const textOverrides = { "Colecao.dc.html": [["6 peças", "3 peças"]] };

function evaluate(html) {
  const script = html.match(/<script type="text\/x-dc"[^>]*data-props='([^']*)'[^>]*>([\s\S]*?)<\/script>/);
  const props = Object.fromEntries(Object.entries(JSON.parse(script[1])).filter(([k]) => !k.startsWith("$")).map(([k, v]) => [k, v.default]));
  const DCLogic = class { constructor(p) { this.props = p; this.state = {}; } setState(s) { Object.assign(this.state, s); } };
  const Component = new Function("DCLogic", `${script[2]}; return Component;`)(DCLogic);
  return new Component(props).renderVals();
}

// Diferenças acordadas com o cliente: campos ainda sem dado real e prova virtual fora desta versão.
function removeTryOn(doc) {
  for (const section of [...doc.querySelectorAll("section")]) {
    if (!section.textContent.includes("Veja a fantasia antes de escolher")) continue;
    for (const sibling of [section.previousElementSibling, section.nextElementSibling]) {
      if (sibling && sibling.tagName === "DIV" && !sibling.textContent.trim()) sibling.remove();
    }
    section.remove();
  }
  for (const link of [...doc.querySelectorAll("a")]) if (link.textContent.trim() === "✦ Prova virtual") link.remove();
  for (const span of [...doc.querySelectorAll("span")]) if (span.textContent.trim() === "✦ Prova virtual com IA") span.textContent = "✦ Atendimento pelo WhatsApp";
  for (const link of [...doc.querySelectorAll("footer a")]) if (link.textContent.trim() === "Prova virtual") link.textContent = "Favoritos";
  for (const el of [...doc.querySelectorAll("a")]) {
    if (el.textContent.trim() === "Experimentar com IA ✦") el.textContent = el.closest("div[style*='grid']") ? "Salvar nos favoritos" : "Falar no WhatsApp";
  }
  for (const section of [...doc.querySelectorAll("section")]) {
    const style = section.getAttribute("style") ?? "";
    if (style.includes("padding: 80px 24px 40px")) section.setAttribute("style", style.replace("padding: 80px 24px 40px", "padding: 8px 24px 40px"));
  }
}

function applyAgreedChanges(doc) {
  removeTryOn(doc);
  const walker = doc.createTreeWalker(doc.body, 4);
  const hits = [];
  while (walker.nextNode()) if (/\[(PRAZO|ANO)/.test(walker.currentNode.textContent)) hits.push(walker.currentNode);
  for (const text of hits) {
    const el = text.parentElement;
    if (text.textContent.includes("Riscados")) el.textContent = "Riscados: feitos sob encomenda — consulte o prazo pelo WhatsApp.";
    else if (text.textContent.includes("PRAZO DE")) el.textContent = "Produção sob encomenda. Prazo e frete combinados pelo WhatsApp.";
    else (el.closest("[style*='position: absolute']") ?? el).remove();
  }
}

for (const file of readdirSync(srcDir).filter((name) => name.endsWith(".dc.html"))) {
  const html = rewriteBlobs(readFileSync(join(srcDir, file), "utf8"));
  const vals = { ...evaluate(html), ...(overrides[file] ?? {}) };
  const src = new JSDOM(html).window.document;
  const helmetStyle = [...src.querySelectorAll("helmet style")].map((s) => s.textContent).join("\n");
  const out = new JSDOM(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${localFonts}\n${helmetStyle}</style></head><body></body></html>`).window.document;
  out.body.append(...renderChildren(src.querySelector("x-dc"), vals, out));
  applyAgreedChanges(out);
  // A barra de acessibilidade do canvas é um esboço; o app usa a barra real com 40px de altura.
  const bar = out.body.firstElementChild?.firstElementChild;
  if (bar) bar.setAttribute("style", `${bar.getAttribute("style")}; min-height: 40px; box-sizing: border-box; padding-top: 4px; padding-bottom: 4px;`);
  let rendered = out.documentElement.outerHTML;
  for (const [from, to] of textOverrides[file] ?? []) rendered = rendered.replace(from, to);
  const name = file.replace(".dc.html", ".html");
  writeFileSync(join(outDir, name), "<!doctype html>\n" + rendered);
  console.log("ok", name);
}
