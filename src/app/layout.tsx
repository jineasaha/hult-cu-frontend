import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementModal } from "@/components/ui/AnnouncementModal";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hult Prize | University of Calcutta",
    template: "%s | Hult Prize UC",
  },
  description:
    "Hult Prize at the University of Calcutta — empowering students to build innovative solutions for a better world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${dmSans.variable}`}
      >
        <Navbar />
        <AnnouncementModal />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}