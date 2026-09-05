function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const roles = [
  {
    number: "01",
    title: "Marketing & Outreach",
    short: "Grow the movement.",
    description:
      "Build awareness around the Hult Prize, connect with students across campus and create campaigns that bring more people into the movement.",
    skills: ["Outreach", "Campaigns", "Growth"],
  },
  {
    number: "02",
    title: "Design & Creative",
    short: "Shape the visual story.",
    description:
      "Create visual experiences that make the Hult Prize recognizable, memorable and exciting across campus and digital platforms.",
    skills: ["Design", "Branding", "Creative"],
  },
  {
    number: "03",
    title: "Operations & Logistics",
    short: "Make things happen.",
    description:
      "Coordinate timelines, resources, people and logistics to make sure every initiative runs smoothly from planning to execution.",
    skills: ["Planning", "Coordination", "Execution"],
  },
  {
    number: "04",
    title: "Social Media & Content",
    short: "Tell the story.",
    description:
      "Create thoughtful content that informs students, celebrates participants and builds momentum around the competition.",
    skills: ["Content", "Social Media", "Storytelling"],
  },
  {
    number: "05",
    title: "Sponsorship & PR",
    short: "Build relationships.",
    description:
      "Connect with organisations, partners and stakeholders to create meaningful collaborations that strengthen the competition.",
    skills: ["PR", "Partnerships", "Networking"],
  },
  {
    number: "06",
    title: "Event Management",
    short: "Create experiences.",
    description:
      "Help design and deliver workshops, sessions and competition experiences that students genuinely remember.",
    skills: ["Events", "Experience", "Leadership"],
  },
  {
    number: "07",
    title: "Technical / Web",
    short: "Power the digital experience.",
    description:
      "Contribute to the digital ecosystem through web development, technology, product thinking and technical problem solving.",
    skills: ["Technology", "Web", "Innovation"],
  },
];

export function CommitteeRolesSection() {
  return (
<section
  id="roles"
  className="
    relative
    isolate
    scroll-mt-10
    overflow-hidden
    py-24
    sm:py-28
    lg:py-32
  "
  style={{
    background: `
      linear-gradient(
        135deg,
        #E6F4FB 0%,
        #EEF8FC 25%,
        #F8FBFD 52%,
        #FFFFFF 78%,
        #F7FBFD 100%
      )
    `,
  }}
>
  {/* ============================================================ */}
  {/* ATMOSPHERE                                                    */}
  {/* ============================================================ */}

  {/* Soft blue upper-left glow */}
  <div
    className="
      pointer-events-none
      absolute
      -left-44
      -top-44
      h-[600px]
      w-[600px]
      rounded-full
      blur-[140px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(209, 235, 247, 0.93) 0%, rgba(223, 244, 251, 0.68) 45%, transparent 73%)",
    }}
  />

  {/* Soft blue right glow */}
  <div
    className="
      pointer-events-none
      absolute
      -right-52
      top-[10%]
      h-[650px]
      w-[650px]
      rounded-full
      blur-[150px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(170,219,240,0.19) 0%, rgba(220,240,248,0.09) 48%, transparent 74%)",
    }}
  />

  {/* White sunlight */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[8%]
      h-[600px]
      w-[1000px]
      -translate-x-1/2
      rounded-full
      blur-[130px]
    "
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.58) 45%, transparent 76%)",
    }}
  />

  {/* Very subtle pink glow */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[-220px]
      left-1/2
      h-[500px]
      w-[800px]
      -translate-x-1/2
      rounded-full
      blur-[150px]
    "
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,190,216,0.11) 0%, transparent 72%)",
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

    <div className="mx-auto max-w-[820px] text-center">

      {/* Eyebrow */}
      <div className="mb-2 flex items-center justify-center gap-3">

        <span className="h-px -mt-16 w-10 bg-hult-pink/60" />

        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-hult-pink
            sm:text-[12px]
            -mt-16
          "
        >
          Find Where You Belong
        </p>

        <span className="h-px -mt-16 w-10 bg-hult-pink/60" />

      </div>

      {/* Heading */}
      <h2
        className="
          font-display
          text-[clamp(2.8rem,5vw,4rem)]
          font-bold
          leading-[0.95]
          tracking-[-0.055em]
          text-[#0F0F0F]
        "
      >
        Committee
        <br />

        <span
          className="
            bg-gradient-to-r
            from-[#E6007E]
            via-[#D83D91]
            to-[#7B348F]
            bg-clip-text
            text-transparent
          "
        >
          Roles
        </span>
      </h2>

      {/* Tagline */}
      <p
        className="
          mx-auto
          mt-6
          max-w-[590px]
          text-[15px]
          font-medium
          leading-7
          text-blue
          sm:text-[16px]
        "
      >
        Find your space, bring your strengths and become part of the
        team building the Hult Prize experience at CU.
      </p>

    </div>


    {/* ========================================================== */}
    {/* FROSTED ROLE DIRECTORY                                     */}
    {/* ========================================================== */}

    <div className="relative mx-auto mt-14 max-w-[1180px] sm:mt-16">

      {/* External glass glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-6
          rounded-[38px]
          blur-[40px]
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(174,219,237,0.17), rgba(255,190,216,0.07), transparent 72%)",
        }}
      />

      {/* ======================================================== */}
      {/* LARGE FROSTED CONTAINER                                  */}
      {/* ======================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.82]
          bg-white/[0.28]
          shadow-[0_30px_90px_rgba(11,31,58,0.085)]
          backdrop-blur-[32px]
          backdrop-saturate-[140%]
        "
      >

        {/* Glass gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.52) 0%,
                rgba(255,239,246,0.25) 34%,
                rgba(255,255,255,0.38) 65%,
                rgba(231,245,251,0.25) 100%
              )
            `,
          }}
        />

        {/* Large internal light */}
        <div
          className="
            pointer-events-none
            absolute
            left-[18%]
            top-[-100px]
            h-[280px]
            w-[650px]
            rounded-full
            bg-white/35
            blur-[80px]
          "
        />

        {/* Top glass reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-white
          "
        />

        {/* ====================================================== */}
        {/* DIRECTORY HEADER                                       */}
        {/* ====================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            gap-3
            border-b
            border-[#0B1F3A]/[0.07]
            px-6
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-9
            sm:py-7
          "
        >

          <div>

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#0B1F3A]/40
              "
            >
              Explore the team
            </p>

            <p
              className="
                mt-1
                font-display
                text-[17px]
                font-bold
                tracking-[-0.025em]
                text-[#0F0F0F]
                sm:text-[18px]
              "
            >
              Seven roles. One shared purpose.
            </p>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-hult-pink" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#0B1F3A]/35
              "
            >
              2026–27 Committee
            </span>

          </div>

        </div>


        {/* ====================================================== */}
        {/* ROLE LIST                                               */}
        {/* ====================================================== */}

        <div className="relative">

          {roles.map((role, index) => (

            <div
              key={role.number}
              className="
                group
                relative
                border-b
                border-[#0B1F3A]/[0.065]
                last:border-b-0
              "
            >

              {/* Hover wash */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,225,237,0.16), rgba(255,255,255,0.20), rgba(218,239,248,0.13))",
                }}
              />

              <div
                className="
                  relative
                  flex
                  items-center
                  gap-4
                  px-6
                  py-5
                  transition-all
                  duration-300
                  sm:gap-6
                  sm:px-9
                  sm:py-6
                "
              >

                {/* ================================================= */}
                {/* NUMBER                                            */}
                {/* ================================================= */}

                <div
                  className="
                    hidden
                    w-8
                    shrink-0
                    font-mono
                    text-[10px]
                    font-bold
                    tracking-[0.08em]
                    text-hult-pink/65
                    sm:block
                  "
                >
                  {role.number}
                </div>


                {/* ================================================= */}
                {/* ICON                                               */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[15px]
                    border
                    border-white/[0.9]
                    bg-white/55
                    text-hult-pink
                    shadow-[0_8px_24px_rgba(11,31,58,0.055)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:border-hult-pink/20
                    group-hover:bg-[#FFE6F1]/75
                    group-hover:shadow-[0_10px_28px_rgba(230,0,126,0.10)]
                    sm:h-14
                    sm:w-14
                    sm:rounded-[17px]
                  "
                >

                  {index === 0 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <path d="M4 19h16" />
                      <path d="M6 16V8" />
                      <path d="M10 16V5" />
                      <path d="M14 16v-6" />
                      <path d="M18 16V7" />
                      <path d="m6 6 4-2 4 2 4-2" />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <path d="M4 17.5 9.5 12l3 3L20 7.5" />
                      <path d="M15 7.5h5v5" />
                      <path d="M4 20h16" />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2" />
                      <path d="M8 3v4M16 3v4M4 9h16" />
                      <path d="M8 13h3M13 13h3M8 17h3" />
                    </svg>
                  )}

                  {index === 3 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <path d="M5 5h14v10H9l-4 4V5Z" />
                      <path d="M8 9h8M8 12h5" />
                    </svg>
                  )}

                  {index === 4 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 7v5l3 2" />
                      <path d="M8 4.5 6.5 3M16 4.5 17.5 3" />
                    </svg>
                  )}

                  {index === 5 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <rect x="4" y="5" width="16" height="14" rx="2" />
                      <path d="M8 3v4M16 3v4M4 9h16" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                  )}

                  {index === 6 && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                      aria-hidden="true"
                    >
                      <path d="M4 5h16v14H4z" />
                      <path d="m8 9 3 3-3 3M13 15h3" />
                    </svg>
                  )}

                </div>


                {/* ================================================= */}
                {/* ROLE INFORMATION                                  */}
                {/* ================================================= */}

                <div className="min-w-0 flex-1">

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">

                    <h3
                      className="
                        font-display
                        text-[18px]
                        font-bold
                        leading-tight
                        tracking-[-0.03em]
                        text-[#0F0F0F]
                        transition-colors
                        duration-300
                        group-hover:text-[#8D2C70]
                        sm:text-[21px]
                      "
                    >
                      {role.title}
                    </h3>

                    {/* Desktop separator */}
                    <span
                      className="
                        hidden
                        h-1
                        w-1
                        rounded-full
                        bg-hult-pink/40
                        sm:block
                      "
                    />

                    <p
                      className="
                        text-[12px]
                        font-semibold
                        tracking-[-0.005em]
                        text-[#0B1F3A]/48
                        transition-colors
                        duration-300
                        group-hover:text-[#0B1F3A]/65
                        sm:text-[13px]
                      "
                    >
                      {role.short}
                    </p>

                  </div>

                </div>


                {/* ================================================= */}
                {/* RIGHT ARROW                                       */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/80
                    bg-white/45
                    text-[#0B1F3A]/30
                    shadow-[0_5px_16px_rgba(11,31,58,0.04)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:border-hult-pink/20
                    group-hover:bg-[#FFE6F1]/65
                    group-hover:text-hult-pink
                  "
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ====================================================== */}
        {/* BOTTOM GLASS FOOTER                                    */}
        {/* ====================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            gap-4
            border-t
            border-white/70
            bg-white/[0.16]
            px-6
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-9
          "
        >

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#0B1F3A]/35
            "
          >
            Find your strength. Find your role.
          </p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-hult-pink/60" />

            <span
              className="
                text-[10px]
                font-semibold
                text-[#0B1F3A]/40
              "
            >
              Build with purpose.
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================== */}
    {/* BOTTOM ACCENT                                             */}
    {/* ========================================================== */}

    <div className="mt-12 flex items-center justify-center gap-3">

      <span className="h-px w-12 bg-[#0B1F3A]/10" />

      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-[#0B1F3A]/35
        "
      >
        One team · Seven ways to make an impact
      </span>

      <span className="h-px w-12 bg-[#0B1F3A]/10" />

    </div>

  </div>

</section>
  );
}
