import type { Metadata } from "next";
import { JudgesInvestorsHero } from "@/components/judges-investors/JudgesInvestorsHero";
import { MysteryJudges } from "@/components/judges-investors/MysteryJudges";
import { PeopleSection } from "@/components/judges-investors/PeopleSection";
import { currentJudges, people } from "@/data/judges-investors";

export const metadata: Metadata = {
  title: "Hult Prize Judges & Investors",
  description:
    "Meet the judges, investors and contributors involved in Hult Prize OnCampus at the University of Calcutta, including current judges for the 2026–27 cohort and people from previous cohorts.",
  alternates: {
    canonical: "/judges-investors",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hult Prize at the University of Calcutta",
    title: "Hult Prize Judges & Investors | University of Calcutta",
    description:
      "Discover the judges, investors and contributors connected with Hult Prize OnCampus at the University of Calcutta.",
    url: "/judges-investors",
  },
};

export default function JudgesInvestorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JudgesInvestorsHero />

      <MysteryJudges judges={currentJudges} />

      <PeopleSection people={people} />
    </main>
  );
}
