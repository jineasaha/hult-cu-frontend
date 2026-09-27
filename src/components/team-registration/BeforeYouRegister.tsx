import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const eligibilityItems = [
  {
    title: "Team size",
    description: "Teams must have 2–4 eligible university students.",
  },
  {
    title: "Age requirement",
    description:
      "Every team member must be at least 18 years old by February 28, 2027.",
  },
  {
    title: "Student status",
    description:
      "Every participant must be enrolled in a degree-seeking programme at a recognised university or college at the time of registration. Undergraduate, postgraduate and PhD students may participate, subject to the official Hult Prize eligibility requirements.",
  },
  {
    title: "For-profit venture",
    description:
      "The venture must operate or intend to operate as a for-profit venture. Non-profit organisations are not eligible. Existing startups and early-stage ventures may participate, subject to the official Hult Prize rules.",
  },
  {
    title: "One team per participant",
    description:
      "Each participant may be registered on only one Hult Prize team at a time.",
  },
  {
    title: "One venture per team",
    description:
      "Each team may present only one business idea or venture in the competition.",
  },
  {
    title: "Cross-university teams",
    description:
      "Students from different universities may form one team. The team must designate one university to represent the team.",
  },
  {
    title: "SDG alignment",
    description:
      "The venture must directly support at least one UN Sustainable Development Goal and clearly explain how the proposed solution contributes to it.",
  },
];

export function BeforeYouRegister() {
  return (
    <section
      id="before-you-register"
      className="relative isolate overflow-hidden bg-[#f7f7f8] text-[#111111]"
    >
      {/* Ambient background glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#E6007E]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#ff8fbe]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[45%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#E6007E]/[0.035] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#111111]/[0.08]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          {/* Heading */}

          <Reveal>
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6007E]">
                Before You Register
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.75rem]">
                Make sure your{" "}
                <span className="bg-linear-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  team
                </span>{" "}
                meets the{" "}
                <span className="bg-linear-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  essentials
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Description */}

          <Reveal delay={0.1}>
            <div className="lg:pb-1">
              <p className="max-w-2xl text-base leading-7 text-[#111111]/60 sm:text-lg sm:leading-8">
                Before you register, make sure every team member and your
                venture meet the basic participation requirements for Hult Prize
                OnCampus at the University of Calcutta.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            ELIGIBILITY CARDS
        ========================================================== */}

        <div className="mt-12 grid gap-3.5 sm:mt-14 sm:grid-cols-2 lg:gap-4">
          {eligibilityItems.map((item, index) => {
            const card = (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-white/80 bg-white/55 px-5 py-5 shadow-[0_6px_28px_rgba(17,17,17,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_12px_35px_rgba(17,17,17,0.06)] sm:px-6 sm:py-5"
              >
                {/* Card accent */}

                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E6007E] transition-transform duration-300 group-hover:scale-y-100"
                />

                {/* Subtle card glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#E6007E]/[0.055] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                      {item.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-base leading-none text-[#111111]/15 transition-colors duration-300 group-hover:text-[#E6007E]/40"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#111111]/58 sm:text-[14px] sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </article>
            );

            return (
              <Reveal key={item.title} delay={0.08 + index * 0.05}>
                {card}
              </Reveal>
            );
          })}
        </div>

        {/* =========================================================
            TRANSITION
        ========================================================== */}

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col gap-6 border-t border-[#111111]/10 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-[#111111]/50">
              Once your team meets these essentials, move on to defining your
              team structure, leadership and ownership.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
