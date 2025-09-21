"use client";

import React, { useEffect, useRef, useState } from "react";
import SwitchWithIcon from "../ui/switchWithIcon";
import Image from "next/image";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import { NextImage } from "../ui/NextImage";
import { useTranslations } from "next-intl";
import { VLibrasIntegration } from "./VLibrasIntegration";
import { useTheme } from "next-themes";
import FontSizeSlider from "../ui/FontSizeSlider";

export const AcessibilityBar = ({ locale }: { locale: string }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const t = useTranslations("Header");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
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
    if (vlibrasButton) vlibrasButton.click();
  }

  if (!isMounted) return <BarToolsSkeleton />;

  const bgColor = "#FFFFFF";
  const textColor = "#000000";
  const librasIcon = "/ico/librasDark.svg";

  return (
    <div
      className="flex items-center gap-4 px-4 py-2 w-full"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <VLibrasIntegration />

      <div className="flex gap-4 items-center max-md:mx-auto mr-auto">
        <div className="hidden lg:flex gap-1 items-center text-end max-h-[3.125rem] overflow-hidden">
          <span className="flex flex-col text-sm justify-end">
            <span className="w-max text-end">by</span>
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
          src={librasIcon}
          onClick={ativarVLibras}
          alt={t("ativarVLibras")}
          height={32}
          width={32}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AcessibilityBar;