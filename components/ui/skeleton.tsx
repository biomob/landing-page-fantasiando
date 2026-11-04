import type { CSSProperties } from "react";
import { cx } from "@/lib/cx";
import styles from "./skeleton.module.css";

export function Skeleton({ className, width, height }: { className?: string; width?: CSSProperties["width"]; height?: CSSProperties["height"] }) {
  return <div className={cx(styles.skeleton, height === undefined && styles.line, className)} style={{ width, height }} aria-hidden="true" />;
}
