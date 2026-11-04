import { ProductGrid } from "@/components/catalog/product-grid";
import { Section, SectionHeading } from "@/components/ui/section";
import type { ProductSummary } from "@/lib/catalog/types";

export function FeaturedProducts({ products }: { products: ProductSummary[] }) {
  return (
    <Section>
      <SectionHeading eyebrow="Favoritos do ateliê" title="Peças que encantam" action={{ href: "/colecao", label: "Ver coleção" }} />
      <ProductGrid products={products} />
    </Section>
  );
}
