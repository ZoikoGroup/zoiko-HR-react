import type { Metadata } from "next";
import {
  HelpCenterHeroSection,
  HelpPathsSection,
  SupportCategoriesSection,
  RolePathwaysSection,
  FeaturedHelpSection,
  ProductAreasSection,
  TroubleshootingSection,
  AccountAccessSection,
  SpecialistHelpSection,
  ServiceStatusSection,
  ContactSupportSection,
  HelpCenterFaqSection,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Zoiko HR",
  description:
    "Search approved Zoiko HR help content, browse by product area and role, work through troubleshooting journeys, and reach Contact Support or Service Status.",
};

export default function HelpCenterPage() {
  return (
    <>
      <HelpCenterHeroSection />
      <HelpPathsSection />
      <SupportCategoriesSection />
      <RolePathwaysSection />
      <FeaturedHelpSection />
      <ProductAreasSection />
      <TroubleshootingSection />
      <AccountAccessSection />
      <SpecialistHelpSection />
      <ServiceStatusSection />
      <ContactSupportSection />
      <HelpCenterFaqSection />
    </>
  );
}
