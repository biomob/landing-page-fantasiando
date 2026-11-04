"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useSizeSelection } from "@/hooks/use-size-selection";
import type { ProductSize } from "@/lib/catalog/types";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import styles from "./product-actions.module.css";
import { SizePicker } from "./size-picker";

type Props = { product: { name: string; slug: string }; sizes: ProductSize[] };

/** Escolha de tamanho + pedido pelo WhatsApp. Substitui o carrinho. */
export function ProductActions({ product, sizes }: Props) {
  const [size, setSize] = useSizeSelection(sizes);

  return (
    <>
      {sizes.length > 0 ? <SizePicker sizes={sizes} selected={size} onSelect={setSize} /> : null}
      <div className={styles.actions}>
        <Button block href={whatsappLink(productMessage(product, size))} external>
          <Icon name="whatsapp" size={18} /> Quero este vestido
        </Button>
        <Button block variant="soft" href={`/prova-virtual?produto=${product.slug}`}>
          Experimentar com IA <Icon name="sparkle" size={17} />
        </Button>
      </div>
    </>
  );
}
