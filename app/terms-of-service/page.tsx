import React from "react";
import TermsOfServiceHero from "@/components/terms-of-service/TermsOfServiceHero"; // Adjust path as needed
import AccountAgreementSection from "@/components/terms-of-service/AccountAgreementSection";
import TermsOverviewSection from "@/components/terms-of-service/TermsOverviewSection";
import ApplicabilitySection from "@/components/terms-of-service/ApplicabilitySection";
import AccessLicenseSection from "@/components/terms-of-service/AccessLicenseSection";
import CustomerDataSection from "@/components/terms-of-service/CustomerDataSection";
import SecuritySection from "@/components/terms-of-service/SecuritySection";
import IntegrationsSection from "@/components/terms-of-service/IntegrationsSection";
import AiAssistedSection from "@/components/terms-of-service/AiAssistedSection";
import SuspensionSection from "@/components/terms-of-service/SuspensionSection";
import TermTerminationSection from "@/components/terms-of-service/TermTerminationSection";
import WarrantiesLiabilitySection from "@/components/terms-of-service/WarrantiesLiabilitySection";
import EffectiveDateSection from "@/components/terms-of-service/EffectiveDateSection";
import FAQSection from "@/components/terms-of-service/FAQSection";
import RelatedResourcesSection from "@/components/terms-of-service/RelatedResourcesSection";
import EvaluateFooterCTA from "@/components/terms-of-service/EvaluateFooterCTA";

export default function TermsOfServicePage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden bg-white">
      <TermsOfServiceHero />
      <AccountAgreementSection />
      <TermsOverviewSection />
      <ApplicabilitySection />
      <AccessLicenseSection />
      <CustomerDataSection />
      <SecuritySection />
      <IntegrationsSection />
      <AiAssistedSection />
      <SuspensionSection />
      <TermTerminationSection />
      <WarrantiesLiabilitySection />
      <EffectiveDateSection />
      <FAQSection />
      <RelatedResourcesSection />
      <EvaluateFooterCTA />
    </main>
  );
}
