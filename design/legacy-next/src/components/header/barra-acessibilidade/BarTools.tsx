"use client";

import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import { fontSize } from "@/utils/fontSize";
import { VLibras } from "@/utils/vLibras";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { LibrasButton } from "../button/LibrasButton";
import { ChangeThemeButton } from "../button/ChangeThemeButton";

export const BarTools = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const { setHtmlFontSize } = useHtmlFontSize();

  function openInNewTab(url: string) {
    window.open(url, "_blank");
  }

  if (!isMounted) {
    return null;
  }
  return (
    <div className="fixed w-full z-50">
      <div className="flex items-center justify-between px-5 lg:px-[6.25rem] p-2 my-0 mx-auto">
        <div className="flex items-center justify-center h-[1.925rem] border border-text-verde-medio  px-2 rounded-md ">
          <VLibras />
          <p className="t0 text-text-verde-medio pr-1 max-sm:sr-only">Acessibilidade</p>

          <div className="w-[1px] h-[70%] bg-text-verde-medio max-sm:hidden" />
          <button
            onClick={() => fontSize.decrease(setHtmlFontSize)}
            aria-label="Diminuir tamanho da fonte"
            className="text-text-verde-medio t2 px-1"
          >
            <span aria-hidden="true">A-</span>
          </button>
          <button
            onClick={() => fontSize.normalize(setHtmlFontSize)}
            aria-label="Normalizar tamanho da fonte"
            className="text-text-verde-medio t2 px-1"
          >
            <span aria-hidden="true">aA</span>
          </button>
          <button
            onClick={() => fontSize.increase(setHtmlFontSize)}
            aria-label="Aumentar tamanho da fonte"
            className="text-text-verde-medio t2 px-1"
          >
            <span aria-hidden="true">A+</span>
          </button>
          <div className="w-[1px] h-[70%] bg-text-verde-medio" />
          <ChangeThemeButton />
          <div className="w-[1px] h-[70%] bg-text-verde-medio" />
          <LibrasButton />
        </div>
        <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
          <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
            <button onClick={() => openInNewTab("https://www.instagram.com/biomobguia/")}>
              <IoLogoInstagram className="text-lg text-text-verde-medio" />
            </button>
            <button onClick={() => openInNewTab("https://www.linkedin.com/company/biomob/")}>
              <FaLinkedinIn className="text-lg text-text-verde-medio" />
            </button>
            <button onClick={() => openInNewTab("https://pt-br.facebook.com/biomobguia/")}>
              <FaFacebookF className="text-lg text-text-verde-medio" />
            </button>
            <button onClick={() => openInNewTab("https://google.com.br/")}>
              <FaXTwitter className="text-lg text-text-verde-medio" />
            </button>
            <button onClick={() => openInNewTab("https://www.youtube.com/@biomobguia")}>
              <FaYoutube className="text-lg text-text-verde-medio" />
            </button>
            <p className="max-sm:hidden text-lg text-text-verde-medio">|</p>
            <p className="max-sm:hidden t1 roboto-font text-text-verde-medio">Baixe o app</p>
          </div>
          <div className="max-sm:hidden flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
            <button onClick={() => openInNewTab("https://apps.apple.com/br/app/biomob/id1090156739")}>
              <FaApple className="text-lg text-text-verde-medio" />
            </button>
            <button onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.biomob.bioplus")}>
              <FaGooglePlay className="text-lg text-text-verde-medio" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
