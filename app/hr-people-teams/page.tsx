import type { Metadata } from "next";
import {
  HrPeopleTeamsHeroSection,
  HrRecordProblemSection,
  OperatingMechanismSection,
  CoreWorkflowsSection,
  HrPeopleTeamsProductProofSection,
  WorkerTrustSection,
  GlobalPolicyControlSection,
  IntegrationsSystemFitSection,
  MeasurableOutcomesSection,
  HrPeopleTeamsImplementationSection,
  HrPeopleTeamsFaqSection,
  HrPeopleTeamsFinalCtaSection,
} from "@/components/hr-people-teams";

export const metadata: Metadata = {
  title: "ZoikoTime for HR & People Teams | Zoiko HR",
  description:
    "ZoikoTime is time and attendance software HR can trust — deterministic, evidence-backed time records without screenshots, keystroke capture, or invasive monitoring.",
};

export default function HrPeopleTeamsPage() {
  return (
    <>
      <HrPeopleTeamsHeroSection />
      <HrRecordProblemSection />
      <OperatingMechanismSection />
      <CoreWorkflowsSection />
      <HrPeopleTeamsProductProofSection />
      <WorkerTrustSection />
      <GlobalPolicyControlSection />
      <IntegrationsSystemFitSection />
      <MeasurableOutcomesSection />
      <HrPeopleTeamsImplementationSection />
      <HrPeopleTeamsFaqSection />
      <HrPeopleTeamsFinalCtaSection />
    </>
  );
}
