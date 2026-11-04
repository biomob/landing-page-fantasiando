/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { ProductSummary } from "@/lib/catalog/types";
import { priceLabel } from "@/lib/format";
import styles from "./product-card.module.css";

export function ProductCard({ product }: { product: ProductSummary }) {
  const badge = product.available ? product.badge : "Sob encomenda";

  return (
    <article className={styles.card}>
      <Link className={styles.link} href={`/produto/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <div className={styles.picture}>
          {badge ? <span className={styles.badge}>{badge}</span> : null}
          <img src={product.image.url} alt={product.image.alt} loading="lazy" />
        </div>
        <div className={styles.copy}>
          <p className={styles.category}>{product.categories[0]?.name ?? "Ateliê"}</p>
          <h3 className={styles.name}>{product.name}</h3>
          <strong className={styles.price}>{priceLabel(product)}</strong>
          <span className={styles.more}>Ver detalhes <Icon name="arrow" size={15} /></span>
        </div>
      </Link>
    </article>
  );
}
