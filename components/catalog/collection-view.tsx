/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import Link from "next/link";
import { BannerSlot } from "@/components/ui/banner-slot";
import { Button } from "@/components/ui/button";
import { Scallop } from "@/components/ui/scallop";
import textures from "@/components/ui/textures.module.css";
import { banners } from "@/content/banners";
import { collectionContent } from "@/content/pages";
import { categoryNav } from "@/content/site";
import { useCatalogFilters } from "@/hooks/use-catalog-filters";
import type { Availability, SortOrder } from "@/lib/catalog/filters";
import type { Category, ProductSummary } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { pluralize } from "@/lib/format";
import { CollectionFilters } from "./collection-filters";
import { ProductCard } from "./product-card";
import styles from "./collection-view.module.css";

const sortOptions: { value: SortOrder; label: string }[] = [
  { value: "loved", label: "Mais amados" },
  { value: "price", label: "Menor preço" },
  { value: "new", label: "Novidades" },
];

const shortLabel = (category: Category) => categoryNav.find((item) => item.href.endsWith(`#${category.slug}`))?.short ?? category.name;

export function CollectionView({ products, categories }: { products: ProductSummary[]; categories: Category[] }) {
  const filters = useCatalogFilters(products, categories);
  const single = filters.themes.length === 1 ? categories.find((category) => category.slug === filters.themes[0]) : undefined;
  const sizes = [...new Set(products.flatMap((product) => product.sizeLabels))].sort((a, b) => Number(a) - Number(b));
  const [firstRow, rest] = [filters.results.slice(0, 3), filters.results.slice(3)];

  const title = filters.query ? `Busca: “${filters.query}”` : single?.name ?? "Coleção";
  const scope = [
    filters.themes.length ? ` em ${filters.themes.map((slug) => categories.find((category) => category.slug === slug)?.name).join(", ")}` : "",
    filters.size ? ` · tamanho ${filters.size}` : "",
  ].join("");

  return (
    <>
      <section className={cx(styles.band, textures.dots)}>
        <div className={styles.bandInner}>
          <nav aria-label="Você está em" className={styles.breadcrumb}>
            <Link href="/">Início</Link> / {single ? <><Link href="/colecao" onClick={filters.clear}>Coleção</Link> / <span aria-current="page">{single.name}</span></> : <span aria-current="page">Coleção</span>}
          </nav>
          <div className={styles.bandRow}>
            <div>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{single?.description || collectionContent.description}</p>
            </div>
            <div className={styles.pills} role="group" aria-label="Temas">
              {categories.map((category) => (
                <button key={category.slug} type="button" className={styles.pill} aria-pressed={single?.slug === category.slug} onClick={() => filters.selectOnlyTheme(category.slug)}>
                  {shortLabel(category)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Scallop variant="blush-down" />

      <section className={styles.topBanner} aria-label="Destaque da categoria">
        <BannerSlot slot={banners.category} layout="category" />
      </section>

      <section className={styles.content}>
        <div className={styles.layout}>
          <CollectionFilters
            categories={categories}
            sizes={sizes}
            themes={filters.themes}
            size={filters.size}
            availability={filters.availability}
            onToggleTheme={filters.toggleTheme}
            onToggleSize={filters.toggleSize}
            onAvailability={(value: Availability) => filters.setAvailability(value)}
            onClear={filters.clear}
          />
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <p className={styles.count} role="status"><strong>{pluralize(filters.results.length, "peça", "peças")}</strong>{scope}</p>
              <label className={styles.sort}>
                Ordenar por
                <select value={filters.sort} onChange={(event) => filters.setSort(event.target.value as SortOrder)}>
                  {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>

            {filters.results.length ? (
              <>
                <div className={styles.grid}>{firstRow.map((product) => <ProductCard key={product.slug} product={product} variant="simple" />)}</div>
                <div className={styles.inGrid}><BannerSlot slot={banners.inGrid} layout="inGrid" /></div>
                {rest.length ? <div className={styles.grid}>{rest.map((product) => <ProductCard key={product.slug} product={product} variant="simple" />)}</div> : null}
              </>
            ) : (
              <div className={styles.empty}>
                <img src="/assets/mascote-vazio.png" alt="" />
                <p>{collectionContent.empty}</p>
                <Button variant="outline" size="md" onClick={filters.clear}>Limpar filtros</Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
