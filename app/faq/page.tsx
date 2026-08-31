import { 
  FaqHeroSection,
  FaqCoverageSection,
  FindAnswerSection,
  BrowseByTopicSection,
  ProductPlatformSection,
  GlobalMultiEntitySection,
  IntegrationsSection,
  SecurityPrivacySection,
  ImplementationAdoptionSection,
  PricingSection,
  RoleQuestionsSection,
  FreshnessAndSourcingSection,
  GetDirectHelpSection,
  HighIntentFAQLibrarySection,
  EvaluationNextStepsSection
} from '@/components/faq';

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* FAQ Sections */}
      <FaqHeroSection />
      <FaqCoverageSection />
      <FindAnswerSection />
      <BrowseByTopicSection />
      <ProductPlatformSection />
      <GlobalMultiEntitySection />
      <IntegrationsSection />
      <SecurityPrivacySection />
      <ImplementationAdoptionSection />
      <PricingSection />
      <RoleQuestionsSection />
      <FreshnessAndSourcingSection />
      <GetDirectHelpSection />
      <HighIntentFAQLibrarySection />
      <EvaluationNextStepsSection />
      
    </main>
  );
}
