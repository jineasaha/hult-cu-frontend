const sdgs = [
  {
    number: "02",
    title: "Zero Hunger",
    text: "Food security and sustainable agriculture",
    accent: "bg-gold",
  },
  {
    number: "03",
    title: "Good Health & Well-being",
    text: "Accessible healthcare and health-related solutions",
    accent: "bg-coral",
  },
  {
    number: "04",
    title: "Quality Education",
    text: "Affordable, inclusive and innovative education",
    accent: "bg-hult-pink",
  },
  {
    number: "05",
    title: "Gender Equality",
    text: "Women’s empowerment and gender-inclusive solutions",
    accent: "bg-purple",
  },
  {
    number: "06",
    title: "Clean Water & Sanitation",
    text: "Water access, sanitation and related infrastructure",
    accent: "bg-info",
  },
  {
    number: "07",
    title: "Affordable & Clean Energy",
    text: "Renewable, accessible and efficient energy",
    accent: "bg-gold",
  },
  {
    number: "08",
    title: "Decent Work & Economic Growth",
    text: "Employment, livelihoods and inclusive economic opportunities",
    accent: "bg-coral",
  },
  {
    number: "09",
    title: "Industry, Innovation & Infrastructure",
    text: "Technology, innovation and resilient infrastructure",
    accent: "bg-hult-pink",
  },
  {
    number: "11",
    title: "Sustainable Cities & Communities",
    text: "Urban sustainability and inclusive communities",
    accent: "bg-teal",
  },
  {
    number: "12",
    title: "Responsible Consumption & Production",
    text: "Circular economy, resource efficiency and waste reduction",
    accent: "bg-gold",
  },
  {
    number: "13",
    title: "Climate Action",
    text: "Climate resilience, mitigation and environmental solutions",
    accent: "bg-teal",
  },
];

export function SdgImpact() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-[-200px] top-[15%] h-[420px] w-[420px] rounded-full bg-hult-pink-pale/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
              <span className="h-px w-8 bg-hult-pink" />
              02 · Impact Framework
            </div>

            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[.98] tracking-[-0.045em] text-charcoal">
              Ideas aligned with
              <span className="block text-hult-pink">global goals.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-gray sm:text-lg">
              The United Nations Sustainable Development Goals provide the
              global impact framework through which Hult Prize ventures are
              aligned. Participating ventures are expected to directly support
              at least one UN SDG.
            </p>

            <div className="mt-5 rounded-2xl border border-charcoal/10 bg-light-gray/70 p-5">
              <p className="text-sm leading-6 text-gray">
                <span className="font-bold text-charcoal">
                  The UN connection.
                </span>{" "}
                The Hult Prize itself is operated by the Hult Prize Foundation
                and is not a competition operated by the United Nations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sdgs.map((sdg) => (
            <article
              key={sdg.number}
              className="group relative overflow-hidden rounded-[20px] border border-charcoal/8 bg-white p-6 shadow-[0_12px_40px_rgba(15,15,15,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-hult-pink/20 hover:shadow-[0_22px_55px_rgba(15,15,15,.08)]"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full ${sdg.accent} opacity-80`}
              />

              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl font-extrabold tracking-[-0.05em] text-charcoal/10 transition-colors duration-300 group-hover:text-hult-pink/20">
                  {sdg.number}
                </span>

                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-charcoal/10 text-xs text-gray transition-colors group-hover:border-hult-pink/30 group-hover:text-hult-pink">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 font-display text-lg font-bold leading-tight text-charcoal">
                SDG {sdg.number} — {sdg.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray">{sdg.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
