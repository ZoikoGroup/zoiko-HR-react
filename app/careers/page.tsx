import type { Metadata } from "next";
import {
  CareersHeroSection,
  HiringPrinciplesSection,
  OpenRolesFinderSection,
  TeamsDisciplinesSection,
  LocationsWorkModesSection,
  HowWeHireSection,
  InterviewExpectationsSection,
  CompensationBenefitsSection,
  FairHiringPrivacySection,
  RecruitmentSecuritySection,
  LearningGrowthSection,
  CareersFaqSection,
} from "@/components/careers";

export const metadata: Metadata = {
  title: "Careers | Zoiko HR",
  description:
    "Explore approved open roles at Zoiko HR, learn how hiring works, and find the information you need before applying.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection />
      <HiringPrinciplesSection />
      <OpenRolesFinderSection />
      <TeamsDisciplinesSection />
      <LocationsWorkModesSection />
      <HowWeHireSection />
      <InterviewExpectationsSection />
      <CompensationBenefitsSection />
      <FairHiringPrivacySection />
      <RecruitmentSecuritySection />
      <LearningGrowthSection />
      <CareersFaqSection />
    </>
  );
}
