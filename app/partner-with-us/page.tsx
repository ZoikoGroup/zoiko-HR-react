import type { Metadata } from "next";
import {
  PartnerHeroSection,
  WhichDescribesYouSection,
  RelationshipAreasSection,
  RoutingGuidanceSection,
  PartnerInquiryFormSection,
  ReviewProcessSection,
  TrustDataSection,
  AlternativePathsSection,
  PartnerFaqSection,
  PartnerFinalCtaSection,
} from "@/components/partner-with-us";

export const metadata: Metadata = {
  title: "Partner With Us | Zoiko HR",
  description:
    "Explore a technology, implementation, advisory, referral or strategic relationship with Zoiko HR. Choose a relationship area and send a short partner inquiry.",
};

export default function PartnerWithUsPage() {
  return (
    <>
      <PartnerHeroSection />
      <WhichDescribesYouSection />
      <RelationshipAreasSection />
      <RoutingGuidanceSection />
      <PartnerInquiryFormSection />
      <ReviewProcessSection />
      <TrustDataSection />
      <AlternativePathsSection />
      <PartnerFaqSection />
      <PartnerFinalCtaSection />
    </>
  );
}
