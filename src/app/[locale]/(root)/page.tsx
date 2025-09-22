"use server";
import React from "react";
import { MainBanner } from "./_components/MainBanner";
import { HighlightsSection } from "./_components/HighlightsSection";
import { AboutSection } from "./_components/AboutSection";


export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div className="w-full min-h-screen flex flex-col gap-12 h-full">
      <MainBanner />
      <HighlightsSection />
      <AboutSection />
    </div>
    
  );
}
