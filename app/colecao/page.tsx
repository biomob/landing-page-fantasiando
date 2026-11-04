import type { Metadata } from "next";
import { Catalogue } from "@/components/catalog/catalogue";
import { Section } from "@/components/ui/section";
import { Eyebrow, Lede, PageTitle } from "@/components/ui/typography";
import { collectionContent } from "@/content/pages";
import { getCategories, getProducts } from "@/lib/catalog";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Coleção" };

export default async function CollectionPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <Section top="compact">
      <Eyebrow>{collectionContent.eyebrow}</Eyebrow>
      <PageTitle className={styles.title}>{collectionContent.title}</PageTitle>
      <Lede>{collectionContent.description}</Lede>
      <Catalogue products={products} categories={categories.map(({ slug, name }) => ({ slug, name }))} />
    </Section>
  );
}
