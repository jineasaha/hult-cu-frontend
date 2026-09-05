"use client";

import { Mail, Phone, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MAROON = "#7A1F3D";
const HULT_PINK = "#E6007E";
const NAVY = "#0B1F3A";

type ContactPerson = {
  name: string;
  role?: string;
  department?: string;
  phone: string;
  email: string;
};

const contacts: ContactPerson[] = [
  {
    name: "Ashmit Das",
    role: "Campus Director",
    department: "Electronics and Communication Engineering",
    phone: "+91 6289208811",
    email: "ashmit4066@gmail.com",
  },
  {
    name: "Diksha Rani",
    role: "Deputy Campus Director",
    department: "Jute and Fibre Technology",
    phone: "+91 9472852163",
    email: "dikshabuilds@gmail.com",
  },
  {
    name: "Deblina Biswas",
    role: "Deputy Campus Director",
    department: "Information Technology",
    phone: "+91 8250515966",
    email: "deblinabiswas2024@gmail.com",
  },

  // Add future contacts here.
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-[#F6F2F3] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#7A1F3D]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFB3D1]/[0.14] blur-3xl"
      />

      {/* Decorative rings */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full border-[28px] border-[#7A1F3D]/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-72 w-72 rounded-full border-[32px] border-[#0B1F3A]/[0.035]"
      />

      <Container>
        <div className="relative mx-auto max-w-6xl">
          {/* =========================================
              HEADER
          ========================================== */}

          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
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
                  Get In Touch
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-9"
                  style={{ backgroundColor: MAROON }}
                />
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.05em] text-[#0F0F0F] sm:text-5xl lg:text-6xl">
                Let&apos;s <span style={{ color: MAROON }}>Connect</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-[#55535A] sm:text-base">
                Have a question about the Hult Prize, recruitment, partnerships,
                or getting involved? Reach out to our campus leadership team.
              </p>
            </div>
          </Reveal>

          {/* =========================================
              CONTACT CARDS
          ========================================== */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact, index) => (
              <Reveal key={contact.name} delay={index * 0.07}>
                <ContactCard contact={contact} />
              </Reveal>
            ))}
          </div>

          {/* =========================================
              BOTTOM CTA
          ========================================== */}

          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:ashmit4066@gmail.com"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-7 py-3 font-sans text-sm font-bold text-white shadow-[0_8px_24px_rgba(122,31,61,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(122,31,61,0.28)]"
                style={{ backgroundColor: MAROON }}
              >
                Contact the Hult Prize Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Bottom label */}

          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C8C3C6]" />

              <span
                className="font-sans text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: MAROON }}
              >
                We&apos;re Here To Help
              </span>

              <span className="h-px w-8 bg-[#C8C3C6]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================
   CONTACT CARD
========================================= */

function ContactCard({ contact }: { contact: ContactPerson }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#DED7DA] bg-white shadow-[0_12px_35px_rgba(15,15,15,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,15,15,0.10)]">
      {/* Maroon accent */}

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: MAROON }}
      />

      <div className="relative flex h-full flex-col px-6 py-7 sm:px-7">
        {/* =========================================
            HEADER
        ========================================== */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-[#0F0F0F] sm:text-[22px]">
              {contact.name}
            </h3>

            {contact.role && (
              <p
                className="mt-1.5 font-sans text-sm font-bold"
                style={{ color: NAVY }}
              >
                {contact.role}
              </p>
            )}
          </div>

          {/* Contact icon */}

          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: "#F8EEF2" }}
          >
            <Phone
              className="h-[18px] w-[18px]"
              style={{ color: MAROON }}
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Department */}

        {contact.department && (
          <p className="mt-3 max-w-[280px] font-sans text-xs font-medium leading-5 text-[#6B676C]">
            {contact.department}
          </p>
        )}

        {/* Divider */}

        <div className="my-5 h-px w-full bg-[#E8E5E6]" />

        {/* =========================================
            PHONE
        ========================================== */}

        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="group/link flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-[#F8F3F5]"
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: "#F8EEF2" }}
          >
            <Phone
              className="h-4 w-4"
              style={{ color: MAROON }}
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A8589]">
              Phone
            </p>

            <p className="mt-0.5 truncate font-sans text-sm font-semibold text-[#2A292B] group-hover/link:text-[#7A1F3D]">
              {contact.phone}
            </p>
          </div>
        </a>

        {/* =========================================
            EMAIL
        ========================================== */}

        <a
          href={`mailto:${contact.email}`}
          className="group/link mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-[#F8F3F5]"
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: "#F8EEF2" }}
          >
            <Mail
              className="h-4 w-4"
              style={{ color: MAROON }}
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A8589]">
              Email
            </p>

            <p className="mt-0.5 truncate font-sans text-sm font-semibold text-[#2A292B] group-hover/link:text-[#7A1F3D]">
              {contact.email}
            </p>
          </div>
        </a>

        {/* Bottom accent */}

        <div className="mt-auto pt-5">
          <div
            aria-hidden="true"
            className="h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-12"
            style={{ backgroundColor: HULT_PINK }}
          />
        </div>
      </div>
    </article>
  );
}
