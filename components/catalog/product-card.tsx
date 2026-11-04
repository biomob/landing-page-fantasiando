/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import textures from "@/components/ui/textures.module.css";
import type { ProductSummary } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { priceLabel } from "@/lib/format";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { FavoriteButton } from "./favorite-button";
import styles from "./product-card.module.css";

type Props = {
  product: ProductSummary;
  /** `rich`: home (categoria, tamanhos, favorito). `simple`: coleção. */
  variant?: "rich" | "simple";
};

export function ProductCard({ product, variant = "rich" }: Props) {
  const href = `/produto/${product.slug}`;
  const badge = product.available ? product.badge : "Sob encomenda";
  const rich = variant === "rich";

  return (
    <article className={cx(styles.card, !rich && styles.simple)}>
      <div className={styles.media}>
        <Link className={cx(styles.mediaLink, textures.dots)} href={href} tabIndex={-1} aria-hidden="true">
          <img src={product.image.url} alt="" loading="lazy" />
        </Link>
        {badge ? <span className={styles.badge}>{badge}</span> : null}
        {rich ? <FavoriteButton className={styles.favorite} slug={product.slug} name={product.name} /> : null}
      </div>
      <div className={styles.body}>
        {rich ? <span className={styles.category}>{product.categories[0]?.name ?? "Ateliê"}</span> : null}
        <Link className={styles.name} href={href}>{product.name}</Link>
        {rich && product.sizeLabels.length ? (
          <div className={styles.sizes} aria-label="Tamanhos">
            {product.sizeLabels.slice(0, 4).map((size) => <span key={size} className={styles.size}>{size}</span>)}
          </div>
        ) : null}
        <div className={styles.footer}>
          <strong className={styles.price}>{priceLabel(product)}</strong>
          <Button className={styles.order} size="sm" href={whatsappLink(productMessage(product))} external aria-label={`Pedir ${product.name} no WhatsApp`}>
            <Icon name="whatsapp" size={15} /><span className={styles.orderLabel}>Pedir</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
