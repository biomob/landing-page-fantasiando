/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { Scallop } from "@/components/ui/scallop";
import textures from "@/components/ui/textures.module.css";
import { Eyebrow } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import { cx } from "@/lib/cx";
import styles from "./try-on-teaser.module.css";

const { tryOnTeaser: copy } = homeContent;

/** Chamada da prova virtual em faixa escura estrelada. */
export function TryOnTeaser() {
  return (
    <>
      <Scallop variant="berry-up" className={styles.scallop} />
      <section className={cx(styles.section, textures.stars)}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <Eyebrow className={styles.eyebrow}>{copy.eyebrow}<span className={styles.eyebrowSuffix}>{copy.eyebrowSuffix}</span></Eyebrow>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.text}>{copy.description}</p>
            <ol className={styles.steps}>
              {copy.steps.map((step, index) => (
                <li key={step} className={styles.step}><span className={styles.stepNumber}>{index + 1}</span>{step}</li>
              ))}
            </ol>
            <Button className={styles.cta} lifted href="/prova-virtual">Começar prova virtual ✦</Button>
          </div>
          <div className={styles.media}>
            <figure className={styles.polaroid}><img src={copy.photo.src} alt={copy.photo.alt} /></figure>
            <img className={styles.mascot} src={copy.mascot} alt="Mascote Annapê" />
          </div>
        </div>
      </section>
      <Scallop variant="berry-down" className={styles.scallop} />
    </>
  );
}
