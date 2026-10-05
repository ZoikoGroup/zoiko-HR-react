import type { Metadata } from "next";
import {
  CompareHeroSection,
  EvaluationQuestionsSection,
  ComparisonSubjectsSection,
  ComparisonMatrixSection,
  MethodologySection,
  AuthorityRoutesSection,
  WhatWeCompareSection,
  StatusModelSection,
  SourceReviewSection,
  LimitationsReportSection,
  CompareFaqSection,
  CompareFinalCtaSection,
} from "@/components/compare-zoikohr";

export const metadata: Metadata = {
  title: "Compare Zoiko HR | Zoiko HR",
  description:
    "Compare Zoiko HR with every criterion sourced, dated and qualified — no aggregate winner score, and missing public evidence never treated as a negative fact.",
};

export default function CompareZoikoHrPage() {
  return (
    <>
      <CompareHeroSection />
      <EvaluationQuestionsSection />
      <ComparisonSubjectsSection />
      <ComparisonMatrixSection />
      <MethodologySection />
      <AuthorityRoutesSection />
      <WhatWeCompareSection />
      <StatusModelSection />
      <SourceReviewSection />
      <LimitationsReportSection />
      <CompareFaqSection />
      <CompareFinalCtaSection />
    </>
  );
}
