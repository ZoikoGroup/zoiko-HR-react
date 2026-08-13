import type { Metadata } from "next";
import {
  IntegrationsHeroSection,
  WhatAreIntegrationsSection,
  ConnectSystemsSection,
  CategoryExplorerSection,
  IntegrationsProductProofSection,
  CatalogueDetailSection,
  DataMappingAuthoritySection,
  TechnicalPatternsSection,
  RecoveryReliabilitySection,
  UseCasesSection,
  IntegrationsTrustSection,
  IntegrationsImplementationSection,
  IntegrationsFaqSection,
  IntegrationsFinalCtaSection,
} from "@/components/integrations";

export const metadata: Metadata = {
  title: "Integrations | Zoiko HR",
  description:
    "Zoiko HR Integrations connect people operations through governed, evidence-backed connections to identity, time, payroll, recruiting, benefits, and document systems.",
};

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsHeroSection />
      <WhatAreIntegrationsSection />
      <ConnectSystemsSection />
      <CategoryExplorerSection />
      <IntegrationsProductProofSection />
      <CatalogueDetailSection />
      <DataMappingAuthoritySection />
      <TechnicalPatternsSection />
      <RecoveryReliabilitySection />
      <UseCasesSection />
      <IntegrationsTrustSection />
      <IntegrationsImplementationSection />
      <IntegrationsFaqSection />
      <IntegrationsFinalCtaSection />
    </>
  );
}
