"use client";

import { ArrowDownToLine, FileText, Paperclip } from "lucide-react";
import { Reveal } from "../ui/Reveal";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function BeforeYouApplySection() {
  return (
    <section
      id="apply"
      className="scroll-mt-10 bg-[#faf8fa] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="relative min-h-[730px] overflow-hidden rounded-[30px] border border-white/[0.10] bg-gradient-to-br from-[#011221] via-[#0F1F45] to-[#66102E] px-7 py-10 text-white shadow-[0_35px_100px_rgba(7,27,58,0.20)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* SUBTLE BACKGROUND DETAILS */}

          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-[100px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(112,34,76,0.45), transparent 68%)",
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full blur-[110px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(3,18,45,0.9), transparent 70%)",
            }}
          />

          <div className="pointer-events-none absolute right-[-100px] top-[300px] h-px w-[520px] rotate-[-18deg] bg-white/[0.045]" />

          <div className="relative z-10">
            {/* TOP — BEFORE YOU APPLY */}

            <Reveal delay={0.05}>
              <div className="grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-center">
                {/* LEFT CONTENT */}

                <div>
                  {/* Section label */}

                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#F3A9C7]" />
                    <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#F3A9C7]">
                      Before you apply
                    </p>
                  </div>

                  {/* Main heading */}

                  <h2 className="max-w-3xl font-display text-[clamp(2.5rem,5.8vw,4rem)] font-bold leading-[0.94] tracking-[-0.055em]">
                    Read The
                    <br />
                    <span className="bg-gradient-to-r from-white via-[#F7D6E3] to-[#EFA0C2] bg-clip-text text-transparent">
                      Recruitment brochure.
                    </span>
                  </h2>

                  {/* Description */}

                  <p className="mt-7 max-w-[690px] text-[15px] font-semibold leading-7 text-white/90 sm:text-base">
                    Learn about the committee, roles and expectations.
                  </p>

                  {/* BROCHURE BUTTONS */}

                  <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row">
                    {/* VIEW BROCHURE */}

                    <a
                      href="/brochure/Committee Recruitment Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#f5d4e1]/50 bg-gradient-to-r from-[#82052F] to-[#6E1042] px-7 text-sm font-bold text-[#57152F] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#BD6D94] hover:to-[#8C0A4A] sm:w-auto"
                    >
                      <FileText className="h-4 w-4" />
                      <span>View Brochure</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    {/* DOWNLOAD BROCHURE */}

                    <a
                      href="/brochure/Committee Recruitment Brochure.pdf"
                      download
                      className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#f5d4e1]/50 bg-[#FAEBEF]/50 px-7 text-sm font-bold text-[#540B1E] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6E6269] sm:w-auto"
                    >
                      <Paperclip className="h-4 w-4" />
                      <span>Download Brochure</span>
                      <ArrowDownToLine className="h-4 w-4 transition-transform duration-300 hover:translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* RIGHT — BROCHURE IMAGE GLASS PANEL */}
                {/* Hidden on mobile, unchanged on desktop */}

                <div className="hidden justify-center lg:flex lg:justify-end">
                  <div className="group relative flex h-[340px] w-full max-w-[330px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.14] bg-white/[0.055] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1">
                    {/* Glass highlight */}

                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Soft internal pink tint */}

                    <div
                      className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full blur-[70px] opacity-30"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(230,0,126,0.30), transparent 70%)",
                      }}
                    />

                    {/* Soft white glow around brochure */}

                    <div className="pointer-events-none absolute z-[5] h-[310px] w-[260px] rounded-[18px] bg-white/80 blur-[24px] opacity-60" />

                    {/* Actual brochure cover */}

                    <div className="relative z-10 h-[290px] w-[240px] overflow-hidden rounded-[8px] bg-white shadow-[0_25px_55px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.015]">
                      <img
                        src="/brochure/brochurepic.png"
                        alt="Hult Prize recruitment brochure cover"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Small floating document badge */}

                    <div className="absolute bottom-6 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/20 bg-[#F8D8E5] text-[#57152F] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* DIVIDER */}

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/[0.13] to-transparent sm:my-14" />

            {/* BOTTOM — APPLICATIONS ARE OPEN */}

            <Reveal delay={0.25}>
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.10] bg-white/[0.045] px-6 py-8 backdrop-blur-xl sm:px-8 sm:py-9 lg:px-10 lg:py-9">
                {/* Subtle bottom glass highlight */}

                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  {/* APPLICATION TEXT */}

                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-7 bg-[#F3A9C7]" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F3A9C7]">
                        Applications
                      </p>
                    </div>

                    <h3 className="bg-gradient-to-r from-white via-[#F7D6E3] to-[#EFA0C2] bg-clip-text font-display text-[clamp(2rem,3.5vw,3.25rem)] font-bold leading-none tracking-[-0.045em] text-transparent">
                      Applications are Open
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                      Ready to take the next step? Apply now and become part of
                      the team building the Hult Prize experience on campus.
                    </p>
                  </div>

                  {/* APPLY BUTTON */}

                  <a
                    href="https://forms.gle/LtTt2biTb5ZPbDiF6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-[#f5d4e1]/50 bg-gradient-to-r from-[#82052F] to-[#6E1042] px-8 text-sm font-bold text-[#57152F] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#BD6D94] hover:to-[#8C0A4A]"
                  >
                    Apply Now
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
