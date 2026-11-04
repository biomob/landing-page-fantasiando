"use client";

import { MainBannerSkeleton } from "./_components/MainBannerSkeleton";
export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-12 h-full">
      <MainBannerSkeleton />
    </div>
  );
}
