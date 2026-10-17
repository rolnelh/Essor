import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero/hero-section";
// import { WhySection } from "@/components/sections/why/why-section";
import { IdeasSection } from "@/components/sections/ideas/ideas-section";
import { BenefitsSection } from "@/components/sections/benefits/benefits-section";
import { PublishSection } from "@/components/sections/publish/publish-section";
import { PlanningSection } from "@/components/sections/planning/planning-section";
import { ClosingSection } from "@/components/sections/closing/closing-section";
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <HeroSection />
        {/* <WhySection /> */}
        <IdeasSection />
        <BenefitsSection />
        <PublishSection />
        <PlanningSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  );
}
