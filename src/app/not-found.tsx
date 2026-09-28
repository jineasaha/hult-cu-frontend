import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#F6F7FB] px-4 py-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#E6007E]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />

      <Container>
        <div className="mt-15 relative mx-auto max-w-2xl text-center">
          {/* 404 visual */}
          <div className="relative mb-6 inline-flex items-center justify-center">
            <span className="select-none text-[9rem] font-black leading-none tracking-tighter text-[#0B1F3A]/[0.06] sm:text-[13rem]">
              404
            </span>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E6007E] sm:text-sm">
            Page Not Found
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Looks like you took a wrong turn.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            The page you’re looking for may have been moved, removed, or never
            existed. Let’s get you back to where the ideas take shape.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E6007E] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E6007E]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9006e] hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7" />
                <path d="M9 22V12h6v10" />
              </svg>
              Back to Home
            </Link>

            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B1F3A]/15 bg-white px-7 py-3 text-sm font-semibold text-[#0B1F3A] transition-all duration-300 hover:border-[#E6007E]/40 hover:bg-[#E6007E]/[0.04]"
            >
              Explore Hult Prize
            </Link>
          </div>

          <div className="mx-auto mt-14 flex max-w-xs items-center justify-center gap-3">
            <div className="h-px flex-1 bg-[#0B1F3A]/10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Hult Prize · University of Calcutta
            </span>
            <div className="h-px flex-1 bg-[#0B1F3A]/10" />
          </div>
        </div>
      </Container>
    </main>
  );
}
