"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { carouselInterval, type CarouselSlide, slideImages } from "@/content/banners";
import { useCarousel } from "@/hooks/use-carousel";
import styles from "./hero-carousel.module.css";

export type HeroSlide = CarouselSlide & { productName: string };

/** Carrossel do B1: um banner por vez, com pausar, anterior/próximo e bolinhas (WCAG 2.2.2). */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const carousel = useCarousel(slides.length, carouselInterval);
  const slide = slides[carousel.index];
  const images = slideImages(slide.id);
  const position = `${carousel.index + 1} de ${slides.length}`;

  // Pré-carrega a próxima arte para a troca não piscar.
  useEffect(() => {
    const upcoming = slides[(carousel.index + 1) % slides.length];
    const mobile = window.matchMedia?.("(max-width: 700px)").matches;
    const image = new Image();
    image.src = mobile ? slideImages(upcoming.id).mobile : slideImages(upcoming.id).desktop1440;
  }, [carousel.index, slides]);

  return (
    <section className={styles.carousel} aria-roledescription="carrossel" aria-label="Campanhas da coleção" {...carousel.interactionProps}>
      <div className={styles.stage} aria-live={carousel.playing ? "off" : "polite"}>
        <div key={slide.id} className={styles.slide} role="group" aria-roledescription="slide" aria-label={`${position}: ${slide.eyebrow}`}>
          <Link className={styles.artLink} href={slide.href} aria-label={`${slide.eyebrow}: ${slide.title}. ${slide.text} ${slide.cta}.`}>
            <picture>
              <source media="(max-width: 700px)" srcSet={images.mobile} />
              <img
                className={styles.art}
                src={images.desktop1440}
                srcSet={`${images.desktop1440} 1440w, ${images.desktop} 2172w`}
                sizes="(max-width: 1368px) 100vw, 1320px"
                alt=""
                fetchPriority={carousel.index === 0 ? "high" : "auto"}
              />
            </picture>
          </Link>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{slide.eyebrow}</p>
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.text}>{slide.text}</p>
            <div className={styles.actions}>
              <Button className={styles.cta} variant="dark" href={slide.href}>{slide.cta} <Icon name="arrow" size={18} /></Button>
              <Link className={styles.productLink} href={`/produto/${slide.productSlug}`}><Icon name="tag" size={16} />Ver o {slide.productName}</Link>
            </div>
          </div>
        </div>
      </div>

      {slides.length > 1 ? (
        <div className={styles.controls}>
          <button type="button" className={styles.control} onClick={carousel.prev} aria-label="Banner anterior">
            <Icon name="back" size={20} />
          </button>
          <div className={styles.dots} role="group" aria-label="Escolher banner">
            {slides.map((item, position) => (
              <button
                key={item.id}
                type="button"
                className={styles.dot}
                aria-current={position === carousel.index ? "true" : undefined}
                aria-label={`Mostrar banner ${position + 1}: ${item.eyebrow}`}
                onClick={() => carousel.goTo(position)}
              />
            ))}
          </div>
          <button type="button" className={styles.control} onClick={carousel.togglePlay} aria-label={carousel.playing ? "Pausar troca automática" : "Retomar troca automática"}>
            <Icon name={carousel.playing ? "pause" : "play"} size={18} />
          </button>
          <button type="button" className={styles.control} onClick={carousel.next} aria-label="Próximo banner">
            <Icon name="arrow" size={20} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
