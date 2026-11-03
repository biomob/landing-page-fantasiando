/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import type { ProductSummary } from "@/lib/catalog/types";
import { priceLabel } from "@/lib/whatsapp";
import { Icon } from "./icon";

export function ProductCard({ product }: { product: ProductSummary }) {
  const badge = product.available ? product.badge : "Sob encomenda";
  return (
    <article className="product-card">
      <Link href={`/produto/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <div className="product-picture">
          {badge && <span className="badge">{badge}</span>}
          <img src={product.image.url} alt={product.image.alt} loading="lazy" />
        </div>
        <div className="product-copy">
          <p>{product.categories[0]?.name ?? "Ateliê"}</p>
          <h3>{product.name}</h3>
          <strong>{priceLabel(product)}</strong>
          <span className="card-link">Ver detalhes <Icon name="arrow" size={15} /></span>
        </div>
      </Link>
    </article>
  );
}
