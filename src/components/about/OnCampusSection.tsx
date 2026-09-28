import { Reveal } from "../ui/Reveal";

const stages = [
  {
    number: "01",
    title: "Team Formation",
    text: "Students form teams and identify a meaningful problem to solve.",
  },
  {
    number: "02",
    title: "Idea Development",
    text: "Teams develop a business solution aligned with at least one UN SDG.",
  },
  {
    number: "03",
    title: "Mentorship & Preparation",
    text: "Teams receive guidance to strengthen their idea, business model, prototype and pitch.",
  },
  {
    number: "04",
    title: "OnCampus Competition",
    text: "Teams pitch their ventures before a panel of judges comprising experienced professionals, entrepreneurs, academicians and other experts.",
  },
  {
    number: "05",
    title: "Selection & Progression",
    text: "The selected team advances through the subsequent stages of the Hult Prize global competition.",
  },
];

export function OnCampusSection() {
  return (
    <section
      className="relative isolate overflow-hidden pt-20 pb-12 sm:py-24 lg:py-28"
      style={{
        background: `linear-gradient(115deg, #E4F3FB 0%, #EDF7FC 20%, #F8F9FC 42%, #FFF8FB 67%, #F8ECF5 100%)`,
      }}
    >
      {/* ============================================================ */}
      {/* ATMOSPHERIC BACKGROUND                                       */}
      {/* ============================================================ */}

      <div
        className="pointer-events-none absolute -left-[220px] -top-[250px] h-[650px] w-[650px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185,225,243,0.70) 0%, rgba(211,238,249,0.45) 38%, rgba(230,244,250,0.18) 60%, transparent 76%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-[230px] top-[25%] h-[560px] w-[560px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,184,218,0.22) 0%, rgba(248,212,232,0.14) 45%, transparent 74%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255,255,255,0.82) 35%, rgba(255,255,255,0.34) 62%, transparent 78%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-[230px] -top-[180px] h-[680px] w-[680px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,198,224,0.32) 0%, rgba(239,216,235,0.18) 45%, rgba(230,0,126,0.045) 66%, transparent 78%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-[160px] bottom-[-280px] h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(191,228,242,0.34) 0%, rgba(222,241,249,0.18) 48%, transparent 74%)",
        }}
      />

      {/* ============================================================ */}
      {/* BACKGROUND GRAPHICS                                         */}
      {/* ============================================================ */}

      <div className="pointer-events-none absolute -left-[65px] top-[110px] hidden h-[360px] w-[360px] rounded-full border border-[#D58AC1]/[0.13] lg:block" />

      <div className="pointer-events-none absolute -left-[6px] top-[150px] hidden h-[280px] w-[280px] rounded-full border border-[#D58AC1]/[0.10] lg:block" />

      <div className="pointer-events-none absolute left-[80px] top-[215px] hidden h-[145px] w-[145px] rounded-full border border-[#E6007E]/[0.07] lg:block" />

      <div className="pointer-events-none absolute -right-[60px] -top-[100px] hidden h-[390px] w-[390px] rounded-full border border-[#8C4A9B]/[0.20] lg:block" />

      <div className="pointer-events-none absolute -right-[3px] -top-[50px] hidden h-[300px] w-[300px] rounded-full border border-dashed border-[#8C4A9B]/[0.17] lg:block" />

      <div className="pointer-events-none absolute left-[10%] top-[39%] hidden h-4 w-4 rounded-full bg-gradient-to-br from-[#E6007E]/70 to-[#C77BD4]/30 shadow-[0_0_20px_rgba(230,0,126,0.15)] lg:block" />

      <div className="pointer-events-none absolute right-[13%] top-[44%] hidden h-3 w-3 rounded-full bg-[#B86CC4]/30 lg:block" />

      <div className="pointer-events-none absolute right-[7%] top-[52%] hidden h-4 w-4 rounded-full bg-gradient-to-br from-[#E6007E]/45 to-[#A9D9EA]/40 lg:block" />

      {/* ============================================================ */}
      {/* CONTENT                                                      */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* ========================================================== */}
        {/* CENTERED HEADER                                            */}
        {/* ========================================================== */}

        <Reveal delay={0.05} duration={0.7} y={22}>
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px -mt-15 w-10 bg-hult-pink/35 sm:w-12" />

              <p className="text-[13px] font-bold uppercase tracking-[0.32em] text-hult-pink -mt-15 sm:text-[15px]">
                OnCampus
              </p>

              <span className="h-px -mt-15 w-10 bg-hult-pink/35 sm:w-12" />
            </div>

            <h2 className="mt-2 font-display text-[2.5rem] font-bold leading-[0.99] tracking-[-0.06em] sm:mt-2 sm:text-[clamp(3.1rem,6vw,3.5rem)]">
              <span className="bg-gradient-to-r from-[#0F0F0F] via-[#E6007E] to-hult-pink-dark bg-clip-text text-transparent">
                From campus innovation
                <br className="hidden sm:block" />
                to a global stage
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[13px] font-semibold leading-6 text-[#4B4B4B]/65 sm:mt-5 sm:text-[15px] sm:leading-7">
              The Hult Prize OnCampus programme at the University of Calcutta
              provides students with a platform to transform innovative ideas
              into viable, impact-driven ventures.
            </p>

            {/* Since 2020 */}
            <div className="mt-7 flex items-center justify-center gap-4 sm:mt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal font-display text-base font-extrabold text-white shadow-xl sm:h-14 sm:w-14 sm:text-lg">
                20
                <span className="text-hult-pink">20</span>
              </div>

              <div className="text-left">
                <p className="font-display text-base font-bold text-charcoal sm:text-lg">
                  Since 2020
                </p>

                <p className="mt-0.5 text-xs text-gray sm:text-sm">
                  University of Calcutta OnCampus association
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* FIVE ONCAMPUS STAGES                                      */}
        {/* ========================================================== */}

        <Reveal delay={0.22} duration={0.8} y={28}>
          <div className="relative mx-auto mt-8 max-w-[1260px] sm:mt-14 lg:mt-16">
            {/* ======================================================== */}
            {/* FLOWING RESPONSIBILITY RIBBON                            */}
            {/* ======================================================== */}

            <div className="pointer-events-none absolute -top-[12px] left-[1%] right-[1%] hidden h-[155px] lg:block">
              <svg
                viewBox="0 0 1200 220"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="onCampusRibbon"
                    x1="0"
                    y1="0"
                    x2="1200"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0"
                      stopColor="#E6007E"
                      stopOpacity="0.62"
                    />

                    <stop
                      offset="0.28"
                      stopColor="#D53A9A"
                      stopOpacity="0.50"
                    />

                    <stop
                      offset="0.52"
                      stopColor="#8D4B9B"
                      stopOpacity="0.40"
                    />

                    <stop
                      offset="0.74"
                      stopColor="#B9DDEA"
                      stopOpacity="0.52"
                    />

                    <stop
                      offset="1"
                      stopColor="#E6007E"
                      stopOpacity="0.28"
                    />
                  </linearGradient>

                  <filter
                    id="onCampusRibbonBlur"
                    x="-20%"
                    y="-100%"
                    width="140%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                </defs>

                {/* Soft glow */}
                <path
                  d="M 0 94 C 75 94, 82 42, 170 42 C 250 42, 270 138, 350 138 C 430 138, 445 40, 535 40 C 615 40, 630 138, 710 138 C 795 138, 805 42, 895 42 C 975 42, 990 94, 1200 94"
                  stroke="url(#onCampusRibbon)"
                  strokeOpacity="0.16"
                  strokeWidth="15"
                  strokeLinecap="round"
                  filter="url(#onCampusRibbonBlur)"
                />

                {/* Main ribbon */}
                <path
                  d="M 0 94 C 75 94, 82 42, 170 42 C 250 42, 270 138, 350 138 C 430 138, 445 40, 535 40 C 615 40, 630 138, 710 138 C 795 138, 805 42, 895 42 C 975 42, 990 94, 1200 94"
                  stroke="#E8C9E2"
                  strokeOpacity="0.62"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* Gradient highlight */}
                <path
                  d="M 0 94 C 75 94, 82 42, 170 42 C 250 42, 270 138, 350 138 C 430 138, 445 40, 535 40 C 615 40, 630 138, 710 138 C 795 138, 805 42, 895 42 C 975 42, 990 94, 1200 94"
                  stroke="url(#onCampusRibbon)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* White highlight */}
                <path
                  d="M 0 91 C 75 91, 82 39, 170 39 C 250 39, 270 135, 350 135 C 430 135, 445 37, 535 37 C 615 37, 630 135, 710 135 C 795 135, 805 39, 895 39 C 975 39, 990 91, 1200 91"
                  stroke="white"
                  strokeOpacity="0.55"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* ======================================================== */}
            {/* FIVE ONCAMPUS STAGES                                    */}
            {/* ======================================================== */}

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-4">
              {stages.map((stage, index) => {
                const icons = [
                  <svg
                    key="team"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.3" />
                    <path d="M3.5 19c.4-3.5 2.2-5.5 5.5-5.5s5.1 2 5.5 5.5" />
                    <path d="M14.5 14.2c2.5-.3 4.7 1.2 5.3 4.8" />
                  </svg>,

                  <svg
                    key="idea"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M8.5 14.5C7.2 13.5 6.5 12 6.5 10.3A5.5 5.5 0 0 1 12 4.8a5.5 5.5 0 0 1 5.5 5.5c0 1.7-.7 3.2-2 4.2-.9.7-1.5 1.4-1.5 2.5h-5c0-1.1-.6-1.8-1.5-2.5Z" />
                  </svg>,

                  <svg
                    key="mentorship"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="7" r="3" />
                    <path d="M5 20c.5-4.2 2.8-6.5 7-6.5s6.5 2.3 7 6.5" />
                    <path d="M4 5h2M18 5h2M12 2v2" />
                  </svg>,

                  <svg
                    key="competition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    <path d="M7 4h10v4c0 3.4-2.1 5.5-5 5.5S7 11.4 7 8V4Z" />
                    <path d="M7 6H4v1.5C4 10 5.8 12 8.5 12" />
                    <path d="M17 6h3v1.5c0 2.5-1.8 4.5-4.5 4.5" />
                    <path d="M12 13.5V18" />
                    <path d="M8 21h8" />
                    <path d="M9.5 18h5" />
                  </svg>,

                  <svg
                    key="progression"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 sm:h-10 sm:w-10"
                    aria-hidden="true"
                  >
                    <path d="M4 19h16" />
                    <path d="M6 16v-3" />
                    <path d="M10 16V9" />
                    <path d="M14 16v-5" />
                    <path d="M18 16V6" />
                    <path d="m6 8 4-2 4 1 4-3" />
                    <path d="m15.5 4 2.5 0v2.5" />
                  </svg>,
                ];

                return (
                  <div
                    key={stage.number}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* ================================================= */}
                    {/* FLOATING GLASS ORB                               */}
                    {/* ================================================= */}

                    <div className="relative z-20 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/[0.95] bg-white/[0.42] text-hult-pink shadow-[0_14px_40px_rgba(75,49,83,0.10)] backdrop-blur-[26px] backdrop-saturate-[150%] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.045] group-hover:bg-white/[0.58] group-hover:shadow-[0_20px_50px_rgba(230,0,126,0.14)] sm:h-[100px] sm:w-[100px]">
                      <span className="pointer-events-none absolute -inset-3 rounded-full bg-white/[0.20] blur-[15px]" />

                      <span className="absolute inset-[7px] rounded-full border border-white/75 bg-gradient-to-br from-[#FFF0F7]/75 via-white/50 to-[#EAF6FB]/70" />

                      <span className="pointer-events-none absolute left-[18%] top-[12%] h-[22px] w-[43px] rotate-[-20deg] rounded-full bg-white/70 blur-[7px]" />

                      <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                        {icons[index]}
                      </span>
                    </div>

                    {/* Number */}

                    <span className="mt-3 font-mono text-[10px] font-medium tracking-[0.10em] text-[#8793A0]/75 sm:mt-5 sm:text-[11px]">
                      0{index + 1}
                    </span>

                    {/* Pink underline */}

                    <span className="mt-1.5 h-[2px] w-6 rounded-full bg-hult-pink/75 transition-all duration-500 group-hover:w-11 sm:mt-2 sm:w-7" />

                    {/* Stage Title */}

                    <h3 className="mt-2 max-w-[185px] font-display text-[15px] font-bold leading-[1.3] tracking-[-0.025em] text-[#0F0F0F] transition-colors duration-300 group-hover:text-[#861F65] sm:mt-3 sm:text-[18px] sm:leading-[1.38]">
                      {stage.title}
                    </h3>

                    {/* Stage Description */}

                    <p className="mt-2 max-w-[205px] text-[14px] font-semibold leading-[1.55] text-[#4B4B4B]/65 sm:text-[14px] sm:leading-[1.6]">
                      {stage.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* CONTINUING INNOVATION PLATFORM                             */}
        {/* ========================================================== */}

        <Reveal delay={0.42} duration={0.65} y={16}>
          <div className="-mb-12 mx-auto mt-10 max-w-[840px] sm:mt-14">
            <div className="rounded-[22px] border border-hult-pink/15 bg-gradient-to-br from-hult-pink-pale/80 via-white to-white p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-dark">
                A continuing innovation platform
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-gray">
                The University-level event is designed not merely as a one-time
                pitch competition, but as a platform through which students can
                develop their ventures, access mentorship, strengthen their
                business models and connect with the wider entrepreneurship
                ecosystem.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* BACKGROUND MICRO TYPOGRAPHY                               */}
        {/* ========================================================== */}

        <div className="pointer-events-none absolute bottom-[95%] right-[8%] hidden flex-col items-start gap-1 opacity-40 lg:flex">
          <span className="mt-0 h-15 w-px bg-[#0B1F3A]/30" />
        </div>

        <div className="pointer-events-none absolute bottom-[95%] right-[3%] hidden flex-col items-start gap-1 opacity-30 lg:flex">
          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            People
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Ideas
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Action
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Impact
          </span>
        </div>
      </div>
    </section>
  );
}