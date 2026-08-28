import type { Metadata } from "next";
import {
  TrustCenterHeroSection,
  WhatTrustCenterCoversSection,
  TrustResourceNavigatorSection,
  AssuranceStatusSection,
  TrustOverviewsSection,
  DataProcessingSection,
  SecurityReportingSection,
  OperationalTrustSection,
  ProcurementRequestSection,
  EvidenceGovernanceSection,
  TrustCenterFaqSection,
} from "@/components/trust-center";

export const metadata: Metadata = {
  title: "Trust Center | Zoiko HR",
  description:
    "Review Zoiko HR security, privacy, governance and assurance information. The Trust Center routes you to the authority that owns each trust resource and to controlled request routes.",
};

export default function TrustCenterPage() {
  return (
    <>
      <TrustCenterHeroSection />
      <WhatTrustCenterCoversSection />
      <TrustResourceNavigatorSection />
      <AssuranceStatusSection />
      <TrustOverviewsSection />
      <DataProcessingSection />
      <SecurityReportingSection />
      <OperationalTrustSection />
      <ProcurementRequestSection />
      <EvidenceGovernanceSection />
      <TrustCenterFaqSection />
    </>
  );
}
