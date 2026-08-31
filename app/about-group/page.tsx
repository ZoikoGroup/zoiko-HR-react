import { 
  AboutGroupHero, 
  GroupAtAGlance, 
  WhyZoikoGroup, 
  PortfolioMap, 
  SharedPrinciples, 
  Governance, 
  GroupPartnerships, 
  LeadershipNotice, 
  GroupFAQ, 
  GroupNextSteps
} from '@/components/about-group';

export default function AboutGroupPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* About Group Sections */}
      <AboutGroupHero />
      <GroupAtAGlance />
      <WhyZoikoGroup />
      <PortfolioMap />
      <SharedPrinciples />
      <Governance />
      <GroupPartnerships />
      <LeadershipNotice />
      <GroupFAQ />
      <GroupNextSteps />
      
    </main>
  );
}
