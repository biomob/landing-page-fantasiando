/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import textures from "@/components/ui/textures.module.css";
import { Eyebrow, SectionTitle, TextLink } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import { categoryNav } from "@/content/site";
import type { Category } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { pluralize } from "@/lib/format";
import styles from "./category-showcase.module.css";

const fallbackImage = "/assets/mascote-vazio.png";
const { categories: copy } = homeContent;
const shortName = (slug: string) => categoryNav.find((item) => item.href.endsWith(`#${slug}`))?.short;

/** Temas em círculos com moldura xadrez. No celular vira um carrossel horizontal. */
export function CategoryShowcase({ categories }: { categories: Category[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <SectionTitle>{copy.title}</SectionTitle>
        </div>
        <TextLink className={styles.action} href="/colecao">{copy.action}<Icon name="arrow" size={18} /></TextLink>
      </div>
      <div className={styles.grid}>
        {categories.slice(0, 4).map((category) => (
          <Link key={category.slug} className={styles.item} href={`/colecao#${category.slug}`}>
            <span className={cx(styles.ring, textures.gingham)}><img src={category.imageUrl ?? fallbackImage} alt="" loading="lazy" /></span>
            <span className={styles.name}>
              <span className={shortName(category.slug) ? styles.full : undefined}>{category.name}</span>
              {shortName(category.slug) ? <span className={styles.short}>{shortName(category.slug)}</span> : null}
            </span>
            <span className={styles.count}>{pluralize(category.productCount, "peça", "peças")}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
