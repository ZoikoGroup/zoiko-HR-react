import type { Metadata } from "next";
import {
  SubprocessorsHeroSection,
  AeoAnswerSection,
  RegistrySection,
  FieldGuideSection,
  ProviderDetailSection,
  ClassificationSection,
  ProcessingPurposeSection,
  ProcessingLocationsSection,
  ChangeLedgerSection,
  ChangeNoticesSection,
  ObjectionsSection,
  AuthorityMapSection,
  FreshnessSection,
  SubprocessorsFaqSection,
  NextStepsSection,
} from "@/components/subprocessors";

export const metadata: Metadata = {
  title: "Subprocessors | Zoiko HR",
  description:
    "Review the current approved Zoiko HR subprocessor registry, published change history and the governing DPA route for notice periods, objection rights and transfer mechanisms.",
};

export default function SubprocessorsPage() {
  return (
    <>
      <SubprocessorsHeroSection />
      <AeoAnswerSection />
      <RegistrySection />
      <FieldGuideSection />
      <ProviderDetailSection />
      <ClassificationSection />
      <ProcessingPurposeSection />
      <ProcessingLocationsSection />
      <ChangeLedgerSection />
      <ChangeNoticesSection />
      <ObjectionsSection />
      <AuthorityMapSection />
      <FreshnessSection />
      <SubprocessorsFaqSection />
      <NextStepsSection />
    </>
  );
}
