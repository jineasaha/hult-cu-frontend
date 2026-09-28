import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function CompetitionUpdatesAgreement() {
  return (
    <Section
      id="competition-updates-agreement"
      className="bg-white py-14 sm:py-16"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a32c69] sm:text-sm">
                Final Guidelines
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Competition{" "}
                <span className="bg-gradient-to-l from-pink-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  Updates
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Important information regarding possible changes to the
                competition and the communication of updates.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F6F7FB] p-6 sm:p-7">
              <div className="mb-4">
                <h3 className="mt-1 text-lg font-bold text-navy sm:text-xl">
                  Changes to the Competition
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                The Organising Committee may, where necessary, modify event
                schedules, submission deadlines, venue arrangements, pitching
                procedures and operational requirements. Material changes will
                be communicated to registered participants through official
                communication channels.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                The official Hult Prize Terms & Conditions may also provide for
                changes, postponement, relocation, suspension or cancellation of
                competition activities where required.
              </p>
            </div>

            <div className="mt-5 flex gap-4 rounded-2xl border border-[#E6007E]/20 bg-[#E6007E]/[0.04] p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6007E]/10 text-[#E6007E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>

              <div>
                <h3 className="text-base font-bold text-navy sm:text-lg">
                  Important Notice
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                  The official Hult Prize Terms & Conditions and current
                  competition guidelines shall prevail in matters relating to
                  global eligibility, competition progression, judging,
                  intellectual property, prize funding and other official Hult
                  Prize requirements. The University of Calcutta OnCampus
                  programme may impose additional requirements applicable
                  specifically to the local event.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
