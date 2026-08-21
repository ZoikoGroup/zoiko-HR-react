import type { Metadata } from "next";
import {
  PricingHeroSection,
  HowPricedSection,
  TransparencyStandardsSection,
  ScopedEvaluationSection,
  ProductScopeSection,
  EvaluationFactorsSection,
  TrustProcurementSection,
  RequestPricingFormSection,
  PricingFaqSection,
  PricingFinalCtaSection,
} from "@/components/pricing";

export const metadata: Metadata = {
  title: "Pricing | Zoiko HR",
  description:
    "Evaluate Zoiko HR for your people operations. Explore the approved commercial framework and request current pricing for your organization.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <HowPricedSection />
      <TransparencyStandardsSection />
      <ScopedEvaluationSection />
      <ProductScopeSection />
      <EvaluationFactorsSection />
      <TrustProcurementSection />
      <RequestPricingFormSection />
      <PricingFaqSection />
      <PricingFinalCtaSection />
    </>
  );
}
