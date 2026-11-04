"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";
import { generalWhatsappLink } from "@/lib/whatsapp";
import styles from "./mobile-tab-bar.module.css";

const tabs = [
  { href: "/", label: "Início", path: "M3 11 12 4l9 7v9H3Z" },
  { href: "/colecao", label: "Coleção", path: "M4 4h7v7H4ZM13 4h7v7h-7ZM4 13h7v7H4ZM13 13h7v7h-7Z" },
  { href: "/prova-virtual", label: "Prova", path: "M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z" },
];

const TabIcon = ({ path }: { path: string }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
);

/** Barra de atalhos fixa no rodapé do celular. */
export function MobileTabBar() {
  const pathname = usePathname();
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav aria-label="Atalhos do celular" className={styles.bar}>
      {tabs.map((tab) => (
        <Link key={tab.href} className={styles.item} href={tab.href} aria-current={isCurrent(tab.href) ? "page" : undefined}>
          <TabIcon path={tab.path} />{tab.label}
        </Link>
      ))}
      <a className={cx(styles.item, styles.whatsapp)} href={generalWhatsappLink} target="_blank" rel="noopener noreferrer">
        <TabIcon path="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6Z" />WhatsApp
      </a>
    </nav>
  );
}
