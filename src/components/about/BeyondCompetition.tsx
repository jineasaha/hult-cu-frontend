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
    <section className="relative overflow-hidden bg-light-gray py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[30px] bg-white p-7 shadow-[0_25px_80px_rgba(15,15,15,.07)] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-hult-pink/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-dark">
                  Venture development
                </p>

                <span className="rounded-full border border-charcoal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray">
                  Beyond the pitch
                </span>
              </div>

              <div className="mt-7 space-y-3">
                {developmentAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-charcoal/8 hover:bg-light-gray"
                  >
                    <span className="font-display text-xs font-bold text-hult-pink">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-charcoal sm:text-base">
                      {area}
                    </span>

                    <span className="ml-auto text-gray/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-hult-pink">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
              <span className="h-px w-8 bg-hult-pink" />
              05 · Beyond the Competition
            </div>

            <h2 className="mt-6 font-display text-[clamp(2.6rem,5vw,4.4rem)] font-bold leading-[.98] tracking-[-0.045em] text-charcoal">
              Build beyond
              <span className="block text-hult-pink">the competition.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray sm:text-lg">
              Participating teams can receive guidance in areas that are
              important for taking an idea from an early concept towards a more
              mature venture.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-[20px] border border-charcoal/10 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hult-pink-pale text-hult-pink">
                    ↗
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal">
                      Connecting innovators with investors
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray">
                      Entrepreneurs, industry professionals and potential
                      investors can create opportunities for promising ventures
                      to receive further attention beyond the competition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-charcoal/10 bg-charcoal p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-light">
                  Intellectual Property & Legal Readiness
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  Teams intending to pursue investment or commercialisation
                  should appropriately address intellectual-property ownership,
                  patents, confidentiality and other relevant legal protections
                  before entering investment or commercial discussions.
                </p>
              </div>

              <p className="text-xs leading-5 text-gray">
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
