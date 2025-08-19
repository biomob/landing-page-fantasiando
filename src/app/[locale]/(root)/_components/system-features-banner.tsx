"use client";

import { AppWindow, MonitorSmartphone, LayoutDashboard, Shield, DollarSign, Medal, Calendar } from "lucide-react";
import { IconCard } from "./icon-card";

export const SystemFeaturesBanner = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full relative">
      <div className="flex flex-col w-full justify-center items-center max-w-[60.25rem] text-center">
        <span className="body-title ">Funcionalidades do sistema</span>
        <span className="heading-03-bold ">Diferenciais do sistema</span>
        <span className="body-title-light ">
          Tudo que você e sua equipe precisam em um único sistema, com ferramentas pensadas para facilitar a gestão,
          engajar os alunos e simplificar o dia a dia da sua unidade.
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {SystemFeaturesIconsCardsData.map((item, index) => {
          return <IconCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

const SystemFeaturesIconsCardsData = [
  {
    icon: MonitorSmartphone,
    title: "Aplicativo para o Aluno",
    description: "Tenha seus treinos, lembretes, notificações e rankings diretamente no celular.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel Web para Professores",
    description: "Cada professor tem acesso à sua unidade, com controle de presença e alunos.",
  },
  {
    icon: Shield,
    title: "Gestão Segura e Completa",
    description: "O administrador controla todas as unidades e professores com um painel centralizado.",
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro",
    description: "Visualize mensalidades, inadimplências e relatórios com poucos cliques.",
  },
  {
    icon: Calendar,
    title: "Gestão de Eventos e Competições",
    description: "Cadastre, organize e notifique os alunos sobre competições e eventos.",
  },
  {
    icon: Medal,
    title: "Rankings e Engajamento",
    description: "Crie rankings semanais e mensais para estimular a participação dos alunos.",
  },
];
