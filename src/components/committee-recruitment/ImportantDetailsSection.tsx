import { Reveal } from "../ui/Reveal";

export function ImportantDetailsSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-10 sm:py-24 lg:py-28"
      style={{
        background: `linear-gradient(118deg, #0F0F0F 0%, #24131C 14%, #54162f 36%, #964e69 53%, #dcb1c0 70%, #e1c0cc 84%, #FFFFFF 100%)`,
      }}
    >
      {/* ============================================================ */}
      {/* BACKGROUND LIGHT / ATMOSPHERE                                */}
      {/* ============================================================ */}

      <div
        className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(130,32,65,0.38) 0%, rgba(130,32,65,0.12) 48%, transparent 74%)",
        }}
      />

      <div
        className="pointer-events-none absolute right-[-180px] top-[8%] h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,205,220,0.34) 0%, rgba(255,220,231,0.15) 48%, transparent 75%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[-240px] right-[-100px] h-[520px] w-[700px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.78) 0%, rgba(255,248,251,0.34) 52%, transparent 76%)",
        }}
      />

      {/* ============================================================ */}
      {/* CONTENT CONTAINER                                            */}
      {/* ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
        {/* ========================================================== */}
        {/* SECTION HEADING                                            */}
        {/* ========================================================== */}

        <Reveal delay={0.05}>
          <div className="mb-6 flex flex-col gap-5 sm:mb-11 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 rounded-full bg-[#FFB3D1] sm:w-11" />

                <p className="text-[14px] font-bold uppercase tracking-[0.30em] text-white/70 sm:text-[14px]">
                  Everything you need to know
                </p>
              </div>

              <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,3.3rem)] font-bold leading-[0.94] tracking-[-0.055em] text-white">
                Important <span className="ml-2 text-[#F4C6D6]">Details</span>
              </h2>
            </div>

            <p className="max-w-[330px] text-[14px] font-bold leading-6 text-white md:text-[var(--charcoal)] lg:mb-1 lg:text-[15px] lg:leading-7">
              A few important details before you begin your application and take
              the next step with the committee.
            </p>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* PREMIUM GLASS INFORMATION PANEL                              */}
        {/* ============================================================ */}

        <Reveal delay={0.22}>
          <div className="group relative mt-7 overflow-hidden rounded-[28px] border border-white/[0.92] bg-white/[0.76] shadow-[0_32px_90px_rgba(34,10,22,0.18)] backdrop-blur-[36px] backdrop-saturate-[160%] sm:mt-20">
            {/* ========================================================== */}
            {/* GLASS FOUNDATION                                          */}
            {/* ========================================================== */}

            <div className="pointer-events-none absolute inset-0 bg-white/[0.52]" />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 48%, rgba(255,249,252,0.84) 100%)`,
              }}
            />

            {/* ========================================================== */}
            {/* PREMIUM LIGHT REFLECTION                                  */}
            {/* ========================================================== */}

            <div className="pointer-events-none absolute left-[-10%] top-[-85px] h-[180px] w-[65%] rotate-[-5deg] rounded-full bg-white/[0.70] blur-[60px]" />

            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[260px] rounded-full bg-[#E6A1B9]/[0.07] blur-[70px]" />

            <div className="pointer-events-none absolute bottom-[-120px] left-[25%] h-[190px] w-[550px] rounded-full bg-white/[0.45] blur-[65px]" />

            {/* ========================================================== */}
            {/* GLASS EDGE DETAILS                                         */}
            {/* ========================================================== */}

            <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-white sm:left-10 sm:right-10" />

            <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.65]" />

            {/* ========================================================== */}
            {/* INFORMATION AREA                                           */}
            {/* ========================================================== */}

            <div className="relative grid lg:grid-cols-4">
              {/* ======================================================== */}
              {/* 01 — ELIGIBILITY                                         */}
              {/* ======================================================== */}

              <div className="group/item relative min-h-[130px] px-5 pb-5 pt-4 sm:min-h-[220px] sm:px-9 sm:pb-8 sm:pt-8 lg:border-r lg:border-[#6B173C]/[0.10] lg:px-7 xl:px-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-6 items-center rounded-full border border-[#6B173C]/[0.13] bg-[#6B173C]/[0.035] px-2.5 font-mono text-[8px] font-bold tracking-[0.12em] text-[#6B173C] sm:h-7">
                    01
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#6B173C]/[0.14] bg-white/[0.82] text-[#6B173C] shadow-[0_8px_24px_rgba(91,22,52,0.10)] transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:shadow-[0_12px_28px_rgba(91,22,52,0.14)] sm:h-[46px] sm:w-[46px]">
                    <div className="pointer-events-none absolute inset-[3px] rounded-full border border-white" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="relative h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
                      aria-hidden="true"
                    >
                      <path d="M3 9 12 4l9 5-9 5-9-5Z" />
                      <path d="M6 11v4.5c0 1.7 2.7 3 6 3s6-1.3 6-3V11" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B3155] sm:text-[11px] sm:tracking-[0.24em]">
                    Eligibility
                  </p>

                  <h3 className="mt-2 max-w-[205px] font-display text-[16px] font-bold leading-[1.2] tracking-[-0.035em] text-[#171114] sm:mt-3 sm:text-[19px] sm:leading-[1.22]">
                    Students of
                    <br />
                    University of Calcutta
                  </h3>
                </div>

                <div className="absolute bottom-4 left-5 flex items-center gap-1.5 sm:bottom-8 sm:left-9 lg:left-7">
                  <span className="h-[2px] w-7 rounded-full bg-[#7A304B] transition-all duration-500 group-hover/item:w-12 sm:w-8" />

                  <span className="h-1 w-1 rounded-full bg-[#C98AA2]/60" />
                </div>
              </div>

              {/* ======================================================== */}
              {/* 02 — RECRUITMENT                                         */}
              {/* ======================================================== */}

              <div className="group/item relative min-h-[130px] border-t border-[#6B173C]/[0.10] px-5 pb-5 pt-4 sm:min-h-[220px] sm:px-9 sm:pb-8 sm:pt-8 lg:border-l-0 lg:border-r lg:border-t-0 lg:px-7 xl:px-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-6 items-center rounded-full border border-[#6B173C]/[0.13] bg-[#6B173C]/[0.035] px-2.5 font-mono text-[8px] font-bold tracking-[0.12em] text-[#6B173C] sm:h-7">
                    02
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#6B173C]/[0.14] bg-white/[0.82] text-[#6B173C] shadow-[0_8px_24px_rgba(91,22,52,0.10)] transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:shadow-[0_12px_28px_rgba(91,22,52,0.14)] sm:h-[46px] sm:w-[46px]">
                    <div className="pointer-events-none absolute inset-[3px] rounded-full border border-white" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="relative h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M3.5 19c.5-3 2.5-5 5.5-5s5 2 5.5 5" />
                      <path d="M14.5 14.5c2.7.1 4.6 1.6 5 4.5" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B3155] sm:text-[11px] sm:tracking-[0.24em]">
                    Recruitment
                  </p>

                  <h3 className="mt-2 font-display text-[16px] font-bold leading-[1.2] tracking-[-0.035em] text-[#171114] sm:mt-3 sm:text-[19px] sm:leading-[1.22]">
                    Core Committee
                    <br />
                    2026–27
                  </h3>
                </div>

                <div className="absolute bottom-4 left-5 flex items-center gap-1.5 sm:bottom-8 sm:left-9 lg:left-7">
                  <span className="h-[2px] w-7 rounded-full bg-[#7A304B] transition-all duration-500 group-hover/item:w-12 sm:w-8" />

                  <span className="h-1 w-1 rounded-full bg-[#C98AA2]/60" />
                </div>
              </div>

              {/* ======================================================== */}
              {/* 03 — DEADLINE                                            */}
              {/* ======================================================== */}

              <div className="group/item relative min-h-[130px] border-t border-[#6B173C]/[0.10] px-5 pb-5 pt-4 sm:min-h-[220px] sm:px-9 sm:pb-8 sm:pt-8 lg:border-r lg:border-t-0 lg:px-7 xl:px-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-6 items-center rounded-full border border-[#6B173C]/[0.13] bg-[#6B173C]/[0.035] px-2.5 font-mono text-[8px] font-bold tracking-[0.12em] text-[#6B173C] sm:h-7">
                    03
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#6B173C]/[0.14] bg-white/[0.82] text-[#6B173C] shadow-[0_8px_24px_rgba(91,22,52,0.10)] transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:shadow-[0_12px_28px_rgba(91,22,52,0.14)] sm:h-[46px] sm:w-[46px]">
                    <div className="pointer-events-none absolute inset-[3px] rounded-full border border-white" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="relative h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
                      aria-hidden="true"
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2" />
                      <path d="M8 3v4M16 3v4M4 9h16" />
                      <path d="M8 13h3M13 13h3M8 17h3" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B3155] sm:text-[11px] sm:tracking-[0.24em]">
                    Deadline
                  </p>

                  <h3 className="mt-2 font-display text-[18px] font-bold leading-[1.2] tracking-[-0.035em] text-[#6B173C] sm:mt-3 sm:text-[21px] sm:leading-[1.22]">
                    To be Announced
                  </h3>
                </div>

                <div className="absolute bottom-4 left-5 flex items-center gap-1.5 sm:bottom-8 sm:left-9 lg:left-7">
                  <span className="h-[2px] w-7 rounded-full bg-[#7A304B] transition-all duration-500 group-hover/item:w-12 sm:w-8" />

                  <span className="h-1 w-1 rounded-full bg-[#C98AA2]/60" />
                </div>
              </div>

              {/* ======================================================== */}
              {/* 04 — EXPERIENCE                                          */}
              {/* ======================================================== */}

              <div className="group/item relative min-h-[130px] border-t border-[#6B173C]/[0.10] px-5 pb-5 pt-4 sm:min-h-[220px] sm:px-9 sm:pb-8 sm:pt-8 lg:border-t-0 lg:px-7 xl:px-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-6 items-center rounded-full border border-[#6B173C]/[0.13] bg-[#6B173C]/[0.035] px-2.5 font-mono text-[8px] font-bold tracking-[0.12em] text-[#6B173C] sm:h-7">
                    04
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#6B173C]/[0.14] bg-white/[0.82] text-[#6B173C] shadow-[0_8px_24px_rgba(91,22,52,0.10)] transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:shadow-[0_12px_28px_rgba(91,22,52,0.14)] sm:h-[46px] sm:w-[46px]">
                    <div className="pointer-events-none absolute inset-[3px] rounded-full border border-white" />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="relative h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
                      aria-hidden="true"
                    >
                      <path d="M12 3 14.2 8l5.3.5-4 3.5 1.2 5.2L12 14.5 7.3 17.2 8.5 12l-4-3.5L9.8 8 12 3Z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B3155] sm:text-[11px] sm:tracking-[0.24em]">
                    Experience
                  </p>

                  <h3 className="mt-2 max-w-[210px] font-display text-[16px] font-bold leading-[1.2] tracking-[-0.035em] text-[#171114] sm:mt-3 sm:text-[19px] sm:leading-[1.22]">
                    No prior experience
                    <br />
                    required
                  </h3>
                </div>

                <div className="absolute bottom-4 left-5 flex items-center gap-1.5 sm:bottom-8 sm:left-9 lg:left-7">
                  <span className="h-[2px] w-7 rounded-full bg-[#7A304B] transition-all duration-500 group-hover/item:w-12 sm:w-8" />

                  <span className="h-1 w-1 rounded-full bg-[#C98AA2]/60" />
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* PREMIUM FOOTER                                              */}
            {/* ============================================================ */}

            <div className="relative flex min-h-[54px] items-center justify-between border-t border-[#6B173C]/[0.10] bg-white/[0.38] px-6 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 rounded-full bg-[#7A304B]" />
                  <span className="absolute h-4 w-4 rounded-full border border-[#7A304B]/[0.18]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.20em] text-[#6B173C]/65">
                  2026–27 Committee Recruitment
                </span>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="h-3 w-px bg-[#6B173C]/[0.12]" />

                <span className="text-[10px] font-medium text-[#6B173C]/45">
                  University of Calcutta
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
