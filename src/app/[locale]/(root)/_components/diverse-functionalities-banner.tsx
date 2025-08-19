import { Calendar, CheckCircle, MessageSquare, Trophy, UserCheck } from "lucide-react";
import Image from "next/image";
import { BorderIconCard } from "./icon-card";

export const DiverseFunctionalitesBanner = () => {
  return (
    <div className="flex gap-12 items-center justify-center">
      <Image
        alt="Professor com autonomia"
        src="/img/wallpaper/mob1.png"
        width={196}
        height={425}
        className="w-[196px] h-[425px] object-cover duration-500"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="heading-03-bold">Diversas funcionalidades</span>
          <span className="body-title-light w-full">
            Tenha total controle da sua academia! Segue uma lista do que você poderá desfrutar:
          </span>
        </div>
        <div className="flex flex-col gap-3 items-start">
          {SystemFeaturesIconsCardsData.map((item, index) => (
            <BorderIconCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SystemFeaturesIconsCardsData = [
  {
    icon: Trophy,
    title: "Cadastre, organize e notifique os alunos sobre competições e eventos.",
  },
  {
    icon: CheckCircle,
    title: "Permite definir objetivos de treino e acompanhar sua evolução de forma motivadora.",
  },
  {
    icon: MessageSquare,
    title: "Canal direto com o professor para receber instruções, feedbacks ou orientações personalizadas.",
  },
  {
    icon: UserCheck,
    title: "Consulte rapidamente sua frequência e histórico de comparecimento às aulas e treinos.",
  },
  {
    icon: Calendar,
    title:
      "Confira datas, horários e detalhes sobre campeonatos e eventos da unidade com possibilidade de confirmar presença pelo app.",
  },
];
