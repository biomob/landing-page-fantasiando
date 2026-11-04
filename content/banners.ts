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
