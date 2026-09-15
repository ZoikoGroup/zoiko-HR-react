import { Metadata } from "next";
import {
  DataImportExportHeroSection,
  DirectAnswerSection,
  ImportSetupSection,
  MappingStudioSection,
  ValidationClassesSection,
  SnapshotPreviewSection,
  ExecutionLifecycleSection,
  ErrorRemediationSection,
  GovernedExportSection,
  ExportLifecycleSection,
  AdjacentAuthoritySection,
  SecurityBoundarySection,
  DataImportExportFaqSection,
  DataImportExportFinalCtaSection,
} from "@/components/data-import-and-export";

export const metadata: Metadata = {
  title: "Data Import & Export - Governed Enterprise Migration Pipelines | Zoiko HR",
  description:
    "Import, validate, map, and export enterprise HR data with multi-stage dry-run validation, deterministic field mapping rules, error remediation workflows, and zero-trust security controls.",
};

export default function DataImportExportPage() {
  return (
    <>
      <DataImportExportHeroSection />
      <DirectAnswerSection />
      <ImportSetupSection />
      <MappingStudioSection />
      <ValidationClassesSection />
      <SnapshotPreviewSection />
      <ExecutionLifecycleSection />
      <ErrorRemediationSection />
      <GovernedExportSection />
      <ExportLifecycleSection />
      <AdjacentAuthoritySection />
      <SecurityBoundarySection />
      <DataImportExportFaqSection />
      <DataImportExportFinalCtaSection />
    </>
  );
}
