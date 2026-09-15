import type { Metadata } from "next";
import {
  DeveloperDocsHeroSection,
  DeveloperTaskMapSection,
  CapabilityMapSection,
  AuthenticationSection,
  ReferenceExplorerSection,
  ResourceSchemasSection,
  CodeExamplesSection,
  ErrorsAndLimitsSection,
  EnvironmentsSection,
  SecurityBoundariesSection,
  VersioningSection,
  DeveloperDocsFaqSection,
} from "@/components/developer-documentation";

export const metadata: Metadata = {
  title: "Developer Documentation | Zoiko HR",
  description:
    "Source-governed technical guidance for approved Zoiko HR integration surfaces — authentication, operations, schemas, events, examples, errors and versioning, published only where current sources establish them.",
};

export default function DeveloperDocumentationPage() {
  return (
    <>
      <DeveloperDocsHeroSection />
      <DeveloperTaskMapSection />
      <CapabilityMapSection />
      <AuthenticationSection />
      <ReferenceExplorerSection />
      <ResourceSchemasSection />
      <CodeExamplesSection />
      <ErrorsAndLimitsSection />
      <EnvironmentsSection />
      <SecurityBoundariesSection />
      <VersioningSection />
      <DeveloperDocsFaqSection />
    </>
  );
}
