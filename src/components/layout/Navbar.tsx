"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <Container className="relative flex h-[72px] items-center sm:h-[76px] lg:h-[88px]">
        {/* =========================================================
            LEFT — LOGOS + BRAND
        ========================================================== */}
        <Link
          href="/"
          aria-label="Hult Prize University of Calcutta home"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center lg:-ml-12 xl:-ml-16"
        >
          {/* Logos */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:gap-4">
            {/* University of Calcutta */}
            <div className="flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 lg:h-14 lg:w-14">
              <Image
                src="/images/logos/cu-logo.png"
                alt="University of Calcutta"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Hult Prize */}
            <div className="flex h-8 w-9 items-center justify-center sm:h-10 sm:w-11 lg:h-14 lg:w-[68px]">
              <Image
                src="/images/logos/hult-logo.png"
                alt="Hult Prize"
                width={68}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Institution's Innovation Council */}
            <div className="flex h-8 w-9 items-center justify-center sm:h-10 sm:w-11 lg:h-14 lg:w-[68px]">
              <Image
                src="/images/logos/iic-logo.png"
                alt="Institution's Innovation Council"
                width={68}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Hult Prize OnCampus */}
            <div className="flex h-8 w-9 items-center justify-center sm:h-10 sm:w-11 lg:h-14 lg:w-[68px]">
              <Image
                src="/images/logos/oncampus-logo.png"
                alt="Hult Prize OnCampus"
                width={68}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <span
            aria-hidden="true"
            className="mx-2 hidden h-9 w-px bg-black/15 sm:mx-3 sm:block lg:mx-4 lg:h-11"
          />

          {/* Desktop / Tablet Brand */}
          <div className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="font-display text-[15px] font-extrabold tracking-[-0.045em] text-charcoal md:text-lg">
              HULT PRIZE
            </span>

            <span className="mt-1 font-body text-[8px] font-bold uppercase tracking-[0.14em] text-hult-pink md:text-[9px]">
              ONCAMPUS
            </span>

            <span className="mt-1 font-body text-[8px] font-bold uppercase tracking-[0.14em] text-gray md:text-[9px]">
              2026–27
            </span>
          </div>

          {/* Mobile Brand */}
          <div className="ml-1.5 flex flex-col leading-none sm:hidden">
            <span className="font-display text-[11px] font-extrabold tracking-[-0.045em] text-charcoal">
              HULT PRIZE
            </span>

            <span className="mt-0.5 font-body text-[6px] font-bold uppercase tracking-[0.12em] text-hult-pink">
              ONCAMPUS
            </span>

            <span className="mt-0.5 font-body text-[6px] font-bold uppercase tracking-[0.12em] text-gray">
              2026–27
            </span>
          </div>
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION — TRUE CENTER
        ========================================================== */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
        >
          <Link
            href="/"
            className={`group relative px-4 py-2 font-body text-sm font-semibold transition-colors duration-200 hover:text-hult-pink ${pathname === "/" ? "text-hult-pink" : "text-charcoal"}`}
          >
            Home
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left bg-hult-pink transition-transform duration-200 ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>

          <Link
            href="/committee-recruitment"
            className={`group relative px-4 py-2 font-body text-sm font-semibold transition-colors duration-200 hover:text-hult-pink ${pathname === "/committee-recruitment" ? "text-hult-pink" : "text-charcoal"}`}
          >
            Recruitment
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left bg-hult-pink transition-transform duration-200 ${pathname === "/committee-recruitment" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>
        </nav>

        {/* =========================================================
            RIGHT — SOCIALS + MOBILE MENU
        ========================================================== */}
        <div className="ml-auto flex items-center">
          {/* Social Divider */}
          <span
            aria-hidden="true"
            className="mr-3 hidden h-8 w-px bg-black/10 xl:block"
          />

          {/* =======================================================
              DESKTOP SOCIAL LINKS
          ======================================================== */}
          <div className="hidden items-center gap-1.5 xl:flex">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/hultprizecaluniv?igsi=aGw3Y2JueG01ZXgw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-all duration-200 hover:bg-hult-pink/10 hover:text-hult-pink"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[21px] w-[21px]"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/hult-prize-university-of-calcutta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-all duration-200 hover:bg-hult-pink/10 hover:text-hult-pink"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[21px] w-[21px]"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 10V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="7.5" r="1" fill="currentColor" />
                <path
                  d="M12 16V12.8C12 11.25 13.05 10 14.5 10C15.95 10 17 11.25 17 12.8V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 13V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>

          {/* =======================================================
              MOBILE / TABLET MENU BUTTON
          ======================================================== */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-charcoal transition-colors hover:border-hult-pink hover:text-hult-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hult-pink focus-visible:ring-offset-2 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </Container>

      {/* ===========================================================
          MOBILE / TABLET DRAWER
      ============================================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="fixed inset-0 top-[72px] z-40 cursor-default bg-charcoal/45 backdrop-blur-[2px] sm:top-[76px] lg:top-[88px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            {/* Drawer */}
            <motion.aside
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed right-0 top-[72px] z-50 flex h-[calc(100svh-72px)] w-[min(88vw,420px)] flex-col bg-white shadow-[-20px_0_60px_rgba(15,15,15,0.15)] sm:top-[76px] sm:h-[calc(100svh-76px)] lg:top-[88px] lg:h-[calc(100svh-88px)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-1 flex-col px-5 py-5 sm:px-7">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.08,
                      },
                    },
                  }}
                  className="flex flex-col"
                >
                  {/* Home */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href="/"
                      onClick={closeMenu}
                      aria-current={pathname === "/" ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-black/5 py-5 font-display text-2xl font-bold tracking-[-0.04em] transition-colors hover:text-hult-pink ${pathname === "/" ? "text-hult-pink" : "text-charcoal"}`}
                    >
                      Home
                      <span className="text-hult-pink">↗</span>
                    </Link>
                  </motion.div>

                  {/* Recruitment */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href="/committee-recruitment"
                      onClick={closeMenu}
                      aria-current={
                        pathname === "/committee-recruitment"
                          ? "page"
                          : undefined
                      }
                      className={`flex items-center justify-between border-b border-black/5 py-5 font-display text-2xl font-bold tracking-[-0.04em] transition-colors hover:text-hult-pink ${pathname === "/committee-recruitment" ? "text-hult-pink" : "text-charcoal"}`}
                    >
                      Recruitment
                      <span className="text-hult-pink">↗</span>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Mobile Social Links */}
                <div className="mt-auto border-t border-black/5 pt-6">
                  <p className="mb-4 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                    Follow Hult Prize
                  </p>

                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/hultprizecaluniv?igsi=aGw3Y2JueG01ZXgw"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-charcoal transition-colors hover:border-hult-pink hover:bg-hult-pink/5 hover:text-hult-pink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[21px] w-[21px]"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/hult-prize-university-of-calcutta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-charcoal transition-colors hover:border-hult-pink hover:bg-hult-pink/5 hover:text-hult-pink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[21px] w-[21px]"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M8 10V16"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <circle cx="8" cy="7.5" r="1" fill="currentColor" />
                        <path
                          d="M12 16V12.8C12 11.25 13.05 10 14.5 10C15.95 10 17 11.25 17 12.8V16"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 13V16"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
