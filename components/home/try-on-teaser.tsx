/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Eyebrow, SectionTitle } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import styles from "./try-on-teaser.module.css";

const { tryOnTeaser } = homeContent;

export function TryOnTeaser() {
  return (
    <section className={styles.panel}>
      <div>
        <Eyebrow>{tryOnTeaser.eyebrow}</Eyebrow>
        <SectionTitle>{tryOnTeaser.title}</SectionTitle>
        <p className={styles.description}>{tryOnTeaser.description}</p>
        <Button className={styles.action} href="/prova-virtual">Conhecer a prova virtual <Icon name="sparkle" size={17} /></Button>
      </div>
      <img className={styles.mascot} src={tryOnTeaser.image} alt="Mascote Annapê" />
    </section>
  );
}
