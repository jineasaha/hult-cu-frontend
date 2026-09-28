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
  title: "Team Registration",
  description:
    "Everything you need to build your team, meet the eligibility requirements, register for Hult Prize OnCampus at the University of Calcutta, and prepare your venture for the competition.",
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
