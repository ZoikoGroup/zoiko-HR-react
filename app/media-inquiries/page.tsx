import type { Metadata } from "next";
import {
  MediaHeroSection,
  PressOrMediaSection,
  RequestTypesSection,
  NewsroomAuthoritySection,
  MediaInquiryFormSection,
  DoNotSendSection,
  MediaFaqSection,
} from "@/components/media-inquiries";

export const metadata: Metadata = {
  title: "Media Inquiries | Zoiko HR",
  description:
    "Submit a media inquiry to Zoiko HR for press questions, company comment, interview requests, fact checks, and media-resource questions. Published announcements live in the Newsroom.",
};

export default function MediaInquiriesPage() {
  return (
    <>
      <MediaHeroSection />
      <PressOrMediaSection />
      <RequestTypesSection />
      <NewsroomAuthoritySection />
      <MediaInquiryFormSection />
      <DoNotSendSection />
      <MediaFaqSection />
    </>
  );
}
