import type { Metadata } from "next";
import {
  DocsProHeroSection,
  RelationshipMeaningSection,
  WhatCanConnectSection,
  AuthorityModelSection,
  RelationshipModesSection,
  StorageBoundarySection,
  RetentionBoundarySection,
  SecurityPrivacySection,
  CrossModuleAuthoritySection,
  DocsProFaqSection,
  DocsProCtaSection,
} from "@/components/zoiko-docs-pro";

export const metadata: Metadata = {
  title: "Zoiko Docs Pro | Zoiko HR",
  description:
    "Connect workforce documents with Zoiko HR without losing version, permission or ownership — approved relationship modes, source authority and governed lifecycle.",
};

export default function ZoikoDocsProPage() {
  return (
    <>
      <DocsProHeroSection />
      <RelationshipMeaningSection />
      <WhatCanConnectSection />
      <AuthorityModelSection />
      <RelationshipModesSection />
      <StorageBoundarySection />
      <RetentionBoundarySection />
      <SecurityPrivacySection />
      <CrossModuleAuthoritySection />
      <DocsProFaqSection />
      <DocsProCtaSection />
    </>
  );
}
