import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Building Better Brands | Social Media & Branding Agency",
  description:
    "Building Better Brands is a social media agency helping businesses and personal brands grow through strategy, content, paid advertising, and scalable systems. Serving coaches, speakers, authors, and organizations.",
  openGraph: {
    title: "Building Better Brands | Social Media & Branding Agency",
    description:
      "We help businesses and personal brands transform into influential, recognizable market leaders that attract attention, build trust, and convert consistently.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Better Brands | Social Media & Branding Agency",
    description:
      "Strategy, content, paid advertising, and systems that drive real growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
