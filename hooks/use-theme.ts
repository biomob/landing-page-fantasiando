"use client";
import { useCallback, useSyncExternalStore } from "react";
import { applyTheme, readTheme, subscribePreferences } from "@/lib/preferences";

/** Tema claro/escuro, salvo no navegador. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribePreferences, readTheme, () => "light" as const);
  const toggle = useCallback(() => applyTheme(readTheme() === "dark" ? "light" : "dark"), []);
  return { theme, toggle };
}
