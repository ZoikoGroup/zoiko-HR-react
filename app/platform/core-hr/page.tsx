import type { Metadata } from "next";
import {
  CoreHrHeroSection,
  WhatIsCoreHrSection,
  WhyItMattersSection,
  OperatingModelSection,
  PeopleDirectoryChangesSection,
  EmployeeMasterRecordSection,
  DataQualitySection,
  SelfServiceBoundariesSection,
  CoreHrImplementationSection,
  CoreHrTrustSection,
  CoreHrFaqSection,
  CoreHrFinalCtaSection,
} from "@/components/core-hr";

export const metadata: Metadata = {
  title: "Core HR | Zoiko HR",
  description:
    "Core HR is the employee and organizational data foundation for Zoiko HR — structured, effective-dated, and permission-sensitive workforce records.",
};

export default function CoreHrPage() {
  return (
    <>
      <CoreHrHeroSection />
      <WhatIsCoreHrSection />
      <WhyItMattersSection />
      <OperatingModelSection />
      <PeopleDirectoryChangesSection />
      <EmployeeMasterRecordSection />
      <DataQualitySection />
      <SelfServiceBoundariesSection />
      <CoreHrImplementationSection />
      <CoreHrTrustSection />
      <CoreHrFaqSection />
      <CoreHrFinalCtaSection />
    </>
  );
}
