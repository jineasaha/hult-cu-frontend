import type { Metadata } from "next";

import { AboutMotion } from "@/components/about/AboutMotion";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsHultPrize } from "@/components/about/WhatisHultPrize";
import { SdgImpact } from "@/components/about/SdgImpact";
import { PrizeSection } from "@/components/about/PrizeSection";
import { OnCampusSection } from "@/components/about/OnCampusSection";
import { BeyondCompetition } from "@/components/about/BeyondCompetition";
import { EvaluationCriteria } from "@/components/about/EvaluationCriteria";
import { JourneySection } from "@/components/about/JourneySection";
import { AboutClosing } from "@/components/about/AboutClosing";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the Hult Prize, its impact framework, the University of Calcutta OnCampus programme, venture development opportunities, evaluation criteria and the journey from idea to global impact.",
};

export default function AboutPage() {
  return (
    <>
      <AboutMotion />

      <main className="overflow-hidden">
        <AboutHero />

        <WhatIsHultPrize />

        <SdgImpact />

        <PrizeSection />

        <OnCampusSection />

        <BeyondCompetition />

        <EvaluationCriteria />

        <JourneySection />

        <AboutClosing />
      </main>
    </>
  );
}
