import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — vestidos e fantasias infantis`, template: `%s · ${site.name}` },
  description: "Vestidos e fantasias infantis feitos à mão no ateliê. Escolha sua peça e fale com a gente pelo WhatsApp.",
  icons: { icon: "/assets/simbolo-cor.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <AnnouncementBar message={site.announcement} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
