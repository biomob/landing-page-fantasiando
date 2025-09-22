import Image from "next/image";
import React from "react";
import { ItemFooter } from "./ItemFooter";

export function FooterSite() {
  return (
    <footer className="w-full bg-white py-8 mb-[-8px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 items-start">
          <div className="md:col-span-1">
            <h4 className="font-medium text-[#383838] mb-3">Lorem ipsum dol</h4>
            <ul className="space-y-2 text-sm text-[#383838] ">
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="BioGuia Cultural" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-[#383838] mb-3">Lorem ipsum dol</h4>
            <ul className="space-y-2 text-sm text-[#383838] ">
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-[#383838] mb-3">Lorem ipsum dol</h4>
            <ul className="space-y-2 text-sm text-[#383838] ">
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-[#383838] mb-3">Lorem ipsum dol</h4>
            <ul className="space-y-2 text-sm text-[#383838] ">
              <ItemFooter name="Lorem ipsum dol" href="#" />
              <ItemFooter name="Lorem ipsum dol" href="#" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-[#383838] mb-3">Lorem ipsum dol</h4>
            <ul className="space-y-2 text-sm text-[#383838] ">
              <ItemFooter name="Lorem ipsum dol" href="#" />
            </ul>
          </div>

          <div className="md:col-span-1 flex justify-end">
            <div className="w-20 h-20 md:w-24 md:h-24 relative">
              <Image src="/img/selo.png" alt="Selo de certificação" fill style={{ objectFit: "contain" }} priority />
            </div>
          </div>
        </div>
        <hr className="border-t-[2px] border-[#383838] my-8" />
      </div>
    </footer>
  );
}
