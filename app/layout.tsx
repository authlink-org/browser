import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuthLink.org",
  description:
    "AuthLink.org is a software monetization platform hosting fully user generated content.",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="/taboola_header.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
