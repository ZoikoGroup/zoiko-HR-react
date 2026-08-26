import type { Metadata } from "next";
import CompareHero from "@/components/compare/CompareHero";
import ComparisonApproachSection from "@/components/compare/ComparisonApproachSection";
import MethodologySection from "@/components/compare/MethodologySection";
import EvaluationQuestions from "@/components/compare/EvaluationQuestions";
import CriterionTaxonomy from "@/components/compare/CriterionTaxonomy";
import StatusDefinitions from "@/components/compare/StatusDefinitions";
import SourceMethodology from "@/components/compare/SourceMethodology";
import ProductScope from "@/components/compare/ProductScope";
import ImplementationCriteria from "@/components/compare/ImplementationCriteria";
import TrustCriteria from "@/components/compare/TrustCriteria";
import CommercialCriteria from "@/components/compare/CommercialCriteria";
import Limitations from "@/components/compare/Limitations";

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
    </div>
  );
}
