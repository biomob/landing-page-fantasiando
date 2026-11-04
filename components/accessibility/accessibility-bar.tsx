/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { site } from "@/content/site";
import { FontSizeControl } from "./font-size-control";
import { ThemeToggle } from "./theme-toggle";
import styles from "./accessibility-bar.module.css";

/** Barra superior de acessibilidade (VLibras, tema e tamanho da fonte), no padrão da Biomob. */
export function AccessibilityBar() {
  return (
    <div className={styles.bar} role="region" aria-label="Ferramentas de acessibilidade">
      <div className={styles.tools}>
        <span className={styles.credit}>
          by
          <img src="/assets/parceiros/instituto-biomob-branco.png" alt="Instituto Biomob" />
        </span>
        <span className={styles.label}>Acessibilidade</span>
        <ThemeToggle />
        <FontSizeControl />
      </div>
      <p className={styles.message}>{site.announcement}</p>
    </div>
  );
}

export function SkipLink() {
  return <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>;
}
