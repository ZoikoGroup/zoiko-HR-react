import type { Metadata } from "next";
import {
  PerformanceHeroSection,
  PrinciplesSection,
  ChallengeSection,
  OperatingModelSection,
  GoalsSection,
  CheckInsSection,
  CalibrationSection,
  SelfReviewSection,
  DevelopmentPlansSection,
  AiBoundarySection,
  RoleExperiencesSection,
  ReportingSection,
  EvaluateCtaSection,
  PerformanceFaqSection,
  PerformanceFinalCtaSection,
} from "@/components/performance-management";

export const metadata: Metadata = {
  title: "Performance Management | Zoiko HR",
  description:
    "Run goals, check-ins, feedback, review cycles, calibration and development actions in one permission-aware workflow — with visible ownership, evidence and human judgment.",
};

export default function PerformanceManagementPage() {
  return (
    <>
      <PerformanceHeroSection />
      <PrinciplesSection />
      <ChallengeSection />
      <OperatingModelSection />
      <GoalsSection />
      <CheckInsSection />
      <CalibrationSection />
      <SelfReviewSection />
      <DevelopmentPlansSection />
      <AiBoundarySection />
      <RoleExperiencesSection />
      <ReportingSection />
      <EvaluateCtaSection />
      <PerformanceFaqSection />
      <PerformanceFinalCtaSection />
    </>
  );
}
