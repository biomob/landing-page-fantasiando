import type { CategoryRef, ProductSummary } from "./types";

/** Peças com selo primeiro, depois o restante, na ordem do catálogo. */
export function featuredProducts(products: ProductSummary[], limit = 4) {
  return [...products.filter((product) => product.badge), ...products.filter((product) => !product.badge)].slice(0, limit);
}

/** Outras peças que compartilham ao menos uma categoria. */
export function relatedProducts(product: { slug: string; categories: CategoryRef[] }, products: ProductSummary[], limit = 4) {
  const slugs = new Set(product.categories.map((ref) => ref.slug));
  return products.filter((item) => item.slug !== product.slug && item.categories.some((ref) => slugs.has(ref.slug))).slice(0, limit);
}

/** Menor preço da vitrine em reais inteiros, para o selo "a partir de". */
export function startingPrice(products: ProductSummary[]) {
  return products.length ? Math.floor(Math.min(...products.map((product) => product.priceCents)) / 100) : 0;
}

export function productsInCategory(products: ProductSummary[], category: string | null) {
  return category ? products.filter((product) => product.categories.some((ref) => ref.slug === category)) : products;
}
