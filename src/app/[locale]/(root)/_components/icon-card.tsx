import React, { ElementType } from "react";

interface IconCardProps {
  icon: ElementType;
  title: string;
  description: string;
}
export const IconCard = ({ icon, title, description }: IconCardProps) => {
  const Icon = icon;
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Icon className="w-6 h-6 text-primary" />
      <span className="body-paragraph-bold">{title}</span>
      <span className="body-callout-medium max-w-[14.0625rem]">{description}</span>
    </div>
  );
};

export const BorderIconCard = ({ icon, title }: Omit<IconCardProps, "description">) => {
  const Icon = icon;
  return (
    <div className="flex gap-3 items-center justify-center text-start">
      <div className="p-3 border border-border rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="body-callout-medium">{title}</span>
    </div>
  );
};
