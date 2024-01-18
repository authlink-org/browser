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
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="/taboola_header.js" />
      <Script
        async
        src="https://capture.authlink.org/script.js"
        data-website-id="4eb49151-e050-4a75-b30b-30d4f0a6ef9e"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
