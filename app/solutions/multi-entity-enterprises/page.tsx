import type { Metadata } from "next";
import {
  MultiEntityHeroSection,
  MultiEntityMeaningSection,
  EntityUnitModelSection,
  PortfolioWorkspaceSection,
  EntityRegistrySection,
  BaselineOverridesSection,
  SeparationOfDutiesSection,
  AccessScopeSection,
  WorkflowAuthoritySection,
  DocumentVariantsSection,
  ReportingVisibilitySection,
  IntegrationsAuthoritySection,
  StructuralClaimsSection,
  ImplementationReadinessSection,
  TrustSupportSection,
  MultiEntityFaqSection,
  MultiEntityFinalCtaSection,
} from "@/components/multi-entity";

export const metadata: Metadata = {
  title: "HR Software for Multi-Entity Enterprises | Zoiko HR",
  description:
    "Govern HR administration across distinct entities without blurring their boundaries — entity structures, ownership, configuration, access, shared services, workflows, reporting and connected systems in one governed model.",
};

export default function MultiEntityEnterprisesPage() {
  return (
    <div className="overflow-x-clip">
      <MultiEntityHeroSection />
      <MultiEntityMeaningSection />
      <EntityUnitModelSection />
      <PortfolioWorkspaceSection />
      <EntityRegistrySection />
      <BaselineOverridesSection />
      <SeparationOfDutiesSection />
      <AccessScopeSection />
      <WorkflowAuthoritySection />
      <DocumentVariantsSection />
      <ReportingVisibilitySection />
      <IntegrationsAuthoritySection />
      <StructuralClaimsSection />
      <ImplementationReadinessSection />
      <TrustSupportSection />
      <MultiEntityFaqSection />
      <MultiEntityFinalCtaSection />
    </div>
  );
}
