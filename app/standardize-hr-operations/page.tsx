import type { Metadata } from "next";
import {
  StandardizeHrHeroSection,
  HeroScopeSection,
  ComplexitySignalsSection,
  OperatingControlModelSection,
  CommonBaselineVariationSection,
  StandardizedDataSection,
  OwnershipDelegationSection,
  ControlledExecutionSection,
  ImplementationGovernanceSection,
  EvaluationChecklistSection,
  AdjacentPathwaysSection,
  TrustAuthoritySection,
  StandardizeHrFaqSection,
  StandardizeHrFinalCtaSection,
} from "@/components/standardize-hr-operations";

export const metadata: Metadata = {
  title: "Standardize HR Operations | Zoiko HR",
  description:
    "Standardize HR operations as organizational complexity increases. Build common records, policies and processes while keeping delegated responsibility, approved variation, exceptions and evidence visible.",
};

export default function StandardizeHrOperationsPage() {
  return (
    <div className="overflow-x-clip">
      <StandardizeHrHeroSection />
      <HeroScopeSection />
      <ComplexitySignalsSection />
      <OperatingControlModelSection />
      <CommonBaselineVariationSection />
      <StandardizedDataSection />
      <OwnershipDelegationSection />
      <ControlledExecutionSection />
      <ImplementationGovernanceSection />
      <EvaluationChecklistSection />
      <AdjacentPathwaysSection />
      <TrustAuthoritySection />
      <StandardizeHrFaqSection />
      <StandardizeHrFinalCtaSection />
    </div>
  );
}
