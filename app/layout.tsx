import type { Metadata } from "next";
import { AccessibilityBar, SkipLink } from "@/components/accessibility/accessibility-bar";
import { VLibras } from "@/components/accessibility/vlibras";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { PromoStrip } from "@/components/layout/promo-strip";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import { preferencesScript } from "@/lib/preferences";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — vestidos e fantasias infantis`, template: `%s · ${site.name}` },
  description: "Vestidos e fantasias infantis feitos à mão no ateliê. Escolha sua peça e fale com a gente pelo WhatsApp.",
  icons: { icon: "/assets/simbolo-cor.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-theme e font-size são definidos pelo script antes da hidratação.
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body>
        <SkipLink />
        <AccessibilityBar />
        <PromoStrip />
        <SiteHeader />
        <main id="conteudo" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <MobileTabBar />
        <VLibras />
      </body>
    </html>
  );
}
