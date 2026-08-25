import type { Metadata } from "next";

import {
  CustomerStoriesHero,
  CustomerStoriesOverview,
  CustomerStoriesProofStandard,
  CustomerStoriesBrowse,
  CustomerStoriesLibrary,
  CustomerStoriesFeatured,
  CustomerStoriesCardFields,
  CustomerStoriesImplementationLessons,
  CustomerStoriesSupport,
  CustomerStoriesParticipation,
  CustomerStoriesEvaluation,
  CustomerStoriesFinalCtaSection,
} from "@/components/customer-stories";

export const metadata: Metadata = {
  title: "Customer Stories | Zoiko HR",
  description:
    "Explore Zoiko HR customer stories, implementation lessons, product context, and evidence-based insights from customer experiences.",
};

export default function CustomerStoriesPage() {
  return (
    <div className="overflow-x-clip">
      <CustomerStoriesHero />
      <CustomerStoriesOverview />
      <CustomerStoriesProofStandard />
      <CustomerStoriesBrowse />
      <CustomerStoriesLibrary />
      <CustomerStoriesFeatured />
      <CustomerStoriesCardFields />
      <CustomerStoriesImplementationLessons />
      <CustomerStoriesSupport />
      <CustomerStoriesParticipation />
      <CustomerStoriesEvaluation />
      <CustomerStoriesFinalCtaSection />
    </div>
  );
}