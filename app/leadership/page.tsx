import type { Metadata } from "next";
import {
  LeadershipHeroSection,
  HowLeadershipPresentedSection,
  ExecutiveLeadershipSection,
  ProductFunctionalLeadershipSection,
  AccountabilityAreasSection,
  GovernanceAccountabilitySection,
  ForCustomersEvaluatorsSection,
  TrustResponsibleTechSection,
  HowWeWorkSection,
  CareersCultureSection,
  NewsroomSection,
  LeadershipFaqSection,
  LeadershipFinalCtaSection,
} from "@/components/leadership";

export const metadata: Metadata = {
  title: "Leadership | Zoiko HR",
  description:
    "Approved executive and product/functional leadership at Zoiko HR, the areas those leaders are accountable for, and how leadership information is governed.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHeroSection />
      <HowLeadershipPresentedSection />
      <ExecutiveLeadershipSection />
      <ProductFunctionalLeadershipSection />
      <AccountabilityAreasSection />
      <GovernanceAccountabilitySection />
      <ForCustomersEvaluatorsSection />
      <TrustResponsibleTechSection />
      <HowWeWorkSection />
      <CareersCultureSection />
      <NewsroomSection />
      <LeadershipFaqSection />
      <LeadershipFinalCtaSection />
    </>
  );
}
