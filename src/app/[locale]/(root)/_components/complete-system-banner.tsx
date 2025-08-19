import { CarouselTypeOne } from "./carousel-type-one";

export const CompleteSystemBanner = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <span className="heading-02-bold">Sistema completo</span>
        <span className="body-title-bold max-w-[60.25rem]">
          Tenha um sistema completo, intuitivo e didático na sua academia — desenvolvido para otimizar a gestão,
          organizar o fluxo e potencializar o desempenho da sua equipe e dos alunos.
        </span>
      </div>
      <CarouselTypeOne />
    </div>
  );
};
