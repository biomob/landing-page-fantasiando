/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "./button";
import { Section } from "./section";
import { Eyebrow, Lede, PageTitle } from "./typography";
import styles from "./empty-state.module.css";

type Props = { image: string; eyebrow: string; title: string; description: string; action: { href: string; label: string } };

export function EmptyState({ image, eyebrow, title, description, action }: Props) {
  return (
    <Section width="narrow" className={styles.emptyState}>
      <img className={styles.image} src={image} alt="" />
      <Eyebrow>{eyebrow}</Eyebrow>
      <PageTitle className={styles.title}>{title}</PageTitle>
      <Lede className={styles.lede}>{description}</Lede>
      <Button className={styles.action} href={action.href}>{action.label}</Button>
    </Section>
  );
}
