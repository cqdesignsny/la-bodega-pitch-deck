import type { Metadata } from "next";
import { Playfair_Display, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "The Bodega Creative Institute | Investment Pitch Deck",
  description:
    "NYC's first all-ages creative arts academy. Music. Dance. Production. Culture. Community. Built in the heart of the South Bronx.",
  openGraph: {
    title: "The Bodega Creative Institute | Investment Pitch Deck",
    description:
      "NYC's first all-ages creative arts academy built in the heart of the South Bronx.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
