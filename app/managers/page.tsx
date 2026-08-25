import type { Metadata } from "next";
import {
  ManagersHeroSection,
  ManagersMeaningSection,
  ClearAuthoritySection,
  ManagerOperatingModelSection,
  TeamContextSection,
  ApprovalsReviewSection,
  TeamActionsSection,
  DelegationEscalationSection,
  BlockedActionsSection,
  DecisionEvidenceSection,
  PrivacySensitiveSection,
  ConnectedPayrollSection,
  TrustGovernanceSection,
  EvaluationPathSection,
  ManagersFaqSection,
  ManagersFinalCtaSection,
} from "@/components/managers";

export const metadata: Metadata = {
  title: "HR Software for Managers | Zoiko HR",
  description:
    "Give managers the right team actions with the right authority and context — assigned approvals, team lifecycle tasks and permitted administrative actions with clear deadlines, decision context, escalation paths and evidence.",
};

export default function ManagersPage() {
  return (
    <div className="overflow-x-clip">
      <ManagersHeroSection />
      <ManagersMeaningSection />
      <ClearAuthoritySection />
      <ManagerOperatingModelSection />
      <TeamContextSection />
      <ApprovalsReviewSection />
      <TeamActionsSection />
      <DelegationEscalationSection />
      <BlockedActionsSection />
      <DecisionEvidenceSection />
      <PrivacySensitiveSection />
      <ConnectedPayrollSection />
      <TrustGovernanceSection />
      <EvaluationPathSection />
      <ManagersFaqSection />
      <ManagersFinalCtaSection />
    </div>
  );
}
