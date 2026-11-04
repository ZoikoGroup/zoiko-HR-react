import type { Metadata } from "next";
import {
  ContactSupportHeroSection,
  SupportPathsSection,
  BeforeYouContactSection,
  SupportRequestFormSection,
  ContactSupportFaqSection,
  ContactSupportFinalCtaSection,
} from "@/components/contact-support";

export const metadata: Metadata = {
  title: "Contact Support | Zoiko HR",
  description:
    "Choose a support path and get routed to self-service guidance, Service Status, a specialist reporting route, or a support request that collects only the minimum information needed.",
};

export default function ContactSupportPage() {
  return (
    <>
      <ContactSupportHeroSection />
      <SupportPathsSection />
      <BeforeYouContactSection />
      <SupportRequestFormSection />
      <ContactSupportFaqSection />
      <ContactSupportFinalCtaSection />
    </>
  );
}
