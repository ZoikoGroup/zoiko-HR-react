import type { Metadata } from "next";
import {
  IdentitySsoHeroSection,
  ProviderRegistrySection,
  ProtocolSupportSection,
  SigninDiscoverySection,
  ConfiguringSsoSection,
  AttributeMappingSection,
  AutomaticProvisioningSection,
  OperationalTraceabilitySection,
  AdjacentProductsSection,
  ReadinessAccordionSection,
  IdentitySsoFaqSection,
  IdentitySsoFinalCtaSection,
} from "@/components/identity-and-single-sign-on";

export const metadata: Metadata = {
  title: "Identity & Single Sign-On | Zoiko HR",
  description:
    "Connect approved identity providers, manage SAML 2.0 & OIDC federations, maintain governed sign-in routing, and enforce versioned SSO access decisions in Zoiko HR.",
};

export default function IdentityAndSingleSignOnPage() {
  return (
    <>
      <IdentitySsoHeroSection />
      <ProviderRegistrySection />
      <ProtocolSupportSection />
      <SigninDiscoverySection />
      <ConfiguringSsoSection />
      <AttributeMappingSection />
      <AutomaticProvisioningSection />
      <OperationalTraceabilitySection />
      <AdjacentProductsSection />
      <ReadinessAccordionSection />
      <IdentitySsoFaqSection />
      <IdentitySsoFinalCtaSection />
    </>
  );
}
