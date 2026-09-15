import type { Metadata } from "next";
import {
  CompanyOverviewHeroSection,
  PlatformFactsSection,
  CorporateProductProfileSection,
  GlobalByDesignSection,
  EvaluationRoutesSection,
  TrustGovernanceRoutesSection,
  ExploreCompanySection,
  CompanyOverviewFaqSection,
  CompanyOverviewFinalCtaSection,
} from "@/components/company-overview";

export const metadata: Metadata = {
  title: "Company Overview | Zoiko HR",
  description:
    "A clear view of Zoiko HR — the company and the platform. Explore the corporate profile, product context, company structure, and the right next step for your organization.",
};

export default function CompanyOverviewPage() {
  return (
    <div className="overflow-x-clip">
      <CompanyOverviewHeroSection />
      <PlatformFactsSection />
      <CorporateProductProfileSection />
      <GlobalByDesignSection />
      <EvaluationRoutesSection />
      <TrustGovernanceRoutesSection />
      <ExploreCompanySection />
      <CompanyOverviewFaqSection />
      <CompanyOverviewFinalCtaSection />
    </div>
  );
}
