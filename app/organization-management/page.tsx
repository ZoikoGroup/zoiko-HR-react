import type { Metadata } from "next";
import {
  OrgMgmtHeroSection,
  OrganizationModelSection,
  OverviewProofSection,
  StructuralTypesSection,
  RelationshipsSection,
  GovernedChangeSection,
  GovernancePermissionsSection,
  DataQualityAuditSection,
  ImportSyncSection,
  CrossModuleAuthoritySection,
  OrgMgmtFaqSection,
} from "@/components/organization-management";

export const metadata: Metadata = {
  title: "Organization Management | Zoiko HR",
  description:
    "Model entities, departments, teams, locations, and reporting lines with explicit structure, relationships, ownership, effective context, and auditability.",
};

export default function OrganizationManagementPage() {
  return (
    <>
      <OrgMgmtHeroSection />
      <OrganizationModelSection />
      <OverviewProofSection />
      <StructuralTypesSection />
      <RelationshipsSection />
      <GovernedChangeSection />
      <GovernancePermissionsSection />
      <DataQualityAuditSection />
      <ImportSyncSection />
      <CrossModuleAuthoritySection />
      <OrgMgmtFaqSection />
    </>
  );
}
