import type { Metadata } from "next";
import {
  EmployeeRecordsHeroSection,
  WhatAreEmployeeRecordsSection,
  EmployeeRecordsProductProofSection,
  DiscoverRecordsSection,
  FieldMetadataSection,
  PersonRelationshipSection,
  ChangeHistorySection,
  SelfServiceViewSection,
  BulkOperationsSection,
  DocumentsGovernedSection,
  DataQualityRolesSection,
  CorrectionRequestsSection,
  MultiEntityContextSection,
  IntegrationsAuthoritativeSection,
  ReportingHealthSection,
  RecordsImplementationSection,
  RecordsPricingSection,
  EmployeeRecordsFaqSection,
  EmployeeRecordsFinalCtaSection,
} from "@/components/employee-records";

export const metadata: Metadata = {
  title: "Employee Records | Zoiko HR",
  description:
    "Zoiko HR Employee Records organizes structured employee and employment information with clear organization context, permissions, effective dates, and auditability.",
};

export default function EmployeeRecordsPage() {
  return (
    <>
      <EmployeeRecordsHeroSection />
      <WhatAreEmployeeRecordsSection />
      <EmployeeRecordsProductProofSection />
      <DiscoverRecordsSection />
      <FieldMetadataSection />
      <PersonRelationshipSection />
      <ChangeHistorySection />
      <SelfServiceViewSection />
      <BulkOperationsSection />
      <DocumentsGovernedSection />
      <DataQualityRolesSection />
      <CorrectionRequestsSection />
      <MultiEntityContextSection />
      <IntegrationsAuthoritativeSection />
      <ReportingHealthSection />
      <RecordsImplementationSection />
      <RecordsPricingSection />
      <EmployeeRecordsFaqSection />
      <EmployeeRecordsFinalCtaSection />
    </>
  );
}
