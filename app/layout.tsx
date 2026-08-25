import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, IBM_Plex_Sans } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoiko HR | Global HR Management Platform",
  description:
    "Zoiko HR centralizes workforce information, structures HR processes, and connects your people operations for growing, mid-market, and global organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3EEJFHC8MZ"
          strategy="afterInteractive"
        />
       
        <Navbar />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
