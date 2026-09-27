"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const principles = [
  {
    number: "01",
    title: "Original work",
    text: "Your submissions must represent your team's original work.",
  },
  {
    number: "02",
    title: "Accurate claims",
    text: "No plagiarism, fabrication, falsification or misrepresentation.",
  },
  {
    number: "03",
    title: "Credit sources",
    text: "Acknowledge and cite external information, research, data and images.",
  },
];

const ipAreas = [
  "Patent",
  "Copyright",
  "Trademark",
  "Trade secret",
  "Confidential information",
  "Privacy",
  "Proprietary rights",
];

export function ProtectYourWork() {
  return (
    <Section
      id="protect-your-work"
      className="relative isolate overflow-hidden bg-[#fbfafc] text-[#111111] -mb-30"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_30%,rgba(230,0,126,0.09),transparent_30%),radial-gradient(circle_at_92%_70%,rgba(255,143,190,0.11),transparent_32%),linear-gradient(135deg,#fff_0%,#fbfafc_48%,#fff7fb_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[300px] w-[300px] rounded-full bg-[#E6007E]/[0.035] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#ff8fbe]/[0.05] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#111111]/[0.08]"
      />

      <div className="-mt-30 relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E6007E]">
                Protect Your Work
              </p>

              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                Build it{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  honestly
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-sm leading-6 text-[#111111]/55 sm:text-base sm:leading-7 lg:pb-1">
              Keep your work original, your information accurate and your
              sources properly credited. Protect sensitive work before publicly
              or commercially disclosing it.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#111111]/8 bg-white/65 backdrop-blur-xl sm:mt-12 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={0.08 + index * 0.06}>
              <article
                className={`group relative p-5 sm:p-6 ${
                  index !== 0
                    ? "border-t border-[#111111]/8 lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6007E]/[0.08] text-[9px] font-bold text-[#E6007E]">
                    {item.number}
                  </span>

                  <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 pl-10 text-xs leading-5 text-[#111111]/50 sm:text-sm">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* IP + disclosure */}
        <Reveal delay={0.16}>
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#111111]/8 bg-white/70 px-5 py-6 backdrop-blur-xl sm:px-7 sm:py-7 lg:flex lg:items-center lg:justify-between lg:gap-12">
            {/* Accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#E6007E]/[0.07] blur-[80px]"
            />

            <div className="relative shrink-0 lg:max-w-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E6007E]">
                Before you disclose
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                Check what you need to protect.
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#111111]/50 sm:text-sm">
                Conduct appropriate IP checks before publicly disclosing
                sensitive technical or commercial information.
              </p>
            </div>

            <div className="relative mt-6 lg:mt-0 lg:flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#111111]/30">
                Check for
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {ipAreas.map((item, index) => (
                  <Reveal key={item} delay={0.04 + index * 0.03}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#111111]/9 bg-white px-3 py-1.5 text-[11px] text-[#111111]/55 shadow-[0_2px_10px_rgba(17,17,17,0.025)] transition-all duration-300 hover:border-[#E6007E]/30 hover:text-[#111111]">
                      <span className="h-1 w-1 rounded-full bg-[#E6007E]" />
                      {item}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Commercial protection + next */}
        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-col gap-5 border-t border-[#111111]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-xs leading-6 text-[#111111]/50 sm:text-sm">
              Where applicable, teams are encouraged to seek appropriate patent,
              copyright, trademark or other IP protection before entering
              commercial or investment discussions.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
