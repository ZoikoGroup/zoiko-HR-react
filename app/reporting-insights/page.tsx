import type { Metadata } from "next";
import {
  ReportingHeroSection,
  ReportingNavSection,
  ReportingOverviewSection,
  TrustNumbersSection,
  WhoSeesWhatSection,
  BeyondDashboardSection,
  TrustAuthoritySection,
  ReportingFaqSection,
  ReportingFinalCtaSection,
} from "@/components/reporting-insights";

export const metadata: Metadata = {
  title: "Reporting & Insights | Zoiko HR",
  description:
    "Permission-sensitive operational reporting with explicit metric definitions, source, scope, freshness, data quality, privacy thresholds and export controls.",
};

export default function ReportingInsightsPage() {
  return (
    <div className="overflow-x-clip">
      <ReportingHeroSection />
      <ReportingNavSection />
      <ReportingOverviewSection />
      <TrustNumbersSection />
      <WhoSeesWhatSection />
      <BeyondDashboardSection />
      <TrustAuthoritySection />
      <ReportingFaqSection />
      <ReportingFinalCtaSection />
    </div>
  );
}
