"use client";
import Image from "next/image";
import React from "react";

export function PromotionBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-8">
      <div className="flex flex-col gap-4 h-full">
        <div className="bg-[#A259FF] rounded-2xl p-6 flex flex-col flex-1">
          <h3 className="text-white font-bold text-xl mb-2">OFERTAS DA SEMANA</h3>
          <div className="flex items-end justify-between flex-1">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <p className="text-white text-xs mb-2">As melhores ofertas desta semana fresquinhas para você.</p>
              <button className="bg-white text-[#A259FF] rounded-full px-5 py-1.5 text-sm font-bold shadow w-fit">
                Avançar
              </button>
            </div>

            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src="/img/unicorn2.png"
                alt="Unicórnio"
                width={135}
                height={135}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#A259FF] rounded-2xl p-6 flex flex-col flex-1">
          <h3 className="text-white font-bold text-xl mb-2">PERSONALIZE</h3>
          <div className="flex items-end justify-between flex-1">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <p className="text-white text-xs mb-2">
                Monte um vestido personalizado usando como base um modelo lindo do nosso site e gere uma imagem da sua
                criança vestindo ele.
              </p>
              <button className="bg-white text-[#A259FF] rounded-full px-5 py-1.5 text-sm font-bold shadow w-fit">
                Avançar
              </button>
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/img/unicorn3.png"
                alt="Unicórnio"
                width={135}
                height={135}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex items-center justify-center">
        <Image
          src="/img/mainbanner.png"
          alt="Banner principal"
          width={1200}
          height={800}
          className="rounded-2xl shadow max-w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
