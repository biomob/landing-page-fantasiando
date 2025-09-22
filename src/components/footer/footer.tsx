"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

 return (
    <>
     <section className="py-16 px-12 relative">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-5 gap-8">
     
      <div className="flex flex-col">
        <ul className="space-y-2 text-sm text-900">
          <li className="font-medium">Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>BioGuia Cultural</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
        </ul>
      </div>

     
      <div className="flex flex-col">
        <ul className="space-y-2 text-sm text-700">
          <li className="font-medium">Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
        </ul>
      </div>

     
      <div className="flex flex-col">
        <ul className="space-y-2 text-sm text-700">
          <li className="font-medium">Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
        </ul>
      </div>

     
      <div className="flex flex-col">
        <ul className="space-y-2 text-sm text-700">
          <li className="font-medium">Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
        </ul>
      </div>

      
      <div className="flex flex-col">
        <ul className="space-y-2 text-sm text-700">
          <li className="font-medium">Lorem ipsum dol</li>
          <li>Lorem ipsum dol</li>
        </ul>
      </div>
    </div>
    

    <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
      <img
        src="/img/selobiomob.png"
        alt="Selo Biomob"
        width={80}
        height={80}
        className="w-20 h-20 object-contain"
      />
    </div>
  </div>
</section>

    <div className="flex flex-col m-auto py-[52px]">
      <div className="md:flex items-center justify-center h-16 px-2 gap-x-4  border-t border-black-300">
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

          <Link href="https://www.youtube.com/@biomobguia" target="_blank">
            <FaYoutube className="text-lg text-text-grey" />
          </Link>

          <p className="text-lg text-text-gray">|</p>
          <p className="t1 roboto-font text-text-grey">Baixe o app</p>
        </div>

        <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
          <Link href="https://apps.apple.com/br/app/biomob/id1090156739">
            <FaApple className="text-lg text-text-grey" />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.biomob.bioplus">
            <FaGooglePlay className="text-lg text-text-gray" />
          </Link>
          <p className="text-lg text-gray">|</p>
        </div>
<address>R. Afrânio de Melo Franco, 333 - Quitandinha - Petrópolis/RJ - CEP: 25651-000</address>
        <button onClick={scrollToTop}>
          <BsArrowUpCircleFill className="text-5xl text-grey-800" />
        </button>
      </div>
    </div>
    </>
  );
};
