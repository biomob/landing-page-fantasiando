"use client";
import { useCallback, useSyncExternalStore } from "react";

const subscribe = (notify: () => void) => {
  window.addEventListener("hashchange", notify);
  return () => window.removeEventListener("hashchange", notify);
};
const readHash = () => decodeURIComponent(window.location.hash.slice(1));
const readServerHash = () => "";

/**
 * Estado guardado no hash da URL (ex.: /colecao#princesas).
 * Só aceita valores da lista `allowed`; qualquer outro vira `null`.
 */
export function useHashState(allowed: readonly string[]) {
  const hash = useSyncExternalStore(subscribe, readHash, readServerHash);
  const value = allowed.includes(hash) ? hash : null;

  const setValue = useCallback((next: string | null) => {
    window.history.replaceState(null, "", next ? `#${next}` : window.location.pathname);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }, []);

  return [value, setValue] as const;
}
