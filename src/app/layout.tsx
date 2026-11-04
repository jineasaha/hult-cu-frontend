import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import { AnnouncementModal } from "@/components/ui/AnnouncementModal";

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
  metadataBase: new URL("https://hult-cu.vercel.app"),

  verification: {
    google: "WXj6qAl80c4M0aTslOEraxKlnew0rxC5gsol1F2E2MQ",
  },

  title: {
    default: "Hult Prize at the University of Calcutta",
    template: "%s | Hult Prize CU",
  },

  description:
    "Discover Hult Prize OnCampus at the University of Calcutta. Explore the competition, team registration, student entrepreneurship, sustainable development goals, and opportunities to create global impact.",

  applicationName: "Hult Prize at the University of Calcutta",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hult Prize at the University of Calcutta",
    title: "Hult Prize at the University of Calcutta",
    description:
      "Explore Hult Prize OnCampus at the University of Calcutta and discover opportunities to build entrepreneurial solutions for a better world.",
    url: "/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
