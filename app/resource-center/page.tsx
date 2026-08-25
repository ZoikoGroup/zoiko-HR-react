import type { Metadata } from "next";
import {
  ResourceCenterHeroSection,
  WhatTheResourceCenterIsSection,
  SearchDiscoverSection,
  ResourceDestinationsSection,
  FeaturedResourcesSection,
  AudienceRoleSection,
  EvaluationBuyingSection,
  ImplementationAdoptionSection,
  TrustSecurityGovernanceSection,
  ProductEducationSection,
  EvidenceComparisonSection,
  ExistingCustomerHelpSection,
  ResourceGovernanceSection,
  ResourceCenterFinalCtaSection,
} from "@/components/resource-center";

export const metadata: Metadata = {
  title: "Zoiko HR Resource Center | Zoiko HR",
  description:
    "Explore approved guides, research, explainers and product education for evaluating, implementing, administering and supporting Zoiko HR.",
};

export default function ResourceCenterPage() {
  return (
    <div className="overflow-x-clip">
      <ResourceCenterHeroSection />
      <WhatTheResourceCenterIsSection />
      <SearchDiscoverSection />
      <ResourceDestinationsSection />
      <FeaturedResourcesSection />
      <AudienceRoleSection />
      <EvaluationBuyingSection />
      <ImplementationAdoptionSection />
      <TrustSecurityGovernanceSection />
      <ProductEducationSection />
      <EvidenceComparisonSection />
      <ExistingCustomerHelpSection />
      <ResourceGovernanceSection />
      <ResourceCenterFinalCtaSection />
    </div>
  );
}
