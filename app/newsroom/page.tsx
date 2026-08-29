import type { Metadata } from "next";
import {
  NewsroomHeroSection,
  QuickAccessBar,
  LatestNewsSection,
  BrowseByTopicSection,
  CompanyAnnouncementsSection,
  PressReleasesSection,
  ExternalCoverageSection,
  MediaResourcesSection,
  SpokespeopleSection,
  MediaInquirySection,
  EditorialStandardsSection,
  NewsroomFaqSection,
} from "@/components/newsroom";

export const metadata: Metadata = {
  title: "Newsroom | Zoiko HR",
  description:
    "Official Zoiko HR company announcements, press releases, curated external coverage, approved media resources, and the official media inquiry route.",
};

export default function NewsroomPage() {
  return (
    <>
      <NewsroomHeroSection />
      <QuickAccessBar />
      <LatestNewsSection />
      <BrowseByTopicSection />
      <CompanyAnnouncementsSection />
      <PressReleasesSection />
      <ExternalCoverageSection />
      <MediaResourcesSection />
      <SpokespeopleSection />
      <MediaInquirySection />
      <EditorialStandardsSection />
      <NewsroomFaqSection />
    </>
  );
}
