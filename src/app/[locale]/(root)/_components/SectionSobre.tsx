"use client";
import Image from "next/image";

export function SectionSobre() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-start">
          <Image src="/img/unicorn4.png" alt="Unicórnio" width={523} height={519} className="mb-4" priority />

          <div className="flex items-center mb-2">
            <span className="w-4 h-0.5 bg-[#FFAA2D] mr-2 rounded" />
            <span className="text-[#FFAA2D] font-bold">Fantasiando</span>
          </div>

          <h3 className="text-3xl font-semibold text-[#383838] mb-2">Um pouco sobre a loja</h3>
          <p className="text-[#4C4C4C] mb-6">
            Ações sociais e projetos com foco nas pessoas com deficiência.
            <br />
            Participe e faça a diferença!
          </p>
          <button className="bg-[#FFAA2D] text-white rounded-full px-6 py-2 font-medium shadow hover:bg-[#ffb84d] transition">
            Saiba mais
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 flex flex-col items-start shadow">
            <div className="bg-[#FFD243] rounded-lg p-2 mb-2">
              <span role="img" aria-label="icon">
                💛
              </span>
            </div>
            <span className="text-xl font-medium mb-1">Text</span>
            <p className="text-xs text-gray-600 mb-2">
              Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia...
            </p>
            <a href="#" className="text-orange-400 text-xs font-semibold hover:underline">
              Saiba mais
            </a>
          </div>

          <div className="bg-white rounded-xl p-4 flex flex-col items-start shadow-lg shadow-orange-100 z-10 mt-8">
            <div className="bg-[#FFD243] rounded-lg p-2 mb-2">
              <span role="img" aria-label="icon">
                👤
              </span>
            </div>
            <span className="text-xl font-medium mb-1">Text</span>
            <p className="text-xs text-gray-600 mb-2">
              Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia...
            </p>
            <a href="#" className="text-[#FFD243] text-xs font-semibold hover:underline">
              Saiba mais
            </a>
          </div>

          <div className="bg-white rounded-xl p-4 flex flex-col items-start shadow">
            <div className="bg-[#FFD243] rounded-lg p-2 mb-2">
              <span role="img" aria-label="icon">
                💛
              </span>
            </div>
            <span className="text-xl font-medium mb-1">Text</span>
            <p className="text-xs text-gray-600 mb-2">
              Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia...
            </p>
            <a href="#" className="text-orange-400 text-xs font-semibold hover:underline">
              Saiba mais
            </a>
          </div>

          <div className="bg-white rounded-xl p-4 flex flex-col items-start shadow mt-8">
            <div className="bg-[#FFD243] rounded-lg p-2 mb-2">
              <span role="img" aria-label="icon">
                💛
              </span>
            </div>
            <span className="text-xl font-medium mb-1">Text</span>
            <p className="text-xs text-gray-600 mb-2">
              Lorem ipsum dolor sit amet. Aut doloribus accusantium est omnis officia...
            </p>
            <a href="#" className="text-orange-400 text-xs font-semibold hover:underline">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
