"use client";
import React from "react";
import { ScrollArea } from "@ui/scroll-area";
import { usePathname } from "next/navigation";

export default function PageContainer({
  children,
  scrolllable,
  className,
  removePadding,
}: {
  children: React.ReactNode;
  scrolllable?: boolean;
  className?: string;
  removePadding?: boolean;
}) {
  const pathname = usePathname();
  const isQRCodePage = pathname?.includes("/dashboard/qrcodes");

  return (
    <>
      {scrolllable ? (
        <ScrollArea className={`h-[calc(100dvh-3.25rem)] scroll-container ${className || ""}`}>
          <div className={`h-full ${removePadding ? "" : "p-4 md:px-6"}`}>{children}</div>
        </ScrollArea>
      ) : (
        <div className={`h-full ${removePadding ? "" : "p-4 md:px-6"} ${className || ""}`}>
          <div className={isQRCodePage ? "h-auto" : "h-full max-h-[calc(100vh-3.25rem)] overflow-y-hidden"}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
