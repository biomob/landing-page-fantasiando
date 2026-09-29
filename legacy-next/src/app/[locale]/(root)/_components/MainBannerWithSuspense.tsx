"use client";

import { MainBannerSkeleton } from "@/app/[locale]/(root)/_components/MainBannerSkeleton";
import { Suspense } from "react";
import { MainBanner } from "./MainBanner";

export function MainBannerWithSuspense() {
  return (
    <Suspense fallback={<MainBannerSkeleton />}>
      <MainBanner />
    </Suspense>
  );
}
