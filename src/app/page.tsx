import { Hero } from "@/components/home/Hero";
import { AboutHultPrize } from "@/components/home/AboutHultPrize";
import { EventTimeline } from "@/components/home/EventTimeline";
import { PreviousCohorts } from "@/components/home/PreviousCohorts";
import UpcomingEventsTicker from "@/components/home/UpcomingEventsTicker";
import { TechnicalSponsors } from "@/components/home/TechnicalSponsors";
import { PartnerWithUs } from "@/components/home/PartnerWithUs";
import { ContactSection } from "@/components/home/ContactSection";
import { FacultySection } from "@/components/home/FacultySection";
import { StudentCommittee } from "@/components/home/StudentCommittee";

export default function HomePage() {
  return (
    <>
      <Hero />

      <UpcomingEventsTicker />

      <TechnicalSponsors />

      <AboutHultPrize />

      <EventTimeline />

      <FacultySection />

      <StudentCommittee />

      <PreviousCohorts />

      <PartnerWithUs />

      <ContactSection />
    </>
  );
}
