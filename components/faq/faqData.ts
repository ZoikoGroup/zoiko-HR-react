export type FaqEntry = {
  question: string;
  answer: string;
  authorityLabel: string;
  authorityHref: string;
  reviewed: string;
  phase?: string;
};

export type FaqTopic = {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  dotClass: string;
  entries: FaqEntry[];
  boundary?: { title: string; text: string };
};

export const FAQ_TOPICS: FaqTopic[] = [
  {
    key: "product",
    label: "Product & Platform",
    shortLabel: "Product",
    description: "Core capabilities, modules, and platform behaviour.",
    dotClass: "bg-primary",
    entries: [
      {
        question: "What is Zoiko HR?",
        answer: "Zoiko HR is a workforce-administration platform for managing employee records, org structure, time, absence, and connected operations at scale.",
        authorityLabel: "Platform",
        authorityHref: "/platform",
        reviewed: "Aug 2024",
      },
      {
        question: "Is Zoiko HR a cloud platform?",
        answer: "Yes — Zoiko HR is delivered as a cloud-hosted service with no on-premise installation required.",
        authorityLabel: "Platform",
        authorityHref: "/platform",
        reviewed: "Aug 2024",
      },
      {
        question: "What modules does Zoiko HR include?",
        answer: "Core modules cover employee records, org structure, time and attendance, absence, and reporting.",
        authorityLabel: "Platform",
        authorityHref: "/platform",
        reviewed: "Aug 2024",
      },
      {
        question: "Can Zoiko HR support large workforces?",
        answer: "Yes — Zoiko HR is built to support large, multi-entity workforces with configurable scale.",
        authorityLabel: "Platform",
        authorityHref: "/platform",
        reviewed: "Aug 2024",
      },
      {
        question: "How is Zoiko HR updated?",
        answer: "Zoiko HR is updated through scheduled release cycles with published release notes.",
        authorityLabel: "Product Updates",
        authorityHref: "/resources/product-updates",
        reviewed: "Aug 2024",
      },
      {
        question: "Can administrators configure the platform?",
        answer: "Yes — configuration options span workflows, approval chains, fields, and role-based access controls.",
        authorityLabel: "Platform",
        authorityHref: "/platform",
        reviewed: "Aug 2024",
      },
    ],
  },
  {
    key: "global",
    label: "Global, Multi-Entity & Local Use",
    shortLabel: "Global",
    description: "Capability across borders, entities, and configurations.",
    dotClass: "bg-violet-500",
    entries: [
      {
        question: "Can Zoiko HR support multiple legal entities?",
        answer: "Yes — Zoiko HR supports a product hierarchy that organises employees across multiple entities within one deployment.",
        authorityLabel: "Documentation",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR support multiple countries?",
        answer: "Multi-country availability varies by region and configuration. Specific country availability is confirmed through a regional evaluation.",
        authorityLabel: "Global Coverage",
        authorityHref: "/platform/global-hr-management",
        reviewed: "Aug 2024",
      },
      {
        question: "Can different entities have separate configurations?",
        answer: "Yes — configuration and policy can be scoped to entity level within the product hierarchy.",
        authorityLabel: "Documentation",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR handle local compliance requirements?",
        answer: "The platform provides configurable policy frameworks; applicability to specific local requirements is assessed during implementation.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
      },
      {
        question: "Can employees transfer between entities within Zoiko HR?",
        answer: "Entity transfer workflows are supported within the platform. Process detail depends on configured workflow and HR policy.",
        authorityLabel: "Documentation",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
      {
        question: "Does the product hierarchy establish legal relationships?",
        answer: "No. A product hierarchy is an administrative model within the software only.",
        authorityLabel: "Documentation",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
    ],
    boundary: {
      title: "Boundary",
      text: "A product hierarchy is an administrative model; it does not by itself establish legal ownership, tax grouping, employer status or regulatory relationships.",
    },
  },
  {
    key: "integrations",
    label: "Integrations & Connected Operations",
    shortLabel: "Integrations",
    description: "How Zoiko HR connects to payroll, time, finance, and third-party systems.",
    dotClass: "bg-emerald-500",
    entries: [
      {
        question: "Does Zoiko HR integrate with payroll systems?",
        answer: "Zoiko HR connects to payroll providers through a defined integration layer. Specific provider availability is listed in integration documentation.",
        authorityLabel: "Integration Docs",
        authorityHref: "/integrations",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR integrate with time and attendance systems?",
        answer: "Yes — time and attendance data can flow between Zoiko HR and connected time systems via configured integration.",
        authorityLabel: "Integration Docs",
        authorityHref: "/integrations",
        reviewed: "Aug 2024",
      },
      {
        question: "Can Zoiko HR connect to finance or ERP systems?",
        answer: "Finance and ERP connectors are available. Specific systems and data scope depend on configuration and subscription.",
        authorityLabel: "Integration Docs",
        authorityHref: "/integrations",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR have an API?",
        answer: "Yes — Zoiko HR exposes APIs for integration. API documentation is available through the developer documentation portal.",
        authorityLabel: "API Docs",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
      {
        question: "Can third-party tools connect to Zoiko HR?",
        answer: "Third-party integrations are supported within the defined integration framework. Availability varies by provider.",
        authorityLabel: "Integration Docs",
        authorityHref: "/integrations",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR process payroll?",
        answer: "No. Zoiko HR is a workforce-administration platform. Payroll calculation and processing is performed by connected payroll systems.",
        authorityLabel: "Documentation",
        authorityHref: "/resources/developer-documentation",
        reviewed: "Aug 2024",
      },
    ],
    boundary: {
      title: "Connected HR-Time-Payroll boundary",
      text: "Integration between Zoiko HR and a payroll system means workforce data flows across a defined interface. It does not imply payroll calculation, tax determination, filing or payment. Those functions belong to the connected payroll system and its governing authorities.",
    },
  },
  {
    key: "security",
    label: "Security, Privacy & Access",
    shortLabel: "Security",
    description: "How Zoiko HR protects data and who can access it.",
    dotClass: "bg-rose-500",
    entries: [
      {
        question: "How does Zoiko HR protect employee data?",
        answer: "Zoiko HR applies encryption in transit and at rest, access controls, and audit logging. Full detail is in the Trust Center.",
        authorityLabel: "Trust Center",
        authorityHref: "/trust-center",
        reviewed: "Aug 2024",
      },
      {
        question: "Is Zoiko HR GDPR compliant?",
        answer: "Zoiko HR is designed to support GDPR-aligned data handling; specific compliance posture is detailed in the Trust Center and DPA.",
        authorityLabel: "Trust Center",
        authorityHref: "/trust-center",
        reviewed: "Aug 2024",
      },
      {
        question: "Where is Zoiko HR data hosted?",
        answer: "Data hosting regions and providers are documented in the Trust Center and vary by contracted deployment.",
        authorityLabel: "Trust Center",
        authorityHref: "/trust-center",
        reviewed: "Aug 2024",
      },
      {
        question: "Who can access employee records?",
        answer: "Access to employee records is governed by role-based permissions configured by the customer's HR administrators.",
        authorityLabel: "Trust Center",
        authorityHref: "/trust-center",
        reviewed: "Aug 2024",
      },
      {
        question: "Does Zoiko HR use AI on employee data?",
        answer: "Any AI functionality operates under governed permission and human-review boundaries; see AI Governance for scope and limits.",
        authorityLabel: "AI Governance",
        authorityHref: "/ai-governance",
        reviewed: "Aug 2024",
      },
      {
        question: "How are security incidents handled?",
        answer: "Security incidents follow a documented response process described in the Trust Center and Security Reporting pages.",
        authorityLabel: "Trust Center",
        authorityHref: "/trust-center",
        reviewed: "Aug 2024",
      },
    ],
  },
  {
    key: "implementation",
    label: "Implementation & Adoption",
    shortLabel: "Implementation",
    description: "How Zoiko HR is deployed and adopted in your organisation.",
    dotClass: "bg-amber-500",
    entries: [
      {
        question: "How long does implementation take?",
        answer: "Implementation duration depends on approved scope, systems, services, contract, and jurisdiction. No universal timeline applies.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
        phase: "Discovery",
      },
      {
        question: "What is involved in configuring Zoiko HR?",
        answer: "Configuration covers org structure, workflows, approval chains, policies, and role assignments, scoped to contracted modules.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
        phase: "Configuration",
      },
      {
        question: "How is historical data migrated?",
        answer: "Data migration scope and method is agreed during the discovery phase and executed according to the data migration plan.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
        phase: "Data",
      },
      {
        question: "What integrations are set up during implementation?",
        answer: "Integrations in scope are identified, configured, and tested as part of the integration workstream within the agreed project plan.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
        phase: "Integration",
      },
      {
        question: "How is the system validated before launch?",
        answer: "Validation includes user acceptance testing, data verification, and process walkthroughs against agreed acceptance criteria.",
        authorityLabel: "Implementation Guide",
        authorityHref: "/resources/implementation-guide",
        reviewed: "Aug 2024",
        phase: "Validation",
      },
      {
        question: "What support is available after go-live?",
        answer: "Post-launch adoption support is defined in the contract. Ongoing support is accessed through Help Center and Support channels.",
        authorityLabel: "Help Center",
        authorityHref: "/help-center",
        reviewed: "Aug 2024",
        phase: "Adoption",
      },
    ],
  },
  {
    key: "pricing",
    label: "Pricing & Commercial Access",
    shortLabel: "Pricing",
    description: "How pricing works and how to get current commercial detail.",
    dotClass: "bg-sky-500",
    entries: [
      {
        question: "How is Zoiko HR priced?",
        answer: "Pricing is based on factors including organisation size, modules, regions, and contract terms. Current pricing is available through the sales process.",
        authorityLabel: "Pricing",
        authorityHref: "/pricing",
        reviewed: "Aug 2024",
      },
      {
        question: "Are there different tiers or editions?",
        answer: "Zoiko HR has multiple access tiers. Module and tier availability is confirmed during the commercial evaluation.",
        authorityLabel: "Pricing",
        authorityHref: "/pricing",
        reviewed: "Aug 2024",
      },
      {
        question: "What is included in the subscription?",
        answer: "Subscription scope covers agreed modules, support tier, and implementation services as defined in the contract.",
        authorityLabel: "Pricing",
        authorityHref: "/pricing",
        reviewed: "Aug 2024",
      },
    ],
  },
];

export type RoleFaqEntry = { question: string; answer: string };
export type RoleFaqSet = { key: string; label: string; dotClass: string; entries: RoleFaqEntry[] };

export const ROLE_FAQS: RoleFaqSet[] = [
  {
    key: "employee",
    label: "Employee",
    dotClass: "bg-emerald-500",
    entries: [
      { question: "What can employees access in Zoiko HR?", answer: "Employees access their own profile, absence requests, time records, and any self-service features enabled by their HR team." },
      { question: "Can employees update their own records?", answer: "Self-service editing is configurable. What employees can edit depends on their organisation's configuration." },
      { question: "How do employees submit absence requests?", answer: "Absence requests are submitted through the employee self-service portal, subject to configured approval workflows." },
    ],
  },
  {
    key: "manager",
    label: "Manager",
    dotClass: "bg-primary",
    entries: [
      { question: "What can managers access in Zoiko HR?", answer: "Managers access their direct reports' records, approval queues, and team reporting within their configured scope." },
      { question: "Can managers approve absence requests?", answer: "Yes — managers can approve or decline requests routed to them under the configured approval workflow." },
      { question: "Can managers edit team member records?", answer: "Manager edit permissions are configurable and typically limited to specific fields defined by HR policy." },
    ],
  },
  {
    key: "hr-teams",
    label: "HR Teams",
    dotClass: "bg-violet-500",
    entries: [
      { question: "What can HR teams access in Zoiko HR?", answer: "HR teams access full employee records, org structure, workflows, and reporting within their assigned entities." },
      { question: "Can HR teams configure the platform?", answer: "Yes — HR administrators can configure workflows, fields, approval chains, and role-based access." },
      { question: "Can HR teams run bulk changes?", answer: "Bulk actions are supported and run through validation, preview, and approval before taking effect." },
    ],
  },
  {
    key: "approver",
    label: "Approver",
    dotClass: "bg-amber-500",
    entries: [
      { question: "What does an approver see in Zoiko HR?", answer: "Approvers see requests routed to them for decision, with relevant context and history for each request." },
      { question: "Can an approver delegate a decision?", answer: "Yes, where delegation is configured, an approver can route a decision to another authorized approver." },
      { question: "Are approval decisions auditable?", answer: "Yes — every approval decision is recorded with actor, timestamp, and outcome." },
    ],
  },
  {
    key: "delegated",
    label: "Delegated",
    dotClass: "bg-sky-500",
    entries: [
      { question: "What is a delegated access role?", answer: "A delegated role temporarily grants specific permissions to another user, such as during leave or coverage." },
      { question: "How long does a delegation last?", answer: "Delegation duration is configured per assignment and expires automatically unless renewed." },
      { question: "Can delegated access be revoked?", answer: "Yes — an authorized administrator can revoke delegated access at any time." },
    ],
  },
];
