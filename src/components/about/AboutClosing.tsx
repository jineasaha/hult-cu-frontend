import { Link } from "lucide-react";

export function AboutClosing() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] border border-charcoal/8 bg-gradient-to-br from-hult-pink-pale via-white to-white px-7 py-14 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[-160px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-hult-pink/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-lg font-extrabold text-white shadow-xl">
              H
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
              Hult Prize · University of Calcutta
            </p>

            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[.98] tracking-[-0.05em] text-charcoal">
              From a problem identified on campus
              <span className="text-hult-pink">
                {" "}
                to a venture capable of creating impact at scale.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray sm:text-lg">
              The Hult Prize gives student innovators a platform to build,
              pitch, connect and grow.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/brochure.pdf"
                download
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-hult-pink px-7 text-sm font-bold text-white shadow-[0_15px_35px_rgba(230,0,126,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-hult-pink-dark hover:shadow-[0_20px_45px_rgba(230,0,126,.28)] focus:outline-none focus:ring-4 focus:ring-hult-pink/20"
              >
                Download Event Brochure
                <span>↓</span>
              </a>

              <Link
                href="/"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-charcoal/15 bg-white/70 px-7 text-sm font-bold text-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-charcoal/25 hover:bg-white focus:outline-none focus:ring-4 focus:ring-charcoal/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}