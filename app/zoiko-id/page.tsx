import type { Metadata } from "next";
import {
  IdHeroSection,
  SeparationSection,
  RelationshipModelSection,
  AuthStatesSection,
  IdentityMappingSection,
  LifecycleSection,
  PrivacySecuritySection,
  OptionalitySection,
  IdFaqSection,
  IdCtaSection,
} from "@/components/zoiko-id";

export const metadata: Metadata = {
  title: "ZoikoID | Zoiko HR",
  description:
    "Use approved ZoikoID identity and authentication relationships with Zoiko HR while keeping sign-in, workforce identity, roles, permissions, organization scope and sensitive-data access explicitly separate.",
};

export default function ZoikoIdPage() {
  return (
    <>
      <IdHeroSection />
      <SeparationSection />
      <RelationshipModelSection />
      <AuthStatesSection />
      <IdentityMappingSection />
      <LifecycleSection />
      <PrivacySecuritySection />
      <OptionalitySection />
      <IdFaqSection />
      <IdCtaSection />
    </>
  );
}
