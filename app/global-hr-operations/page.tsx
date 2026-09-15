import type { Metadata } from "next";
import {
  GlobalHrOperationsHeroSection,
  ExpansionPressureSection,
  ExpansionReadinessSection,
  OperatingModelSection,
  EntityArchitectureSection,
  ConfigurationDomainsSection,
  GovernedPoliciesSection,
  PermissionsGovernanceSection,
  OperationalVisibilitySection,
  ConnectedWorkforceStackSection,
  ImplementationPathSection,
  ExpansionScenariosSection,
  BusinessOutcomesSection,
  TrustEnterpriseReadinessSection,
  GlobalHrOperationsFaqSection,
  GlobalHrOperationsFinalCtaSection,
} from "@/components/global-hr-operations";

export const metadata: Metadata = {
  title: "Global HR Operations | Zoiko HR",
  description:
    "Expand globally without fragmenting HR operations. Bring entities, workforce records, permissions, policies and HR workflows into one governed operating environment.",
};

export default function GlobalHrOperationsPage() {
  return (
    <>
      <GlobalHrOperationsHeroSection />
      <ExpansionPressureSection />
      <ExpansionReadinessSection />
      <OperatingModelSection />
      <EntityArchitectureSection />
      <ConfigurationDomainsSection />
      <GovernedPoliciesSection />
      <PermissionsGovernanceSection />
      <OperationalVisibilitySection />
      <ConnectedWorkforceStackSection />
      <ImplementationPathSection />
      <ExpansionScenariosSection />
      <BusinessOutcomesSection />
      <TrustEnterpriseReadinessSection />
      <GlobalHrOperationsFaqSection />
      <GlobalHrOperationsFinalCtaSection />
    </>
  );
}
