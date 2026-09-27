import type { Metadata } from "next";

import { Hero } from "@/components/team-registration/Hero";

export const metadata: Metadata = {
  title: "Team Registration",
  description:
    "Discover the Hult Prize, its impact framework, the University of Calcutta OnCampus programme, venture development opportunities, evaluation criteria and the journey from idea to global impact.",
};

export default function TeamRegistration(){
    return(
        <>
        <Hero/>
        </>
    )
}