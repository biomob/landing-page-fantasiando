import { CompleteSystemBanner } from "@/app/[locale]/(root)/_components/complete-system-banner";
import { DiverseFunctionalitesBanner } from "@/app/[locale]/(root)/_components/diverse-functionalities-banner";
import { ImageTextBanner } from "@/app/[locale]/(root)/_components/image-text-banner";
import { MainBanner } from "@/app/[locale]/(root)/_components/main-banner";
import { StudentAppBanner } from "@/app/[locale]/(root)/_components/student-app-banner";
import { SystemFeaturesBanner } from "@/app/[locale]/(root)/_components/system-features-banner";
import { TeatcherWithAutonomyBanner } from "@/app/[locale]/(root)/_components/teacher-with-autonomy-banner";
import { Separator } from "@ui/separator";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-[4rem] min-h-screen">
      <MainBanner />
      <div className="flex flex-col gap-[4rem] max-w-[76.8125rem] w-full mx-auto max-xl:max-w-[90vw]">
        <Separator className="bg-primary" />
        <SystemFeaturesBanner />
        <Separator className="bg-primary" />
        <CompleteSystemBanner />
        <Separator className="bg-primary" />
        <TeatcherWithAutonomyBanner />
        <Separator className="bg-primary" />
        <StudentAppBanner />
        <Separator className="bg-primary" />
        <DiverseFunctionalitesBanner />
      </div>
      <Separator className="bg-primary" />
      <ImageTextBanner />
      <Separator className="bg-primary" />
    </div>
  );
};
