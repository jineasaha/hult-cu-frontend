"use client";

import { HeroSection } from "@/components/committee-recruitment/HeroSection";
import { WhyJoinSection } from "@/components/committee-recruitment/WhyJoinSection";
import { WhoAreWeLookingForSection } from "@/components/committee-recruitment/WhoAreWeLookingForSection";
import { CommitteeRolesSection } from "@/components/committee-recruitment/CommitteeRolesSection";
import { WhatWillYouDoSection } from "@/components/committee-recruitment/WhatWillYouDoSection";
import { ImportantDetailsSection } from "@/components/committee-recruitment/ImportantDetailsSection";
import { BeforeYouApplySection } from "@/components/committee-recruitment/BeforeYouApplySection";
import { ContactSection } from "@/components/committee-recruitment/ContactSection";

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
      <ContactSection/>
    </div>
  );
}
