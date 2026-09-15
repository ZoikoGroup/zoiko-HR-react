import type { Metadata } from "next";
import {
  AccessibilityHeroSection,
  CommitmentPrinciplesSection,
  ConformanceRecordSection,
  ScopeMatrixSection,
  TestingMethodsSection,
  ImplementationContractSection,
  AssistiveTechnologySection,
  KnownLimitationsSection,
  FeedbackSection,
  DocumentsMediaSection,
  SharedResponsibilitySection,
  ProcurementEvidenceSection,
  ChangeHistorySection,
  AccessibilityFaqSection,
} from "@/components/accessibility";

export const metadata: Metadata = {
  title: "Accessibility | Zoiko HR",
  description:
    "Review Zoiko HR accessibility information: our commitment, the current conformance record, approved scope, testing methods, known limitations and the route for accessibility feedback or support.",
};

export default function AccessibilityPage() {
  return (
    <>
      <AccessibilityHeroSection />
      <CommitmentPrinciplesSection />
      <ConformanceRecordSection />
      <ScopeMatrixSection />
      <TestingMethodsSection />
      <ImplementationContractSection />
      <AssistiveTechnologySection />
      <KnownLimitationsSection />
      <FeedbackSection />
      <DocumentsMediaSection />
      <SharedResponsibilitySection />
      <ProcurementEvidenceSection />
      <ChangeHistorySection />
      <AccessibilityFaqSection />
    </>
  );
}
