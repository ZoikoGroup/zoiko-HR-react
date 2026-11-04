import type { Metadata } from "next";
import {
  DeveloperDocsHeroSection,
  DeveloperNavSection,
  OverviewSection,
  QuickStartSection,
  CapabilityMapSection,
  AuthenticationSection,
  ReferenceExplorerSection,
  ResourceSchemasSection,
  CodeExamplesSection,
  WebhooksEventsSection,
  ErrorsAndLimitsSection,
  EnvironmentsSection,
  VersioningSection,
  TrustAuthoritySection,
  DeveloperDocsFaqSection,
  DeveloperFinalCtaSection,
} from "@/components/developers";

export const metadata: Metadata = {
  title: "Developers | Zoiko HR",
  description:
    "Source-governed technical guidance for approved integration surfaces: authentication, operations, schemas, events, examples, errors and versioning.",
};

export default function DevelopersPage() {
  return (
    <div className="overflow-x-clip">
      <DeveloperDocsHeroSection />
      <DeveloperNavSection />
      <OverviewSection />
      <QuickStartSection />
      <CapabilityMapSection />
      <AuthenticationSection />
      <ReferenceExplorerSection />
      <ResourceSchemasSection />
      <CodeExamplesSection />
      <WebhooksEventsSection />
      <ErrorsAndLimitsSection />
      <EnvironmentsSection />
      <VersioningSection />
      <TrustAuthoritySection />
      <DeveloperDocsFaqSection />
      <DeveloperFinalCtaSection />
    </div>
  );
}
