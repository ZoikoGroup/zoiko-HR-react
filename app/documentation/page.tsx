import type { Metadata } from "next";
import {
  DocumentationHeroSection,
  WhatDocumentationCoversSection,
  ProductAreasSection,
  GetStartedSection,
  CoreConceptsSection,
  WorkflowGuidesSection,
  ConfigurationSettingsSection,
  RolesPermissionsSection,
  DataLifecycleSection,
  IntegrationsSection,
  VersionCompatibilitySection,
  TroubleshootingRecoverySection,
  SupportHandoffsSection,
  DocumentationFaqSection,
} from "@/components/documentation";

export const metadata: Metadata = {
  title: "Documentation | Zoiko HR",
  description:
    "Search and browse source-controlled Zoiko HR documentation by product area, task, role and topic — with scope, prerequisites, permissions and expected outcome on every guide.",
};

export default function DocumentationPage() {
  return (
    <>
      <DocumentationHeroSection />
      <WhatDocumentationCoversSection />
      <ProductAreasSection />
      <GetStartedSection />
      <CoreConceptsSection />
      <WorkflowGuidesSection />
      <ConfigurationSettingsSection />
      <RolesPermissionsSection />
      <DataLifecycleSection />
      <IntegrationsSection />
      <TroubleshootingRecoverySection />
      <VersionCompatibilitySection />
      <SupportHandoffsSection />
      <DocumentationFaqSection />
    </>
  );
}
