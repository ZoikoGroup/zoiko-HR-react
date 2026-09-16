import type { Metadata } from "next";
import { CookieHeroSection, NoticeBodySection } from "@/components/cookie-notice";

export const metadata: Metadata = {
  title: "Cookie Notice | Zoiko HR",
  description:
    "How Zoiko HR uses cookies and similar technologies on its public websites — categories, the technology inventory, how your choices work, privacy signals, browser controls, and how to change your settings.",
};

export default function CookieNoticePage() {
  return (
    <>
      <CookieHeroSection />
      <NoticeBodySection />
    </>
  );
}
