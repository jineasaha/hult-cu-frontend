import Image from "next/image";
import type { CurrentJudge } from "@/types/judges-investors";

interface MysteryJudgesProps {
  judges: CurrentJudge[];
}

export function MysteryJudges({ judges }: MysteryJudgesProps) {
  if (judges.length === 0) {
    return null;
  }

  return (
    <section
      id="current-judges"
      className="relative isolate overflow-hidden bg-navy py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,49,140,0.14),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(37,99,235,0.12),transparent_32%)]" />

        <div className="absolute -right-52 -top-52 h-[620px] w-[620px] rounded-full border border-white/[0.055] animate-[spin_30s_linear_infinite]" />

        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-white/[0.045]" />

        <div className="absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full border border-hult-pink/10 animate-[pulse_6s_ease-in-out_infinite]" />

        <div className="absolute -bottom-72 -left-56 h-[620px] w-[620px] rounded-full bg-hult-pink/[0.07] blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />

        <div className="absolute left-[8%] top-[35%] h-2 w-2 rounded-full bg-hult-pink/50 shadow-[0_0_24px_rgba(214,49,140,0.7)] animate-pulse" />

        <div className="absolute right-[18%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-hult-pink" />

              <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-hult-pink-light">
                Current Judges 2026-27
              </p>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-2xl lg:text-6xl">
              The people who 
              <br />
              <span className="text-white/40">will shape what comes next.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              A new chapter of the Hult Prize journey is taking shape. Meet the
              people who will bring fresh perspectives, bold questions and
              thoughtful judgement to this year&apos;s cohort.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 grid gap-6 sm:mt-20 ${judges.length === 1 ? "mx-auto max-w-md" : judges.length === 2 ? "mx-auto max-w-3xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {judges.map((judge, index) => {
            if (judge.revealed) {
              return (
                <article
                  key={judge.id}
                  className="group relative animate-[fadeInUp_0.7s_ease-out_both]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-hult-pink/30 group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.3)]">
                    {judge.image && (
                      <Image
                        src={judge.image}
                        alt={judge.name || "Hult Prize judge"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                      {judge.name && (
                        <h3 className="font-display text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                          {judge.name}
                        </h3>
                      )}

                      {judge.role && (
                        <p className="mt-2 text-sm font-medium text-white/70">
                          {judge.role}
                        </p>
                      )}

                      {judge.organization && (
                        <p className="mt-1 text-xs text-white/45">
                          {judge.organization}
                        </p>
                      )}

                      <div className="mt-5 h-px w-8 bg-hult-pink transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={judge.id}
                className="group relative animate-[fadeInUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-hult-pink/25 group-hover:bg-white/[0.05] group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(214,49,140,0.16),transparent_34%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute inset-3 rounded-[24px] border border-white/[0.045]" />

                  <div className="absolute right-7 top-7 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-hult-pink shadow-[0_0_14px_rgba(214,49,140,0.8)] animate-pulse" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
                      Coming Soon
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-hult-pink/25 bg-white/[0.035] shadow-[0_0_70px_rgba(214,49,140,0.1)] transition-all duration-700 group-hover:scale-105 group-hover:border-hult-pink/45 group-hover:shadow-[0_0_90px_rgba(214,49,140,0.18)]">
                      <div className="absolute inset-2 rounded-full border border-white/[0.06]" />

                      <span className="font-display text-6xl font-light leading-none tracking-[-0.08em] text-white/85 transition-colors duration-500 group-hover:text-hult-pink-light">
                        ?
                      </span>
                    </div>

                    <p className="mt-8 font-display text-xl font-bold tracking-[-0.025em] text-white/90">
                      A new judge is joining.
                    </p>

                    <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/35">
                      Their identity will be revealed soon.
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-7 text-[9px] font-bold tracking-[0.25em] text-white/15">
                    0{index + 1}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/25">
            Hult Prize · University of Calcutta
          </p>

          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/20">
            2026 — 27
          </p>
        </div>
      </div>
    </section>
  );
}
