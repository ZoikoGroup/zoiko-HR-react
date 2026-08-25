import type { Metadata } from "next";
import {
  ProductTourHeroSection,
  WhatThisTourIsSection,
  ChooseYourPathSection,
  InsideTheTourSection,
  TourChaptersSection,
  TourCompleteSection,
  ProductTourFaqSection,
} from "@/components/product-tour";

export const metadata: Metadata = {
  title: "Zoiko HR Product Tour | Zoiko HR",
  description:
    "Take a self-guided tour of representative Zoiko HR workflows for workforce information, employee records, global organization context, lifecycle events, approvals, role-based experiences, reporting, integrations and governance — no account or form required.",
};

export default function ProductTourPage() {
  return (
    <div className="overflow-x-clip">
      <ProductTourHeroSection />
      <WhatThisTourIsSection />
      <ChooseYourPathSection />
      <InsideTheTourSection />
      <TourChaptersSection />
      <TourCompleteSection />
      <ProductTourFaqSection />
    </div>
  );
}
