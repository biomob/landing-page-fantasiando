import { Button } from "@/components/ui/button";
import Image from "next/image";

export const TeatcherWithAutonomyBanner = () => {
  return (
    <div className="flex gap-12 items-center justify-center">
      <Image
        alt="Professor com autonomia"
        src="/img/wallpaper/mockup.png"
        width={337}
        height={284}
        className="w-[337px] h-[284px] object-cover duration-500"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="heading-03-bold">Professor com Autonomia</span>
          <span className="body-title-light w-full">
            Painel do Professor com Acesso Restrito Cada professor tem acesso apenas à sua unidade e seus alunos.
            Controle de presença, notificações e agendamento de treinos de forma simples e eficiente.
          </span>
        </div>
        <Button>Quero conhecer</Button>
      </div>
    </div>
  );
};
