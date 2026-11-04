/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { Eyebrow, Lede, PageTitle } from "@/components/ui/typography";
import { contactContent } from "@/content/pages";
import { whatsappNumber } from "@/lib/env";
import { formatPhone } from "@/lib/format";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./contact-section.module.css";

const details: { icon: IconName; label: string; value: string }[] = [
  { icon: "whatsapp", label: "WhatsApp", value: formatPhone(whatsappNumber) },
  { icon: "clock", label: "Atendimento", value: contactContent.hours },
  { icon: "pin", label: "Ateliê", value: contactContent.location },
];

export function ContactSection() {
  const { card } = contactContent;

  return (
    <Section className={styles.contact}>
      <div>
        <Eyebrow>{contactContent.eyebrow}</Eyebrow>
        <PageTitle>{contactContent.title}</PageTitle>
        <Lede>{contactContent.description}</Lede>
        <ul className={styles.details}>
          {details.map((detail) => (
            <li key={detail.label} className={styles.detail}>
              <Icon name={detail.icon} size={18} />
              <span><strong>{detail.label}</strong><br />{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImage} src={card.image} alt="Mascote Annapê" />
        <h2 className={styles.cardTitle}>{card.title}</h2>
        <Lede className={styles.cardText}>{card.description}</Lede>
        <Button className={styles.cardAction} block href={generalWhatsappLink} external><Icon name="whatsapp" size={18} /> Iniciar conversa</Button>
      </div>
    </Section>
  );
}
