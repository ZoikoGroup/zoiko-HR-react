import type { Metadata } from "next";
import {
  PayrollHeroSection,
  DirectAnswerSection,
  InformationModelSection,
  CutoffTimingSection,
  IntakeBoundarySection,
  CorrelationSection,
  RejectionSection,
  ResultBoundarySection,
  SecuritySection,
  PayrollFaqSection,
  PayrollCtaSection,
} from "@/components/zoiko-payroll";

export const metadata: Metadata = {
  title: "Zoiko Payroll | Zoiko HR",
  description:
    "Coordinate approved employee and payroll-preparation information between Zoiko HR and Zoiko Payroll through explicit source ownership, approvals, cutoff context and reconciliation.",
};

export default function ZoikoPayrollPage() {
  return (
    <>
      <PayrollHeroSection />
      <DirectAnswerSection />
      <InformationModelSection />
      <CutoffTimingSection />
      <IntakeBoundarySection />
      <CorrelationSection />
      <RejectionSection />
      <ResultBoundarySection />
      <SecuritySection />
      <PayrollFaqSection />
      <PayrollCtaSection />
    </>
  );
}
