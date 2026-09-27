import type { Metadata } from "next";

import { Hero } from "@/components/team-registration/Hero";
import { BeforeYouRegister } from "@/components/team-registration/BeforeYouRegister";
import { BuildYourTeam } from "@/components/team-registration/BuildYourTeam";
import { ShapeYourVenture } from "@/components/team-registration/ShapeYourVenture";
// import { WhatYoullSubmit } from "@/components/team-registration/WhatYoullSubmit";
import { ProtectYourWork } from "@/components/team-registration/ProtectYourWork";
import { PrepareAndPitch } from "@/components/team-registration/PrepareAndPitch";

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

      <ShapeYourVenture />

      <ProtectYourWork />

      <PrepareAndPitch />

      {/* <WhatYoullSubmit /> */}
    </>
  );
}
