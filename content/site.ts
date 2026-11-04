// Textos e links fixos da vitrine. Trocar aqui reflete em todas as telas.
import { generalWhatsappLink } from "@/lib/whatsapp";

export type SiteLink = { href: string; label: string; external?: boolean };

export const site = {
  name: "Annapê Ateliê",
  logo: "/assets/logo-cor.png",
  announcement: "Peças feitas à mão · Atendimento pelo WhatsApp",
  tagline: "Vestidos e fantasias infantis feitos com carinho, de Petrópolis para todo o Brasil.",
  copyright: "© 2026 Annapê Ateliê · Cores e caimento podem variar.",
};

export const mainNav: SiteLink[] = [
  { href: "/colecao", label: "Coleção" },
  { href: "/prova-virtual", label: "Prova virtual" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export const footerColumns: { title: string; links: SiteLink[] }[] = [
  { title: "Vitrine", links: [{ href: "/colecao", label: "Coleção" }, { href: "/prova-virtual", label: "Prova virtual" }] },
  { title: "Ateliê", links: [{ href: "/sobre", label: "Sobre" }, { href: "/contato", label: "Contato" }, { href: generalWhatsappLink, label: "WhatsApp", external: true }] },
];
