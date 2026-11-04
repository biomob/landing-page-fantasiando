import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductBanner, ProductDetail, RelatedProducts } from "@/components/catalog/product-detail";
import { getProduct, getProducts } from "@/lib/catalog";
import { relatedProducts } from "@/lib/catalog/selectors";

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

  return (
    <>
      <ProductDetail product={product} />
      <ProductBanner />
      <RelatedProducts products={relatedProducts(product, products)} />
    </>
  );
}
