"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  const borderColor = !mounted
    ? "border-black"
    : theme === "dark" || resolvedTheme === "dark"
    ? "border-white"
    : "border-black";

  return (
    <div className={`flex flex-col m-auto py-3 ${borderColor} max-w-[1200px] w-full px-4 border-t`}>
      <div className="md:flex items-center justify-center h-12 px-2 gap-x-4">
        <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
          <Link href="https://www.instagram.com/biomobguia/" target="_blank">
            <IoLogoInstagram className="text-lg text-text-grey" />
          </Link>

          <Link href="https://www.linkedin.com/company/biomob/" target="_blank">
            <FaLinkedinIn className="text-lg text-text-grey" />
          </Link>

          <Link href="https://pt-br.facebook.com/biomobguia/" target="_blank">
            <FaFacebookF className="text-lg text-text-grey" />
          </Link>

          <Link href="https://twitter.com/biomob" target="_blank">
            <Image src="/img/x.png" alt="X" width={13} height={13} className="object-contain" />
          </Link>

          <Link href="https://www.youtube.com/@biomobguia" target="_blank">
            <FaYoutube className="text-lg text-text-grey" />
          </Link>

          <p className="text-lg text-text-gray">|</p>
          <p className="t1 roboto-font text-text-grey">Baixe o app</p>
        </div>

        <div className="flex items-center justify-center h-[1.925rem] gap-x-4">
          <Link href="https://apps.apple.com/br/app/biomob/id1090156739">
            <FaApple className="text-lg text-text-grey" />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.biomob.bioplus">
            <FaGooglePlay className="text-lg text-text-gray" />
          </Link>
          <p className="text-lg text-gray">|</p>
        </div>

        <p className="t1 roboto-font text-text-grey">
          R. Afrânio de Melo Franco, 333 – Quitandinha – Petrópolis/RJ – CEP: 25651-000
        </p>

        <button onClick={scrollToTop}>
          <BsArrowUpCircleFill className="text-5xl text-grey-800" />
        </button>
      </div>
    </div>
  );
};