import type { Metadata } from "next";
import {
  FaqHeroSection,
  FaqScopeSection,
  FindAnAnswerSection,
  BrowseByTopicSection,
  ProductFaqSection,
  GlobalFaqSection,
  IntegrationsFaqSection,
  SecurityFaqSection,
  ImplementationFaqSection,
  PricingAccessFaqSection,
  RolesFaqSection,
  HowAnswersKeptCurrentSection,
  SupportRoutesSection,
  HighIntentLibrarySection,
  FaqFinalCtaSection,
} from "@/components/faq";

export const metadata: Metadata = {
  title: "FAQ | Zoiko HR",
  description:
    "Direct, source-governed answers to common questions about Zoiko HR — product, global operation, integrations, security, implementation, pricing, and roles.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHeroSection />
      <FaqScopeSection />
      <FindAnAnswerSection />
      <BrowseByTopicSection />
      <ProductFaqSection />
      <GlobalFaqSection />
      <IntegrationsFaqSection />
      <SecurityFaqSection />
      <ImplementationFaqSection />
      <PricingAccessFaqSection />
      <RolesFaqSection />
      <HowAnswersKeptCurrentSection />
      <SupportRoutesSection />
      <HighIntentLibrarySection />
      <FaqFinalCtaSection />
    </>
  );
}
