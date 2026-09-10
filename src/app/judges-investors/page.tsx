import { JudgesInvestorsHero } from "@/components/judges-investors/JudgesInvestorsHero";
import { MysteryJudges } from "@/components/judges-investors/MysteryJudges";
import { PeopleSection } from "@/components/judges-investors/PeopleSection";
import { currentJudges, people } from "@/data/judges-investors";

export const metadata = {
  title: "People | Hult Prize University of Calcutta",
  description:
    "Meet the people who have contributed to the Hult Prize journey at the University of Calcutta.",
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
