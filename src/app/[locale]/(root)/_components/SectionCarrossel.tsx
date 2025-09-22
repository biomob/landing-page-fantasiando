"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SectionCarrossel() {
  const imagens = ["/img/vestido1.jpg", "/img/vestido2.jpg", "/img/vestido3.jpg"];
  const [index, setIndex] = useState(0);
  const total = imagens.length;

  const anterior = () => setIndex((i) => (i - 1 + total) % total);
  const proximo = () => setIndex((i) => (i + 1) % total);

  const esquerda = imagens[(index - 1 + total) % total];
  const centro = imagens[index];
  const direita = imagens[(index + 1) % total];

  return (
    <section className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 relative z-0 mt-10 sm:mt-20">
      <div className="relative rounded-2xl overflow-hidden bg-[#B380FF]">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-4 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-4 w-full md:w-1/2 justify-center">
            <button
              onClick={anterior}
              className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/80 text-lg sm:text-xl"
            >
              {"<"}
            </button>

            <div className="flex gap-2 sm:gap-4 items-center">
              <div className="rounded-xl bg-white shadow-lg p-1 sm:p-2">
                <div className="relative overflow-hidden rounded-md bg-pink-50" style={{ width: 70, height: 110 }}>
                  <Image
                    src={esquerda}
                    alt="vestido esquerda"
                    fill
                    style={{ objectFit: "cover" }}
                    className="block"
                    priority={false}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-lg p-1 sm:p-2">
                <div className="relative overflow-hidden rounded-md bg-pink-50" style={{ width: 90, height: 140 }}>
                  <Image src={centro} alt="vestido centro" fill style={{ objectFit: "cover" }} className="block" />
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-lg p-1 sm:p-2">
                <div className="relative overflow-hidden rounded-md bg-pink-50" style={{ width: 70, height: 110 }}>
                  <Image src={direita} alt="vestido direita" fill style={{ objectFit: "cover" }} className="block" />
                </div>
              </div>
            </div>

            <button
              onClick={proximo}
              className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/80 text-lg sm:text-xl"
            >
              {">"}
            </button>
          </div>

          <div className="flex-1 text-[#E0E0E0] mt-6 md:mt-0 text-center md:text-left">
            <p className="text-xs sm:text-sm opacity-80 mb-2">— Estoque</p>
            <h3 className="text-xl sm:text-3xl font-medium mb-3">Alguns vestidos disponíveis</h3>
            <p className="max-w-lg mx-auto md:mx-0 text-xs sm:text-base">
              Lorem ipsum dolor sit amet. Sit ratione perferendis est consequatur nobis in doloribus reprehenderit est
              saepe velit sed dolorum quaerat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
