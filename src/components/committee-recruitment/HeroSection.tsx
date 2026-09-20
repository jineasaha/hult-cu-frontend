"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#e9d5e8]">
      {/* ============================================================ */}
      {/* BASE ENVIRONMENT                                             */}
      {/* ============================================================ */}
      <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      linear-gradient(
        100deg,
        #f0dce9 0%,
        #f5e4ed 18%,
        #f9edf2 38%,
        #f8eaf0 55%,
        #f6e0eb 72%,
        #efc5dc 88%,
        #e7b3d0 100%
      )
    `,
  }}
/>

{/* Soft maroon glow — mobile / small screens only */}
<div
  className="pointer-events-none absolute -left-[180px] -top-[180px] h-[430px] w-[430px] rounded-full blur-[90px] lg:hidden"
  style={{
    background:
      "radial-gradient(circle, rgba(108,32,70,0.30) 0%, rgba(137,57,98,0.18) 38%, rgba(194,115,157,0.08) 60%, transparent 74%)",
  }}
/>

{/* Soft maroon glow — mobile / small screens only */}
<div
  className="pointer-events-none absolute -bottom-[180px] -right-[180px] h-[470px] w-[470px] rounded-full blur-[95px] lg:hidden"
  style={{
    background:
      "radial-gradient(circle, rgba(108,32,70,0.34) 0%, rgba(137,57,98,0.20) 38%, rgba(194,115,157,0.10) 60%, transparent 74%)",
  }}
/>

      {/* ============================================================ */}
      {/* CENTER EDITORIAL LIGHT                                      */}
      {/* ============================================================ */}

      <div
        className="pointer-events-none absolute left-1/2 top-[8%] h-[620px] w-[760px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,246,249,0.78) 0%, rgba(250,226,237,0.48) 38%, rgba(243,196,220,0.18) 68%, transparent 78%)",
        }}
      />

      {/* ============================================================ */}
      {/* LEFT LILAC ATMOSPHERE                                       */}
      {/* ============================================================ */}

      <div
        className="pointer-events-none absolute left-[-180px] top-[-100px] h-[760px] w-[520px] blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(171,133,202,0.42) 0%, rgba(201,169,218,0.28) 40%, transparent 74%)",
        }}
      />

      {/* ============================================================ */}
      {/* RIGHT MAGENTA ATMOSPHERE                                    */}
      {/* ============================================================ */}

      <div
        className="pointer-events-none absolute right-[-160px] top-[-80px] h-[780px] w-[500px] blur-[75px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(193, 104, 163, 0.62) 0%, rgba(232, 170, 205, 0.65) 38%, rgba(240, 184, 214, 0.74) 64%, transparent 78%)",
        }}
      />

      {/* ============================================================ */}
      {/* LEFT ARCHITECTURAL COLUMN                                   */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[14%] lg:block">
        {/* Main lilac column */}
        <div
          className="absolute inset-y-0 left-0 w-[72%] border-r border-white/35"
          style={{
            background:
              "linear-gradient(165deg, #36061b 10%, #8b1b59 29%, #bb8198 48%, #c7b0be 72%, #680c32 100%)",
          }}
        />

        {/* Bright inner edge */}
        <div className="absolute inset-y-0 left-[72%] w-px bg-white/55" />

        {/* Thin secondary column */}
        <div
          className="absolute inset-y-0 left-[72%] w-[18%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(226,199,226,0.16))",
          }}
        />

        {/* Vertical highlight */}
        <div
          className="absolute inset-y-0 left-[30%] w-[2px] opacity-30"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, white 40%, white 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* RIGHT MAGENTA ARCHITECTURAL COLUMN                          */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[14%] lg:block">
        {/* Secondary pink strip */}
        <div
          className="absolute inset-y-0 left-0 w-[28%] border-l border-white/35"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,173,211,0.34), rgba(224,116,180,0.34))",
          }}
        />

        {/* Main magenta column */}
        <div
          className="absolute inset-y-0 right-0 w-[72%] border-l border-white/25"
          style={{
            background:
              "linear-gradient(165deg, #36061b 5%, #8b1b59 19%, #bb8198 36%, #c7b0be 50%, #680c32 85%, #36061b 100%)",
          }}
        />

        {/* Bright inner edge */}
        <div className="absolute inset-y-0 left-[28%] w-px bg-white/45" />

        {/* Soft highlight */}
        <div
          className="absolute inset-y-0 left-[8%] w-[45px] opacity-20 blur-xl"
          style={{
            background:
              "linear-gradient(180deg, transparent, white, transparent)",
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* CENTRAL EDITORIAL WALL                                     */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute inset-y-0 left-[14%] right-[14%] hidden lg:block">
        <div
          className="absolute inset-0 border-x border-white/30"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,249,251,0.16) 0%, rgba(255,239,246,0.12) 55%, rgba(246,207,228,0.22) 100%)",
          }}
        />

        {/* Left central light wash */}
        <div
          className="absolute left-[8%] top-0 h-full w-[24%] opacity-40 blur-[50px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.48), transparent)",
          }}
        />

        {/* Right central light wash */}
        <div
          className="absolute right-[8%] top-0 h-full w-[22%] opacity-25 blur-[55px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* VERY SUBTLE ARCHITECTURAL VERTICAL LINES                  */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute left-[18%] top-[22%] hidden h-[300px] w-px bg-white/30 lg:block" />

      <div className="pointer-events-none absolute right-[18%] top-[20%] hidden h-[270px] w-px bg-white/30 lg:block" />

      {/* ============================================================ */}
{/* MOBILE / TABLET SOFT PINK ENVIRONMENT                       */}
{/* ============================================================ */}

<div className="pointer-events-none absolute inset-0 lg:hidden">
  {/* Soft elegant pink base */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(135deg, #f7e8f1 0%, #faedf3 35%, #f9eaf1 65%, #f6e3ed 100%)",
    }}
  />

  {/* Elegant maroon glow — top left */}
  <div
    className="absolute -left-[100px] -top-[85px] h-[240px] w-[320px] rounded-full blur-[70px]"
    style={{
      background:
        "radial-gradient(circle at 48% 48%,  rgb(182, 63, 146) 3%, rgba(240, 153, 196, 0.93) 22%, rgba(243, 188, 216, 0.83) 44%, rgba(173,91,126,0.09) 63%, transparent 79%)",
    }}
  />

  {/* Soft inner bloom from top-left */}
  <div
    className="absolute -left-[35px] -top-[35px] h-[180px] w-[210px] rounded-full blur-[45px]"
    style={{
      background:
        "radial-gradient(circle, rgba(91,20,55,0.22) 0%, rgba(161, 92, 128, 0.1) 42%, transparent 72%)",
    }}
  />

  {/* Elegant maroon glow — bottom right */}
  <div
    className="absolute -bottom-[120px] -right-[150px] h-[320px] w-[500px] rounded-full blur-[75px]"
    style={{
      background:
        "radial-gradient(circle at 52% 52%, rgb(183, 81, 153) 3%, rgba(249, 174, 211, 0.93) 22%, rgba(243, 188, 216, 0.83) 44%, rgba(173,91,126,0.09) 63%, transparent 79%)",
    }}
  />

  {/* Soft inner bloom from bottom-right */}
  <div
    className="absolute -bottom-[35px] -right-[35px] h-[220px] w-[220px] rounded-full blur-[48px]"
    style={{
      background:
        "radial-gradient(circle, rgba(91,20,55,0.24) 0%, rgba(213, 149, 182, 0.1) 44%, transparent 74%)",
    }}
  />
</div>


      {/* ============================================================ */}
      {/* HERO CONTENT                                                */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-[1400px] mt-9 items-center px-5 pb-24 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1000px] text-center">
          {/* ======================================================== */}
          {/* BRAND LINE                                               */}
          {/* ======================================================== */}

          <Reveal delay={0.05} duration={0.65} y={18}>
            <div className="mb-8 mt-7 flex items-center justify-center gap-4 sm:mb-9">
              <span className="h-px w-10 bg-charcoal/20 sm:w-14" />

              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-black sm:text-[10px]">
                HULT PRIZE
                <span className="mx-3 text-hult-pink">|</span>
                UNIVERSITY OF CALCUTTA
              </p>

              <span className="h-px w-10 bg-charcoal/20 sm:w-14" />
            </div>
          </Reveal>

          {/* ======================================================== */}
          {/* HEADING                                                  */}
          {/* ======================================================== */}

          <Reveal delay={0.15} duration={0.75} y={22}>
            <h1 className="mx-auto max-w-[950px] font-display text-[clamp(3rem,6.7vw,5.25rem)] font-bold leading-[0.94] tracking-[-0.055em]">

              <span className="block text-[#171522]">
                Join the team
              </span>

              <span className="block bg-gradient-to-r from-[#0F0F0F] via-[#E6007E] to-[#741E3F] bg-clip-text text-transparent">
                behind the impact.
              </span>
            </h1>
          </Reveal>

          {/* ======================================================== */}
          {/* DESCRIPTION                                             */}
          {/* ======================================================== */}

          <Reveal delay={0.28} duration={0.7} y={22}>
            <p className="mx-auto mt-7 max-w-[650px] text-[15px] font-medium leading-7 text-[#38303c]/75 sm:mt-8 sm:text-[16px] sm:leading-7">
              Be part of the team building the Hult Prize experience
              <br className="hidden sm:block" />
              at the University of Calcutta — from the first idea to the final
              event.
            </p>
          </Reveal>

          {/* ======================================================== */}
          {/* BUTTONS                                                  */}
          {/* ======================================================== */}

          <Reveal delay={0.38} duration={0.7} y={20}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            
            <Button
              href="/docs/Final_Committee_List.pdf"
              target="_blank"
              size="lg"
              variant="primary"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#E6007E] px-7 text-sm font-semibold text-white shrink-0 whitespace-nowrap px-4 py-2.5 hover:bg-[#CC2171] text-sm sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
            >
              Committee Recruitment Results
            </Button>

              <Link
                href="#roles"
                className="inline-flex h-12 items-center justify-center rounded-full border border-charcoal/[0.12] bg-white/60 px-7 text-sm font-semibold text-charcoal shadow-[0_6px_20px_rgba(60,30,55,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal/20 hover:shadow-[0_10px_25px_rgba(60,30,55,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hult-pink"
              >
                Explore roles
              </Link>
            </div>
          </Reveal>

          {/* ======================================================== */}
          {/* METADATA                                                 */}
          {/* ======================================================== */}

          <Reveal delay={0.5} duration={0.7} y={18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[13px] text-[#302B35]">

              <span className="flex items-center gap-2.5">

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-[#8E8E96] shadow-[0_5px_14px_rgba(40,30,45,0.14)]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-[17px] w-[17px] text-white"
                  >
                    <path d="m3 9 9-5 9 5-9 5-9-5Z" />
                    <path d="M6 11.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.8" />
                  </svg>
                </span>

                <span className="font-semibold tracking-[-0.01em]">
                  University of Calcutta
                </span>
              </span>

              <span className="hidden h-5 w-px bg-charcoal/15 sm:block" />

              <span className="flex items-center gap-2.5">

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-[#8E8E96] shadow-[0_5px_14px_rgba(40,30,45,0.14)]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-[17px] w-[17px] text-white"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M3.5 19c.5-3 2.5-5 5.5-5s5 2 5.5 5" />
                    <path d="M14.5 14.5c2.7.1 4.6 1.6 5 4.5" />
                  </svg>

                </span>

                <span className="font-semibold tracking-[-0.01em]">
                  2026–27 Core Committee
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LOWER LEFT EDITORIAL LABEL                                  */}
      {/* ============================================================ */}

      <Reveal
        delay={0.65}
        duration={0.7}
        y={16}
        className="pointer-events-none absolute bottom-[8.5%] left-[9%] z-20 hidden lg:block"
      >
        <div className="pointer-events-none">
          <div className="flex items-start gap-4">
            {/* Accent */}
            <span className="mt-[5px] h-[2px] w-12 bg-[#E6007E]" />

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#5B3154]">
                PEOPLE WITH PURPOSE
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ============================================================ */}
      {/* LOWER RIGHT EDITORIAL LABEL                                */}
      {/* ============================================================ */}

      <Reveal
        delay={0.72}
        duration={0.7}
        y={16}
        className="pointer-events-none absolute bottom-[8.5%] right-[8%] z-20 hidden lg:block"
      >
        <div className="pointer-events-none">
          <div className="flex items-start gap-4 text-right">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#5B3154]">
                SOLUTIONS FOR A BRIGHTER TOMORROW
              </p>
            </div>

            <span className="mt-1.5 h-px w-11 bg-white/70" />
          </div>
        </div>
      </Reveal>

      {/* ============================================================ */}
      {/* CENTER BOTTOM ACCENT                                       */}
      {/* ============================================================ */}

      <Reveal
        delay={0.78}
        duration={0.65}
        y={12}
        className="pointer-events-none absolute bottom-[5%] left-1/2 -translate-x-1/2"
      >
        <div className="pointer-events-none">
          <div className="h-1 w-8 rounded-full bg-hult-pink shadow-[0_0_14px_rgba(230,0,126,0.30)]" />
        </div>
      </Reveal>
    </section>
  );
}
