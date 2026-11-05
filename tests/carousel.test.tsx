import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HeroCarousel, type HeroSlide } from "../components/home/hero-carousel";
import { carouselInterval, homeCarousel } from "../content/banners";

const slides: HeroSlide[] = homeCarousel.slice(0, 3).map((slide) => ({ ...slide, productName: `Peça ${slide.id}` }));
const setReducedMotion = (reduce: boolean) => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: reduce && query.includes("reduce"),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
};
const current = () => screen.getByRole("group", { name: /de 3/ }).getAttribute("aria-label");

beforeEach(() => setReducedMotion(false));
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("HeroCarousel", () => {
  it("navigates with previous/next buttons and dots", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel slides={slides} />);

    expect(current()).toBe("1 de 3: Nova coleção");
    await user.click(screen.getByRole("button", { name: "Próximo banner" }));
    expect(current()).toBe("2 de 3: Coleção encantada");
    await user.click(screen.getByRole("button", { name: "Banner anterior" }));
    await user.click(screen.getByRole("button", { name: "Banner anterior" }));
    expect(current()).toBe("3 de 3: Coleção princesas");

    await user.click(screen.getByRole("button", { name: "Mostrar banner 2: Coleção encantada" }));
    expect(screen.getByRole("button", { name: "Mostrar banner 2: Coleção encantada" })).toHaveAttribute("aria-current", "true");
  });

  it("advances on its own and can be paused (WCAG 2.2.2)", () => {
    vi.useFakeTimers();
    render(<HeroCarousel slides={slides} />);

    act(() => vi.advanceTimersByTime(carouselInterval));
    expect(current()).toBe("2 de 3: Coleção encantada");

    act(() => screen.getByRole("button", { name: "Pausar troca automática" }).click());
    act(() => vi.advanceTimersByTime(carouselInterval * 3));
    expect(current()).toBe("2 de 3: Coleção encantada");
    expect(screen.getByRole("button", { name: "Retomar troca automática" })).toBeInTheDocument();
  });

  it("does not autoplay when the user prefers reduced motion", () => {
    setReducedMotion(true);
    vi.useFakeTimers();
    render(<HeroCarousel slides={slides} />);

    act(() => vi.advanceTimersByTime(carouselInterval * 2));
    expect(current()).toBe("1 de 3: Nova coleção");
    expect(screen.getByRole("button", { name: "Retomar troca automática" })).toBeInTheDocument();
  });

  it("exposes the banner text as the link name and real text for mobile", () => {
    render(<HeroCarousel slides={slides} />);

    expect(screen.getByRole("link", { name: /Nova coleção: Vestidos que viram contos de fada\..*Conheça a coleção/ })).toHaveAttribute("href", "/colecao");
    expect(screen.getByRole("heading", { name: "Vestidos que viram contos de fada" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Ver o Peça morango" })).toHaveAttribute("href", "/produto/vestido-morango");
  });
});
