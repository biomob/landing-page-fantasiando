"use client";

import React from "react";
import AcessibilityBar from "./AcessibilityBar";
import RightHeaderBar from "./RightHeaderBar";
import Link from "next/link";

interface CombinedHeaderProps {
  locale: string;
}

export const CombinedHeader: React.FC<CombinedHeaderProps> = ({ locale }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex flex-col w-full px-4">
        <div className="flex items-center justify-between h-14 pl-10">
          <AcessibilityBar locale={locale} />
          <RightHeaderBar locale={locale} showLinks={false} />
        </div>
        
        <nav className="flex gap-6 text-sm font-semibold py-2 text-black pl-10">
          <Link href={`/${locale}/simulador`}>Simulador</Link>
          <Link href={`/${locale}/inicio`}>Início</Link>
          <Link href={`/${locale}/sobre`}>Sobre a loja</Link>
          <Link href={`/${locale}/contato`}>Contato</Link>
        </nav>
      </div>
    </header>
  );
};