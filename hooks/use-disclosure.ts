"use client";
import { useCallback, useEffect, useState } from "react";

/** Abre/fecha um painel (menu, gaveta). Fecha com Esc enquanto aberto. */
export function useDisclosure(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return { open, close, toggle };
}
