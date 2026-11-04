import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { homeContent } from "@/content/pages";
import styles from "./how-it-works.module.css";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading eyebrow="Como funciona" title="Do ateliê para a festa" />
      <ol className={styles.steps}>
        {homeContent.steps.map((step) => (
          <li key={step.title} className={styles.step}>
            <Icon name={step.icon} size={26} />
            <strong className={styles.title}>{step.title}</strong>
            <span className={styles.description}>{step.description}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
