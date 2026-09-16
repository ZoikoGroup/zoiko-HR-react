import type { Metadata } from "next";
import {
  PrivacyHeroSection,
  PrivacySummarySection,
  PrivacyActionsSection,
  ControllerRolesSection,
  NoticeBodySection,
  RelatedResourcesSection,
} from "@/components/privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice | Zoiko HR",
  description:
    "How Zoiko HR handles personal information across our websites, communications and services — what we collect, why we use it, who we disclose it to, and how to exercise your privacy rights.",
};

export default function PrivacyNoticePage() {
  return (
    <>
      <PrivacyHeroSection />
      <PrivacySummarySection />
      <PrivacyActionsSection />
      <ControllerRolesSection />
      <NoticeBodySection />
      <RelatedResourcesSection />
    </>
  );
}
