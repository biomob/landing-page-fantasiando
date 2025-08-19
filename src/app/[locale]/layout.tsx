import "./globals.css";
import type { Metadata } from "next";
import CombinedHeader from "@/components/header/CombinedHeader";
import Providers from "@/components/layout/providers";
import { Footer } from "@/components/footer/footer";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";

const APP_NAME = "Biomob";
const APP_DEFAULT_TITLE = "Biomob";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "Biomob!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const resolvedParams = await params;
  const messages = await getMessages(resolvedParams.locale as any);

  return (
    <html className={`${GeistSans.variable}`} suppressHydrationWarning lang="pt-BR">
      {/* <Script defer data-domain="biomob.org" src="https://plausible.biomob.app/js/script.js" /> */}
      <body className={""}>
        <Providers messages={messages} locale={resolvedParams.locale}>
          <CombinedHeader locale={resolvedParams.locale} />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
