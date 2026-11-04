import type { ProductSize } from "@/lib/catalog/types";
import styles from "./size-picker.module.css";

type Props = { sizes: ProductSize[]; selected?: string; onSelect: (label: string) => void };

export function SizePicker({ sizes, selected, onSelect }: Props) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Tamanho</legend>
      <div className={styles.sizes}>
        {sizes.map((size) => (
          <button
            key={size.label}
            type="button"
            className={styles.size}
            aria-pressed={selected === size.label}
            title={size.available ? undefined : "Sob encomenda"}
            data-unavailable={size.available ? undefined : true}
            onClick={() => onSelect(size.label)}
          >
            {size.label}
          </button>
        ))}
      </div>
      <small className={styles.note}>Tamanhos riscados são feitos sob encomenda. Tire dúvidas de medida pelo WhatsApp.</small>
    </fieldset>
  );
}
