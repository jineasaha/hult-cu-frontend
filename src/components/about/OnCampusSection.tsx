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
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
              <span className="h-px w-8 bg-hult-pink" />
              04 · OnCampus
            </div>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.7rem,5vw,4.5rem)] font-bold leading-[.97] tracking-[-0.05em] text-charcoal">
              From campus
              <span className="block text-hult-pink">innovation</span>
              to a global stage.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray sm:text-lg">
              The Hult Prize OnCampus programme at the University of Calcutta
              provides students with a platform to transform innovative ideas
              into viable, impact-driven ventures.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal font-display text-xl font-extrabold text-white shadow-xl">
                20
                <span className="text-hult-pink">20</span>
              </div>

              <div>
                <p className="font-display text-lg font-bold text-charcoal">
                  Since 2020
                </p>
                <p className="mt-1 text-sm text-gray">
                  University of Calcutta OnCampus association
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-6 top-7 bottom-7 w-px bg-gradient-to-b from-hult-pink via-hult-pink-light to-transparent"
              />

              <div className="space-y-4">
                {stages.map((stage) => (
                  <article
                    key={stage.number}
                    className="group relative grid grid-cols-[56px_1fr] gap-5 rounded-[22px] border border-charcoal/8 bg-white p-5 pl-2 shadow-[0_12px_35px_rgba(15,15,15,.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-hult-pink/20 hover:shadow-[0_20px_50px_rgba(15,15,15,.07)] sm:p-6 sm:pl-3"
                  >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-hult-pink/25 bg-hult-pink-pale font-display text-xs font-extrabold text-hult-pink-dark transition-all duration-300 group-hover:bg-hult-pink group-hover:text-white">
                      {stage.number}
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal">
                        {stage.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray sm:text-base sm:leading-7">
                        {stage.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-[22px] border border-hult-pink/15 bg-gradient-to-br from-hult-pink-pale/80 via-white to-white p-7">
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
        </div>
      </div>
    </section>
  );
}
