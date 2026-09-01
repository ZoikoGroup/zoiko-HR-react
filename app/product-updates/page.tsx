import type { Metadata } from "next";
import {
  ProductUpdatesHeroSection,
  VocabularyStripSection,
  UpdatesIndexSection,
  ChangeTypeGuideSection,
  AdminActionReadinessSection,
  ProductUpdatesFaqSection,
  ProductUpdatesFinalCtaSection,
} from "@/components/product-updates";

export const metadata: Metadata = {
  title: "Product Updates | Zoiko HR",
  description:
    "Browse source-approved Zoiko HR product changes — affected areas, availability scope, whether action is required, and links to the current documentation.",
};

export default function ProductUpdatesPage() {
  return (
    <>
      <ProductUpdatesHeroSection />
      <VocabularyStripSection />
      <UpdatesIndexSection />
      <ChangeTypeGuideSection />
      <AdminActionReadinessSection />
      <ProductUpdatesFaqSection />
      <ProductUpdatesFinalCtaSection />
    </>
  );
}
