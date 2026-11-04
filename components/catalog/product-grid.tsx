import { CardGrid } from "@/components/ui/card-grid";
import type { ProductSummary } from "@/lib/catalog/types";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: ProductSummary[] }) {
  return <CardGrid>{products.map((product) => <ProductCard key={product.slug} product={product} />)}</CardGrid>;
}
