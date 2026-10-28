import type { Metadata } from "next";
import {
  SalesHeroSection,
  NotCommercialSection,
  EvaluationTopicsSection,
  SalesInquiryFormSection,
  EnterpriseResourcesSection,
  NextStepsSection,
  SalesFaqSection,
  SalesFinalCtaSection,
} from "@/components/contact-sales";

export const metadata: Metadata = {
  title: "Contact Sales | Zoiko HR",
  description:
    "Talk to Zoiko HR sales about product fit, global or multi-entity needs, implementation, integrations, security or procurement evaluation, and commercial questions.",
};

export default function ContactSalesPage() {
  return (
    <>
      <SalesHeroSection />
      <NotCommercialSection />
      <EvaluationTopicsSection />
      <SalesInquiryFormSection />
      <EnterpriseResourcesSection />
      <NextStepsSection />
      <SalesFaqSection />
      <SalesFinalCtaSection />
    </>
  );
}
