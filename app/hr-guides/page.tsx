import type { Metadata } from "next";
import {
  HrGuidesHeroSection,
  BrowseAllGuidesSection,
  HrTasksSection,
  ProductAreaSection,
  AudienceRoleSection,
  FeaturedGuidesSection,
  GuideCardContractSection,
  RecordsDataOperationsSection,
  GlobalMultiEntitySection,
  ReportingIntegrationsSection,
  AuthorityScopeSection,
  HrGuidesFaqSection,
} from "@/components/hr-guides";

export const metadata: Metadata = {
  title: "HR Guides | Zoiko HR",
  description:
    "Practical HR guidance for structured, accountable people operations — task-oriented guides, references and explainers with review dates and clear authority boundaries.",
};

export default function HrGuidesPage() {
  return (
    <div className="overflow-x-clip">
      <HrGuidesHeroSection />
      <BrowseAllGuidesSection />
      <HrTasksSection />
      <ProductAreaSection />
      <AudienceRoleSection />
      <FeaturedGuidesSection />
      <GuideCardContractSection />
      <RecordsDataOperationsSection />
      <GlobalMultiEntitySection />
      <ReportingIntegrationsSection />
      <AuthorityScopeSection />
      <HrGuidesFaqSection />
    </div>
  );
}
