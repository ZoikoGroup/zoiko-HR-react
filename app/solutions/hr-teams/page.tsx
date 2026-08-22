import type { Metadata } from "next";
import {
  HrTeamsHeroSection,
  HrTeamsMeaningSection,
  OperatingModelSection,
  WorkbenchSection,
  EmployeeRecordsSection,
  LifecycleOperationsSection,
  WorkflowsApprovalsSection,
  PolicyDocumentsSection,
  EmployeeServicesSection,
  ReportingReviewSection,
  ExceptionsEscalationSection,
  RolesPermissionsSection,
  ManagerBoundarySection,
  GlobalContextSection,
  ConnectedPayrollSection,
  IntegrationsSourcesSection,
  ImplementationReadinessSection,
  TrustGovernanceSection,
  HrTeamsFinalCtaSection,
} from "@/components/hr-teams";

export const metadata: Metadata = {
  title: "HR Software for HR Teams | Zoiko HR",
  description:
    "One governed place for HR teams to manage employee records, HR workflows, reporting, policy and document operations, employee services, exceptions and evidence — built around roles, scope and accountability.",
};

export default function HrTeamsPage() {
  return (
    <div className="overflow-x-clip">
      <HrTeamsHeroSection />
      <HrTeamsMeaningSection />
      <OperatingModelSection />
      <WorkbenchSection />
      <EmployeeRecordsSection />
      <LifecycleOperationsSection />
      <WorkflowsApprovalsSection />
      <PolicyDocumentsSection />
      <EmployeeServicesSection />
      <ReportingReviewSection />
      <ExceptionsEscalationSection />
      <RolesPermissionsSection />
      <ManagerBoundarySection />
      <GlobalContextSection />
      <ConnectedPayrollSection />
      <IntegrationsSourcesSection />
      <ImplementationReadinessSection />
      <TrustGovernanceSection />
      <HrTeamsFinalCtaSection />
    </div>
  );
}
