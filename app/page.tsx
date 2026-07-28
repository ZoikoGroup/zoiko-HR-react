import type { Metadata } from "next";
import {
  HeroSection,
  CapabilitiesSection,
  TransformSection,
  LifecycleTabsSection,
  WorkforceChangeSection,
  GlobalFoundationSection,
  RoleExperienceSection,
  AIGovernanceSection,
  ConnectedEcosystemSection,
  SecurityGovernanceSection,
  ImplementationSection,
  PricingSection,
  ResourcesFaqSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Zoiko HR | Global HR Management Platform",
  description:
    "Zoiko HR centralizes workforce information, structures HR processes, and connects your people operations for growing, mid-market, and global organizations.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <TransformSection />
      <LifecycleTabsSection />
      <WorkforceChangeSection />
      <GlobalFoundationSection />
      <RoleExperienceSection />
      <AIGovernanceSection />
      <ConnectedEcosystemSection />
      <SecurityGovernanceSection />
      <ImplementationSection />
      <PricingSection />
      <ResourcesFaqSection />
    </>
  );
}
