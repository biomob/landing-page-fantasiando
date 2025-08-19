"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  mobileImageSrc: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Aplicativo para o Aluno",
    description: "Tenha seus treinos, lembretes, notificações e rankings diretamente no celular.",
    imageSrc: "/img/wallpaper/1.jpeg",
    mobileImageSrc: "/img/wallpaper/mob1.png",
  },
  {
    id: 2,
    title: "Painel Web para Professores",
    description: "Cada professor tem acesso à sua unidade, com controle de presença e alunos.",
    imageSrc: "/img/wallpaper/2.jpeg",
    mobileImageSrc: "/img/wallpaper/mob1.png",
  },
  {
    id: 3,
    title: "Gestão Segura e Completa",
    description: "O administrador controla todas as unidades e professores com um painel centralizado.",
    imageSrc: "/img/wallpaper/3.jpeg",
    mobileImageSrc: "/img/wallpaper/mob1.png",
  },
  {
    id: 4,
    title: "Sistema Completo",
    description: "Otimize a gestão, organize o fluxo e potencialize o desempenho da sua equipe e dos alunos.",
    imageSrc: "/img/wallpaper/4.jpeg",
    mobileImageSrc: "/img/wallpaper/mob1.png",
  },
];

export const CarouselTypeTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  // Função para voltar o slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  // Auto-play com useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <div className="relative flex w-full items-center gap-3 justify-center">
      <div className="relative w-auto h-fit aspect-[776/426] max-h-[426px]">
        <Image
          src={carouselSlides[currentSlide].imageSrc}
          alt={carouselSlides[currentSlide].title}
          className="object-cover w-full h-full  rounded-[.75rem] transition-opacity duration-500 "
          width={776}
          height={426}
          priority
        />
        <div className="absolute inset-0 bg-[hsl(var(--neutral-black-opacity))] pointer-events-none rounded-[.75rem] backdrop-blur-sm"></div>

        <div className="absolute w-full h-full justify-center left-6 top-24 md:top-16 lg:top-[50%] transform -translate-y-1/2 text-white lg:max-w-[368px] flex flex-col md:flex-row lg:flex-col max-lg:gap-2 max-lg:justify-between ">
          <div className="flex flex-col max-w-[368px]">
            <h2 className="text-2xl font-bold mb-3">{carouselSlides[currentSlide].title}</h2>
            <p className="text-sm">{carouselSlides[currentSlide].description}</p>
          </div>

          <div className="flex items-center mt-4 md:mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center mr-2 hover:bg-white/20 transition-colors"
              disabled={isAnimating}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="text-white" size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center mr-4 hover:bg-white/20 transition-colors"
              disabled={isAnimating}
              aria-label="Próximo slide"
            >
              <ChevronRight className="text-white" size={18} />
            </button>

            <div className="flex items-center space-x-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary    " : "bg-none border border-white"
                  }`}
                  aria-label={`Ir para o slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-[.75rem] h-full">
        <Image
          src={carouselSlides[currentSlide].mobileImageSrc}
          alt={carouselSlides[currentSlide].title}
          className="object-cover aspect-[204/425]  rounded-[.75rem] w-full h-auto  transition-opacity duration-500"
          width={204}
          height={425}
          priority
        />
      </div>
    </div>
  );
};
