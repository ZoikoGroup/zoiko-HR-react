import type { Metadata } from "next";
import {
  AupHeroSection,
  AuthorityMapSection,
  ResponsibleUseSection,
  EmploymentDecisionsSection,
  AiAssistanceSection,
  PrivacyDataSection,
  SecuritySection,
  AvailabilitySection,
  EnforcementSection,
  ReportingSection,
  VersioningSection,
  AupFaqSection,
  RelatedResourcesSection,
  AupCtaSection,
} from "@/components/acceptable-use-policy";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Zoiko HR",
  description:
    "Prohibited and restricted uses of Zoiko HR — employment and AI decision boundaries, privacy and data misuse, security and testing rules, platform integrity, enforcement, and how to report abuse.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <AupHeroSection />
      <AuthorityMapSection />
      <ResponsibleUseSection />
      <EmploymentDecisionsSection />
      <AiAssistanceSection />
      <PrivacyDataSection />
      <SecuritySection />
      <AvailabilitySection />
      <EnforcementSection />
      <ReportingSection />
      <VersioningSection />
      <AupFaqSection />
      <RelatedResourcesSection />
      <AupCtaSection />
    </>
  );
}
