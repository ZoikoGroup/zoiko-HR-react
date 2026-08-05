import type { Metadata } from "next";
import {
  GlobalHrHeroSection,
  WhatIsZoikoHrSection,
  OperatingFoundationSection,
  PlatformArchitectureSection,
  CommandCenterSection,
  CoreHrFoundationSection,
  EmployeeRecordsSection,
  EntityPortfolioSection,
  OnboardingLifecycleSection,
  WorkflowsApprovalsSection,
  RoleBasedExperiencesSection,
  OrgRolesAccessSection,
  ReportingInsightsSection,
  IntegrationsSection,
  SecurityPrivacyTrustSection,
  ImplementationAdoptionSection,
  PricingEvaluationSection,
  CustomerEvidenceSection,
  GlobalHrFinalCtaSection,
  GlobalHrFaqSection,
} from "@/components/global-hr";

export const metadata: Metadata = {
  title: "Global HR Management | Zoiko HR",
  description:
    "Coordinate people operations across entities and locations with Zoiko HR's global HR management platform — structured, secure, and accountable.",
};

export default function GlobalHrManagementPage() {
  return (
    <>
      <GlobalHrHeroSection />
      <WhatIsZoikoHrSection />
      <OperatingFoundationSection />
      <PlatformArchitectureSection />
      <CommandCenterSection />
      <CoreHrFoundationSection />
      <EmployeeRecordsSection />
      <EntityPortfolioSection />
      <OnboardingLifecycleSection />
      <WorkflowsApprovalsSection />
      <RoleBasedExperiencesSection />
      <OrgRolesAccessSection />
      <ReportingInsightsSection />
      <IntegrationsSection />
      <SecurityPrivacyTrustSection />
      <ImplementationAdoptionSection />
      <PricingEvaluationSection />
      <CustomerEvidenceSection />
      <GlobalHrFinalCtaSection />
      <GlobalHrFaqSection />
    </>
  );
}
