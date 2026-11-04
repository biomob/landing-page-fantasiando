/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Eyebrow } from "@/components/ui/typography";
import { useFavorites } from "@/hooks/use-favorites";
import type { ProductSummary } from "@/lib/catalog/types";
import { ProductCard } from "./product-card";
import styles from "./favorites-view.module.css";

/** Peças salvas no coração. Ficam só neste navegador. */
export function FavoritesView({ products }: { products: ProductSummary[] }) {
  const { slugs } = useFavorites();
  const saved = products.filter((product) => slugs.includes(product.slug));

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <Eyebrow>Sua lista</Eyebrow>
        <h1 className={styles.title}>Favoritos</h1>
        <p className={styles.text}>As peças que você marcou com o coração ficam salvas neste navegador.</p>
      </div>
      {saved.length ? (
        <div className={styles.grid}>{saved.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      ) : (
        <div className={styles.empty}>
          <img src="/assets/mascote-vazio.png" alt="" />
          <p>Nenhuma peça salva ainda. Toque no coração dos vestidos para guardar aqui.</p>
          <Button variant="dark" lifted href="/colecao">Ver a coleção <Icon name="arrow" size={18} /></Button>
        </div>
      )}
    </section>
  );
}
