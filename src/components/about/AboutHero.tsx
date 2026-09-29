"use client";

import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section
      id="about"
      className="relative isolate min-h-[calc(100svh-96px)] overflow-hidden text-[#171522]"
    >
      {/* ============================================================
          BASE ATMOSPHERIC BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 85% 75% at 50% 42%,
              rgba(255, 239, 245, 0.98) 0%,
              rgba(249, 220, 235, 0.94) 27%,
              rgba(220, 207, 241, 0.94) 58%,
              rgba(165, 174, 231, 0.96) 100%
            )
          `,
        }}
      />

      {/* Upper pink atmospheric light */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-12%] h-[650px] w-[950px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,220,236,0.78) 0%, rgba(255,225,239,0.42) 45%, transparent 76%)",
        }}
      />

      {/* Left lavender atmosphere */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18%] top-[10%] h-[650px] w-[650px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(123,143,229,0.46) 0%, rgba(146,158,235,0.22) 48%, transparent 75%)",
        }}
      />

      {/* Right pink atmosphere */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18%] top-[12%] h-[650px] w-[650px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,164,205,0.46) 0%, rgba(235,181,218,0.23) 48%, transparent 76%)",
        }}
      />

      {/* Central soft light */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[105px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,247,249,0.82) 0%, rgba(255,232,241,0.45) 42%, transparent 76%)",
        }}
      />

      {/* ============================================================
          SUBTLE BACKGROUND GRID / TEXTURE
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255,255,255,0.75) 1px,
              transparent 1px
            ),
            linear-gradient(
              rgba(255,255,255,0.75) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "180px 180px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 78%, transparent 100%)",
        }}
      />

      {/* ============================================================
          LARGE ORBITAL CIRCLE
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[2%] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-white/55"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/30"
      />

      {/* ============================================================
          LEFT VERTICAL LIGHT
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7.5%] top-0 h-[62%] w-px bg-gradient-to-b from-white/0 via-white/35 to-white/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7.5%] top-[14%] h-2 w-2 -translate-x-1/2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.85)]"
      />

      {/* ============================================================
          RIGHT VERTICAL LIGHT
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7.5%] top-0 h-[62%] w-px bg-gradient-to-b from-white/0 via-white/35 to-white/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7.5%] top-[20%] h-2 w-2 translate-x-1/2 rounded-full bg-[#E6007E]/70 shadow-[0_0_20px_rgba(230,0,126,0.55)]"
      />

      {/* ============================================================
          FLUID WAVE LIGHT — LARGE BLURRED GLOW
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-100px] left-[-7%] h-[440px] w-[65%] rounded-[50%] blur-[65px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(106,83,190,0.45) 0%, rgba(196,116,202,0.30) 40%, rgba(244,161,202,0.16) 67%, transparent 78%)",
          transform: "rotate(-7deg)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-100px] right-[-7%] h-[440px] w-[65%] rounded-[50%] blur-[65px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(105,88,192,0.42) 0%, rgba(204,112,198,0.30) 40%, rgba(244,158,201,0.18) 67%, transparent 78%)",
          transform: "rotate(7deg)",
        }}
      />

      {/* ============================================================
          MAIN FLUID WAVE SYSTEM
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[57%] overflow-hidden"
      >
        <svg
          className="absolute bottom-[-2%] left-1/2 h-[100%] w-[135%] -translate-x-1/2 min-w-[1250px]"
          viewBox="0 0 1600 620"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* ------------------------------------------------------
                LEFT DEEP PURPLE
            ------------------------------------------------------- */}

            <linearGradient
              id="leftDeep"
              x1="0"
              y1="620"
              x2="680"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#5B4B9B" stopOpacity="0.90" />
              <stop offset="0.30" stopColor="#7463B7" stopOpacity="0.78" />
              <stop offset="0.55" stopColor="#9C75C5" stopOpacity="0.55" />
              <stop offset="0.76" stopColor="#D99BCF" stopOpacity="0.30" />
              <stop offset="1" stopColor="#F4C8DD" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                LEFT PINK
            ------------------------------------------------------- */}

            <linearGradient
              id="leftPink"
              x1="40"
              y1="610"
              x2="720"
              y2="270"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7D58B3" stopOpacity="0.65" />
              <stop offset="0.28" stopColor="#AD65C0" stopOpacity="0.70" />
              <stop offset="0.52" stopColor="#E36BAE" stopOpacity="0.72" />
              <stop offset="0.72" stopColor="#F29DC8" stopOpacity="0.48" />
              <stop offset="1" stopColor="#FFDCE9" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                RIGHT DEEP PURPLE
            ------------------------------------------------------- */}

            <linearGradient
              id="rightDeep"
              x1="1600"
              y1="620"
              x2="920"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#5B4B9B" stopOpacity="0.90" />
              <stop offset="0.30" stopColor="#38011c" stopOpacity="0.78" />
              <stop offset="0.55" stopColor="#991863" stopOpacity="0.54" />
              <stop offset="0.76" stopColor="#ed3a9f" stopOpacity="0.30" />
              <stop offset="1" stopColor="#ffb5e2" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                RIGHT PINK
            ------------------------------------------------------- */}

            <linearGradient
              id="rightPink"
              x1="1560"
              y1="610"
              x2="880"
              y2="270"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7957B2" stopOpacity="0.65" />
              <stop offset="0.28" stopColor="#AA63BF" stopOpacity="0.70" />
              <stop offset="0.52" stopColor="#E269AE" stopOpacity="0.72" />
              <stop offset="0.72" stopColor="#F19DC9" stopOpacity="0.48" />
              <stop offset="1" stopColor="#FFDCE9" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                WHITE / PEARLESCENT RIDGE
            ------------------------------------------------------- */}

            <linearGradient
              id="pearlRidge"
              x1="0"
              y1="500"
              x2="1600"
              y2="350"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="0.18" stopColor="#FFFFFF" stopOpacity="0.66" />
              <stop offset="0.33" stopColor="#FFDCEB" stopOpacity="0.78" />
              <stop offset="0.47" stopColor="#FFFFFF" stopOpacity="0.88" />
              <stop offset="0.62" stopColor="#FFE4EF" stopOpacity="0.72" />
              <stop offset="0.80" stopColor="#FFFFFF" stopOpacity="0.58" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                BRIGHT MAGENTA RIDGE
            ------------------------------------------------------- */}

            <linearGradient
              id="pinkRidge"
              x1="0"
              y1="540"
              x2="1600"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#D60086" stopOpacity="0" />
              <stop offset="0.20" stopColor="#a71c6f" stopOpacity="0.65" />
              <stop offset="0.36" stopColor="#FF8BC6" stopOpacity="0.50" />
              <stop offset="0.52" stopColor="#8c0951" stopOpacity="0.72" />
              <stop offset="0.70" stopColor="#FF8BC6" stopOpacity="0.45" />
              <stop offset="0.84" stopColor="#951b60" stopOpacity="0.65" />
              <stop offset="1" stopColor="#D60086" stopOpacity="0" />
            </linearGradient>

            {/* ------------------------------------------------------
                SOFT WHITE WAVE
            ------------------------------------------------------- */}

            <linearGradient
              id="softWave"
              x1="0"
              y1="500"
              x2="1600"
              y2="380"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.05" />
              <stop offset="0.20" stopColor="#FFFFFF" stopOpacity="0.26" />
              <stop offset="0.40" stopColor="#FFFFFF" stopOpacity="0.12" />
              <stop offset="0.50" stopColor="#FFFFFF" stopOpacity="0.34" />
              <stop offset="0.68" stopColor="#FFFFFF" stopOpacity="0.12" />
              <stop offset="0.84" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.04" />
            </linearGradient>

            {/* ------------------------------------------------------
                WAVE GLOW FILTER
            ------------------------------------------------------- */}

            <filter id="waveGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="18" />
            </filter>

            <filter id="smallGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* ========================================================
              LEFT LOWER MASS
          ========================================================= */}

          <path
            d="
              M 0 620
              L 0 455
              C 95 410 145 335 250 315
              C 355 295 390 370 475 380
              C 545 389 575 345 660 292
              C 700 266 735 255 790 250
              L 790 620
              Z
            "
            fill="url(#leftDeep)"
          />

          {/* Left upper pink fold */}

          <path
            d="
              M 0 620
              L 0 500
              C 110 448 155 365 270 344
              C 382 323 420 399 500 408
              C 580 417 620 354 700 306
              C 735 285 770 274 810 268
              C 755 330 700 398 625 425
              C 540 456 465 430 380 407
              C 270 377 185 452 90 525
              Z
            "
            fill="url(#leftPink)"
          />

          {/* ========================================================
              RIGHT LOWER MASS
          ========================================================= */}

          <path
            d="
              M 1600 620
              L 1600 455
              C 1505 410 1455 335 1350 315
              C 1245 295 1210 370 1125 380
              C 1055 389 1025 345 940 292
              C 900 266 865 255 810 250
              L 810 620
              Z
            "
            fill="url(#rightDeep)"
          />

          {/* Right upper pink fold */}

          <path
            d="
              M 1600 620
              L 1600 500
              C 1490 448 1445 365 1330 344
              C 1218 323 1180 399 1100 408
              C 1020 417 980 354 900 306
              C 865 285 830 274 790 268
              C 845 330 900 398 975 425
              C 1060 456 1135 430 1220 407
              C 1330 377 1415 452 1510 525
              Z
            "
            fill="url(#rightPink)"
          />

          {/* ========================================================
              MAGENTA INNER RIDGE
          ========================================================= */}

          <path
            d="
              M -20 535
              C 120 455 205 380 315 374
              C 440 367 510 458 620 470
              C 700 479 752 465 800 442
              C 848 465 900 479 980 470
              C 1090 458 1160 367 1285 374
              C 1395 380 1480 455 1620 535
            "
            stroke="url(#pinkRidge)"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.56"
            filter="url(#smallGlow)"
          />

          <path
            d="
              M -20 535
              C 120 455 205 380 315 374
              C 440 367 510 458 620 470
              C 700 479 752 465 800 442
              C 848 465 900 479 980 470
              C 1090 458 1160 367 1285 374
              C 1395 380 1480 455 1620 535
            "
            stroke="url(#pinkRidge)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.78"
          />

          {/* ========================================================
              LOWEST SOFT WAVES
          ========================================================= */}

          <path
            d="
              M -20 595
              C 180 520 280 520 390 550
              C 520 585 610 615 800 600
              C 990 615 1080 585 1210 550
              C 1320 520 1420 520 1620 595
            "
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="mt-6 relative z-20 mx-auto flex min-h-[calc(100svh)] max-w-[1250px] items-center justify-center px-6 pb-12 pt-14 sm:px-8 lg:px-12">
        <Reveal className="flex w-full max-w-[850px] flex-col items-center text-center">
          {/* EYEBROW */}

          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-9 rounded-full bg-[#E6007E]/70" />

            <span className="font-body text-[8px] font-bold uppercase tracking-[0.32em] text-[#30283A]/70 sm:text-[9px]">
              HULT PRIZE · UNIVERSITY OF CALCUTTA
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#E6007E]/70" />
          </div>

          {/* HEADING */}

          <h1 className="font-display text-[clamp(3.4rem,7.5vw,6rem)] font-semibold leading-[1] tracking-[-0.065em] text-[#171522]">
            <span className="block">Ideas that</span>

            <span
              className="mt-2 block bg-gradient-to-r from-hult-pink-base via-[#952a5f] to-[#7b1046] bg-clip-text text-transparent"
              style={{
                textShadow: "0 8px 35px rgba(230,0,126,0.08)",
              }}
            >
              create impact.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-10 max-w-[690px] font-bold text-[13px] leading-6 text-[#393344]/70 sm:text-[14px] sm:leading-7 lg:text-[15px]">
            The Hult Prize is a global student entrepreneurship programme
            challenging young innovators to build for-profit startups that
            create measurable social and environmental impact.
          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
            {/* PRIMARY */}

            <a
              href="/brochure/official-brochure.pdf"
              download
              className="group relative inline-flex h-[52px] min-w-[245px] items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#fb78b9] via-[#d90581] to-[#790d43] px-7 font-body text-[13px] font-bold text-white shadow-[0_14px_35px_rgba(230,0,126,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D80075] hover:shadow-[0_18px_42px_rgba(230,0,126,0.34)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Download Event Brochure</span>

              <svg className="relative h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 16h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* SECONDARY */}

            <a
              href="#the-challenge"
              className="group inline-flex h-[52px] min-w-[220px] items-center justify-center gap-3 rounded-full border border-[#5B5267]/20 bg-light-gray/50 px-7 font-body text-[13px] font-semibold text-[#282332]/80 shadow-[0_8px_25px_rgba(76,57,95,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E6007E]/30 hover:bg-white/45 hover:text-[#171522]"
            >
              Explore the Programme
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10h11m0 0-4-4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOREGROUND BOTTOM HAZE
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-24"
        style={{
          background:
            "linear-gradient(to top, rgba(171,174,225,0.18), transparent)",
        }}
      />
    </section>
  );
}
