import type { Metadata } from "next";
import {
  GroupHeroSection,
  GroupAtGlanceSection,
  WhyGroupExistsSection,
  PortfolioMapSection,
  RelationshipTypesSection,
  OperatingPrinciplesSection,
  GovernanceSection,
  ForCustomersSection,
  ForPartnersSection,
  LeadershipNoticeSection,
  GroupFaqSection,
  GroupFinalCtaSection,
} from "@/components/about-zoiko-group";

export const metadata: Metadata = {
  title: "About Zoiko Group | Zoiko HR",
  description:
    "Zoiko Group provides the broader portfolio context for Zoiko HR — how the group is structured, governed, and how its entities relate to one another.",
};

export default function AboutZoikoGroupPage() {
  return (
    <>
      <GroupHeroSection />
      <GroupAtGlanceSection />
      <WhyGroupExistsSection />
      <PortfolioMapSection />
      <RelationshipTypesSection />
      <OperatingPrinciplesSection />
      <GovernanceSection />
      <ForCustomersSection />
      <ForPartnersSection />
      <LeadershipNoticeSection />
      <GroupFaqSection />
      <GroupFinalCtaSection />
    </>
  );
}
