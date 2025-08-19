import { Button } from "@/components/ui/button";

export const ImageTextBanner = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-[url(/img/wallpaper/image1.png)] py-[4.125rem] bg-cover px-[.75rem] lg:px-[158px]">
      <div className="text-center heading-05-bold text-white flex flex-col ">
        <p>Pronto para modernizar sua escola de treinamento?</p>
        <p>
          Transforme a experiência de professores, alunos e gestores com uma solução feita para performance e
          organização.
        </p>
      </div>
      <Button>Quero conhecer</Button>
    </div>
  );
};
