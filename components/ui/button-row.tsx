import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./button-row.module.css";

export function ButtonRow({ children, align = "start", className }: { children: ReactNode; align?: "start" | "center"; className?: string }) {
  return <div className={cx(styles.row, align === "center" && styles.center, className)}>{children}</div>;
}
