import { tryOnContent } from "@/content/pages";
import { tryOnSteps, type StepStatus, type TryOnStep } from "@/hooks/use-try-on-flow";
import styles from "./try-on.module.css";

export function TryOnSteps({ statusOf }: { statusOf: (step: TryOnStep) => StepStatus }) {
  return (
    <ol className={styles.steps}>
      {tryOnSteps.map((step, index) => (
        <li key={step} data-status={statusOf(step)} aria-current={statusOf(step) === "current" ? "step" : undefined}>
          {index + 1}. {tryOnContent.steps[step]}
        </li>
      ))}
    </ol>
  );
}
