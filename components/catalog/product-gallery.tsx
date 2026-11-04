/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import { useState } from "react";
import textures from "@/components/ui/textures.module.css";
import type { ProductImage } from "@/lib/catalog/types";
import { cx } from "@/lib/cx";
import styles from "./product-gallery.module.css";

/** Foto principal em moldura de arco + miniaturas clicáveis. */
export function ProductGallery({ images, badge }: { images: ProductImage[]; badge?: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  return (
    <div className={styles.gallery}>
      {images.length > 1 ? (
        <div className={styles.thumbs} role="group" aria-label="Fotos da peça">
          {images.map((image, position) => (
            <button key={image.url} type="button" className={styles.thumb} aria-pressed={position === index} aria-label={`Ver foto ${position + 1}: ${image.alt}`} onClick={() => setIndex(position)}>
              <img src={image.url} alt="" />
            </button>
          ))}
        </div>
      ) : null}
      <div className={styles.main}>
        <div className={cx(styles.backdrop, textures.gingham)} aria-hidden="true" />
        <div className={cx(styles.frame, textures.dots)}>
          <img src={current.url} alt={current.alt} />
        </div>
        {badge ? <span className={styles.badge}>{badge}</span> : null}
      </div>
    </div>
  );
}
