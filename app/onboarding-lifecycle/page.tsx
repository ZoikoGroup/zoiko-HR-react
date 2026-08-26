import type { Metadata } from "next";
import {
  OnboardingHeroSection,
  WhatIsOnboardingSection,
  ProductProofSection,
  StructuredEventSection,
  SharedStructureSection,
  JourneyTypesSection,
  ParticipantRolesSection,
  EffectiveDatedRecordsSection,
  GovernedContentSection,
  SystemHandoffsSection,
  ReportingVisibilitySection,
  DeliberateAccessSection,
  OnboardingCustomerEvidenceSection,
  OnboardingFaqSection,
  OnboardingFinalCtaSection,
} from "@/components/onboarding-lifecycle";

export const metadata: Metadata = {
  title: "Onboarding & Lifecycle | Zoiko HR",
  description:
    "Zoiko HR Onboarding & Lifecycle coordinates employee events from preboarding through separation and post-employment record handling — with clear ownership and evidence.",
};

export default function OnboardingLifecyclePage() {
  return (
    <>
      <OnboardingHeroSection />
      <WhatIsOnboardingSection />
      <ProductProofSection />
      <StructuredEventSection />
      <SharedStructureSection />
      <JourneyTypesSection />
      <ParticipantRolesSection />
      <EffectiveDatedRecordsSection />
      <GovernedContentSection />
      <SystemHandoffsSection />
      <ReportingVisibilitySection />
      <DeliberateAccessSection />
      <OnboardingCustomerEvidenceSection />
      <OnboardingFaqSection />
      <OnboardingFinalCtaSection />
    </>
  );
}
