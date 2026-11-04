import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { ButtonRow } from "@/components/ui/button-row";
import { Icon } from "@/components/ui/icon";
import { Eyebrow, Lede, PageTitle } from "@/components/ui/typography";
import { homeContent } from "@/content/pages";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./hero.module.css";

const { hero } = homeContent;

export function Hero() {
  return (
    <section className={styles.hero} style={{ "--hero-image": `url(${hero.image})` } as CSSProperties}>
      <div className={styles.content}>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <PageTitle>{hero.title}</PageTitle>
        <Lede>{hero.description}</Lede>
        <ButtonRow>
          <Button href="/colecao">Ver coleção <Icon name="arrow" size={18} /></Button>
          <Button variant="soft" href={generalWhatsappLink} external><Icon name="whatsapp" size={18} /> Falar no WhatsApp</Button>
        </ButtonRow>
      </div>
    </section>
  );
}
