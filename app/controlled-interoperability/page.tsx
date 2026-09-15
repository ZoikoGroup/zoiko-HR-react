import type { Metadata } from "next";
import {
  InteropHeroSection,
  DirectAnswerSection,
  SourceAuthoritySection,
  FlowContractSection,
  DataBoundarySection,
  EcosystemSection,
  OptionalitySection,
  LifecycleSection,
  FailureBehaviorSection,
  AdjacentProductsSection,
  OwningProductsSection,
  InteropFaqSection,
  InteropCtaSection,
} from "@/components/controlled-interoperability";

export const metadata: Metadata = {
  title: "Controlled Interoperability | Zoiko HR",
  description:
    "Use Zoiko HR with approved Zoiko or external systems through explicit flow permissions, source authority, data boundaries and lifecycle controls — without making wider suite adoption a prerequisite.",
};

export default function ControlledInteroperabilityPage() {
  return (
    <>
      <InteropHeroSection />
      <DirectAnswerSection />
      <SourceAuthoritySection />
      <FlowContractSection />
      <DataBoundarySection />
      <EcosystemSection />
      <OptionalitySection />
      <LifecycleSection />
      <FailureBehaviorSection />
      <AdjacentProductsSection />
      <OwningProductsSection />
      <InteropFaqSection />
      <InteropCtaSection />
    </>
  );
}
