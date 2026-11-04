import type { CatalogSource, Category, CategoryRef, ProductDetail, ProductImage, ProductSummary } from "./types";

// Contrato público do fantasiando-backend (GET /api/v1/catalog/*), ver openapi-v1.yaml.
type ApiImage = { url: string; altText: string | null };
type ApiProductListItem = {
  slug: string; name: string; summary: string | null; minPriceCents: number; maxPriceCents: number;
  available: boolean; images: ApiImage[]; categories: CategoryRef[];
};
type ApiProductDetail = {
  slug: string; name: string; summary: string | null; description: string | null; composition: string | null;
  careInstructions: string | null; origin: string | null; images: ApiImage[]; categories: CategoryRef[];
  variants: { size: string | null; priceCents: number; available: boolean }[];
};
type ApiCategory = { slug: string; name: string; description: string | null; imageUrl: string | null; productCount: number };

const placeholderImage = "/assets/mascote-vazio.png";

const toImage = (image: ApiImage | undefined, fallbackAlt: string): ProductImage =>
  image ? { url: image.url, alt: image.altText || fallbackAlt } : { url: placeholderImage, alt: fallbackAlt };

export function mapListItem(item: ApiProductListItem): ProductSummary {
  return {
    slug: item.slug,
    name: item.name,
    summary: item.summary ?? "",
    priceCents: item.minPriceCents,
    maxPriceCents: item.maxPriceCents,
    available: item.available,
    image: toImage(item.images[0], item.name),
    categories: item.categories,
  };
}

export function mapDetail(item: ApiProductDetail): ProductDetail {
  const prices = item.variants.map((variant) => variant.priceCents);
  const sizes = new Map<string, boolean>();
  for (const variant of item.variants) {
    if (!variant.size) continue;
    sizes.set(variant.size, (sizes.get(variant.size) ?? false) || variant.available);
  }
  return {
    slug: item.slug,
    name: item.name,
    summary: item.summary ?? "",
    description: item.description ?? item.summary ?? "",
    priceCents: prices.length ? Math.min(...prices) : 0,
    maxPriceCents: prices.length ? Math.max(...prices) : 0,
    available: item.variants.some((variant) => variant.available),
    image: toImage(item.images[0], item.name),
    images: item.images.length ? item.images.map((image) => toImage(image, item.name)) : [toImage(undefined, item.name)],
    categories: item.categories,
    sizes: [...sizes].map(([label, available]) => ({ label, available })),
    details: [item.composition, item.careInstructions, item.origin].filter((value): value is string => Boolean(value)),
  };
}

export function mapCategory(item: ApiCategory): Category {
  return { slug: item.slug, name: item.name, description: item.description ?? "", imageUrl: item.imageUrl, productCount: item.productCount };
}

export function createApiSource(baseUrl: string, fetcher: typeof fetch = fetch): CatalogSource {
  async function get<T>(path: string): Promise<T | null> {
    const response = await fetcher(`${baseUrl}${path}`, { headers: { accept: "application/json" } });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Catálogo indisponível (${response.status}) em ${path}`);
    return (await response.json()) as T;
  }

  return {
    async listProducts() {
      const items: ProductSummary[] = [];
      let cursor: string | null = null;
      do {
        const query = new URLSearchParams({ limit: "100" });
        if (cursor) query.set("cursor", cursor);
        const page: { items: ApiProductListItem[]; nextCursor: string | null } | null = await get(`/catalog/products?${query}`);
        if (!page) break;
        items.push(...page.items.map(mapListItem));
        cursor = page.nextCursor;
      } while (cursor);
      return items;
    },
    async getProduct(slug) {
      const item = await get<ApiProductDetail>(`/catalog/products/${encodeURIComponent(slug)}`);
      return item ? mapDetail(item) : null;
    },
    async listCategories() {
      const page = await get<{ items: ApiCategory[] }>("/catalog/categories");
      return (page?.items ?? []).map(mapCategory);
    },
  };
}
