"use client";

import { useTheme } from "next-themes";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ChangeThemeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return (
      <button className="p-1" aria-label={theme === "light" ? "Alterar para tema escuro" : "Alterar para tema claro"}>
        <MdDarkMode size="1.08rem" color="rgb(var(--var-text-verde-medio))" />
      </button>
    );
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="p-1"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Alterar para tema escuro" : "Alterar para tema claro"}
    >
      {theme == "light" ? (
        <MdDarkMode size="1.08rem" color="rgb(var(--var-text-verde-medio))" />
      ) : (
        <MdLightMode size="1.08rem" color="rgb(var(--var-text-verde-medio))" />
      )}
    </button>
  );
};
