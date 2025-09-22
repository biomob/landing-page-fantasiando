"use client";

import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="py-4 px-4 relative">
        <div className="max-w-7.5 mx-auto">
          <div className="grid grid-cols-5 gap-3">

            <div className="flex flex-auto">
              <ul className="space-y-3 text-sm text-gray-900">
                <li className="text-l font-bold text-gray-900">Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>BioGuia Cultural</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
              </ul>
            </div>


            <div className="flex flex-auto">
              <ul className="space-y-3 text-sm text-gray-900">
                <li className="text-l font-bold text-gray-900">Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
              </ul>
            </div>


            <div className="flex flex-auto">
              <ul className="space-y-3 text-sm text-gray-900">
                <li className="text-l font-bold text-gray-900">Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
              </ul>
            </div>


            <div className="flex flex-auto">
              <ul className="space-y-3 text-sm text-gray-900">
                <li className="text-l font-bold text-gray-900">Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
              </ul>
            </div>


            <div className="flex flex-auto">
              <ul className="space-y-3 text-sm text-gray-900">
                <li className="text-l font-bold text-gray-900">Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
              </ul>
            </div>
          </div>


          <div className="absolute top-4 right-12 mb-auto">
            <Image
              src="/img/seloneutro.png"
              alt="SeloBiomobNeutro"
              width={114}
              height={114}
              className=" flex items-center mr-auto"
            />

          </div>
        </div>
      </section>


      <div className="flex flex-col m-auto py-[52px]">
        <div className="md:flex items-center justify-center h-16 px-2 gap-x-4 border-t border-black-300">
          <div className="md:flex items-center justify-center h-12 px-2 gap-x-4">
            <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
              <Link href="https://www.instagram.com/biomobguia/" target="_blank">
                <IoLogoInstagram className="text-lg text-gray-800" />
              </Link>

              <Link href="https://www.linkedin.com/company/biomob/" target="_blank">
                <FaLinkedinIn className="text-lg text-gray-800" />
              </Link>

              <Link href="https://pt-br.facebook.com/biomobguia/" target="_blank">
                <FaFacebookF className="text-lg text-gray-800" />
              </Link>

              <Link href="https://www.youtube.com/@biomobguia" target="_blank">
                <FaYoutube className="text-lg text-gray-800" />
              </Link>

              <p className="text-lg text-text-gray">|</p>
              <p className="t1 roboto-font text-gray-800">Baixe o app</p>
            </div>

            <div className="flex items-center justify-center h-[1.925rem] px-2 gap-x-4">
              <Link href="https://apps.apple.com/br/app/biomob/id1090156739">
                <FaApple className="text-lg text-gray-800" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.biomob.bioplus">
                <FaGooglePlay className="text-lg text-gray-800" />
              </Link>
              <p className="text-lg text-gray-800">|</p>
            </div>

            <p className="py-1 px-3 text-sm/snug font-medium text-gray-800">R. Afrânio de Melo Franco, 333 - Quitandinha - Petrópolis/RJ - CEP: 25651-000</p>
            <button onClick={scrollToTop}>
              <BsArrowUpCircleFill className="text-5xl text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};