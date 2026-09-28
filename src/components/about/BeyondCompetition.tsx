const developmentAreas = [
  "Business-model development",
  "Prototype development and refinement",
  "Market validation and customer discovery",
  "Intellectual-property awareness",
  "Pitch development",
  "Entrepreneurship and startup strategy",
  "Mentorship and professional networking",
];

export function BeyondCompetition() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
      style={{
        background:
          "linear-gradient(118deg, #2a0717 2%, #460a25 24%, #6b0f3a 48%, #8a486f 68%, #5f0d27 100%)",
      }}
    >
      {/* ============================================================ */}
      {/* BACKGROUND ATMOSPHERE                                        */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="about-pulse pointer-events-none absolute -left-[260px] -top-[180px] h-[650px] w-[650px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,0,126,0.30) 0%, rgba(230,0,126,0.14) 35%, rgba(115,20,65,0.05) 62%, transparent 76%)",
        }}
      />

      <div
        aria-hidden="true"
        className="about-float pointer-events-none absolute left-[28%] -top-[260px] h-[620px] w-[620px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,0,126,0.22) 0%, rgba(210,39,124,0.12) 42%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="about-pulse pointer-events-none absolute right-[-260px] top-[2%] h-[720px] w-[720px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,93,166,0.30) 0%, rgba(230,0,126,0.17) 38%, rgba(97,16,48,0.10) 60%, transparent 76%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] bottom-[-280px] h-[620px] w-[620px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,0,126,0.20) 0%, rgba(174,27,96,0.13) 40%, transparent 73%)",
        }}
      />

      {/* Central subtle light bloom */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[34%] h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.045) 0%, transparent 70%)",
        }}
      />

    


      {/* ============================================================ */}
      {/* CONTENT                                                      */}
      {/* ============================================================ */}

      <div className="-mb-10 relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-15 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-18">
          {/* ======================================================== */}
          {/* LEFT — BEYOND THE PITCH                                 */}
          {/* ======================================================== */}

          <div className="about-fade-up-delay-1 relative">
            <div
              className="group relative overflow-hidden rounded-[32px] border border-white/60 p-6 shadow-[0_35px_100px_rgba(15,35,48,0.24)] backdrop-blur-[32px] backdrop-saturate-[155%] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_40px_110px_rgba(15,35,48,0.30)] sm:p-8 lg:p-9"
              style={{
                background:
                  "linear-gradient(135deg, rgba(225,243,250,0.78) 0%, rgba(207,232,242,0.63) 35%, rgba(239,248,251,0.72) 68%, rgba(194,224,237,0.56) 100%)",
              }}
            >
              {/* Frosted card glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/55 blur-[70px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#9BD5EA]/30 blur-[70px]"
              />

              {/* Fine glass highlight */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/80"
              />

              <div className="relative">
                {/* Card header */}

                <div className="flex items-start justify-between gap-4 border-b border-[#477A91]/15 pb-6">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-navy">
                      Venture development
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.035em] bg-gradient-to-l from-pink-800 via-black-700 to-red-900 bg-clip-text text-transparent sm:text-[28px]">
                      Beyond the pitch
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-full border border-[#477A91]/20 bg-white/45 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#477A91] shadow-sm backdrop-blur-md">
                    07 Areas
                  </span>
                </div>

                {/* Development areas */}

                <div className="mt-6 space-y-2.5">
                  {developmentAreas.map((area, index) => (
                    <div
                      key={area}
                      className={`about-fade-up-delay-${Math.min(
                        index + 1,
                        4
                      )} group/row relative flex items-center gap-4 overflow-hidden rounded-[16px] border border-white/65 bg-white/[0.42] px-4 py-3.5 shadow-[0_7px_22px_rgba(45,75,90,0.055)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/90 hover:bg-white/[0.62] hover:shadow-[0_12px_30px_rgba(45,75,90,0.10)] sm:px-5 sm:py-4`}
                    >
                      {/* Moving highlight */}

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-[70%] w-[42%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-all duration-700 group-hover/row:left-[125%]"
                      />

                      {/* Number */}

                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#477A91]/15 bg-white/55 font-display text-[10px] font-bold text-[#477A91] shadow-sm backdrop-blur-md transition-all duration-300 group-hover/row:border-[#477A91]/30 group-hover/row:bg-white/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Text */}

                      <span className="relative text-[13px] font-semibold leading-5 text-[#203E49] sm:text-sm">
                        {area}
                      </span>

                      {/* Arrow */}

                      <span className="relative ml-auto shrink-0 text-sm text-[#477A91]/35 transition-all duration-300 group-hover/row:translate-x-1 group-hover/row:text-[#477A91]">
                        →
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom label */}

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#477A91]/30" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#477A91]/95">
                    Develop · Validate · Refine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE                                                */}
          {/* ======================================================== */}

          <div className="-mt-10 relative">
            {/* Section label */}

            <div className="about-fade-up flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-[13px]">
              <span className="h-px w-8 bg-[#F6B3D3]/70" />

              <span>Beyond the Competition</span>
            </div>

            {/* Main heading */}

            <h2 className="about-fade-up-delay-1 mt-6 font-display text-[clamp(2.8rem,5.4vw,4.4rem)] font-bold leading-[1.1] tracking-[-0.065em] text-white">
              Build beyond
              <span className="block bg-linear-to-br
                from-pink-200
                via-pink-300
                to-pink-800
                bg-clip-text
                text-transparent">
                the competition
              </span>
            </h2>

            {/* Accent */}

            <div className="about-fade-up-delay-2 mt-6 flex items-center gap-3">
              <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-white to-[#F8B0D2]" />

              <span className="h-px w-20 bg-white/20" />
            </div>

            {/* Description */}

            <p className="about-fade-up-delay-2 mt-7 max-w-[650px] text-[15px] leading-7 text-white/72 sm:text-[17px] sm:leading-8">
              Participating teams can receive guidance in areas that are
              important for taking an idea from an early concept towards a more
              mature venture.
            </p>

            {/* ====================================================== */}
            {/* INVESTOR CARD                                          */}
            {/* ====================================================== */}

            <div className="about-fade-up-delay-3 mt-8">
              <div
                className="group relative overflow-hidden rounded-[24px] border border-white/45 p-6 shadow-[0_25px_70px_rgba(45,5,27,0.18)] backdrop-blur-[30px] backdrop-saturate-[150%] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_85px_rgba(45,5,27,0.24)] sm:p-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234, 192, 227, 0.71) 0%, rgba(219, 168, 198, 0.83) 55%, rgba(208, 188, 197, 0.73) 100%)",
                }}
              >
                {/* Inner glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-[#F8B9D7]/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/40 bg-white/25 text-maroon shadow-inner backdrop-blur-md transition-all duration-300 group-hover:bg-white/35">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 3v18" />
                      <path d="M7 7h10" />
                      <path d="M7 17h10" />
                      <path d="M7 7 4 12h6L7 7Z" />
                      <path d="m17 7-3 5h6l-3-5Z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-extrabold tracking-[-0.025em] text-maroon sm:text-xl">
                      Connecting innovators with investors
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-navy/67">
                      Entrepreneurs, industry professionals and potential
                      investors can create opportunities for promising ventures
                      to receive further attention beyond the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* IPR CARD                                                */}
            {/* ====================================================== */}

            <div className="about-fade-up-delay-4 mt-5">
              <div
                className="group relative overflow-hidden rounded-[24px] border border-white/75 p-6 shadow-[0_25px_70px_rgba(38,77,96,0.20)] backdrop-blur-[30px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_85px_rgba(38,77,96,0.27)] sm:p-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192,230,244,0.95) 0%, rgba(222,242,249,0.93) 30%, rgba(250,253,254,0.97) 68%, rgba(255,255,255,0.94) 100%)",
                }}
              >
                {/* Blue glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#8CCFEA]/35 blur-[65px] transition-transform duration-700 group-hover:scale-125"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-white/75 blur-[60px]"
                />

                {/* Fine highlight */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[15px] font-extrabold uppercase tracking-[0.15em] text-navy/85">
                      Intellectual Property & Legal Readiness
                    </p>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#39738F]/15 bg-white/60 text-[#39738F] shadow-sm backdrop-blur-md">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 3 4 7v5c0 4.7 3.3 7.8 8 9 4.7-1.2 8-4.3 8-9V7l-8-4Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                  </div>

                  <p className="mt-4 max-w-[650px] text-2sm font-semibold leading-7 text-[#34515F]/75">
                    Teams intending to pursue investment or commercialisation
                    should appropriately address intellectual-property
                    ownership, patents, confidentiality and other relevant
                    legal protections before entering investment or commercial
                    discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* DISCLAIMER                                             */}
            {/* ====================================================== */}

            <div className="about-fade-up-delay-4 mt-6 flex gap-3">
              <span className="mt-1 h-8 w-px shrink-0 bg-white/25" />

              <p className="text-[11px] leading-5 font-semibold text-white/65 sm:text-xs">
                The Hult Prize competition does not itself guarantee investment
                from individual judges or investors. Any investment opportunity
                is separate from the competition and subject to independent
                evaluation, due diligence and agreement between the relevant
                parties.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}