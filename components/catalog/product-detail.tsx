/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { BannerSlot } from "@/components/ui/banner-slot";
import { Icon, type IconName } from "@/components/ui/icon";
import { Skeleton } from "@/components/ui/skeleton";
import textures from "@/components/ui/textures.module.css";
import { Eyebrow } from "@/components/ui/typography";
import { banners } from "@/content/banners";
import { site } from "@/content/site";
import type { ProductDetail as Product, ProductSummary } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { priceLabel } from "@/lib/format";
import { ProductActions } from "./product-actions";
import { ProductGallery } from "./product-gallery";
import styles from "./product-detail.module.css";

const trustBadges: { label: string; icon: IconName }[] = [
  { label: "Feito à mão", icon: "heart" },
  { label: "Ajuste sob medida", icon: "scissors" },
  { label: "Envio Brasil", icon: "truck" },
];

const shippingNote = site.productionDays
  ? `Produção em até ${site.productionDays} dias. Frete calculado pelo CEP no WhatsApp.`
  : "Produção sob encomenda. Prazo e frete combinados pelo WhatsApp.";

export function ProductDetail({ product }: { product: Product }) {
  const category = product.categories[0];
  const care = product.details.length ? `${product.details.join(". ")}.` : null;

  return (
    <section className={styles.section}>
      <nav aria-label="Você está em" className={styles.breadcrumb}>
        <Link href="/"><Icon name="home" size={16} />Início</Link> / {category ? <><Link href={`/colecao#${category.slug}`}>{category.name}</Link> / </> : null}
        <span aria-current="page">{product.name}</span>
      </nav>
      <div className={styles.layout}>
        <ProductGallery images={product.images} badge={product.available ? product.badge : "Sob encomenda"} />
        <div className={styles.card}>
          <Eyebrow>{product.categories.map((ref) => ref.name).join(" · ")}</Eyebrow>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>{priceLabel(product)}</p>
          <p className={styles.description}>{product.description}</p>
          {product.available ? null : <p className={styles.notice}>Peça sob encomenda — consulte o prazo pelo WhatsApp.</p>}
          <ProductActions product={{ name: product.name, slug: product.slug }} sizes={product.sizes} />
          <ul className={styles.trust}>{trustBadges.map((badge) => <li key={badge.label} className={styles.trustItem}><Icon name={badge.icon} size={18} />{badge.label}</li>)}</ul>
          <div className={styles.details}>
            {care ? (
              <details open>
                <summary><Icon name="info" size={18} />Composição e cuidados</summary>
                <p>{care}</p>
              </details>
            ) : null}
            <details>
              <summary><Icon name="truck" size={18} />Prazo e envio</summary>
              <p>{shippingNote}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductBanner() {
  return (
    <section className={styles.banner} aria-label="Sugestões">
      <BannerSlot slot={banners.product} layout="product" />
    </section>
  );
}

export function RelatedProducts({ products }: { products: ProductSummary[] }) {
  if (!products.length) return null;

  return (
    <section className={styles.related}>
      <Eyebrow>Combina com</Eyebrow>
      <h2 className={styles.relatedTitle}>Você também vai amar</h2>
      <div className={styles.relatedGrid}>
        {products.map((product) => (
          <Link key={product.slug} className={styles.relatedCard} href={`/produto/${product.slug}`}>
            <span className={cx(styles.relatedMedia, textures.dots)}><img src={product.image.url} alt="" loading="lazy" /></span>
            <span className={styles.relatedBody}>
              <span className={styles.relatedName}>{product.name}</span>
              <span className={styles.relatedPrice}>{priceLabel(product)}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ProductDetailSkeleton() {
  return (
    <section className={styles.section} aria-label="Carregando peça" aria-busy="true">
      <div className={styles.layout}>
        <Skeleton className={styles.skeletonMedia} />
        <div className={styles.card}>
          <Skeleton className={styles.skeletonEyebrow} />
          <Skeleton className={styles.skeletonTitle} height={52} />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </section>
  );
}
