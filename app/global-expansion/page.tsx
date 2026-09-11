import type { Metadata } from "next";
import {
  GlobalExpansionHeroSection,
  ExpansionPressureSection,
  ReadinessQuestionsSection,
  OperatingModelStepsSection,
  OrganizationArchitectureSection,
  LocalConfigurationSection,
  GovernedPoliciesSection,
  DataGovernanceSection,
  OperationalVisibilitySection,
  ConnectedStackSection,
  ImplementationPathSection,
  ExpansionScenariosSection,
  BusinessOutcomesSection,
  TrustEnterpriseSection,
  GlobalExpansionFaqSection,
  GlobalExpansionFinalCtaSection,
} from "@/components/global-expansion";

export const metadata: Metadata = {
  title: "Global HR Operations | Zoiko HR",
  description:
    "Expand globally without fragmenting HR operations — bring entities, workforce records, permissions, policies and HR workflows into one governed operating environment with controlled local configuration and group-wide visibility.",
};

export default function GlobalExpansionPage() {
  return (
    <div className="overflow-x-clip">
      <GlobalExpansionHeroSection />
      <ExpansionPressureSection />
      <ReadinessQuestionsSection />
      <OperatingModelStepsSection />
      <OrganizationArchitectureSection />
      <LocalConfigurationSection />
      <GovernedPoliciesSection />
      <DataGovernanceSection />
      <OperationalVisibilitySection />
      <ConnectedStackSection />
      <ImplementationPathSection />
      <ExpansionScenariosSection />
      <BusinessOutcomesSection />
      <TrustEnterpriseSection />
      <GlobalExpansionFaqSection />
      <GlobalExpansionFinalCtaSection />
    </div>
  );
}
