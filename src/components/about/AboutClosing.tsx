"use client";

import { Reveal } from "@/components/ui/Reveal";

export function AboutClosing() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="-mt-12 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-charcoal/8 bg-gradient-to-br from-hult-pink-pale via-white to-white px-7 py-14 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[-160px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-hult-pink/15 blur-3xl"
            />

            <div className="relative mx-auto max-w-4xl">
              <div className="m-auto -mt-15 flex h-25 w-25 items-center justify-center overflow-hidden rounded-xl">
                <img
                  src="/images/logos/hult1.png"
                  alt="Hult Prize"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-hult-pink-dark">
                Hult Prize · University of Calcutta
              </p>

              <h2 className="mx-auto mt-7 max-w-2xl font-extrabold text-3xl leading-7 text-gray sm:text-lg sm:leading-8">
                From a problem identified on campus
                <span className="text-hult-pink">
                  {" "}
                  to a venture capable of creating impact at scale.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl font-bold text-base leading-8 text-gray sm:text-lg">
                The Hult Prize gives student innovators a platform to build,
                pitch, connect and grow.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/brochure/official-brochure.pdf"
                  download
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#fb78b9] to-[#d90581] px-7 text-sm font-bold text-white shadow-[0_15px_35px_rgba(230,0,126,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-hult-pink-dark hover:shadow-[0_20px_45px_rgba(230,0,126,.28)] focus:outline-none focus:ring-4 focus:ring-hult-pink/20"
                >
                  Download Event Brochure
                  <span>↓</span>
                </a>
                {/* <a
                  href="/team-registration"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#fb78b9] to-[#d90581] px-7 text-sm font-bold text-white shadow-[0_15px_35px_rgba(230,0,126,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-hult-pink-dark hover:shadow-[0_20px_45px_rgba(230,0,126,.28)] focus:outline-none focus:ring-4 focus:ring-hult-pink/20"
                >
                  See Team Tegistration Rules
                  <span>↗</span>
                </a> */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
