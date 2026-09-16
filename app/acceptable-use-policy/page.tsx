import type { Metadata } from "next";
import { LegalDocLayout } from "@/components/legal";
import type { LegalDoc } from "@/components/legal";

const doc: LegalDoc = {
  title: "Acceptable Use Policy",
  lastUpdated: "Last updated: September 15, 2026",
  intro:
    "This Acceptable Use Policy describes activities that are prohibited when using zoikohr.com and the Zoiko HR platform. It supplements, and is incorporated into, our Terms of Service and customer agreements.",
  sections: [
    {
      id: "scope",
      heading: "1. Scope",
      paragraphs: [
        "This policy applies to all visitors to the website and, where incorporated by contract, to users of the Zoiko HR platform. It applies to every user and to anyone acting on their behalf.",
      ],
    },
    {
      id: "prohibited-content",
      heading: "2. Prohibited content and conduct",
      bullets: [
        "Uploading or transmitting unlawful, infringing, defamatory, fraudulent, harassing, or objectionable content.",
        "Storing or processing content that violates applicable employment, privacy, or data protection law.",
        "Impersonating any person or misrepresenting affiliation with any entity.",
        "Uploading viruses, malware, or any code designed to interrupt, destroy, or limit functionality.",
      ],
    },
    {
      id: "prohibited-technical",
      heading: "3. Prohibited technical activity",
      bullets: [
        "Scanning or probing systems or networks without authorization.",
        "Circumventing authentication, access controls, or usage limits.",
        "Introducing unreasonable load through automated traffic, stress testing, or scraping.",
        "Interfering with other customers' use of the service.",
      ],
    },
    {
      id: "data-protection",
      heading: "4. Data protection obligations",
      paragraphs: [
        "Where you submit personal data to the platform, you are responsible for having a lawful basis for doing so and for configuring the platform in line with your own privacy and compliance obligations, as described in our Terms and Privacy Notice.",
      ],
    },
    {
      id: "enforcement",
      heading: "5. Enforcement",
      paragraphs: [
        "We may investigate suspected violations and suspend or terminate access where a violation is confirmed or reasonably suspected, in addition to any other rights and remedies available to us.",
      ],
    },
    {
      id: "reporting",
      heading: "6. Reporting violations",
      paragraphs: [
        "Report suspected violations of this policy to legal@zoikohr.com. If you believe information hosted on our systems violates your rights, include enough detail for us to investigate and respond.",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Zoiko HR",
  description:
    "Activities prohibited when using zoikohr.com and the Zoiko HR platform.",
};

export default function AcceptableUsePolicyPage() {
  return <LegalDocLayout doc={doc} />;
}
