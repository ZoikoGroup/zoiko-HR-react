import type { Metadata } from "next";
import {
  LeaveHeroSection,
  PolicyManagementSection,
  LeaveTypesScopeSection,
  BalanceLedgerSection,
  RequestJourneySection,
  ApprovalActionReviewSection,
  TeamLeaveCalendarSection,
  AttendanceContextExceptionsSection,
  CorrectionsAdjustmentsSection,
  IntegrationsHandoffsSection,
  PrivacyWorkerRightsSection,
  LeaveFaqSection,
} from "@/components/leave-attendance";

export const metadata: Metadata = {
  title: "Leave & Attendance | Zoiko HR",
  description:
    "Coordinate configured leave policies, requests, balance context, human approvals, calendars and attendance exceptions with clear source, effective-time, privacy and audit boundaries.",
};

export default function LeaveAttendancePage() {
  return (
    <>
      <LeaveHeroSection />
      <PolicyManagementSection />
      <LeaveTypesScopeSection />
      <BalanceLedgerSection />
      <RequestJourneySection />
      <ApprovalActionReviewSection />
      <TeamLeaveCalendarSection />
      <AttendanceContextExceptionsSection />
      <CorrectionsAdjustmentsSection />
      <IntegrationsHandoffsSection />
      <PrivacyWorkerRightsSection />
      <LeaveFaqSection />
    </>
  );
}
