"use client";
import { type FocusEvent, useCallback, useEffect, useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (notify: () => void) => {
  const media = window.matchMedia?.(motionQuery);
  media?.addEventListener("change", notify);
  return () => media?.removeEventListener("change", notify);
};
const readReducedMotion = () => window.matchMedia?.(motionQuery).matches ?? false;

/**
 * Estado de um carrossel acessível (WCAG 2.2.2): troca automática que pode ser pausada,
 * para enquanto o usuário interage (mouse/foco) e não começa sozinha com "reduzir movimento".
 */
export function useCarousel(count: number, interval: number) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<"auto" | "playing" | "paused">("auto");
  const [interacting, setInteracting] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, readReducedMotion, () => false);

  const playing = choice === "playing" || (choice === "auto" && !reducedMotion);
  const running = playing && !interacting && count > 1;

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((current) => (current + 1) % count), [count]);
  const prev = useCallback(() => setIndex((current) => (current - 1 + count) % count), [count]);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [running, interval, count, index]);

  return {
    index,
    playing,
    goTo,
    next,
    prev,
    togglePlay: () => setChoice(playing ? "paused" : "playing"),
    /** Props para o container: pausa enquanto o mouse está em cima ou o foco está dentro. */
    interactionProps: {
      onPointerEnter: () => setInteracting(true),
      onPointerLeave: () => setInteracting(false),
      onFocus: () => setInteracting(true),
      onBlur: (event: FocusEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
      },
    },
  };
}
