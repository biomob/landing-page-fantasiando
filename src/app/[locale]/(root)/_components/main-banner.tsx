"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const MainBanner = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/img/wallpaper/image.png"
        alt="Banner principal"
        fill
        className="object-cover absolute max-h-[21rem]"
        priority
      />
      <div className="min-h-[27.875rem] w-full relative m-auto max-w-[90vw] rounded-b-[2.6875rem] bg-[url(/img/wallpaper/image1.png)] object-cover flex text-center items-center justify-center px-12">
        <div className="flex flex-col items-center gap-3 max-w-[39.25rem]">
          <h3 className="heading-03-bold text-[hsl(var(--neutral-lightest))]">
            Sistema Completo de Gestão para Escolas de Treinamento
          </h3>
          <h5 className="heading-05-medium text-[hsl(var(--neutral-mid))]">
            Controle financeiro, presença, eventos, alunos e muito mais
          </h5>
          <div className="flex gap-3 ">
            <Button variant={"outline"}>Solicitar Demonstração</Button>
            <Button>Quero conhecer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
