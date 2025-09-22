"use client";

import Image from "next/image";
import { HighlightCard } from "./HighlightCard";

export const HighlightsSection = () => {
  return (
    <section className="max-w-7xl mx-auto flex justify-center px-4">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl w-full items-stretch">

        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6">
          <HighlightCard
            title="OFERTAS DA SEMANA"
            description="As melhores ofertas desta semana fresquinhas para você."
            imageSrc="/img/unicorn-oferta.png"
            imageAlt="Unicórnio oferta"
          />

          <HighlightCard
            title="PERSONALIZE"
            description="Monte um vestido personalizado usando como base um modelo do nosso estoque e gere uma imagem da sua criança vestindo ele."
            imageSrc="/img/unicorn-personalize.png"
            imageAlt="Unicórnio personalizar"
          />

        </div>

        {/* Coluna Direita */}
        <div className="md:col-span-2 flex">
          <Image
            src="/img/banner-linha-infantil.png"
            alt="Linha Infantil com Mega Promoção"
            className="rounded-2xl w-full object-cover"
            width={900}
            height={500}
          />
        </div>
      </div>
    </section>

  );
};
