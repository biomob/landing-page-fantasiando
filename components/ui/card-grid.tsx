import type { ReactNode } from "react";
import styles from "./card-grid.module.css";

/** Grade responsiva de cards: 4 colunas no desktop, 2 abaixo de 900px. */
export function CardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
