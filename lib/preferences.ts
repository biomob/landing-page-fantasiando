// Preferências de acessibilidade guardadas no navegador e aplicadas no <html>.

export type Theme = "light" | "dark";

export const THEME_KEY = "fantasiando-theme";
export const FONT_SIZE_KEY = "fantasiando-font-size";
export const BASE_FONT_SIZE = 16;
export const MIN_FONT_SIZE = 13;
export const MAX_FONT_SIZE = 19;

const CHANGE_EVENT = "fantasiando:preferences";

export const clampFontSize = (value: number) => Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, Math.round(value)));

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Navegação privada ou armazenamento bloqueado: a preferência vale só nesta visita.
  }
}

export function subscribePreferences(notify: () => void) {
  window.addEventListener(CHANGE_EVENT, notify);
  return () => window.removeEventListener(CHANGE_EVENT, notify);
}

export const readTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  store(THEME_KEY, theme);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export const readFontSize = () => clampFontSize(parseFloat(document.documentElement.style.fontSize) || BASE_FONT_SIZE);

export function applyFontSize(size: number) {
  const value = clampFontSize(size);
  document.documentElement.style.fontSize = `${value}px`;
  store(FONT_SIZE_KEY, String(value));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Roda antes da primeira pintura para não piscar tema/fonte errados. */
export const preferencesScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("${THEME_KEY}");d.dataset.theme=t==="dark"?"dark":"light";var f=parseInt(localStorage.getItem("${FONT_SIZE_KEY}"),10);if(f>=${MIN_FONT_SIZE}&&f<=${MAX_FONT_SIZE})d.style.fontSize=f+"px";}catch(e){}})();`;
