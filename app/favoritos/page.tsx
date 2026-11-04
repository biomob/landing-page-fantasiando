import type { Metadata } from "next";
import { FavoritesView } from "@/components/catalog/favorites-view";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = { title: "Favoritos", robots: { index: false } };

export default async function FavoritesPage() {
  return <FavoritesView products={await getProducts()} />;
}
