function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const benefits = [
  {
    number: "01",
    title: "Leadership",
    description:
      "Take ownership of initiatives, lead teams and learn to make decisions with confidence.",
  },
  {
    number: "02",
    title: "Event Execution",
    description:
      "Experience the complete process of planning and delivering workshops, events and competitions.",
  },
  {
    number: "03",
    title: "Industry Exposure",
    description:
      "Build meaningful connections with mentors, judges, partners and professionals.",
  },
  {
    number: "04",
    title: "Communication",
    description:
      "Strengthen your ability to collaborate, present ideas and work effectively with diverse teams.",
  },
  {
    number: "05",
    title: "Recognition",
    description:
      "Receive recognition for your contribution to the Hult Prize ecosystem at the University of Calcutta.",
  },
];

export function WhyJoinSection() {
  return (
<section
  className="
    relative
    isolate
    bg-[linear-gradient(135deg,#FFE9E5_0%,#FFF5F3_50%,#FFE9E5_100%)]
    overflow-hidden
    py-24
    sm:py-28
    lg:py-32
  "
  
>
  {/* ============================================================ */}
  {/* BACKGROUND LIGHT                                             */}
  {/* ============================================================ */}

  {/* Large soft pink glow */}
  <div
    className="
      pointer-events-none
      absolute
      -left-32
      -top-32
      h-[500px]
      w-[500px]
      rounded-full
      blur-[120px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(230,0,126,0.085) 0%, rgba(247,210,228,0.10) 40%, transparent 72%)",
    }}
  />

  {/* Warm cream glow */}
  <div
    className="
      pointer-events-none
      absolute
      right-[-160px]
      top-[5%]
      h-[580px]
      w-[580px]
      rounded-full
      blur-[130px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(255,250,246,0.95) 0%, rgba(255,244,239,0.55) 45%, transparent 72%)",
    }}
  />

  {/* Central white light */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[30%]
      h-[420px]
      w-[760px]
      -translate-x-1/2
      rounded-full
      blur-[120px]
    "
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, rgba(255,250,248,0.35) 50%, transparent 76%)",
    }}
  />


  {/* ============================================================ */}
  {/* MAIN CONTENT                                                 */}
  {/* ============================================================ */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1400px]
      px-5
      sm:px-8
      lg:px-10
    "
  >

    {/* ========================================================== */}
    {/* HEADER                                                      */}
    {/* ========================================================== */}

    <div
      className="
        grid
        gap-10
        lg:grid-cols-[1.05fr_0.65fr]
        lg:items-end
        lg:gap-24
      "
    >

      {/* LEFT */}
      <div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3">

          <span
            className="
              h-[2px]
              w-9
              rounded-full
              bg-hult-pink
              sm:w-12
            "
          />

          <p
            className="
              text-[13px]
              font-bold
              uppercase
              tracking-[0.31em]
              text-[#B14C7D]
              sm:text-[17px]
            "
          >
            Why join us?
          </p>

        </div>

        {/* Heading */}
        <h2
          className="
            mt-6
            max-w-[780px]
            font-display
            text-[clamp(2.75rem,5.2vw,4rem)]
            font-bold
            leading-[0.95]
            tracking-[0.055em]
            text-charcoal
          "
        >
          Grow with purpose.
          <br />

          <span
            className="
              bg-gradient-to-r
              from-[#f65190]
              via-[#D83D91]
              to-[#a50944]
              bg-clip-text
              text-transparent
            "
          >
            Lead with impact.
          </span>
        </h2>

      </div>

      {/* RIGHT COPY */}
      <div className="lg:pb-2">

        <p
          className="
            max-w-[470px]
            text-[15px]
            font-semibold
            leading-7
            text-[#51494B]/70
            sm:text-[16px]
          "
        >
          More than an organising team, the committee is a space to
          take ownership, develop practical skills and work alongside
          ambitious people to create something meaningful.
        </p>


      </div>

    </div>

    {/* ========================================================== */}
    {/* BENEFIT CARDS                                              */}
    {/* ========================================================== */}

    <div className="relative mt-14 sm:mt-16 lg:mt-20">

      {/* Underlying pink glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[110px]
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(230,0,126,0.07) 0%, rgba(248,221,234,0.12) 45%, transparent 72%)",
        }}
      />

      {/* CLEAN, EVEN GRID */}
      <div
        className="
          relative
          grid
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {benefits.map((benefit) => (
          <div
            key={benefit.number}
            className="
              group
              relative
              min-h-[245px]
              overflow-hidden
              rounded-[22px]
              border
              border-black/20
              bg-white/[0.42]
              p-6
              shadow-[0_14px_45px_rgba(113,72,88,0.075)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-white
              hover:bg-white/[0.56]
              hover:shadow-[0_20px_55px_rgba(113,72,88,0.11)]
              sm:p-7
            "
          >

            {/* ================================================== */}
            {/* CARD GRADIENT                                       */}
            {/* ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-90
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,223,238,0.46) 0%, rgba(255,239,246,0.28) 42%, rgba(255,255,255,0.52) 100%)",
              }}
            />

            {/* Top glass reflection */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-[1px]
                bg-white
              "
            />

            {/* Soft pink corner glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-hult-pink/[0.075]
                blur-3xl
                transition-all
                duration-700
                group-hover:bg-hult-pink/[0.12]
                group-hover:scale-125
              "
            />

            {/* Soft white reflection */}
            <div
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-28
                w-40
                rotate-[-15deg]
                rounded-full
                bg-white/50
                blur-3xl
              "
            />

            {/* ================================================== */}
            {/* CARD CONTENT                                        */}
            {/* ================================================== */}

            <div className="relative flex h-full flex-col">

              {/* TOP ROW */}
              <div className="flex items-center justify-between">

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-bold
                    tracking-[0.08em]
                    text-hult-pink
                  "
                >
                  {benefit.number}
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/55
                    text-charcoal/55
                    shadow-[0_5px_16px_rgba(105,65,82,0.07)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-hult-pink/20
                    group-hover:bg-hult-pink
                    group-hover:text-white
                    group-hover:shadow-[0_7px_20px_rgba(230,0,126,0.16)]
                  "
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>

              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="mt-auto pt-14">

                <h3
                  className="
                    font-display
                    text-[21px]
                    font-bold
                    tracking-[-0.03em]
                    text-charcoal
                    sm:text-[22px]
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[400px]
                    text-[13px]
                    font-medium
                    leading-6
                    text-[#51494B]/70
                    sm:text-[14px]
                  "
                >
                  {benefit.description}
                </p>

              </div>

              {/* BOTTOM DETAIL */}
              <div className="mt-6 flex items-center gap-2">

                <span
                  className="
                    h-px
                    w-7
                    bg-hult-pink/55
                    transition-all
                    duration-500
                    group-hover:w-10
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-charcoal/25
                    transition-colors
                    duration-300
                    group-hover:text-charcoal/40
                  "
                >
                  Hult Prize
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>


  </div>

</section>
  );
}
