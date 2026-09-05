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
          src="/images/cuHero1.webp"
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

      {/* Hero content */}
      <Container className="relative z-10">
        <div className="flex min-h-[100svh] items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex w-full max-w-6xl flex-col items-center text-center">
            {/* Logos */}
            <Reveal delay={0.2} y={18}>
              <div className="flex w-full items-center justify-center">
                <div className="grid grid-cols-4 items-center justify-items-center gap-2 sm:gap-3 md:gap-4">
                  {/* University of Calcutta */}
                  <div className="flex h-[clamp(4rem,9vw,7rem)] w-[clamp(4rem,9vw,7rem)] shrink-0 items-center justify-center rounded-2xl bg-white p-[clamp(0.4rem,0.9vw,0.7rem)]">
                    <Image
                      src="/images/logos/cu-logo.png"
                      alt="University of Calcutta logo"
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Hult Prize */}
                  <div className="flex h-[clamp(4rem,9vw,7rem)] w-[clamp(4rem,9vw,7rem)] shrink-0 items-center justify-center rounded-2xl bg-white p-[clamp(0.4rem,0.9vw,0.7rem)]">
                    <Image
                      src="/images/logos/hult-logo.png"
                      alt="Hult Prize logo"
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Institution's Innovation Council */}
                  <div className="flex h-[clamp(4rem,9vw,7rem)] w-[clamp(4rem,9vw,7rem)] shrink-0 items-center justify-center rounded-2xl bg-white p-[clamp(0.4rem,0.9vw,0.7rem)]">
                    <Image
                      src="/images/logos/iic-logo.png"
                      alt="Institution's Innovation Council logo"
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* OnCampus */}
                  <div className="flex h-[clamp(4rem,9vw,7rem)] w-[clamp(4rem,9vw,7rem)] shrink-0 items-center justify-center rounded-2xl bg-white p-[clamp(0.4rem,0.9vw,0.7rem)]">
                    <Image
                      src="/images/logos/oncampus-logo.png"
                      alt="Hult Prize OnCampus logo"
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.4}>
              <p className="mt-5 max-w-4xl font-body text-[clamp(0.75rem,1.5vw,1.1rem)] font-bold uppercase leading-relaxed tracking-[0.12em] text-light-gray sm:mt-6 sm:tracking-[0.18em]">
                Leading the Next Generation of Social Entrepreneurs at the
                University of Calcutta.
              </p>
            </Reveal>

            {/* Main event title */}
            <Reveal delay={0.55} y={28}>
              <h1
                id="hero-heading"
                className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.065em]"
              >
                <span className="block bg-gradient-to-r from-hult-pink via-hult-pink-light to-white bg-clip-text text-transparent">
                  HULT PRIZE
                </span>
              </h1>
            </Reveal>

            {/* Edition */}
            <Reveal delay={0.68}>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3.25rem)] font-bold leading-none tracking-[-0.045em] text-white">
                2026–27
              </h2>
            </Reveal>

            {/* University */}
            <Reveal delay={0.78}>
              <p className="mt-4 font-body text-[clamp(0.75rem,1.5vw,1.1rem)] font-semibold uppercase tracking-[0.18em] text-white/75 sm:mt-5 sm:tracking-[0.25em]">
                University of Calcutta
              </p>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.88}>
              <p className="mt-7 max-w-2xl px-4 font-body text-[15px] leading-6 text-white/85 sm:mt-8 sm:px-0 sm:text-base sm:leading-7 lg:text-lg">
                Empowering students at the University of Calcutta to turn
                ambitious ideas into solutions that create meaningful social
                impact.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.98}>
              <div className="mt-7 flex w-full flex-row flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
                <Button
                  href="/committee-recruitment"
                  size="lg"
                  variant="primary"
                  className="shrink-0 whitespace-nowrap px-4 py-2.5 text-sm sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
                >
                  Join the Movement
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
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:mt-9">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-hult-pink sm:w-12"
                />

                <p className="font-body text-xs font-medium text-white/80 sm:text-sm">
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
