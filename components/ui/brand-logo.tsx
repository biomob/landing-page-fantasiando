/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { site } from "@/content/site";
import { cx } from "@/lib/cx";
import styles from "./brand-logo.module.css";

/** Logo da marca: colorido no tema claro, branco no escuro. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <>
      <img className={cx(styles.light, className)} src={site.logo} alt={site.name} />
      <img className={cx(styles.dark, className)} src={site.logoDark} alt="" aria-hidden="true" />
    </>
  );
}
