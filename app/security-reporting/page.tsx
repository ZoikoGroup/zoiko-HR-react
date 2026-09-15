import type { Metadata } from "next";
import {
  SecurityReportingHeroSection,
  RightRouteSection,
  ScopeRegistrySection,
  RulesOfEngagementSection,
  SafeHarborSection,
  PrepareReportSection,
  ReportIntakeSection,
  CaseStatesSection,
  TriageSection,
  DisclosureSection,
  ThirdPartyBoundariesSection,
  SecurityReportingFaqSection,
} from "@/components/security-reporting";

export const metadata: Metadata = {
  title: "Security Reporting | Zoiko HR",
  description:
    "Report a potential Zoiko HR security vulnerability through the responsible security route — approved scope, rules of engagement, and protected intake, published only where current sources establish them.",
};

export default function SecurityReportingPage() {
  return (
    <>
      <SecurityReportingHeroSection />
      <RightRouteSection />
      <ScopeRegistrySection />
      <RulesOfEngagementSection />
      <SafeHarborSection />
      <PrepareReportSection />
      <ReportIntakeSection />
      <CaseStatesSection />
      <TriageSection />
      <DisclosureSection />
      <ThirdPartyBoundariesSection />
      <SecurityReportingFaqSection />
    </>
  );
}
