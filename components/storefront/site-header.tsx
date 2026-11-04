/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icon";

export const navItems = [
  { href: "/colecao", label: "Coleção" },
  { href: "/prova-virtual", label: "Prova virtual" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);
  const links = navItems.map((item) => (
    <Link key={item.href} href={item.href} onClick={close} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
      {item.label}
    </Link>
  ));

  return (
    <>
      <div className="announcement"><span>♥</span> Peças feitas à mão · Atendimento pelo WhatsApp</div>
      <header className="store-header">
        <div className="header-inner">
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="icon-button menu-toggle">
            <Icon name={menuOpen ? "x" : "menu"} size={23} />
          </button>
          <Link className="logo-button" href="/" onClick={close}><img src="/assets/logo-cor.png" alt="Annapê Ateliê" /></Link>
          <nav aria-label="Navegação principal" className="desktop-nav">{links}</nav>
          <a className="button primary header-cta" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={17} /><span>Falar no WhatsApp</span>
          </a>
        </div>
        {menuOpen && <nav aria-label="Navegação principal" className="mobile-menu">{links}</nav>}
      </header>
    </>
  );
}
