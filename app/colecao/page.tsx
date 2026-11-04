import type { Metadata } from "next";
import { Suspense } from "react";
import { CollectionView } from "@/components/catalog/collection-view";
import { getCategories, getProducts } from "@/lib/catalog";

export const metadata: Metadata = { title: "Coleção" };

export default async function CollectionPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  // A busca (?busca=) é lida no cliente; o Suspense mantém o resto da página pré-renderizado.
  return (
    <Suspense>
      <CollectionView products={products} categories={categories} />
    </Suspense>
  );
}
