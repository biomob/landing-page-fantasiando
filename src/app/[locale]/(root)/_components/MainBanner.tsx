"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHandshake, FaUsers } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import Link from "next/link";

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
      {/* ***componentizar cards */}
      <section className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-12 w-full items-start px-2 sm:px-4 md:px-0 mt-16 md:mt-16 lg:mt-18">
        <div
          className={`flex flex-col gap-6 md:gap-8 py-6 md:py-[6.375rem] px-4 sm:px-6 md:px-12 rounded-ee-[1.5rem] sm:rounded-ee-[2rem] md:rounded-ee-[9.25rem] col-span-3
      ${getBgClass()}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-start leading-tight">
            Transformando <span className="text-primary">SONHOS</span> em
            <span className="text-primary"> FANTASIAS</span>
          </h1>
          <p className="text-base md:text-xl max-w-full md:max-w-[32rem]">
            Somos de Petrópolis - RJ, mas enviamos com carinho para todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-10 max-w-full md:max-w-[32rem]">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold">30+</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="text-sm md:text-base font-medium">Tipos de peças em estoque</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold">1000+</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="text-sm md:text-base font-medium">Clientes satisfeitos</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold">20</h2>
              <div className="w-12 h-1 bg-foreground rounded-full" />
              <p className="text-sm md:text-base font-medium">Estados atendidos</p>
            </div>
          </div>
          <Link href="/sobrealoja">
            <Button className="w-full max-w-[32rem]">Quero conhecer mais</Button>
          </Link>
        </div>

        <div className="w-full col-span-2 px-2 sm:px-0">
          <Image
            src="/img/unicornio1.png"
            alt="Mascote da Fantasiando Kids"
            width={1280}
            height={1280}
            quality={100}
            priority
            className="aspect-square w-full h-auto mt-4 md:mt-8"
          />
        </div>
      </section>

      {/* sessao cards */}

      <section className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-auto">
          <section
            className="relative flex flex-col items-start text-left text-white 
      w-full sm:w-[324px] h-[200px] sm:h-[242.5px] rounded-[16px] 
      pt-8 sm:pt-[57px] pr-4 sm:pr-[22px] pb-8 sm:pb-[57px] pl-4 sm:pl-[22px] gap-[10px]"
            style={{ backgroundColor: theme === "light" ? "#8C4DFF" : "#323255ff" }}
          >
            <Image
              src="/img/backgroundcard.png"
              alt="background para o card em forma de ondas"
              fill
              className="absolute inset-0 object-cover opacity-60 rounded-[16px]"
            />

            <div className="relative z-10 flex flex-col items-start gap-2">
              <h2 className="w-full sm:w-[280px] font-lato font-bold text-[16px] sm:text-[20px] uppercase text-white tracking-[0.16em]">
                OFERTAS DA SEMANA
              </h2>
              <p className="w-[280px] font-lato font-normal text-[10px] text-white">
                As melhores ofertas desta semana <br /> fresquinhas para você.
              </p>
              <Link href="/ofertas">
                <button className="flex items-center justify-center gap-2 mt-2 w-[73px] h-[23px] rounded-full px-2 py-1 bg-[#CBA8FF] text-white text-[10px] font-lato transition-all duration-300 ease-out hover:opacity-90">
                  Avançar
                  <FaArrowRight size={8} />
                </button>
              </Link>
            </div>

            <Image
              src="/img/unicornioimg1.png"
              alt="Unicórnio"
              width={175}
              height={174}
              className="absolute bottom-0 right-0 z-0 w-[120px] sm:w-[175px] h-auto"
            />
          </section>

          <section
            className="relative flex flex-col items-start text-left text-white 
      w-full sm:w-[324px] h-[200px] sm:h-[242.5px] rounded-[16px] 
      pt-8 sm:pt-[57px] pr-4 sm:pr-[22px] pb-8 sm:pb-[57px] pl-4 sm:pl-[22px] gap-[10px]"
            style={{ backgroundColor: theme === "light" ? "#8C4DFF" : "#323255ff" }}
          >
            <Image
              src="/img/backgroundcard.png"
              alt="background para o card em forma de ondas"
              fill
              className="absolute inset-0 object-cover opacity-60 rounded-[16px]"
            />

            <div className="relative z-10 flex flex-col items-start gap-2">
              <h2 className="w-full sm:w-[280px] font-lato font-bold text-[16px] sm:text-[20px] uppercase text-white tracking-[0.16em]">
                PERSONALIZE
              </h2>
              <p className="w-full sm:w-[280px] font-lato font-normal text-[9px] sm:text-[10px] text-white">
                Monte um vestido personalizado <br /> usando como base um <br /> modelo do nosso estoque e <br /> gere
                uma imagem da sua <br /> criança vestindo ele.
              </p>
              <Link href="/personalizacao">
                <button className="flex items-center justify-center gap-2 mt-2 w-[73px] h-[23px] rounded-full px-2 py-1 bg-[#CBA8FF] text-white text-[10px] font-lato transition-all duration-300 ease-out hover:opacity-90">
                  Avançar
                  <FaArrowRight size={8} />
                </button>
              </Link>
            </div>

            <Image
              src="/img/unicornioimg2.png"
              alt="Unicórnio"
              width={175}
              height={174}
              className="absolute bottom-0 right-0 z-0 w-[120px] sm:w-[175px] h-auto"
            />
          </section>
        </div>

        {/* Card grande vestidos em promocao  */}
        <a href="/nova-colecao" className="flex flex-1 items-center">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[496px] rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src="/img/modelomainbanner.png"
              alt="Linha Infantil com Mega Promoção"
              fill
              className="object-cover"
            />
          </div>
        </a>
      </section>

     {/* seção sobre a loja */}
<section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start my-10 lg:my-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
  <div className="flex flex-col items-center lg:items-start w-full lg:min-w-[480px] lg:max-w-[480px]">
    <Image src="/img/unicornio2.png" 
      alt="Mascote Fantasiando" 
      width={480} 
      height={480} 
      className="mb-6 lg:mb-8 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none h-auto" 
    />

    <div className="text-center lg:text-start w-full">
      <p className="text-[#FF6B35] font-medium mb-3 text-sm sm:text-base">— Fantasiando</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Um pouco sobre a loja</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
        Ações sociais e projetos com foco nas pessoas com deficiência.
        <br />
        Participe e faça a diferença!
      </p>
      <Link href="/sobrealoja">
        <button className="bg-[#FF9A56] hover:bg-[#FF8A42] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base">
          Saiba mais
        </button>
      </Link>
    </div>
  </div>

  {/* cards direita */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-full">
    <div className="bg-white dark:bg-[#1E1E2F] rounded-2xl p-3 sm:p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-[#FFD23F] rounded-xl flex items-center justify-center mb-4">
        <FaHandshake className="text-white text-lg" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Text</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore
        voluptatem ut ipsum corrup...
      </p>
      <button className="text-[#FF9A56] text-sm font-medium hover:text-[#FF8A42] transition-colors underline">
        Saiba mais
      </button>
    </div>

    <div className="bg-white dark:bg-[#1E1E2F] rounded-2xl p-3 sm:p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center mb-4">
        <FaUsers className="text-white text-lg" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Text</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore
        voluptatem ut ipsum corrup...
      </p>
      <button className="text-[#FF9A56] text-sm font-medium hover:text-[#FF8A42] transition-colors underline">
        Saiba mais
      </button>
    </div>

    <div className="bg-white dark:bg-[#1E1E2F] rounded-2xl p-3 sm:p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-[#FFD23F] rounded-xl flex items-center justify-center mb-4">
        <MdPublic className="text-white text-lg" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Text</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore
        voluptatem ut ipsum corrup...
      </p>
      <button className="text-[#FF9A56] text-sm font-medium hover:text-[#FF8A42] transition-colors underline">
        Saiba mais
      </button>
    </div>

    <div className="bg-white dark:bg-[#1E1E2F] rounded-2xl p-3 sm:p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-[#FFD23F] rounded-xl flex items-center justify-center mb-4">
        <FaHandshake className="text-white text-lg" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Text</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore
        voluptatem ut ipsum corrup...
      </p>
      <button className="text-[#FF9A56] text-sm font-medium hover:text-[#FF8A42] transition-colors underline">
        Saiba mais
      </button>
    </div>
  </div>
</section>

      {/* Card de Vestidos */}
      <section
        className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden my-6 lg:my-10 px-4"
        style={{ backgroundColor: theme == "light" ? "#8C4DFF" : "#323255ff"}}
      >
        <Image
          src="/img/backgroundcard.png"
          alt="Fundo decorativo com ondas"
          fill
          className="absolute inset-0 object-cover opacity-40 rounded-2xl"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 py-6 lg:py-10 gap-6">
          <div className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto">
            <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/70 text-gray-600 hover:bg-white shadow flex-shrink-0" aria-label="Ver vestidos anteriores">
              <FaAngleLeft size={12} className="lg:text-sm" />
            </button>

            {/* Vestidos */}
            <div className="flex gap-2 lg:gap-4 overflow-x-auto scrollbar-hide">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden w-28 h-36 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-60 flex-shrink-0 border-8 border-white "
                >
                  <Image
                    src="/img/vestido.jpg"
                    alt={`Vestido ${i}`}
                    width={200}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/70 text-gray-600 hover:bg-white shadow flex-shrink-0" aria-label="Ver mais vestidos">
              <FaAngleRight size={12} className="lg:text-sm" />
            </button>
          </div>

          <div className="text-white max-w-md text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase tracking-wide opacity-80">— Estoque</p>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4">Alguns vestidos disponíveis</h2>
            <p className="text-xs lg:text-sm xl:text-base opacity-90 leading-relaxed">
              Descubra peças únicas feitas com carinho para deixar a imaginação das crianças ainda mais colorida. Cada
              detalhe foi pensado para unir conforto, alegria e fantasia em um só look. Aproveite e escolha o vestido
              perfeito para transformar qualquer momento em uma lembrança mágica
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
