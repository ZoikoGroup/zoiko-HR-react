import type { Metadata } from "next";
import { LegalDocLayout } from "@/components/legal";
import type { LegalDoc } from "@/components/legal";

const doc: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "Last updated: September 15, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your use of the zoikohr.com website. Use of the Zoiko HR platform itself is governed by the agreement signed with Zoiko Tech Inc., which controls in the event of any conflict with these website Terms.",
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance of terms",
      paragraphs: [
        "By accessing or using zoikohr.com you agree to these Terms. If you do not agree, please do not use the site.",
      ],
    },
    {
      id: "informational-purpose",
      heading: "2. Informational purpose",
      paragraphs: [
        "Content on this site is provided for general information about Zoiko HR and our platform. Product capabilities, integrations, hosting, implementation, support, and availability may vary by plan, contract, configuration, and jurisdiction, and do not constitute legal, tax, payroll, employment, compliance, or professional advice.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "3. Acceptable use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the site in any way that violates applicable law or regulation.",
        "Attempt to gain unauthorized access to the site, related systems, or data.",
        "Scrape, harvest, or copy content systematically without our prior written consent.",
        "Interfere with or disrupt the integrity or performance of the site.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "4. Intellectual property",
      paragraphs: [
        "The site and its content, including text, graphics, logos, and design, are owned by Zoiko Tech Inc. or its licensors and are protected by intellectual property laws. You may view and print pages for your own informational use; any other reproduction or redistribution requires our prior written permission.",
      ],
    },
    {
      id: "trademarks",
      heading: "5. Trademarks",
      paragraphs: [
        "Zoiko HR and related marks are trademarks of Zoiko Tech Inc. or Zoiko Group companies. Nothing on the site grants any license or right to use any trademark without our prior written consent.",
      ],
    },
    {
      id: "disclaimers",
      heading: "6. Disclaimers",
      paragraphs: [
        "The site is provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, secure, or error-free.",
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "7. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, Zoiko Tech Inc. will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, or data, arising from or related to your use of the site. Nothing in these Terms excludes liability that cannot be excluded under applicable law.",
      ],
    },
    {
      id: "third-party-links",
      heading: "8. Third-party links",
      paragraphs: [
        "The site may link to third-party websites or services. We do not control and are not responsible for their content, policies, or practices.",
      ],
    },
    {
      id: "changes",
      heading: "9. Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. The \"last updated\" date above reflects the current version, and continued use of the site after changes take effect constitutes acceptance.",
      ],
    },
    {
      id: "contact",
      heading: "10. Contact",
      paragraphs: [
        "Questions about these Terms: legal@zoikohr.com, or write to Zoiko Tech Inc., 1401 21st Street, Suite R, Sacramento, CA 95811, USA.",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Terms of Service | Zoiko HR",
  description: "The terms that govern your use of the zoikohr.com website.",
};

export default function TermsOfServicePage() {
  return <LegalDocLayout doc={doc} />;
}
