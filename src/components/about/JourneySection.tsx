"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const journey = [
  "IDEA",
  "TEAM",
  "SDG-ALIGNED SOLUTION",
  "BUSINESS MODEL",
  "ONCAMPUS PITCH",
  "NATIONALS",
  "DIGITAL INCUBATOR",
  "GLOBAL ACCELERATOR",
  "GLOBAL FINALS",
];

export function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateActiveStep = () => {
      const section = sectionRef.current;

      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only activate the scroll animation while the Journey section
      // is actually visible in the viewport.
      if (sectionRect.bottom < 0 || sectionRect.top > viewportHeight) {
        return;
      }

      // The active step is the card closest to the visual center
      // of the viewport.
      const viewportCenter = viewportHeight * 0.5;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveStep();

    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  const lineProgress =
    journey.length > 1 ? (activeIndex / (journey.length - 1)) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      className="-mb-6 relative overflow-hidden bg-linear-to-br from-[#040f28] via-[#0a2455] to-[#061543] py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(230,0,126,.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(11,31,58,.8),transparent_40%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal delay={0.05} duration={0.7} y={24}>
            <div>
              <div className="inline-flex items-center gap-2 text-s font-bold uppercase tracking-[0.2em] text-hult-pink-light">
                <span className="h-px w-8 bg-hult-pink" />
                The Journey
              </div>

              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[.96] tracking-[-0.05em]">
                From an idea
                <span className="block bg-gradient-to-l from-hult-pink-dark via-pink-500 to-red-400 bg-clip-text text-transparent">
                  to impact at scale.
                </span>
              </h2>

              <p className="mt-9 max-w-lg text-base font-semibold leading-8 text-white/80 sm:text-lg">
                The Hult Prize competition is structured as a progressive
                journey in which teams develop, validate and scale their
                ventures through successive stages.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-hult-pink" />
                <span className="text-sm font-medium text-white/70">
                  Build · Pitch · Connect · Grow
                </span>
              </div>

              <div className="relative mt-15 overflow-hidden rounded-[22px] border border-hult-pink/25 bg-gradient-to-r from-hult-pink/15 to-white/[0.04] p-6">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-hult-pink/20 blur-2xl" />

                <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-hult-pink-light">
                  Destination
                </p>

                <div className="relative mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                      US$1 MILLION
                    </p>

                    <p className="mt-4 text-2sm text-white/75">
                      Seed funding for the global winning team
                    </p>
                  </div>

                  <div className="text-sm font-medium text-white/50">
                    Global Finals
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} duration={0.8} y={28}>
            <div className="relative">
              {/* Journey line */}
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-[18px] top-7 w-px bg-white/20"
              />

              {/* Progressive pink line */}
              <div
                aria-hidden="true"
                className="absolute left-[18px] top-7 w-px bg-hult-pink transition-all duration-500 ease-out"
                style={{
                  height: `calc(${lineProgress}% - 0px)`,
                  maxHeight: "calc(100% - 56px)",
                }}
              />

              <div className="space-y-3">
                {journey.map((stage, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index < activeIndex;

                  return (
                    <div
                      key={stage}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className={`group relative flex items-center gap-5 rounded-[18px] border px-3 py-4 backdrop-blur-md transition-all duration-300 sm:px-6 sm:py-5 ${isActive ? "border-hult-pink/30 bg-white/[0.065]" : "border-white/8 bg-light-gray/10 hover:border-hult-pink/30 hover:bg-white/[0.065]"}`}
                    >
                      <div
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300 ${isActive ? "border-hult-pink bg-hult-pink text-white" : isPassed ? "border-hult-pink/70 bg-charcoal text-hult-pink-light" : "border-hult-pink/30 bg-charcoal text-hult-pink-light group-hover:border-hult-pink group-hover:bg-hult-pink group-hover:text-white"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span
                        className={`font-display text-sm font-bold tracking-[0.08em] transition-colors duration-300 sm:text-base ${isActive ? "text-white" : "text-white/85"}`}
                      >
                        {stage}
                      </span>

                      {index < journey.length - 1 && (
                        <span
                          className={`ml-auto transition-colors duration-300 ${isActive ? "text-hult-pink" : "text-white/15 group-hover:text-hult-pink"}`}
                        >
                          ↓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
