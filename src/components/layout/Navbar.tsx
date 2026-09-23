"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";

type NavItem = {
  label: string;
  href: string;
  route?: string;
  section?: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    route: "/",
  },
  {
    label: "Recruitment",
    href: "/committee-recruitment",
    route: "/committee-recruitment",
  },
  {
    label: "Judges & Investors",
    href: "/judges-investors",
    route: "/judges-investors",
  },
  {
    label: "University Network",
    href: "/university-network",
    route: "/university-network",
  },
  {
    label: "Technical Sponsors",
    href: "/#technical-sponsors",
    section: "technical-sponsors",
  },
  {
    label: "Contacts",
    href: "/#contact",
    section: "contact",
  },
  // {
  //   label: "Latest News",
  //   href: "/#announcements",
  //   section: "announcements",
  // },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hultprizecaluniv?igsi=aGw3Y2JueG01ZXgw",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hult-prize-university-of-calcutta/",
  },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* ============================================================
     SECTION SCROLLING
  ============================================================ */

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    if (!sectionId || pathname !== "/") {
      return;
    }

    event.preventDefault();

    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const elementHeight = element.offsetHeight;

    const targetPosition =
      elementTop - (window.innerHeight - elementHeight) / 2;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  /* ============================================================
     ACTIVE STATE
  ============================================================ */

  const isItemActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.route) {
      return pathname === item.route;
    }

    return false;
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2 pt-3 sm:px-4 sm:pt-4 lg:px-5 lg:pt-5">
      <Container className="pointer-events-auto relative mx-auto flex h-[72px] w-full max-w-[1480px] items-center sm:h-[76px] lg:h-[84px]">
        {/* =========================================================
            MAIN FROSTED GLASS NAVBAR
        ========================================================== */}

        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[22px] border border-white/65 bg-white/[0.68] shadow-[0_18px_55px_rgba(15,15,15,0.12),0_4px_16px_rgba(15,15,15,0.05),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl backdrop-saturate-150 sm:rounded-[24px] lg:rounded-[26px]"
        />

        {/* Extremely subtle atmospheric tint */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px] sm:rounded-[24px] lg:rounded-[26px]"
        >
          <div className="absolute -left-20 top-1/2 h-32 w-56 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="absolute -right-20 top-1/2 h-32 w-56 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />
        </div>

        {/* Fine glass highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 top-px h-px rounded-full bg-white/90 sm:inset-x-6"
        />

        {/* =========================================================
            LEFT — LOGOS + BRAND
        ========================================================== */}

        <Link
          href="/"
          aria-label="Hult Prize University of Calcutta home"
          onClick={closeMenu}
          className="relative z-10 flex min-w-0 shrink-0 items-center lg:-ml-2 xl:-ml-3"
        >
          {/* MOBILE + TABLET — SINGLE COMPACT FROSTED STRIP */}

          <div className="flex h-[42px] shrink-0 items-center rounded-[12px] border border-white/65 bg-white/[0.55] px-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(15,15,15,0.05)] backdrop-blur-xl backdrop-saturate-150 sm:h-[46px] sm:rounded-[13px] sm:px-2 lg:hidden">
            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
              {/* University of Calcutta */}
              <div className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                <Image
                  src="/images/logos/cu-logo.png"
                  alt="University of Calcutta"
                  width={56}
                  height={56}
                  className="h-[88%] w-[88%] object-contain"
                />
              </div>

              {/* Hult Prize */}
              <div className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                <Image
                  src="/images/logos/hult-logo.png"
                  alt="Hult Prize"
                  width={68}
                  height={56}
                  className="h-[128%] w-[128%] object-contain"
                />
              </div>

              {/* Institution's Innovation Council */}
              <div className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                <Image
                  src="/images/logos/iic-logo.png"
                  alt="Institution's Innovation Council"
                  width={68}
                  height={56}
                  className="h-[108%] w-[108%] object-contain"
                />
              </div>

              {/* OnCampus */}
              <div className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                <Image
                  src="/images/logos/oncampus-logo.png"
                  alt="Hult Prize OnCampus"
                  width={68}
                  height={56}
                  className="h-[138%] w-[138%] object-contain"
                />
              </div>
            </div>
          </div>

          {/* DESKTOP — INDIVIDUAL LARGER FROSTED GLASS LOGO TILES */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {/* University of Calcutta */}
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[14px] border border-white/65 bg-white/[0.28] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(15,15,15,0.05)] backdrop-blur-xl backdrop-saturate-150">
              <Image
                src="/images/logos/cu-logo.png"
                alt="University of Calcutta"
                width={64}
                height={64}
                className="h-[88%] w-[88%] object-contain"
              />
            </div>

            {/* Hult Prize */}
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[14px] border border-white/65 bg-white/[0.28] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(15,15,15,0.05)] backdrop-blur-xl backdrop-saturate-150">
              <Image
                src="/images/logos/hult-logo.png"
                alt="Hult Prize"
                width={68}
                height={56}
                className="h-[86%] w-[86%] object-contain"
              />
            </div>

            {/* Institution's Innovation Council */}
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[14px] border border-white/65 bg-white/[0.28] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(15,15,15,0.05)] backdrop-blur-xl backdrop-saturate-150">
              <Image
                src="/images/logos/iic-logo.png"
                alt="Institution's Innovation Council"
                width={68}
                height={56}
                className="h-[86%] w-[86%] object-contain"
              />
            </div>

            {/* OnCampus */}
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[14px] border border-white/65 bg-white/[0.28] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(15,15,15,0.05)] backdrop-blur-xl backdrop-saturate-150">
              <Image
                src="/images/logos/oncampus-logo.png"
                alt="Hult Prize OnCampus"
                width={68}
                height={56}
                className="h-[86%] w-[86%] object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <span
            aria-hidden="true"
            className="mx-2 hidden h-9 w-px bg-charcoal/10 sm:mx-3 sm:block lg:mx-3 lg:h-11"
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
          <div className="ml-3.5 flex flex-col leading-none sm:hidden">
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
            DESKTOP NAVIGATION
        ========================================================== */}

        <nav
          aria-label="Main navigation"
          className="relative z-10 ml-auto mr-auto hidden items-center gap-0.5 lg:flex xl:gap-1"
        >
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (item.section) {
                    scrollToSection(event, item.section);
                  }
                }}
                className={`group relative whitespace-nowrap rounded-full px-3 py-3 font-body text-[13px] font-semibold transition-all duration-200 xl:px-3.5 xl:text-sm ${
                  active
                    ? "text-hult-pink"
                    : "text-charcoal hover:text-hult-pink"
                }`}
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-1.5 left-3 right-3 h-0.5 origin-left rounded-full bg-hult-pink transition-transform duration-200 xl:left-3.5 xl:right-3.5 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* =========================================================
            RIGHT — SOCIALS + MOBILE MENU
        ========================================================== */}

        <div className="relative z-10 ml-auto flex items-center">
          <span
            aria-hidden="true"
            className="mr-3 hidden h-8 w-px bg-charcoal/10 xl:block"
          />

          {/* Desktop Social Links */}
          <div className="hidden items-center gap-1 xl:flex">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                label={social.label}
              />
            ))}
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-white/50 text-charcoal backdrop-blur-md transition-all duration-200 hover:border-hult-pink hover:bg-white/75 hover:text-hult-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hult-pink focus-visible:ring-offset-2 lg:hidden"
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
          FULL-SCREEN MOBILE / TABLET NAVIGATION
      ============================================================ */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="pointer-events-auto fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* FULL SCREEN BACKGROUND */}
            <motion.div
              className="absolute inset-0 overflow-hidden bg-[#f7eef5]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Soft frosted base */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(248,237,245,0.94)_45%,rgba(240,218,233,0.96)_100%)] backdrop-blur-3xl"
              />

              {/* Atmospheric glows */}
              <div
                aria-hidden="true"
                className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-hult-pink/10 blur-[90px]"
              />

              <div
                aria-hidden="true"
                className="absolute -right-32 top-[18%] h-[460px] w-[460px] rounded-full bg-[#aabce8]/20 blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-40 left-[15%] h-[420px] w-[620px] rounded-full bg-hult-pink/10 blur-[110px]"
              />

              {/* CONTENT */}
              <div className="relative z-10 flex h-svh w-full flex-col px-6 pb-7 pt-6 sm:px-10 sm:pb-10 sm:pt-8">
                {/* TOP BAR */}
                <div className="flex items-center justify-between">
                  {/* Brand */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/80 bg-white/50 shadow-[0_8px_25px_rgba(40,20,40,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
                      <Image
                        src="/images/logos/cu-logo.png"
                        alt="University of Calcutta"
                        width={44}
                        height={44}
                        className="h-[82%] w-[82%] object-contain"
                      />
                    </div>

                    <div className="flex flex-col leading-none">
                      <span className="font-display text-sm font-extrabold tracking-[-0.045em] text-charcoal sm:text-base">
                        HULT PRIZE
                      </span>

                      <span className="mt-1 font-body text-[7px] font-bold uppercase tracking-[0.18em] text-hult-pink sm:text-[8px]">
                        ONCAMPUS · 2026–27
                      </span>
                    </div>
                  </div>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white/55 text-charcoal shadow-[0_8px_25px_rgba(40,20,40,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition-all duration-300 hover:border-hult-pink/40 hover:bg-white/80 hover:text-hult-pink"
                  >
                    <X
                      size={21}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
                  </button>
                </div>

                {/* EDITORIAL LABEL */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                  className="mt-14 flex items-center gap-3 sm:mt-16"
                >
                  <span className="h-px w-10 bg-hult-pink sm:w-14" />

                  <span className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-[#6a5364]">
                    Navigation
                  </span>
                </motion.div>

                {/* =================================================
                    MOBILE NAVIGATION

                    Generated from NAV_ITEMS.
                ================================================== */}

                <motion.nav
                  aria-label="Mobile navigation"
                  className="mt-5 sm:mt-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.22,
                      },
                    },
                  }}
                >
                  {NAV_ITEMS.map((item, index) => {
                    const active = isItemActive(item);

                    return (
                      <motion.div
                        key={item.label}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(event) => {
                            closeMenu();

                            if (item.section) {
                              scrollToSection(event, item.section);
                            }
                          }}
                          aria-current={active ? "page" : undefined}
                          className="group flex items-center justify-between border-b border-charcoal/[0.08] py-3.5 sm:py-4"
                        >
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <span
                              className={`font-body text-[9px] font-bold tracking-[0.18em] ${
                                active ? "text-[#AB3C68]" : "text-charcoal/35"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className={`font-display text-[1.25rem] font-bold leading-none tracking-[-0.035em] transition-colors duration-300 sm:text-[1.4rem] ${
                                active
                                  ? "text-[#AB3C68]"
                                  : "text-charcoal group-hover:text-[#AB3C68]"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>

                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                              active
                                ? "border-[#AB3C68]/30 bg-[#AB3C68] text-white"
                                : "border-charcoal/10 bg-white/45 text-charcoal group-hover:border-[#AB3C68]/30 group-hover:bg-[#AB3C68] group-hover:text-white"
                            }`}
                          >
                            <ArrowUpRight
                              size={17}
                              strokeWidth={1.8}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                {/* =================================================
                    BOTTOM AREA
                ================================================== */}

                <div className="mt-auto">
                  {/* Small statement */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.58, duration: 0.45 }}
                    className="mb-7 flex items-center gap-3"
                  >
                    <span className="h-px w-8 bg-hult-pink" />

                    <p className="font-body text-[9px] font-bold uppercase tracking-[0.25em] text-[#6a5364]">
                      People with purpose
                    </p>
                  </motion.div>

                  {/* Social + footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.68, duration: 0.45 }}
                    className="flex items-end justify-between border-t border-charcoal/[0.08] pt-5"
                  >
                    <div>
                      <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/40">
                        University of Calcutta
                      </p>

                      <p className="mt-1 font-body text-[9px] font-medium text-charcoal/45">
                        Hult Prize OnCampus · 2026–27
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {SOCIAL_LINKS.map((social) => (
                        <SocialLink
                          key={social.label}
                          href={social.href}
                          label={social.label}
                          mobile
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ============================================================
   SOCIAL LINK
============================================================ */

function SocialLink({
  href,
  label,
  mobile = false,
}: {
  href: string;
  label: string;
  mobile?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center rounded-full transition-all duration-200 ${
        mobile
          ? "h-11 w-11 border border-charcoal/10 bg-white/45 text-charcoal backdrop-blur-md hover:border-[#AB3C68]/30 hover:bg-[#AB3C68] hover:text-white"
          : "h-10 w-10 text-charcoal hover:bg-hult-pink/10 hover:text-hult-pink"
      }`}
    >
      {label === "Instagram" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={mobile ? "h-[19px] w-[19px]" : "h-[21px] w-[21px]"}
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
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={mobile ? "h-[19px] w-[19px]" : "h-[21px] w-[21px]"}
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
      )}
    </a>
  );
}
