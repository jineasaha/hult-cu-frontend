"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const TIMELINE_COLOR = "#BF2A7D";

const phases = [
  {
    number: "01",
    title: "Core Committee Recruitment",
    description:
      "Building the operational backbone of the movement. We select dedicated student leaders across logistics, marketing, sponsorship, and participant engagement to organize and drive the campus edition seamlessly.",
  },
  {
    number: "02",
    title: "Team Formation & Registration",
    description:
      "Students assemble visionary co-founders and register their impact-driven startups. This stage focuses on bringing together complementary skill sets to address the annual Hult Prize challenge with innovative business models.",
  },
  {
    number: "03",
    title: "Capacity Building Masterclasses",
    description:
      "Registered teams undergo intensive training sessions led by industry experts, entrepreneurs, and academic mentors. These workshops refine problem statements, sharpen business viability, and polish pitch delivery ahead of the competition.",
  },
  {
    number: "04",
    title: "Final Event — On-Campus Pitch Competition",
    description:
      "Shortlisted teams present their social enterprises to an esteemed panel of judges. The winning team earns the prestigious title of On-Campus Champion and secures direct progression to the next stage of the global journey.",
  },
  {
    number: "05",
    title: "Regional & Global Steering",
    description:
      "Campus victors represent the institution on the international stage, advancing through Regional Summits and the Accelerator program — competing for $1M in seed capital at the Hult Prize Global Finals.",
  },
];

export function EventTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const desktopNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const desktopEndRef = useRef<HTMLDivElement | null>(null);
  const mobileEndRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    const updateTimeline = () => {
      const timeline = timelineRef.current;

      if (!timeline) return;

      const timelineRect = timeline.getBoundingClientRect();

      const nodes = isMobile ? mobileNodeRefs.current : desktopNodeRefs.current;

      const endNode = isMobile ? mobileEndRef.current : desktopEndRef.current;

      if (!endNode) return;

      const lineStart = 32;

      const endRect = endNode.getBoundingClientRect();

      const endCenter = endRect.top - timelineRect.top + endRect.height / 2;

      const triggerPoint = window.innerHeight * 0.35;

      const currentLinePosition = triggerPoint - timelineRect.top;

      const clampedPosition = Math.max(
        lineStart,
        Math.min(currentLinePosition, endCenter),
      );

      const progressHeight = clampedPosition - lineStart;

      setProgress(progressHeight);

      let nextActivePhase = -1;

      nodes.forEach((node, index) => {
        if (!node) return;

        const nodeRect = node.getBoundingClientRect();

        const nodeCenter =
          nodeRect.top - timelineRect.top + nodeRect.height / 2;

        if (clampedPosition >= nodeCenter) {
          nextActivePhase = index;
        }
      });

      setActivePhase(nextActivePhase);
    };

    const frame = requestAnimationFrame(updateTimeline);

    window.addEventListener("scroll", updateTimeline, {
      passive: true,
    });

    window.addEventListener("resize", updateTimeline);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", updateTimeline);

      window.removeEventListener("resize", updateTimeline);
    };
  }, [isMobile]);

  return (
    <Section
      id="timeline"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#FFE9E5_0%,#FFF5F3_50%,#FFE9E5_100%)] py-14 sm:py-16 lg:py-20"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 hidden h-[480px] w-[480px] rounded-full bg-white/40 blur-3xl sm:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[450px] w-[450px] rounded-full bg-white/50 blur-3xl sm:block"
      />

      <Container>
        {/* =========================
            HEADING
        ========================== */}

        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-8"
                style={{
                  backgroundColor: TIMELINE_COLOR,
                }}
              />

              <span
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: TIMELINE_COLOR,
                }}
              >
                Our Journey
              </span>

              <span
                className="h-px w-8"
                style={{
                  backgroundColor: TIMELINE_COLOR,
                }}
              />
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-[52px]">
              Event{" "}
              <span
                className="font-extrabold"
                style={{
                  color: TIMELINE_COLOR,
                }}
              >
                Timeline
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-md font-sans text-sm leading-6 text-[#4B4B4B] sm:text-base">
              A five-stage journey from building the team to reaching the global
              stage.
            </p>
          </div>
        </Reveal>

        {/* =========================
            TIMELINE CARD
        ========================== */}

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/80 bg-white px-5 py-8 shadow-[0_25px_80px_rgba(15,15,15,0.10)] sm:px-8 sm:py-9 lg:px-12 lg:py-10"
        >
          {/* Top accent */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-[4px]"
            style={{
              backgroundColor: TIMELINE_COLOR,
            }}
          />

          {/* Decorative ring */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 h-56 w-56 rounded-full border-[28px] border-[#FFE9E5]"
          />

          {/* =========================
              DESKTOP
          ========================== */}

          <div className="relative hidden lg:block">
            {/* Base line */}

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-8 z-0 w-[4px] -translate-x-1/2 rounded-full bg-[#F1F1F3]"
              style={{
                height: "calc(100% - 40px)",
              }}
            />

            {/* Progress line */}

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-8 z-10 w-[4px] -translate-x-1/2 rounded-full transition-[height] duration-200 ease-out"
              style={{
                height: `${progress}px`,
                backgroundColor: TIMELINE_COLOR,
              }}
            />

            <div className="relative space-y-2">
              {phases.map((phase, index) => {
                const isRight = index % 2 === 0;

                return (
                  <Reveal key={phase.number} delay={index * 0.05}>
                    <div className="relative grid min-h-[125px] grid-cols-[1fr_64px_1fr] items-center">
                      {/* LEFT CONTENT */}

                      <div className="pr-14">
                        {!isRight && (
                          <TimelineContent
                            phase={phase}
                            align="right"
                            desktop
                          />
                        )}
                      </div>

                      {/* NODE */}

                      <div
                        ref={(element) => {
                          desktopNodeRefs.current[index] = element;
                        }}
                        className="relative z-40 flex justify-center"
                      >
                        <TimelineNode
                          number={phase.number}
                          active={index <= activePhase}
                        />
                      </div>

                      {/* RIGHT CONTENT */}

                      <div className="pl-14">
                        {isRight && (
                          <TimelineContent phase={phase} align="left" desktop />
                        )}
                      </div>

                      {/* CONNECTOR */}

                      <div
                        aria-hidden="true"
                        className={`absolute top-1/2 z-20 h-[2px] w-12 -translate-y-1/2 ${
                          isRight
                            ? "left-[calc(50%+32px)]"
                            : "right-[calc(50%+32px)]"
                        }`}
                        style={{
                          backgroundColor: TIMELINE_COLOR,
                        }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* =========================
                GLOBAL SUMMIT
            ========================== */}

            <Reveal delay={0.3}>
              <div className="relative mt-5 flex flex-col items-center text-center">
                <div
                  ref={desktopEndRef}
                  className="relative z-40 mb-5 h-9 w-9 rounded-full border-[4px] border-white bg-[#0B1F3A] shadow-[0_0_0_2px_#0B1F3A]"
                />

                <span
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{
                    color: TIMELINE_COLOR,
                  }}
                >
                  The Next Stage
                </span>

                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-[-0.04em] text-[#0F0F0F] sm:text-3xl">
                  Hult Prize{" "}
                  <span
                    style={{
                      color: TIMELINE_COLOR,
                    }}
                  >
                    Global Summit
                  </span>
                </h3>

                <p className="mt-2 max-w-md font-sans text-sm text-[#4B4B4B]">
                  From a campus idea to the global stage.
                </p>
              </div>
            </Reveal>
          </div>

          {/* =========================
              MOBILE
          ========================== */}

          <div className="relative lg:hidden">
            {/* Base line */}

            <div
              aria-hidden="true"
              className="absolute left-[17px] top-7 z-0 w-[3px] rounded-full bg-[#F1F1F3]"
              style={{
                height: "calc(100% - 40px)",
              }}
            />

            {/* Progress line */}

            <div
              aria-hidden="true"
              className="absolute left-[17px] top-7 z-10 w-[3px] rounded-full transition-[height] duration-200 ease-out"
              style={{
                height: `${progress}px`,
                backgroundColor: TIMELINE_COLOR,
              }}
            />

            <div className="relative space-y-9">
              {phases.map((phase, index) => (
                <Reveal key={phase.number} delay={index * 0.05}>
                  <div className="relative grid grid-cols-[36px_1fr] gap-5">
                    {/* NODE */}

                    <div
                      ref={(element) => {
                        mobileNodeRefs.current[index] = element;
                      }}
                      className="relative z-40 flex justify-center"
                    >
                      <MobileNode
                        number={phase.number}
                        active={index <= activePhase}
                      />
                    </div>

                    {/* CONTENT */}

                    <TimelineContent phase={phase} align="left" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile Global Summit */}

            <Reveal delay={0.25}>
              <div className="relative mt-10 ml-[36px]">
                <div
                  ref={mobileEndRef}
                  className="mb-5 ml-[-36px] flex h-9 w-9 items-center justify-center rounded-full border-[4px] border-white bg-[#0B1F3A] shadow-[0_0_0_2px_#0B1F3A]"
                />

                <div className="rounded-2xl bg-[#0B1F3A] px-6 py-5 shadow-[0_15px_35px_rgba(11,31,58,0.15)]">
                  <span
                    className="font-sans text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{
                      color: TIMELINE_COLOR,
                    }}
                  >
                    The Next Stage
                  </span>

                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Hult Prize{" "}
                    <span
                      style={{
                        color: TIMELINE_COLOR,
                      }}
                    >
                      Global Summit
                    </span>
                  </h3>

                  <p className="mt-1 text-xs text-white/70">
                    From a campus idea to the global stage.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Decorative bottom circle */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full border-[55px] border-white/40"
      />
    </Section>
  );
}

/* =========================================
   CONTENT
========================================= */

function TimelineContent({
  phase,
  align,
  desktop = false,
}: {
  phase: (typeof phases)[number];
  align: "left" | "right";
  desktop?: boolean;
}) {
  const isRight = align === "right";

  return (
    <div
      className={`max-w-[410px] ${
        isRight ? "ml-auto text-right" : "text-left"
      } ${desktop ? "-translate-y-10" : ""}`}
    >
      <span
        className="font-sans text-[10px] font-extrabold uppercase tracking-[0.26em]"
        style={{
          color: TIMELINE_COLOR,
        }}
      >
        Phase {phase.number}
      </span>

      <h3 className="mt-1.5 font-display text-[22px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0F0F0F] sm:text-[25px]">
        {phase.title}
      </h3>

      <span
        className={`mt-2.5 block h-[2px] w-8 ${isRight ? "ml-auto" : ""}`}
        style={{
          backgroundColor: TIMELINE_COLOR,
        }}
      />

      <p className="mt-2 max-w-[380px] font-sans text-[13px] font-semibold leading-5 text-[#4B4B4B]">
        {phase.description}
      </p>
    </div>
  );
}

/* =========================================
   DESKTOP NODE
========================================= */

function TimelineNode({ number, active }: { number: string; active: boolean }) {
  return (
    <div
      className="relative flex h-11 w-11 items-center justify-center rounded-full border-[4px] border-white transition-all duration-500"
      style={{
        backgroundColor: active ? TIMELINE_COLOR : "#FFFFFF",

        boxShadow: active
          ? `0 0 0 2px ${TIMELINE_COLOR}, 0 0 24px rgba(191,42,125,0.35)`
          : "0 0 0 2px #D9D9DD",
      }}
    >
      {active && (
        <span className="absolute inset-[3px] rounded-full border border-white/50" />
      )}

      <span
        className={`relative z-10 font-sans text-[9px] font-bold ${
          active ? "text-white" : "text-[#777777]"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

/* =========================================
   MOBILE NODE
========================================= */

function MobileNode({ number, active }: { number: string; active: boolean }) {
  return (
    <div
      className="relative mt-1 flex h-9 w-9 items-center justify-center rounded-full border-[4px] border-white transition-all duration-500"
      style={{
        backgroundColor: active ? TIMELINE_COLOR : "#FFFFFF",

        boxShadow: active
          ? `0 0 0 2px ${TIMELINE_COLOR}, 0 0 20px rgba(191,42,125,0.30)`
          : "0 0 0 1.5px #D9D9DD",
      }}
    >
      <span
        className={`font-sans text-[8px] font-bold ${
          active ? "text-white" : "text-[#777777]"
        }`}
      >
        {number}
      </span>
    </div>
  );
}
