"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

type Announcement = {
  title: string;
  description: string;
  href: string;
  brochureHref?: string;
  featured?: boolean;
};

const MAROON = "#7A1F3D";

const announcements: Announcement[] = [
  {
    title: "Student Coordinator Applications — Deadline Extended",
    description:
      "Applications are now open until 7th September 2026 (Midnight).",
    href: "https://forms.gle/hWEgo2jzzHXt2PHr6",
    brochureHref: "/brochure/Student_coordinator_Recrutiment_Brochure.pdf",
    featured: true,
  },
  {
    title: "Committee Recruitment is Ongoing",
    description:
      "Join the Hult Prize journey and become part of the team shaping this year's campus experience.",
    href: "/committee-recruitment",
  },
  {
    title: "Positions Open for Faculty Contact Points",
    description:
      "Faculty contact points are being welcomed across university campuses.",
    href: "#contact",
  },
];

export default function UpcomingEventsTicker() {
  const [current, setCurrent] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);

  const next = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
      setAnimate(true);
    }, 150);
  };

  const prev = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
      setAnimate(true);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const announcement = announcements[current];

  return (
    <section
      aria-label="Latest announcements"
      className="relative overflow-hidden bg-[#0B1F3A]"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full border-[32px] border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-[35%] h-72 w-72 rounded-full border-[45px] border-[#7A1F3D]/[0.06]"
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col md:flex-row">
        {/* MAROON LABEL */}
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

        {/* ANNOUNCEMENT */}
        <div className="flex min-h-[118px] flex-1 items-center px-5 py-4 sm:px-8 md:px-9">
          <div
            className={`w-full transition-all duration-500 ${
              animate ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* CONTENT */}
              <div className="min-w-0">
                <h3 className="max-w-3xl font-display text-lg font-bold leading-tight tracking-[-0.025em] text-white sm:text-xl md:text-[21px]">
                  {announcement.title}
                </h3>

                <p className="mt-1.5 max-w-2xl font-sans text-[13px] leading-5 text-white/85 sm:text-sm">
                  {announcement.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex shrink-0 flex-wrap items-center gap-2.5 lg:ml-8">
                {announcement.featured ? (
                  <>
                    <a
                      href={announcement.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full px-6 py-2.5 font-sans text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ backgroundColor: MAROON, color: "#FFFFFF" }}
                    >
                      Apply Now
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                      href={announcement.brochureHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.04] px-6 py-2.5 font-sans text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.08]"
                      style={{ color: "#FFFFFF" }}
                    >
                      View Brochure
                      <ExternalLink className="h-4 w-4" />
                    </a>
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

        {/* CONTROLS */}
        <div className="flex border-t border-white/10 md:border-l md:border-t-0">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous announcement"
            className="group flex h-11 w-1/2 items-center justify-center transition-colors hover:bg-white/[0.05] md:h-auto md:w-[54px]"
          >
            <ChevronLeft className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next announcement"
            className="group flex h-11 w-1/2 items-center justify-center border-l border-white/10 transition-colors hover:bg-white/[0.05] md:h-auto md:w-[54px]"
          >
            <ChevronRight className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
