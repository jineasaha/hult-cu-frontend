"use client";

import { useState } from "react";
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
      "Teacher-in-charge, HultPrize On-campus University of Calcutta and Campus co-ordinator of Ballygunge Science College campus",
    emails: ["skgjft@caluniv.ac.in"],
    image: "/images/faculty/swapan_kumar_ghosh.png",
  },
  {
    name: "Dr. Shampa Guin",
    designation:
      "Professor, Institute of Radiophysics and Electronics, IIC Coordinator HultPrize and Campus co-ordinator of Rajabazar Science College campus",
    emails: ["sgrpe@caluniv.ac.in"],
    image: "/images/faculty/shampa_guin.jpg",
  },
  {
    name: "Dr. Rajarshi Gupta",
    designation: "IIC Convenor, University of Calcutta",
    emails: [
      "convener.iic-cu@caluniv.ac.in",
      "rgaphy@caluniv.ac.in",
    ],
    image: "/images/faculty/rajarshi_gupta.jpg",
  },
  {
    name: "Dr. Sharmistha Banerjee",
    designation:
      "Professor and HOD, Department of MBA. Campus co-ordinator HultPrize from Alipore Campus University of Calcutta.",
    emails: ["sharmisthabanerjee@hotmail.com"],
    image: "/images/faculty/sharmistha_banerjee.jpg",
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

      <Container className="-mt-10 relative z-10">
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
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
            {faculties.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <FacultyProfile person={person} />
              </Reveal>
            ))}
          </div>
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
    emails: string[];
    image: string;
  };
}) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);

      setTimeout(() => {
        setCopiedEmail(null);
      }, 2000);
    } catch {
      // Fallback for browsers where Clipboard API is unavailable
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopiedEmail(email);

        setTimeout(() => {
          setCopiedEmail(null);
        }, 2000);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

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
          className="relative z-10 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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

      {/* Email strip */}
      <div className="mx-auto mt-3 flex w-full max-w-[320px] items-center justify-between gap-3 rounded-xl border border-[#E9E9EE] bg-[#FAFAFC] px-3 py-2.5 text-left shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="flex min-w-0 items-center gap-2.5">
          {/* Email icon */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke={HULT_PINK}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>

          <div className="min-w-0">

            <span className="truncate font-sans text-[15px] leading-5 text-[#4B4B4B]">
              {person.emails[0]}
            </span>
          </div>
        </div>

        {/* Copy button for first email */}
        <button
          type="button"
          onClick={() => handleCopy(person.emails[0])}
          aria-label={
            copiedEmail === person.emails[0]
              ? "Email copied"
              : "Copy email address"
          }
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E5E5EA] bg-white text-[#555] transition-all duration-200 hover:border-[#d6318c]/30 hover:bg-[#FFF5FA] hover:text-[#d6318c] active:scale-95"
        >
          {copiedEmail === person.emails[0] ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      {/* Additional email strips */}
      {person.emails.slice(1).map((email) => (
        <div
          key={email}
          className="mx-auto mt-2 flex w-full max-w-[320px] items-center justify-between gap-3 rounded-xl border border-[#E9E9EE] bg-[#FAFAFC] px-3 py-2.5 text-left shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke={HULT_PINK}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <div className="min-w-0">

              <p className="truncate font-sans text-[15px] leading-5 text-[#4B4B4B]">
                {email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(email)}
            aria-label={
              copiedEmail === email ? "Email copied" : "Copy email address"
            }
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E5E5EA] bg-white text-[#555] transition-all duration-200 hover:border-[#d6318c]/30 hover:bg-[#FFF5FA] hover:text-[#d6318c] active:scale-95"
          >
            {copiedEmail === email ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="#16A34A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      ))}
    </article>
  );
}