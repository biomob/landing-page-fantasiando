import type { Category, ProductDetail } from "./types";

/** Produto do mock: `sizeLabels` é derivado de `sizes` pela fonte mock. */
export type MockProduct = Omit<ProductDetail, "sizeLabels">;

// Catálogo de apresentação (coleção entregue em 05/11/2026). Nomes, preços e temas são
// propostas para revisão do ateliê: para trocar, edite a entrada aqui. Imagens em
// public/assets/produtos. Quando a API estiver no ar, use CATALOG_SOURCE=api.

const photo = (slug: string) => `/assets/produtos/${slug}.webp`;

export const mockCategories: Category[] = [
  { slug: "princesas", name: "Princesas", description: "Mangas bufantes, saias rodadas e tule em camadas para quem sonha com castelos.", imageUrl: photo("vestido-princesa-azul-amarelo"), productCount: 0 },
  { slug: "festa-junina", name: "Festa junina", description: "Retalhos, xadrez e babados para um arraiá cheio de encanto.", imageUrl: photo("vestido-junino-patchwork"), productCount: 0 },
  { slug: "fantasias", name: "Fantasias temáticas", description: "Frutas, bichinhos e bolinhas para brincar de ser quem quiser.", imageUrl: photo("vestido-morango"), productCount: 0 },
  { slug: "aniversario", name: "Aniversário", description: "Vestidos de festa para o dia mais esperado do ano.", imageUrl: photo("vestido-vermelho-bolinhas"), productCount: 0 },
];

const category = (slug: string) => {
  const found = mockCategories.find((item) => item.slug === slug);
  if (!found) throw new Error(`Categoria mock inexistente: ${slug}`);
  return { slug: found.slug, name: found.name };
};

const allSizes = (unavailable: string[] = []) => ["2", "4", "6", "8", "10"].map((label) => ({ label, available: !unavailable.includes(label) }));

const satinDetails = ["Cetim e tule com forro 100% algodão", "Lavar à mão, à sombra"];
const cottonDetails = ["Tricoline de algodão com renda bordada", "Lavar à mão, à sombra"];

function product(slug: string, data: Omit<MockProduct, "slug" | "image" | "images" | "maxPriceCents"> & { alt: string }): MockProduct {
  const { alt, ...rest } = data;
  const image = { url: photo(slug), alt };
  return { slug, image, images: [image], maxPriceCents: rest.priceCents, ...rest };
}

export const mockProducts: MockProduct[] = [
  product("vestido-morango", {
    name: "Vestido Moranguinho",
    summary: "Cetim rosa com avental de renda e morangos bordados.",
    description: "Gola com pérolas, mangas bufantes, faixa vermelha e avental de renda com morangos aplicados à mão. Barra com renda inglesa para girar na festa.",
    priceCents: 13990, available: true, badge: "Mais vendido",
    alt: "Vestido rosa com avental branco de renda e três morangos bordados",
    categories: [category("fantasias"), category("aniversario")],
    sizes: allSizes(), details: satinDetails,
  }),
  product("vestido-princesa-azul-amarelo", {
    name: "Vestido Princesa da Maçã",
    summary: "Corpete azul matelassê e saia amarela com maçãs.",
    description: "Corpete azul matelassê com gola bordada, mangas bufantes listradas, laço vermelho e saia amarela com bolsos de maçã. Um conto feito à mão.",
    priceCents: 15990, available: true, badge: "Novidade",
    alt: "Vestido de princesa com corpete azul, mangas vermelhas e saia amarela com maçãs",
    categories: [category("princesas")],
    sizes: allSizes(["10"]), details: satinDetails,
  }),
  product("vestido-tule-azul", {
    name: "Vestido Nuvem de Tule",
    summary: "Tule azul em babados com pompons coloridos.",
    description: "Corpete rosa em cetim, saia de tule azul em camadas com pompons e um grande laço lateral. Leveza para imaginar.",
    priceCents: 16990, available: true, badge: "Edição limitada",
    alt: "Vestido com corpete rosa e saia de tule azul em camadas com pompons e laço azul",
    categories: [category("princesas"), category("aniversario")],
    sizes: allSizes(["8", "10"]), details: satinDetails,
  }),
  product("vestido-junino-patchwork", {
    name: "Vestido Junino Patchwork",
    summary: "Retalhos coloridos com coração xadrez e renda.",
    description: "Patchwork de estampas, coração xadrez aplicado no peito, mangas de babado e barra de renda. Um arraiá cheio de encanto.",
    priceCents: 12990, available: true,
    alt: "Vestido junino de retalhos coloridos com coração xadrez rosa e babados de renda",
    categories: [category("festa-junina")],
    sizes: allSizes(), details: cottonDetails,
  }),
  product("vestido-vaquinha", {
    name: "Vestido Fazendinha",
    summary: "Xadrez rosa com ovelhinha e vaquinha aplicadas.",
    description: "Xadrez vichy rosa, gola branca arredondada, laço na cintura e bichinhos aplicados na saia. Doçura que vem do campo.",
    priceCents: 11990, available: false,
    alt: "Vestido xadrez rosa com gola branca, ovelhinha e vaquinha aplicadas na saia",
    categories: [category("festa-junina"), category("fantasias")],
    sizes: allSizes(["2", "4", "6", "8", "10"]), details: cottonDetails,
  }),
  product("vestido-ratinha-rosa", {
    name: "Vestido Ratinha Rosa",
    summary: "Tule rosa com brilho e aplicação de paetês.",
    description: "Tule rosa com brilho suave, mangas de babado e aplicação de paetês no peito. Brilho para sonhar.",
    priceCents: 14990, available: true,
    alt: "Vestido rosa de tule com brilho e aplicação de paetês no peito",
    categories: [category("fantasias"), category("aniversario")],
    sizes: allSizes(), details: satinDetails,
  }),
  product("vestido-vermelho-bolinhas", {
    name: "Vestido Vermelho de Bolinhas",
    summary: "Cetim vermelho de bolinhas com saia armada.",
    description: "Cetim vermelho com bolinhas brancas, gola branca, laço na cintura e saia armada com anágua. Uma festa em cada giro.",
    priceCents: 13990, available: true,
    alt: "Vestido vermelho de bolinhas brancas com gola branca e saia armada",
    categories: [category("fantasias"), category("aniversario")],
    sizes: allSizes(["10"]), details: satinDetails,
  }),
  product("vestido-laranja", {
    name: "Vestido Laranja Florzinha",
    summary: "Laranja e rosa com flor aplicada e tule na barra.",
    description: "Corpete rosa com flor branca, mangas bufantes, saia laranja com listras de cetim e tule rosa por baixo. Alegria que gira com ela.",
    priceCents: 9990, available: true,
    alt: "Vestido laranja com corpete rosa, flor branca aplicada e tule rosa na barra",
    categories: [category("aniversario")],
    sizes: allSizes(), details: satinDetails,
  }),
];
