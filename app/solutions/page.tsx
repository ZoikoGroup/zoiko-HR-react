import type { Metadata } from "next";
import {
  SolutionsHeroSection,
  SolutionsCoverageSection,
  PathwaySelectorSection,
  GrowingBusinessesSection,
  MidMarketSection,
  RolePathwaysSection,
  ConnectedOperationsSection,
  SharedPlatformSection,
  ComparePathwaysSection,
  SolutionsTrustSection,
  SolutionsFaqSection,
  SolutionsFinalCtaSection,
} from "@/components/solutions-overview";

export const metadata: Metadata = {
  title: "HR Solutions by Organization and Role | Zoiko HR",
  description:
    "Explore Zoiko HR solution pathways by organization stage, operating complexity, team responsibility, and connected HR, time, and payroll needs.",
};

export default function SolutionsPage() {
  return (
    <div className="overflow-x-clip">
      <SolutionsHeroSection />
      <SolutionsCoverageSection />
      <PathwaySelectorSection />
      <GrowingBusinessesSection />
      <MidMarketSection />
      <RolePathwaysSection />
      <ConnectedOperationsSection />
      <SharedPlatformSection />
      <ComparePathwaysSection />
      <SolutionsTrustSection />
      <SolutionsFaqSection />
      <SolutionsFinalCtaSection />
    </div>
  );
}
