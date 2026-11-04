import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "./icon";
import styles from "./section.module.css";
import { Eyebrow, SectionTitle, TextLink } from "./typography";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** `narrow` limita o conteúdo a ~680px (telas de mensagem). */
  width?: "default" | "narrow";
  /** Espaço acima do conteúdo: `compact` para o topo de páginas, `none` para emendar com a seção anterior. */
  top?: "default" | "compact" | "none";
  "aria-label"?: string;
  "aria-busy"?: boolean;
};

/** Faixa de conteúdo centralizada com o espaçamento padrão da vitrine. */
export function Section({ children, className, width = "default", top = "default", ...rest }: SectionProps) {
  const classes = cx(styles.section, width === "narrow" && styles.narrow, top === "compact" && styles.compactTop, top === "none" && styles.flushTop, className);
  return <section className={classes} {...rest}>{children}</section>;
}

/** Cabeçalho de seção com eyebrow, título e link opcional (escondido no mobile). */
export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: { href: string; label: string } }) {
  return (
    <div className={styles.heading}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>
      {action ? (
        <span className={styles.headingAction}>
          <TextLink href={action.href}>{action.label} <Icon name="arrow" size={16} /></TextLink>
        </span>
      ) : null}
    </div>
  );
}
