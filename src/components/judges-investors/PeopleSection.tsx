import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Person } from "@/types/judges-investors";

interface PeopleSectionProps {
  people: Person[];
}

export function PeopleSection({ people }: PeopleSectionProps) {
  return (
    <Section id="people" className="bg-white py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-hult-pink">
              PREVIOUS COHORTS
            </p>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-charcoal sm:text-2xl lg:text-6xl">
              The Faces Behind The{" "}
              <span
                className="bg-linear-to-r from-pink-500 via-red-400 to-pink-600 bg-clip-text text-transparent"
              >
                Impact.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-dark sm:text-lg sm:leading-8">
              Meet the leaders, builders and changemakers who have shared their
              perspective, challenged ideas and helped shape the Hult Prize
              journey at the University of Calcutta.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-wrap justify-center gap-x-6 gap-y-20 sm:mt-24 sm:gap-x-8 sm:gap-y-24 lg:gap-x-10 lg:gap-y-28">
          {people.map((person, index) => (
            <div
              key={person.id ?? index}
              className="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1.334rem)] lg:w-[calc(25%-1.875rem)]"
            >
              <Reveal delay={index * 0.025}>
                <article className="group text-center">
                  <div className="relative mx-auto aspect-square w-[88%] overflow-hidden rounded-full bg-surface-gray shadow-[0_10px_35px_rgba(15,15,15,0.08)] ring-1 ring-black/[0.06] transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(15,15,15,0.14)]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="mx-auto mt-7 flex min-h-[190px] max-w-[20rem] flex-col">
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.03em] text-charcoal sm:text-xl">
                        {person.name}
                      </h3>

                      {(person.role ||
                        person.organization ||
                        person.education.length > 0) && (
                        <div className="mt-4">
                          <div className="mx-auto mb-4 h-px w-8 bg-hult-pink/50 transition-all duration-500 group-hover:w-12" />

                          {person.role && (
                            <p className="text-[11px] font-extrabold uppercase leading-5 tracking-[0.12em] text-gray-medium sm:text-xs">
                              {person.role}
                            </p>
                          )}

                          {person.organization && (
                            <p className="mt-1.5 text-xs leading-5 text-gray-soft sm:text-[13px]">
                              {person.organization}
                            </p>
                          )}

                          {person.education.length > 0 && (
                            <p className="mt-2 text-xs leading-5 text-gray-soft sm:text-[13px]">
                              {person.education.map((item, educationIndex) => (
                                <span key={educationIndex}>
                                  {educationIndex > 0 && " | "}
                                  {item}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${person.name}`}
                        className="mx-auto mt-auto flex h-11 w-full max-w-[190px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border border-blue/20 bg-blue/[0.06] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-hult-pink/30 hover:bg-hult-pink-pale hover:text-hult-pink hover:shadow-[0_8px_24px_rgba(214,49,140,0.12)]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-blue/30 text-[9px] font-extrabold leading-none transition-colors duration-300 group-hover:border-hult-pink/40">
                          in
                        </span>

                        <span className="whitespace-nowrap">VIEW PROFILE</span>

                        <span className="shrink-0 text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
