import type { Metadata } from "next";
import {
  HrTeamsHeroSection,
  HrRecordProblemSection,
  OperatingMechanismSection,
  CoreWorkflowsSection,
  HrTeamsProductProofSection,
  WorkerTrustSection,
  GlobalPolicyControlSection,
  IntegrationsSystemFitSection,
  MeasurableOutcomesSection,
  HrTeamsImplementationSection,
  HrTeamsFaqSection,
  HrTeamsFinalCtaSection,
} from "@/components/hr-teams";

export const metadata: Metadata = {
  title: "ZoikoTime for HR & People Teams | Zoiko HR",
  description:
    "ZoikoTime is time and attendance software HR can trust — deterministic, evidence-backed time records without screenshots, keystroke capture, or invasive monitoring.",
};

export default function HrTeamsPage() {
  return (
    <>
      <HrTeamsHeroSection />
      <HrRecordProblemSection />
      <OperatingMechanismSection />
      <CoreWorkflowsSection />
      <HrTeamsProductProofSection />
      <WorkerTrustSection />
      <GlobalPolicyControlSection />
      <IntegrationsSystemFitSection />
      <MeasurableOutcomesSection />
      <HrTeamsImplementationSection />
      <HrTeamsFaqSection />
      <HrTeamsFinalCtaSection />
    </>
  );
}
