"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full fixed top-[48px] z-40 shadow-sm bg-card-foreground ">
      <div className="max-w-[1200px] mx-5 px-6 py-3 flex items-center justify-start gap-4 w-full text-card">
        
        <div className="w-[120px]"></div>

        <nav className="flex-1 flex justify-start gap-8 font-semibold text-sm">
          <Link href="/simulador">Simulador</Link>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre a loja</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        {/* Logo da loja à direita */}
        {/* <div className="w-[120px] flex justify-end -mt-8">
          <Image
            src="/img/unicornio-header.png" 
            alt="FantasIando Kids"
            width={100}
            height={40}
            quality={100}
            className="object-contain"
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
