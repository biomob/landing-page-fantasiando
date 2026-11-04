"use client";
import { useSyncExternalStore } from "react";

// Histerese: compacta depois de 120px e só volta abaixo de 40px, para o header
// (que muda de altura) não ficar alternando perto do limite.
const ENTER = 120;
const LEAVE = 40;
let scrolled = false;

function subscribe(notify: () => void) {
  const onScroll = () => {
    const next = scrolled ? window.scrollY > LEAVE : window.scrollY > ENTER;
    if (next !== scrolled) {
      scrolled = next;
      notify();
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

/** `true` quando a página foi rolada além do topo. */
export function useScrolled() {
  return useSyncExternalStore(subscribe, () => scrolled, () => false);
}
