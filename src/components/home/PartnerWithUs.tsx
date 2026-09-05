"use client";

import type { ReactNode } from "react";
import { ArrowDownToLine, ArrowUpRight, Handshake } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MAROON = "#7A1F3D";

const SPONSORSHIP_FORM_HREF = "#";

export function PartnerWithUs() {
  return (
    <Section
      id="partner"
      className="relative overflow-hidden bg-[#F4F0F1] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DETAILS
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#7A1F3D]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFB3D1]/[0.16] blur-3xl"
      />

      {/* Editorial ring */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full border-[28px] border-[#7A1F3D]/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full border-[30px] border-[#0B1F3A]/[0.035]"
      />

      <Container>
        <div className="relative mx-auto max-w-6xl">
          {/* =========================================
              HEADER
          ========================================== */}

          <Reveal>
            <div className="mx-auto mb-11 max-w-3xl text-center sm:mb-14">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9"
                  style={{ backgroundColor: MAROON }}
                />

                <span
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: MAROON }}
                >
                  Partnership Opportunity
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-9"
                  style={{ backgroundColor: MAROON }}
                />
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.05em] text-[#0F0F0F] sm:text-5xl lg:text-6xl">
                Partner With <span style={{ color: MAROON }}>Us</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-[#55535A] sm:text-base">
                Join a movement that gives young innovators the platform,
                community, and opportunity to create meaningful change.
              </p>
            </div>
          </Reveal>

          {/* =========================================
              MAIN SPONSORSHIP CARD
          ========================================== */}

          <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-[30px] border border-[#DDD5D8] bg-white shadow-[0_24px_70px_rgba(15,15,15,0.08)]">
              {/* Left accent */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 z-20 w-1.5"
                style={{ backgroundColor: MAROON }}
              />

              <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
                {/* =========================================
                    LEFT — SPONSORSHIP PITCH
                ========================================== */}

                <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                  <div className="max-w-2xl">
                    {/* Small label */}

                    <div className="mb-5 flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: MAROON }}
                      />

                      <span
                        className="font-sans text-[10px] font-bold uppercase tracking-[0.24em]"
                        style={{ color: MAROON }}
                      >
                        Sponsorship
                      </span>
                    </div>

                    {/* Main pitch */}

                    <h3 className="max-w-2xl font-display text-2xl font-bold leading-[1.15] tracking-[-0.04em] text-[#0F0F0F] sm:text-3xl lg:text-[36px]">
                      Partner with the University of Calcutta&apos;s premier
                      social innovation movement.
                    </h3>

                    <p className="mt-5 max-w-2xl font-sans font-semibold text-base leading-7 text-[#4B4B4B] sm:text-[17px] sm:leading-8">
                      Support young entrepreneurs, gain brand visibility, and
                      drive sustainable impact.
                    </p>

                    <p className="mt-4 max-w-2xl font-sans font-semibold text-sm leading-6 text-[#666268] sm:text-[15px]">
                      Your support helps us create opportunities for students to
                      turn innovative ideas into ventures with meaningful social
                      impact.
                    </p>

                    {/* =========================================
                        CTA BUTTONS
                    ========================================== */}

                    <div className="mt-8 flex flex-wrap items-center gap-3.5">
                      {/* Sponsorship Form Download */}

                      <a
                        href={SPONSORSHIP_FORM_HREF}
                        download
                        className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-7 py-3 font-sans text-sm font-bold text-white shadow-[0_8px_24px_rgba(122,31,61,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(122,31,61,0.30)]"
                        style={{ backgroundColor: MAROON, color: "white" }}
                      >
                        Become a Sponsor
                        <ArrowDownToLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                      </a>

                      {/* Contact */}

                      <a
                        href="#contact"
                        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#D8D5D8] bg-white px-7 py-3 font-sans text-sm font-bold text-[#0F0F0F] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9B4B8] hover:bg-[#FAF9F9]"
                      >
                        Talk to Us
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Small form note */}

                    <p className="mt-4 font-sans text-[11px] leading-5 text-[#88858A]">
                      Download the sponsorship form to explore the opportunity
                      and get started.
                    </p>
                  </div>
                </div>

                {/* =========================================
                    RIGHT — PARTNERSHIP VALUE
                ========================================== */}

                <div className="relative border-t border-[#E5E1E3] bg-[#F8F4F5] px-7 py-10 sm:px-10 sm:py-11 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                  {/* Decorative circle */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-[#7A1F3D]/[0.045]"
                  />

                  <div className="relative">
                    {/* Icon */}

                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: MAROON }}
                    >
                      <Handshake
                        className="h-6 w-6 text-white"
                        strokeWidth={1.7}
                      />
                    </div>

                    <h4 className="font-display text-xl font-bold tracking-[-0.035em] text-[#0F0F0F] sm:text-2xl">
                      Why partner with us?
                    </h4>

                    <div className="mt-6 space-y-5">
                      <PartnershipPoint>
                        Support young entrepreneurs and student innovation.
                      </PartnershipPoint>

                      <PartnershipPoint>
                        Gain meaningful brand visibility within the university
                        community.
                      </PartnershipPoint>

                      <PartnershipPoint>
                        Help drive sustainable social impact through the Hult
                        Prize.
                      </PartnershipPoint>
                    </div>

                    {/* Accent */}

                    <div
                      aria-hidden="true"
                      className="mt-8 h-[2px] w-9 rounded-full"
                      style={{ backgroundColor: MAROON }}
                    />

                    <p className="mt-5 font-sans text-xs leading-5 text-[#777278]">
                      Together, we can build an ecosystem where ambitious
                      students can turn ideas into impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================
   PARTNERSHIP POINT
========================================= */

function PartnershipPoint({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-2 h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: MAROON }}
      />

      <p className="font-sans text-sm leading-6 text-[#55535A]">{children}</p>
    </div>
  );
}
