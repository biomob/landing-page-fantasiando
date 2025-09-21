import Image from "next/image";
import { Button } from "@/components/ui/button";

type HighlightCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function HighlightCard({ title, description, imageSrc, imageAlt }: HighlightCardProps) {
  return (
    <div className="flex-1 bg-[#8B5CF6] rounded-2xl p-6 text-white shadow-md flex items-center justify-between gap-4 bg-[url('/img/textura.png')] bg-cover bg-no-repeat bg-center">
      <div>
        <h3 className="text-xl font-Lato font-bold uppercase leading-[1.15] tracking-[0.16em]">
          {title}
        </h3>
        <p className="text-sm mt-2">
          {description}
        </p>
        <Button className="mt-4 px-4 py-1">Avançar →</Button>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={180}
        height={80}
        quality={100}
        priority
        className="translate-y-10 translate-x-5"
      />
    </div>
  );
}
