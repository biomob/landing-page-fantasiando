/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icon";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <img src="/assets/logo-cor.png" alt="Annapê Ateliê" />
        <p>Vestidos e fantasias infantis feitos com carinho, de Petrópolis para todo o Brasil.</p>
      </div>
      <div>
        <strong>Vitrine</strong>
        <Link href="/colecao">Coleção</Link>
        <Link href="/prova-virtual">Prova virtual</Link>
      </div>
      <div>
        <strong>Ateliê</strong>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
        <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={15} /> WhatsApp</a>
      </div>
      <small>© 2026 Annapê Ateliê · Cores e caimento podem variar.</small>
    </footer>
  );
}

export function WhatsappFloat() {
  return (
    <a className="whatsapp-float" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Falar com o ateliê no WhatsApp">
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
