import type { Metadata } from "next";
import {
  LeadersHeroSection,
  OperatingPictureSection,
  WorkforceVisibilitySection,
  OperatingModelSection,
  DecisionMomentsSection,
  GovernedVisibilitySection,
  GrowthReadinessSection,
  EcosystemSection,
  BusinessCaseSection,
  LeadersFaqSection,
  LeadersCtaSection,
} from "@/components/business-leaders";

export const metadata: Metadata = {
  title: "Zoiko HR for Business Leaders | Zoiko HR",
  description:
    "Bring employee records, organizational structure, HR workflows, documents, policies and reporting into one governed platform — so leaders can see what matters and scale operations without fragmented administration.",
};

export default function BusinessLeadersPage() {
  return (
    <>
      <LeadersHeroSection />
      <OperatingPictureSection />
      <WorkforceVisibilitySection />
      <OperatingModelSection />
      <DecisionMomentsSection />
      <GovernedVisibilitySection />
      <GrowthReadinessSection />
      <EcosystemSection />
      <BusinessCaseSection />
      <LeadersFaqSection />
      <LeadersCtaSection />
    </>
  );
}
