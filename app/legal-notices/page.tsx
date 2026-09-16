import type { Metadata } from "next";
import { LegalHeroSection, NoticeBodySection } from "@/components/legal-notices";

export const metadata: Metadata = {
  title: "Legal Notices | Zoiko HR",
  description:
    "Operator and company information, copyright and trademark statements, product-information boundaries, third-party references, and the specialist routes for legal, IP, privacy and security inquiries.",
};

export default function LegalNoticesPage() {
  return (
    <>
      <LegalHeroSection />
      <NoticeBodySection />
    </>
  );
}
