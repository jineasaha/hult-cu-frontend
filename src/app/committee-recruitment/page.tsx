import { HeroSection } from "@/components/committee-recruitment/HeroSection";
import { WhyJoinSection } from "@/components/committee-recruitment/WhyJoinSection";
import { WhoAreWeLookingForSection } from "@/components/committee-recruitment/WhoAreWeLookingForSection";
import { CommitteeRolesSection } from "@/components/committee-recruitment/CommitteeRolesSection";
import { WhatWillYouDoSection } from "@/components/committee-recruitment/WhatWillYouDoSection";
import { ImportantDetailsSection } from "@/components/committee-recruitment/ImportantDetailsSection";
import { BeforeYouApplySection } from "@/components/committee-recruitment/BeforeYouApplySection";
import { ContactSection } from "@/components/committee-recruitment/ContactSection";

export const metadata = {
  title: "Recruitment",
  description:
    "Meet the people who have contributed to the Hult Prize journey at the University of Calcutta.",
};

export default function CommitteeRecruitmentPage() {
  return (
    <div className="overflow-hidden bg-white text-charcoal">
      <HeroSection />
      <WhyJoinSection />
      <WhoAreWeLookingForSection />
      <CommitteeRolesSection />
      <WhatWillYouDoSection />
      <ImportantDetailsSection />
      <BeforeYouApplySection />
      <ContactSection />
    </div>
  );
}
