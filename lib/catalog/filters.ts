import { featuredProducts } from "./selectors";
import type { ProductSummary } from "./types";

export type Availability = "all" | "ready" | "custom";
export type SortOrder = "loved" | "price" | "new";

export type CatalogFilters = {
  themes: string[];
  query: string;
  size: string | null;
  availability: Availability;
  sort: SortOrder;
};

const normalize = (text: string) => text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

/** Aplica os filtros da coleção. A ordem original do catálogo vale como "novidades". */
export function filterCatalog(products: ProductSummary[], { themes, query, size, availability, sort }: CatalogFilters) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  const filtered = products.filter((product) => {
    if (themes.length && !product.categories.some((ref) => themes.includes(ref.slug))) return false;
    if (terms.length) {
      const haystack = normalize(`${product.name} ${product.summary} ${product.categories.map((ref) => ref.name).join(" ")}`);
      if (!terms.every((term) => haystack.includes(term))) return false;
    }
    // Sem tamanhos informados (ex.: listagem da API), a peça não é descartada pelo filtro de tamanho.
    if (size && product.sizeLabels.length && !product.sizeLabels.includes(size)) return false;
    if (availability === "ready" && !product.available) return false;
    if (availability === "custom" && product.available) return false;
    return true;
  });

  if (sort === "price") return filtered.toSorted((a, b) => a.priceCents - b.priceCents);
  if (sort === "loved") return featuredProducts(filtered, filtered.length);
  return filtered;
}
