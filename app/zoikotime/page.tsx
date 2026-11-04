import type { Metadata } from "next";
import {
  ZoikoTimeHeroSection,
  ConnectionMeaningSection,
  InformationClassesSection,
  ConflictResolutionSection,
  PrivacySection,
  ProductUiSection,
  CrossModuleSection,
  ReadinessSection,
  TrustSecuritySection,
  ZoikoTimeFaqSection,
  ZoikoTimeCtaSection,
} from "@/components/zoikotime";

export const metadata: Metadata = {
  title: "ZoikoTime | Zoiko HR",
  description:
    "Bring approved ZoikoTime schedule, attendance and timesheet context into Zoiko HR through explicit source ownership, permission, purpose and correction boundaries.",
};

export default function ZoikoTimePage() {
  return (
    <>
      <ZoikoTimeHeroSection />
      <ConnectionMeaningSection />
      <InformationClassesSection />
      <ConflictResolutionSection />
      <PrivacySection />
      <ProductUiSection />
      <CrossModuleSection />
      <ReadinessSection />
      <TrustSecuritySection />
      <ZoikoTimeFaqSection />
      <ZoikoTimeCtaSection />
    </>
  );
}
