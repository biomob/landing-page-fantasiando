// Textos e links fixos da vitrine. Trocar aqui reflete em todas as telas.
import type { IconName } from "@/components/ui/icon";
import { generalWhatsappLink } from "@/lib/whatsapp";

export type SiteLink = { href: string; label: string; icon: IconName; external?: boolean };

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

export const promoMessages: { text: string; icon: IconName }[] = [
  { text: "Envio para todo o Brasil", icon: "truck" },
  { text: "Ajustes sob medida", icon: "scissors" },
  { text: "Atendimento pelo WhatsApp", icon: "whatsapp" },
];

/** Ícone de cada tema do catálogo (slug → ícone). Temas novos caem em "tag". */
export const categoryIcons: Record<string, IconName> = {
  princesas: "crown",
  "festa-junina": "bunting",
  fantasias: "wand",
  aniversario: "cake",
};
export const categoryIcon = (slug: string): IconName => categoryIcons[slug] ?? "tag";

/** Menu do celular (botão ☰). */
export const mainNav: SiteLink[] = [
  { href: "/colecao", label: "Coleção", icon: "grid" },
  { href: "/favoritos", label: "Favoritos", icon: "heart" },
  { href: "/sobre", label: "Sobre", icon: "info" },
  { href: "/contato", label: "Contato", icon: "chat" },
];

/** Faixa de categorias abaixo do header. `short` aparece nos chips do celular. */
export const categoryNav: (SiteLink & { short?: string })[] = [
  { href: "/colecao", label: "Novidades", icon: "sparkle" },
  { href: "/colecao#princesas", label: "Princesas", icon: "crown" },
  { href: "/colecao#festa-junina", label: "Festa junina", icon: "bunting" },
  { href: "/colecao#fantasias", label: "Fantasias temáticas", short: "Fantasias", icon: "wand" },
  { href: "/colecao#aniversario", label: "Aniversário", icon: "cake" },
  { href: "/contato", label: "Sob medida", icon: "scissors" },
];

export const footerColumns: { title: string; links: SiteLink[] }[] = [
  {
    title: "Vitrine",
    links: [
      { href: "/colecao", label: "Novidades", icon: "sparkle" },
      { href: "/colecao#princesas", label: "Princesas", icon: "crown" },
      { href: "/colecao#festa-junina", label: "Festa junina", icon: "bunting" },
      { href: "/favoritos", label: "Favoritos", icon: "heart" },
    ],
  },
  {
    title: "Ateliê",
    links: [
      { href: "/sobre", label: "Sobre", icon: "info" },
      { href: "/contato", label: "Guia de tamanhos", icon: "ruler" },
      { href: "/contato", label: "Contato", icon: "chat" },
    ],
  },
];

export const whatsappContact = { label: "WhatsApp do ateliê", href: generalWhatsappLink };
