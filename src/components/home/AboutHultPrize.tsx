"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const sdgs = [
  {
    number: "01",
    title: "No Poverty",
    icon: "/images/sdgs/E_PRINT_01.jpg",
  },
  {
    number: "02",
    title: "Zero Hunger",
    icon: "/images/sdgs/E_PRINT_02.jpg",
  },
  {
    number: "03",
    title: "Good Health and Well-being",
    icon: "/images/sdgs/E_PRINT_03.jpg",
  },
  {
    number: "04",
    title: "Quality Education",
    icon: "/images/sdgs/E_PRINT_04.jpg",
  },
  {
    number: "05",
    title: "Gender Equality",
    icon: "/images/sdgs/E_PRINT_05.jpg",
  },
  {
    number: "06",
    title: "Clean Water and Sanitation",
    icon: "/images/sdgs/E_PRINT_06.jpg",
  },
  {
    number: "07",
    title: "Affordable and Clean Energy",
    icon: "/images/sdgs/E_PRINT_07.jpg",
  },
  {
    number: "08",
    title: "Decent Work and Economic Growth",
    icon: "/images/sdgs/E_PRINT_08.jpg",
  },
  {
    number: "09",
    title: "Industry, Innovation and Infrastructure",
    icon: "/images/sdgs/E_PRINT_09.jpg",
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    icon: "/images/sdgs/E_PRINT_10.jpg",
  },
  {
    number: "11",
    title: "Sustainable Cities and Communities",
    icon: "/images/sdgs/E_PRINT_11.jpg",
  },
  {
    number: "12",
    title: "Responsible Consumption and Production",
    icon: "/images/sdgs/E_PRINT_12.jpg",
  },
  {
    number: "13",
    title: "Climate Action",
    icon: "/images/sdgs/E_PRINT_13.jpg",
  },
  {
    number: "14",
    title: "Life Below Water",
    icon: "/images/sdgs/E_PRINT_14.jpg",
  },
  {
    number: "15",
    title: "Life on Land",
    icon: "/images/sdgs/E_PRINT_15.jpg",
  },
  {
    number: "16",
    title: "Peace, Justice and Strong Institutions",
    icon: "/images/sdgs/E_PRINT_16.jpg",
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    icon: "/images/sdgs/E_PRINT_17.jpg",
  },
];

export function AboutHultPrize() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================
          BACKGROUND ACCENT
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-hult-pink-pale/60 blur-3xl"
      />

      <Container className="relative">
        {/* =========================================
            SECTION INTRODUCTION
        ========================================== */}

        <Reveal>
          <div className="max-w-5xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-hult-pink sm:text-sm">
              About the Hult Prize
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-5xl lg:text-6xl">
              Where student ideas become{" "}
              <span className="text-hult-pink">ideas for impact.</span>
            </h2>
          </div>
        </Reveal>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Main description */}

          <Reveal delay={0.1} y={28}>
            <div className="max-w-3xl">
              <p className="font-body text-lg leading-8 text-charcoal/80 sm:text-xl sm:leading-9">
                The Hult Prize is a global student competition for social
                entrepreneurship that challenges young innovators to solve
                pressing global issues through sustainable business models
                aligned with the UN Sustainable Development Goals (SDGs).
              </p>

              <p className="mt-6 font-body text-base leading-7 text-gray sm:text-lg sm:leading-8">
                At the University of Calcutta, our OnCampus program brings
                students from across departments together to build, pitch, and
                develop ideas that can create meaningful social impact.
              </p>
            </div>
          </Reveal>

          {/* Impact statement */}

          <Reveal delay={0.2} y={28}>
            <div className="relative flex h-full flex-col justify-center border-l border-hult-pink/40 pl-6 sm:pl-8 lg:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[2px] top-0 h-16 w-[3px] bg-hult-pink"
              />

              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-hult-pink sm:text-sm">
                From idea to impact
              </p>

              <h3 className="mt-5 max-w-md font-display text-3xl font-bold leading-[1.05] tracking-[-0.05em] text-charcoal sm:text-4xl">
                Think boldly.
                <br />
                Build responsibly.
                <br />
                <span className="text-hult-pink">Create change.</span>
              </h3>

              <p className="mt-6 max-w-md font-body text-base leading-7 text-gray">
                Students identify meaningful problems, develop solutions,
                collaborate across disciplines, and turn their ideas into
                ventures with purpose.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-charcoal" />

                <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                  Student · Startup · Impact
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =========================================
              SUSTAINABLE DEVELOPMENT GOALS
          ========================================= */}

        <Reveal delay={0.25} y={24}>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#FAFAFB] px-6 py-8 shadow-[0_20px_60px_rgba(15,15,15,0.06)] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
              {/* Decorative background */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-hult-pink-pale/50 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-[#F4F4F6] blur-2xl"
              />

              <div className="relative">
                {/* Header */}

                <div className="border-b border-black/[0.08] pb-8">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-[2px] w-8 rounded-full bg-hult-pink"
                    />

                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-hult-pink sm:text-xs">
                      Sustainable Development Goals
                    </p>
                  </div>

                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.045em] text-charcoal sm:text-4xl lg:text-[42px]">
                    17 Goals. One shared direction.
                  </h3>

                  <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-gray sm:text-base">
                    The United Nations Sustainable Development Goals provide a
                    shared framework for building a more sustainable and
                    inclusive future.
                  </p>
                </div>

                {/* =========================================
            SDG ICON GRID
        ========================================== */}

                <div className="mt-9 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-5">
                  {sdgs.map((sdg, index) => (
                    <Reveal key={sdg.number} delay={0.02 * index} y={8}>
                      <div className="group flex items-center justify-center">
                        <div className="relative aspect-square w-full max-w-[105px] overflow-hidden rounded-[10px] shadow-[0_6px_18px_rgba(15,15,15,0.07)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(15,15,15,0.12)]">
                          <Image
                            src={sdg.icon}
                            alt={`Sustainable Development Goal ${sdg.number}`}
                            fill
                            sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 105px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-9 flex items-center gap-3 border-t border-black/[0.07] pt-6">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-hult-pink"
                  />

                  <p className="font-body text-xs leading-5 text-gray">
                    Our work is inspired by the SDGs and the global challenges
                    they seek to address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
