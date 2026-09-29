"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src="/images/cuHero.webp"
          alt="University of Calcutta building"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/20 sm:from-charcoal/90 sm:via-charcoal/65 sm:to-charcoal/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 0.1,
        }}
      />

      {/* Subtle pink tint */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-hult-pink/20 via-hult-pink/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 0.2,
        }}
      />

      {/* =========================================================
          HERO CONTENT
          Navbar floats above this section.
      ========================================================== */}

      <Container className="relative z-10">
        <div className="mt-10 flex min-h-[100svh] items-start justify-center pt-16 pb-16 sm:items-center sm:py-16 md:py-20 lg:py-24">
          <div className="flex w-full max-w-6xl flex-col items-center text-center">
            {/* Logos */}
            <Reveal delay={0.2} y={18}>
              <div className="flex w-full items-center justify-center px-0">
                <div className="flex w-full max-w-5xl items-center justify-between rounded-[18px] border border-white/30 bg-linear-to-r from-[#e3eeffcc] via-[#ffffffcc] to-[#fbf0ffc9] px-1.5 py-3 sm:rounded-[20px] sm:px-4 sm:py-4 md:rounded-[22px] md:px-8 md:py-5 lg:px-10 lg:py-6">
                  {/* University of Calcutta */}
                  <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex h-10 w-15 items-center justify-center sm:h-11 sm:w-14 md:h-14 md:w-20 lg:h-20 lg:w-32">
                      <Image
                        src="/images/logos/cu-logo.png"
                        alt="University of Calcutta logo"
                        width={160}
                        height={160}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    className="mx-0.5 h-8 shrink-0 border-l border-charcoal/40 sm:mx-2 sm:h-10 md:mx-4 md:h-12 lg:mx-7 lg:h-16"
                  />

                  {/* Hult Prize */}
                  <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex h-10 w-15 items-center justify-center sm:h-11 sm:w-14 md:h-14 md:w-20 lg:h-20 lg:w-32">
                      <Image
                        src="/images/logos/hult_2.png"
                        alt="Hult Prize logo"
                        width={160}
                        height={160}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    className="mx-0.5 h-8 shrink-0 border-l border-charcoal/40 sm:mx-2 sm:h-10 md:mx-4 md:h-12 lg:mx-7 lg:h-16"
                  />

                  {/* Institution's Innovation Council */}
                  <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex h-10 w-15 items-center justify-center sm:h-11 sm:w-14 md:h-14 md:w-20 lg:h-20 lg:w-32">
                      <Image
                        src="/images/logos/iic-logo.png"
                        alt="Institution's Innovation Council logo"
                        width={160}
                        height={160}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    className="mx-0.5 h-8 shrink-0 border-l border-charcoal/40 sm:mx-2 sm:h-10 md:mx-4 md:h-12 lg:mx-7 lg:h-16"
                  />

                  {/* OnCampus */}
                  <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex h-10 w-15 items-center justify-center sm:h-11 sm:w-14 md:h-14 md:w-20 lg:h-20 lg:w-32">
                      <Image
                        src="/images/logos/oncampus-logo.png"
                        alt="Hult Prize OnCampus logo"
                        width={160}
                        height={160}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    className="mx-0.5 h-8 shrink-0 border-l border-charcoal/40 sm:mx-2 sm:h-10 md:mx-4 md:h-12 lg:mx-7 lg:h-16"
                  />

                  {/* EF Hult */}
                  <div className="flex min-w-0 flex-1 items-center justify-center">
                    <div className="flex h-10 w-15 items-center justify-center sm:h-11 sm:w-14 md:h-14 md:w-20 lg:h-20 lg:w-32">
                      <Image
                        src="/images/logos/ef-hult-logo.png"
                        alt="EF Hult"
                        width={160}
                        height={160}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.4}>
              <p className="mt-4 max-w-4xl px-3 font-body text-[0.82rem] font-bold uppercase leading-[1.8] tracking-[0.11em] text-light-gray sm:mt-6 sm:px-0 sm:text-[clamp(0.75rem,1.5vw,1.1rem)] sm:leading-relaxed sm:tracking-[0.18em]">
                Leading the Next Generation of Social Entrepreneurs at the
                University of Calcutta.
              </p>
            </Reveal>

            {/* Main event title */}
            <Reveal delay={0.55} y={28}>
              <h1
                id="hero-heading"
                className="mt-5 font-display text-[2.8rem] font-extrabold leading-[0.95] tracking-[-0.065em] sm:mt-5 sm:text-[clamp(2.5rem,6vw,5rem)] sm:leading-[0.9]"
              >
                <span className="block bg-gradient-to-r from-hult-pink via-hult-pink-light to-white bg-clip-text text-transparent">
                  HULT PRIZE
                </span>
              </h1>
            </Reveal>

            {/* Edition */}
            <Reveal delay={0.68}>
              <h2 className="mt-3 font-display text-[2rem] font-bold leading-none tracking-[-0.045em] text-white sm:mt-3 sm:text-[clamp(1.75rem,3.5vw,3.25rem)]">
                2026–27
              </h2>
            </Reveal>

            {/* University */}
            <Reveal delay={0.78}>
              <p className="mt-4 font-body text-[0.82rem] font-semibold uppercase tracking-[0.19em] text-white/75 sm:mt-5 sm:text-[clamp(0.75rem,1.5vw,1.1rem)] sm:tracking-[0.25em]">
                University of Calcutta
              </p>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.88}>
              <p className="mt-6 max-w-2xl px-4 font-body text-[16px] leading-[1.75] text-white/85 sm:mt-8 sm:px-0 sm:text-base sm:leading-7 lg:text-lg">
                Empowering students at the University of Calcutta to turn
                ambitious ideas into solutions that create meaningful social
                impact.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.98}>
              <div className="mt-5 flex w-full flex-row flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
                <Button
                  href="/brochure/official-brochure.pdf"
                  target="_blank"
                  size="lg"
                  variant="primary"
                  className="shrink-0 whitespace-nowrap px-4 py-2.5 text-sm sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
                >
                  Event Brochure ↗
                </Button>

                <Button
                  href="#about"
                  size="lg"
                  variant="outline"
                  className="shrink-0 whitespace-nowrap border-white bg-white px-4 py-2.5 text-sm text-charcoal hover:border-hult-pink-pale hover:bg-hult-pink-pale hover:text-charcoal sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
                >
                  Explore Hult Prize
                </Button>
              </div>
            </Reveal>

            {/* Bottom statement */}
            <Reveal delay={1.08}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:mt-9">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-hult-pink sm:w-12"
                />

                <p className="font-body text-[0.78rem] font-medium text-white/80 sm:text-sm">
                  Innovation · Entrepreneurship · Impact
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
