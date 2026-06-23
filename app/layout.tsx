import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Building Better Brands | Company Portfolio",
  description:
    "A professional portfolio for Building Better Brands, a social media agency helping businesses and personal brands grow through strategy, content, ads, and systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
