import type { CategoryRef } from "@/lib/catalog/types";
import styles from "./category-filter.module.css";

type Props = { categories: CategoryRef[]; active: string | null; onChange: (slug: string | null) => void };

export function CategoryFilter({ categories, active, onChange }: Props) {
  const options = [{ slug: null, name: "Todos" }, ...categories];

  return (
    <div className={styles.filters} role="group" aria-label="Filtrar por categoria">
      {options.map((option) => (
        <button key={option.slug ?? "todos"} type="button" className={styles.filter} aria-pressed={active === option.slug} onClick={() => onChange(option.slug)}>
          {option.name}
        </button>
      ))}
    </div>
  );
}
