import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

type UnauthorizedPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function UnauthorizedPage({ params }: UnauthorizedPageProps) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PageContainer scrolllable>
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500" />
          <h1 className="text-3xl font-bold tracking-tight">Acesso Negado</h1>
          <p className="text-lg max-w-md">
            Você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou entre em contato
            com o administrador.
          </p>
          <div className="space-x-4">
            <Link className={buttonVariants()} href="javascript:history.back()">
              Voltar
            </Link>
          </div>
        </div>
        <Footer />
      </PageContainer>
    </NextIntlClientProvider>
  );
}

export const metadata = {
  title: "Acesso Negado | TINA",
  description: "Você não tem permissão para acessar esta página.",
};
