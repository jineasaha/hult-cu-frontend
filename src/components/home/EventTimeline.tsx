"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const TIMELINE_COLOR = "#BF2A7D";

type PhaseStatus = "active" | "closed" | "tba";

/*
|--------------------------------------------------------------------------
| EDIT ONLY THIS SECTION WHEN EVENT STATUS CHANGES
|--------------------------------------------------------------------------
|
| status:
| "active" -> Currently happening / applications open
| "closed" -> Completed
| "tba"    -> To be announced
|
*/

const phases = [
  {
    number: "01",
    title: "Core Committee Recruitment",
    status: "active" as PhaseStatus,
    description:
      "Building the operational backbone of the movement. We select dedicated student leaders across logistics, marketing, sponsorship, and participant engagement to organize and drive the campus edition seamlessly.",
  },
  {
    number: "02",
    title: "Team Formation & Registration",
    status: "tba" as PhaseStatus,
    description:
      "Students assemble visionary co-founders and register their impact-driven startups. This stage focuses on bringing together complementary skill sets to address the annual Hult Prize challenge with innovative business models.",
  },
  {
    number: "03",
    title: "Capacity Building Masterclasses",
    status: "tba" as PhaseStatus,
    description:
      "Registered teams undergo intensive training sessions led by industry experts, entrepreneurs, and academic mentors. These workshops refine problem statements, sharpen business viability, and polish pitch delivery ahead of the competition.",
  },
  {
    number: "04",
    title: "Final Event — On-Campus Pitch Competition",
    status: "tba" as PhaseStatus,
    description:
      "Shortlisted teams present their social enterprises to an esteemed panel of judges. The winning team earns the prestigious title of On-Campus Champion and secures direct progression to the next stage of the global journey.",
  },
  {
    number: "05",
    title: "Regional & Global Steering",
    status: "tba" as PhaseStatus,
    description:
      "Campus victors represent the institution on the international stage, advancing through Regional Summits and the Accelerator program — competing for $1M in seed capital at the Hult Prize Global Finals.",
  },
];

const STATUS_CONFIG: Record<
  PhaseStatus,
  {
    label: string;
    shortLabel: string;
  }
> = {
  active: {
    label: "Currently Active",
    shortLabel: "Active",
  },
  closed: {
    label: "Closed",
    shortLabel: "Closed",
  },
  tba: {
    label: "To Be Announced",
    shortLabel: "TBA",
  },
};

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
      className="relative overflow-hidden bg-[linear-gradient(135deg,#FFE9E5_0%,#FFF5F3_50%,#FFE9E5_100%)] pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
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
        {/* HEADING */}

        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: TIMELINE_COLOR }}
              />

              <span
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{ color: TIMELINE_COLOR }}
              >
                Our Journey
              </span>

              <span
                className="h-px w-8"
                style={{ backgroundColor: TIMELINE_COLOR }}
              />
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-[52px]">
              Event{" "}
              <span
                className="font-extrabold"
                style={{ color: TIMELINE_COLOR }}
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

        {/* TIMELINE CARD */}

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/80 bg-white px-5 py-8 shadow-[0_25px_80px_rgba(15,15,15,0.10)] sm:px-8 sm:py-9 lg:px-12 lg:py-10"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-[4px]"
            style={{ backgroundColor: TIMELINE_COLOR }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 h-56 w-56 rounded-full border-[28px] border-[#FFE9E5]"
          />

          {/* DESKTOP */}

          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-8 z-0 w-[4px] -translate-x-1/2 rounded-full bg-[#F1F1F3]"
              style={{ height: "calc(100% - 40px)" }}
            />

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
                    <div className="relative grid min-h-[145px] grid-cols-[1fr_64px_1fr] items-center">
                      <div className="pr-14">
                        {!isRight && (
                          <TimelineContent
                            phase={phase}
                            align="right"
                            desktop
                          />
                        )}
                      </div>

                      <div
                        ref={(element) => {
                          desktopNodeRefs.current[index] = element;
                        }}
                        className="relative z-40 flex justify-center"
                      >
                        <TimelineNode
                          number={phase.number}
                          status={phase.status}
                          scrollActive={index <= activePhase}
                        />
                      </div>

                      <div className="pl-14">
                        {isRight && (
                          <TimelineContent phase={phase} align="left" desktop />
                        )}
                      </div>

                      <div
                        aria-hidden="true"
                        className={`absolute top-1/2 z-20 h-[2px] w-12 -translate-y-1/2 ${isRight ? "left-[calc(50%+32px)]" : "right-[calc(50%+32px)]"}`}
                        style={{ backgroundColor: TIMELINE_COLOR }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* GLOBAL SUMMIT */}

            <Reveal delay={0.3}>
              <div className="relative mt-5 flex flex-col items-center text-center">
                <div
                  ref={desktopEndRef}
                  className="relative z-40 mb-5 h-9 w-9 rounded-full border-[4px] border-white bg-[#0B1F3A] shadow-[0_0_0_2px_#0B1F3A]"
                />

                <span
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: TIMELINE_COLOR }}
                >
                  The Next Stage
                </span>

                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-[-0.04em] text-[#0F0F0F] sm:text-3xl">
                  Hult Prize{" "}
                  <span style={{ color: TIMELINE_COLOR }}>Global Summit</span>
                </h3>

                <p className="mt-2 max-w-md font-sans text-sm text-[#4B4B4B]">
                  From a campus idea to the global stage.
                </p>
              </div>
            </Reveal>
          </div>

          {/* MOBILE */}

          <div className="relative lg:hidden">
            <div
              aria-hidden="true"
              className="absolute left-[17px] top-7 z-0 w-[3px] rounded-full bg-[#F1F1F3]"
              style={{ height: "calc(100% - 40px)" }}
            />

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
                    <div
                      ref={(element) => {
                        mobileNodeRefs.current[index] = element;
                      }}
                      className="relative z-40 flex justify-center"
                    >
                      <MobileNode
                        number={phase.number}
                        status={phase.status}
                        scrollActive={index <= activePhase}
                      />
                    </div>

                    <TimelineContent phase={phase} align="left" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* MOBILE GLOBAL SUMMIT */}

            <Reveal delay={0.25}>
              <div className="relative mt-10 ml-[36px]">
                <div
                  ref={mobileEndRef}
                  className="mb-5 ml-[-36px] flex h-9 w-9 items-center justify-center rounded-full border-[4px] border-white bg-[#0B1F3A] shadow-[0_0_0_2px_#0B1F3A]"
                />

                <div className="rounded-2xl bg-[#0B1F3A] px-6 py-5 shadow-[0_15px_35px_rgba(11,31,58,0.15)]">
                  <span
                    className="font-sans text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: TIMELINE_COLOR }}
                  >
                    The Next Stage
                  </span>

                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Hult Prize{" "}
                    <span style={{ color: TIMELINE_COLOR }}>Global Summit</span>
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
      className={`max-w-[410px] ${isRight ? "ml-auto text-right" : "text-left"}`}
    >
      <div
        className={`mb-2.5 flex items-center gap-2 ${isRight ? "justify-end" : "justify-start"}`}
      >
        <span
          className="font-sans text-[10px] font-extrabold uppercase tracking-[0.26em]"
          style={{ color: TIMELINE_COLOR }}
        >
          Phase {phase.number}
        </span>

        <StatusBadge status={phase.status} />
      </div>

      <h3 className="mt-1.5 font-display text-[22px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0F0F0F] sm:text-[25px]">
        {phase.title}
      </h3>

      <span
        className={`mt-2.5 block h-[2px] w-8 ${isRight ? "ml-auto" : ""}`}
        style={{ backgroundColor: TIMELINE_COLOR }}
      />

      <p className="mt-2 max-w-[380px] font-sans text-[13px] font-semibold leading-5 text-[#4B4B4B]">
        {phase.description}
      </p>
    </div>
  );
}

/* =========================================
   STATUS BADGE
========================================= */

function StatusBadge({ status }: { status: PhaseStatus }) {
  const config = STATUS_CONFIG[status];

  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F9D8A]/25 bg-[#0F9D8A]/10 px-2.5 py-1 font-sans text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#087D6E]">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0F9D8A] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0F9D8A]" />
        </span>
        {config.shortLabel}
      </span>
    );
  }

  if (status === "closed") {
    return (
      <span className="inline-flex items-center rounded-full border border-[#D7D7DB] bg-light-gray px-2.5 py-1 font-sans text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#777777]">
        {config.shortLabel}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F4B400]/35 bg-[#FFF7D6] px-2.5 py-1 font-sans text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#9A7200]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
      {config.shortLabel}
    </span>
  );
}

/* =========================================
   DESKTOP NODE
========================================= */

function TimelineNode({
  number,
  status,
  scrollActive,
}: {
  number: string;
  status: PhaseStatus;
  scrollActive: boolean;
}) {
  const isActive = status === "active";
  const isClosed = status === "closed";

  return (
    <div
      className={`relative flex h-11 w-11 items-center justify-center rounded-full border-[4px] border-white transition-all duration-500 ${isActive ? "animate-[pulse_2.5s_ease-in-out_infinite]" : ""}`}
      style={{
        backgroundColor: isActive
          ? TIMELINE_COLOR
          : isClosed
            ? "#E5E5E8"
            : "#FFFFFF",
        boxShadow: isActive
          ? `0 0 0 3px ${TIMELINE_COLOR}, 0 0 30px rgba(191,42,125,0.45)`
          : scrollActive
            ? "0 0 0 2px #BFBFC4"
            : "0 0 0 2px #D9D9DD",
      }}
    >
      {isActive && (
        <span className="absolute inset-[-7px] rounded-full border border-[#BF2A7D]/25" />
      )}

      {isClosed ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="relative z-10 h-4 w-4 text-[#777777]"
          aria-hidden="true"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      ) : (
        <span
          className={`relative z-10 font-sans text-[9px] font-bold ${isActive ? "text-white" : "text-[#777777]"}`}
        >
          {number}
        </span>
      )}
    </div>
  );
}

/* =========================================
   MOBILE NODE
========================================= */

function MobileNode({
  number,
  status,
  scrollActive,
}: {
  number: string;
  status: PhaseStatus;
  scrollActive: boolean;
}) {
  const isActive = status === "active";
  const isClosed = status === "closed";

  return (
    <div
      className={`relative mt-1 flex h-9 w-9 items-center justify-center rounded-full border-[4px] border-white transition-all duration-500 ${isActive ? "animate-[pulse_2.5s_ease-in-out_infinite]" : ""}`}
      style={{
        backgroundColor: isActive
          ? TIMELINE_COLOR
          : isClosed
            ? "#E5E5E8"
            : "#FFFFFF",
        boxShadow: isActive
          ? `0 0 0 2px ${TIMELINE_COLOR}, 0 0 22px rgba(191,42,125,0.4)`
          : scrollActive
            ? "0 0 0 1.5px #BFBFC4"
            : "0 0 0 1.5px #D9D9DD",
      }}
    >
      {isActive && (
        <span className="absolute inset-[-5px] rounded-full border border-[#BF2A7D]/20" />
      )}

      {isClosed ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="relative z-10 h-3.5 w-3.5 text-[#777777]"
          aria-hidden="true"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      ) : (
        <span
          className={`relative z-10 font-sans text-[8px] font-bold ${isActive ? "text-white" : "text-[#777777]"}`}
        >
          {number}
        </span>
      )}
    </div>
  );
}
