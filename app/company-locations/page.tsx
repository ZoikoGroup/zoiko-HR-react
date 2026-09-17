import type { Metadata } from "next";
import {
  LocationsHeroSection,
  PublishedLocationsSection,
  LocationMeaningSection,
  NextStepSection,
  LocationsFaqSection,
  LocationsFinalCtaSection,
} from "@/components/company-locations";

export const metadata: Metadata = {
  title: "Company Locations | Zoiko HR",
  description:
    "The currently published Zoiko HR headquarters in Sacramento and London, and the right contact route before planning a visit or sending correspondence.",
};

export default function CompanyLocationsPage() {
  return (
    <>
      <LocationsHeroSection />
      <PublishedLocationsSection />
      <LocationMeaningSection />
      <NextStepSection />
      <LocationsFaqSection />
      <LocationsFinalCtaSection />
    </>
  );
}
