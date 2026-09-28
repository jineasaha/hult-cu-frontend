import { Reveal } from "../ui/Reveal";

const criteria = [
  {
    number: "01",
    title: "TEAM",
    question: "Can the team execute its vision?",
    accent: "pink",
    accentGradient:
      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(255, 245, 249, 0.94) 52%, rgba(254, 233, 241, 0.9) 100%)",
    accentColor: "#E6007E",
    points: [
      "Team commitment",
      "Complementary skills",
      "Clear roles and responsibilities",
      "Collaboration and leadership",
      "Ability to work effectively together",
    ],
  },
  {
    number: "02",
    title: "IDEA",
    question:
      "Does the solution address a genuine and well-understood problem?",
    accent: "purple",
    accentGradient:
      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(248,241,252,0.94) 52%, rgba(239,227,247,0.90) 100%)",
    accentColor: "#6A1B9A",
    points: [
      "Understanding of the problem",
      "Relevance of the proposed solution",
      "Innovation",
      "Practicality",
      "Quality and clarity of the concept",
    ],
  },
  {
    number: "03",
    title: "IMPACT",
    question: "Can the venture create meaningful and measurable impact?",
    accent: "teal",
    accentGradient:
      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(239,251,249,0.94) 52%, rgba(225,246,243,0.90) 100%)",
    accentColor: "#00A896",
    points: [
      "Alignment with at least one UN SDG",
      "Significance of the problem addressed",
      "Potential social or environmental impact",
      "Measurable impact indicators",
      "Contribution toward the SDG agenda",
    ],
  },
  {
    number: "04",
    title: "BUSINESS VIABILITY",
    question: "Can the idea become a sustainable business?",
    accent: "gold",
    accentGradient:
      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(255,250,237,0.94) 52%, rgba(255,244,214,0.90) 100%)",
    accentColor: "#F4B400",
    points: [
      "Business model",
      "Revenue potential",
      "Market opportunity",
      "Customer need",
      "Financial and operational sustainability",
      "Potential for growth",
    ],
  },
];

const progression = [
  {
    number: "01",
    title: "Product–Market Fit",
    question: "Does the solution demonstrably address a real market need?",
  },
  {
    number: "02",
    title: "Go-to-Market Strategy",
    question:
      "Does the team have a credible plan to reach and acquire customers?",
  },
  {
    number: "03",
    title: "Traction",
    question:
      "Is there evidence that the venture is gaining users, customers, partnerships or other meaningful validation?",
  },
  {
    number: "04",
    title: "Scaling",
    question: "Can the business model and impact be expanded sustainably?",
  },
];

export function EvaluationCriteria() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(115deg, #E4F3FB 0%, #EDF7FC 20%, #F9FAFC 43%, #FFF8FB 68%, #F8ECF5 100%)",
      }}
    >
      {/* ATMOSPHERIC BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[230px] -top-[240px] h-[620px] w-[620px] rounded-full blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185,225,243,0.68) 0%, rgba(211,238,249,0.42) 40%, rgba(230,244,250,0.16) 62%, transparent 76%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[240px] top-[42%] h-[520px] w-[520px] rounded-full blur-[115px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,184,218,0.18) 0%, rgba(248,212,232,0.12) 45%, transparent 74%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-170px] h-[560px] w-[1050px] -translate-x-1/2 rounded-full blur-[105px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.78) 36%, rgba(255,255,255,0.28) 64%, transparent 78%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[240px] -top-[150px] h-[650px] w-[650px] rounded-full blur-[115px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,198,224,0.30) 0%, rgba(239,216,235,0.16) 45%, rgba(230,0,126,0.04) 66%, transparent 78%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] bottom-[-250px] h-[570px] w-[570px] rounded-full blur-[115px]"
        style={{
          background:
            "radial-gradient(circle, rgba(191,228,242,0.30) 0%, rgba(222,241,249,0.16) 48%, transparent 74%)",
        }}
      />

      {/* SUBTLE BACKGROUND GRAPHICS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[75px] top-[120px] hidden h-[350px] w-[350px] rounded-full border border-[#D58AC1]/[0.12] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12px] top-[165px] hidden h-[270px] w-[270px] rounded-full border border-[#D58AC1]/[0.09] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[90px] top-[230px] hidden h-[135px] w-[135px] rounded-full border border-[#E6007E]/[0.06] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[65px] top-[-90px] hidden h-[380px] w-[380px] rounded-full border border-[#8C4A9B]/[0.17] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[5px] top-[-40px] hidden h-[290px] w-[290px] rounded-full border border-dashed border-[#8C4A9B]/[0.14] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[9%] top-[48%] hidden h-3 w-3 rounded-full bg-gradient-to-br from-[#E6007E]/60 to-[#C77BD4]/25 shadow-[0_0_18px_rgba(230,0,126,0.12)] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[47%] hidden h-3 w-3 rounded-full bg-[#B86CC4]/25 lg:block"
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* HEADER */}

        <Reveal delay={0.05} duration={0.7} y={22}>
          <div className="-mt-10 mx-auto max-w-[900px] text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-hult-pink/35 sm:w-12" />

              <p className="text-[14px] font-bold uppercase tracking-[0.30em] text-hult-pink sm:text-[16px]">
                Evaluation Criteria
              </p>

              <span className="h-px w-10 bg-hult-pink/35 sm:w-12" />
            </div>

            <h2 className="mt-5 font-display text-[2rem] font-bold leading-[0.99] tracking-[-0.06em] text-charcoal sm:text-[clamp(3.1rem,6vw,3.8rem)]">
              What makes a venture <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-hult-pink-dark via-hult-pink to-hult-pink-wine bg-clip-text text-transparent">
                competition-ready?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[16px] font-semibold leading-7 text-[#4B4B4B]/65 sm:mt-6 sm:text-[17px]">
              Hult Prize uses a progressive evaluation framework. As a venture
              moves through the competition, the emphasis increases from the
              strength of the team and idea toward validation, market execution,
              traction and scalability.
            </p>
          </div>
        </Reveal>

        {/* FOUR CORE CRITERIA */}

        <Reveal delay={0.18} duration={0.8} y={28}>
          <div className="mx-auto mt-10 max-w-[1150px] sm:mt-14">
            <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
              {criteria.map((criterion) => (
                <article
                  key={criterion.number}
                  className="group relative overflow-hidden rounded-[22px] border border-white/80 bg-white/[0.42] p-5 shadow-[0_18px_50px_rgba(50,65,90,0.07)] backdrop-blur-[24px] backdrop-saturate-[155%] transition-all duration-500 hover:-translate-y-1.5 hover:border-white hover:shadow-[0_25px_65px_rgba(50,65,90,0.11)] sm:p-6"
                  style={
                    {
                      "--accent": criterion.accentColor,
                      "--hover-gradient": criterion.accentGradient,
                      background: criterion.accentGradient,
                    } as React.CSSProperties
                  }
                >
                  {/* Static accent wash */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: criterion.accentGradient }}
                  />

                  {/* Frosted glass highlight */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-20%] top-[-45%] h-[230px] w-[65%] rotate-[-12deg] rounded-full bg-white/55 blur-[35px] transition-all duration-700 group-hover:translate-x-[20%]"
                  />

                  {/* Accent line */}

                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[3px] w-full opacity-80"
                    style={{ background: criterion.accentColor }}
                  />

                  <div className="relative z-10">
                    {/* Top row */}

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/80 bg-white/65 font-mono text-[11px] font-bold tracking-[0.08em] shadow-[0_5px_18px_rgba(30,40,60,0.06)]"
                          style={{ color: criterion.accentColor }}
                        >
                          {criterion.number}
                        </span>

                        <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-black/70">
                          Core criterion
                        </span>
                      </div>

                      {/* Decorative accent dot */}

                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full opacity-70 transition-transform duration-500 group-hover:scale-125"
                        style={{
                          backgroundColor: criterion.accentColor,
                          boxShadow: `0 0 18px ${criterion.accentColor}35`,
                        }}
                      />
                    </div>

                    {/* Title */}

                    <h3 className="mt-5 font-display text-[22px] font-extrabold tracking-[-0.035em] text-charcoal transition-colors duration-300 sm:text-[24px]">
                      {criterion.title}
                    </h3>

                    {/* Question */}

                    <p className="mt-2 max-w-[590px] text-[14px] font-semibold leading-6 text-[#4B4B4B]/72 sm:text-[15px] sm:leading-6">
                      {criterion.question}
                    </p>

                    {/* Evaluation points */}

                    <div className="mt-5 border-t border-charcoal/[0.07] pt-4">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8793A0]">
                        What judges look for
                      </p>

                      <ul className="space-y-2.5">
                        {criterion.points.map((point) => (
                          <li
                            key={point}
                            className="group/item flex items-center gap-3 text-[15px] font-semibold leading-5 text-[#3F4650] sm:text-[15.5px]"
                          >
                            <span
                              className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-white/70 transition-all duration-300 group-hover/item:scale-105"
                              style={{
                                borderColor: `${criterion.accentColor}30`,
                              }}
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: criterion.accentColor,
                                }}
                              />

                              <span
                                className="absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                                style={{
                                  backgroundColor: `${criterion.accentColor}10`,
                                }}
                              />
                            </span>

                            <span className="transition-colors duration-300 group-hover/item:text-charcoal">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* PROGRESSION + GLOBAL FINALS */}

        <Reveal delay={0.35} duration={0.75} y={24}>
          <div className="mx-auto mt-8 max-w-[1180px] sm:mt-10">
            <div className="grid gap-5 lg:grid-cols-[1.55fr_0.9fr] lg:gap-6">
              {/* VENTURE PROGRESSION */}

              <div className="group relative overflow-hidden rounded-[22px] border border-white/80 bg-white/[0.48] shadow-[0_18px_50px_rgba(50,65,90,0.07)] backdrop-blur-[24px] backdrop-saturate-[155%] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(50,65,90,0.10)]">
                {/* Subtle hover gradient */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(239,248,253,0.88) 55%, rgba(246,239,249,0.82) 100%)",
                  }}
                />

                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-hult-pink/50" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-hult-pink-dark">
                      As the venture progresses
                    </p>
                  </div>

                  <h3 className="mt-3 font-display text-[21px] font-extrabold tracking-[-0.035em] text-charcoal sm:text-[23px]">
                    From validation to scale
                  </h3>

                  <div className="mt-5 overflow-hidden rounded-[16px] border border-white/80 bg-white/45">
                    {progression.map((item, index) => (
                      <div
                        key={item.title}
                        className={`group/row grid gap-3 px-4 py-3.5 transition-colors duration-300 hover:bg-white/60 sm:grid-cols-[0.8fr_1.6fr] sm:gap-6 sm:px-5 ${index !== progression.length - 1 ? "border-b border-charcoal/[0.06]" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-hult-pink/70">
                            {item.number}
                          </span>

                          <span className="font-display text-[13px] font-bold leading-5 text-charcoal sm:text-[14px]">
                            {item.title}
                          </span>
                        </div>

                        <div className="text-[13px] font-semibold leading-5 text-[#4B4B4B]/70 sm:text-[13.5px]">
                          {item.question}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* GLOBAL FINALS */}

              <div className="group relative overflow-hidden rounded-[22px] border border-white/20 bg-gradient-to-bl from-[#0f172a] via-[#1e1a78]/90 to-[#0f172a] px-5 py-6 text-white shadow-[0_20px_55px_rgba(11,31,58,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(11,31,58,0.20)] sm:px-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-hult-pink-light/60" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-hult-pink-light">
                      Global Finals
                    </p>
                  </div>

                  <h3 className="mt-4 font-display text-[24px] font-extrabold tracking-[-0.035em] text-white sm:text-[26px]">
                    Where ventures go global.
                  </h3>

                  <p className="mt-4 text-[13.5px] font-medium leading-6 text-white/65 sm:text-[14px]">
                    At the Global Finals, the evaluation considers a more
                    developed venture and places greater emphasis on factors
                    including team strength, validated idea, impact, business
                    viability and scalability.
                  </p>

                  <div className="mt-4 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Team strength",
                        "Validated idea",
                        "Impact",
                        "Business viability",
                        "Scalability",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[13px] font-semibold tracking-[0.02em] text-white/75 backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* BACKGROUND MICRO TYPOGRAPHY */}

        <div className="pointer-events-none absolute bottom-[8%] right-[8%] hidden flex-col items-start gap-1 opacity-30 lg:flex">
          <span className="h-14 w-px bg-[#0B1F3A]/25" />

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Evaluate
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Validate
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
            Scale
          </span>
        </div>
      </div>
    </section>
  );
}
