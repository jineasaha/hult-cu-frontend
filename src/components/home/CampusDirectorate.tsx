"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const HULT_PINK = "#d6318c";
const BLUE_ACCENT = "#002196";

const directorate = [
  {
    name: "Ashmit Das",
    role: "Campus Director",
    department: "Electronics and Communication Engineering",
    tagline: "Driving the vision and direction of the campus journey.",
    image: "/images/directorate/ashmit.jpg",
  },
  {
    name: "Diksha Rani",
    role: "Deputy Campus Director",
    department: "Jute and Fibre Technology",
    tagline: "Building connections and turning ideas into action.",
    image: "/images/directorate/diksha.jpg",
  },
  {
    name: "Deblina Biswas",
    role: "Deputy Campus Director",
    department: "Information Technology",
    tagline: "Creating momentum and shaping the Hult Prize experience.",
    image: "/images/directorate/deblina.jpg",
  },
];

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

export function CampusDirectorate() {
  return (
    <Section
      id="directorate"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle decorative background */}

      <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-32 top-20 z-0 h-64 w-64 rounded-full border-[28px] border-[#FFE6F1] opacity-70"
      />

      <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-40 -right-32 z-0 h-72 w-72 rounded-full border-[35px] border-[#FFE6F1] opacity-60"
      />

      <Container className="relative z-10">
        {/* =========================
            SECTION HEADER
        ========================== */}

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
                Leadership & Community
              </span>

              <span
                className="h-px w-8"
                style={{ backgroundColor: HULT_PINK }}
              />
            </div>

            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-[#0F0F0F] sm:text-5xl">
              The People Behind{" "}
              <span style={{ color: HULT_PINK }}>Hult Prize</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-6 text-[#4B4B4B] sm:text-base">
              Meet the leadership and academic community supporting the Hult
              Prize journey at the University of Calcutta.
            </p>
          </div>
        </Reveal>

        {/* =========================
              FACULTIES
          ========================== */}

        <Reveal>
          <div>
            <SectionTitle
              eyebrow="Academic Community"
              title="Faculties Involved"
            />

            {/* Teachers */}

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14">
              {faculties.map((person, index) => (
                <Reveal key={person.name} delay={index * 0.08}>
                  <FacultyProfile person={person} />
                </Reveal>
              ))}
            </div>

            {/* Faculty Recruitment Advertisement */}

            <Reveal delay={0.16}>
              <FacultyRecruitmentCard />
            </Reveal>
          </div>
        </Reveal>

        {/* =========================
            DIVIDER
        ========================== */}

        <div className="my-14 flex items-center gap-5 sm:my-16">
          <div className="h-px flex-1 bg-[#E7E7EA]" />

          <div
            className="h-2 w-2 rotate-45"
            style={{ backgroundColor: BLUE_ACCENT }}
          />

          <div className="h-px flex-1 bg-[#E7E7EA]" />
        </div>

        {/* =========================
            CAMPUS DIRECTORATE
        ========================== */}

        <Reveal>
          <div className="mb-10">
            <SectionTitle
              eyebrow="Campus Leadership"
              title="Campus Directorate"
            />

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {directorate.map((person, index) => (
                <Reveal key={person.name + index} delay={index * 0.08}>
                  <PersonProfile person={person} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* =========================================
   SECTION TITLE
========================================= */

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span
        className="font-sans text-[10px] font-bold uppercase tracking-[0.28em]"
        style={{ color: BLUE_ACCENT }}
      >
        {eyebrow}
      </span>

      <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.035em] text-[#0F0F0F] sm:text-3xl">
        {title}
      </h3>

      <div
        className="mx-auto mt-3 h-[2px] w-8"
        style={{ backgroundColor: BLUE_ACCENT }}
      />
    </div>
  );
}

/* =========================================
   CAMPUS DIRECTORATE PROFILE
========================================= */

function PersonProfile({
  person,
}: {
  person: {
    name: string;
    role: string;
    department: string;
    tagline: string;
    image: string;
  };
}) {
  return (
    <article className="group mx-auto w-full max-w-[500px]">
      {/* =========================================
          PROFILE CARD
      ========================================== */}

      <div className="relative overflow-hidden rounded-[26px] border border-[#DFDFE3] bg-white shadow-[0_12px_35px_rgba(15,15,15,0.07)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(15,15,15,0.11)]">
        <div className="grid grid-cols-[1.08fr_0.92fr]">
          {/* =========================================
              PHOTO
          ========================================== */}

          <div className="relative aspect-[4/4.7] overflow-hidden bg-[#F4F4F6]">
            {/* Decorative blue shape */}

            <div
              aria-hidden="true"
              className="absolute -bottom-14 -left-14 h-36 w-36 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-125"
              style={{ backgroundColor: BLUE_ACCENT }}
            />

            <Image
              src={person.image}
              alt={person.name}
              fill
              className="relative z-10 object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 500px"
            />

            {/* Photo accent */}

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 z-20 h-1"
              style={{ backgroundColor: BLUE_ACCENT }}
            />
          </div>

          {/* =========================================
              DETAILS
          ========================================== */}

          <div className="flex flex-col justify-center px-5 py-7 sm:px-6">
            {/* Name */}

            <h4 className="font-display text-xl font-bold leading-tight tracking-[-0.035em] text-[#0F0F0F] sm:text-[22px]">
              {person.name}
            </h4>

            {/* Role */}

            <p
              className="mt-2 font-sans text-sm font-bold leading-5"
              style={{ color: BLUE_ACCENT }}
            >
              {person.role}
            </p>

            {/* Department */}

            <p className="mt-2 font-sans text-[13px] font-medium leading-5 text-[#555555] sm:text-sm">
              {person.department}
            </p>

            {/* Accent line */}

            <div
              aria-hidden="true"
              className="mt-5 h-[2px] w-9 rounded-full"
              style={{ backgroundColor: "#E6007E" }}
            />
          </div>
        </div>
      </div>

      {/* =========================================
          TAGLINE BOX
      ========================================== */}

      <div className="relative mt-3 overflow-hidden rounded-[18px] border border-[#E8D9DF] bg-[#FBF5F7] px-5 py-4 shadow-[0_6px_20px_rgba(122,31,61,0.04)] transition-all duration-300 group-hover:border-[#E3C4D0] group-hover:bg-[#FAF1F4]">
        {/* Left accent */}

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-1"
          style={{ backgroundColor: HULT_PINK }}
        />

        <div className="flex items-start gap-3 pl-1">
          {/* Quote mark */}

          <span
            aria-hidden="true"
            className="font-display text-2xl font-bold leading-none"
            style={{ color: "#E6007E" }}
          >
            “
          </span>

          {/* Tagline */}

          <p
            className="pt-0.5 font-display text-[14px] font-semibold leading-6 tracking-[-0.01em] sm:text-[15px]"
            style={{ color: "#7A1F3D" }}
          >
            {person.tagline}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================
   FACULTY PROFILE
========================================= */

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
      {/* Photo */}

      <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[280px] overflow-hidden rounded-[24px] bg-[#F4F4F6]">
        {/* Blue accent behind image */}

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

        {/* Bottom accent */}

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 z-20 h-1"
          style={{ backgroundColor: BLUE_ACCENT }}
        />
      </div>

      {/* Name */}

      <h4 className="mx-auto mt-5 max-w-[300px] font-display text-xl font-bold leading-tight tracking-[-0.025em] text-[#0F0F0F]">
        {person.name}
      </h4>

      {/* Designation */}

      <p
        className="mx-auto mt-2 max-w-[320px] font-sans text-sm font-semibold leading-5"
        style={{ color: BLUE_ACCENT }}
      >
        {person.designation}
      </p>

      {/* Department */}

      <p className="mx-auto mt-2 max-w-[320px] font-sans text-xs leading-5 text-[#4B4B4B]">
        {person.department}
      </p>
    </article>
  );
}

/* =========================================
   FACULTY RECRUITMENT AD
========================================= */

function FacultyRecruitmentCard() {
  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <div className="relative overflow-hidden rounded-[18px] border border-[#F4B400]/25 bg-[#FFF9E8] px-5 py-5 sm:px-7 sm:py-5">
        {/* Decorative shapes */}
        <div
          aria-hidden="true"
          className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-[#F4B400]/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full border-[10px] border-[#F4B400]/10"
        />

        <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          {/* Text */}
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

          {/* CTA */}
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
