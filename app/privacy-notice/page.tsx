import type { Metadata } from "next";
import { LegalDocLayout } from "@/components/legal";
import type { LegalDoc } from "@/components/legal";

const doc: LegalDoc = {
  title: "Privacy Notice",
  lastUpdated: "Last updated: September 15, 2026",
  intro:
    "This Privacy Notice explains how Zoiko Tech Inc. (\"Zoiko HR\", \"we\", \"us\") collects, uses, discloses, and protects personal information when you visit zoikohr.com or interact with us about our HR platform. It also describes the rights and choices available to you.",
  sections: [
    {
      id: "who-we-are",
      heading: "1. Who we are",
      paragraphs: [
        "Zoiko HR is operated by Zoiko Tech Inc., a Zoiko Group company, with headquarters at 1401 21st Street, Suite R, Sacramento, CA 95811, USA, and European headquarters at 167–169 Great Portland Street, 5th Floor, London W1W 5PF, UK.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "2. Information we collect",
      paragraphs: [
        "We collect information in the following ways:",
      ],
      bullets: [
        "Information you provide: name, work email address, company, job title, phone number, and message content when you submit a form, request a demo, book a tour, or contact sales or support.",
        "Usage data: pages visited, referring page, approximate location derived from IP address, browser type, device type, and interaction events, collected automatically as you browse.",
        "Cookies and similar technologies: see the Cookie Notice for detail on the categories used and purposes served.",
        "Recruitment information: if you apply for a role, the CV, work history, and other materials you submit as part of the hiring process.",
      ],
    },
    {
      id: "how-we-use-information",
      heading: "3. How we use information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Respond to inquiries and provide requested materials such as demos, pricing, and documentation.",
        "Operate, maintain, secure, and improve the website and our content.",
        "Understand aggregate usage patterns to improve navigation and relevance.",
        "Evaluate candidates who apply for open positions.",
        "Meet legal obligations and enforce our terms and policies.",
      ],
    },
    {
      id: "legal-bases",
      heading: "4. Legal bases (EEA/UK visitors)",
      paragraphs: [
        "Where the GDPR or UK GDPR applies, we process personal data on the following bases: consent (e.g., optional analytics cookies), legitimate interests (e.g., responding to business inquiries, securing the site), and compliance with legal obligations.",
      ],
    },
    {
      id: "sharing",
      heading: "5. How we share information",
      paragraphs: [
        "We do not sell personal information. We share it only with:",
      ],
      bullets: [
        "Service providers that host the site, deliver analytics, and support our business operations, under contract and only for the purposes described in this notice.",
        "Professional advisers and authorities where required by law or to protect rights, property, or safety.",
        "A successor entity in the event of a merger, acquisition, or reorganization, subject to this notice.",
      ],
    },
    {
      id: "retention",
      heading: "6. Retention",
      paragraphs: [
        "We keep personal information only as long as needed for the purposes described above, to meet legal, accounting, or reporting requirements, or to establish or defend legal claims. When it is no longer required, we delete or anonymize it.",
      ],
    },
    {
      id: "your-rights",
      heading: "7. Your rights and choices",
      paragraphs: [
        "Depending on your location, you may have the right to access, correct, delete, or port your personal information, to object to or restrict certain processing, and to withdraw consent where processing is based on consent. You can exercise these rights by contacting us using the details below. EEA and UK residents may also complain to their local data protection authority.",
      ],
    },
    {
      id: "security",
      heading: "8. Security",
      paragraphs: [
        "We use technical and organizational measures appropriate to the risk, such as encryption in transit and access controls, to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "international-transfers",
      heading: "9. International transfers",
      paragraphs: [
        "We operate globally and may transfer personal information to countries other than your own. Where required, we rely on appropriate safeguards such as adequacy decisions or standard contractual clauses.",
      ],
    },
    {
      id: "children",
      heading: "10. Children",
      paragraphs: [
        "The site is intended for business audiences and is not directed to children under 16. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      heading: "11. Changes to this notice",
      paragraphs: [
        "We may update this Privacy Notice from time to time. The \"last updated\" date above shows the current version, and material changes will be highlighted on this page.",
      ],
    },
    {
      id: "contact",
      heading: "12. Contact us",
      paragraphs: [
        "Questions or requests: privacy@zoikohr.com, or write to Zoiko Tech Inc., 1401 21st Street, Suite R, Sacramento, CA 95811, USA.",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Privacy Notice | Zoiko HR",
  description:
    "How Zoiko HR collects, uses, discloses, and protects personal information when you visit zoikohr.com.",
};

export default function PrivacyNoticePage() {
  return <LegalDocLayout doc={doc} />;
}
