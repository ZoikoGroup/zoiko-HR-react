import type { Metadata } from "next";
import {
  DpaHeroSection,
  AeoAnswerSection,
  ScopeNavigatorSection,
  PackageVersionSection,
  PartiesRolesSection,
  AnnexOneSection,
  ProcessorObligationsSection,
  SecurityMeasuresSection,
  SubprocessorsSection,
  TransfersSection,
  AuditEvidenceSection,
  ExecutionSection,
  DpaFaqSection,
} from "@/components/data-processing-addendum";

export const metadata: Metadata = {
  title: "Data Processing Addendum | Zoiko HR",
  description:
    "Review the current approved Zoiko HR Data Processing Addendum package, version lineage and related annex or evidence routes — public standard terms or controlled request path.",
};

export default function DataProcessingAddendumPage() {
  return (
    <>
      <DpaHeroSection />
      <AeoAnswerSection />
      <ScopeNavigatorSection />
      <PackageVersionSection />
      <PartiesRolesSection />
      <AnnexOneSection />
      <ProcessorObligationsSection />
      <SecurityMeasuresSection />
      <SubprocessorsSection />
      <TransfersSection />
      <AuditEvidenceSection />
      <ExecutionSection />
      <DpaFaqSection />
    </>
  );
}
