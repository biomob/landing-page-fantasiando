"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { filterCatalog, type Availability, type SortOrder } from "@/lib/catalog/filters";
import type { CategoryRef, ProductSummary } from "@/lib/catalog/types";
import { useHashList } from "./use-hash-list";

/**
 * Filtros da coleção. Temas ficam no hash (links da home abrem filtrados),
 * a busca vem de `?busca=` (formulário do header). Precisa de <Suspense> por ler search params.
 */
export function useCatalogFilters(products: ProductSummary[], categories: CategoryRef[]) {
  const [themes, setThemes] = useHashList(categories.map((category) => category.slug));
  const query = useSearchParams().get("busca")?.trim() ?? "";
  const [size, setSize] = useState<string | null>(null);
  const [availability, setAvailability] = useState<Availability>("all");
  const [sort, setSort] = useState<SortOrder>("loved");

  const results = filterCatalog(products, { themes, query, size, availability, sort });

  return {
    themes,
    query,
    size,
    availability,
    sort,
    results,
    toggleTheme: (slug: string) => setThemes(themes.includes(slug) ? themes.filter((item) => item !== slug) : [...themes, slug]),
    selectOnlyTheme: (slug: string) => setThemes([slug]),
    toggleSize: (label: string) => setSize((current) => (current === label ? null : label)),
    setAvailability,
    setSort,
    clear: () => {
      setThemes([]);
      setSize(null);
      setAvailability("all");
    },
  };
}
