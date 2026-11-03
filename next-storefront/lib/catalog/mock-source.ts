import { mockCategories, mockProducts } from "./mock-data";
import type { CatalogSource, ProductDetail, ProductSummary } from "./types";

const toSummary = ({ slug, name, summary, priceCents, maxPriceCents, available, image, categories, badge }: ProductDetail): ProductSummary =>
  ({ slug, name, summary, priceCents, maxPriceCents, available, image, categories, badge });

export function createMockSource(products = mockProducts, categories = mockCategories): CatalogSource {
  return {
    async listProducts() {
      return products.map(toSummary);
    },
    async getProduct(slug) {
      return products.find((product) => product.slug === slug) ?? null;
    },
    async listCategories() {
      return categories.map((item) => ({
        ...item,
        productCount: products.filter((product) => product.categories.some((ref) => ref.slug === item.slug)).length,
      }));
    },
  };
}
