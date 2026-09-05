"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const HULT_PINK = "#E6007E";

const cohortImages = [
  {
    src: "/images/cohorts/cohort-01.jpg",
    alt: "Hult Prize participants at a campus event",
  },
  {
    src: "/images/cohorts/cohort-02.jpg",
    alt: "Hult Prize student team",
  },
  {
    src: "/images/cohorts/cohort-03.jpg",
    alt: "Hult Prize participants during an event",
  },
  {
    src: "/images/cohorts/cohort-04.jpg",
    alt: "Hult Prize campus activity",
  },
  {
    src: "/images/cohorts/cohort-05.jpg",
    alt: "Hult Prize teams and participants",
  },
  {
    src: "/images/cohorts/cohort-06.jpg",
    alt: "Hult Prize pitch event",
  },
  {
    src: "/images/cohorts/cohort-07.jpg",
    alt: "Hult Prize student community",
  },
  {
    src: "/images/cohorts/cohort-08.jpg",
    alt: "Hult Prize participants together",
  },
  {
    src: "/images/cohorts/cohort-09.jpg",
    alt: "Hult Prize campus gathering",
  },
];

export function PreviousCohorts() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(4);

  /*
   * Automatically change image every 3 seconds.
   * The interval is recreated whenever activeIndex changes,
   * meaning manual navigation also resets the 3-second timer.
   */
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % cohortImages.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const changeCohort = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % cohortImages.length);
    resetTimer();
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + cohortImages.length) % cohortImages.length,
    );
    resetTimer();
  };

  return (
    <Section
      id="cohorts"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(230,0,126,0.055),transparent_28%),radial-gradient(circle_at_88%_75%,rgba(11,31,58,0.045),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,179,209,0.06),transparent_35%),#F5F4F5] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          SUBTLE BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 hidden h-72 w-72 rounded-full border-[28px] border-[#E6007E]/[0.055] sm:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 hidden h-80 w-80 rounded-full border-[35px] border-[#0B1F3A]/[0.035] sm:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[#FFB3D1]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[58%] h-2 w-2 rounded-full bg-[#FFB3D1]"
      />

      {/* Very subtle center glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[48%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-3xl"
      />

      <Container>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: HULT_PINK }}
              />

              <span
                className="font-sans text-[10px] font-bold uppercase tracking-[0.32em]"
                style={{ color: HULT_PINK }}
              >
                Looking Back
              </span>

              <span
                className="h-px w-10"
                style={{ backgroundColor: HULT_PINK }}
              />
            </div>

            <h2 className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-[#0F0F0F] sm:text-5xl lg:text-6xl">
              Previous{" "}
              <span className="bg-gradient-to-r from-[#0F0F0F] via-[#E6007E] to-[#741E3F] bg-clip-text text-transparent">
                Cohorts
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-[#4B4B4B] sm:text-base">
              A look back at the people, ideas, and moments that shaped the Hult
              Prize journey at the University of Calcutta.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            DESKTOP EXPERIENCE
        ====================================================== */}

        <Reveal delay={0.05}>
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-6xl">
              {/* Main Image */}

              <div className="relative overflow-hidden rounded-[28px] bg-[#F4F4F6] shadow-[0_20px_55px_rgba(15,15,15,0.08)]">
                <div className="relative aspect-[2.05/1]">
                  {cohortImages.map((image, index) => (
                    <div
                      key={image.src}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        activeIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-[1.035] opacity-0"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === activeIndex}
                        className="object-cover"
                        sizes="1200px"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  ))}

                  {/* =================================================
                      LEFT ARROW
                  ================================================== */}

                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label="Previous cohort"
                    className="group absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#0F0F0F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M19 12H5M11 6l-6 6 6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* =================================================
                      RIGHT ARROW
                  ================================================== */}

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next cohort"
                    className="group absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#0F0F0F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Image counter */}

                  <div className="absolute right-5 top-5 z-20 rounded-full bg-[#0F0F0F]/75 px-4 py-2 backdrop-blur-md">
                    <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-white">
                      {String(activeIndex + 1).padStart(2, "0")} / 09
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  PROGRESS TIMELINE
              ================================================== */}

              <div className="mx-auto mt-10 max-w-6xl">
                <div className="relative">
                  {/* Base line */}

                  <div className="absolute left-0 right-0 top-[11px] h-px bg-[#D9D8DC]" />

                  {/* Pink progress */}

                  <div
                    className="absolute left-0 top-[10px] h-[3px] transition-all duration-500"
                    style={{
                      width: `${(activeIndex / 8) * 100}%`,
                      backgroundColor: HULT_PINK,
                    }}
                  />

                  {/* Timeline nodes */}

                  <div className="relative flex justify-between">
                    {cohortImages.map((image, index) => {
                      const active = activeIndex === index;

                      return (
                        <button
                          key={image.src}
                          type="button"
                          onMouseEnter={() => changeCohort(index)}
                          onFocus={() => changeCohort(index)}
                          onClick={() => changeCohort(index)}
                          aria-label={`Show cohort ${index + 1}`}
                          className="group flex w-[9%] flex-col items-center focus:outline-none"
                        >
                          <span
                            className={`relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border-4 border-[#F5F4F5] transition-all duration-300 ${
                              active ? "scale-125" : "group-hover:scale-110"
                            }`}
                            style={{
                              backgroundColor: active ? HULT_PINK : "#D2D0D5",
                            }}
                          >
                            {active && (
                              <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            )}
                          </span>

                          <span
                            className={`mt-4 font-display text-xs font-bold transition-colors ${
                              active ? "text-[#0F0F0F]" : "text-[#999999]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            MOBILE EXPERIENCE
        ====================================================== */}

        <Reveal delay={0.05}>
          <div className="lg:hidden">
            {/* Main image */}

            <div className="relative overflow-hidden rounded-[22px] bg-[#F4F4F6] shadow-[0_16px_40px_rgba(15,15,15,0.08)]">
              <div className="relative aspect-[4/3]">
                {cohortImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[1.03] opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  </div>
                ))}

                {/* =================================================
                    MOBILE LEFT ARROW
                ================================================== */}

                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous cohort"
                  className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0F0F0F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M19 12H5M11 6l-6 6 6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* =================================================
                    MOBILE RIGHT ARROW
                ================================================== */}

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next cohort"
                  className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0F0F0F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Counter */}

                <div className="absolute right-4 top-4 z-20 rounded-full bg-[#0F0F0F]/75 px-3 py-1.5 backdrop-blur-md">
                  <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-white">
                    {String(activeIndex + 1).padStart(2, "0")} / 09
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE THUMBNAILS
            ================================================== */}

            <div className="mt-7 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex min-w-max gap-2">
                {cohortImages.map((image, index) => {
                  const active = activeIndex === index;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => changeCohort(index)}
                      aria-label={`Show cohort ${index + 1}`}
                      className={`relative flex h-16 w-16 shrink-0 overflow-hidden rounded-[12px] border-2 transition-all duration-300 ${
                        active
                          ? "scale-105 border-[#E6007E]"
                          : "border-transparent opacity-60"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="64px"
                      />

                      <span
                        className={`absolute bottom-1 left-1 rounded-full px-1.5 py-0.5 font-sans text-[8px] font-bold ${
                          active
                            ? "bg-[#E6007E] text-white"
                            : "bg-black/70 text-white"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================== */}

            <div className="mt-6 flex items-center justify-center gap-1.5">
              {cohortImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeCohort(index)}
                  aria-label={`Go to cohort ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-7" : "w-1.5"
                  }`}
                  style={{
                    backgroundColor:
                      activeIndex === index ? HULT_PINK : "#D7D7DA",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl border-t border-[#DAD9DD] pt-10 text-center sm:mt-16">
            <div
              className="mx-auto mb-4 h-2 w-2 rounded-full"
              style={{ backgroundColor: HULT_PINK }}
            />

            <p className="font-display text-2xl font-extrabold tracking-[-0.035em] text-[#0F0F0F] sm:text-3xl">
              Every cohort leaves a mark.
            </p>

            <p className="mt-2 font-sans text-sm text-[#5A5A5A] sm:text-base">
              The next chapter starts with you.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
