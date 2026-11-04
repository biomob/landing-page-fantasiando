"use client";
import { Eyebrow, Lede, PageTitle } from "@/components/ui/typography";
import { tryOnContent } from "@/content/pages";
import { useTryOnFlow } from "@/hooks/use-try-on-flow";
import type { ProductSummary } from "@/lib/catalog/types";
import { TryOnSteps } from "./try-on-steps";
import { DressStage, PhotoStage, ResultStage } from "./try-on-stages";
import styles from "./try-on.module.css";

/** Prova virtual de demonstração: não envia foto nem chama IA. */
export function TryOn({ products }: { products: ProductSummary[] }) {
  const flow = useTryOnFlow(products);
  if (!flow.product) return null;

  return (
    <section className={styles.tryOn}>
      <div className={styles.intro}>
        <Eyebrow>{tryOnContent.eyebrow}</Eyebrow>
        <PageTitle>{tryOnContent.title}</PageTitle>
        <Lede>{tryOnContent.description}</Lede>
        <TryOnSteps statusOf={flow.statusOf} />
      </div>
      <div className={styles.stage} aria-live="polite">
        {flow.step === "photo" ? <PhotoStage onChoose={flow.choosePhoto} /> : null}
        {flow.step === "dress" ? <DressStage product={flow.product} products={products} onSelect={flow.selectProduct} onGenerate={flow.generatePreview} /> : null}
        {flow.step === "result" ? <ResultStage product={flow.product} onRestart={flow.restart} /> : null}
      </div>
    </section>
  );
}

export function TryOnFallback() {
  return <section className={styles.tryOn} aria-busy="true" />;
}
