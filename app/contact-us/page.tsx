import type { Metadata } from "next";
import {
  ContactHeroSection,
  ExistingCustomersSection,
  ContactFaqSection,
  OtherRoutesSection,
} from "@/components/contact-us";

export const metadata: Metadata = {
  title: "Contact Us | Zoiko HR",
  description:
    "Choose the right path to reach Zoiko HR — customer help, sales, partnerships, careers, or security reporting. Each route reaches the team best placed to help.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ExistingCustomersSection />
      <ContactFaqSection />
      <OtherRoutesSection />
    </>
  );
}
