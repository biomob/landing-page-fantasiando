import type { Metadata } from "next";
import { Suspense } from "react";
import { TryOn, TryOnFallback } from "@/components/try-on/try-on";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = { title: "Prova virtual" };

export default async function TryOnPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={<TryOnFallback />}>
      <TryOn products={products} />
    </Suspense>
  );
}
