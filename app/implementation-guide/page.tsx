import type { Metadata } from "next";
import {
  ImplementationHeroSection,
  ImplementationOverviewSection,
  ImplementationPrinciplesSection,
  ImplementationLifecycleSection,
  ScopeManifestSection,
  RolesAndResponsibilitiesSection,
  DataMigrationSection,
  IntegrationsSection,
  ValidationStrategySection,
  LaunchGovernanceSection,
  StabilizationSection,
  AdoptionEnablementSection,
  BlockersSection,
  ImplementationFAQSection,
  FinalConversionSection,
} from "@/components/Implementation-guide";

export const metadata: Metadata = {
  title: "Implementation Guide | Zoiko HR",
  description:
    "A structured approach to HR system implementation covering scope, configuration, data, integrations, validation and launch — with explicit decision authority at every gate.",
};

export default function ImplementationGuidePage() {
  return (
    <div className="overflow-x-clip">
      <ImplementationHeroSection />
      <ImplementationOverviewSection />
      <ImplementationPrinciplesSection />
      <ImplementationLifecycleSection />
      <ScopeManifestSection />
      <RolesAndResponsibilitiesSection />
      <DataMigrationSection />
      <IntegrationsSection />
      <ValidationStrategySection />
      <LaunchGovernanceSection />
      <StabilizationSection />
      <AdoptionEnablementSection />
      <BlockersSection />
      <ImplementationFAQSection />
      <FinalConversionSection />
    </div>
  );
}
