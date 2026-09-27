const benefits = [
  "Global mentorship and entrepreneurship support",
  "Entrepreneurship education and venture-development guidance",
  "Access to international networks and startup communities",
  "Connections with industry professionals and potential investors",
  "International exposure and opportunities to develop the venture",
];

export function PrizeSection() {
  return (
    <section className="relative overflow-hidden bg-light-gray py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-navy px-7 py-12 text-white shadow-[0_35px_100px_rgba(11,31,58,.2)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-hult-pink/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-[30%] h-72 w-72 rounded-full bg-purple/15 blur-3xl"
          />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-light">
                <span className="h-px w-8 bg-hult-pink" />
                03 · The Prize
              </div>

              <h2 className="mt-6 font-display text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[.94] tracking-[-0.055em]">
                US$1 million
                <span className="block font-medium text-white/55">
                  in seed funding.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                At the end of the global competition, the winning team receives
                US$1 million in seed funding to advance and scale its startup,
                subject to the official Hult Prize terms and conditions.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-light">
                  Beyond the financial award
                </p>

                <div className="mt-6 space-y-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hult-pink text-[10px] font-bold">
                        ✓
                      </span>

                      <p className="text-sm leading-6 text-white/75">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-4">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <p className="text-xs leading-5 text-white/45">
                  The award is described by Hult Prize as seed funding; official
                  terms and conditions govern its structure and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
