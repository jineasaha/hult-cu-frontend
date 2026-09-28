import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const teamSteps = [
  {
    step: "01",
    title: "Register",
    description:
      "Register your team through the official registration process prescribed for the University of Calcutta OnCampus programme.",
  },
  {
    step: "02",
    title: "List Your Team",
    description:
      "List every participating member accurately on the team registration and keep the submitted information ready for verification.",
  },
  {
    step: "03",
    title: "Choose Your CEO",
    description:
      "Designate an eligible participant as CEO. The CEO must have an active role in the leadership and decision-making of the venture.",
  },
  {
    step: "04",
    title: "Meet the 51% Rule",
    description:
      "At least 51% of the competing company's equity must be owned by eligible team members listed on the Hult Prize application.",
  },
  {
    step: "05",
    title: "Manage Team Changes",
    description:
      "Any change to your registered team composition must follow the official Hult Prize approval requirements.",
  },
  {
    step: "06",
    title: "Be Ready to Verify",
    description:
      "Participants must provide accurate student-status documentation whenever it is requested for verification.",
  },
];

export function BuildYourTeam() {
  return (
    <section
      id="build-your-team"
      className="relative isolate overflow-hidden bg-[#111111] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[460px] w-[460px] rounded-full bg-[#E6007E]/12 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-[#ff75b5]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[45%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#E6007E]/[0.045] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* Heading */}
          <Reveal>
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff75b5]">
                Build Your Team
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.75rem]">
                Build the right{" "}
                <span className="bg-linear-to-t from-pink-600 via-pink-300 to-red-200 bg-clip-text text-transparent">
                  team
                </span>
                <br />
                Get ready{" "}
                <span className="bg-linear-to-t from-pink-600 via-pink-300 to-red-200 bg-clip-text text-transparent">
                  to compete
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Ownership Highlight */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-6 py-5 backdrop-blur-xl sm:px-8 sm:py-6">
              {/* Subtle premium accents */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#E6007E]/15 blur-[75px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff75b5]/50 to-transparent"
              />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff75b5] sm:text-[11px]">
                  One important number
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-5xl font-semibold leading-none tracking-[-0.05em] text-[#ff75b5] sm:text-6xl">
                    51%
                  </span>

                  <span className="text-base font-semibold text-white/85 sm:text-lg">
                    minimum eligible team ownership
                  </span>
                </div>

                <p className="mt-3 max-w-xl text-xs leading-5 text-white/50 sm:text-[13px] sm:leading-6">
                  At least 51% of the competing company's equity must be owned
                  by eligible team members listed on the Hult Prize application,
                  in accordance with the official Hult Prize terms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            HORIZONTAL TIMELINE
        ========================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Connecting line */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[23px] hidden h-px bg-white/10 lg:block"
          />

          {/* Pink progress line */}

          <div
            aria-hidden="true"
            className="absolute left-0 top-[23px] hidden h-px w-full bg-gradient-to-r from-[#E6007E] via-[#ff75b5]/70 to-white/10 lg:block"
          />

          {/* Timeline steps */}

          <div className="grid gap-10 lg:grid-cols-6 lg:gap-5">
            {teamSteps.map((item, index) => (
              <Reveal key={item.step} delay={0.08 + index * 0.08}>
                <article className="group relative lg:min-w-0">
                  {/* Timeline node */}

                  <div className="relative z-10 flex items-center gap-4 lg:block">
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#E6007E]/60 bg-[#111111] shadow-[0_0_0_7px_#111111] transition-all duration-300 group-hover:border-[#ff75b5] group-hover:shadow-[0_0_0_7px_#111111,0_0_25px_rgba(230,0,126,0.2)]">
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-[#ff75b5]">
                        {item.step}
                      </span>
                    </div>

                    {/* Mobile step indicator */}

                    <div className="h-px flex-1 bg-white/10 lg:hidden" />
                  </div>

                  {/* Content */}

                  <div className="mt-5 lg:mt-8">
                    <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile separator */}

                  {index < teamSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[22px] top-[46px] h-[calc(100%+2.5rem)] w-px bg-gradient-to-b from-[#E6007E]/50 to-white/5 lg:hidden"
                    />
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* =========================================================
            TRANSITION
        ========================================================== */}

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-white/40">
              Your team is ready. Now define the problem you want to solve, the
              solution you will build and the impact you want to create.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
