import { CategoryCard } from "@/components/catalog/category-card";
import { CardGrid } from "@/components/ui/card-grid";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Category } from "@/lib/catalog/types";

export function CategoryShowcase({ categories }: { categories: Category[] }) {
  return (
    <Section>
      <SectionHeading eyebrow="Descubra" title="Um mundo para cada imaginação" action={{ href: "/colecao", label: "Ver todos" }} />
      <CardGrid>{categories.slice(0, 4).map((category) => <CategoryCard key={category.slug} category={category} />)}</CardGrid>
    </Section>
  );
}
