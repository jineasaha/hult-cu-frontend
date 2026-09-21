"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const HULT_PINK = "#d6318c";
const BLUE_ACCENT = "#002196";

const faculties = [
  {
    name: "Prof. Swapan Kumar Ghosh",
    designation:
      "Teacher-in-charge, Hult Prize On-Campus, University of Calcutta",
    department:
      "Prof., Department of Jute and Fibre Technology, Institute of Jute and Fibre Technology, University of Calcutta",
    image: "/images/default/man.png",
  },
  {
    name: "Dr. Rajarshi Gupta",
    designation:
      "Convenor, Institution's Innovative Council, University of Calcutta",
    department: "Prof., Department of Applied Physics, University of Calcutta",
    image: "/images/default/man.png",
  },
];

export function FacultySection() {
  return (
    <Section
      id="faculty"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 z-0 h-64 w-64 rounded-full border-[28px] border-[#FFE6F1] opacity-70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 z-0 h-72 w-72 rounded-full border-[35px] border-[#FFE6F1] opacity-60"
      />

      <Container className="relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: HULT_PINK }}
              />

              <span
                className="font-sans text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: HULT_PINK }}
              >
                Academic Community
              </span>

              <span
                className="h-px w-8"
                style={{ backgroundColor: HULT_PINK }}
              />
            </div>

            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-[#0F0F0F] sm:text-5xl">
              Faculties <span style={{ color: HULT_PINK }}>Involved</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-6 text-[#4B4B4B] sm:text-base">
              Faculty members supporting and guiding the Hult Prize journey at
              the University of Calcutta.
            </p>
          </div>
        </Reveal>

        {/* Faculty members */}
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14">
            {faculties.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <FacultyProfile person={person} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Faculty recruitment */}
        <Reveal delay={0.16}>
          <FacultyRecruitmentCard />
        </Reveal>
      </Container>
    </Section>
  );
}

/* ============================================================
   FACULTY PROFILE
============================================================ */

function FacultyProfile({
  person,
}: {
  person: {
    name: string;
    designation: string;
    department: string;
    image: string;
  };
}) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[280px] overflow-hidden rounded-[24px] bg-[#F4F4F6]">
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-125"
          style={{ backgroundColor: BLUE_ACCENT }}
        />

        <Image
          src={person.image}
          alt={person.name}
          fill
          className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 40vw, 280px"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 z-20 h-1"
          style={{ backgroundColor: BLUE_ACCENT }}
        />
      </div>

      <h4 className="mx-auto mt-5 max-w-[300px] font-display text-xl font-bold leading-tight tracking-[-0.025em] text-[#0F0F0F]">
        {person.name}
      </h4>

      <p
        className="mx-auto mt-2 max-w-[320px] font-sans text-sm font-semibold leading-5"
        style={{ color: BLUE_ACCENT }}
      >
        {person.designation}
      </p>

      <p className="mx-auto mt-2 max-w-[320px] font-sans text-xs leading-5 text-[#4B4B4B]">
        {person.department}
      </p>
    </article>
  );
}

/* ============================================================
   FACULTY RECRUITMENT
============================================================ */

function FacultyRecruitmentCard() {
  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <div className="relative overflow-hidden rounded-[18px] border border-[#F4B400]/25 bg-[#FFF9E8] px-5 py-5 sm:px-7 sm:py-5">
        <div
          aria-hidden="true"
          className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-[#F4B400]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full border-[10px] border-[#F4B400]/10"
        />

        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="text-center sm:text-left">
            <div className="mb-1.5 flex items-center justify-center gap-2 sm:justify-start">
              <span
                className="h-px w-5"
                style={{ backgroundColor: "#F4B400" }}
              />

              <span
                className="font-sans text-[9px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#B47D00" }}
              >
                Join Our Academic Network
              </span>
            </div>

            <h4 className="font-display text-lg font-bold tracking-[-0.035em] text-[#0F0F0F] sm:text-xl">
              We’re looking for more faculty contact points.
            </h4>

            <p className="mt-1.5 max-w-xl font-sans text-xs leading-5 text-[#4B4B4B] sm:text-sm">
              We’re looking for more faculty contact points from each university
              campus to expand our academic outreach. Faculty members interested
              in collaborating or serving as campus contacts are encouraged to
              connect with us.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#F4B400] px-5 py-2.5 font-sans text-xs font-bold text-[#0F0F0F] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
