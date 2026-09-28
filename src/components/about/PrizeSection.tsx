import { Reveal } from "../ui/Reveal";

const benefits = [
  "Global mentorship and entrepreneurship support",
  "Entrepreneurship education and venture-development guidance",
  "Access to international networks and startup communities",
  "Connections with industry professionals and potential investors",
  "International exposure and opportunities to develop the venture",
];

export function PrizeSection() {
  return (
    <section className="relative overflow-hidden bg-light-gray py-20 sm:py-28 lg:py-18">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#000000] via-[#3a031e] to-[#32031a] px-7 py-12 text-white shadow-[0_35px_100px_rgba(11,31,58,.2)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-hult-pink/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-[30%] h-72 w-72 rounded-full bg-purple/15 blur-3xl"
          />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <Reveal delay={0.05} duration={0.7} y={24}>
              <div>
                <div className="inline-flex gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-light">
                  <span className="h-px w-8 bg-hult-pink" />
                  03 · The Prize
                </div>

                <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,4.2rem)] font-bold leading-[1.3] tracking-[-0.055em]">
                  US$1 million
                  <span className="block bg-linear-to-b from-pink-200 via-pink-300 to-pink-800 bg-clip-text font-medium text-transparent">
                    in seed funding.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                  At the end of the global competition, the winning team
                  receives US$1 million in seed funding to advance and scale its
                  startup, subject to the official Hult Prize terms and
                  conditions.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-5 py-4">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="text-xs leading-5 text-white/65">
                    The award is described by Hult Prize as seed funding;
                    official terms and conditions govern its structure and
                    requirements.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} duration={0.75} y={28}>
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
                        <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hult-pink-dark text-[10px] font-bold">
                          ✓
                        </span>

                        <p className="text-[16px] font-semibold leading-6 text-white/75">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
