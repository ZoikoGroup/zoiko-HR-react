import type { Metadata } from "next";
import {
  EmployeeHeroSection,
  SimplerExperienceSection,
  EmployeeHomeSection,
  PersonalInformationSection,
  RequestManagementSection,
  LifecycleMomentsSection,
  DocumentsAnswersSection,
  PrivacyPermissionsSection,
  ConnectedStackSection,
  GlobalMultiEntitySection,
  EmployeeFaqSection,
  EmployeeCtaSection,
} from "@/components/employees-selfservice";

export const metadata: Metadata = {
  title: "Zoiko HR for Employees | Zoiko HR",
  description:
    "Give people secure access to their own information, documents, requests and assigned HR actions — so they can find what they need, complete what is required and see what happens next without chasing HR.",
};

export default function EmployeesSelfServicePage() {
  return (
    <>
      <EmployeeHeroSection />
      <SimplerExperienceSection />
      <EmployeeHomeSection />
      <PersonalInformationSection />
      <RequestManagementSection />
      <LifecycleMomentsSection />
      <DocumentsAnswersSection />
      <PrivacyPermissionsSection />
      <ConnectedStackSection />
      <GlobalMultiEntitySection />
      <EmployeeFaqSection />
      <EmployeeCtaSection />
    </>
  );
}
