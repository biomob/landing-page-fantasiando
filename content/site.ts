// Textos e links fixos da vitrine. Trocar aqui reflete em todas as telas.
import { generalWhatsappLink } from "@/lib/whatsapp";

export type SiteLink = { href: string; label: string; external?: boolean };

export const site = {
  name: "Annapê Ateliê",
  logo: "/assets/logo-cor.png",
  logoDark: "/assets/logo-branco.png",
  announcement: "Peças feitas à mão · Atendimento pelo WhatsApp",
  tagline: "Vestidos e fantasias infantis feitos com carinho, de Petrópolis para todo o Brasil.",
  copyright: "© 2026 Annapê Ateliê · Cores e caimento podem variar.",
  shortCopyright: "© 2026 Annapê Ateliê",
  accessibilityCredit: "Acessibilidade by Instituto Biomob",
  hours: "Segunda a sexta, 9h às 18h",
  /** Dias de produção sob encomenda. Enquanto null, os textos de prazo dizem "consulte pelo WhatsApp". */
  productionDays: null as number | null,
  /** Ano de fundação do ateliê. Enquanto null, o selo "Desde" não aparece. */
  foundedYear: null as number | null,
};

export const promoMessages = ["Envio para todo o Brasil", "Ajustes sob medida", "Atendimento pelo WhatsApp"];

/** Menu do celular (botão ☰). */
export const mainNav: SiteLink[] = [
  { href: "/colecao", label: "Coleção" },
  { href: "/favoritos", label: "Favoritos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

/** Faixa de categorias abaixo do header. `short` aparece nos chips do celular. */
export const categoryNav: (SiteLink & { short?: string })[] = [
  { href: "/colecao", label: "Novidades" },
  { href: "/colecao#princesas", label: "Princesas" },
  { href: "/colecao#festa-junina", label: "Festa junina" },
  { href: "/colecao#fantasias", label: "Fantasias temáticas", short: "Fantasias" },
  { href: "/colecao#aniversario", label: "Aniversário" },
  { href: "/contato", label: "Sob medida" },
];

export const footerColumns: { title: string; links: SiteLink[] }[] = [
  { title: "Vitrine", links: [{ href: "/colecao", label: "Novidades" }, { href: "/colecao#princesas", label: "Princesas" }, { href: "/colecao#festa-junina", label: "Festa junina" }, { href: "/favoritos", label: "Favoritos" }] },
  { title: "Ateliê", links: [{ href: "/sobre", label: "Sobre" }, { href: "/contato", label: "Guia de tamanhos" }, { href: "/contato", label: "Contato" }] },
];

export const whatsappContact = { label: "WhatsApp do ateliê", href: generalWhatsappLink };
