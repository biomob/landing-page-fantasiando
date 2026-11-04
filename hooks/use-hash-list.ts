"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";

const subscribe = (notify: () => void) => {
  window.addEventListener("hashchange", notify);
  return () => window.removeEventListener("hashchange", notify);
};
const readHash = () => decodeURIComponent(window.location.hash.slice(1));
const readServerHash = () => "";

/**
 * Lista guardada no hash da URL (ex.: /colecao#princesas,aniversario).
 * Valores fora de `allowed` são ignorados.
 */
export function useHashList(allowed: readonly string[]) {
  const hash = useSyncExternalStore(subscribe, readHash, readServerHash);
  const key = allowed.join(",");
  const values = useMemo(() => hash.split(",").filter((value) => key.split(",").includes(value)), [hash, key]);

  const setValues = useCallback((next: string[]) => {
    window.history.replaceState(null, "", next.length ? `#${next.join(",")}` : window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }, []);

  return [values, setValues] as const;
}
