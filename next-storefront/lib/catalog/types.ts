// Modelo de catálogo usado pelas telas. Toda origem de dados (mock ou API) precisa entregar este formato.

export type CategoryRef = { slug: string; name: string };

export type ProductImage = { url: string; alt: string };

export type ProductSummary = {
  slug: string;
  name: string;
  summary: string;
  priceCents: number;
  maxPriceCents: number;
  available: boolean;
  image: ProductImage;
  categories: CategoryRef[];
  badge?: string;
};

export type ProductSize = { label: string; available: boolean };

export type ProductDetail = ProductSummary & {
  description: string;
  images: ProductImage[];
  sizes: ProductSize[];
  details: string[];
};

export type Category = CategoryRef & {
  description: string;
  imageUrl: string | null;
  productCount: number;
};

export interface CatalogSource {
  listProducts(): Promise<ProductSummary[]>;
  getProduct(slug: string): Promise<ProductDetail | null>;
  listCategories(): Promise<Category[]>;
}
