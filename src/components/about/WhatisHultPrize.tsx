import { Reveal } from "../ui/Reveal";

export function WhatIsHultPrize() {
  const steps = [
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
  ];

  return (
    <section
      id="the-challenge"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#fff1f6_0%,#fcecf5_24%,#f5effb_52%,#edf4ff_78%,#eaf2ff_100%)] py-24 text-[#24172c] sm:py-28 lg:py-32"
    >
      {/* Soft ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#f6a8c8]/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[15%] h-[520px] w-[520px] rounded-full bg-[#aebcf5]/20 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-220px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#d79bcf]/15 blur-[130px]"
      />

      {/* Extremely subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
          {/* LEFT CONTENT */}
          <Reveal delay={0.05} duration={0.7} y={24}>
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-3 text-2xs font-bold uppercase tracking-[0.2em] text-[#b71968]">
                <span className="h-px w-8 bg-gradient-to-r from-[#e6007e] to-[#b71968]" />
                The Challenge
              </div>

              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[.98] tracking-[-0.045em] text-[#25162d]">
                What is the
                <span className="block bg-gradient-to-r from-[#e6007e] via-[#9b1755] to-maroon bg-clip-text text-transparent">
                  Hult Prize?
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 font-semibold text-[#594d62] sm:text-lg">
                A platform where student entrepreneurs turn meaningful problems
                into ventures designed for measurable impact and sustainable
                growth.
              </p>

              <p className="mt-7 text-base font-medium leading-7 text-[#62576a] sm:text-lg">
                Students form teams, identify a real-world problem, develop an
                innovative business solution and pitch their venture through a
                global competition journey. The programme connects student
                entrepreneurs with universities, mentors, business
                professionals, investors and the wider entrepreneurship
                ecosystem.
              </p>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <div>
            <Reveal delay={0.12} duration={0.75} y={26}>
              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-[#302337] sm:text-2xl sm:leading-10">
                  The Hult Prize challenges young innovators to build
                  <span className="font-semibold text-[#b71968]">
                    {" "}
                    for-profit startups
                  </span>{" "}
                  that create measurable social and environmental impact.
                </p>
              </div>
            </Reveal>

            {/* GLASSMORPHIC CARDS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {steps.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={0.18 + index * 0.1}
                  duration={0.7}
                  y={24}
                  className="h-full"
                >
                  <div
                    className={[
                      "group relative h-full overflow-hidden rounded-[24px]",
                      "border border-white/70",
                      "bg-white/35",
                      "p-6",
                      "shadow-[0_18px_50px_rgba(93,58,102,0.08)]",
                      "backdrop-blur-2xl",
                      "transition-all duration-500",
                      "hover:-translate-y-1.5",
                      "hover:shadow-[0_24px_60px_rgba(93,58,102,0.14)]",
                      "hover:border-white/90",
                    ].join(" ")}
                  >
                    {/* Soft card gradient */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${index === 0 ? "bg-gradient-to-br from-[#fff0f6]/90 via-[#fcecf7]/55 to-[#e9f2ff]/70" : index === 1 ? "bg-gradient-to-br from-[#fcecf7]/90 via-[#f4eafa]/60 to-[#e8f1ff]/80" : "bg-gradient-to-br from-[#f8eaf5]/90 via-[#eeeafa]/60 to-[#e9f4ff]/90"}`}
                    />

                    {/* Inner highlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    />

                    <div className="relative z-10">
                      <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-hult-pink-wine">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-m font-semibold leading-6 text-[#6b6071]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* THE CHALLENGE CARD */}
            <Reveal delay={0.3} duration={0.75} y={28}>
              <div className="group relative mt-9 overflow-hidden rounded-[28px] border border-maroon/30 bg-gradient-to-br from-[#ebd8ea] via-[#ead7ee] to-[#e378ad] p-7 shadow-[0_24px_70px_rgba(122,53,111,0.16)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_28px_80px_rgba(122,53,111,0.22)] sm:p-8">
                {/* Frosted overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5"
                />

                {/* Soft highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/15 blur-3xl transition-transform duration-700 group-hover:scale-110"
                />

                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon/80">
                    The challenge
                  </p>

                  <p className="mt-4 max-w-4xl font-display text-xl font-bold leading-tight tracking-[-0.025em] text-maroon sm:text-2xl">
                    Build a business that solves a real problem and creates
                    meaningful impact.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
