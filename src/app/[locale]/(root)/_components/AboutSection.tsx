"use client";

import { AboutCard } from "./AboutCard";
import Image from "next/image";
import {
    UserIcon,
    GlobeAltIcon,
    HeartIcon,
    ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

export const AboutSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                {/* Lado esquerdo */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <Image
                        src="/img/unicornio-sobre.png"
                        alt="Unicórnio Fantasiando"
                        width={523}
                        height={520}
                        className="object-contain"
                    />

                    <div className="mt-6 text-center md:text-left">
                        <span className="text-orange-500 font-semibold">— Fantasiando</span>
                        <h2 className="text-2xl md:text-3xl font-bold mt-1">
                            Um pouco sobre a loja
                        </h2>
                        <p className="text-gray-700 mt-2 max-w-sm">
                            Ações sociais e projetos com foco nas pessoas com deficiência. <br />
                            Participe e faça a diferença!
                        </p>
                        <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
                            Saiba mais
                        </button>
                    </div>
                </div>

                {/* Lado direito - Grid de cards */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Coluna da Esquerda (cards 1 e 3) */}
                    <div className="flex flex-col gap-6">
                        <AboutCard
                            icon={UserIcon}
                            title="Texto"
                            description="Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur"
                            linkText="Saiba mais"
                        />
                        <AboutCard
                            icon={HeartIcon}
                            title="Texto"
                            description="Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur"
                            linkText="Saiba mais"
                        />
                    </div>

                    {/* Coluna da Direita (cards 2 e 4) - com a margem para o efeito */}
                    <div className="flex flex-col gap-6 sm:mt-12">
                        <AboutCard
                            icon={GlobeAltIcon}
                            title="Texto"
                            description="Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur"
                            linkText="Saiba mais"
                        />
                        <AboutCard
                            icon={ChatBubbleBottomCenterIcon}
                            title="Texto"
                            description="Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia qui ullam voluptas cum tempore voluptatem ut ipsum corrupti ex unde quis aut dolor consequatur"
                            linkText="Saiba mais"
                        />
                    </div>

                </div>
            </div>
        </section>


    );
};