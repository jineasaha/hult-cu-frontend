export function WhatIsHultPrize() {
  return (
    <section
      id="the-challenge"
      className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-hult-pink/15 blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-light">
              <span className="h-px w-8 bg-hult-pink" />
              01 · The Challenge
            </div>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[.98] tracking-[-0.045em]">
              What is the
              <span className="block text-hult-pink">Hult Prize?</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
              A platform where student entrepreneurs turn meaningful problems
              into ventures designed for measurable impact and sustainable
              growth.
            </p>
          </div>

          <div>
            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-white/90 sm:text-2xl sm:leading-10">
                The Hult Prize challenges young innovators to build
                <span className="font-semibold text-white">
                  {" "}
                  for-profit startups
                </span>{" "}
                that create measurable social and environmental impact.
              </p>

              <p className="mt-7 text-base leading-8 text-white/60 sm:text-lg">
                Students form teams, identify a real-world problem, develop an
                innovative business solution and pitch their venture through a
                global competition journey. The programme connects student
                entrepreneurs with universities, mentors, business
                professionals, investors and the wider entrepreneurship
                ecosystem.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Identify",
                  text: "Find a real problem worth solving.",
                },
                {
                  number: "02",
                  title: "Build",
                  text: "Develop an innovative business solution.",
                },
                {
                  number: "03",
                  title: "Impact",
                  text: "Create measurable, sustainable change.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-[20px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-hult-pink/30 hover:bg-white/[0.07]"
                >
                  <span className="font-display text-sm font-bold text-hult-pink-light">
                    {item.number}
                  </span>

                  <h3 className="mt-8 font-display text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-hult-pink/20 bg-gradient-to-br from-hult-pink/10 to-transparent p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-hult-pink-light">
                The challenge
              </p>

              <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-3xl">
                Build a business that solves a real problem and creates
                meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
