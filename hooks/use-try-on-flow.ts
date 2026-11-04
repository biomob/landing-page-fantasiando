"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { ProductSummary } from "@/lib/catalog/types";

export const tryOnSteps = ["photo", "dress", "result"] as const;
export type TryOnStep = (typeof tryOnSteps)[number];
export type StepStatus = "done" | "current" | "upcoming";

/**
 * Fluxo da prova virtual de demonstração. A peça inicial vem de `?produto=<slug>`.
 * Precisa estar dentro de <Suspense> por ler search params.
 */
export function useTryOnFlow(products: ProductSummary[]) {
  const requested = useSearchParams().get("produto");
  const [slug, setSlug] = useState(() => products.find((item) => item.slug === requested)?.slug ?? products[0]?.slug);
  const [step, setStep] = useState<TryOnStep>("photo");

  const product = products.find((item) => item.slug === slug) ?? products[0];
  const current = tryOnSteps.indexOf(step);
  const statusOf = (target: TryOnStep): StepStatus => {
    const index = tryOnSteps.indexOf(target);
    return index === current ? "current" : index < current ? "done" : "upcoming";
  };

  return {
    step,
    product,
    statusOf,
    selectProduct: setSlug,
    choosePhoto: () => setStep("dress"),
    generatePreview: () => setStep("result"),
    restart: () => setStep("photo"),
  };
}
