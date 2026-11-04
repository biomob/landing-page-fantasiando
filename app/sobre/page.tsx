/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/storefront/icon";

export const metadata: Metadata = { title: "Sobre o ateliê" };

export default function AboutPage() {
  return (
    <>
      <section className="section about">
        <div>
          <p className="eyebrow">Nosso ateliê</p>
          <h1>Cada vestido começa com uma história.</h1>
          <p className="lede">A Annapê nasceu em Petrópolis, entre retalhos, rendas e muita imaginação. Desenhamos e costuramos cada peça à mão, pensando no conforto de quem brinca e no encanto de quem assiste.</p>
          <p className="lede">Trabalhamos com tiragens pequenas, tecidos macios e acabamento cuidadoso — e adoramos personalizar detalhes para que cada festa tenha a cara de quem veste.</p>
          <Link className="button primary" href="/colecao">Conhecer a coleção <Icon name="arrow" size={18} /></Link>
        </div>
        <img src="/assets/atelie-maos-costurando.png" alt="Mãos costurando um vestido no ateliê" />
      </section>
      <section className="section values">
        <article><img src="/assets/detalhe-tecido-renda.png" alt="Detalhe de renda" loading="lazy" /><h2>Feito à mão</h2><p>Corte, costura e bordado acontecem no nosso ateliê, peça por peça.</p></article>
        <article><img src="/assets/mascote-estrela.png" alt="" loading="lazy" /><h2>Pensado para brincar</h2><p>Forros macios e modelagem que acompanha cada movimento.</p></article>
        <article><img src="/assets/mascote-sucesso.png" alt="" loading="lazy" /><h2>Perto de você</h2><p>Atendimento próximo pelo WhatsApp, do tamanho ao prazo de entrega.</p></article>
      </section>
    </>
  );
}
