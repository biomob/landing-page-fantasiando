import textures from "@/components/ui/textures.module.css";
import { promoMessages } from "@/content/site";
import { cx } from "@/lib/cx";
import styles from "./promo-strip.module.css";

/** Faixa promocional sob a barra de acessibilidade. No celular mostra só a primeira mensagem. */
export function PromoStrip() {
  return (
    <div className={cx(textures.stars, styles.strip)}>
      {promoMessages.map((message, index) => (
        <span key={message} className={styles.item}>
          ✦ {message}{index === 0 ? <span className={styles.trail} aria-hidden="true"> ✦</span> : null}
        </span>
      ))}
    </div>
  );
}
