"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Announcement = {
  title: string;
  description: string;
  href: string;
  brochureHref?: string;
  featured?: boolean;
  closed?: boolean;
};

const MAROON = "#7A1F3D";

const announcements: Announcement[] = [
  {
    title: "Positions Open for Faculty Contact Points",
    description:
      "Faculty contact points are being welcomed across university campuses.",
    href: "#contact",
  },
  {
    title: "Student Coordinator Applications — Closed",
    description: "Applications are now closed.",
    href: "https://forms.gle/hWEgo2jzzHXt2PHr6",
    brochureHref: "/brochure/Student_coordinator_Recrutiment_Brochure.pdf",
    featured: true,
    closed: true,
  },
  {
    title: "Committee Recruitment is now CLOSED",
    description:
      "Join the Hult Prize journey and become part of the team shaping this year's campus experience.",
    href: "/committee-recruitment",
  },
  
];

export default function UpcomingEventsTicker() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeAnnouncement = (direction: "next" | "prev") => {
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }

    setAnimate(false);

    transitionTimeout.current = setTimeout(() => {
      setCurrent((previous) => {
        if (direction === "next") {
          return (previous + 1) % announcements.length;
        }

        return previous === 0 ? announcements.length - 1 : previous - 1;
      });

      setAnimate(true);
    }, 180);
  };

  const next = () => {
    changeAnnouncement("next");
  };

  const prev = () => {
    changeAnnouncement("prev");
  };

  /*
   * The timer is intentionally based on `current`.
   *
   * Whenever the user manually changes the announcement,
   * `current` changes and this effect starts a completely
   * fresh 3-second timer.
   */
  useEffect(() => {
    if (showAll) {
      return;
    }

    const timer = setTimeout(() => {
      changeAnnouncement("next");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [current, showAll]);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const announcement = announcements[current];

  return (
    <section
      id="announcements"
      aria-label="Latest announcements"
      className="relative overflow-hidden bg-[#0B1F3A]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full border-[32px] border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-[35%] h-72 w-72 rounded-full border-[45px] border-[#7A1F3D]/[0.06]"
      />

      {/* Main ticker */}
      <div className="relative mx-auto flex max-w-[1600px] flex-col md:flex-row">
        {/* Hult Prize label */}
        <div
          className="flex shrink-0 items-center gap-3 px-5 py-3.5 sm:px-7 md:w-[215px] md:flex-col md:items-start md:justify-center md:gap-1 md:px-8 md:py-4"
          style={{ backgroundColor: MAROON }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />

            <span className="font-sans text-[15px] font-bold uppercase tracking-[0.2em] text-white">
              Hult Prize
            </span>
          </div>

          <h2 className="mt-2 font-display text-lg font-bold tracking-[-0.03em] text-white sm:text-xl">
            Latest Updates
          </h2>
        </div>

        {/* Announcement content */}
        <div className="flex min-h-[118px] min-w-0 flex-1 items-center px-5 py-4 sm:px-8 md:px-9">
          <div
            className={`w-full transform transition-[opacity,transform] duration-500 ease-out ${
              animate ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                {/* Status */}
                <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                  {announcement.closed && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-hult-pink/30 bg-hult-pink/[0.08] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-hult-pink-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-hult-pink-light" />
                      Applications Closed
                    </span>
                  )}

                  {announcement.featured && !announcement.closed && (
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="max-w-3xl font-display text-lg font-bold leading-tight tracking-[-0.025em] text-white sm:text-xl md:text-[21px]">
                  {announcement.title}
                </h3>

                <p className="mt-1.5 max-w-2xl font-sans text-[13px] leading-5 text-white/70 sm:text-sm">
                  {announcement.description}
                </p>
              </div>

              {/* Announcement actions */}
              <div className="flex shrink-0 flex-wrap items-center gap-2.5 lg:ml-8">
                {announcement.closed ? (
                  <>
                    <span className="inline-flex min-h-[42px] cursor-default items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 font-sans text-sm font-bold text-white/40">
                      Applications Closed
                    </span>

                    {announcement.brochureHref && (
                      <a
                        href={announcement.brochureHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-2.5 font-sans text-sm font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.08] hover:!text-white"
                      >
                        View Brochure
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </>
                ) : (
                  <a
                    href={announcement.href}
                    className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full px-6 py-2.5 font-sans text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: MAROON, color: "#FFFFFF" }}
                  >
                    Learn More
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile controls + desktop controls */}
        <div className="flex shrink-0 border-t border-white/10 md:border-l md:border-t-0">
          {/* Previous */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous announcement"
            className="group flex h-12 w-14 items-center justify-center border-r border-white/10 transition-colors duration-300 hover:bg-white/[0.05] md:h-auto md:w-[54px]"
          >
            <ChevronLeft className="h-5 w-5 text-white/45 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white" />
          </button>

          {/* View All Updates */}
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            aria-expanded={showAll}
            className="group flex h-12 min-w-0 flex-1 items-center justify-center gap-2 px-4 border-r border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 transition-all duration-300 hover:bg-white/[0.025] hover:text-white sm:text-[10px] md:h-auto md:w-[145px] md:flex-none md:px-3"
          >
            <span className="whitespace-nowrap">
              {showAll ? "Close" : "View All"}
            </span>

            {showAll ? (
              <X className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next announcement"
            className="group relative z-10 flex h-12 w-14 shrink-0 items-center justify-center border-r border-white/10 transition-colors duration-300 hover:bg-white/[0.05] md:h-auto md:w-[54px]"
          >
            <ChevronRight className="h-5 w-5 text-white/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Expanded updates */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 px-5 py-7 sm:px-8 md:px-12 md:py-8">
            <div className="mx-auto max-w-[1200px]">
              {/* Expanded header */}
              <div className="mb-5 flex items-end justify-between gap-6">
                <div>
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-hult-pink-light">
                    Hult Prize
                  </p>

                  <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                    All Updates
                  </h3>
                </div>

                <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-white/25 sm:block">
                  Latest announcements
                </span>
              </div>

              {/* Update list */}
              <div className="divide-y divide-white/10">
                {announcements.map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="group flex flex-col gap-4 py-6 first:pt-0 last:pb-0 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.closed && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-hult-pink/25 bg-hult-pink/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-hult-pink-light">
                            <span className="h-1.5 w-1.5 rounded-full bg-hult-pink-light" />
                            Applications Closed
                          </span>
                        )}
                      </div>

                      <h4 className="font-display text-lg font-bold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-hult-pink-light sm:text-xl lg:text-[22px]">
                        {item.title}
                      </h4>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    {/* Expanded actions */}
                    <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                      {item.closed ? (
                        <>
                          <span className="inline-flex min-h-[42px] items-center rounded-full border border-white/10 bg-white/[0.025] px-5 text-sm font-semibold text-white/30">
                            Closed
                          </span>

                          {item.brochureHref && (
                            <a
                              href={item.brochureHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-hult-pink/40 hover:bg-hult-pink/[0.08] hover:!text-hult-pink-light"
                            >
                              View Brochure
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                          style={{
                            backgroundColor: MAROON,
                            color: "#FFFFFF",
                          }}
                        >
                          View Update
                          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
