import type { Metadata } from "next";
import {
  CompareHero,
  ComparisonApproachSection,
  MethodologySection,
  EvaluationQuestions,
  CriterionTaxonomy,
  StatusDefinitions,
  SourceMethodology,
  ProductScope,
  ImplementationCriteria,
  TrustCriteria,
  CommercialCriteria,
  Limitations,
  CorrectionsSection,
  FAQSection,
  FinalConversionSection,
} from "@/components/compare-hr";

export const metadata: Metadata = {
  title: "Compare Zoiko HR | Zoiko HR",
  description:
    "Compare Zoiko HR with the facts, dates, and sources visible. Every criterion is sourced, dated and qualified.",
};

export default function CompareHrPage() {
  return (
    <div className="overflow-x-clip">
      <CompareHero />
      <ComparisonApproachSection />
      <MethodologySection />
      <EvaluationQuestions />
      <CriterionTaxonomy />
      <StatusDefinitions />
      <SourceMethodology />
      <ProductScope />
      <ImplementationCriteria />
      <TrustCriteria />
      <CommercialCriteria />
      <Limitations />
      <CorrectionsSection />
      <FAQSection />
      <FinalConversionSection />
    </div>
  );
}
