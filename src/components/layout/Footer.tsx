import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">
              HULT PRIZE
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              Hult Prize at the University of Calcutta.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/70">
            <Link
              href="/"
              className="transition-colors hover:text-hult-pink-light"
            >
              Home
            </Link>

            <Link
              href="/committee-recruitment"
              className="transition-colors hover:text-hult-pink-light"
            >
              Recruitment
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Hult Prize University of Calcutta.
        </div>
      </Container>
    </footer>
  );
}