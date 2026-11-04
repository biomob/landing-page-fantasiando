"use client";
import { useCallback, useMemo } from "react";
import { useLocationHash } from "./use-location-hash";

/**
 * Lista guardada no hash da URL (ex.: /colecao#princesas,aniversario).
 * Valores fora de `allowed` são ignorados.
 */
export function useHashList(allowed: readonly string[]) {
  const hash = useLocationHash();
  const key = allowed.join(",");
  const values = useMemo(() => hash.split(",").filter((value) => key.split(",").includes(value)), [hash, key]);

  const setValues = useCallback((next: string[]) => {
    // replaceState dispara "hashchange" via lib/hash-events.
    window.history.replaceState(window.history.state, "", next.length ? `#${next.join(",")}` : window.location.pathname + window.location.search);
  }, []);

  return [values, setValues] as const;
}
