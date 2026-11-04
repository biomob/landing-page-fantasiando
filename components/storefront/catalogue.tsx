"use client";
import { useSyncExternalStore } from "react";
import type { CategoryRef, ProductSummary } from "@/lib/catalog/types";
import { ProductCard } from "./product-card";

// O filtro ativo vive no hash (/colecao#princesas), assim os links da home já abrem filtrados.
const subscribe = (notify: () => void) => {
  window.addEventListener("hashchange", notify);
  return () => window.removeEventListener("hashchange", notify);
};
const readHash = () => decodeURIComponent(window.location.hash.slice(1));

function selectCategory(slug: string | null) {
  window.history.replaceState(null, "", slug ? `#${slug}` : window.location.pathname);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function Catalogue({ products, categories }: { products: ProductSummary[]; categories: CategoryRef[] }) {
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const active = categories.some((category) => category.slug === hash) ? hash : null;
  const visible = active ? products.filter((product) => product.categories.some((ref) => ref.slug === active)) : products;
  const filters = [{ slug: null, name: "Todos" }, ...categories];

  return (
    <>
      <div className="filter-row">
        {filters.map((filter) => (
          <button key={filter.slug ?? "todos"} type="button" className={active === filter.slug ? "filter active" : "filter"} aria-pressed={active === filter.slug} onClick={() => selectCategory(filter.slug)}>
            {filter.name}
          </button>
        ))}
      </div>
      {visible.length ? (
        <div className="product-grid">{visible.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      ) : (
        <p className="lede">Nenhuma peça nesta coleção por enquanto.</p>
      )}
    </>
  );
}
