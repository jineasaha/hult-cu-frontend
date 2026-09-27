"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";

const contactGroups = [
  {
    group: "Directorate Boards",
    contacts: [
      {
        name: "Ashmit Das",
        role: "Campus Director",
        phone: "+91 62892 08811",
        email: "ashmit4066@gmail.com",
      },
      {
        name: "Diksha Rani",
        role: "Deputy Campus Director",
        phone: "+91 94728 52163",
        email: "dikshabuilds@gmail.com",
      },
      {
        name: "Deblina Biswas",
        role: "Deputy Campus Director",
        phone: "+91 82505 15966",
        email: "deblinabiswas2024@gmail.com",
      },
    ],
  },
  {
    group: "Committee Members",
    contacts: [
      {
        name: "Bhavita Rai",
        role: "Business Partnership and Sponsorship",
        phone: "+91 90628 48806",
        email: "raibhavita@gmail.com",
      },
      {
        name: "Angellena Basu",
        role: "Business Partnership and Sponsorship",
        phone: "+91 78904 45122",
        email: "angellenabasu@gmail.com",
      },
      {
        name: "Bazilur Rahman Bazigh",
        role: "Team Registration and Participants Coordinator",
        phone: "+91 74395 67140",
        email: "bazilur.rb@gmail.com",
      },
      {
        name: "Saheli Chatterjee",
        role: "Judge and Mentor Coordinator",
        phone: "+91 84209 95710",
        email: "sahelichatterjee2007@gmail.com",
      },
    ],
  },
];

export function ContactSection() {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(key);

      setTimeout(() => {
        setCopiedContact(null);
      }, 1600);
    } catch {
      // Silently fail if clipboard access is unavailable
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FFF4F0]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ============================================================ */}
      {/* SOFT PEACH ATMOSPHERE                                        */}
      {/* ============================================================ */}

      {/* Large warm peach glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(250, 221, 213, 0.48) 0%, rgba(255,222,211,0.24) 45%, transparent 74%)",
        }}
      />

      {/* Soft blue atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(190,224,241,0.30) 0%, rgba(221,238,247,0.14) 48%, transparent 74%)",
        }}
      />

      {/* Soft pink lower atmosphere */}
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
          blur-[140px]
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,184,213,0.20) 0%, rgba(255,224,235,0.10) 48%, transparent 75%)",
        }}
      />

      {/* Central white light */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[10%]
          h-[430px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.72) 0%, rgba(255,248,245,0.36) 48%, transparent 76%)",
        }}
      />

      {/* ============================================================ */}
      {/* CONTENT                                                       */}
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
        {/* HEADER                                                     */}
        {/* ========================================================== */}

        <Reveal delay={0.2} y={28}>
          <div
            className="
              mx-auto
              max-w-[780px]
              text-center
              -mt-9
            "
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4">
              <span
                className="
                  h-px
                  w-10
                  bg-[#E6007E]/35
                  sm:w-12
                "
              />

              <p
                className="
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  text-[#C2186B]
                  sm:text-[14px]
                "
              >
                Have questions?
              </p>

              <span
                className="
                  h-px
                  w-10
                  bg-[#E6007E]/35
                  sm:w-12
                "
              />
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                font-display
                text-[clamp(2.8rem,5vw,3.5rem)]
                font-bold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#0F0F0F]
              "
            >
              We&apos;re {" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#0B1F3A]
                  via-[#6A4269]
                  to-[#E6007E]
                  bg-clip-text
                  text-transparent
                "
              >
                here to help.
              </span>
            </h2>

            {/* Supporting copy */}
            <p
              className="
                mx-auto
                mt-6
                max-w-[620px]
                text-[14px]
                font-semibold
                leading-7
                text-[#4B4B4B]/70
                sm:text-[15px]
              "
            >
              Not sure which role is right for you or have a question
              about the recruitment process? Reach out to the team
              and we&apos;ll be happy to help.
            </p>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* CONTACT DIRECTORY                                          */}
        {/* ========================================================== */}

        <Reveal delay={0.2} y={28}>
          <div className="relative mt-12 sm:mt-14 lg:mt-16">
            {/* Shared soft glow behind cards */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[380px]
                w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                blur-[100px]
              "
              style={{
                background:
                  "radial-gradient(ellipse, rgba(207,228,239,0.20) 0%, rgba(255,255,255,0.25) 42%, rgba(245,194,217,0.13) 68%, transparent 78%)",
              }}
            />

            {/* ====================================================== */}
            {/* CONTACT GROUPS                                         */}
            {/* ====================================================== */}

            <div className="relative space-y-14 sm:space-y-16 lg:space-y-20">
              {contactGroups.map((group, groupIndex) => (
                <div key={group.group}>
                  {/* ================================================== */}
                  {/* GROUP TITLE                                         */}
                  {/* ================================================== */}

                  <div className="mb-7 flex items-center justify-center gap-4 sm:mb-8 sm:gap-5">
                    <span
                      className="
                        h-px
                        w-10
                        bg-gradient-to-r
                        from-transparent
                        to-[#0B1F3A]/30
                        sm:w-16
                      "
                    />

                    <div
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-full
                        border
                        border-[#0B1F3A]/10
                        bg-white/45
                        px-4
                        py-2
                        shadow-[0_6px_20px_rgba(11,31,58,0.045)]
                        backdrop-blur-md
                        sm:px-5
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#E6007E]
                          shadow-[0_0_0_4px_rgba(230,0,126,0.08)]
                        "
                      />

                      <h3
                        className="
                          font-display
                          text-[12px]
                          font-bold
                          uppercase
                          tracking-[0.20em]
                          text-[#0B1F3A]
                          sm:text-[13px]
                        "
                      >
                        {group.group}
                      </h3>
                    </div>

                    <span
                      className="
                        h-px
                        w-10
                        bg-gradient-to-l
                        from-transparent
                        to-[#0B1F3A]/30
                        sm:w-16
                      "
                    />
                  </div>

                  {/* ================================================== */}
                  {/* CONTACT GRID                                        */}
                  {/* ================================================== */}

                  <div
                    className={`
                      grid
                      gap-5
                      md:grid-cols-2
                      ${groupIndex === 1 ? "lg:grid-cols-4" : "lg:grid-cols-3"}
                    `}
                  >
                    {group.contacts.map((contact, index) => {
                      const cardNumber =
                        contactGroups
                          .slice(0, groupIndex)
                          .reduce((total, currentGroup) => total + currentGroup.contacts.length, 0) +
                        index +
                        1;

                      return (
                      <div
                        key={contact.email}
                        className={`
                          group
                          relative
                          ${groupIndex === 1 ? "min-h-[260px]" : "min-h-[290px]"}
                          overflow-hidden
                          rounded-[28px]
                          border
                          border-white/[0.88]
                          bg-white/[0.42]
                          p-7
                          shadow-[0_22px_65px_rgba(75,53,67,0.09)]
                          backdrop-blur-[30px]
                          backdrop-saturate-[145%]
                          transition-all
                          duration-500
                          hover:-translate-y-1.5
                          hover:border-white
                          hover:shadow-[0_28px_75px_rgba(75,53,67,0.13)]
                          sm:p-8
                        `}
                      >
                        {/* ================================================== */}
                        {/* BLUE → WHITE → PINK GLASS FOUNDATION              */}
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
                              "linear-gradient(135deg, rgba(208,234,247,0.48) 0%, rgba(255,255,255,0.62) 47%, rgba(255,224,238,0.48) 100%)",
                          }}
                        />

                        {/* ================================================== */}
                        {/* TOP GLASS REFLECTION                              */}
                        {/* ================================================== */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            left-6
                            right-6
                            top-0
                            h-px
                            bg-white
                            opacity-95
                          "
                        />

                        {/* ================================================== */}
                        {/* SOFT BLUE CORNER LIGHT                            */}
                        {/* ================================================== */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -left-20
                            -top-20
                            h-52
                            w-52
                            rounded-full
                            bg-[#B9DDEC]/[0.34]
                            blur-[65px]
                            transition-transform
                            duration-700
                            group-hover:scale-125
                          "
                        />

                        {/* ================================================== */}
                        {/* SOFT PINK CORNER LIGHT                            */}
                        {/* ================================================== */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -bottom-24
                            -right-20
                            h-52
                            w-52
                            rounded-full
                            bg-[#F2A8C9]/[0.20]
                            blur-[65px]
                            transition-transform
                            duration-700
                            group-hover:scale-125
                          "
                        />

                        {/* ================================================== */}
                        {/* WHITE FROSTED HIGHLIGHT                           */}
                        {/* ================================================== */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            -left-12
                            -top-10
                            h-28
                            w-52
                            rotate-[-15deg]
                            rounded-full
                            bg-white/55
                            blur-[28px]
                          "
                        />

                        {/* ================================================== */}
                        {/* CARD CONTENT                                       */}
                        {/* ================================================== */}

                        <div className="relative flex h-full flex-col">
                          {/* TOP ROW */}
                          <div className="flex items-center justify-between">
                            {/* Number */}
                            <span
                              className="
                                inline-flex
                                h-7
                                items-center
                                rounded-full
                                border
                                border-[#0B1F3A]/[0.10]
                                bg-white/45
                                px-2.5
                                font-mono
                                text-[8px]
                                font-bold
                                tracking-[0.12em]
                                text-[#0B1F3A]/55
                                backdrop-blur-md
                              "
                            >
                              {String(cardNumber).padStart(2, "0")}
                            </span>

                            {/* Contact icon */}
                            <div
                              className="
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-[16px]
                                border
                                border-white/[0.92]
                                bg-white/60
                                text-[#0B1F3A]
                                shadow-[0_9px_25px_rgba(11,31,58,0.07)]
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:bg-white/75
                                group-hover:shadow-[0_12px_30px_rgba(11,31,58,0.10)]
                              "
                            >
                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  inset-[3px]
                                  rounded-[13px]
                                  border
                                  border-white/70
                                "
                              />

                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.55"
                                className="relative h-[20px] w-[20px]"
                                aria-hidden="true"
                              >
                                <circle cx="12" cy="8" r="3.2" />
                                <path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6" />
                              </svg>
                            </div>
                          </div>

                          {/* ================================================= */}
                          {/* PERSON INFORMATION                               */}
                          {/* ================================================= */}

                          <div className="mt-auto pt-10">
                            <p
                              className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.24em]
                                text-[#C2186B]/75
                              "
                            >
                              {contact.role}
                            </p>

                            <h3
                              className={`
                                mt-2
                                font-display
                                ${groupIndex === 1 ? "text-[21px] sm:text-[23px]" : "text-[25px] sm:text-[27px]"}
                                font-bold
                                leading-tight
                                tracking-[-0.04em]
                                text-[#0B1F3A]
                              `}
                            >
                              {contact.name}
                            </h3>

                            {/* Divider */}
                            <div className="mt-5 flex items-center gap-2">
                              <span
                                className="
                                  h-[2px]
                                  w-9
                                  rounded-full
                                  bg-gradient-to-r
                                  from-[#570F3F]
                                  via-[#B3428C]
                                  to-[#E6007E]/60
                                  transition-all
                                  duration-500
                                  group-hover:w-14
                                "
                              />

                              <span
                                className="
                                  h-1
                                  w-1
                                  rounded-full
                                  bg-[#E6007E]/40
                                "
                              />
                            </div>

                            {/* ================================================= */}
                            {/* PHONE                                            */}
                            {/* ================================================= */}

                            <button
                              type="button"
                              onClick={() =>
                                handleCopy(
                                  contact.phone,
                                  `${contact.email}-phone`
                                )
                              }
                              className="
                                mt-5
                                flex
                                w-full
                                min-w-0
                                items-center
                                gap-3
                                rounded-[14px]
                                border
                                border-white/[0.75]
                                bg-white/[0.40]
                                px-3.5
                                py-2.5
                                text-left
                                text-[13px]
                                font-semibold
                                text-[#0B1F3A]/75
                                shadow-[0_5px_18px_rgba(11,31,58,0.035)]
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:bg-white/[0.68]
                                hover:text-[#0B1F3A]
                                active:scale-[0.99]
                              "
                              aria-label={`Copy phone number ${contact.phone}`}
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white bg-[#EAF5FA]/80 text-[#0B1F3A]/70">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.7"
                                  className="h-[15px] w-[15px]"
                                  aria-hidden="true"
                                >
                                  <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C11.1 19.5 4.5 12.9 4.5 5.5c0-1.1.9-2 2-2Z" />
                                </svg>
                              </span>

                              <span className="min-w-0 flex-1 truncate">
                                {contact.phone}
                              </span>

                              <span
                                className={`
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  transition-all
                                  duration-300
                                  ${
                                    copiedContact ===
                                    `${contact.email}-phone`
                                      ? "border-[#8FBFA7]/50 bg-[#EAF7F0] text-[#3E8A62]"
                                      : "border-white/80 bg-white/55 text-[#0B1F3A]/45"
                                  }
                                `}
                              >
                                {copiedContact ===
                                `${contact.email}-phone` ? (
                                  <Check
                                    className="h-[14px] w-[14px]"
                                    strokeWidth={2.2}
                                  />
                                ) : (
                                  <Copy
                                    className="h-[13px] w-[13px]"
                                    strokeWidth={1.8}
                                  />
                                )}
                              </span>
                            </button>

                            {/* ================================================= */}
                            {/* EMAIL                                            */}
                            {/* ================================================= */}

                            <button
                              type="button"
                              onClick={() =>
                                handleCopy(
                                  contact.email,
                                  `${contact.email}-email`
                                )
                              }
                              className="
                                mt-2
                                flex
                                w-full
                                min-w-0
                                items-center
                                gap-3
                                rounded-[14px]
                                border
                                border-white/[0.75]
                                bg-white/[0.40]
                                px-3.5
                                py-2.5
                                text-left
                                text-[13px]
                                font-semibold
                                text-[#0B1F3A]/75
                                shadow-[0_5px_18px_rgba(11,31,58,0.035)]
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:bg-white/[0.68]
                                hover:text-[#C2186B]
                                active:scale-[0.99]
                              "
                              aria-label={`Copy email address ${contact.email}`}
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white bg-[#FFF0F6]/80 text-[#C2186B]/75">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.7"
                                  className="h-[15px] w-[15px]"
                                  aria-hidden="true"
                                >
                                  <rect
                                    x="3.5"
                                    y="5"
                                    width="17"
                                    height="14"
                                    rx="2"
                                  />
                                  <path d="m5 7 7 5 7-5" />
                                </svg>
                              </span>

                              <span className="min-w-0 flex-1 truncate">
                                {contact.email}
                              </span>

                              <span
                                className={`
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  transition-all
                                  duration-300
                                  ${
                                    copiedContact ===
                                    `${contact.email}-email`
                                      ? "border-[#8FBFA7]/50 bg-[#EAF7F0] text-[#3E8A62]"
                                      : "border-white/80 bg-white/55 text-[#C2186B]/45"
                                  }
                                `}
                              >
                                {copiedContact ===
                                `${contact.email}-email` ? (
                                  <Check
                                    className="h-[14px] w-[14px]"
                                    strokeWidth={2.2}
                                  />
                                ) : (
                                  <Copy
                                    className="h-[13px] w-[13px]"
                                    strokeWidth={1.8}
                                  />
                                )}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* BOTTOM EDITORIAL NOTE                                     */}
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
              to-black/40
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
              text-black/60
            "
          >
            University of Calcutta · Hult Prize 2026–27
          </p>

          <span
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-black/40
            "
          />
        </div>
      </div>
    </section>
  );
}