/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/storefront/icon";
import { ProductActions } from "@/components/storefront/product-actions";
import { ProductCard } from "@/components/storefront/product-card";
import { getProduct, getProducts } from "@/lib/catalog";
import { priceLabel } from "@/lib/whatsapp";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produto/[slug]">): Promise<Metadata> {
  const product = await getProduct((await params).slug);
  return product ? { title: product.name, description: product.summary, openGraph: { images: [product.image.url] } } : {};
}

export default async function ProductPage({ params }: PageProps<"/produto/[slug]">) {
  const { slug } = await params;
  const [product, products] = await Promise.all([getProduct(slug), getProducts()]);
  if (!product) notFound();

  const categorySlugs = new Set(product.categories.map((ref) => ref.slug));
  const related = products.filter((item) => item.slug !== product.slug && item.categories.some((ref) => categorySlugs.has(ref.slug))).slice(0, 4);

  return (
    <>
      <section className="section detail">
        <div className="detail-image"><img src={product.image.url} alt={product.image.alt} /></div>
        <div className="detail-copy">
          <Link className="text-button back-link" href="/colecao"><Icon name="back" size={16} /> Voltar para a coleção</Link>
          <p className="eyebrow">{product.categories.map((ref) => ref.name).join(" · ")}</p>
          <h1>{product.name}</h1>
          <p className="price">{priceLabel(product)}</p>
          <p>{product.description}</p>
          {!product.available && <p className="notice">Peça sob encomenda — consulte o prazo pelo WhatsApp.</p>}
          <ProductActions product={{ name: product.name, slug: product.slug }} sizes={product.sizes} />
          {product.details.length > 0 && (
            <ul className="benefits">{product.details.map((detail) => <li key={detail}><Icon name="check" size={17} /> {detail}</li>)}</ul>
          )}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section">
          <div className="section-heading"><div><p className="eyebrow">Combina com</p><h2>Você também pode gostar</h2></div></div>
          <div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </section>
      )}
    </>
  );
}
