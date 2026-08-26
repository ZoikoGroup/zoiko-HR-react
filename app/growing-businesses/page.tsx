import type { Metadata } from "next";
import {
  GrowingHeroSection,
  RouteMeaningSection,
  ReadinessCheckSection,
  RecordsFoundationSection,
  StructureFoundationSection,
  LifecycleFoundationSection,
  WorkflowsFoundationSection,
  AccessFoundationSection,
  InsightFoundationSection,
  ConnectionsFoundationSection,
  TrustControlsSection,
  ImplementationReadinessSection,
  FoundationChecklistSection,
  AdjacentSolutionsSection,
  GrowingFaqSection,
  GrowingFinalCtaSection,
} from "@/components/growing-businesses";

export const metadata: Metadata = {
  title: "HR Software for Growing Businesses | Zoiko HR",
  description:
    "Build more structured HR foundations as your organization grows — reliable workforce information, repeatable people processes, clear permissions and connected operations.",
};

export default function GrowingBusinessesPage() {
  return (
    <div className="overflow-x-clip">
      <GrowingHeroSection />
      <RouteMeaningSection />
      <ReadinessCheckSection />
      <RecordsFoundationSection />
      <StructureFoundationSection />
      <LifecycleFoundationSection />
      <WorkflowsFoundationSection />
      <AccessFoundationSection />
      <InsightFoundationSection />
      <ConnectionsFoundationSection />
      <TrustControlsSection />
      <ImplementationReadinessSection />
      <FoundationChecklistSection />
      <AdjacentSolutionsSection />
      <GrowingFaqSection />
      <GrowingFinalCtaSection />
    </div>
  );
}
