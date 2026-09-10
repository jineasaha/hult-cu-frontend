"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function JudgesInvestorsHero() {
  const scrollToCurrentJudges = () => {
    document.getElementById("current-judges")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative isolate flex min-h-[calc(100vh-32px)] items-center justify-center overflow-hidden bg-[#172B49] px-6 pb-24 pt-36 sm:px-8 lg:min-h-[calc(100vh-40px)] lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#172B49_0%,#273052_28%,#493456_55%,#743D63_78%,#9A4F70_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(185,221,236,0.08)_0%,transparent_45%,rgba(11,31,58,0.18)_100%)]" />
        <div className="absolute -left-[20%] bottom-[-35%] h-[650px] w-[650px] rounded-full bg-[#31415F]/35 blur-[130px]" />
        <div className="absolute -right-[18%] top-[-30%] h-[650px] w-[650px] rounded-full bg-[#B16A82]/25 blur-[130px]" />
        <div className="absolute -left-[15%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#5A4264]/25 blur-[140px]" />
        <div className="absolute right-[-5%] bottom-[-30%] h-[550px] w-[650px] rounded-full bg-[#8A506B]/25 blur-[150px]" />
        <div className="absolute -right-[8%] top-[10%] h-[720px] w-[720px] rounded-full border border-white/10" />
        <div className="absolute -right-[2%] top-[22%] h-[570px] w-[570px] rounded-full border border-white/[0.06]" />
      </div>

      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-4">
        <span className="h-px w-8 bg-white/35" />

        <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/45 [writing-mode:vertical-rl]">
          People · Ideas · Impact
        </span>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-end lg:gap-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/45 [writing-mode:vertical-rl]">
          Judges / Investors
        </span>

        <span className="h-8 w-px bg-white/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-white/65 sm:text-xs">
                Hult Prize · University of Calcutta
              </p>

              <h1 className="max-w-4xl font-display text-[clamp(3.3rem,7.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.07em] text-white">
                The{" "}
                <span className="bg-linear-to-r from-white via-red-200 to-pink-500 bg-clip-text text-transparent">
                  people
                </span>
                <br />
                behind the
                <br />
                <span className="bg-linear-to-r from-white via-red-200 to-pink-500 bg-clip-text text-transparent">
                  decisions
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-sm pb-2 lg:pb-3">
              <div className="mb-5 h-px w-12 bg-hult-pink" />

              <p className="text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                Meet the judges and investors who brought their experience,
                perspective and ambition to the Hult Prize journey.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-16">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">
                OnCampus
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">
                2026 — 27
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToCurrentJudges}
              className="group flex items-center gap-3 text-[5px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white sm:text-[9px] sm:tracking-[0.28em]"
            >
              Scroll to explore
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                <ArrowDown
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
