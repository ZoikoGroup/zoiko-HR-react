import type { Metadata } from "next";
import {
  MidMarketHeroSection,
  MidMarketMeaningSection,
  OperationalComplexitySection,
  OperatingControlModelSection,
  BaselineVariationSection,
  StandardizedDataSection,
  StructureDelegationSection,
  ProductProofSection,
  DistributedWorkSection,
  ReviewablePictureSection,
  ReportingProofSection,
  ConnectedSystemsSection,
  MidMarketTrustSection,
  ImplementationGovernanceSection,
  EvaluationChecklistSection,
  AdjacentSolutionsSection,
  ApprovedResourcesSection,
  MidMarketFaqSection,
  MidMarketFinalCtaSection,
} from "@/components/mid-market";

export const metadata: Metadata = {
  title: "HR Software for Mid-Market Organizations | Zoiko HR",
  description:
    "Standardize HR operations as organizational complexity increases — common records, policies and processes with delegated responsibility, approved variation and evidence kept visible.",
};

export default function MidMarketPage() {
  return (
    <div className="overflow-x-clip">
      <MidMarketHeroSection />
      <MidMarketMeaningSection />
      <OperationalComplexitySection />
      <OperatingControlModelSection />
      <BaselineVariationSection />
      <StandardizedDataSection />
      <StructureDelegationSection />
      <ProductProofSection />
      <DistributedWorkSection />
      <ReviewablePictureSection />
      <ReportingProofSection />
      <ConnectedSystemsSection />
      <MidMarketTrustSection />
      <ImplementationGovernanceSection />
      <EvaluationChecklistSection />
      <AdjacentSolutionsSection />
      <ApprovedResourcesSection />
      <MidMarketFaqSection />
      <MidMarketFinalCtaSection />
    </div>
  );
}
