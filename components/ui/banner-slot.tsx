import Link from "next/link";
import { type BannerSlotConfig, showBannerGuides } from "@/content/banners";
import { cx } from "@/lib/cx";
import textures from "./textures.module.css";
import styles from "./banner-slot.module.css";

type Layout = "hero" | "card" | "category" | "strip" | "inGrid" | "product";

const radius: Record<Layout, string> = { hero: "28px", card: "24px", category: "24px", strip: "20px", inGrid: "20px", product: "24px" };

/** Espaço de banner horizontal: mostra a arte configurada ou um marcador com as medidas. */
export function BannerSlot({ slot, layout, alt = false }: { slot: BannerSlotConfig; layout: Layout; alt?: boolean }) {
  if (slot.image) {
    const picture = (
      <picture className={styles.picture} style={{ borderRadius: radius[layout] }}>
        <source media="(max-width: 700px)" srcSet={slot.image.mobile} />
        <img src={slot.image.desktop} alt={slot.image.alt} loading="lazy" />
      </picture>
    );
    return slot.image.href ? <Link href={slot.image.href}>{picture}</Link> : picture;
  }

  const inline = layout === "strip" || layout === "inGrid" || layout === "product";
  const placeholder = (
    <div className={cx(styles.slot, textures.hatch, styles[layout], inline && styles.row, alt && styles.alt)} role="img" aria-label={`Espaço reservado para banner ${slot.code}`}>
      <div className={inline ? styles.row : undefined}>
        <p className={styles.code}>
          <span className={styles.desktopOnly}>Espaço para banner · {slot.code}</span>
          <span className={styles.mobileOnly}>Banner · {slot.code.replace(/[ab]$/, "")} mobile</span>
        </p>
        {layout === "strip" ? (
          <p className={cx(styles.title, styles.desktopOnly)}>{slot.title}</p>
        ) : (
          <p className={styles.title}>
            <span className={slot.mobileTitle ? styles.desktopOnly : undefined}>{slot.title}</span>
            {slot.mobileTitle ? <span className={styles.mobileOnly}>{slot.mobileTitle}</span> : null}
          </p>
        )}
        {showBannerGuides ? (
          <p className={styles.specs}>
            <span className={styles.desktopOnly}>{slot.specs}</span>
            <span className={styles.mobileOnly}>{slot.mobileSpecs}</span>
          </p>
        ) : null}
      </div>
      {layout === "hero" ? (
        <div className={styles.dots} aria-hidden="true">
          <span className={cx(styles.dot, styles.dotActive)} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      ) : null}
    </div>
  );

  return layout === "inGrid" ? <div className={cx(styles.inGridFrame, textures.gingham)}>{placeholder}</div> : placeholder;
}
