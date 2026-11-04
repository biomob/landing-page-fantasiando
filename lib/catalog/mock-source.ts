import { type MockProduct, mockCategories, mockProducts } from "./mock-data";
import type { CatalogSource, ProductDetail, ProductSummary } from "./types";

const withSizeLabels = (product: MockProduct): ProductDetail => ({ ...product, sizeLabels: product.sizes.map((size) => size.label) });

const toSummary = ({ slug, name, summary, priceCents, maxPriceCents, available, image, categories, badge, sizes }: MockProduct): ProductSummary =>
  ({ slug, name, summary, priceCents, maxPriceCents, available, image, categories, badge, sizeLabels: sizes.map((size) => size.label) });

export function createMockSource(products = mockProducts, categories = mockCategories): CatalogSource {
  return {
    async listProducts() {
      return products.map(toSummary);
    },
    async getProduct(slug) {
      const product = products.find((item) => item.slug === slug);
      return product ? withSizeLabels(product) : null;
    },
    async listCategories() {
      return categories.map((item) => ({
        ...item,
        productCount: products.filter((product) => product.categories.some((ref) => ref.slug === item.slug)).length,
      }));
    },
  };
}
