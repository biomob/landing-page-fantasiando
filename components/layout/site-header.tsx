/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { mainNav, site } from "@/content/site";
import { useDisclosure } from "@/hooks/use-disclosure";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./site-header.module.css";

function NavLinks({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  return mainNav.map((item) => (
    <Link key={item.href} className={styles.navLink} href={item.href} onClick={onNavigate} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  const menu = useDisclosure();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button className={styles.menuToggle} type="button" aria-label={menu.open ? "Fechar menu" : "Abrir menu"} aria-expanded={menu.open} aria-controls="menu-mobile" onClick={menu.toggle}>
          <Icon name={menu.open ? "x" : "menu"} size={23} />
        </button>
        <Link className={styles.logo} href="/" onClick={menu.close}>
          <img src={site.logo} alt={site.name} />
        </Link>
        <nav aria-label="Navegação principal" className={styles.desktopNav}>
          <NavLinks onNavigate={menu.close} />
        </nav>
        <Button className={styles.cta} size="compact" href={generalWhatsappLink} external aria-label="Falar no WhatsApp">
          <Icon name="whatsapp" size={17} />
          <span className={styles.ctaLabel}>Falar no WhatsApp</span>
        </Button>
      </div>
      {menu.open ? (
        <nav id="menu-mobile" aria-label="Navegação principal" className={styles.mobileNav}>
          <NavLinks onNavigate={menu.close} />
        </nav>
      ) : null}
    </header>
  );
}
