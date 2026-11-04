/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Eyebrow, TextLink } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import { site } from "@/content/site";
import styles from "./atelier-story.module.css";

const { atelier: copy } = homeContent;

/** "Do nosso ateliê": fotos do processo e diferenciais em selos costurados. */
export function AtelierStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img className={styles.photo} src={copy.photo.src} alt={copy.photo.alt} loading="lazy" />
          <img className={styles.detail} src={copy.detail.src} alt={copy.detail.alt} loading="lazy" />
          {site.foundedYear ? <span className={styles.since}>Desde {site.foundedYear}</span> : null}
        </div>
        <div>
          <Eyebrow className={styles.eyebrow}>{copy.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.text}>{copy.description}</p>
          <ul className={styles.facts}>
            {copy.facts.map((fact) => (
              <li key={fact.title} className={styles.fact}>
                <p className={styles.factTitle}>{fact.title}</p>
                <p className={styles.factText}>{fact.description}</p>
              </li>
            ))}
          </ul>
          <TextLink href="/sobre">Conheça a nossa história →</TextLink>
        </div>
      </div>
    </section>
  );
}
