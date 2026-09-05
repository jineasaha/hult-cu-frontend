"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MAROON = "#7A1F3D";

type TechnicalSponsor = {
  name: string;
  logo: string;
  href?: string;
};

const technicalSponsors: TechnicalSponsor[] = [
  {
    name: "IEEE APS",
    logo: "/images/sponsors/IEEE-APS.png",
  },
  {
    name: "IEEE Student Branch CU",
    logo: "/images/sponsors/IEEE-CU.jpg",
  },
  {
    name: "IEEE Instrumentation & Measurement Society",
    logo: "/images/sponsors/IEEE-IMS.png",
  },
  {
    name: "IEEE MTT-S",
    logo: "/images/sponsors/IEEE-MTTS.png",
  },
  {
    name: "IEEE Photonics Society",
    logo: "/images/sponsors/IEEE-PS.jpg",
  },

  // Add future sponsors here.
];

export function TechnicalSponsors() {
  return (
    <Section
      id="technical-sponsors"
      className="relative overflow-hidden bg-[#E9E5E7] py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================
          SUBTLE SECTION BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#7A1F3D]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#0B1F3A]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl"
      />

      {/* Decorative circles */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-64 w-64 rounded-full border-[26px] border-[#7A1F3D]/[0.055]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-72 w-72 rounded-full border-[32px] border-[#0B1F3A]/[0.04]"
      />

      <Container>
        {/* =========================================
            HEADER
        ========================================== */}

        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: MAROON }} />

              <span
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{ color: MAROON }}
              >
                Technical Partners
              </span>

              <span className="h-px w-8" style={{ backgroundColor: MAROON }} />
            </div>

            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-[#0F0F0F] sm:text-5xl">
              Built With{" "}
              <span className="bg-gradient-to-r from-[#0F0F0F] via-[#E6007E] to-[#741E3F] bg-clip-text text-transparent">
                Great Partners
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-6 text-[#3F4148] sm:text-base">
              Our technical sponsors help power the tools, technology, and
              digital experience behind the Hult Prize journey.
            </p>
          </div>
        </Reveal>

        {/* =========================================
            GLASS SPONSOR CONTAINER
        ========================================== */}

        <div className="relative mx-auto max-w-6xl">
          {/* Ambient light behind glass */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-[#7A1F3D]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 bottom-1/3 h-56 w-56 rounded-full bg-[#0B1F3A]/10 blur-3xl"
          />

          {/* Main glass panel */}

          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/45 shadow-[0_25px_70px_rgba(11,31,58,0.12)] backdrop-blur-xl">
            {/* Glass reflection */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/35 to-transparent"
            />

            <div className="relative flex flex-wrap justify-center">
              {technicalSponsors.map((sponsor, index) => (
                <Reveal
                  key={sponsor.name}
                  delay={index * 0.06}
                  className="w-1/2 md:w-1/3"
                >
                  <SponsorCard sponsor={sponsor} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM NOTE
        ========================================== */}

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center">
            {/* Network label */}

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8B4B8]" />

              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#65616A]">
                Growing Our Technical Network
              </p>

              <span className="h-px w-8 bg-[#B8B4B8]" />
            </div>

            {/* Large CTA */}

            <a
              href="#partner"
              className="group relative mt-6 inline-flex min-h-[56px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F4B400] px-9 py-3.5 font-sans text-base font-extrabold text-[#0F0F0F] shadow-[0_10px_30px_rgba(244,180,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(244,180,0,0.35)]"
            >
              {/* Hover highlight */}

              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"
              />

              <span className="relative z-10">Partner With Hult Prize</span>

              <span className="relative z-10 text-xl leading-none transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>

            <p className="mt-3 text-center font-sans text-xs text-[#777278]">
              Interested in supporting the next generation of changemakers?
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* =========================================
   SPONSOR CARD
========================================= */

function SponsorCard({ sponsor }: { sponsor: TechnicalSponsor }) {
  const content = (
    <div className="group relative flex min-h-[190px] items-center justify-center border-b border-r border-white/55 bg-white/25 px-6 py-8 transition-all duration-300 hover:bg-white/40 sm:min-h-[210px] sm:px-8 lg:min-h-[225px] lg:px-10">
      {/* Glass inner surface */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/35 bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:bg-white/[0.10] group-hover:opacity-100"
      />

      {/* Soft sponsor glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-28 w-28 rounded-full bg-white/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Logo */}

      <div className="relative flex h-[120px] w-full max-w-[270px] items-center justify-center transition-transform duration-500 group-hover:scale-[1.04] sm:h-[130px] sm:max-w-[290px] lg:h-[145px] lg:max-w-[320px]">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 320px"
        />
      </div>
    </div>
  );

  if (sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name}`}
      >
        {content}
      </a>
    );
  }

  return content;
}
