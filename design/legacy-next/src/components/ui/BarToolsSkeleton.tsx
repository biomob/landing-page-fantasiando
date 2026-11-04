"use client";

import React from "react";
import { Skeleton } from "./skeleton";

const BarToolsSkeleton = () => {
  return (
    <div className="bg-bg-header fixed w-full z-50">
      <div className="flex justify-center md:justify-between gap-4 items-center bg-text-verde-medio w-full px-4 py-1 my-0 mx-auto text-cinza-800">
        {/* Coluna da esquerda */}
        <div className="flex gap-4 text-cinza-800 items-center">
          <Skeleton className="w-20 h-4" /> {/* Título "Acessibilidade" */}
          <Skeleton className="w-8 h-8 rounded-md" /> {/* SwitchWithIcon */}
          <Skeleton className="w-32 h-8" /> {/* FontSizeSlider */}
          <Skeleton className="w-8 h-8 rounded-md" /> {/* VLibras Component */}
          <Skeleton className="w-8 h-8 rounded-full" /> {/* Libras Button */}
          <Skeleton className="w-8 h-8 rounded-full" /> {/* MouseSpeak Button */}
          <Skeleton className="w-24 h-4" /> {/* ComboboxLanguage */}
        </div>

        {/* Coluna da direita (logo e texto) */}
        <div className="hidden lg:flex gap-1 items-center text-end">
          <Skeleton className="w-40 h-8" /> {/* Texto "Desenvolvida por" */}
          <Skeleton className="w-20 h-4" /> {/* Texto "Ferramenta" */}
          <Skeleton className="w-40 h-8" /> {/* Logo Institucional */}
        </div>
      </div>
    </div>
  );
};

export default BarToolsSkeleton;
