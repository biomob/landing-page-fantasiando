"use client";
import { useCallback, useSyncExternalStore } from "react";
import { applyFontSize, BASE_FONT_SIZE, MAX_FONT_SIZE, MIN_FONT_SIZE, readFontSize, subscribePreferences } from "@/lib/preferences";

/** Tamanho base da fonte do site (13–19px), salvo no navegador. */
export function useFontSize() {
  const size = useSyncExternalStore(subscribePreferences, readFontSize, () => BASE_FONT_SIZE);

  return {
    size,
    min: MIN_FONT_SIZE,
    max: MAX_FONT_SIZE,
    setSize: useCallback((value: number) => applyFontSize(value), []),
    increase: useCallback(() => applyFontSize(readFontSize() + 1), []),
    decrease: useCallback(() => applyFontSize(readFontSize() - 1), []),
  };
}
