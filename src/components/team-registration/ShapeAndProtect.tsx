"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const ventureSteps = [
  {
    number: "01",
    title: "Problem & solution",
    description:
      "Identify a genuine, clearly defined problem and propose a practical, innovative solution.",
  },
  {
    number: "02",
    title: "People & market",
    description:
      "Define your beneficiaries or customers, their needs, and the market your venture intends to serve.",
  },
  {
    number: "03",
    title: "Business model",
    description:
      "Build a sustainable, for-profit model that generates revenue and creates lasting value. Nonprofit ventures are not eligible.",
  },
  {
    number: "04",
    title: "SDG & impact",
    description:
      "Support at least one UN SDG, explain your contribution, and show a credible pathway to meaningful, measurable social or environmental impact.",
  },
];

const integrityPrinciples = [
  {
    title: "Original work",
    description:
      "Avoid plagiarism, substantial copying, fabrication, falsification, and misrepresentation.",
  },
  {
    title: "Accurate information",
    description:
      "Present claims, research, data, and supporting evidence honestly and accurately.",
  },
  {
    title: "Credit your sources",
    description:
      "Acknowledge and cite external information, research, data, images, and other materials.",
  },
  {
    title: "Respect others’ rights",
    description:
      "Do not knowingly infringe intellectual property, confidentiality, privacy, or proprietary rights.",
  },
];

const protectionAreas = [
  "Patents",
  "Copyright",
  "Trademarks",
  "Trade secrets",
  "Confidential information",
  "Privacy",
  "Proprietary rights",
];

export function ShapeAndProtect() {
  return (
    <Section
      id="shape-your-venture"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#FCE7F3] via-[#F3E8F8] to-[#DBEAFE] text-[#17151b] -mb-30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#f5c8df]/30 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#d9d0f5]/35 blur-[110px]" />
      </div>

      <div className="-mt-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* Compact header */}
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 border-b border-[#211b2a]/15 pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a32c69] sm:text-sm">
                Shape your venture · Protect your work
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#211b2a] sm:text-4xl lg:text-5xl">
                Build with{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  Purpose
                </span>
                <br />
                Protect with{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  Care
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#625b67] sm:text-base">
              Create a viable business around a meaningful problem, with
              measurable impact and responsible practices.
            </p>
          </div>
        </Reveal>

        {/* Two-column content */}
        <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Venture requirements */}
          <div>
            <Reveal>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-[-0.025em] text-[#211b2a] sm:text-2xl">
                  Venture blueprint
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a32c69]">
                  01 / 02
                </span>
              </div>
            </Reveal>

            <div className="divide-y divide-[#211b2a]/10">
              {ventureSteps.map((step) => (
                <Reveal key={step.number}>
                  <div className="mt-3 grid grid-cols-[36px_1fr] gap-3 py-4 first:pt-0 sm:grid-cols-[42px_1fr] sm:gap-4">
                    <span className="pt-0.5 text-sm font-bold tabular-nums text-[#b04a7e] sm:text-base">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#211b2a] sm:text-lg">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#625b67] sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-4 border-l-2 border-[#d84a91] pl-4 text-sm leading-relaxed text-[#625b67] sm:text-base">
                Your problem, solution, beneficiaries or customers, business
                model, and intended impact should form a meaningful whole.
                Existing startups and early-stage ventures may participate,
                subject to official rules.
              </p>
            </Reveal>
          </div>

          {/* Integrity and IP */}
          <div className="lg:border-l lg:border-[#211b2a]/15 lg:pl-10">
            <Reveal>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-[-0.025em] text-[#211b2a] sm:text-2xl">
                  Integrity & protection
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a32c69]">
                  02 / 02
                </span>
              </div>
            </Reveal>

            <div className="grid gap-x-6 sm:grid-cols-2">
              {integrityPrinciples.map((principle, index) => (
                <Reveal key={principle.title}>
                  <div
                    className={`py-3 ${
                      index < 2
                        ? "border-b border-[#211b2a]/10"
                        : "sm:border-t sm:border-[#211b2a]/10"
                    }`}
                  >
                    <h4 className="text-base font-bold text-[#211b2a] sm:text-lg">
                      {principle.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#625b67] sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-5 border-t border-[#211b2a]/15 pt-5">
                <h4 className="text-base font-bold text-[#211b2a] sm:text-lg">
                  Intellectual property to consider
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {protectionAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[#d8c5d1] bg-white/65 px-3 py-1.5 text-sm font-medium text-[#514653]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#625b67] sm:text-base">
                  Check IP before public disclosure and consider protection
                  where applicable before investment or commercial discussions.
                  Teams are responsible for protecting confidential information,
                  IP, and ownership.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Compact transition */}
        <Reveal>
          <div className="mt-8 flex flex-col gap-3 border-t border-[#211b2a]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-[#625b67] sm:text-base">
              Have a clear, viable, and responsible venture? Prepare to present
              your idea and evidence.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
