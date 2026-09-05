import { Hero } from "@/components/home/Hero";
import { AboutHultPrize } from "@/components/home/AboutHultPrize";
import { EventTimeline } from "@/components/home/EventTimeline";
import { CampusDirectorate } from "@/components/home/CampusDirectorate";
import { PreviousCohorts } from "@/components/home/PreviousCohorts";
import UpcomingEventsTicker from "@/components/home/UpcomingEventsTicker";
import { TechnicalSponsors } from "@/components/home/TechnicalSponsors";
import { PartnerWithUs } from "@/components/home/PartnerWithUs";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <UpcomingEventsTicker />

      <TechnicalSponsors />

      <AboutHultPrize />

      <EventTimeline />

      <CampusDirectorate />

      <PreviousCohorts />

      <PartnerWithUs />

      <ContactSection />
    </>
  );
}
