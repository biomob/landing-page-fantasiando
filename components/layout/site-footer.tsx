/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { footerColumns, site, type SiteLink } from "@/content/site";
import styles from "./site-footer.module.css";

function FooterLink({ link }: { link: SiteLink }) {
  if (link.external) {
    return <a className={styles.link} href={link.href} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={15} /> {link.label}</a>;
  }
  return <Link className={styles.link} href={link.href}>{link.label}</Link>;
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img className={styles.logo} src={site.logo} alt={site.name} />
        <p className={styles.tagline}>{site.tagline}</p>
      </div>
      {footerColumns.map((column) => (
        <div key={column.title} className={styles.column}>
          <strong>{column.title}</strong>
          {column.links.map((link) => <FooterLink key={link.href} link={link} />)}
        </div>
      ))}
      <small className={styles.copyright}>{site.copyright}</small>
    </footer>
  );
}
