"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

import { campuses, districts } from "@/data/university-network";
import type { District } from "@/types/university-network";

export default function UniversityNetwork() {
  return (
    <main className="overflow-hidden">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#443B70] via-[#654266] to-[#98506F] text-white">
        {/* Very subtle texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <Container className="relative z-10">
          <div className="flex min-h-screen items-center justify-center py-28 sm:py-32">
            <div className="mx-auto max-w-5xl text-center">
              {/* Eyebrow */}

              <Reveal>
                <div className="mt-10 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#F58FBD] sm:w-14" />

                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.32em] text-[#FFD0E7] sm:text-[11px]">
                    University of Calcutta
                  </span>

                  <span className="h-px w-10 bg-[#F58FBD] sm:w-14" />
                </div>
              </Reveal>

              {/* Main title */}

              <Reveal delay={0.08}>
                <h1 className="mt-8 font-display text-5xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-[7rem]">
                  The{" "}
                  <span className="bg-linear-to-r from-[#f556f1] via-[#b545b5] to-[#b82c72] bg-clip-text text-transparent">
                    University
                  </span>
                  <br />
                  Network
                </h1>
              </Reveal>

              {/* Description */}

              <Reveal delay={0.15}>
                <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  Discover the campuses, institutions, and affiliated colleges
                  that together form the academic network of the University of
                  Calcutta.
                </p>
              </Reveal>


              {/* Supporting statement */}

              <Reveal delay={0.27}>
                <p className="mx-auto mt-7 max-w-xl font-sans text-sm leading-6 text-white/40 sm:text-base">
                  From historic central campuses to affiliated institutions
                  across West Bengal, the University connects a diverse academic
                  community through education, research, and innovation.
                </p>
              </Reveal>

              {/* ========================================================
            CTA BUTTONS
        ======================================================== */}

              <Reveal delay={0.34}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  {/* Campuses */}

                  <a
                    href="#campuses"
                    className="group inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#D6318C] px-6 py-3.5 font-sans text-sm font-bold text-white shadow-[0_10px_30px_rgba(214,49,140,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E23B97] hover:shadow-[0_14px_35px_rgba(214,49,140,0.3)]"
                  >
                    Explore Campuses
                    <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>

                  {/* Colleges */}

                  <a
                    href="#colleges"
                    className="group inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 font-sans text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12]"
                  >
                    Explore Colleges
                    <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Bottom gradient line */}

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF75C2]/60 to-transparent" />
      </section>

      {/* ============================================================
          MAIN DIRECTORY
      ============================================================ */}

      <Section
        id="university-network"
        className="relative overflow-hidden bg-gradient-to-br from-[#F7F5FF] via-[#FFF9FC] to-[#FFF4EC] py-20 sm:py-24 lg:py-28"
      >
        {/* Background decorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D9D5FF]/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#FFD8E8]/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FFE7D2]/25 blur-3xl"
        />

        <Container className="-mt-11 relative z-10">
          {/* ========================================================
              CAMPUSES
          ======================================================== */}

          <Reveal>
            <DirectoryHeading
              eyebrow="University Campuses"
              title={
                <>
                  Our{" "}
                  <span className="bg-gradient-to-r from-[#7867E8] via-[#D6318C] to-[#FF8E7A] bg-clip-text text-transparent">
                    Campuses
                  </span>
                </>
              }
              description="The University of Calcutta's campuses across the city and beyond."
            />
          </Reveal>

          <div id="campuses" className="mt-10 scroll-mt-8">
            {campuses.map((campus, index) => (
              <CampusRow
                key={campus.name}
                number={index + 1}
                name={campus.name}
                commonlyKnownAs={campus.commonlyKnownAs}
              />
            ))}
          </div>

          {/* ========================================================
              DIVIDER
          ======================================================== */}

          <div className="my-20 flex items-center gap-5 sm:my-24">
            <div className="h-px flex-1 bg-[#DCD7E7]" />

            <div className="relative flex h-5 w-5 items-center justify-center">
              <div className="absolute inset-0 rotate-45 rounded-[3px] bg-gradient-to-br from-[#7867E8] to-[#D6318C]" />
            </div>

            <div className="h-px flex-1 bg-[#DCD7E7]" />
          </div>

          {/* ========================================================
              AFFILIATED COLLEGES
          ======================================================== */}

          <Reveal>
            <DirectoryHeading
              eyebrow="Affiliated Colleges"
              title={
                <>
                  Colleges Across{" "}
                  <span className="bg-gradient-to-r from-[#D6318C] via-[#E875B2] to-[#FF9D7A] bg-clip-text text-transparent">
                    West Bengal
                  </span>
                </>
              }
              description="Explore the colleges affiliated with the University of Calcutta, organised by district."
            />
          </Reveal>

          <div
            id="colleges"
            className="mt-12 scroll-mt-8 space-y-16 sm:space-y-20"
          >
            {districts.map((district) => (
              <DistrictDirectory key={district.name} district={district} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

/* ============================================================
   DIRECTORY HEADING
============================================================ */

function DirectoryHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Eyebrow */}

      <div className="flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-gradient-to-r from-[#7867E8] to-[#D6318C]" />

        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#6A5CC7]">
          {eyebrow}
        </span>

        <span className="h-[2px] w-8 bg-gradient-to-r from-[#D6318C] to-[#FF9D7A]" />
      </div>

      {/* Title */}

      <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.045em] text-[#17132B] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}

      <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-[#66616D] sm:text-base">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   CAMPUS ROW
============================================================ */

function CampusRow({
  number,
  name,
  commonlyKnownAs,
}: {
  number: number;
  name: string;
  commonlyKnownAs?: string;
}) {
  return (
    <div className="group relative border-b border-[#DDD8E7] py-5 sm:py-6">
      {/* Hover gradient */}

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-full origin-left scale-x-0 bg-gradient-to-r from-[#F0ECFF] via-[#FFF3F9] to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center gap-4 sm:gap-6">
        {/* Number */}

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFEBFF] font-sans text-[10px] font-bold text-[#6255C7] ring-1 ring-[#D8D1FF] transition-all duration-300 group-hover:bg-[#6255C7] group-hover:text-white">
          {String(number).padStart(2, "0")}
        </span>

        {/* Name */}

        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-bold leading-6 tracking-[-0.015em] text-[#302D3A] transition-colors duration-300 group-hover:text-[#6255C7] sm:text-lg lg:text-xl">
            {name}

            {commonlyKnownAs && (
              <span className="ml-1.5 font-sans text-sm font-medium text-[#777185] sm:text-base">
                ({commonlyKnownAs})
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DISTRICT DIRECTORY
============================================================ */

function DistrictDirectory({ district }: { district: District }) {
  return (
    <div>
      {/* District heading */}

      <div className="mb-6 flex flex-col gap-3 border-b border-[#D9D4E2] pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#7867E8] to-[#D6318C]" />

          <h3 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#17132B] sm:text-3xl">
            {district.name}
          </h3>
        </div>

        <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#827A8E]">
          {district.colleges.length} colleges
        </span>
      </div>

      {/* Two-column college cards */}

      <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
        {district.colleges.map((college, index) => (
          <CollegeRow key={college} number={index + 1} name={college} />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   COLLEGE ROW
============================================================ */

function CollegeRow({ number, name }: { number: number; name: string }) {
  return (
    <div className="group relative flex min-h-[70px] items-center gap-4 overflow-hidden rounded-[14px] border border-[#E3DEE9] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(30,20,50,0.025)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#D5C9E3] hover:bg-[#FEFDFF] hover:shadow-[0_6px_18px_rgba(30,20,50,0.07)] lg:px-6">
      {/* Subtle left accent */}

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#7867E8] via-[#D6318C] to-[#FF9D7A] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Number */}

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F1FA] font-sans text-[9px] font-bold text-[#71678A] ring-1 ring-[#EAE5F1] transition-all duration-300 group-hover:bg-[#F0EBFF] group-hover:text-[#6255C7] group-hover:ring-[#DDD4F0]">
        {String(number).padStart(2, "0")}
      </span>

      {/* College name */}

      <span className="flex-1 font-sans text-[15px] font-semibold leading-6 text-[#514D59] transition-colors duration-300 group-hover:text-[#302D3A] sm:text-[16px]">
        {name}
      </span>
    </div>
  );
}
