// Espaços de banner da vitrine. Para publicar uma arte, preencha `image` do espaço:
// { desktop: "/assets/banners/b1.webp", mobile: "/assets/banners/b1-mobile.webp", alt: "…", href?: "/colecao" }.
// Enquanto `image` for null, aparece o marcador com as medidas (guia completo no canvas de design).

export type BannerImage = { desktop: string; mobile: string; alt: string; href?: string };

export type BannerSlotConfig = {
  code: string;
  title: string;
  /** Título mais curto no celular (padrão: `title`). */
  mobileTitle?: string;
  specs: string;
  mobileSpecs: string;
  image: BannerImage | null;
};

export const showBannerGuides = true;

export const banners = {
  homeHero: { code: "B1", title: "Banner principal da campanha", mobileTitle: "Banner principal", specs: "Desktop 1920 × 560 px · Mobile 750 × 900 px · área segura central 1320 px", mobileSpecs: "750 × 900 px", image: null },
  homePromoA: { code: "B2a", title: "Promoção ou lançamento", mobileTitle: "Promoção (um por vez, em carrossel)", specs: "960 × 440 px · mobile 750 × 520 px", mobileSpecs: "750 × 520 px", image: null },
  homePromoB: { code: "B2b", title: "Tema da estação", specs: "960 × 440 px · mobile 750 × 520 px", mobileSpecs: "750 × 520 px", image: null },
  homeStrip: { code: "B3", title: "Faixa de aviso ou cupom", specs: "1920 × 200 px · mobile 750 × 240 px", mobileSpecs: "Faixa 750 × 240 px", image: null },
  category: { code: "B4", title: "Banner da categoria", specs: "1920 × 400 px · mobile 750 × 420 px · um por categoria", mobileSpecs: "750 × 420 px", image: null },
  inGrid: { code: "B5", title: "Banner entre produtos", specs: "1320 × 260 px · mobile 750 × 420 px · aparece após a 1ª linha", mobileSpecs: "750 × 420 px", image: null },
  product: { code: "B6", title: "Complete o look / acessórios", specs: "1920 × 300 px · mobile 750 × 420 px", mobileSpecs: "750 × 420 px", image: null },
} satisfies Record<string, BannerSlotConfig>;

/**
 * Carrossel do B1 (home). Arte ultrawide com exterior transparente (o vestido sai da moldura).
 * O texto está desenhado na arte do desktop; no celular a arte é recortada no vestido e o
 * texto vem em HTML (legível e acessível). Sem slides, o B1 volta a mostrar o marcador.
 */
export type CarouselSlide = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  /** Peça do slide (link "Ver o vestido" no celular). */
  productSlug: string;
};

export const homeCarousel: CarouselSlide[] = [
  { id: "morango", eyebrow: "Nova coleção", title: "Vestidos que viram contos de fada", text: "Feitos à mão, para momentos inesquecíveis.", cta: "Conheça a coleção", href: "/colecao", productSlug: "vestido-morango" },
  { id: "laranja", eyebrow: "Coleção encantada", title: "Alegria que gira com ela", text: "Cores, movimento e detalhes feitos à mão.", cta: "Ver a coleção", href: "/colecao#aniversario", productSlug: "vestido-laranja" },
  { id: "princesa-azul-amarelo", eyebrow: "Coleção princesas", title: "Um conto feito à mão", text: "Delicadeza de princesa em cada detalhe.", cta: "Ver a coleção", href: "/colecao#princesas", productSlug: "vestido-princesa-azul-amarelo" },
  { id: "ratinha-rosa", eyebrow: "Coleção festa", title: "Brilho para sonhar", text: "Uma festa delicada, leve e inesquecível.", cta: "Ver a coleção", href: "/colecao#aniversario", productSlug: "vestido-ratinha-rosa" },
  { id: "vaquinha", eyebrow: "Coleção fazendinha", title: "Doçura que vem do campo", text: "Conforto e encanto para celebrar brincando.", cta: "Ver a coleção", href: "/colecao#festa-junina", productSlug: "vestido-vaquinha" },
  { id: "junino-patchwork", eyebrow: "Coleção junina", title: "Um arraiá cheio de encanto", text: "Retalhos, renda e alegria em cada movimento.", cta: "Ver a coleção", href: "/colecao#festa-junina", productSlug: "vestido-junino-patchwork" },
  { id: "tule-azul", eyebrow: "Coleção sonhos", title: "Leveza para imaginar", text: "Tule, cor e movimento para momentos mágicos.", cta: "Ver a coleção", href: "/colecao#princesas", productSlug: "vestido-tule-azul" },
  { id: "vermelho-bolinhas", eyebrow: "Coleção aniversário", title: "Uma festa em cada giro", text: "Clássico, alegre e feito para encantar.", cta: "Ver a coleção", href: "/colecao#aniversario", productSlug: "vestido-vermelho-bolinhas" },
];

export const slideImages = (id: string) => ({
  desktop: `/assets/banners/b1-${id}.webp`,
  desktop1440: `/assets/banners/b1-${id}-1440.webp`,
  mobile: `/assets/banners/b1-${id}-mobile.webp`,
});

/** Troca automática a cada 6 s (pausável; desligada com "reduzir movimento"). */
export const carouselInterval = 6000;
