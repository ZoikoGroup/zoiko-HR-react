import type { Metadata } from "next";
import {
  SelfServiceHeroSection,
  WhatIsSelfServiceSection,
  AccessInputsSection,
  ProductProofSection,
  RecordActionsSection,
  RequestTypesSection,
  AssignedTasksSection,
  LeaveAttendanceSection,
  LifecycleTasksSection,
  TeamActionsSection,
  MobileFirstSection,
  CrossModuleSection,
  ImplementationSection,
  SelfServiceFaqSection,
  SelfServiceCtaSection,
} from "@/components/self-service";

export const metadata: Metadata = {
  title: "Self-Service | Zoiko HR",
  description:
    "Give employees, managers and delegated users the right actions, records and tasks — without broad access. Permissions, source ownership and status stay clear.",
};

export default function SelfServicePage() {
  return (
    <>
      <SelfServiceHeroSection />
      <WhatIsSelfServiceSection />
      <AccessInputsSection />
      <ProductProofSection />
      <RecordActionsSection />
      <RequestTypesSection />
      <AssignedTasksSection />
      <LeaveAttendanceSection />
      <LifecycleTasksSection />
      <TeamActionsSection />
      <MobileFirstSection />
      <CrossModuleSection />
      <ImplementationSection />
      <SelfServiceFaqSection />
      <SelfServiceCtaSection />
    </>
  );
}
