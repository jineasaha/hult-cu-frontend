"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AnnouncementModalProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  eyebrow?: string;
}

export function AnnouncementModal({
  title = "We are now actively recruiting committee members for Hult 2026–27.",
  description = "Join the team behind Hult Prize at the University of Calcutta and be part of building the next chapter of our global social-impact journey.",
  primaryLabel = "Explore Recruitment",
  secondaryLabel = "View Home Page",
  primaryHref = "/committee-recruitment",
  eyebrow = "HULT PRIZE · 2026–27",
}: AnnouncementModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    const navigationType = navigationEntry?.type;

    /*
     * Show the announcement when the website is newly opened/navigated to.
     * Do NOT show it when the current page is refreshed or reloaded.
     */
    if (navigationType === "reload") {
      return;
    }

    const mountTimer = window.setTimeout(() => {
      setIsMounted(true);
      document.body.style.overflow = "hidden";

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }, 0);

    return () => {
      window.clearTimeout(mountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const closeModal = () => {
    setIsVisible(false);

    window.setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
    }, 400);
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-5 py-8 transition-opacity duration-500 ease-out sm:px-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-title"
    >
      {/* Dark backdrop + background blur */}
      <div
        className={`absolute inset-0 bg-[rgba(251, 215, 243, 0.68)] backdrop-blur-[6px] transition-all duration-500 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[600px] overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(221,238,255,0.92)_0%,rgba(255,255,255,0.94)_45%,rgba(255,228,241,0.92)_100%)] shadow-[0_35px_100px_rgba(0,0,0,0.38),0_8px_30px_rgba(11,31,58,0.12)] backdrop-blur-[30px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-7 scale-[0.94] opacity-0"
        }`}
      >
        {/* Premium inner glass highlight */}
        <div
          className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/45"
          aria-hidden="true"
        />

        {/* Top gradient accent */}
        <div
          className="relative h-1.5 w-full bg-[linear-gradient(90deg,#0f0f0f_0%,#6f173f_35%,#c2186b_68%,#c8b6e8_100%)]"
          aria-hidden="true"
        />

        {/* Decorative soft blue glow */}
        <div
          className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(173,216,255,0.35)_0%,rgba(221,238,255,0.16)_42%,transparent_72%)] blur-2xl"
          aria-hidden="true"
        />

        {/* Decorative soft pink glow */}
        <div
          className="pointer-events-none absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,179,209,0.38)_0%,rgba(255,228,241,0.18)_45%,transparent_72%)] blur-2xl"
          aria-hidden="true"
        />

        {/* Subtle central glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.48)_0%,transparent_70%)] blur-2xl"
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close announcement"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/55 text-[var(--charcoal)] shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[rgba(194,24,107,0.20)] hover:bg-white/85 hover:text-[var(--hult-pink-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hult-pink)] focus-visible:ring-offset-2"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative px-7 pb-7 pt-8 sm:px-10 sm:pb-10 sm:pt-9">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(194,24,107,0.16)] bg-[rgba(255,230,241,0.72)] px-3.5 py-2 shadow-[0_4px_15px_rgba(194,24,107,0.06)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--hult-pink)] shadow-[0_0_0_4px_rgba(230,0,126,0.10)]" />

            <span className="font-body text-[11px] font-bold tracking-[0.14em] text-[var(--hult-pink-dark)] sm:text-xs">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="announcement-title"
            className="max-w-[535px] bg-gradient-to-r from-[#0F0F0F] via-[#E6007E] to-[#741E3F] bg-clip-text font-display text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-transparent sm:text-[30px]"
          >
            {title}
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[500px] font-body font-semibold text-[15px] leading-7 text-[var(--gray)] sm:text-[17px] sm:leading-8">
            {description}
          </p>

          {/* Premium divider */}
          <div className="relative my-7 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(15,15,15,0.10),rgba(194,24,107,0.16),transparent)] sm:my-8" />

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Link
              href={primaryHref}
              onClick={closeModal}
              className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c2186b,#e6007e)] px-7 py-3 font-body text-sm font-bold text-white shadow-[0_12px_30px_rgba(230,0,126,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(194,24,107,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hult-pink)] focus-visible:ring-offset-2"
            >
              {primaryLabel}

              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10H16M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}