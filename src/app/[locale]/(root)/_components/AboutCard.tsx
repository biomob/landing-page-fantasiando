'use client';

import React from "react";


interface AboutCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
}

export function AboutCard({ icon:Icon, title, description, linkText }: AboutCardProps) { 
  return (
    <div className="group p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-80">
      <div className="flex flex-col items-start gap-8">
        <div className="bg-[#FFD243] p-2 rounded-lg group-hover:bg-[#E65100]">
          <Icon className="h-6 w-6 text-[#E65100] group-hover:text-[#FFD243]"/>
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <a href="#" className="text-orange-500 mt-2 inline-block">{linkText}</a>
        </div>
      </div>
    </div>
  );
}
