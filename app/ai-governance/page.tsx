import type { Metadata } from "next";
import {
  AiGovernanceHeroSection,
  AeoAnswerSection,
  TransparencyStatusSection,
  UseCaseRegistrySection,
  HumanReviewSection,
  PermissionControlsSection,
  DataUseBoundariesSection,
  EvaluationSection,
  ProhibitedUsesSection,
  LoggingEvidenceSection,
  ChangeGovernanceSection,
  ConcernEscalationSection,
  AiGovernanceFaqSection,
} from "@/components/ai-governance";

export const metadata: Metadata = {
  title: "AI Governance | Zoiko HR",
  description:
    "Review how approved AI-related behavior in Zoiko HR is governed through human review, permission controls, transparency, logging and prohibited-use boundaries — published only from current source-approved records.",
};

export default function AiGovernancePage() {
  return (
    <>
      <AiGovernanceHeroSection />
      <AeoAnswerSection />
      <TransparencyStatusSection />
      <UseCaseRegistrySection />
      <HumanReviewSection />
      <PermissionControlsSection />
      <DataUseBoundariesSection />
      <EvaluationSection />
      <ProhibitedUsesSection />
      <LoggingEvidenceSection />
      <ChangeGovernanceSection />
      <ConcernEscalationSection />
      <AiGovernanceFaqSection />
    </>
  );
}
