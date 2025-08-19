"use client";

import React from "react";
import SwitchWithIcon from "../ui/switchWithIcon";
import Image from "next/image";
import FontSizeSlider from "../ui/FontSizeSlider";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import { NextImage } from "../ui/NextImage";
import { useTranslations } from "next-intl";
import { VLibrasIntegration } from "./VLibrasIntegration";
import { useTheme } from "next-themes";

export const CombinedHeader = ({ locale }: Readonly<{ locale: string }>) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const t = useTranslations("Header");

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownVisible && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible, sidebarOpen]);

  function ativarVLibras() {
    const vlibrasButton = document.querySelector('[vw-access-button="true"]') as HTMLElement;

    if (vlibrasButton) {
      vlibrasButton.click();
    }
  }

  if (!isMounted) {
    return <BarToolsSkeleton />;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50  flex flex-col bg-card-foreground">
      <div
        className="max-h-12 overflow-y-hidden relative flex justify-center 
        md:justify-start gap-4 items-center 
        w-full 
        px-4 py-1 my-0 mx-auto text-card "
      >
        <VLibrasIntegration />
        <div className="flex gap-4 text-card items-center max-md:mx-auto mr-auto">
          <div className="hidden lg:flex gap-1 items-center text-end max-h-[3.125rem] overflow-hidden">
            <span className="flex flex-col text-sm justify-end ">
              <span className="w-max text-end ">by</span>
            </span>
            <NextImage
              imageUrl={"/img/LOGO_INSTITUTO_BRANCA.png"}
              altImage={t("logo")}
              ariaLabel={t("logo")}
              sizes="100vw"
              className="w-auto h-[1.625rem]"
            />
          </div>
          <span className="md:contents hidden font-semibold text-[1.4rem] font-montserrat">{t("acessibilidade")}</span>
          <SwitchWithIcon />
          <FontSizeSlider />
          <Image
            src={theme == "light" ? "/ico/libras.svg" : "/ico/librasDark.svg"}
            onClick={ativarVLibras}
            alt={t("ativarVLibras")}
            height={32}
            width={32}
            className="text-card cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default CombinedHeader;
