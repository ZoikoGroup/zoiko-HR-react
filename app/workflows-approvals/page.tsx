import type { Metadata } from "next";
import {
  WorkflowsHeroSection,
  GovernedByDesignSection,
  SixStepsSection,
  WorkflowLibrarySection,
  ProductProofSection,
  ConditionsRoutingSection,
  DecisionRightsSection,
  ExceptionsSection,
  ActionsContractSection,
  OperationalHealthSection,
  WorkflowsFaqSection,
  WorkflowsFinalCtaSection,
} from "@/components/workflows-approvals";

export const metadata: Metadata = {
  title: "Workflows & Approvals | Zoiko HR",
  description:
    "Coordinate workforce processes through governed routing, conditional logic, approval steps and traceable audit evidence — every decision explainable, every change versioned.",
};

export default function WorkflowsApprovalsPage() {
  return (
    <>
      <WorkflowsHeroSection />
      <GovernedByDesignSection />
      <SixStepsSection />
      <WorkflowLibrarySection />
      <ProductProofSection />
      <ConditionsRoutingSection />
      <DecisionRightsSection />
      <ExceptionsSection />
      <ActionsContractSection />
      <OperationalHealthSection />
      <WorkflowsFaqSection />
      <WorkflowsFinalCtaSection />
    </>
  );
}
