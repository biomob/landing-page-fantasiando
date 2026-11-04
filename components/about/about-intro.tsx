/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { Eyebrow, Lede, PageTitle } from "@/components/ui/typography";
import { aboutContent } from "@/content/pages";
import styles from "./about-intro.module.css";

export function AboutIntro() {
  return (
    <Section className={styles.intro}>
      <div>
        <Eyebrow>{aboutContent.eyebrow}</Eyebrow>
        <PageTitle className={styles.title}>{aboutContent.title}</PageTitle>
        {aboutContent.paragraphs.map((paragraph) => <Lede key={paragraph} className={styles.paragraph}>{paragraph}</Lede>)}
        <Button className={styles.action} href="/colecao">Conhecer a coleção <Icon name="arrow" size={18} /></Button>
      </div>
      <img className={styles.photo} src={aboutContent.image.src} alt={aboutContent.image.alt} />
    </Section>
  );
}
