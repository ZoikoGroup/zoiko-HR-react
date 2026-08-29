import type { Metadata } from "next";
import {
  AdminGuideHeroSection,
  ResponsibilitiesSection,
  AdminTaskMapSection,
  OrganizationSetupSection,
  PeopleAccessSection,
  PoliciesGovernanceSection,
  DataAdministrationSection,
  IntegrationsSection,
  TrustHandoffsSection,
  AuditHealthSection,
  ChangeManagementSection,
  TroubleshootingEscalationSection,
  SupportAuthorityMapSection,
  AdminGuideFaqSection,
} from "@/components/administrator-guide";

export const metadata: Metadata = {
  title: "Administrator Guide | Zoiko HR",
  description:
    "Source-approved Zoiko HR administration guidance for setup, access, policy, data operations, integrations, governance, troubleshooting and escalation.",
};

export default function AdministratorGuidePage() {
  return (
    <>
      <AdminGuideHeroSection />
      <ResponsibilitiesSection />
      <AdminTaskMapSection />
      <OrganizationSetupSection />
      <PeopleAccessSection />
      <PoliciesGovernanceSection />
      <DataAdministrationSection />
      <IntegrationsSection />
      <TrustHandoffsSection />
      <AuditHealthSection />
      <ChangeManagementSection />
      <TroubleshootingEscalationSection />
      <SupportAuthorityMapSection />
      <AdminGuideFaqSection />
    </>
  );
}
