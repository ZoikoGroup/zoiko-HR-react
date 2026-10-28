export type GlossaryTerm = {
  name: string;
  /** Expansion shown beside acronyms, e.g. "Application Programming Interface". */
  expansion?: string;
  category: string;
};

/** The 82 published terms, transcribed from the design's A–Z list. */
export const TERMS: GlossaryTerm[] = [
  { name: "Accrual", category: "Payroll/Benefits Context" },
  { name: "API", expansion: "Application Programming Interface", category: "HR Technology" },
  { name: "Approval", category: "People Operations" },
  { name: "Approver", category: "People Operations" },
  { name: "ATS", expansion: "Applicant Tracking System", category: "HR Technology" },
  { name: "Attendance", category: "General HR" },
  { name: "Audit trail", category: "Policy/Governance" },

  { name: "Base pay", category: "Payroll/Benefits Context" },
  { name: "Benefit enrollment", category: "Payroll/Benefits Context" },

  { name: "Calibration", category: "Talent/Performance" },
  { name: "Check-in", category: "Talent/Performance" },
  { name: "Cohort", category: "Analytics/Metric" },
  { name: "Competency", category: "Talent/Performance" },
  { name: "Continuous feedback", category: "Talent/Performance" },

  { name: "Data completeness", category: "Workforce Data" },
  { name: "Data freshness", category: "Workforce Data" },
  { name: "Deduction", category: "Payroll/Benefits Context" },
  { name: "Delegation", category: "People Operations" },
  { name: "Denominator", category: "Analytics/Metric" },
  { name: "Department", category: "General HR" },
  { name: "Development plan", category: "Talent/Performance" },

  { name: "Effective date", category: "People Operations" },
  { name: "Employee", category: "General HR" },
  { name: "Employee record", category: "People Operations" },
  { name: "Employee self-service (ESS)", expansion: "ESS", category: "HR Technology" },
  { name: "Employment relationship", category: "People Operations" },
  { name: "Employment status", category: "General HR" },

  { name: "FTE", expansion: "Full-Time Equivalent", category: "Analytics/Metric" },

  { name: "Goal", category: "Talent/Performance" },
  { name: "Gross pay", category: "Payroll/Benefits Context" },

  { name: "HCM", expansion: "Human Capital Management", category: "HR Technology" },
  { name: "Headcount", category: "Analytics/Metric" },
  { name: "Holiday calendar", category: "People Operations" },
  { name: "HR case", category: "People Operations" },
  { name: "HRIS", expansion: "Human Resources Information System", category: "HR Technology" },

  { name: "Integration", category: "HR Technology" },

  { name: "Job", category: "General HR" },
  { name: "Job title", category: "General HR" },

  { name: "L&D", expansion: "Learning & Development", category: "General HR" },
  { name: "Leave balance", category: "People Operations" },
  { name: "Leave of absence", category: "General HR" },
  { name: "Legal entity", category: "General HR" },
  { name: "Lifecycle event", category: "People Operations" },
  { name: "Location", category: "General HR" },

  { name: "Manager relationship", category: "People Operations" },
  { name: "Manager self-service (MSS)", expansion: "MSS", category: "HR Technology" },

  { name: "Net pay", category: "Payroll/Benefits Context" },
  { name: "New hire", category: "General HR" },
  { name: "Notification", category: "HR Technology" },

  { name: "Offboarding", category: "People Operations" },
  { name: "Onboarding", category: "People Operations" },
  { name: "Organizational structure", category: "People Operations" },

  { name: "Pay period", category: "Payroll/Benefits Context" },
  { name: "Performance management", category: "People Operations" },
  { name: "Performance review", category: "Talent/Performance" },
  { name: "Permission", category: "HR Technology" },
  { name: "Policy acknowledgment", category: "Policy/Governance" },
  { name: "Position", category: "People Operations" },
  { name: "Preboarding", category: "People Operations" },
  { name: "Probation period", category: "Policy/Governance" },
  { name: "Promotion", category: "General HR" },

  { name: "Reporting period", category: "Analytics/Metric" },
  { name: "Retention rate", category: "Analytics/Metric" },
  { name: "Review cycle", category: "Talent/Performance" },
  { name: "Role-based access control (RBAC)", expansion: "RBAC", category: "HR Technology" },

  { name: "SCIM", expansion: "System for Cross-domain Identity Management", category: "HR Technology" },
  { name: "Service request", category: "People Operations" },
  { name: "Source of record", category: "HR Technology" },
  { name: "Span of control", category: "Analytics/Metric" },
  { name: "SSO", expansion: "Single Sign-On", category: "HR Technology" },
  { name: "Succession planning", category: "Talent/Performance" },

  { name: "Talent review", category: "Talent/Performance" },
  { name: "Team", category: "General HR" },
  // Category is barely legible in the screenshot — confirm.
  { name: "Timesheet", category: "People Operations" },
  { name: "Total compensation", category: "Payroll/Benefits Context" },
  { name: "Transfer", category: "People Operations" },
  { name: "Turnover", category: "Analytics/Metric" },

  { name: "Withholding", category: "Payroll/Benefits Context" },
  { name: "Worker", category: "General HR" },
  { name: "Worker type", category: "General HR" },
  { name: "Work schedule", category: "People Operations" },
  { name: "Workflow", category: "HR Technology" },
];

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function groupByLetter(terms: GlossaryTerm[]) {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of terms) {
    const letter = term.name[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return groups;
}
