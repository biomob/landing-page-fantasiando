/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import textures from "@/components/ui/textures.module.css";
import type { Availability } from "@/lib/catalog/filters";
import type { CategoryRef } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./collection-filters.module.css";

const availabilityOptions: { value: Availability; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "ready", label: "Pronta entrega" },
  { value: "custom", label: "Sob encomenda" },
];

type Props = {
  categories: CategoryRef[];
  sizes: string[];
  themes: string[];
  size: string | null;
  availability: Availability;
  onToggleTheme: (slug: string) => void;
  onToggleSize: (label: string) => void;
  onAvailability: (value: Availability) => void;
  onClear: () => void;
};

const customSizeLink = whatsappLink("Olá! Não encontrei o tamanho que preciso na vitrine. Vocês fazem sob medida?");

export function CollectionFilters({ categories, sizes, themes, size, availability, onToggleTheme, onToggleSize, onAvailability, onClear }: Props) {
  return (
    <aside className={styles.panel} aria-label="Filtros">
      <div className={styles.header}>
        <strong className={styles.heading}>Filtrar</strong>
        <button type="button" className={styles.clear} onClick={onClear}>Limpar</button>
      </div>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>Tema</legend>
        {categories.map((category) => (
          <label key={category.slug} className={styles.option}>
            <input type="checkbox" checked={themes.includes(category.slug)} onChange={() => onToggleTheme(category.slug)} />
            {category.name}
          </label>
        ))}
      </fieldset>

      {sizes.length ? (
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Tamanho</legend>
          <div className={styles.sizes}>
            {sizes.map((label) => (
              <button key={label} type="button" className={styles.size} aria-pressed={size === label} onClick={() => onToggleSize(label)}>{label}</button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <fieldset className={styles.group}>
        <legend className={styles.legend}>Disponibilidade</legend>
        {availabilityOptions.map((option) => (
          <label key={option.value} className={styles.option}>
            <input type="radio" name="disponibilidade" checked={availability === option.value} onChange={() => onAvailability(option.value)} />
            {option.label}
          </label>
        ))}
      </fieldset>

      <div className={cx(styles.custom, textures.gingham)}>
        <img src="/assets/mascote-icone.png" alt="" />
        <p>Não achou o tamanho? A gente faz sob medida.</p>
        <Button className={styles.customAction} variant="dark" size="md" href={customSizeLink} external>Chamar no WhatsApp</Button>
      </div>
    </aside>
  );
}
