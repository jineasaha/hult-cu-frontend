const journey = [
  "IDEA",
  "TEAM",
  "SDG-ALIGNED SOLUTION",
  "BUSINESS MODEL",
  "ONCAMPUS PITCH",
  "NATIONALS",
  "DIGITAL INCUBATOR",
  "GLOBAL ACCELERATOR",
  "GLOBAL FINALS",
];

export function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(230,0,126,.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(11,31,58,.8),transparent_40%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-light">
              <span className="h-px w-8 bg-hult-pink" />
              07 · The Journey
            </div>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.8rem,5vw,4.7rem)] font-bold leading-[.96] tracking-[-0.05em]">
              From an idea
              <span className="block text-hult-pink">to impact at scale.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
              The Hult Prize competition is structured as a progressive journey
              in which teams develop, validate and scale their ventures through
              successive stages.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-hult-pink" />
              <span className="text-sm font-medium text-white/70">
                Build · Pitch · Connect · Grow
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-7 left-[18px] top-7 w-px bg-gradient-to-b from-hult-pink via-white/20 to-hult-pink/20"
            />

            <div className="space-y-3">
              {journey.map((stage, index) => (
                <div
                  key={stage}
                  className="group relative flex items-center gap-5 rounded-[18px] border border-white/8 bg-white/[0.035] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-hult-pink/30 hover:bg-white/[0.065] sm:px-6 sm:py-5"
                >
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hult-pink/30 bg-charcoal text-[10px] font-bold text-hult-pink-light transition-all duration-300 group-hover:border-hult-pink group-hover:bg-hult-pink group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="font-display text-sm font-bold tracking-[0.08em] text-white/85 sm:text-base">
                    {stage}
                  </span>

                  {index < journey.length - 1 && (
                    <span className="ml-auto text-white/15 transition-colors group-hover:text-hult-pink">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="relative mt-3 overflow-hidden rounded-[22px] border border-hult-pink/25 bg-gradient-to-r from-hult-pink/15 to-white/[0.04] p-6">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-hult-pink/20 blur-2xl" />

              <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-hult-pink-light">
                Destination
              </p>

              <div className="relative mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                    US$1 MILLION
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    Seed funding for the global winning team
                  </p>
                </div>

                <div className="text-sm font-medium text-white/50">
                  Global Finals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
