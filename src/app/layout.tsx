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
    default: "Hult Prize University of Calcutta",
    template: "%s | Hult Prize CU",
  },

  description:
    "Discover Hult Prize OnCampus at the University of Calcutta. Explore the competition, team registration, student entrepreneurship, sustainable development goals, and opportunities to create global impact.",

  applicationName: "Hult Prize University of Calcutta",

  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },

  manifest: "/favicon/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hult Prize University of Calcutta",
    title: "Hult Prize at the University of Calcutta",
    description:
      "Explore Hult Prize OnCampus at the University of Calcutta and discover opportunities to build entrepreneurial solutions for a better world.",
    url: "/",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hult-cu.vercel.app/#organization",
      "name": "Hult Prize University of Calcutta",
      "url": "https://hult-cu.vercel.app/",
      "description":
        "Hult Prize OnCampus at the University of Calcutta supports student entrepreneurship and the development of innovative solutions to global challenges.",
    },
    {
      "@type": "WebSite",
      "@id": "https://hult-cu.vercel.app/#website",
      "url": "https://hult-cu.vercel.app/",
      "name": "Hult Prize University of Calcutta",
      "description":
        "Official website for Hult Prize OnCampus at the University of Calcutta, featuring competition information, team registration, events and university initiatives.",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://hult-cu.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
