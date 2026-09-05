"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const sdgs = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships for the Goals",
];

export function AboutHultPrize() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-hult-pink-pale/60 blur-3xl"
      />

      <Container className="relative">
        {/* Section introduction */}
        <Reveal>
          <div className="max-w-5xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-hult-pink sm:text-sm">
              About the Hult Prize
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-5xl lg:text-6xl">
              Where student ideas become{" "}
              <span className="text-hult-pink">ideas for impact.</span>
            </h2>
          </div>
        </Reveal>

        {/* Main content */}
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

        {/* SDG titles */}
        <Reveal delay={0.25} y={24}>
          <div className="mt-16 border-y border-black/10 py-8 sm:mt-20 sm:py-10">
            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-charcoal sm:text-3xl">
                  17 Goals. One shared direction.
                </p>

                <p className="mt-2 font-body text-sm text-gray">
                  The United Nations Sustainable Development Goals
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {sdgs.map((sdg, index) => (
                <Reveal key={sdg} delay={0.03 * index} y={12}>
                  <div className="group flex items-start gap-4 border-t border-black/10 py-4">
                    <span className="shrink-0 font-display text-xs font-bold tracking-[0.08em] text-hult-pink">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-body text-sm font-medium leading-5 text-charcoal transition-colors duration-200 group-hover:text-hult-pink sm:text-[15px]">
                      {sdg}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
