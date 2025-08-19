import { CarouselTypeTwo } from "./carousel-type-two";

export const StudentAppBanner = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <span className="heading-02-bold">Aplicativo para o Aluno</span>
        <span className="body-title-bold max-w-[60.25rem]">
          O aluno na palma da mão O aplicativo entrega treinos, lembretes de horários, avisos do professor e ranking em
          tempo real. Mais engajamento, mais resultado.
        </span>
      </div>
      <CarouselTypeTwo />
    </div>
  );
};
