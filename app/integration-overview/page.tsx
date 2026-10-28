import { Metadata } from "next";
import {
  IntegrationOverviewHeroSection,
  WhyGovernedIntegrationsSection,
  HowGovernedIntegrationsWorkSection,
  ConnectionModelDirectorySection,
  EcosystemConnectionsSection,
  ExternalConnectionPostureSection,
  InformationBoundaryInspectorSection,
  HumanGovernanceSection,
  IntegrationOverviewFaqSection,
  IntegrationOverviewFinalCtaSection,
} from "@/components/integration-overview";

export const metadata: Metadata = {
  title: "Integrations Overview - Governed Workforce System Connections | Zoiko HR",
  description:
    "Coordinate workforce information across connected systems through governed connection models, explicit permissions, source-controlled data boundaries, and clear interoperability controls.",
};

export default function IntegrationOverviewPage() {
  return (
    <>
      <IntegrationOverviewHeroSection />
      <WhyGovernedIntegrationsSection />
      <HowGovernedIntegrationsWorkSection />
      <ConnectionModelDirectorySection />
      <EcosystemConnectionsSection />
      <ExternalConnectionPostureSection />
      <InformationBoundaryInspectorSection />
      <HumanGovernanceSection />
      <IntegrationOverviewFaqSection />
      <IntegrationOverviewFinalCtaSection />
    </>
  );
}
