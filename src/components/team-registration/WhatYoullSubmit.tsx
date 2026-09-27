"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const submissionGroups = [
  {
    number: "01",
    title: "Team & Venture",
    items: ["Team registration details", "Startup or venture information"],
  },
  {
    number: "02",
    title: "The Idea",
    items: ["Problem statement", "Proposed solution", "SDG alignment"],
  },
  {
    number: "03",
    title: "The Business",
    items: ["Business model", "Market information", "Impact model"],
  },
  {
    number: "04",
    title: "The Pitch",
    items: [
      "Pitch deck",
      "Pitch video or live pitch, where required",
      "Supporting evidence and documentation",
    ],
  },
];

export function WhatYoullSubmit() {
  return (
    <Section
      id="what-youll-submit"
      className="relative isolate overflow-hidden bg-[#f7f7f8] text-[#111111]"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#E6007E]/[0.055] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[480px] w-[480px] rounded-full bg-[#ff8fbe]/[0.07] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#111111]/[0.08]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E6007E]">
                What You&apos;ll Submit
              </p>

              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Bring your{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  venture
                </span>{" "}
                to the table.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8 lg:ml-auto">
              Registration is only the beginning. As you progress through the
              competition, you will need to communicate your venture clearly
              through the required information, submissions and supporting
              evidence.
            </p>
          </Reveal>
        </div>

        {/* Submission roadmap */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden h-px bg-[#111111]/10 lg:block"
          />

          <div
            aria-hidden="true"
            className="absolute left-[12.5%] top-[17px] hidden h-px w-[75%] bg-gradient-to-r from-[#E6007E]/20 via-[#E6007E]/45 to-[#E6007E]/20 lg:block"
          />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {submissionGroups.map((group, index) => (
              <Reveal key={group.number} delay={0.08 + index * 0.08}>
                <article className="group relative">
                  {/* Mobile connector */}
                  {index !== submissionGroups.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[17px] top-[52px] h-[calc(100%+3rem)] w-px bg-[#111111]/10 lg:hidden"
                    />
                  )}

                  <div className="relative flex gap-5 lg:block">
                    {/* Number */}
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E6007E]/30 bg-[#f7f7f8] text-[10px] font-bold text-[#E6007E] shadow-[0_0_0_6px_rgba(230,0,126,0.035)] transition-all duration-300 group-hover:border-[#E6007E] group-hover:bg-[#E6007E] group-hover:text-white lg:mx-auto">
                      {group.number}
                    </div>

                    {/* Content */}
                    <div className="pt-0 lg:pt-8 lg:text-center">
                      <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                        {group.title}
                      </h3>

                      <div className="mt-5 space-y-3 lg:text-left">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 border-b border-[#111111]/8 pb-3 last:border-0 last:pb-0"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6007E]"
                            />

                            <p className="text-sm leading-6 text-[#111111]/60">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Deadline / progression note */}
        <Reveal delay={0.18}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-[#111111]/8 bg-white px-6 py-7 shadow-[0_8px_35px_rgba(17,17,17,0.035)] sm:px-8 sm:py-8 lg:mt-20 lg:px-10">
            {/* Accent line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#E6007E]"
            />

            <div className="relative grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6007E]">
                  Keep in mind
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Deadlines matter.
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8">
                Submit every required material within the deadlines announced by
                the Organising Committee. Depending on the competition stage,
                additional submissions may be required. Official Hult Prize
                competition phases may also require submissions in English, and
                mandatory submissions must be completed to progress.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Submission principle */}
        <Reveal delay={0.16}>
          <div className="mt-14 flex flex-col gap-5 border-t border-[#111111]/10 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#111111]/35">
                Before you submit
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#111111]/60 sm:text-base">
                Make sure your information is complete, consistent and supported
                by the evidence your venture requires.
              </p>
            </div>

            <a
              href="#pitch-and-judging"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#E6007E] transition-colors hover:text-[#b80064]"
            >
              Understand the pitch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
