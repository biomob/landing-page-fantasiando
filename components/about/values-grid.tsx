/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/typography";
import { aboutContent } from "@/content/pages";
import styles from "./values-grid.module.css";

export function ValuesGrid() {
  return (
    <Section top="none" className={styles.values}>
      {aboutContent.values.map((value) => (
        <article key={value.title} className={styles.value}>
          <img className={styles.image} src={value.image} alt={value.alt} loading="lazy" />
          <SectionTitle className={styles.title}>{value.title}</SectionTitle>
          <p className={styles.description}>{value.description}</p>
        </article>
      ))}
    </Section>
  );
}
