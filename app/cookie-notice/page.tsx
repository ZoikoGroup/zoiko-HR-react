import type { Metadata } from "next";
import { LegalDocLayout } from "@/components/legal";
import type { LegalDoc } from "@/components/legal";

const doc: LegalDoc = {
  title: "Cookie Notice",
  lastUpdated: "Last updated: September 15, 2026",
  intro:
    "This Cookie Notice explains how Zoiko HR uses cookies and similar technologies on zoikohr.com, and how you can control them. For information on the personal data we collect generally, see the Privacy Notice.",
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What are cookies",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to remember preferences, and to understand how visitors use a site. Similar technologies such as local storage and pixels are covered by this notice too.",
      ],
    },
    {
      id: "categories",
      heading: "2. Categories we use",
      bullets: [
        "Strictly necessary: required for core site functions such as security and load balancing. These cannot be switched off.",
        "Analytics: help us understand which pages are visited and how visitors move through the site so we can improve content. We use Google Analytics for this purpose.",
        "Preference: remember choices you make, such as cookie settings, to give you a more consistent experience.",
      ],
    },
    {
      id: "managing-cookies",
      heading: "3. Managing cookies",
      paragraphs: [
        "You can control cookies through your browser settings, which let you block or delete cookies. If you block all cookies, parts of the site may not function correctly. Where required by law, we present a cookie consent choice on your first visit, and you can change your decision at any time from the Cookie Settings page.",
      ],
    },
    {
      id: "analytics",
      heading: "4. Analytics and Google Analytics",
      paragraphs: [
        "We use Google Analytics, provided by Google LLC, to understand site usage. Google Analytics sets cookies that collect information such as pages visited, time on page, approximate location, and browser/device type. You can opt out of Google Analytics with Google's official browser add-on, and analytics cookies are only set where consent is required by law.",
      ],
    },
    {
      id: "changes",
      heading: "5. Changes to this notice",
      paragraphs: [
        "We may update this Cookie Notice as our use of cookies changes. The \"last updated\" date above reflects the current version.",
      ],
    },
    {
      id: "contact",
      heading: "6. Contact",
      paragraphs: [
        "Questions about this notice: privacy@zoikohr.com.",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Cookie Notice | Zoiko HR",
  description:
    "How Zoiko HR uses cookies and similar technologies on zoikohr.com, and how to control them.",
};

export default function CookieNoticePage() {
  return <LegalDocLayout doc={doc} />;
}
