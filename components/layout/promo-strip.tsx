import { Icon } from "@/components/ui/icon";
import textures from "@/components/ui/textures.module.css";
import { promoMessages } from "@/content/site";
import { cx } from "@/lib/cx";
import styles from "./promo-strip.module.css";

/** Faixa promocional sob a barra de acessibilidade. No celular mostra só a primeira mensagem. */
export function PromoStrip() {
  return (
    <div className={cx(textures.stars, styles.strip)}>
      {promoMessages.map((message) => (
        <span key={message.text} className={styles.item}>
          <Icon name={message.icon} size={16} />
          {message.text}
        </span>
      ))}
    </div>
  );
}
