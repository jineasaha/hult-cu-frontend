"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="about"
      className="relative isolate h-[100svh] min-h-[100svh] overflow-hidden bg-[#3a1024] text-white"
    >
      {/* =========================================================
          BASE GRADIENT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 78% 42%,
              rgba(230, 0, 126, 0.30) 0%,
              rgba(157, 29, 92, 0.18) 22%,
              rgba(58, 16, 36, 0) 52%
            ),
            radial-gradient(
              circle at 95% 85%,
              rgba(255, 179, 209, 0.22) 0%,
              rgba(255, 179, 209, 0.05) 25%,
              transparent 52%
            ),
            linear-gradient(
              118deg,
              #351020 0%,
              #4a142d 34%,
              #63183d 63%,
              #32101f 100%
            )
          `,
        }}
      />

      {/* =========================================================
          SOFT AMBIENT LIGHT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 h-[620px] w-[620px] rounded-full bg-[#ffb3d1]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[42%] top-[10%] h-[360px] w-[500px] rounded-full bg-[#e6007e]/10 blur-[120px]"
      />

      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-[0.055] md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "82px 82px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 55%, transparent 100%)",
        }}
      />

      {/* =========================================================
          MOBILE FLUID LIGHT GRAPHIC
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden md:hidden"
      >
        <svg
          className="absolute inset-[-12%] h-[124%] w-[150%]"
          viewBox="0 0 1000 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="mobileFluidSurface"
              x1="70"
              y1="850"
              x2="900"
              y2="70"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e6007e" stopOpacity="0" />
              <stop offset="0.20" stopColor="#e6007e" stopOpacity="0.08" />
              <stop offset="0.38" stopColor="#ff75c2" stopOpacity="0.16" />
              <stop offset="0.50" stopColor="#ffb3d1" stopOpacity="0.28" />
              <stop offset="0.60" stopColor="#e6007e" stopOpacity="0.22" />
              <stop offset="0.78" stopColor="#c2186b" stopOpacity="0.12" />
              <stop offset="1" stopColor="#e6007e" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="mobileFluidHighlight"
              x1="100"
              y1="850"
              x2="900"
              y2="70"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffb3d1" stopOpacity="0" />
              <stop offset="0.38" stopColor="#ffb3d1" stopOpacity="0.05" />
              <stop offset="0.50" stopColor="#ffffff" stopOpacity="0.42" />
              <stop offset="0.57" stopColor="#ffb3d1" stopOpacity="0.18" />
              <stop offset="0.78" stopColor="#e6007e" stopOpacity="0.04" />
              <stop offset="1" stopColor="#e6007e" stopOpacity="0" />
            </linearGradient>

            <filter id="mobileFluidGlow">
              <feGaussianBlur stdDeviation="18" />
            </filter>

            <filter id="mobileFluidSoftGlow">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* MAIN FLUID BODY */}

          <path
            d="
              M -140 900

              C 80 770,
                180 650,
                310 590

              C 455 525,
                545 570,
                650 480

              C 760 385,
                820 235,
                1080 70

              L 1080 300

              C 900 430,
                800 535,
                680 585

              C 555 638,
                470 570,
                355 640

              C 230 716,
                130 820,
                -80 940

              Z
            "
            fill="url(#mobileFluidSurface)"
          />

          {/* SOFT GLOW ALONG THE FLUID */}

          <path
            d="
              M -80 900

              C 100 765,
                210 650,
                325 595

              C 455 532,
                550 570,
                655 485

              C 765 395,
                835 230,
                1060 70
            "
            stroke="url(#mobileFluidHighlight)"
            strokeWidth="55"
            strokeLinecap="round"
            opacity="0.34"
            filter="url(#mobileFluidGlow)"
          />

          {/* PRIMARY LIGHT RIBBON */}

          <path
            d="
              M -80 900

              C 100 765,
                210 650,
                325 595

              C 455 532,
                550 570,
                655 485

              C 765 395,
                835 230,
                1060 70
            "
            stroke="url(#mobileFluidHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.62"
            filter="url(#mobileFluidSoftGlow)"
          />

          {/* CRISP HIGHLIGHT */}

          <path
            d="
              M -80 900

              C 100 765,
                210 650,
                325 595

              C 455 532,
                550 570,
                655 485

              C 765 395,
                835 230,
                1060 70
            "
            stroke="url(#mobileFluidHighlight)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* SECONDARY THIN CURVE */}

          <path
            d="
              M 40 940
              C 220 790, 310 680, 430 625
              C 550 570, 640 600, 735 510
              C 830 420, 880 285, 1020 145
            "
            stroke="#ffb3d1"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* SECOND MOBILE FLUID RIBBON — intentionally disabled */}

          {/*
          <path
            d="
              M 330 940

              C 390 820,
                440 700,
                535 625

              C 630 550,
                710 555,
                785 465

              C 865 375,
                910 235,
                1080 70

              L 1080 250

              C 950 395,
                880 490,
                795 555

              C 700 650,
                610 635,
                515 705

              C 430 770,
                385 870,
                300 950

              Z
            "
            fill="url(#mobileFluidSurface)"
            opacity="0.72"
          />
          */}
        </svg>

        {/* Soft pink atmosphere */}

        <div
          className="absolute left-[34%] top-[40%] h-[280px] w-[280px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(230,0,126,0.12) 0%, rgba(255,179,209,0.06) 42%, transparent 72%)",
          }}
        />
      </div>

      {/* =========================================================
          DESKTOP / TABLET FLUID LIGHT GRAPHIC
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[72%] overflow-hidden md:block sm:right-[-5%] lg:right-[-2%] lg:w-[67%]"
      >
        {/* Ambient glow */}

        <div
          className="absolute right-[5%] top-[16%] h-[620px] w-[620px] rounded-full blur-[115px]"
          style={{
            background:
              "radial-gradient(circle, rgba(236,0,140,0.28) 0%, rgba(236,0,140,0.10) 42%, transparent 72%)",
          }}
        />

        <div
          className="absolute right-[-5%] bottom-[-2%] h-[560px] w-[760px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,179,209,0.22) 0%, rgba(230,0,126,0.08) 45%, transparent 74%)",
          }}
        />

        <div
          className="absolute right-[24%] top-[29%] h-[330px] w-[330px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,235,243,0.12), rgba(255,179,209,0.06) 42%, transparent 72%)",
          }}
        />

        {/* BACK FLUID */}

        <svg
          className="absolute inset-[-5%] h-[110%] w-[120%]"
          viewBox="0 0 1000 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="staticBackFluid"
              x1="40"
              y1="80"
              x2="930"
              y2="720"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffb3d1" stopOpacity="0" />
              <stop offset="0.25" stopColor="#ffb3d1" stopOpacity="0.05" />
              <stop offset="0.43" stopColor="#ffb3d1" stopOpacity="0.18" />
              <stop offset="0.54" stopColor="#e6007e" stopOpacity="0.30" />
              <stop offset="0.70" stopColor="#9d1d5c" stopOpacity="0.28" />
              <stop stopColor="#3a1024" stopOpacity="0" offset="1" />
            </linearGradient>

            <linearGradient
              id="staticBackHighlight"
              x1="80"
              y1="0"
              x2="900"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" stopOpacity="0" />
              <stop offset="0.42" stopColor="#ffffff" stopOpacity="0.04" />
              <stop offset="0.55" stopColor="#ffb3d1" stopOpacity="0.38" />
              <stop offset="0.62" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="0.76" stopColor="#ffb3d1" stopOpacity="0.03" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="staticBackBlur">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          <path
            d="
              M 90 -90
              C 285 50, 380 170, 525 255
              C 690 350, 810 310, 1070 65
              L 1070 285
              C 855 475, 710 485, 545 400
              C 385 318, 280 205, 55 75
              Z
            "
            fill="url(#staticBackFluid)"
          />

          <path
            d="
              M 70 -30
              C 285 105, 390 220, 540 300
              C 700 385, 820 325, 1055 95
            "
            stroke="url(#staticBackHighlight)"
            strokeWidth="38"
            strokeLinecap="round"
            opacity="0.45"
            filter="url(#staticBackBlur)"
          />

          <path
            d="
              M 80 -25
              C 300 110, 390 225, 540 300
              C 700 382, 825 325, 1055 95
            "
            stroke="url(#staticBackHighlight)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* MAIN SILK */}

        <svg
          className="absolute inset-[-4%] h-[108%] w-[120%]"
          viewBox="0 0 1000 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="silkSurface"
              x1="90"
              y1="790"
              x2="910"
              y2="190"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e6007e" stopOpacity="0" />
              <stop offset="0.20" stopColor="#e6007e" stopOpacity="0.07" />
              <stop offset="0.36" stopColor="#ffb3d1" stopOpacity="0.15" />
              <stop offset="0.47" stopColor="#ffb3d1" stopOpacity="0.42" />
              <stop offset="0.53" stopColor="#fff6fa" stopOpacity="0.68" />
              <stop offset="0.59" stopColor="#ffb3d1" stopOpacity="0.38" />
              <stop offset="0.72" stopColor="#e6007e" stopOpacity="0.17" />
              <stop offset="0.90" stopColor="#e6007e" stopOpacity="0.04" />
              <stop offset="1" stopColor="#e6007e" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="pinkShadowSurface"
              x1="150"
              y1="820"
              x2="850"
              y2="220"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e6007e" stopOpacity="0" />
              <stop offset="0.35" stopColor="#e6007e" stopOpacity="0.10" />
              <stop offset="0.52" stopColor="#c2186b" stopOpacity="0.20" />
              <stop offset="0.70" stopColor="#ffb3d1" stopOpacity="0.08" />
              <stop stopColor="#e6007e" stopOpacity="0" offset="1" />
            </linearGradient>

            <linearGradient
              id="silkHighlight"
              x1="100"
              y1="800"
              x2="920"
              y2="170"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffb3d1" stopOpacity="0" />
              <stop offset="0.40" stopColor="#ffb3d1" stopOpacity="0.10" />
              <stop offset="0.50" stopColor="#ffffff" stopOpacity="0.78" />
              <stop offset="0.57" stopColor="#ffb3d1" stopOpacity="0.34" />
              <stop stopColor="#ffb3d1" stopOpacity="0" offset="1" />
            </linearGradient>

            <filter id="silkGlow">
              <feGaussianBlur stdDeviation="11" />
            </filter>

            <filter id="silkGlowLarge">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>

          <path
            d="
              M -70 850
              C 115 690, 250 490, 405 425
              C 545 366, 660 462, 780 425
              C 880 394, 935 300, 1080 125
              L 1080 390
              C 945 530, 845 590, 735 602
              C 570 620, 505 500, 395 530
              C 260 568, 170 745, 0 920
              Z
            "
            fill="url(#silkSurface)"
          />

          <path
            d="
              M 20 930
              C 185 755, 275 610, 410 550
              C 545 490, 640 575, 760 530
              C 865 490, 920 360, 1040 185
              L 1040 370
              C 935 515, 835 595, 730 600
              C 585 608, 505 525, 405 575
              C 300 628, 230 790, 110 930
              Z
            "
            fill="url(#pinkShadowSurface)"
            opacity="0.75"
          />

          <path
            d="
              M -10 795
              C 170 655, 255 505, 410 438
              C 560 375, 665 485, 795 440
              C 880 410, 945 302, 1060 185
            "
            stroke="url(#silkHighlight)"
            strokeWidth="48"
            strokeLinecap="round"
            opacity="0.50"
            filter="url(#silkGlowLarge)"
          />

          <path
            d="
              M -10 795
              C 170 655, 255 505, 410 438
              C 560 375, 665 485, 795 440
              C 880 410, 945 302, 1060 185
            "
            stroke="url(#silkHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.72"
            filter="url(#silkGlow)"
          />

          <path
            d="
              M -10 795
              C 170 655, 255 505, 410 438
              C 560 375, 665 485, 795 440
              C 880 410, 945 302, 1060 185
            "
            stroke="url(#silkHighlight)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.9"
          />

          <path
            d="
              M 170 900
              C 290 735, 350 615, 475 565
              C 605 512, 700 560, 815 455
              C 900 378, 940 270, 1025 155
            "
            stroke="url(#silkHighlight)"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.20"
            filter="url(#silkGlow)"
          />

          <path
            d="
              M 170 900
              C 290 735, 350 615, 475 565
              C 605 512, 700 560, 815 455
              C 900 378, 940 270, 1025 155
            "
            stroke="#ffb3d1"
            strokeOpacity="0.20"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        {/* FOREGROUND LIGHT RIBBON */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="foregroundLight"
              x1="150"
              y1="800"
              x2="850"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffb3d1" stopOpacity="0" />
              <stop offset="0.37" stopColor="#ffb3d1" stopOpacity="0.04" />
              <stop offset="0.50" stopColor="#ffffff" stopOpacity="0.58" />
              <stop offset="0.58" stopColor="#ffb3d1" stopOpacity="0.18" />
              <stop stopColor="#ffb3d1" stopOpacity="0" offset="1" />
            </linearGradient>

            <filter id="foregroundBlur">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          <path
            d="
              M 55 900
              C 205 720, 290 610, 420 560
              C 560 505, 675 590, 770 515
              C 860 444, 905 300, 1005 115
            "
            stroke="url(#foregroundLight)"
            strokeWidth="15"
            strokeLinecap="round"
            opacity="0.30"
            filter="url(#foregroundBlur)"
          />

          <path
            d="
              M 55 900
              C 205 720, 290 610, 420 560
              C 560 505, 675 590, 770 515
              C 860 444, 905 300, 1005 115
            "
            stroke="url(#foregroundLight)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.80"
          />

          <path
            d="
              M 225 900
              C 335 760, 365 630, 485 570
              C 610 508, 710 552, 815 455
              C 900 375, 935 250, 1015 165
            "
            stroke="#ffffff"
            strokeOpacity="0.11"
            strokeWidth="1"
          />
        </svg>

        {/* Light pool */}

        <div
          className="absolute right-[20%] top-[27%] h-[270px] w-[270px] rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,235,243,0.20) 0%, rgba(255,179,209,0.10) 38%, rgba(230,0,126,0.06) 58%, transparent 75%)",
          }}
        />

        {/* Glowing nodes */}

        <div className="absolute right-[74%] top-[41%]">
          <div className="absolute -inset-3 rounded-full bg-[#e6007e]/25 blur-md" />
          <div className="relative h-2.5 w-2.5 rounded-full bg-[#ffb3d1] shadow-[0_0_18px_5px_rgba(255,179,209,0.48)]" />
        </div>

        <div className="absolute right-[23%] top-[47%]">
          <div className="absolute -inset-4 rounded-full bg-[#e6007e]/25 blur-lg" />
          <div className="relative h-3 w-3 rounded-full bg-[#ffb3d1] shadow-[0_0_22px_6px_rgba(255,179,209,0.35)]" />
        </div>

        <div className="absolute bottom-[21%] right-[34%]">
          <div className="absolute -inset-3 rounded-full bg-[#e6007e]/25 blur-md" />
          <div className="relative h-2 w-2 rounded-full bg-[#e6007e] shadow-[0_0_16px_5px_rgba(230,0,126,0.55)]" />
        </div>

        <div className="absolute right-[11%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#ffb3d1] shadow-[0_0_14px_4px_rgba(255,179,209,0.45)]" />

        {/* Light streak */}

        <div
          className="absolute bottom-[11%] right-[4%] h-[2px] w-[55%] rotate-[-20deg] blur-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,179,209,.10), rgba(255,255,255,.48), rgba(255,179,209,.06), transparent)",
          }}
        />

        {/* Year */}

        <div className="absolute bottom-[8%] right-[12%] text-right">
          <div className="mb-4 ml-auto h-px w-8 bg-[#e6007e]" />

          <p className="font-body text-[11px] font-medium tracking-[0.28em] text-white/65">
            2026 — 27
          </p>
        </div>

        {/* Right-side wordmark */}

        <div className="absolute right-[6%] top-[46%] hidden xl:block">
          <div className="border-l border-[#ffb3d1]/25 pl-5">
            <p className="max-w-[90px] font-body text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.24em] text-white/70">
              Ideas
              <br />
              People
              <br />
              Planet
            </p>

            <div className="mt-4 h-px w-8 bg-gray-light" />
          </div>
        </div>
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-start px-5 pt-[7.5rem] sm:px-8 sm:pt-[8.5rem] lg:items-center lg:px-12 lg:py-20 xl:px-16">
        <div className="w-full max-w-[710px]">
          {/* Heading */}

          <Reveal>
            <h1 className="max-w-[690px] py-2 font-display text-[clamp(2.5rem,10.5vw,5.7rem)] font-bold leading-[0.98] tracking-[-0.055em] sm:py-5 sm:text-[clamp(3.25rem,7vw,5.7rem)] sm:tracking-[-0.065em]">
              <span className="block text-white">Build Your Team</span>

              <span
                className="block bg-linear-to-b from-pink-200 via-pink-300 to-pink-800 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 45px rgba(230,0,126,0.12)",
                }}
              >
                Make Your Mark
              </span>
            </h1>
          </Reveal>

          {/* Description */}

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[570px] font-semibold text-[14px] leading-6 text-light-gray/80 sm:mt-8 sm:text-base sm:leading-8 lg:text-[17px]">
              Everything you need to know to build your team, register for the
              Hult Prize, and take your idea from campus to impact.
            </p>
          </Reveal>

          {/* CTA */}

          <Reveal delay={0.2}>
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <a
                href="/brochure.pdf"
                download
                className="group relative inline-flex min-h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#ffa1f5] via-[#c44499] to-[#73063d] px-7 font-body text-sm font-bold text-white shadow-[0_15px_45px_rgba(230,0,126,0.26)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c2186b] hover:shadow-[0_20px_55px_rgba(230,0,126,0.38)] focus:outline-none focus:ring-2 focus:ring-[#ffb3d1] focus:ring-offset-2 focus:ring-offset-[#3a1024] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Download Event Brochure</span>

                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 16h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#the-challenge"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.035] px-7 font-body text-sm font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb3d1]/50 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ffb3d1]/60 sm:w-auto"
              >
                Explore the Rules
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

          {/* Feature indicators */}

          <Reveal delay={0.3}>
            <div className="mt-9 grid max-w-[620px] grid-cols-1 divide-y divide-white/10 border-t border-white/10 pt-2 sm:mt-11 sm:grid-cols-3 sm:divide-y-0 sm:pt-6">
              {/* Global */}

              <div className="flex min-w-0 flex-1 items-center gap-3 py-3 pr-0 sm:py-0 sm:pr-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e6007e]/60 bg-[#e6007e]/[0.08]">
                  <svg
                    className="h-[18px] w-[18px] text-[#ffb3d1]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />

                    <path
                      d="M3.5 12h17M12 3.5c2.1 2.35 3.15 5.18 3.15 8.5S14.1 18.15 12 20.5c-2.1-2.35-3.15-5.18-3.15-8.5S9.9 5.85 12 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-body text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Global
                  </p>

                  <p className="mt-1 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    Platform
                  </p>
                </div>
              </div>

              {/* Student */}

              <div className="flex min-w-0 flex-1 items-center gap-3 border-l-0 border-white/10 px-0 py-3 sm:border-l sm:px-6 sm:py-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e6007e]/60 bg-[#e6007e]/[0.08]">
                  <svg
                    className="h-[18px] w-[18px] text-[#ffb3d1]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="9"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />

                    <circle
                      cx="16.5"
                      cy="9"
                      r="2.4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />

                    <path
                      d="M3.5 19c.45-3.25 2.3-5 5.5-5s5.05 1.75 5.5 5M14 14.5c3.2-.1 5.2 1.4 6 4.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-body text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Student
                  </p>

                  <p className="mt-1 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    Innovators
                  </p>
                </div>
              </div>

              {/* Impact */}

              <div className="flex min-w-0 flex-1 items-center gap-3 border-l-0 border-white/10 pl-0 py-3 sm:border-l sm:pl-6 sm:py-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e6007e]/60 bg-[#e6007e]/[0.08]">
                  <svg
                    className="h-[18px] w-[18px] text-[#ffb3d1]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 20.5c0-5.7 2.4-10.2 7.5-13.5.1 5.9-2.5 10.8-7.5 13.5ZM12 20.5c0-4.4-1.7-8.1-5.5-10.8-.2 4.9 1.6 8.7 5.5 10.8Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M12 20.5V8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-body text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Real-world
                  </p>

                  <p className="mt-1 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    Impact
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#2b0b1b]/35 to-transparent"
      />
    </section>
  );
}
