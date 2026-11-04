import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./button.module.css";

type Common = {
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "soft" | "whatsapp";
  size?: "sm" | "md" | "lg" | "xl";
  /** Sombra sólida embaixo, como botão de brinquedo. */
  lifted?: boolean;
  block?: boolean;
  className?: string;
  "aria-label"?: string;
};

type Props = Common &
  (
    | { href: string; external?: boolean; onClick?: never; type?: never }
    | { href?: never; external?: never; onClick?: () => void; type?: "button" | "submit" }
  );

/** Botão da marca. Com `href` vira link (interno via next/link, externo em nova aba). */
export function Button({ children, variant = "primary", size = "lg", lifted, block, className, ...rest }: Props) {
  const classes = cx(styles.button, styles[variant], styles[size], lifted && styles.lifted, block && styles.block, className);
  const label = rest["aria-label"];

  if (rest.href && rest.external) {
    return <a className={classes} href={rest.href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a>;
  }
  if (rest.href) {
    return <Link className={classes} href={rest.href} aria-label={label}>{children}</Link>;
  }
  return <button className={classes} type={rest.type ?? "button"} onClick={rest.onClick} aria-label={label}>{children}</button>;
}
