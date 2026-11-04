// Favoritos guardados só no navegador (sem conta). Lista de slugs.

export const FAVORITES_KEY = "fantasiando-favorites";
const CHANGE_EVENT = "fantasiando:favorites";
const EMPTY = "[]";

export function subscribeFavorites(notify: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === FAVORITES_KEY) notify();
  };
  window.addEventListener(CHANGE_EVENT, notify);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, notify);
    window.removeEventListener("storage", onStorage);
  };
}

/** Texto cru salvo; estável entre leituras para o useSyncExternalStore. */
export function readFavoritesRaw() {
  try {
    return localStorage.getItem(FAVORITES_KEY) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

export function parseFavorites(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(slug: string) {
  const current = parseFavorites(readFavoritesRaw());
  const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  } catch {
    // Armazenamento bloqueado: o favorito não persiste.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
