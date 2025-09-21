"use client";

import Image from "next/image";
import React from "react";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, link, className }) => {
  return (
    <div
      className={`flex flex-col items-start ${className ?? ""}`}
      style={{
        width: "288px",
        height: "288px",
        padding: "24px",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 46.3px 0px #00000021",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "8px",
          background: "transparent",
        }}
      >
        <Image src={icon} alt={title} width={32} height={32} />
      </div>

      <h3
        style={{
          fontFamily: "Geist",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "120%",
          color: "#383838",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "Geist",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "140%",
          color: "#000000",
        }}
      >
        {description}
      </p>

      <a
        href={link}
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "132%",
          textDecoration: "underline",
          color: "#E65100",
          marginTop: "auto",
        }}
      >
        Saiba mais
      </a>
    </div>
  );
};