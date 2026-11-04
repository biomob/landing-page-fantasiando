"use client";
import { useMemo, useSyncExternalStore } from "react";
import { parseFavorites, readFavoritesRaw, subscribeFavorites, toggleFavorite } from "@/lib/favorites";

/** Peças favoritas salvas no navegador. */
export function useFavorites() {
  const raw = useSyncExternalStore(subscribeFavorites, readFavoritesRaw, () => "[]");
  const slugs = useMemo(() => parseFavorites(raw), [raw]);
  return { slugs, has: (slug: string) => slugs.includes(slug), toggle: toggleFavorite };
}
