"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const evaluationAreas = [
  {
    title: "Team",
    description:
      "Commitment, complementary skills, defined roles, leadership, collaboration and execution capability.",
  },
  {
    title: "Idea",
    description:
      "Problem understanding, innovation, relevance, practicality and quality of the proposed solution.",
  },
  {
    title: "Impact",
    description:
      "UN SDG alignment, significance of the problem, potential social and environmental impact, and measurable outcomes.",
  },
  {
    title: "Business",
    description:
      "Business model, customer needs, market opportunity, revenue potential, sustainability and growth.",
  },
];

export function EvaluationAndConduct() {
  return (
    <Section
      id="evaluation-conduct"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff0f7] via-white to-[#fce7f3] py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a32c69] sm:text-sm">
              Participation Guidelines
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Evaluation & Code of{" "}
              <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                Conduct
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Teams will be evaluated under the applicable Hult Prize framework,
              with an evolving focus as ventures progress through the
              competition.
            </p>
          </div>
        </Reveal>

        {/* Evaluation Criteria */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {evaluationAreas.map((area, index) => (
            <Reveal key={area.title}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-hult-pink/50 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-sm font-bold text-hult-pink">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{area.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-5 text-center text-sm leading-relaxed text-gray-500">
            As ventures progress, evaluation may also include Product–Market
            Fit, Go-to-Market Strategy, Traction and Scaling.
          </p>
        </Reveal>

        {/* Code of Conduct */}
        <Reveal>
          <div className="mt-10 rounded-2xl border border-pink-100 bg-linear-to-br from-[#feeeff] to-[#ffd9f2] p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-navy">
              Professional Conduct
            </h3>

            <p className="mt-3 text-m leading-relaxed text-gray-700">
              All participants must maintain professional and respectful
              behaviour throughout the programme. Participants are expected to:
            </p>

            <ul className="mt-4 space-y-2.5 text-m leading-relaxed text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold text-hult-pink">•</span>
                Respect fellow participants, organisers, judges, mentors,
                faculty members and guests, and follow reasonable instructions
                from the Organising Committee.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-hult-pink">•</span>
                Maintain professional behaviour during presentations, workshops,
                mentoring sessions and all official activities.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-hult-pink">•</span>
                Refrain from harassment, discrimination, intimidation, abusive
                behaviour and disruptive conduct.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-hult-pink">•</span>
                Avoid any behaviour that compromises the integrity, fairness or
                reputation of the competition.
              </li>
            </ul>

            <div className="mt-5 border-t border-pink-200 pt-4">
              <p className="text-sm leading-relaxed text-gray-700">
                Participation in the Hult Prize constitutes acceptance of the
                applicable official Hult Prize Terms & Conditions and Code of
                Conduct.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
