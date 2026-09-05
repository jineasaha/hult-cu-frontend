import { Reveal } from "../ui/Reveal";

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

export function WhoAreWeLookingForSection() {
  return (
<section className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
style={{
    background: `
      white
    `,
  }}>

  {/* ============================================================ */}
  {/* BACKGROUND ATMOSPHERE                                       */}
  {/* ============================================================ */}

  {/* Peach glow behind glass panel */}
  <div
    className="
      pointer-events-none
      absolute
      right-[-100px]
      top-[-120px]
      h-[600px]
      w-[600px]
      rounded-full
      blur-[130px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(233,160,181,0.22) 0%, rgba(246,203,214,0.12) 42%, transparent 72%)",
    }}
  />

  {/* Very subtle navy atmosphere */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[-180px]
      left-[-180px]
      h-[520px]
      w-[520px]
      rounded-full
      blur-[140px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(11,31,58,0.045) 0%, transparent 70%)",
    }}
  />

  {/* Soft white light */}
  <div
    className="
      pointer-events-none
      absolute
      left-[42%]
      top-[20%]
      h-[500px]
      w-[700px]
      rounded-full
      blur-[140px]
    "
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 72%)",
    }}
  />

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    {/* ========================================================== */}
    {/* TOP LABEL                                                 */}
    {/* ========================================================== */}

    <Reveal delay={0.05} duration={0.65} y={18}>
    <div className="mb-8 flex items-center gap-4 sm:mb-6">

      <span className="h-px w-10 bg-[#0B1F3A]/20 sm:w-12" />

      <p
        className="
          text-[12px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#911337]
          sm:text-[13px]
        "
      >
        Who are we looking for?
      </p>

    </div>
    </Reveal>


    {/* ========================================================== */}
    {/* MAIN TWO-COLUMN COMPOSITION                               */}
    {/* ========================================================== */}

    <div
      className="
        grid
        gap-14
        lg:grid-cols-[0.95fr_1.05fr]
        lg:items-start
        lg:gap-20
        xl:grid-cols-[0.9fr_1.1fr]
        xl:gap-28
      "
    >

      {/* ======================================================== */}
      {/* LEFT — HEADING + TAGLINE                               */}
      {/* ======================================================== */}

      <Reveal delay={0.15} duration={0.7} y={22}>
      <div className="relative lg:pt-1">

        <h2
          className="
            max-w-[700px]
            font-display
            text-[clamp(3.7rem,5.6vw,3.8rem)]
            font-bold
            leading-[0.94]
            tracking-[-0.055em]
            text-[#0B1F3A]
          "
        >
          People who are
          <br />

          <span
            className="
              relative
              inline-block
              text-[#F2779B]
            "
          >
            curious enough

            <span
              className="
                absolute
                bottom-[-7px]
                left-0
                h-[3px]
                w-[76%]
                rounded-full
                bg-[#E9A0B5]/45
              "
            />
          </span>

          <br />

          to make things happen.
        </h2>


        {/* Tagline / supporting copy */}
        <div className="mt-10 flex max-w-[570px] items-start gap-4 sm:mt-12">

          <span
            className="
              mt-1
              h-12
              w-[2px]
              shrink-0
              rounded-full
              bg-[#E9A0B5]
            "
          />

          <div>

            <p
              className="
                text-[16px]
                font-semibold
                leading-7
                text-[#0B1F3A]/70
                sm:text-[17px]
                sm:leading-7
              "
            >
              We are looking for enthusiastic students who are ready
              to take responsibility, work in teams and contribute to
              building the Hult Prize ecosystem at CU.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <span className="h-[2px] w-7 rounded-full bg-[#E9A0B5]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-black
                "
              >
                No perfect résumé required
              </span>

            </div>

          </div>

        </div>

      </div>
      </Reveal>


      {/* ======================================================== */}
      {/* RIGHT — FROSTED GLASS PANEL                            */}
      {/* ======================================================== */}

      <Reveal delay={0.25} duration={0.75} y={26}>
      <div
        className="
          relative
          lg:mt-2
        "
      >

        {/* External glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-5
            rounded-[32px]
            opacity-60
            blur-[35px]
          "
          style={{
            background:
              "radial-gradient(ellipse at 70% 25%, rgba(233,160,181,0.20), transparent 68%)",
          }}
        />

        {/* ====================================================== */}
        {/* GLASS CARD                                             */}
        {/* ====================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/75
            bg-white/[0.38]
            shadow-[0_24px_80px_rgba(11,31,58,0.075)]
            backdrop-blur-[28px]
            backdrop-saturate-[135%]
          "
        >

          {/* Frosted pink wash */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-80
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.56) 0%, rgba(255,244,247,0.34) 45%, rgba(233,160,181,0.10) 100%)",
            }}
          />

          {/* Glass top reflection */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-5
              top-0
              h-px
              bg-white
              opacity-90
            "
          />

          {/* Soft glass highlight */}
          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-24
              h-64
              w-80
              rotate-[-15deg]
              rounded-full
              bg-white/35
              blur-[45px]
            "
          />

          {/* Peach glow inside glass */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#E9A0B5]/[0.12]
              blur-[55px]
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />


          {/* ================================================== */}
          {/* CARD CONTENT                                       */}
          {/* ================================================== */}

          <div className="relative">

            {/* PANEL HEADER */}
            <div className="border-b border-[#0B1F3A]/[0.07] px-7 py-6 sm:px-9 sm:py-7">

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#0B1F3A]/40
                    "
                  >
                    What we value
                  </p>

                  <p
                    className="
                      mt-1.5
                      font-display
                      text-[17px]
                      font-bold
                      tracking-[-0.02em]
                      text-[#0B1F3A]
                    "
                  >
                    The right mindset matters.
                  </p>

                </div>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/80
                    bg-white/45
                    text-[#0B1F3A]/45
                    shadow-[0_5px_18px_rgba(11,31,58,0.05)]
                    backdrop-blur-md
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>

              </div>

            </div>


            {/* ================================================== */}
            {/* PRINCIPLE 01                                      */}
            {/* ================================================== */}

            <div
              className="
                group/item
                relative
                grid
                grid-cols-[48px_1fr]
                gap-5
                border-b
                border-[#0B1F3A]/[0.07]
                px-7
                py-7
                transition-colors
                duration-300
                hover:bg-white/[0.20]
                sm:grid-cols-[56px_1fr]
                sm:px-9
                sm:py-8
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E9A0B5]/45
                  bg-[#FCECEF]/75
                  font-mono
                  text-[10px]
                  font-bold
                  text-[#0B1F3A]
                  shadow-[0_5px_18px_rgba(233,160,181,0.08)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover/item:bg-[#E9A0B5]
                  group-hover/item:text-white
                "
              >
                01
              </div>

              <div>

                <div className="flex items-center justify-between gap-4">

                  <h3
                    className="
                      font-display
                      text-[21px]
                      font-bold
                      tracking-[-0.03em]
                      text-[#0B1F3A]
                      sm:text-[24px]
                    "
                  >
                    Initiative matters
                  </h3>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-[#E9A0B5]
                      opacity-60
                      transition-all
                      duration-300
                      group-hover/item:-translate-y-0.5
                      group-hover/item:translate-x-0.5
                      group-hover/item:opacity-100
                    "
                  />

                </div>

                <p
                  className="
                    mt-2
                    max-w-[480px]
                    text-[13px]
                    font-medium
                    leading-6
                    text-[#0B1F3A]/55
                    sm:text-[14px]
                  "
                >
                  Bring ideas and be willing to act on them.
                </p>

              </div>

            </div>


            {/* ================================================== */}
            {/* PRINCIPLE 02                                      */}
            {/* ================================================== */}

            <div
              className="
                group/item
                relative
                grid
                grid-cols-[48px_1fr]
                gap-5
                px-7
                py-7
                transition-colors
                duration-300
                hover:bg-white/[0.20]
                sm:grid-cols-[56px_1fr]
                sm:px-9
                sm:py-8
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E9A0B5]/35
                  bg-white/45
                  font-mono
                  text-[10px]
                  font-bold
                  text-[#0B1F3A]
                  shadow-[0_5px_18px_rgba(11,31,58,0.04)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover/item:border-[#E9A0B5]/50
                  group-hover/item:bg-[#FCECEF]/75
                "
              >
                02
              </div>

              <div>

                <div className="flex items-center justify-between gap-4">

                  <h3
                    className="
                      font-display
                      text-[21px]
                      font-bold
                      tracking-[-0.03em]
                      text-[#0B1F3A]
                      sm:text-[24px]
                    "
                  >
                    Prior experience isn&apos;t required
                  </h3>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-[#0B1F3A]/25
                      transition-all
                      duration-300
                      group-hover/item:-translate-y-0.5
                      group-hover/item:translate-x-0.5
                      group-hover/item:text-[#E9A0B5]
                    "
                  />

                </div>

                <p
                  className="
                    mt-2
                    max-w-[480px]
                    text-[13px]
                    font-medium
                    leading-6
                    text-[#0B1F3A]/55
                    sm:text-[14px]
                  "
                >
                  We value attitude, commitment and curiosity.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
      </Reveal>

    </div>


    {/* ========================================================== */}
    {/* BOTTOM QUALITIES                                          */}
    {/* ========================================================== */}

    <Reveal delay={0.42} duration={0.65} y={18}>
    <div
      className="
        mt-16
        flex
        flex-col
        gap-5
        border-t
        border-[#0B1F3A]/[0.08]
        pt-7
        sm:mt-20
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >

      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-black
        "
      >
        The qualities we value
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

        <span className="text-sm font-semibold text-[#0B1F3A]/65">
          Curiosity
        </span>

        <span className="h-1 w-1 rounded-full bg-[#E9A0B5]" />

        <span className="text-sm font-semibold text-[#0B1F3A]/65">
          Ownership
        </span>

        <span className="h-1 w-1 rounded-full bg-[#E9A0B5]" />

        <span className="text-sm font-semibold text-[#0B1F3A]/65">
          Commitment
        </span>

        <span className="h-1 w-1 rounded-full bg-[#E9A0B5]" />

        <span className="text-sm font-semibold text-[#0B1F3A]/65">
          Teamwork
        </span>

      </div>

    </div>
    </Reveal>

  </div>

</section>
  );
}
