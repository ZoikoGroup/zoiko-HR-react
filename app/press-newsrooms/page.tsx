import type { Metadata } from "next";
import {
  NewsroomHeroSection,
  NewsroomSubNav,
  LatestNewsSection,
  BrowseTopicsSection,
  AnnouncementsSection,
  PressReleasesSection,
  MediaResourcesSection,
  SpokespeopleSection,
  MediaInquiryRouteSection,
  EditorialStandardsSection,
  NewsroomFaqSection,
  NewsroomFinalCtaSection,
} from "@/components/press-newsrooms";

export const metadata: Metadata = {
  title: "Press & Newsroom | Zoiko HR",
  description:
    "Official Zoiko HR announcements, press releases, curated external coverage and approved media resources — dated, attributed and source-governed.",
};

export default function PressNewsroomsPage() {
  return (
    <>
      <NewsroomHeroSection />
      <NewsroomSubNav />
      <LatestNewsSection />
      <BrowseTopicsSection />
      <AnnouncementsSection />
      <PressReleasesSection />
      <MediaResourcesSection />
      <SpokespeopleSection />
      <MediaInquiryRouteSection />
      <EditorialStandardsSection />
      <NewsroomFaqSection />
      <NewsroomFinalCtaSection />
    </>
  );
}
