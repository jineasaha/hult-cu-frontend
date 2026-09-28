"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const attendanceRequirements = [
  {
    number: "01",
    title: "Attend Every Mandatory Activity",
    description:
      "Be present at all mandatory sessions, presentations and competition activities communicated by the Organising Committee.",
  },
  {
    number: "02",
    title: "Report on Time",
    description:
      "Arrive at the venue within the prescribed reporting time for each activity.",
  },
  {
    number: "03",
    title: "Carry Valid Identification",
    description:
      "Present your University ID or another accepted form of identification whenever required.",
  },
  {
    number: "04",
    title: "Follow Venue Requirements",
    description:
      "Comply with all venue-related safety, security and administrative requirements.",
  },
];

const disqualificationGroups = [
  {
    number: "01",
    title: "Eligibility & Integrity",
    items: [
      "Providing false or misleading information.",
      "Failing to meet eligibility requirements.",
      "Plagiarism or substantial copying of another person's work.",
      "Fabricating or falsifying data or evidence.",
      "Infringing intellectual property rights.",
      "Misrepresenting the venture or team.",
    ],
  },
  {
    number: "02",
    title: "Competition Rules, Process & Conduct",
    items: [
      "Violating competition rules or regulations.",
      "Making unauthorised changes to team composition.",
      "Manipulating or interfering with the competition process.",
      "Failing to complete mandatory submissions.",
      "Failing to follow reasonable instructions from the Organising Committee or Hult Prize.",
      "Engaging in serious misconduct during the competition or its associated activities.",
    ],
  },
];

export function ParticipationCompliance() {
  return (
    <>
      <Confidentiality />

      <Section
        id="participation-compliance"
        className="bg-[#F6F7FB] py-14 sm:py-16"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl">
              {/* Section heading */}
              <div className="mb-9 max-w-3xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a32c69] sm:text-sm">
                  Participant Responsibilities
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Participation & Competition{" "}
                  <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                    Integrity
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                  All participants are expected to meet the event requirements
                  and uphold the integrity of the competition throughout the
                  programme.
                </p>
              </div>

              {/* Attendance */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div>
                    <p className="text-s font-bold uppercase tracking-[0.16em] text-[#E6007E]">
                      Participation
                    </p>
                    <h3 className="mt-1 text-3xl font-bold text-navy">
                      Attendance & Participation
                    </h3>
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-500 sm:text-right">
                    Requirements participants must follow during the event.
                  </p>
                </div>

                <div className="grid gap-0 sm:grid-cols-2">
                  {attendanceRequirements.map((item, index) => (
                    <div
                      key={item.number}
                      className={`flex gap-4 px-5 py-5 sm:px-7 ${
                        index < 2 ? "border-b border-slate-100" : ""
                      } ${index % 2 === 0 ? "sm:border-r sm:border-slate-100" : ""}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f7] text-sm font-bold text-[#E6007E]">
                        {item.number}
                      </span>
                      <div>
                        <h4 className="font-bold text-navy text-xl">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-m leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 border-t border-pink-100 bg-[#fff8fb] px-5 py-4 sm:px-7">
                  <span className="mt-0.5 font-bold text-[#E6007E]">!</span>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Failure to meet mandatory attendance or participation
                    requirements may affect a team’s eligibility in the
                    competition.
                  </p>
                </div>
              </div>

              {/* Disqualification */}
              <div className="mt-10 border-t border-slate-200 pt-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-s font-bold uppercase tracking-[0.16em] text-[#E6007E]">
                      Competition Integrity
                    </p>
                    <h3 className="mt-1 text-3xl font-bold tracking-tight text-navy">
                      Grounds for Disqualification
                    </h3>
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-500 sm:text-right">
                    Violations of the following requirements may result in
                    disqualification.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {disqualificationGroups.map((group) => (
                    <div
                      key={group.number}
                      className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-l font-bold text-[#E6007E]">
                          {group.number}
                        </span>
                        <h4 className="text-xl font-bold text-navy">
                          {group.title}
                        </h4>
                      </div>

                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-m leading-snug text-gray-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6007E]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function Confidentiality() {
  return (
    <Section
      id="confidentiality"
      className="bg-gradient-to-br from-[#fff0f7] via-white to-[#fce7f3] py-14 sm:py-16"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a32c69] sm:text-sm">
                Important Information
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Confidentiality &{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  Investment
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                The programme offers opportunities to connect with judges,
                entrepreneurs, industry professionals, mentors and potential
                investors.
              </p>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-white/80 p-6 shadow-sm sm:p-8">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-hult-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy">
                    Investment & Opportunities
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Participation does not guarantee investment, incubation,
                    funding or commercial partnerships. Interested organisations
                    may independently explore such opportunities, subject to
                    evaluation, due diligence and mutually agreed legal terms.
                    These opportunities are separate from the competition.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-pink-100 pt-5">
                <h3 className="font-bold text-navy">
                  Intellectual Property & Confidentiality
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Teams are responsible for protecting confidential information
                  and addressing patents, ownership, confidentiality and other
                  intellectual-property rights before entering into investment
                  or commercial discussions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
