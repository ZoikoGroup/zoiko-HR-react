import type { Metadata } from "next";
import {
  GlossaryExplorer,
  BrowseTopicsSection,
  FeaturedTermsSection,
  LearnConceptsSection,
  AboutDefinitionsSection,
  GlossaryFaqSection,
  GlossaryFinalCtaSection,
} from "@/components/hr-glossary";

export const metadata: Metadata = {
  title: "HR Glossary | Zoiko HR",
  description:
    "Clear definitions for HR, people operations, workforce data and the concepts behind modern HR systems — searchable A–Z.",
};

export default function HrGlossaryPage() {
  return (
    <>
      <GlossaryExplorer
        between={
          <>
            <BrowseTopicsSection />
            <FeaturedTermsSection />
          </>
        }
      />
      <LearnConceptsSection />
      <AboutDefinitionsSection />
      <GlossaryFinalCtaSection />
      <GlossaryFaqSection />
    </>
  );
}
