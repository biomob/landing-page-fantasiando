"use client";
import { useTheme } from "@/hooks/use-theme";
import styles from "./accessibility-bar.module.css";

const sun = "M12 3v1.5M12 19.5V21M4.6 4.6l1.1 1.1M18.3 18.3l1.1 1.1M3 12h1.5M19.5 12H21M4.6 19.4l1.1-1.1M18.3 5.7l1.1-1.1M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z";
const moon = "M20.5 13.3A8.5 8.5 0 1 1 10.7 3.5a6.6 6.6 0 0 0 9.8 9.8Z";

/** Chave claro/escuro com o ícone deslizando, como na barra da Biomob. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button type="button" role="switch" aria-checked={dark} className={styles.themeToggle} onClick={toggle} aria-label={dark ? "Trocar para o tema claro" : "Trocar para o tema escuro"}>
      <span className={styles.themeKnob} data-dark={dark || undefined}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={dark ? moon : sun} />
        </svg>
      </span>
    </button>
  );
}
