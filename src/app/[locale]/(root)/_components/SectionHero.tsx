"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const SectionHero = () => {
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
    <section className="flex flex-col md:grid grid-cols-5 gap-12 w-full items-start pt-32">
      <div
        className={`flex max-h-[822px] max-w-[811px] flex-col gap-8 py-[6.375rem] px-12 rounded-ee-[9.25rem] col-span-3
            ${getBgClass()}`}
      >
        <h1 className="heading-01 text-start">
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
            <p className="body-callout-medium">
              Tipos de peças <br />
              em estoque
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading-05-medium">1000+</h2>
            <div className="w-12 h-1 bg-foreground rounded-full" />
            <p className="body-callout-medium">
              Clientes <br />
              satisfeitos
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading-05-medium">20</h2>
            <div className="w-12 h-1 bg-foreground rounded-full" />
            <p className="body-callout-medium">
              Estados <br />
              atendidos
            </p>
          </div>
        </div>
        <Button className="w-full max-w-[20rem]">Quero conhecer mais</Button>
      </div>

      <Image
        src="/img/unicornio1.png"
        alt="Mascote da Fantasiando Kids"
        width={1280}
        height={1280}
        quality={100}
        priority
        className="aspect-square w-full h-auto col-span-2"
      />
    </section>
  );
};
