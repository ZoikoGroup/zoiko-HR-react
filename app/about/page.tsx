import type { Metadata } from "next";
import {
  AboutHeroSection,
  WhyWeExistSection,
  MissionVisionPurposeSection,
  WhatWeProvideSection,
  WhoWeServeSection,
  OperatingModelSection,
  GlobalByDesignSection,
  ResponsibleByDesignSection,
  ImplementationJourneySection,
  CompanySection,
  ClearExpectationsSection,
  AboutFaqSection,
  AboutFinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Zoiko HR",
  description:
    "Zoiko HR is a global HR management platform for structured, secure, and accountable people operations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <WhyWeExistSection />
      <MissionVisionPurposeSection />
      <WhatWeProvideSection />
      <WhoWeServeSection />
      <OperatingModelSection />
      <GlobalByDesignSection />
      <ResponsibleByDesignSection />
      <ImplementationJourneySection />
      <CompanySection />
      <ClearExpectationsSection />
      <AboutFaqSection />
      <AboutFinalCtaSection />
    </>
  );
}
