import type { Metadata } from "next";
import {
  SecurityPrivacyHeroSection,
  AccessGovernanceSection,
  DataLifecycleSection,
  EncryptionSection,
  VulnerabilityManagementSection,
  LoggingMonitoringSection,
  IncidentManagementSection,
  ResilienceSection,
  PrivacyEngineeringSection,
  AssuranceEvidenceSection,
  SecurityPrivacyFaqSection,
} from "@/components/security-privacy";

export const metadata: Metadata = {
  title: "Security & Privacy | Zoiko HR",
  description:
    "Review the control domains, evidence status and responsibility boundaries that apply to Zoiko HR security and privacy information — published only where current approved evidence establishes them.",
};

export default function SecurityPrivacyPage() {
  return (
    <>
      <SecurityPrivacyHeroSection />
      <AccessGovernanceSection />
      <DataLifecycleSection />
      <EncryptionSection />
      <VulnerabilityManagementSection />
      <LoggingMonitoringSection />
      <IncidentManagementSection />
      <ResilienceSection />
      <PrivacyEngineeringSection />
      <AssuranceEvidenceSection />
      <SecurityPrivacyFaqSection />
    </>
  );
}
