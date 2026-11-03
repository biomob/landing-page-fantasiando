import type { Metadata } from "next";
import { Catalogue } from "@/components/storefront/catalogue";
import { getCategories, getProducts } from "@/lib/catalog";

export const metadata: Metadata = { title: "Coleção" };

export default async function CollectionPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <section className="section catalogue">
      <p className="eyebrow">Coleção Annapê</p>
      <h1>Vestidos que fazem a imaginação florescer</h1>
      <p className="lede">Peças pensadas para celebrar festas, brincadeiras e os dias que viram memória.</p>
      <Catalogue products={products} categories={categories.map(({ slug, name }) => ({ slug, name }))} />
    </section>
  );
}
