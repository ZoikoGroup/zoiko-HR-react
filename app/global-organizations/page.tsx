import type { Metadata } from "next";
import {
  GlobalOrgHeroSection,
  GlobalOrgMeaningSection,
  GlobalOperationsShiftSection,
  OperatingModelSection,
  CommandCenterSection,
  OrganizationContextSection,
  LocalConfigurationSection,
  AvailabilityStatusSection,
  RolesDelegationSection,
  WorkforceRecordsSection,
  ChangeJourneysSection,
  WorkflowsApprovalsSection,
  PrivacyDataFlowSection,
  IntegrationsSourcesSection,
  TrustResourcesSection,
  GlobalOrgFaqSection,
  GlobalOrgFinalCtaSection,
} from "@/components/global-organizations";

export const metadata: Metadata = {
  title: "HR Software for Global Organizations | Zoiko HR",
  description:
    "Coordinate global HR with shared structure and local control — consistent HR structures with approved local configuration, ownership, effective dates, exceptions and evidence kept visible.",
};

export default function GlobalOrganizationsPage() {
  return (
    <div className="overflow-x-clip">
      <GlobalOrgHeroSection />
      <GlobalOrgMeaningSection />
      <GlobalOperationsShiftSection />
      <OperatingModelSection />
      <CommandCenterSection />
      <OrganizationContextSection />
      <LocalConfigurationSection />
      <AvailabilityStatusSection />
      <RolesDelegationSection />
      <WorkforceRecordsSection />
      <ChangeJourneysSection />
      <WorkflowsApprovalsSection />
      <PrivacyDataFlowSection />
      <IntegrationsSourcesSection />
      <TrustResourcesSection />
      <GlobalOrgFaqSection />
      <GlobalOrgFinalCtaSection />
    </div>
  );
}
