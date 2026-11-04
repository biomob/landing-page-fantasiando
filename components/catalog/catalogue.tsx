"use client";
import { Lede } from "@/components/ui/typography";
import { collectionContent } from "@/content/pages";
import { useHashState } from "@/hooks/use-hash-state";
import { productsInCategory } from "@/lib/catalog/selectors";
import type { CategoryRef, ProductSummary } from "@/lib/catalog/types";
import { CategoryFilter } from "./category-filter";
import { ProductGrid } from "./product-grid";

/** Coleção filtrável; o filtro fica no hash para os links da home abrirem filtrados. */
export function Catalogue({ products, categories }: { products: ProductSummary[]; categories: CategoryRef[] }) {
  const [active, setActive] = useHashState(categories.map((category) => category.slug));
  const visible = productsInCategory(products, active);

  return (
    <>
      <CategoryFilter categories={categories} active={active} onChange={setActive} />
      {visible.length ? <ProductGrid products={visible} /> : <Lede>{collectionContent.empty}</Lede>}
    </>
  );
}
