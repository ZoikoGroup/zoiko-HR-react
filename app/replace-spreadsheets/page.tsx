import type { Metadata } from "next";
import {
  ReplaceSpreadsheetsHeroSection,
  OperatingSignalsSection,
  BeforeAfterSection,
  RoleExperienceSection,
  ReportingSection,
  AccessGovernanceSection,
  ModernizeQuestionsSection,
  ImplementationMigrationSection,
  ReplaceSpreadsheetsFaqSection,
  ReplaceSpreadsheetsFinalCtaSection,
} from "@/components/replace-spreadsheets";

export const metadata: Metadata = {
  title: "Replace Spreadsheets & Legacy HR | Zoiko HR",
  description:
    "Move fragmented HR spreadsheets and legacy administration into one governed system — structured employee records, standardized workflows, controlled access and report-ready information.",
};

export default function ReplaceSpreadsheetsPage() {
  return (
    <div className="overflow-x-clip">
      <ReplaceSpreadsheetsHeroSection />
      <OperatingSignalsSection />
      <BeforeAfterSection />
      <RoleExperienceSection />
      <ReportingSection />
      <AccessGovernanceSection />
      <ModernizeQuestionsSection />
      <ImplementationMigrationSection />
      <ReplaceSpreadsheetsFaqSection />
      <ReplaceSpreadsheetsFinalCtaSection />
    </div>
  );
}
