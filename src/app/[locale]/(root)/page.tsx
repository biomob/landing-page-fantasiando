"use server";
import React from "react";
import { SectionHero } from "./_components/SectionHero";
import { PromotionBanner } from "./_components/PromotionBanner";
import { SectionSobre } from "./_components/SectionSobre";
import SectionCarrossel from "./_components/SectionCarrossel";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div className="w-full min-h-screen flex flex-col gap-12 h-full">
      <SectionHero />
      <PromotionBanner />
      <SectionSobre />
      <SectionCarrossel />
    </div>
  );
}
