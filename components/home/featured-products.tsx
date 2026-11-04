"use client";
import { useState } from "react";
import { ProductCard } from "@/components/catalog/product-card";
import { Eyebrow, SectionTitle } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import { productsInCategory } from "@/lib/catalog/selectors";
import type { CategoryRef, ProductSummary } from "@/lib/catalog/types";
import styles from "./featured-products.module.css";

type Props = { featured: ProductSummary[]; products: ProductSummary[]; filters: CategoryRef[] };

/** "Mais amados": destaques com atalhos por tema. */
export function FeaturedProducts({ featured, products, filters }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? productsInCategory(products, active).slice(0, 4) : featured;
  const options = [{ slug: null, name: "Todos" }, ...filters];

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div>
          <Eyebrow>{homeContent.featured.eyebrow}</Eyebrow>
          <SectionTitle>{homeContent.featured.title}</SectionTitle>
        </div>
        <div className={styles.chips} role="group" aria-label="Filtrar destaques por tema">
          {options.map((option) => (
            <button key={option.slug ?? "todos"} type="button" className={styles.chip} aria-pressed={active === option.slug} onClick={() => setActive(option.slug)}>
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {visible.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
  );
}
