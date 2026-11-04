import type { Category, ProductDetail } from "./types";

/** Produto do mock: `sizeLabels` é derivado de `sizes` pela fonte mock. */
export type MockProduct = Omit<ProductDetail, "sizeLabels">;

// Catálogo de apresentação. Para trocar um produto, edite a entrada aqui;
// imagens ficam em public/assets. Quando a API estiver no ar, use CATALOG_SOURCE=api.

export const mockCategories: Category[] = [
  { slug: "princesas", name: "Princesas", description: "Tule em camadas, corpetes bordados e saias que giram. Para castelos, aniversários e fotos inesquecíveis.", imageUrl: "/assets/categoria-princesas.png", productCount: 0 },
  { slug: "festa-junina", name: "Festa junina", description: "Xadrez, babados e laços para o arraiá.", imageUrl: "/assets/categoria-festa-junina.png", productCount: 0 },
  { slug: "fantasias", name: "Fantasias temáticas", description: "Personagens e cores para brincar de ser quem quiser.", imageUrl: "/assets/categoria-fantasia-tematica.png", productCount: 0 },
  { slug: "aniversario", name: "Aniversário", description: "Vestidos de festa para o dia mais esperado do ano.", imageUrl: "/assets/categoria-aniversario.png", productCount: 0 },
];

const category = (slug: string) => {
  const found = mockCategories.find((item) => item.slug === slug);
  if (!found) throw new Error(`Categoria mock inexistente: ${slug}`);
  return { slug: found.slug, name: found.name };
};

const allSizes = (unavailable: string[] = []) => ["2", "4", "6", "8", "10"].map((label) => ({ label, available: !unavailable.includes(label) }));

const atelierDetails = ["Tule de poliéster, forro 100% algodão", "Lavar à mão, à sombra"];

const fabricDetail = { url: "/assets/detalhe-tecido-renda.png", alt: "Detalhe do tecido e acabamento" };

export const mockProducts: MockProduct[] = [
  {
    slug: "vestido-princesa-aurora",
    name: "Vestido Princesa Aurora",
    summary: "Tule rosé em camadas e corpete bordado.",
    description: "Saia rodada em três camadas de tule, corpete com bordado floral e laço nas costas. Pensado para girar, brincar e fotografar.",
    priceCents: 12990, maxPriceCents: 12990, available: true, badge: "Mais vendido",
    image: { url: "/assets/vestido-princesa-rosa.png", alt: "Vestido rosa de princesa com saia de tule" },
    images: [{ url: "/assets/vestido-princesa-rosa.png", alt: "Vestido rosa de princesa com saia de tule" }, fabricDetail, { url: "/assets/foto-exemplo-crianca-vestido-rosa.png", alt: "Criança usando o vestido" }],
    categories: [category("princesas"), category("aniversario")],
    sizes: allSizes(), details: atelierDetails,
  },
  {
    slug: "vestido-floral-encantado",
    name: "Vestido Floral Encantado",
    summary: "Estampa floral delicada com mangas bufantes.",
    description: "Algodão estampado com flores miúdas, mangas bufantes e faixa de cetim na cintura. Leve para festas de dia.",
    priceCents: 11990, maxPriceCents: 11990, available: true,
    image: { url: "/assets/vestido-floral-rosa.png", alt: "Vestido rosa com estampa floral" },
    images: [{ url: "/assets/vestido-floral-rosa.png", alt: "Vestido rosa com estampa floral" }, fabricDetail],
    categories: [category("aniversario")],
    sizes: allSizes(["10"]), details: atelierDetails,
  },
  {
    slug: "festa-junina-docura",
    name: "Festa Junina Doçura",
    summary: "Xadrez com babados e retalhos coloridos.",
    description: "Vestido caipira em xadrez com babados, aplicações de retalhos e laço de fita. Acompanha tiara de flores.",
    priceCents: 9990, maxPriceCents: 9990, available: true, badge: "Novidade",
    image: { url: "/assets/vestido-festa-junina.png", alt: "Vestido de festa junina xadrez com babados" },
    images: [{ url: "/assets/vestido-festa-junina.png", alt: "Vestido de festa junina xadrez com babados" }, fabricDetail],
    categories: [category("festa-junina")],
    sizes: allSizes(), details: atelierDetails,
  },
  {
    slug: "fantasia-arco-iris",
    name: "Fantasia Arco-Íris",
    summary: "Saia em tule colorido e corpete de lantejoulas.",
    description: "Tule nas sete cores do arco-íris com corpete brilhante. Ideal para festas temáticas e carnaval.",
    priceCents: 13990, maxPriceCents: 13990, available: true,
    image: { url: "/assets/vestido-arco-iris.png", alt: "Vestido com saia de tule colorida em arco-íris" },
    images: [{ url: "/assets/vestido-arco-iris.png", alt: "Vestido com saia de tule colorida em arco-íris" }, fabricDetail],
    categories: [category("fantasias")],
    sizes: allSizes(), details: atelierDetails,
  },
  {
    slug: "vestido-tule-lilas",
    name: "Vestido Tule Lilás",
    summary: "Lilás encantado com brilho suave.",
    description: "Tule lilás com pontos de brilho, alças delicadas e saia longa. Para princesas de contos de inverno.",
    priceCents: 14990, maxPriceCents: 14990, available: true,
    image: { url: "/assets/vestido-fantasia-lilas.png", alt: "Vestido lilás de tule" },
    images: [{ url: "/assets/vestido-fantasia-lilas.png", alt: "Vestido lilás de tule" }, fabricDetail],
    categories: [category("princesas"), category("fantasias")],
    sizes: allSizes(["2"]), details: atelierDetails,
  },
  {
    slug: "vestido-festa-vermelho",
    name: "Vestido Festa Vermelho",
    summary: "Vermelho vibrante com laço de cetim.",
    description: "Cetim vermelho com saia armada e laço grande nas costas. Clássico para aniversários e fim de ano.",
    priceCents: 12990, maxPriceCents: 12990, available: true,
    image: { url: "/assets/vestido-festa-vermelho.png", alt: "Vestido vermelho de festa" },
    images: [{ url: "/assets/vestido-festa-vermelho.png", alt: "Vestido vermelho de festa" }, fabricDetail],
    categories: [category("aniversario")],
    sizes: allSizes(), details: atelierDetails,
  },
  {
    slug: "vestido-estrela-dourada",
    name: "Vestido Estrela Dourada",
    summary: "Dourado com estrelas bordadas.",
    description: "Tule dourado salpicado de estrelas bordadas e cinto brilhante. Para quem quer ser a estrela da festa.",
    priceCents: 15990, maxPriceCents: 15990, available: true, badge: "Edição limitada",
    image: { url: "/assets/vestido-estrela-dourada.png", alt: "Vestido dourado com estrelas" },
    images: [{ url: "/assets/vestido-estrela-dourada.png", alt: "Vestido dourado com estrelas" }, fabricDetail],
    categories: [category("princesas"), category("aniversario")],
    sizes: allSizes(["8", "10"]), details: atelierDetails,
  },
  {
    slug: "vestido-coral-verao",
    name: "Vestido Coral Verão",
    summary: "Coral fresco com saia leve.",
    description: "Tecido leve em tom coral, alças finas e saia evasê. Para festas ao ar livre e dias de sol.",
    priceCents: 10990, maxPriceCents: 10990, available: false,
    image: { url: "/assets/vestido-coral.png", alt: "Vestido coral de verão" },
    images: [{ url: "/assets/vestido-coral.png", alt: "Vestido coral de verão" }, fabricDetail],
    categories: [category("aniversario")],
    sizes: allSizes(["2", "4", "6", "8", "10"]), details: atelierDetails,
  },
];
