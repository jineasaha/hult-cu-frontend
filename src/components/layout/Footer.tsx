"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";

const MAROON = "#7A1F3D";
const HULT_PINK = "#E6007E";
const NAVY = "#071A33";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: NAVY }}
    >
      {/* =========================================
          BACKGROUND DETAILS
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[35px] border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full border-[40px] border-[#7A1F3D]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#7A1F3D]/10 blur-3xl"
      />

      <Container>
        <div className="relative">
          {/* =========================================
              MAIN FOOTER
          ========================================== */}

          <div className="grid gap-12 pt-16 pb-10 sm:pt-20 sm:pb-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20 lg:pt-24 lg:pb-10">
            {/* =========================================
                BRAND
            ========================================== */}

            <div className="max-w-2xl">
              {/* Brand mark */}

              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: MAROON }}
                >
                  <span className="font-display text-lg font-extrabold text-white">
                    H
                  </span>
                </div>

                <div>
                  <p className="font-display text-lg font-extrabold tracking-[-0.025em]">
                    HULT PRIZE
                  </p>

                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                    University of Calcutta
                  </p>
                </div>
              </div>

              {/* Main statement */}

              <h2 className="mt-8 max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Ideas that matter.
                <br />
                <span style={{ color: "#FFB3D1" }}>Impact that lasts.</span>
              </h2>

              <p className="mt-5 max-w-lg font-sans text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                Hult Prize at the University of Calcutta brings together
                students, mentors, faculty, and partners to turn bold ideas into
                meaningful social impact.
              </p>

              <a
                href="https://www.hultprize.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-hult-pink px-4 py-2 font-sans text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFB3D1]/40 hover:bg-[#c9006f]"
              >
                <span>Visit Hult Prize Global</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* =========================================
                NAVIGATION
            ========================================== */}

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2">
              {/* Explore */}

              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  Explore
                </p>

                <nav className="mt-5 flex flex-col gap-3.5">
                  <FooterLink href="/">Home</FooterLink>

                  <FooterLink href="/committee-recruitment">
                    Recruitment
                  </FooterLink>

                  <FooterLink href="/#technical-sponsors">Sponsers</FooterLink>

                  <FooterLink href="/#about">About Hult Prize</FooterLink>

                  <FooterLink href="/#timeline">Timeline</FooterLink>
                </nav>
              </div>

              {/* Connect */}

              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  Connect
                </p>

                <nav className="mt-5 flex flex-col gap-3.5">
                  <FooterLink href="/#contact">Contact</FooterLink>

                  <FooterLink href="/#partner">Become a Sponsor</FooterLink>
                </nav>

                {/* Social */}

                <div className="mt-7 flex items-center gap-2.5">
                  <SocialLink
                    href="https://www.instagram.com/hultprizecaluniv?igsi=aGw3Y2JueG01ZXgw"
                    label="Instagram"
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[17px] w-[17px]"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />

                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    }
                  />

                  <SocialLink
                    href="https://www.linkedin.com/company/hult-prize-university-of-calcutta/"
                    label="LinkedIn"
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[17px] w-[17px]"
                        aria-hidden="true"
                      >
                        <path d="M5.2 3.5C4 3.5 3 4.5 3 5.7s1 2.2 2.2 2.2 2.2-1 2.2-2.2S6.4 3.5 5.2 3.5ZM3.4 9.2h3.6V21H3.4V9.2ZM9.2 9.2h3.4v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9.7V9.2h-.5Z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              BOTTOM BAR
          ========================================== */}

          <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[11px] leading-5 text-white/35">
              © {new Date().getFullYear()} Hult Prize University of Calcutta.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/25">
                Hult Prize 2026–27
              </span>

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rotate-45"
                style={{ backgroundColor: HULT_PINK }}
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* =========================================
   FOOTER LINK
========================================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-1.5 font-sans text-sm text-white/60 transition-colors duration-300 hover:text-white"
    >
      <span>{children}</span>

      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

/* =========================================
   SOCIAL LINK
========================================= */

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      {icon}
    </a>
  );
}
