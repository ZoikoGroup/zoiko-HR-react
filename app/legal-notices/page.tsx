import type { Metadata } from "next";
import { LegalDocLayout } from "@/components/legal";
import type { LegalDoc } from "@/components/legal";

const doc: LegalDoc = {
  title: "Legal Notices",
  lastUpdated: "Last updated: September 15, 2026",
  intro:
    "This page contains legal notices about Zoiko Tech Inc. and the Zoiko HR website, including entity information, trademark notices, and governing terms.",
  sections: [
    {
      id: "operator",
      heading: "1. Operator of this website",
      paragraphs: [
        "Zoikohr.com is owned and operated by Zoiko Tech Inc., a Zoiko Group company, headquartered at 1401 21st Street, Suite R, Sacramento, CA 95811, USA, with European headquarters at 167–169 Great Portland Street, 5th Floor, London W1W 5PF, UK.",
      ],
    },
    {
      id: "trademarks",
      heading: "2. Trademark notice",
      paragraphs: [
        "Zoiko HR, Zoiko, and related names, logos, and product marks are trademarks of Zoiko Tech Inc. or Zoiko Group companies. Third-party names and marks referenced on this site belong to their respective owners and are used for identification purposes only.",
      ],
    },
    {
      id: "no-advice",
      heading: "3. No professional advice",
      paragraphs: [
        "Zoiko HR provides software for workforce administration. It does not provide legal, tax, payroll, employment, compliance, or professional advice and does not guarantee compliance with any law. Customers remain responsible for their policies, employment decisions, configurations, and compliance obligations.",
      ],
    },
    {
      id: "availability",
      heading: "4. Product and availability notices",
      paragraphs: [
        "Product capabilities, integrations, hosting, implementation, support, and availability may vary by plan, contract, or configuration and jurisdiction. Descriptions on this site do not create any contractual commitment.",
      ],
    },
    {
      id: "governing-terms",
      heading: "5. Governing documents",
      paragraphs: [
        "Use of this website is governed by our Terms of Service and Privacy Notice. Use of the Zoiko HR platform is governed by the applicable customer agreement signed with Zoiko Tech Inc.",
      ],
    },
    {
      id: "contact",
      heading: "6. Contact",
      paragraphs: [
        "Legal inquiries: legal@zoikohr.com.",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Legal Notices | Zoiko HR",
  description:
    "Legal notices about Zoiko Tech Inc., trademarks, and governing terms for zoikohr.com.",
};

export default function LegalNoticesPage() {
  return <LegalDocLayout doc={doc} />;
}
