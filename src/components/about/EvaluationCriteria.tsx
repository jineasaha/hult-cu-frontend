const criteria = [
  {
    number: "01",
    title: "TEAM",
    question: "Can the team execute its vision?",
    accent: "from-hult-pink to-hult-pink-light",
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
    question: "Does the solution address a genuine and well-understood problem?",
    accent: "from-purple to-hult-pink",
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
    accent: "from-teal to-info",
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
    accent: "from-gold to-coral",
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
    title: "Product–Market Fit",
    question: "Does the solution demonstrably address a real market need?",
  },
  {
    title: "Go-to-Market Strategy",
    question: "Does the team have a credible plan to reach and acquire customers?",
  },
  {
    title: "Traction",
    question:
      "Is there evidence that the venture is gaining users, customers, partnerships or other meaningful validation?",
  },
  {
    title: "Scaling",
    question:
      "Can the business model and impact be expanded sustainably?",
  },
];

export function EvaluationCriteria() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-hult-pink-pale/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
            <span className="h-px w-8 bg-hult-pink" />
            06 · Evaluation
          </div>

          <h2 className="mt-6 font-display text-[clamp(2.7rem,5vw,4.6rem)] font-bold leading-[.97] tracking-[-0.05em] text-charcoal">
            What makes a venture
            <span className="block text-hult-pink">competition-ready?</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray sm:text-lg">
            Hult Prize uses a progressive evaluation framework. As a venture
            moves through the competition, the emphasis increases from the
            strength of the team and idea toward validation, market execution,
            traction and scalability.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {criteria.map((criterion) => (
            <article
              key={criterion.number}
              className="group relative overflow-hidden rounded-[26px] border border-charcoal/8 bg-white p-7 shadow-[0_15px_45px_rgba(15,15,15,.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(15,15,15,.08)] sm:p-8"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${criterion.accent}`}
              />

              <div className="flex items-start justify-between gap-5">
                <span className="font-display text-5xl font-extrabold tracking-[-0.06em] text-charcoal/10 transition-colors group-hover:text-hult-pink/20">
                  {criterion.number}
                </span>

                <span className="rounded-full bg-light-gray px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gray">
                  Core criterion
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl font-extrabold tracking-[-0.03em] text-charcoal">
                {criterion.title}
              </h3>

              <p className="mt-3 font-medium leading-6 text-gray">
                {criterion.question}
              </p>

              <div className="mt-6 border-t border-charcoal/8 pt-5">
                <ul className="space-y-3">
                  {criterion.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-gray"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hult-pink" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray">
              As the venture progresses
            </p>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-charcoal/10 bg-white shadow-[0_15px_45px_rgba(15,15,15,.045)]">
            {progression.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-3 p-6 sm:grid-cols-[.7fr_1.3fr] sm:gap-10 ${
                  index !== progression.length - 1
                    ? "border-b border-charcoal/8"
                    : ""
                }`}
              >
                <div className="font-display font-bold text-charcoal">
                  {item.title}
                </div>

                <div className="text-sm leading-6 text-gray">
                  {item.question}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-[22px] bg-navy px-6 py-7 text-white sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-light">
            Global Finals
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65 sm:text-base">
            At the Global Finals, the evaluation considers a more developed
            venture and places greater emphasis on factors including team
            strength, validated idea, impact, business viability and
            scalability.
          </p>
        </div>
      </div>
    </section>
  );
}