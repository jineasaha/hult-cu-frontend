"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const HULT_PINK = "#d6318c";
const BLUE_ACCENT = "#002196";

type Person = {
  name: string;
  role?: string;
  department?: string;
  image?: string;
  tagline?: string;
};

type Team = {
  name: string;
  shortName: string;
  description: string;
  members: Person[];
};

const directorate: Person[] = [
  {
    name: "Ashmit Das",
    role: "Campus Director",
    department: "Electronics and Communication Engineering",
    image: "/images/directorate/ashmit.jpg",
    tagline: "Driving the vision and direction of the campus journey.",
  },
  {
    name: "Diksha Rani",
    role: "Deputy Campus Director",
    department: "Jute and Fibre Technology",
    image: "/images/directorate/diksha.jpg",
    tagline: "Building connections and turning ideas into action.",
  },
  {
    name: "Deblina Biswas",
    role: "Deputy Campus Director",
    department: "Information Technology",
    image: "/images/directorate/deblina.jpg",
    tagline: "Creating momentum and shaping the Hult Prize experience.",
  },
];

const teams: Team[] = [
  {
    name: "Technical & Website Building",
    shortName: "Technology",
    description:
      "Driving the digital presence of Hult Prize OnCampus, University of Calcutta",
    members: [
      {
        name: "Jinea Saha",
        department: "Computer Science and Engineering",
        image: "/images/committee/jinea.jpg",
      },
      {
        name: "Rajdeep Sarkar",
        department: "Computer Science and Engineering",
        image: "/images/committee/Rajdeep Sarkar.png",
      },
    ],
  },

  {
    name: "Ground Operations & Volunteering Management",
    shortName: "Ground Operations",
    description:
      "Managing on-ground operations and coordinating volunteering activities.",
    members: [
      {
        name: "Toufik Jamal Mondal",
        department: "DEPARTMENT",
        image: "/images/committee/Toufik Jamal Mondal.jpg",
      },
      {
        name: "Shreya Gupta",
        department: "DEPARTMENT",
        image: "/images/committee/Shreya Gupta.jpg",
      },
    ],
  },

  {
    name: "Team Registration & Participants Coordination",
    shortName: "Registration & Participants",
    description:
      "Coordinating participant registration and supporting the participant journey.",
    members: [
      {
        name: "Bazilur Rahman Bazigh",
        department: "DEPARTMENT",
        image: "/images/committee/Bazilur Rahman Bazigh.jpeg",
      },
    ],
  },

  {
    name: "Judge & Mentor Coordination",
    shortName: "Judges & Mentors",
    description:
      "Supporting communication and coordination with judges and mentors.",
    members: [
      {
        name: "Saheli Chatterjee",
        department: "DEPARTMENT",
        image: "/images/committee/Saheli Chatterjee_.jpg",
      },
    ],
  },

  {
    name: "Business Partnership & Sponsorship",
    shortName: "Partnerships & Sponsorship",
    description:
      "Building relationships with partners and supporting sponsorship initiatives.",
    members: [
      {
        name: "Bhavita Rai",
        department: "DEPARTMENT",
        image: "/images/committee/Bhavita Rai.jpg",
      },
      {
        name: "Angellena Basu",
        department: "DEPARTMENT",
        image: "/images/committee/Angellena Basu_.jpg",
      },
      {
        name: "Suvam Kar",
        department: "DEPARTMENT",
        image: "/images/committee/Suvam Kar.png",
      },
    ],
  },

  {
    name: "Design, Creative & Documentation",
    shortName: "Design & Creative",
    description:
      "Creating visual communication, creative assets and documenting the cohort.",
    members: [
      {
        name: "Siddhi Kumari",
        department: "DEPARTMENT",
        image: "/images/committee/Siddhi kumari.jpg",
      },
      {
        name: "Mrittika Rudra",
        department: "DEPARTMENT",
        image: "/images/committee/Mrittika Rudra_.jpg",
      },
      {
        name: "Shivani Singh",
        department: "DEPARTMENT",
        image: "/images/committee/Shivani Singh.jpg",
      },
    ],
  },

  {
    name: "Marketing, PR & Communications",
    shortName: "Marketing & Communications",
    description:
      "Driving communication, outreach, public relations and campaign visibility.",
    members: [
      {
        name: "Anukta Goswami",
        department: "DEPARTMENT",
        image: "/images/default/man.png",
      },
      {
        name: "Soham Ray",
        department: "DEPARTMENT",
        image: "/images/committee/Soham Ray.png",
      },
      {
        name: "Shreyashi Bera",
        department: "DEPARTMENT",
        image: "/images/committee/ShreyashiBera.jpg",
      },
      {
        name: "Pritam Dey",
        department: "DEPARTMENT",
        image: "/images/committee/Pritam Dey.png",
      },
    ],
  },
];

export function StudentCommittee() {
  return (
    <Section
      id="student-committee"
      className="relative overflow-hidden bg-[#FAF9FA] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border-[32px] border-[#FFE6F1] opacity-60"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full border-[35px] border-[#FFE6F1] opacity-60"
      />

      <Container className="relative z-10">
        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: HULT_PINK }}
              />

              <span
                className="font-sans text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: HULT_PINK }}
              >
                Student Leadership & Teams
              </span>

              <span
                className="h-px w-8"
                style={{ backgroundColor: HULT_PINK }}
              />
            </div>

            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-[#0F0F0F] sm:text-5xl">
              Meet the{" "}
              <span style={{ color: HULT_PINK }}>Student Committee</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-6 text-[#4B4B4B] sm:text-base">
              The students working together to build the Hult Prize experience
              at the University of Calcutta.
            </p>
          </div>
        </Reveal>

        {/* ======================================================
            CAMPUS DIRECTORATE
        ====================================================== */}

        <Reveal>
          <SectionHeading
            eyebrow="Student Leadership"
            title="Campus Directorate"
          />

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {directorate.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <DirectorateCard person={person} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ======================================================
            STUDENT TEAMS
        ====================================================== */}

        <Divider />

        <Reveal>
          <SectionHeading
            eyebrow="Our Committees"
            title="One Team. One Vision."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {teams.map((team, index) => (
              <Reveal
                key={team.name}
                delay={index * 0.06}
                className={index === teams.length - 1 ? "lg:col-span-2" : ""}
              >
                <TeamCard team={team} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
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

/* ============================================================
   DIVIDER
============================================================ */

function Divider() {
  return (
    <div className="my-14 flex items-center gap-5 sm:my-16">
      <div className="h-px flex-1 bg-[#E7E7EA]" />

      <div
        className="h-2 w-2 rotate-45"
        style={{ backgroundColor: BLUE_ACCENT }}
      />

      <div className="h-px flex-1 bg-[#E7E7EA]" />
    </div>
  );
}

/* ============================================================
   DIRECTORATE CARD
============================================================ */

function DirectorateCard({ person }: { person: Person }) {
  return (
    <article className="group mx-auto w-full max-w-[500px]">
      {/* Main profile card */}
      <div className="relative overflow-hidden rounded-[26px] border border-[#DFDFE3] bg-white shadow-[0_12px_35px_rgba(15,15,15,0.07)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(15,15,15,0.11)]">
        <div className="grid grid-cols-[1.08fr_0.92fr]">
          <div className="relative aspect-[4/4.7] overflow-hidden bg-[#F4F4F6]">
            <Image
              src={person.image!}
              alt={person.name}
              fill
              className="relative z-10 object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 500px"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 z-20 h-1"
              style={{ backgroundColor: BLUE_ACCENT }}
            />
          </div>

          <div className="flex flex-col justify-center px-5 py-7 sm:px-6">
            <h4 className="font-display text-xl font-bold leading-tight tracking-[-0.035em] text-[#0F0F0F] sm:text-[22px]">
              {person.name}
            </h4>

            <p
              className="mt-2 font-sans text-sm font-bold leading-5"
              style={{ color: BLUE_ACCENT }}
            >
              {person.role}
            </p>

            <p className="mt-2 font-sans text-[13px] font-medium leading-5 text-[#555555] sm:text-sm">
              {person.department}
            </p>

            <div
              aria-hidden="true"
              className="mt-5 h-[2px] w-9 rounded-full"
              style={{ backgroundColor: HULT_PINK }}
            />
          </div>
        </div>
      </div>

      {/* Tagline */}
      {person.tagline && (
        <div className="relative mt-4 overflow-hidden rounded-[20px] border border-[#F0D6E1] bg-[#FFF8FB] px-6 py-5">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-1"
            style={{ backgroundColor: HULT_PINK }}
          />

          <div className="flex gap-3">
            <span
              aria-hidden="true"
              className="font-display text-xl font-bold leading-none"
              style={{ color: HULT_PINK }}
            >
              “
            </span>

            <p className="font-sans text-m font-medium leading-6 text-[#8A234D]">
              {person.tagline}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

/* ============================================================
   TEAM CARD
============================================================ */

function TeamCard({ team }: { team: Team }) {
  return (
    <article className="group relative min-h-[430px] h-auto overflow-hidden rounded-[26px] border border-[#E5E2E5] bg-white p-6 shadow-[0_8px_30px_rgba(15,15,15,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,15,15,0.09)] sm:p-7">
      {/* Pink left accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1.5"
        style={{ backgroundColor: HULT_PINK }}
      />

      <div className="pl-2">
        {/* Team name */}
        <h4 className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.03em] text-[#0F0F0F] sm:text-2xl">
          {team.name}
        </h4>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#666268]">
          {team.description}
        </p>

        {/* Members */}
        <div className="mt-6 flex flex-wrap gap-4">
          {team.members.map((person) => (
            <TeamMemberCard
              key={person.name}
              person={person}
              memberCount={team.members.length}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   TEAM MEMBER
============================================================ */

function TeamMemberCard({
  person,
  memberCount,
}: {
  person: Person;
  memberCount: number;
}) {
  return (
    <article
      className={`group/member overflow-hidden rounded-2xl border border-[#E8E6E9] bg-[#FAF9FA] transition-all duration-300 hover:border-[#FFD2E5] hover:bg-white hover:shadow-[0_10px_25px_rgba(15,15,15,0.07)]
        ${
          memberCount === 4
            ? "w-full sm:w-[calc(23%)]"
            : memberCount === 3
              ? "w-full sm:w-[calc(33.33%-11px)]"
              : "w-full sm:w-[calc(50%-8px)]"
        }
      `}
    >
      {/* Photo */}
      <div
        className={`relative overflow-hidden bg-[#F0EFF2] ${
          memberCount === 3 ? "aspect-[4/4.5]" : "h-[210px]"
        }`}
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover transition-transform duration-500 group-hover/member:scale-[1.04]"
            sizes="240px"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-3xl font-bold text-[#D6318C]">
              {person.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: HULT_PINK }}
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h5 className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-[#0F0F0F]">
          {person.name}
        </h5>

        {person.role && (
          <p
            className="mt-1.5 text-xs font-bold"
            style={{ color: BLUE_ACCENT }}
          >
            {person.role}
          </p>
        )}

        {/*
        {person.department && (
          <p className="mt-1.5 font-sans text-[11px] font-medium leading-4 text-[#666268]">
            {person.department}
          </p>
        )}
        */}
      </div>
    </article>
  );
}
