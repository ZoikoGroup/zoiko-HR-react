import type { Metadata } from "next";
import {
  InsightsHeroSection,
  MetricContextSection,
  DirectAnswerSection,
  ProblemFramingSection,
  OperatingModelSection,
  MetricCatalogSection,
  ReportFamiliesSection,
  FiltersCohortsSection,
  RoleExperiencesSection,
  GlobalLocalSection,
  TrustPrivacySection,
  InsightsFaqSection,
  InsightsFinalCtaSection,
} from "@/components/zoiko-insights";

export const metadata: Metadata = {
  title: "Zoiko Insights | Zoiko HR",
  description:
    "Permission-sensitive workforce dashboards and reports from governed HR records — with definitions, source context, freshness and human accountability visible.",
};

export default function ZoikoInsightsPage() {
  return (
    <>
      <InsightsHeroSection />
      <MetricContextSection />
      <DirectAnswerSection />
      <ProblemFramingSection />
      <OperatingModelSection />
      <MetricCatalogSection />
      <ReportFamiliesSection />
      <FiltersCohortsSection />
      <RoleExperiencesSection />
      <GlobalLocalSection />
      <TrustPrivacySection />
      <InsightsFaqSection />
      <InsightsFinalCtaSection />
    </>
  );
}
