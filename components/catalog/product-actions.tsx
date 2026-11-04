"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { site } from "@/content/site";
import { useSizeSelection } from "@/hooks/use-size-selection";
import type { ProductSize } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import styles from "./product-detail.module.css";

type Props = { product: { name: string; slug: string }; sizes: ProductSize[] };

const madeToOrderNote = site.productionDays
  ? `Riscados: feitos sob encomenda em ${site.productionDays} dias.`
  : "Riscados: feitos sob encomenda — consulte o prazo pelo WhatsApp.";

/** Escolha de tamanho + pedido pelo WhatsApp. Substitui o carrinho. */
export function ProductActions({ product, sizes }: Props) {
  const [size, setSize] = useSizeSelection(sizes);
  const measuresLink = whatsappLink(`Olá! Pode me ajudar com as medidas do ${product.name}?`);

  return (
    <>
      {sizes.length > 0 ? (
        <fieldset className={styles.sizes}>
          <legend className={styles.sizesLegend}>
            <span>Tamanho{size ? `: ${size}` : ""}</span>
            <a href={measuresLink} target="_blank" rel="noopener noreferrer">Guia de medidas</a>
          </legend>
          <div className={styles.sizeList}>
            {sizes.map((item) => (
              <button
                key={item.label}
                type="button"
                className={cx(styles.size, !item.available && styles.sizeUnavailable)}
                aria-pressed={size === item.label}
                title={item.available ? "Pronta entrega" : "Sob encomenda"}
                onClick={() => setSize(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className={styles.sizeNote}>{madeToOrderNote}</p>
        </fieldset>
      ) : null}
      <div className={styles.actions}>
        <Button size="xl" lifted block href={whatsappLink(productMessage(product, size))} external>
          <Icon name="whatsapp" size={20} /> Quero este vestido{size ? ` no tamanho ${size}` : ""}
        </Button>
        <Button variant="outline" block href={`/prova-virtual?produto=${product.slug}`}>Experimentar com IA ✦</Button>
      </div>
    </>
  );
}
