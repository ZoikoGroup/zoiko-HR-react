import type { Metadata } from "next";
import {
  ComplyHeroSection,
  DirectAnswerSection,
  EvidenceRequirementsSection,
  EvidenceBoundarySection,
  ClaimBoundarySection,
  ExceptionsSection,
  WorkflowHandoffSection,
  EvidenceMinimizationSection,
  AdjacentAuthoritiesSection,
  ComplyFaqSection,
  ComplyCtaSection,
} from "@/components/zoiko-comply";

export const metadata: Metadata = {
  title: "Zoiko Comply | Zoiko HR",
  description:
    "Coordinate approved policies, controls, evidence and compliance workflows between Zoiko HR and Zoiko Comply while preserving scope, source authority, versions, permissions and review meaning.",
};

export default function ZoikoComplyPage() {
  return (
    <>
      <ComplyHeroSection />
      <DirectAnswerSection />
      <EvidenceRequirementsSection />
      <EvidenceBoundarySection />
      <ClaimBoundarySection />
      <ExceptionsSection />
      <WorkflowHandoffSection />
      <EvidenceMinimizationSection />
      <AdjacentAuthoritiesSection />
      <ComplyFaqSection />
      <ComplyCtaSection />
    </>
  );
}
