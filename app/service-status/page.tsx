import type { Metadata } from "next";
import {
  ServiceStatusHeroSection,
  SourceFreshnessSection,
  ComponentStatusSection,
  CurrentIncidentsSection,
  StatusRecordScopeSection,
  StatusDefinitionsSection,
  SupportAuthorityMapSection,
  ServiceStatusFaqSection,
  RelatedDestinationsSection,
} from "@/components/service-status";

export const metadata: Metadata = {
  title: "Service Status | Zoiko HR",
  description:
    "The current source-driven state of approved Zoiko HR services and components, active incidents, scheduled maintenance, and recent history — with stale or unavailable data labeled explicitly.",
};

export default function ServiceStatusPage() {
  return (
    <>
      <ServiceStatusHeroSection />
      <SourceFreshnessSection />
      <ComponentStatusSection />
      <CurrentIncidentsSection />
      <StatusRecordScopeSection />
      <StatusDefinitionsSection />
      <SupportAuthorityMapSection />
      <ServiceStatusFaqSection />
      <RelatedDestinationsSection />
    </>
  );
}
