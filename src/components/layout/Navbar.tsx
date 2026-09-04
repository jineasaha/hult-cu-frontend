import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-[-0.04em]"
        >
          HULT PRIZE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-charcoal transition-colors hover:text-hult-pink"
          >
            Home
          </Link>

          <Link
            href="/committee-recruitment"
            className="text-sm font-semibold text-charcoal transition-colors hover:text-hult-pink"
          >
            Recruitment
          </Link>
        </nav>

        <Button
          href="/committee-recruitment"
          size="sm"
          className="hidden sm:inline-flex"
        >
          Join Us
        </Button>
      </Container>
    </header>
  );
}