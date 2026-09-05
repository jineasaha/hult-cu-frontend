const responsibilities = [
  "Promote the Hult Prize across campus",
  "Coordinate with departments and students",
  "Organise workshops and events",
  "Work with mentors, judges and partners",
  "Help execute the OnCampus competition",
];

export function WhatWillYouDoSection() {
  return (
<section
  className="
    relative
    isolate
    overflow-hidden
    py-20
    sm:py-24
    lg:py-28
  "
  style={{
    background: `
      linear-gradient(
        115deg,
        #E4F3FB 0%,
        #EDF7FC 20%,
        #F8F9FC 42%,
        #FFF8FB 67%,
        #F8ECF5 100%
      )
    `,
  }}
>
  {/* ============================================================ */}
  {/* ATMOSPHERIC BACKGROUND                                       */}
  {/* ============================================================ */}

  {/* ------------------------------------------------------------ */}
  {/* LARGE SOFT BLUE LIGHT — LEFT                                */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[220px]
      -top-[250px]
      h-[650px]
      w-[650px]
      rounded-full
      blur-[100px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(185,225,243,0.70) 0%, rgba(211,238,249,0.45) 38%, rgba(230,244,250,0.18) 60%, transparent 76%)",
    }}
  />

  {/* ------------------------------------------------------------ */}
  {/* SOFT PINK LIGHT — LEFT LOWER                               */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[230px]
      top-[25%]
      h-[560px]
      w-[560px]
      rounded-full
      blur-[110px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(245,184,218,0.22) 0%, rgba(248,212,232,0.14) 45%, transparent 74%)",
    }}
  />

  {/* ------------------------------------------------------------ */}
  {/* CENTRAL WHITE SUNLIGHT                                      */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[-180px]
      h-[620px]
      w-[1100px]
      -translate-x-1/2
      rounded-full
      blur-[110px]
    "
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255,255,255,0.82) 35%, rgba(255,255,255,0.34) 62%, transparent 78%)",
    }}
  />

  {/* ------------------------------------------------------------ */}
  {/* SOFT PINK LIGHT — RIGHT                                    */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[230px]
      -top-[180px]
      h-[680px]
      w-[680px]
      rounded-full
      blur-[120px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(245,198,224,0.32) 0%, rgba(239,216,235,0.18) 45%, rgba(230,0,126,0.045) 66%, transparent 78%)",
    }}
  />

  {/* ------------------------------------------------------------ */}
  {/* SOFT BLUE LIGHT — RIGHT LOWER                              */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[160px]
      bottom-[-280px]
      h-[600px]
      w-[600px]
      rounded-full
      blur-[120px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(191,228,242,0.34) 0%, rgba(222,241,249,0.18) 48%, transparent 74%)",
    }}
  />


  {/* ============================================================ */}
  {/* BACKGROUND GRAPHICS                                         */}
  {/* ============================================================ */}

  {/* ------------------------------------------------------------ */}
  {/* LEFT LARGE CIRCULAR GRAPHIC                                 */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[65px]
      top-[110px]
      hidden
      h-[360px]
      w-[360px]
      rounded-full
      border
      border-[#D58AC1]/[0.13]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -left-[6px]
      top-[150px]
      hidden
      h-[280px]
      w-[280px]
      rounded-full
      border
      border-[#D58AC1]/[0.10]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      left-[80px]
      top-[215px]
      hidden
      h-[145px]
      w-[145px]
      rounded-full
      border
      border-[#E6007E]/[0.07]
      lg:block
    "
  />

  {/* ------------------------------------------------------------ */}
  {/* RIGHT LARGE CIRCULAR GRAPHIC                                */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[60px]
      -top-[100px]
      hidden
      h-[390px]
      w-[390px]
      rounded-full
      border
      border-[#8C4A9B]/[0.20]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[3px]
      -top-[50px]
      hidden
      h-[300px]
      w-[300px]
      rounded-full
      border
      border-dashed
      border-[#8C4A9B]/[0.17]
      lg:block
    "
  />

  {/* ------------------------------------------------------------ */}
  {/* DECORATIVE SMALL DOTS                                      */}
  {/* ------------------------------------------------------------ */}

  <div
    className="
      pointer-events-none
      absolute
      left-[10%]
      top-[39%]
      hidden
      h-4
      w-4
      rounded-full
      bg-gradient-to-br
      from-[#E6007E]/70
      to-[#C77BD4]/30
      shadow-[0_0_20px_rgba(230,0,126,0.15)]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[13%]
      top-[44%]
      hidden
      h-3
      w-3
      rounded-full
      bg-[#B86CC4]/30
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[52%]
      hidden
      h-4
      w-4
      rounded-full
      bg-gradient-to-br
      from-[#E6007E]/45
      to-[#A9D9EA]/40
      lg:block
    "
  />


  {/* ============================================================ */}
  {/* CONTENT                                                      */}
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
    {/* CENTERED HEADER                                            */}
    {/* ========================================================== */}

    <div className="mx-auto max-w-[820px] text-center">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4">

        <span
          className="
            h-px
            w-10
            bg-hult-pink/35
            sm:w-12
            -mt-15
          "
        />

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.32em]
            text-hult-pink
            sm:text-[11px]
            -mt-15
          "
        >
          Turn plans into impact
        </p>

        <span
          className="
            h-px
            w-10
            bg-hult-pink/35
            sm:w-12
            -mt-15
          "
        />

      </div>


      {/* ======================================================== */}
      {/* MAIN HEADING                                             */}
      {/* ======================================================== */}

      <h2
        className="
          mt-5
          font-display
          text-[clamp(3.1rem,6vw,4rem)]
          font-bold
          leading-[0.94]
          tracking-[-0.06em]
        "
      >

        <span
          className="
            bg-gradient-to-r
            from-[#0F0F0F]
            via-[#E6007E]
            to-[#741E3F]
            bg-clip-text
            text-transparent
          "
        >
          What will you do?
        </span>

      </h2>


      {/* Supporting copy */}
      <p
        className="
          mx-auto
          mt-5
          max-w-[640px]
          text-[14px]
          font-medium
          leading-6
          text-[#4B4B4B]/65
          sm:text-[15px]
          sm:leading-7
        "
      >
        Be at the heart of the Hult Prize movement on campus —
        contribute, collaborate and help make it happen.
      </p>

    </div>


    {/* ========================================================== */}
    {/* RESPONSIBILITY FIELD                                      */}
    {/* ========================================================== */}

    <div
      className="
        relative
        mx-auto
        mt-12
        max-w-[1260px]
        sm:mt-14
        lg:mt-16
      "
    >

      {/* ======================================================== */}
      {/* FLOWING RESPONSIBILITY RIBBON                            */}
      {/* ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[1%]
          right-[1%]
          -top-[12px]
          hidden
          h-[155px]
          lg:block
        "
      >

        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >

          <defs>

            {/* Main pink → purple → blue gradient */}
            <linearGradient
              id="impactRibbon"
              x1="0"
              y1="0"
              x2="1200"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stopColor="#E6007E"
                stopOpacity="0.62"
              />

              <stop
                offset="0.28"
                stopColor="#D53A9A"
                stopOpacity="0.50"
              />

              <stop
                offset="0.52"
                stopColor="#8D4B9B"
                stopOpacity="0.40"
              />

              <stop
                offset="0.74"
                stopColor="#B9DDEA"
                stopOpacity="0.52"
              />

              <stop
                offset="1"
                stopColor="#E6007E"
                stopOpacity="0.28"
              />
            </linearGradient>

            {/* Soft ribbon glow */}
            <filter
              id="ribbonBlur"
              x="-20%"
              y="-100%"
              width="140%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="5" />
            </filter>

          </defs>


          {/* ---------------------------------------------------- */}
          {/* SOFT GLOW RIBBON                                    */}
          {/* ---------------------------------------------------- */}

          <path
            d="
              M 0 94
              C 75 94, 82 42, 170 42
              C 250 42, 270 138, 350 138
              C 430 138, 445 40, 535 40
              C 615 40, 630 138, 710 138
              C 795 138, 805 42, 895 42
              C 975 42, 990 94, 1200 94
            "
            stroke="url(#impactRibbon)"
            strokeOpacity="0.16"
            strokeWidth="15"
            strokeLinecap="round"
            filter="url(#ribbonBlur)"
          />


          {/* ---------------------------------------------------- */}
          {/* OUTER FROSTED RIBBON                                */}
          {/* ---------------------------------------------------- */}

          <path
            d="
              M 0 94
              C 75 94, 82 42, 170 42
              C 250 42, 270 138, 350 138
              C 430 138, 445 40, 535 40
              C 615 40, 630 138, 710 138
              C 795 138, 805 42, 895 42
              C 975 42, 990 94, 1200 94
            "
            stroke="#E8C9E2"
            strokeOpacity="0.62"
            strokeWidth="7"
            strokeLinecap="round"
          />


          {/* ---------------------------------------------------- */}
          {/* MAIN RIBBON                                          */}
          {/* ---------------------------------------------------- */}

          <path
            d="
              M 0 94
              C 75 94, 82 42, 170 42
              C 250 42, 270 138, 350 138
              C 430 138, 445 40, 535 40
              C 615 40, 630 138, 710 138
              C 795 138, 805 42, 895 42
              C 975 42, 990 94, 1200 94
            "
            stroke="url(#impactRibbon)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />


          {/* ---------------------------------------------------- */}
          {/* FINE WHITE HIGHLIGHT                                 */}
          {/* ---------------------------------------------------- */}

          <path
            d="
              M 0 91
              C 75 91, 82 39, 170 39
              C 250 39, 270 135, 350 135
              C 430 135, 445 37, 535 37
              C 615 37, 630 135, 710 135
              C 795 135, 805 39, 895 39
              C 975 39, 990 91, 1200 91
            "
            stroke="white"
            strokeOpacity="0.55"
            strokeWidth="1"
            strokeLinecap="round"
          />

        </svg>

      </div>


      {/* ======================================================== */}
      {/* FIVE RESPONSIBILITIES                                   */}
      {/* ======================================================== */}

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-10
          sm:grid-cols-2
          sm:gap-x-8
          sm:gap-y-12
          lg:grid-cols-5
          lg:gap-4
        "
      >

        {responsibilities.map((item, index) => {

          const icons = [

            /* ================================================== */
            /* 01 — PROMOTE                                      */
            /* ================================================== */

            <svg
              key="megaphone"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <path d="M4 10.5 16 6v12L4 13.5v-3Z" />
              <path d="M16 9.5c2.4.5 4 2 4 3.5s-1.6 3-4 3.5" />
              <path d="M7 14v5" />
              <path d="M5 19h4" />
            </svg>,

            /* ================================================== */
            /* 02 — COORDINATE                                  */
            /* ================================================== */

            <svg
              key="network"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <circle cx="12" cy="6.5" r="2.7" />
              <circle cx="6" cy="17" r="2.5" />
              <circle cx="18" cy="17" r="2.5" />
              <path d="m10.4 8.8-2.8 5.8" />
              <path d="m13.6 8.8 2.8 5.8" />
              <path d="M8.5 17h7" />
            </svg>,

            /* ================================================== */
            /* 03 — ORGANISE                                    */
            /* ================================================== */

            <svg
              key="calendar"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="5"
                width="16"
                height="15"
                rx="2"
              />
              <path d="M8 3v4M16 3v4M4 9h16" />
              <path d="M8 13h3M13 13h3M8 17h3" />
            </svg>,

            /* ================================================== */
            /* 04 — COLLABORATE                                  */
            /* ================================================== */

            <svg
              key="handshake"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <path d="m4.5 11 3-3a2.2 2.2 0 0 1 3.1 0l1.2 1.2" />
              <path d="m19.5 11-3-3a2.2 2.2 0 0 0-3.1 0l-1.2 1.2" />
              <path d="m8 13 2.1 2.1a2.3 2.3 0 0 0 3.2 0l.7-.7" />
              <path d="m16 13-2.1 2.1" />
              <path d="m5.5 10.5-1.2 1.2a2 2 0 0 0 2.8 2.8l1-1" />
              <path d="m18.5 10.5 1.2 1.2a2 2 0 0 1-2.8 2.8l-1-1" />
            </svg>,

            /* ================================================== */
            /* 05 — EXECUTE                                     */
            /* ================================================== */

            <svg
              key="growth"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-7 w-7 sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <path d="M4 19h16" />
              <path d="M6 16v-3" />
              <path d="M10 16V9" />
              <path d="M14 16v-5" />
              <path d="M18 16V6" />
              <path d="m6 8 4-2 4 1 4-3" />
              <path d="m15.5 4 2.5 0v2.5" />
            </svg>,
          ];

          return (
            <div
              key={item}
              className="
                group
                relative
                flex
                flex-col
                items-center
                text-center
              "
            >

              {/* ================================================= */}
              {/* FLOATING GLASS ORB                               */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  z-20
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.95]
                  bg-white/[0.42]
                  text-hult-pink
                  shadow-[0_14px_40px_rgba(75,49,83,0.10)]
                  backdrop-blur-[26px]
                  backdrop-saturate-[150%]
                  transition-all
                  duration-500
                  group-hover:-translate-y-1.5
                  group-hover:scale-[1.045]
                  group-hover:bg-white/[0.58]
                  group-hover:shadow-[0_20px_50px_rgba(230,0,126,0.14)]
                  sm:h-[100px]
                  sm:w-[100px]
                "
              >

                {/* Outer atmospheric halo */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-full
                    bg-white/[0.20]
                    blur-[15px]
                  "
                />

                {/* Frosted inner circle */}
                <span
                  className="
                    absolute
                    inset-[7px]
                    rounded-full
                    border
                    border-white/75
                    bg-gradient-to-br
                    from-[#FFF0F7]/75
                    via-white/50
                    to-[#EAF6FB]/70
                  "
                />

                {/* Top-left glass reflection */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-[18%]
                    top-[12%]
                    h-[22px]
                    w-[43px]
                    rotate-[-20deg]
                    rounded-full
                    bg-white/70
                    blur-[7px]
                  "
                />

                {/* Icon */}
                <span
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                >
                  {icons[index]}
                </span>

              </div>


              {/* ================================================= */}
              {/* NUMBER                                            */}
              {/* ================================================= */}

              <span
                className="
                  mt-5
                  font-mono
                  text-[11px]
                  font-medium
                  tracking-[0.10em]
                  text-[#8793A0]/75
                "
              >
                0{index + 1}
              </span>


              {/* ================================================= */}
              {/* PINK UNDERLINE                                    */}
              {/* ================================================= */}

              <span
                className="
                  mt-2
                  h-[2px]
                  w-7
                  rounded-full
                  bg-hult-pink/75
                  transition-all
                  duration-500
                  group-hover:w-11
                "
              />


              {/* ================================================= */}
              {/* RESPONSIBILITY                                  */}
              {/* ================================================= */}

              <p
                className="
                  mt-3
                  max-w-[185px]
                  font-display
                  text-[14px]
                  font-bold
                  leading-[1.38]
                  tracking-[-0.025em]
                  text-[#0F0F0F]
                  transition-colors
                  duration-300
                  group-hover:text-[#861F65]
                  sm:text-[15px]
                "
              >
                {item}
              </p>

            </div>
          );
        })}

      </div>

    </div>


    {/* ========================================================== */}
    {/* BACKGROUND MICRO TYPOGRAPHY                               */}
    {/* ========================================================== */}
        <div className="
        pointer-events-none
        absolute
        bottom-[95%]
        right-[8%]
        hidden
        flex-col
        items-start
        gap-1
        opacity-40
        lg:flex
      ">
          <span className="mt-0 h-15 w-px bg-[#0B1F3A]/30" />
        </div>
    <div
      className="
        pointer-events-none
        absolute
        bottom-[95%]
        right-[3%]
        hidden
        flex-col
        items-start
        gap-1
        opacity-30
        lg:flex
      "
    >
      
      <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
        People
      </span>

      <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
        Ideas
      </span>

        
      <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
        Action
      </span>

      <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#0B1F3A]">
        Impact
      </span>
    </div>


    {/* ========================================================== */}
    {/* BOTTOM EDITORIAL LINE                                     */}
    {/* ========================================================== */}

    <div
      className="
        mx-auto
        mt-12
        flex
        max-w-[900px]
        items-center
        gap-4
        sm:mt-14
      "
    >

      <span
        className="
          h-px
          flex-1
          bg-gradient-to-r
          from-transparent
          to-[#0B1F3A]/[0.10]
        "
      />

      <p
        className="
          shrink-0
          text-center
          text-[9px]
          font-bold
          uppercase
          tracking-[0.24em]
          text-[#9AA5B0]
        "
      >
        Every role moves the experience forward
      </p>

      <span
        className="
          h-px
          flex-1
          bg-gradient-to-l
          from-transparent
          to-[#0B1F3A]/[0.10]
        "
      />

    </div>

  </div>

</section>
  );
}
