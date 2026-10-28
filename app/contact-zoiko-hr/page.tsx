import type { Metadata } from "next";
import {
  ContactUsHeroSection,
  IntentRouterSection,
  InquiryFormSection,
  WhatHappensNextSection,
  CustomerHelpSection,
  SalesHandoffSection,
  SpecializedPathsSection,
  PrivacyRoutingSection,
  ContactFactsSection,
  ContactUsFaqSection,
} from "@/components/contact-zoiko-hr";

export const metadata: Metadata = {
  title: "Contact Us | Zoiko HR",
  description:
    "Choose the reason you're contacting Zoiko HR — sales, customer support, partnerships, media, careers, or privacy and security — and reach the right team directly.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHeroSection />
      <IntentRouterSection />
      <InquiryFormSection />
      <WhatHappensNextSection />
      <CustomerHelpSection />
      <SalesHandoffSection />
      <SpecializedPathsSection />
      <PrivacyRoutingSection />
      <ContactFactsSection />
      <ContactUsFaqSection />
    </>
  );
}
