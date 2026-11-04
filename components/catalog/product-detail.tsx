/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";
import { Eyebrow, Lede, PageTitle, TextLink } from "@/components/ui/typography";
import type { ProductDetail as Product } from "@/lib/catalog/types";
import { priceLabel } from "@/lib/format";
import { ProductActions } from "./product-actions";
import styles from "./product-detail.module.css";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <Section className={styles.detail}>
      <div className={styles.media}>
        <img src={product.image.url} alt={product.image.alt} />
      </div>
      <div>
        <TextLink className={styles.back} href="/colecao"><Icon name="back" size={16} /> Voltar para a coleção</TextLink>
        <Eyebrow>{product.categories.map((ref) => ref.name).join(" · ")}</Eyebrow>
        <PageTitle className={styles.title}>{product.name}</PageTitle>
        <p className={styles.price}>{priceLabel(product)}</p>
        <Lede>{product.description}</Lede>
        {product.available ? null : <Lede className={styles.notice}>Peça sob encomenda — consulte o prazo pelo WhatsApp.</Lede>}
        <ProductActions product={{ name: product.name, slug: product.slug }} sizes={product.sizes} />
        {product.details.length > 0 ? (
          <ul className={styles.details}>
            {product.details.map((detail) => <li key={detail}><Icon name="check" size={17} /> {detail}</li>)}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}

export function ProductDetailSkeleton() {
  return (
    <Section className={styles.detail} aria-label="Carregando peça" aria-busy>
      <Skeleton className={styles.media} />
      <div>
        <Skeleton className={styles.skeletonEyebrow} />
        <Skeleton className={styles.skeletonTitle} height={52} />
        <Skeleton />
        <Skeleton />
      </div>
    </Section>
  );
}
