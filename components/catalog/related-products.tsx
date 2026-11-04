import { Section, SectionHeading } from "@/components/ui/section";
import type { ProductSummary } from "@/lib/catalog/types";
import { ProductGrid } from "./product-grid";

export function RelatedProducts({ products }: { products: ProductSummary[] }) {
  if (!products.length) return null;

  return (
    <Section>
      <SectionHeading eyebrow="Combina com" title="Você também pode gostar" />
      <ProductGrid products={products} />
    </Section>
  );
}
