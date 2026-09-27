"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const submissionItems = [
  "Team registration details",
  "Startup or venture information",
  "SDG alignment",
  "Problem statement",
  "Proposed solution",
  "Business model",
  "Market information",
  "Impact model",
  "Pitch deck",
  "Pitch video or live pitch, where required",
  "Supporting evidence and documentation",
];

const pitchQuestions = [
  "Problem",
  "Solution",
  "Target market",
  "Customer validation",
  "Business model",
  "Revenue",
  "Competition",
  "SDG alignment",
  "Impact",
  "Scalability",
  "Team structure",
];

export function PrepareAndPitch() {
  return (
    <Section
      id="prepare-and-pitch"
      className="relative isolate overflow-hidden bg-[#15101a] text-white -mb-20"
    >
      {/* Premium atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#0f1624_0%,#211426_42%,#35152a_72%,#17111d_100%)]" />

        <div className="absolute -left-48 -top-40 h-[560px] w-[560px] rounded-full bg-[#304a78]/25 blur-[150px]" />

        <div className="absolute left-[35%] top-[5%] h-[480px] w-[480px] rounded-full bg-[#713d68]/20 blur-[150px]" />

        <div className="absolute -right-48 top-[15%] h-[560px] w-[560px] rounded-full bg-[#E6007E]/14 blur-[170px]" />

        <div className="absolute bottom-[-300px] left-[38%] h-[500px] w-[500px] rounded-full bg-[#c18a68]/10 blur-[170px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <div className="-mt-10 relative mx-auto max-w-[1400px] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16 mb-15">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff8fbe] sm:text-[11px]">
                Prepare &amp; Pitch
              </p>

              <h2 className="mt-3 max-w-3xl font-display text-[2.45rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
                Take Your Idea{" "}
                <span className="bg-linear-to-t from-pink-600 via-pink-300 to-red-200 bg-clip-text text-transparent">
                  to the Stage
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-lg text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-6 lg:pb-1">
              Prepare what your team needs to submit, then make sure every
              member can communicate the venture clearly when it is time to
              pitch.
            </p>
          </Reveal>
        </div>

        {/* Prepare → Pitch */}
        <div className="mt-7 grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          {/* PREPARE */}
          <Reveal delay={0.08} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[1.25rem] border border-white/75 bg-white/[0.88] p-5 text-[#111111] shadow-[0_18px_55px_rgba(10,5,15,0.14)] backdrop-blur-xl sm:p-6">
              {/* Card gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(141,122,168,0.15),transparent_32%),radial-gradient(circle_at_0%_100%,rgba(229,138,169,0.09),transparent_32%)]"
              />

              <div className="relative flex h-full flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6007E]">
                      Step 01
                    </p>

                    <h3 className="mt-1.5 text-[1.75rem] font-semibold tracking-[-0.035em] sm:text-[1.9rem]">
                      Prepare
                    </h3>
                  </div>

                  <span className="mt-1 text-3xl font-light text-[#62456f]/35 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#111111]/58 sm:text-[14px] sm:leading-6">
                  Submit every material requested by the Organising Committee
                  within the announced deadlines.
                </p>

                {/* Submission list */}
                <div className="mt-5 grid gap-x-7 gap-y-2 sm:grid-cols-2">
                  {submissionItems.map((item, index) => (
                    <Reveal key={item} delay={0.025 + index * 0.02}>
                      <div className="flex items-start gap-2.5">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#E6007E] to-[#62456f]" />

                        <p className="text-[12px] leading-[1.35rem] text-[#111111]/65 sm:text-[13px]">
                          {item}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Submission note */}
                <div className="mt-auto border-t border-[#111111]/10 pt-4">
                  <p className="text-[11px] leading-[1.15rem] text-[#111111]/48 sm:text-[12px] sm:leading-5">
                    Additional submissions may be required at different
                    competition stages. Official phases may require submissions
                    in English, and mandatory submissions must be completed to
                    progress.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* PITCH */}
          <Reveal delay={0.15} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#211725]/95 p-5 text-white shadow-[0_22px_65px_rgba(10,5,15,0.25)] sm:p-6">
              {/* Dark premium gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(230,0,126,0.28),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(141,122,168,0.22),transparent_38%),linear-gradient(145deg,#241925_0%,#19151c_55%,#281c2b_100%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-10 h-44 w-44 rounded-full bg-[#d9b98c]/[0.07] blur-[85px]"
              />

              <div className="relative flex h-full flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff9ac9]">
                      Step 02
                    </p>

                    <h3 className="mt-1.5 text-[1.75rem] font-semibold tracking-[-0.035em] sm:text-[1.9rem]">
                      Pitch
                    </h3>
                  </div>

                  <span className="mt-1 text-3xl font-light text-[#ff9ac9]/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                {/* Pitch principles */}
                <div className="mt-5 space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-[14px] font-semibold sm:text-[15px]">
                      Know your venture.
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-white/55 sm:text-[13px]">
                      Every registered team member should be familiar with the
                      venture and its business model.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <p className="text-[14px] font-semibold sm:text-[15px]">
                      Follow the format.
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-white/55 sm:text-[13px]">
                      Follow the pitch format, duration and presentation
                      guidelines communicated by the Organising Committee.
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold sm:text-[15px]">
                      Expect questions.
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-white/55 sm:text-[13px]">
                      Be prepared to explain the venture from the problem
                      through to the team.
                    </p>
                  </div>
                </div>

                {/* Question tags */}
                <div className="mt-auto border-t border-white/10 pt-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Judges may ask about
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pitchQuestions.map((question, index) => (
                      <Reveal key={question} delay={0.035 + index * 0.02}>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[10px] text-white/68 backdrop-blur-sm sm:text-[11px]">
                          {question}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Honesty note */}
        <Reveal delay={0.18}>
          <div className="relative mt-4 overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-xl sm:px-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#E6007E] via-[#b64f91] to-[#d9b98c]"
            />

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff75b5]/10 text-[10px] font-bold text-[#ff9ac9]">
                  !
                </span>

                <div>
                  <p className="text-[13px] font-semibold text-white sm:text-[14px]">
                    Present information honestly.
                  </p>

                  <p className="mt-0.5 text-[11px] leading-5 text-white/50 sm:text-[12px]">
                    Do not make unsupported or deliberately misleading claims.
                  </p>
                </div>
              </div>

              <p className="shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff9ac9]">
                Be pitch-ready
              </p>
            </div>
          </div>
        </Reveal>

        {/* Final warning */}
        <Reveal delay={0.2}>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-[11px] leading-5 text-white/45 sm:text-[12px]">
              Failure to appear for a scheduled pitch without an approved reason
              may result in disqualification from that stage.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
