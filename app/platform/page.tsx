import type { Metadata } from "next";
import {
  PlatformHeroSection,
  PlatformWhatIsSection,
  PlatformOperatingFoundationSection,
  PlatformArchitectureSection,
  PlatformCoreHrSection,
  PlatformGlobalHrSection,
  PlatformOnboardingWorkflowsSection,
  PlatformRoleExperiencesSection,
  PlatformOrgRolesAccessSection,
  PlatformIntegrationsSection,
  PlatformTrustSection,
  PlatformImplementationSection,
  PlatformPricingSection,
  PlatformFaqSection,
  PlatformFinalCtaSection,
} from "@/components/platform";

export const metadata: Metadata = {
  title: "Platform Overview | Zoiko HR",
  description:
    "Zoiko HR is a global HR management platform for structured, secure, and accountable people operations — Core HR, Global HR Management, onboarding, workflows, and more.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHeroSection />
      <PlatformWhatIsSection />
      <PlatformOperatingFoundationSection />
      <PlatformArchitectureSection />
      <PlatformCoreHrSection />
      <PlatformGlobalHrSection />
      <PlatformOnboardingWorkflowsSection />
      <PlatformRoleExperiencesSection />
      <PlatformOrgRolesAccessSection />
      <PlatformIntegrationsSection />
      <PlatformTrustSection />
      <PlatformImplementationSection />
      <PlatformPricingSection />
      <PlatformFaqSection />
      <PlatformFinalCtaSection />
    </>
  );
}
