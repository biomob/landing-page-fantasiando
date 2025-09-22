"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InfoCard } from "./InfoCard";

export const MainBanner = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const textColorClass = !mounted
    ? ""
    : theme === "dark" || resolvedTheme === "dark"
    ? "text-white"
    : "text-[#383838]";

  const textColorParagraph = !mounted
    ? ""
    : theme === "dark" || resolvedTheme === "dark"
    ? "text-white"
    : "text-[#4C4C4C]";

  const sectionBg = !mounted
    ? "#fff"
    : theme === "dark" || resolvedTheme === "dark"
    ? "bg-black"
    : "#ffffff";

  const textColor = !mounted
    ? "#383838"
    : theme === "dark" || resolvedTheme === "dark"
    ? "#FFFFFF"
    : "#383838";

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBgClass = () => {
    if (!mounted) return "";
    return theme === "light" || resolvedTheme === "light"
      ? "bg-[hsl(var(--neutral-light))]"
      : "bg-black";
  };

  return (
    <>
      <section className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-12 w-full items-start mt-12">
        <div
          className={`flex flex-col gap-6 md:gap-8 py-16 px-6 md:px-12 rounded-ee-[9.25rem] col-span-3 ${getBgClass()}`}
        >
          <h1 className="heading-01 text-start mt-10 text-[28px] md:text-[48px] leading-snug md:leading-tight">
            Transformando <span className="text-primary">SONHOS</span> em
            <span className="text-primary"> FANTASIAS</span>
          </h1>
          <p className="heading-05 max-w-full md:max-w-[32rem]">
            Somos de Petrópolis - RJ, mas enviamos com carinho para todo o Brasil.
          </p>

          <div className="flex flex-wrap gap-6 md:gap-10 max-w-full md:max-w-[32rem]">
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
          className="w-full h-auto col-span-2 mt-8 md:mt-28"
        />
      </section>

      <section className="flex gap-6 justify-start mt-10 overflow-x-auto px-4">
        <div className="flex flex-col gap-3 flex-shrink-0">
          <section
            className="relative flex flex-col items-start text-left text-white w-[324px] h-[242.5px] rounded-[16px] pt-[57px] pr-[22px] pb-[57px] pl-[22px] gap-[10px] flex-shrink-0"
            style={{ backgroundColor: "#8C4DFF" }}
          >
            <Image
              src="/img/textura_1.png"
              alt="Textura"
              fill
              className="absolute inset-0 object-cover opacity-60"
            />
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
            className="relative flex flex-col items-start text-left text-white w-[324px] h-[242.5px] rounded-[16px] pt-[57px] pr-[22px] pb-[57px] pl-[22px] gap-[10px] flex-shrink-0"
            style={{ backgroundColor: "#8C4DFF" }}
          >
            <Image
              src="/img/textura_1.png"
              alt="Textura"
              fill
              className="absolute inset-0 object-cover opacity-60"
            />
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

        <a
          href="/colecao-nova"
          className="flex-shrink-0 h-[496px] w-[calc((242.5+242.5+3)*912/493)] max-w-full"
        >
          <Image
            src="/img/linhaInfantil.png"
            alt="Coleção Nova"
            width={((242.5 + 242.5 + 3) * 912) / 493}
            height={242.5 + 242.5 + 3}
            className="rounded-[20px] object-cover h-full w-full"
          />
        </a>
      </section>

      <section className="flex flex-col md:flex-row items-start gap-8 mt-10 ml-[80px]">
        <div className="flex flex-col gap-6">
          <Image
            src="/img/unicornioCards.png"
            alt="Unicórnio"
            width={523}
            height={519.74}
            className="rounded-[20px] object-cover"
          />

          <div className="flex items-center gap-2">
            <div className="w-[22px] h-[2px] bg-[#E65100]" />
            <span className="text-[16px] font-medium" style={{ fontFamily: "Geist", color: "#E65100" }}>
              Fantasiando
            </span>
          </div>

          <h2
            className={`mt-3 ${textColorClass}`}
            style={{ fontFamily: "Geist", fontWeight: 500, fontSize: "32px", lineHeight: "125%" }}
          >
            Um pouco sobre a loja
          </h2>

          <p
            className={`mt-2 max-w-[523px] ${textColorParagraph}`}
            style={{ fontFamily: "Geist", fontWeight: 500, fontSize: "16px", lineHeight: "150%" }}
          >
            Ações sociais e projetos com foco nas pessoas com deficiência. <br />
            Participe e faça a diferença!
          </p>

          <button
            className="mt-4 flex items-center justify-center"
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "16px",
              backgroundColor: "#FFAA2D",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              textAlign: "center",
            }}
          >
            Saiba mais
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[{ icon: "/img/Icon1.png", title: "Text", description: "Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur", link: "#" },
            { icon: "/img/Icon2.png", title: "Text", description: "Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur", link: "#" },
            { icon: "/img/Icon3.png", title: "Text", description: "Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur", link: "#" },
            { icon: "/img/Icon4.png", title: "Text", description: "Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur", link: "#" }
          ].map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              darkMode={theme === "dark" || resolvedTheme === "dark"}
              className={index % 2 === 0 ? "mt-0" : "mt-16"}
            />
          ))}
        </div>
      </section>

      <section
        className="relative flex items-center justify-start w-[1244px] h-[324px] mx-auto mt-10 rounded-[8px] overflow-hidden"
        style={{ backgroundColor: "#B380FF" }}
      >
        <Image
          src="/img/textura2.png"
          alt="Textura de fundo"
          fill
          className="absolute inset-0 object-cover opacity-60"
        />

        <div className="relative z-10 flex items-center gap-4 px-8">
          <button className="flex items-center justify-center bg-white/70 rounded-full p-2 hover:bg-white/90 transition">
            <Image src="/img/setaEsquerda.png" alt="Anterior" width={24} height={24} />
          </button>

          <div className="flex gap-6">
            {["/img/vestido.png", "/img/vestido.png", "/img/vestido.png"].map((v, i) => (
              <Image
                key={i}
                src={v}
                alt={`Vestido ${i + 1}`}
                width={150}
                height={200}
                className="rounded-[8px] object-cover shadow-md"
              />
            ))}
          </div>

          <button className="flex items-center justify-center bg-white/70 rounded-full p-2 hover:bg-white/90 transition">
            <Image src="/img/setaDireita.png" alt="Próximo" width={24} height={24} />
          </button>
        </div>

        <div className="relative z-10 flex flex-col max-w-[469px] text-left text-white">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/img/linha2.png" alt="Linha decorativa" width={22} height={1} />
            <span className="text-[16px] font-medium" style={{ fontFamily: "Geist", lineHeight: "150%" }}>
              Estoque
            </span>
          </div>

          <h2 className="text-[32px] font-medium leading-[125%]" style={{ fontFamily: "Geist" }}>
            Alguns vestidos disponíveis
          </h2>

          <p className="mt-4 text-[16px] leading-[150%]" style={{ fontFamily: "Geist", fontWeight: 500 }}>
            Lorem ipsum dolor sit amet. Sit ratione perferendis est
            consequatur nobis in doloribus reprehenderit est saepe vel est
            dolorem quaerat. Est adipisci laborum qui aliquam sit
            consequatur distinctio. Est ipsa fugit ut reprehenderit rem et
            nostrum nisi.
          </p>
        </div>
      </section>

      <section className="relative flex justify-between items-start w-full max-w-[1244px] mx-auto mt-16 px-8 mb-16">
        <div className={`flex flex-wrap gap-12 ${theme === "dark" || resolvedTheme === "dark" ? "text-white" : "text-[#383838]"}`}>
          <div className="flex flex-col gap-[18px] w-[275px]">
            <p className="text-[16px] font-roboto font-medium leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
          </div>
          <div className="flex flex-col gap-[18px] w-[275px]">
            <p className="text-[16px] font-roboto font-medium leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
          </div>
          <div className="flex flex-col gap-[18px] w-[275px]">
            <p className="text-[16px] font-roboto font-medium leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
            <p className="text-[16px] font-roboto font-normal leading-[100%]">Lorem ipsum dol</p>
          </div>
        </div>

        <Image
          src="/img/seloBioMob.png"
          alt="Selo de certificação"
          width={114}
          height={114}
          className="shrink-0"
        />
      </section>
    </>
  );
};