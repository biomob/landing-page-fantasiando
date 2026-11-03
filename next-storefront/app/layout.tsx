import type { Metadata } from "next";
import { SiteFooter, WhatsappFloat } from "@/components/storefront/site-footer";
import { SiteHeader } from "@/components/storefront/site-header";
import { siteUrl } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Annapê Ateliê — vestidos e fantasias infantis", template: "%s · Annapê Ateliê" },
  description: "Vestidos e fantasias infantis feitos à mão no ateliê. Escolha sua peça e fale com a gente pelo WhatsApp.",
  icons: { icon: "/assets/simbolo-cor.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="storefront">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsappFloat />
        </div>
      </body>
    </html>
  );
}
