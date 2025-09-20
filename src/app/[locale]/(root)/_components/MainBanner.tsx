"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const MainBanner = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBgClass = () => {
    if (!mounted) return "";

    return theme === "light" || resolvedTheme === "light" ? "bg-[hsl(var(--neutral-light))]" : "bg-black";
  };

  return (
    <>
      <section className="flex flex-col md:grid grid-cols-5 gap-12 w-full items-start">
        <div
          className={`flex flex-col gap-8 py-[6.375rem] px-12 rounded-ee-[9.25rem] col-span-3
            ${getBgClass()}`}
        >
          <h1 className="heading-01 text-start mt-10">
            Transformando <span className="text-primary">SONHOS</span> em
            <span className="text-primary"> FANTASIAS</span>
          </h1>
          <p className="heading-05 max-w-[32rem]">
            Somos de Petrópolis - RJ, mas enviamos com carinho para todo o Brasil.
          </p>

          <div className="flex flex-wrap gap-10 max-w-[32rem]">
            <div className="flex flex-col gap-2">
              <h2 className="heading-05-medium">30+</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="body-callout-medium">Tipos de peças em estoque</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="heading-05-medium">1000+</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="body-callout-medium">Clientes satisfeitos</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="heading-05-medium">20</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="body-callout-medium">Estados atendidos</p>
            </div>
          </div>

          <Button className="w-full max-w-[32rem]">Quero conhecer mais</Button>
        </div>

        <Image
          src="/img/unicornio1.png"
          alt="Mascote da Fantasiando Kids"
          width={1280}
          height={1280}
          quality={100}
          priority
          className="aspect-square w-full h-auto col-span-2 mt-28"
        />
      </section>
      <section className="flex gap-6 justify-center mt-10">
        <div className="flex flex-col gap-3">
          <section
            className="relative flex flex-col items-start text-left text-white 
           w-[324px] h-[242.5px] rounded-[16px] 
           pt-[57px] pr-[22px] pb-[57px] pl-[22px] gap-[10px] mx-0 my-0"
            style={{ backgroundColor: "#8C4DFF" }}
          >
            <Image src="/img/textura_1.png" alt="Textura" fill className="absolute inset-0 object-cover opacity-60" />
            <div className="relative z-10 flex flex-col items-start gap-2">
              <h2 className="w-[280px] h-[23px] font-lato font-bold text-[20px] leading-[115%] tracking-[0.16em] uppercase text-white">
                OFERTAS DA SEMANA
              </h2>
              <p className="w-[280px] h-[19px] font-lato font-normal text-[10px] leading-[100%] tracking-[0.04em] text-white break-words">
                As melhores ofertas desta semana <br /> fresquinhas para você.
              </p>
              <button className="flex items-center justify-center gap-2 mt-2 w-[73px] h-[23px] rounded-full px-2 py-1 bg-[#CBA8FF] text-white text-[10px] font-lato font-normal transition-all duration-300 ease-out hover:opacity-90">
                Avançar
                <Image src="/img/ArrowRight.png" alt="Seta" width={12} height={12} />
              </button>
            </div>
            <Image
              src="/img/unicornioOferta.png"
              alt="Unicórnio"
              width={175}
              height={174}
              className="absolute bottom-0 right-0 z-0"
            />
          </section>

          <section
            className="relative flex flex-col items-start text-left text-white 
           w-[324px] h-[242.5px] rounded-[16px] 
           pt-[57px] pr-[22px] pb-[57px] pl-[22px] gap-[10px] mx-0"
            style={{ backgroundColor: "#8C4DFF" }}
          >
            <Image src="/img/textura_1.png" alt="Textura" fill className="absolute inset-0 object-cover opacity-60" />
            <div className="relative z-10 flex flex-col items-start gap-2">
              <h2 className="w-[280px] h-[23px] font-lato font-bold text-[20px] leading-[115%] tracking-[0.16em] uppercase text-white">
                PERSONALIZE
              </h2>
              <p className="w-[280px] font-lato font-normal text-[10px] leading-[100%] tracking-[0.04em] text-white break-words">
                Monte um vestido personalizado <br /> usando como base um <br /> modelo do nosso estoque e <br /> gere
                uma imagem da sua <br /> criança vestindo ele.
              </p>
              <button className="flex items-center justify-center gap-2 mt-2 w-[73px] h-[23px] rounded-full px-2 py-1 bg-[#CBA8FF] text-white text-[10px] font-lato font-normal transition-all duration-300 ease-out hover:opacity-90">
                Avançar
                <Image src="/img/ArrowRight.png" alt="Seta" width={12} height={12} />
              </button>
            </div>
            <Image
              src="/img/unicornio_2.png"
              alt="Unicórnio"
              width={175}
              height={174}
              className="absolute bottom-0 right-0 z-0"
            />
          </section>
        </div>

        <a href="/colecao-nova" className="flex-shrink-0 h-[496px]">
          <Image
            src="/img/linhaInfantil.png"
            alt="Coleção Nova"
            width={((242.5 + 242.5 + 3) * 912) / 493}
            height={242.5 + 242.5 + 3}
            className="rounded-[20px] object-cover h-full"
          />
        </a>
      </section>
    </>
  );
};
