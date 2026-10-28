import { Metadata } from "next";
import {
  IntegrationSecurityHeroSection,
  ScopeBoundarySection,
  AuthorizationScopeSection,
  DataMinimizationSection,
  ServiceIdentitiesSection,
  ActivationSafetySection,
  RuntimeHealthSection,
  ExceptionsAccessSection,
  RevocationContainmentSection,
  CrossModuleAuthoritySection,
  SecurityEvaluationPanelSection,
  IntegrationSecurityFaqSection,
  IntegrationSecurityFinalCtaSection,
} from "@/components/integration-security";

export const metadata: Metadata = {
  title: "Integration Security - Controlled Connection Governance | Zoiko HR",
  description:
    "Govern approved Zoiko HR integrations with explicit purpose, authorization, minimum necessary data, service-identity context, revocation, and traceable evidence.",
};

export default function IntegrationSecurityPage() {
  return (
    <>
      <IntegrationSecurityHeroSection />
      <ScopeBoundarySection />
      <AuthorizationScopeSection />
      <DataMinimizationSection />
      <ServiceIdentitiesSection />
      <ActivationSafetySection />
      <RuntimeHealthSection />
      <ExceptionsAccessSection />
      <RevocationContainmentSection />
      <CrossModuleAuthoritySection />
      <SecurityEvaluationPanelSection />
      <IntegrationSecurityFaqSection />
      <IntegrationSecurityFinalCtaSection />
    </>
  );
}
