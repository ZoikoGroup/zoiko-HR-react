import type { Metadata } from "next";
import {
  AiHeroSection,
  AiSubNav,
  DirectAnswerSection,
  PermissionAwareSection,
  SourceLinkedSection,
  DraftAssistanceSection,
  DecisionRightsSection,
  RefusalPatternsSection,
  RoleExperiencesSection,
  AdminGovernanceSection,
  EvaluateCtaSection,
  AiFaqSection,
  AiFinalCtaSection,
} from "@/components/ai-assistance";

export const metadata: Metadata = {
  title: "AI Assistance | Zoiko HR",
  description:
    "Governed AI assistance for approved HR tasks — find authorized information, summarize status, prepare drafts for review — with permissions, sources and human judgment kept visible.",
};

export default function AiAssistancePage() {
  return (
    <>
      <AiHeroSection />
      <AiSubNav />
      <DirectAnswerSection />
      <PermissionAwareSection />
      <SourceLinkedSection />
      <DraftAssistanceSection />
      <DecisionRightsSection />
      <RefusalPatternsSection />
      <RoleExperiencesSection />
      <AdminGovernanceSection />
      <EvaluateCtaSection />
      <AiFaqSection />
      <AiFinalCtaSection />
    </>
  );
}
