"use client";
import Form from "next/form";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { categoryNav, mainNav } from "@/content/site";
import { useActiveLink } from "@/hooks/use-active-link";
import { useDisclosure } from "@/hooks/use-disclosure";
import { useFavorites } from "@/hooks/use-favorites";
import { useScrolled } from "@/hooks/use-scrolled";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./site-header.module.css";

function SearchForm({ placeholder }: { placeholder: string }) {
  return (
    <Form action="/colecao" className={styles.search} role="search">
      <label htmlFor="busca" className={styles.srOnly}>Buscar na loja</label>
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14" /></svg>
      <input id="busca" type="search" name="busca" placeholder={placeholder} />
    </Form>
  );
}

export function SiteHeader() {
  const menu = useDisclosure();
  const favorites = useFavorites();
  const isActive = useActiveLink();
  const scrolled = useScrolled();
  const current = (href: string, ignoreHash = false) => (isActive(href, { ignoreHash }) ? "page" : undefined);

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <div className={styles.main}>
        <button className={styles.menuToggle} type="button" aria-label={menu.open ? "Fechar menu" : "Abrir menu"} aria-expanded={menu.open} aria-controls="menu-mobile" onClick={menu.toggle}>
          <Icon name={menu.open ? "x" : "menu"} size={24} />
        </button>
        <Link className={styles.logo} href="/" onClick={menu.close}>
          <BrandLogo />
        </Link>
        <a className={styles.whatsappRound} href={generalWhatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
          <Icon name="whatsapp" size={20} />
        </a>
        <SearchForm placeholder="Buscar vestidos, fantasias, temas…" />
        <nav aria-label="Atalhos" className={styles.shortcuts}>
          <Link className={styles.favorites} href="/favoritos" aria-current={current("/favoritos")}>
            <Icon name="heart" size={20} />
            Favoritos
            {favorites.slugs.length ? <span className={styles.count} aria-label={`${favorites.slugs.length} salvos`}>{favorites.slugs.length}</span> : null}
          </Link>
          <Button size="md" lifted href={generalWhatsappLink} external>
            <Icon name="whatsapp" size={18} /> Falar no WhatsApp
          </Button>
        </nav>
        <nav aria-label="Categorias" className={styles.chips}>
          {categoryNav.map((item) => (
            <Link key={item.label} className={styles.chip} href={item.href} aria-current={current(item.href)}>{item.short ?? item.label}</Link>
          ))}
        </nav>
      </div>
      <nav aria-label="Categorias" className={styles.categories}>
        <div className={styles.categoriesInner}>
          {categoryNav.map((item) => (
            <Link key={item.label} className={styles.categoryLink} href={item.href} aria-current={current(item.href)}>{item.label}</Link>
          ))}
        </div>
      </nav>
      {menu.open ? (
        <nav id="menu-mobile" aria-label="Menu" className={styles.mobileNav}>
          {mainNav.map((item) => <Link key={item.href} href={item.href} onClick={menu.close} aria-current={current(item.href, true)}>{item.label}</Link>)}
        </nav>
      ) : null}
    </header>
  );
}
