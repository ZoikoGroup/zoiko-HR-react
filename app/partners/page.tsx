import type { Metadata } from "next";
import {
  PartnersHeroSection,
  RelationshipMeaningSection,
  RelationshipTypesSection,
  FindAPartnerSection,
  TechnologyPartnersSection,
  ImplementationServicesSection,
  AdvisoryChannelStrategicSection,
  PartnerStandardsSection,
  SecurityComplianceSection,
  BecomePartnerSection,
  PartnerEvidenceSection,
  PartnersFaqSection,
} from "@/components/partners";

export const metadata: Metadata = {
  title: "Partners | Zoiko HR",
  description:
    "Explore approved technology, services, and strategic partner relationships around Zoiko HR, how partner records are verified, and how to start a partner inquiry.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHeroSection />
      <RelationshipMeaningSection />
      <RelationshipTypesSection />
      <FindAPartnerSection />
      <TechnologyPartnersSection />
      <ImplementationServicesSection />
      <AdvisoryChannelStrategicSection />
      <PartnerStandardsSection />
      <SecurityComplianceSection />
      <BecomePartnerSection />
      <PartnerEvidenceSection />
      <PartnersFaqSection />
    </>
  );
}
