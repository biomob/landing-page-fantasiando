import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./typography.module.css";

type TextProps = { children: ReactNode; className?: string };

export function Eyebrow({ children, className }: TextProps) {
  return <p className={cx(styles.eyebrow, className)}>{children}</p>;
}

export function PageTitle({ children, className }: TextProps) {
  return <h1 className={cx(styles.pageTitle, className)}>{children}</h1>;
}

export function SectionTitle({ children, className }: TextProps) {
  return <h2 className={cx(styles.sectionTitle, className)}>{children}</h2>;
}

export function Lede({ children, className }: TextProps) {
  return <p className={cx(styles.lede, className)}>{children}</p>;
}

export function TextLink({ href, children, className }: TextProps & { href: string }) {
  return <Link className={cx(styles.textLink, className)} href={href}>{children}</Link>;
}
