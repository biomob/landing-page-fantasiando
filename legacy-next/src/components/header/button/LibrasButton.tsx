"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export const LibrasButton = () => {
  const { theme } = useTheme();

  function ativarVLibras() {
    const vlibrasButton = document.querySelector('[vw-access-button="true"]') as HTMLElement;

    if (vlibrasButton) {
      vlibrasButton.click();
    }
  }

  return (
    <button className="p-1" onClick={ativarVLibras} aria-label="Abrir ferramenta de libras">
      <div className="relative w-[1.08rem] h-[1.08rem]">
        {theme == "light" ? (
          <Image src={`/img/libras-icon.svg`} fill alt="Ícone do símbolo da Linguagem Brasileira de Sinais" />
        ) : (
          <Image src={`/img/libras-icon-dark.svg`} fill alt="Ícone do símbolo da Linguagem Brasileira de Sinais" />
        )}
      </div>
    </button>
  );
};
