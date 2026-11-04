/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scallop } from "@/components/ui/scallop";
import textures from "@/components/ui/textures.module.css";
import { footerColumns, site, whatsappContact } from "@/content/site";
import { cx } from "@/lib/cx";
import styles from "./site-footer.module.css";

function WhatsappButton() {
  return <a className={styles.whatsapp} href={whatsappContact.href} target="_blank" rel="noopener noreferrer">{whatsappContact.label}</a>;
}

/** Rodapé: completo na home, compacto nas páginas internas, centralizado no celular. */
export function SiteFooter() {
  const isHome = usePathname() === "/";

  return (
    <>
      {isHome ? <Scallop variant="berry-up" className={styles.scallop} /> : null}
      <footer className={cx(textures.stars, styles.footer)}>
        {isHome ? (
          <>
            <div className={styles.grid}>
              <div>
                <img className={styles.logo} src={site.logoDark} alt={site.name} />
                <p className={styles.tagline}>{site.tagline}</p>
              </div>
              {footerColumns.map((column) => (
                <nav key={column.title} className={styles.column} aria-label={column.title}>
                  <strong className={styles.columnTitle}>{column.title}</strong>
                  {column.links.map((link) => <Link key={link.label} className={styles.link} href={link.href}>{link.label}</Link>)}
                </nav>
              ))}
              <div className={cx(styles.column, styles.contact)}>
                <strong className={styles.columnTitle}>Fale com a gente</strong>
                <WhatsappButton />
                <span className={styles.hours}>{site.hours}</span>
              </div>
            </div>
            <div className={styles.bottom}>
              <span>{site.copyright}</span>
              <span>{site.accessibilityCredit}</span>
            </div>
          </>
        ) : (
          <div className={styles.compact}>
            <img className={styles.compactLogo} src={site.logoDark} alt={site.name} />
            <span className={styles.compactText}>{site.shortCopyright} · {site.accessibilityCredit}</span>
          </div>
        )}
        <div className={styles.mobile}>
          <img className={styles.logo} src={site.logoDark} alt="" />
          <p className={styles.mobileTagline}>{site.tagline}</p>
          <WhatsappButton />
          <p className={styles.mobileCopy}>{site.shortCopyright} · {site.accessibilityCredit}</p>
        </div>
      </footer>
    </>
  );
}
