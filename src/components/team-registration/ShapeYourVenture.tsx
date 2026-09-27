"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const ventureSteps = [
  {
    number: "01",
    title: "Problem",
    label: "Start with what matters",
    description:
      "Address a genuine and clearly defined problem. Be precise about what is happening, who experiences it and why it matters.",
  },
  {
    number: "02",
    title: "Solution",
    label: "Build what solves it",
    description:
      "Offer a practical and innovative solution that directly responds to the problem rather than simply describing an idea.",
  },
  {
    number: "03",
    title: "Market",
    label: "Know who you serve",
    description:
      "Identify your target beneficiaries or customers and understand the need your venture is addressing.",
  },
  {
    number: "04",
    title: "Business",
    label: "Make it sustainable",
    description:
      "Build a for-profit business model capable of generating sustainable value and revenue.",
  },
  {
    number: "05",
    title: "Impact",
    label: "Make it measurable",
    description:
      "Show a credible pathway toward meaningful, measurable impact and explain how your venture contributes to an SDG.",
  },
];

export function ShapeYourVenture() {
  return (
    <Section
      id="shape-your-venture"
      className="relative isolate overflow-hidden bg-white text-[#111111] -mb-40"
    >
      {/* Timeline animation */}
      <style jsx>{`
        @keyframes timelineTravel {
          0% {
            left: -10%;
          }

          100% {
            left: 90%;
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            box-shadow:
              0 0 0 6px rgba(230, 0, 126, 0.035),
              0 0 0 0 rgba(230, 0, 126, 0);
          }

          50% {
            box-shadow:
              0 0 0 6px rgba(230, 0, 126, 0.035),
              0 0 0 7px rgba(230, 0, 126, 0.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-travel,
          .timeline-node {
            animation: none !important;
          }
        }
      `}</style>

      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-32 h-[500px] w-[500px] rounded-full bg-[#E6007E]/[0.07] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-20 h-[520px] w-[520px] rounded-full bg-[#ff8fbe]/[0.08] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#E6007E]/[0.025] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#111111]/[0.08]"
      />

      <div className="-mt-30 relative mx-auto max-w-[1400px] px-5 pt-14 pb-24 sm:px-8 sm:pt-16 sm:pb-28 lg:px-12 lg:pt-20 lg:pb-32 xl:px-16">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#E6007E]">
              Shape Your Venture
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
              Turn an idea into a{" "}
              <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                venture
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#111111]/60 sm:text-base sm:leading-8">
              A strong Hult Prize venture connects the problem you want to solve
              with the people you serve, the business you build and the impact
              you create.
            </p>
          </Reveal>
        </div>

        {/* Venture flow */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Desktop timeline */}
          <div className="absolute left-[10%] right-[10%] top-[18px] hidden lg:block">
            {/* Base line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[#111111]/10"
            />

            {/* Static pink line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#E6007E]/15 via-[#E6007E]/40 to-[#E6007E]/15"
            />

            {/* Travelling highlight */}
            <div
              aria-hidden="true"
              className="timeline-travel absolute left-[-18%] top-[-1px] h-[3px] w-[18%] rounded-full bg-gradient-to-r from-transparent via-[#E6007E] to-transparent blur-[0.5px]"
              style={{
                animation: "timelineTravel 5.8s linear infinite",
              }}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {ventureSteps.map((item, index) => (
              <Reveal key={item.number} delay={0.08 + index * 0.07}>
                <article className="group relative">
                  {/* Mobile connector */}
                  {index !== ventureSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[18px] top-[58px] h-[calc(100%+2.5rem)] w-px bg-[#111111]/10 lg:hidden"
                    />
                  )}

                  <div className="relative flex gap-5 lg:block">
                    {/* Node */}
                    <div
                      className="timeline-node relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E6007E]/30 bg-white text-[10px] font-bold text-[#E6007E] shadow-[0_0_0_6px_rgba(230,0,126,0.035)] transition-all duration-300 group-hover:border-[#E6007E] group-hover:bg-[#E6007E] group-hover:text-white lg:mx-auto"
                      style={{
                        animation: `nodePulse 2.8s ease-in-out infinite`,
                        animationDelay: `${index * 0.55}s`,
                      }}
                    >
                      {item.number}
                    </div>

                    {/* Content */}
                    <div className="pt-0 lg:pt-8 lg:text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/35">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#111111] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#111111]/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Core connection principle */}
        <Reveal delay={0.18}>
          <div className="relative mt-20 overflow-hidden rounded-2xl border border-[#111111]/8 bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] px-6 py-8 text-white sm:px-10 sm:py-10 lg:mt-24 lg:px-14 lg:py-12">
            {/* Card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-40 -top-24 h-64 w-64 rounded-full bg-[#E6007E]/20 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-14 left-1/3 h-56 w-56 rounded-full bg-[#ff75b5]/10 blur-[90px]"
            />

            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff75b5]">
                  The connection matters
                </p>

                <h3 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  Don&apos;t just name an{" "}
                  <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-red-300 bg-clip-text text-transparent">
                    SDG
                  </span>
                  .
                </h3>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-7">
                <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Your venture should demonstrate a meaningful connection
                  between the{" "}
                  <span className="text-white">
                    problem, proposed solution, target beneficiaries or
                    customers, business model and intended impact
                  </span>
                  . The SDG should be a genuine part of that connection, not
                  simply a label added to the idea.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SDG + impact + business */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* SDG */}
          <Reveal delay={0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#111111]/8 bg-[#f7f7f8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E6007E]/20 hover:shadow-[0_18px_50px_rgba(17,17,17,0.07)] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#E6007E]/[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6007E]">
                    SDG Alignment
                  </span>

                  <span className="text-lg text-[#E6007E]/70">↗</span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                  Choose an SDG with purpose.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#111111]/55">
                  Clearly identify at least one UN Sustainable Development Goal
                  that your venture directly supports and explain how your
                  proposed solution contributes to it.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Impact */}
          <Reveal delay={0.14}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#111111]/8 bg-[#f7f7f8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E6007E]/20 hover:shadow-[0_18px_50px_rgba(17,17,17,0.07)] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#ff8fbe]/[0.09] blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6007E]">
                    Impact
                  </span>

                  <span className="text-lg text-[#E6007E]/70">↗</span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                  Make the impact measurable.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#111111]/55">
                  Demonstrate a credible pathway toward meaningful and
                  measurable social or environmental impact instead of relying
                  on broad claims.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Business */}
          <Reveal delay={0.2}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#111111]/8 bg-[#f7f7f8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E6007E]/20 hover:shadow-[0_18px_50px_rgba(17,17,17,0.07)] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#E6007E]/[0.055] blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6007E]">
                    Business
                  </span>

                  <span className="text-lg text-[#E6007E]/70">↗</span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                  Build for sustainable value.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#111111]/55">
                  Your business model should be capable of generating
                  sustainable value and revenue while remaining connected to the
                  customer need and intended impact.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Final principle */}
        <Reveal delay={0.18}>
          <div className="mt-16 border-t border-[#111111]/10 pt-8 sm:mt-20 sm:flex sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#111111]/35">
                Your venture should answer
              </p>

              <p className="mt-3 max-w-2xl text-lg font-medium leading-7 tracking-[-0.02em] text-[#111111]/80 sm:text-xl">
                What problem are we solving, who are we solving it for, how does
                the business work, and what measurable difference will it
                create?
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
