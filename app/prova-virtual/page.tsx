import type { Metadata } from "next";
import { Suspense } from "react";
import { TryOn } from "@/components/storefront/try-on";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = { title: "Prova virtual" };

export default async function TryOnPage() {
  const products = await getProducts();
  return (
    <Suspense fallback={<section className="tryon" aria-busy="true" />}>
      <TryOn products={products} />
    </Suspense>
  );
}
