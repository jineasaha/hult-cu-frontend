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
  title: "About the Hult Prize",
  description:
    "Learn about the Hult Prize global student entrepreneurship competition, its focus on social and environmental impact, the University of Calcutta OnCampus programme, the UN Sustainable Development Goals, evaluation criteria and the competition journey.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Hult Prize | University of Calcutta",
    description:
      "Explore the Hult Prize competition, its impact framework and the University of Calcutta OnCampus programme. Discover the challenge, evaluation criteria and journey from student idea to impact.",
    url: "/about",
  },
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
