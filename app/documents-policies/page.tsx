import type { Metadata } from "next";
import {
  DocumentsHeroSection,
  ContentLifecycleSection,
  DocumentCatalogSection,
  TemplatesSection,
  VersionHistorySection,
  VariantsSection,
  DistributionProofSection,
  AccessibleContentSection,
  PermissionsSection,
  SourcesStorageSection,
  DocumentsFaqSection,
  DocumentsCtaSection,
} from "@/components/documents-policies";

export const metadata: Metadata = {
  title: "Documents & Policies | Zoiko HR",
  description:
    "Keep workforce documents current and make distribution and acknowledgment traceable — approved templates, version history, scope, access and review controls.",
};

export default function DocumentsPoliciesPage() {
  return (
    <>
      <DocumentsHeroSection />
      <ContentLifecycleSection />
      <DocumentCatalogSection />
      <TemplatesSection />
      <VersionHistorySection />
      <VariantsSection />
      <DistributionProofSection />
      <AccessibleContentSection />
      <PermissionsSection />
      <SourcesStorageSection />
      <DocumentsFaqSection />
      <DocumentsCtaSection />
    </>
  );
}
