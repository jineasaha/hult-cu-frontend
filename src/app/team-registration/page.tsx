import type { Metadata } from "next";

import { Hero } from "@/components/team-registration/Hero";
import { BeforeYouRegister } from "@/components/team-registration/BeforeYouRegister";
import { BuildYourTeam } from "@/components/team-registration/BuildYourTeam";
import { PrepareAndPitch } from "@/components/team-registration/PrepareAndPitch";
import { ShapeAndProtect } from "@/components/team-registration/ShapeAndProtect";
import { EvaluationAndConduct } from "@/components/team-registration/EvaluationAndConduct";
import { ParticipationCompliance } from "@/components/team-registration/ParticipationCompliance";
import { CompetitionUpdatesAgreement } from "@/components/team-registration/CompetitionUpdatesAgreement";

export const metadata: Metadata = {
  title: "Hult Prize Team Registration",
  description:
    "Build your team for Hult Prize OnCampus at the University of Calcutta. Explore eligibility requirements, team formation, registration guidance, venture preparation and competition rules.",
  alternates: {
    canonical: "/team-registration",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hult Prize at the University of Calcutta",
    title: "Hult Prize Team Registration | University of Calcutta",
    description:
      "Find team eligibility, registration guidance and competition preparation information for Hult Prize OnCampus at the University of Calcutta.",
    url: "/team-registration",
  },
};

export default function TeamRegistration() {
  return (
    <>
      <Hero />

      <BeforeYouRegister />

      <BuildYourTeam />

      <ShapeAndProtect />

      <PrepareAndPitch />

      <EvaluationAndConduct />

      <ParticipationCompliance />

      <CompetitionUpdatesAgreement />
    </>
  );
}
