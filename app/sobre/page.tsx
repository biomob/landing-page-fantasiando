import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/about-intro";
import { ValuesGrid } from "@/components/about/values-grid";

export const metadata: Metadata = { title: "Sobre o ateliê" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <ValuesGrid />
    </>
  );
}
