import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Footer } from "@/components/footer/footer";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default async function NotFoundPage() {
  return (
    <PageContainer scrolllable>
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6 text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500" />
        <h1 className="text-3xl font-bold tracking-tight">Página Não Encontrada</h1>
        <p className="text-lg max-w-md">
          A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte para a página
          anterior.
        </p>
        <div className="space-x-4">
          <Link className={buttonVariants()} href="javascript:history.back()">
            Voltar
          </Link>
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}

export const metadata = {
  title: "Página Não Encontrada | TINA",
  description: "A página solicitada não foi encontrada.",
};
