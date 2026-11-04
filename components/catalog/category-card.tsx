/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import type { Category } from "@/lib/catalog/types";
import { pluralize } from "@/lib/format";
import styles from "./category-card.module.css";

const fallbackImage = "/assets/mascote-vazio.png";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className={styles.card} href={`/colecao#${category.slug}`}>
      <img src={category.imageUrl ?? fallbackImage} alt="" loading="lazy" />
      <span className={styles.name}>{category.name}</span>
      <small className={styles.count}>{pluralize(category.productCount, "peça", "peças")}</small>
    </Link>
  );
}
