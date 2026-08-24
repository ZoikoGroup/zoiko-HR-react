import type { Metadata } from "next";
import {
  ConnectHrHeroSection,
  AeoAnswerSection,
  ExplicitHandoffsSection,
  CommandCenterSection,
  AuthorityModelSection,
  TimeContextSection,
  PayrollBoundarySection,
  EvidenceAuditSection,
  ConnectedReportingSection,
  RolesPermissionsSection,
  ConnectHrFaqSection,
  ConnectHrFinalCtaSection,
} from "@/components/connect-hr";

export const metadata: Metadata = {
  title: "Connect HR, Time & Payroll | Zoiko HR",
  description:
    "Coordinate approved HR context, time context and payroll processes through explicit source ownership, effective dates, approvals, cutoffs, validation, exceptions, reconciliation and evidence.",
};

export default function ConnectHrPage() {
  return (
    <div className="overflow-x-clip">
      <ConnectHrHeroSection />
      <AeoAnswerSection />
      <ExplicitHandoffsSection />
      <CommandCenterSection />
      <AuthorityModelSection />
      <TimeContextSection />
      <PayrollBoundarySection />
      <EvidenceAuditSection />
      <ConnectedReportingSection />
      <RolesPermissionsSection />
      <ConnectHrFaqSection />
      <ConnectHrFinalCtaSection />
    </div>
  );
}
