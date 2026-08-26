import type { ReactNode } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

/* Palette read from the Figma renders of this section. */
const PANEL = "border border-[#1b3459] bg-[#0e1b2e]";
const INSET = "border border-[#1b3459] bg-[#101f35]";
const DIVIDER = "border-[#16305a]";

type Chapter = {
  number: string;
  indexLabel: string;
  title: string;
  workspace: [string, string?];
  image?: string;
  mockup: ReactNode;
  shows: string;
  doesNotProve: string;
};

/* -------------------------------------------------------------- primitives */

function Badge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "blue" | "slate" | "amber" | "red" | "green";
}) {
  const tones = {
    blue: "border-blue-800/40 bg-blue-900/30 text-blue-300",
    slate: "border-[#1b3459] bg-[#152741] text-slate-400",
    amber: "border-amber-800/40 bg-amber-900/30 text-yellow-500",
    red: "border-red-800/40 bg-red-900/30 text-red-400",
    green: "border-emerald-800/40 bg-emerald-900/30 text-emerald-400",
  };
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-sm border px-1.5 py-0.5 text-[9px] font-semibold leading-3 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <p className="px-3 pb-2 pt-3 text-[8px] font-semibold uppercase leading-3 tracking-wider text-slate-500">
      {children}
    </p>
  );
}

function FootNote({
  children,
  tone = "slate",
}: {
  children: ReactNode;
  tone?: "slate" | "amber";
}) {
  return (
    <div className={`mx-3 mb-3 mt-auto rounded-md ${INSET} px-3 py-2`}>
      <p
        className={`text-[8px] leading-3 ${
          tone === "amber" ? "text-yellow-500" : "text-slate-500"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function KeyValues({
  rows,
  className = "",
}: {
  rows: [string, ReactNode][];
  className?: string;
}) {
  return (
    <div className={className}>
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={`flex items-baseline justify-between gap-3 border-b py-1.5 ${DIVIDER}`}
        >
          <span className="shrink-0 text-[9px] leading-3 text-slate-500">
            {label}
          </span>
          <span className="text-right text-[9px] font-medium leading-3 text-slate-300">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------- chapter 01 */

const COMMAND_STATS = [
  ["Open Events", "24"],
  ["Pending Approvals", "7"],
  ["Data Quality", "3"],
];

const WORK_ITEMS: [string, string, string, string, string, "blue" | "slate" | "amber" | "red"][] =
  [
    ["P1", "Onboarding — Emp.#4821", "EMEA/DE", "2024-08-15", "In Progress", "blue"],
    ["P1", "Transfer — Emp.#3302", "APAC/SG", "2024-08-16", "Pending", "slate"],
    ["P2", "Data quality — Emp.#7105", "Americas/US", "2024-08-17", "Review", "amber"],
    ["P2", "Doc ack. — Emp.#5543", "EMEA/FR", "2024-08-18", "Pending", "slate"],
    ["P3", "Integration exc. — Time", "APAC/AU", "2024-08-19", "Exception", "red"],
  ];

const PRIORITY_CLASS: Record<string, string> = {
  P1: "text-red-400",
  P2: "text-yellow-500",
  P3: "text-slate-400",
};

function CommandCenterMockup() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-3">
        {COMMAND_STATS.map(([label, value]) => (
          <div key={label} className={`rounded-lg p-2.5 ${INSET}`}>
            <p className="text-[8px] uppercase leading-3 tracking-tight text-slate-400">
              {label}
            </p>
            <p className="mt-1 font-heading text-base font-bold leading-6 text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[440px] text-left">
          <thead>
            <tr className={`border-y ${DIVIDER}`}>
              {["Pri", "Work Item", "Org", "Date", "Status"].map((column) => (
                <th
                  key={column}
                  className="px-3 py-1.5 text-[8px] font-semibold uppercase leading-3 text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WORK_ITEMS.map(([pri, item, org, date, status, tone]) => (
              <tr key={item} className={`border-b ${DIVIDER}`}>
                <td
                  className={`px-3 py-2 text-[8px] font-bold leading-3 ${PRIORITY_CLASS[pri]}`}
                >
                  {pri}
                </td>
                <td className="px-3 py-2 text-[10px] font-medium leading-4 text-slate-300">
                  {item}
                </td>
                <td className="px-3 py-2 text-[10px] leading-4 text-slate-400">
                  {org}
                </td>
                <td className="px-3 py-2 font-mono text-[8px] leading-3 text-slate-400">
                  {date}
                </td>
                <td className="px-3 py-2">
                  <Badge tone={tone}>{status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* --------------------------------------------------------------- chapter 02 */

const RECORD_TABS = [
  "Identity",
  "Employment",
  "Position",
  "Organization",
  "Documents",
  "Lifecycle",
  "History",
];

const RECORD_FIELDS: [string, string, string, string, boolean?][] = [
  ["Employment Type", "Full-time permanent", "HR Admin", "2024-01-15"],
  ["Position", "Senior HR Analyst", "HR Admin", "2024-03-01"],
  ["Entity", "Zoiko DE GmbH", "HR Admin", "2024-01-15"],
  ["Manager Rel.", "[Masked Ref.]", "HR Admin", "2024-03-01"],
  ["Salary Grade", "[Restricted]", "—", "—", true],
];

function EmployeeRecordMockup() {
  return (
    <div className="flex flex-1 flex-col sm:flex-row">
      <div
        className={`flex shrink-0 gap-1 overflow-x-auto border-b p-2 sm:w-32 sm:flex-col sm:border-b-0 sm:border-r ${DIVIDER}`}
      >
        {RECORD_TABS.map((tab) => (
          <span
            key={tab}
            className={`whitespace-nowrap rounded-sm px-2 py-1.5 text-[9px] leading-3 ${
              tab === "Employment"
                ? "bg-primary/20 font-semibold text-indigo-400"
                : "text-slate-400"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="min-w-0 flex-1 p-3">
        <div className={`flex flex-wrap items-center gap-3 border-b pb-3 ${DIVIDER}`}>
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/30 text-xs font-bold text-indigo-400">
            E
          </span>
          <div>
            <p className="text-xs font-semibold leading-4 text-slate-200">
              Emp. #4821 — [Masked]
            </p>
            <p className="text-[9px] leading-3 text-slate-400">
              Senior Analyst · EMEA / Germany
            </p>
          </div>
          <Badge tone="green">Active</Badge>
        </div>

        <div className="mt-3 overflow-x-auto">
          <div className="min-w-[380px]">
            {RECORD_FIELDS.map(([label, value, source, date, restricted]) => (
              <div
                key={label}
                className={`grid grid-cols-[1.1fr_1.3fr_0.8fr_0.8fr] items-center gap-2 border-b py-2 ${DIVIDER}`}
              >
                <span className="text-[9px] leading-3 text-slate-400">
                  {label}
                </span>
                <span
                  className={`text-[9px] font-medium leading-3 ${
                    restricted ? "italic text-red-400/70" : "text-slate-200"
                  }`}
                >
                  {value}
                </span>
                <span className="text-[9px] leading-3 text-slate-600">
                  {source}
                </span>
                <span className="font-mono text-[9px] leading-3 text-slate-600">
                  {date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 03 */

const ORG_TREE: [string, string, "green" | "amber", number][] = [
  ["Zoiko Group", "Active", "green", 0],
  ["Zoiko Americas LLC", "Active", "green", 1],
  ["Zoiko EMEA GmbH", "Active", "green", 1],
  ["Zoiko APAC Pte.", "Active", "green", 1],
  ["US — New York", "Active", "green", 2],
  ["DE — Berlin", "Active", "green", 2],
  ["SG — Singapore", "Review", "amber", 2],
];

function GlobalHrMockup() {
  return (
    <div className="flex flex-1 flex-col sm:flex-row">
      <div className={`shrink-0 border-b sm:w-44 sm:border-b-0 sm:border-r ${DIVIDER}`}>
        <PanelLabel>Organization Tree</PanelLabel>
        <div className="px-3 pb-3">
          {ORG_TREE.map(([name, state, tone, depth]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-2 py-1"
              style={{ paddingLeft: depth * 8 }}
            >
              <span
                className={`truncate text-[9px] leading-3 ${
                  depth === 0
                    ? "font-semibold text-slate-200"
                    : "text-slate-400"
                }`}
              >
                {depth > 0 ? "└ " : "◈ "}
                {name}
              </span>
              <Badge tone={tone}>{state}</Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold leading-4 text-slate-200">
            Zoiko EMEA GmbH
          </p>
          <Badge tone="green">Active</Badge>
        </div>

        <KeyValues
          className="mt-2"
          rows={[
            ["Parent", "Zoiko Group"],
            ["Type", "Legal Entity"],
            ["Locations", "Berlin, Munich, Paris"],
            ["Local Config", "2 overrides"],
            ["HR Owner", "Regional HR"],
            ["Effective", "2020-01-01"],
          ]}
        />

        <div className="mt-3 rounded-md border border-amber-800/40 bg-amber-900/20 px-3 py-2">
          <p className="text-[9px] font-semibold leading-3 text-yellow-500">
            Local Configuration Note
          </p>
          <p className="mt-1 text-[9px] leading-4 text-slate-400">
            2 local overrides active: Document language, Probation period. Owner:
            DE HR. Review due: 2024-10-01.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 04 */

const LIFECYCLE_STAGES: [string, "done" | "active" | "todo"][] = [
  ["Preboarding", "done"],
  ["Onboarding", "active"],
  ["Active", "todo"],
  ["Leave", "todo"],
  ["Transfer", "todo"],
];

const ONBOARDING_TASKS: [string, string, string, string][] = [
  ["1", "IT Access Request", "IT / Admin", "Aug 10"],
  ["2", "Contract Signature", "HR Admin", "Aug 12"],
  ["3", "Policy Acknowledgment", "Employee", "Aug 14"],
  ["4", "Manager Introduction", "Manager", "Aug 15"],
  ["5", "Role Induction", "HR Admin", "Aug 20"],
];

function LifecycleMockup() {
  return (
    <div className="flex flex-1 flex-col p-3">
      <div className="flex items-start justify-between gap-1">
        {LIFECYCLE_STAGES.map(([stage, state], i) => (
          <div key={stage} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <span
                className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-[#1b3459]"}`}
              />
              <span
                className={`flex size-4 items-center justify-center rounded-full text-[8px] font-bold ${
                  state === "done"
                    ? "bg-emerald-600 text-white"
                    : state === "active"
                      ? "bg-primary text-white"
                      : "bg-[#152741] text-slate-500"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`h-px flex-1 ${
                  i === LIFECYCLE_STAGES.length - 1
                    ? "bg-transparent"
                    : "bg-[#1b3459]"
                }`}
              />
            </div>
            <span
              className={`mt-1 text-[8px] leading-3 ${
                state === "todo" ? "text-slate-500" : "text-slate-300"
              }`}
            >
              {stage}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] font-semibold leading-4 text-indigo-400">
        Onboarding Plan — Emp. #4821
      </p>

      <div className="mt-2">
        {ONBOARDING_TASKS.map(([step, task, owner, date]) => (
          <div
            key={task}
            className={`grid grid-cols-[16px_1.6fr_1fr_auto] items-center gap-3 border-b py-2 ${DIVIDER}`}
          >
            <span className="text-[8px] leading-3 text-slate-600">{step}</span>
            <span className="text-[10px] font-medium leading-4 text-slate-200">
              {task}
            </span>
            <span className="text-[9px] leading-3 text-slate-500">{owner}</span>
            <span className="font-mono text-[9px] leading-3 text-slate-500">
              {date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 05 */

const APPROVAL_QUEUE: [string, string, string, string, "blue" | "amber"][] = [
  ["P1", "Transfer Request", "Emp.#3302 · APAC · Aug 16", "Pending", "blue"],
  ["P2", "Position Change", "Emp.#7741 · Americas · Aug 17", "Info Req.", "amber"],
  ["P2", "Leave Request", "Emp.#2201 · EMEA · Aug 18", "Pending", "blue"],
];

function ApprovalsMockup() {
  return (
    <div className="flex flex-1 flex-col">
      <PanelLabel>Approval Queue</PanelLabel>
      <div className="flex flex-col gap-2 px-3 pb-3">
        {APPROVAL_QUEUE.map(([pri, title, meta, status, tone]) => (
          <div key={title} className={`rounded-lg p-2.5 ${INSET}`}>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[8px] font-bold leading-3 ${PRIORITY_CLASS[pri]}`}
              >
                {pri}
              </span>
              <Badge tone={tone}>{status}</Badge>
            </div>
            <p className="mt-1.5 text-[10px] font-medium leading-4 text-slate-200">
              {title}
            </p>
            <p className="text-[9px] leading-3 text-slate-500">{meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 06 */

const ROLE_TABS = ["Employee", "Manager", "HR Admin", "Executive"];

const ALLOWED = [
  "View own profile",
  "Submit requests",
  "Upload documents",
  "Track task status",
  "Request corrections",
];

const RESTRICTED = [
  "View others' records",
  "Approve requests",
  "Access HR reports",
  "Modify org structure",
];

function RoleExperiencesMockup() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
        {ROLE_TABS.map((tab) => (
          <span
            key={tab}
            className={`rounded-md px-3 py-1.5 text-center text-[9px] font-semibold leading-4 ${
              tab === "Employee"
                ? "bg-primary text-white"
                : `${INSET} text-slate-400`
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className={`grid gap-4 border-t px-3 py-3 sm:grid-cols-2 ${DIVIDER}`}>
        <div>
          <p className="text-[8px] font-semibold uppercase leading-3 tracking-wider text-emerald-400">
            ✓ Allowed actions
          </p>
          <ul className="mt-2 space-y-1.5">
            {ALLOWED.map((action) => (
              <li
                key={action}
                className="flex items-center gap-2 text-[9px] leading-4 text-slate-300"
              >
                <span className="size-1 rounded-full bg-emerald-400" />
                {action}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[8px] font-semibold uppercase leading-3 tracking-wider text-red-400">
            ✗ Restricted actions
          </p>
          <ul className="mt-2 space-y-1.5">
            {RESTRICTED.map((action) => (
              <li
                key={action}
                className="flex items-center gap-2 text-[9px] leading-4 text-slate-500 line-through"
              >
                <span className="size-1 rounded-full bg-red-400" />
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FootNote>
        Role title does not confer unrestricted access. Actual permissions depend
        on identity, scope, state, policy and delegation.
      </FootNote>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 07 */

const REPORT_TILES = [
  ["24", "Open Lifecycle Events"],
  ["7", "Approvals Pending"],
];

const METRIC_DEFINITION: [string, string][] = [
  ["Definition", "Count of lifecycle events with all tasks completed in period"],
  ["Source", "HR Platform — Lifecycle module"],
  ["Scope", "All active entities in example workspace"],
  ["Freshness", "Example: refreshed every 4 hours"],
  ["Privacy", "Threshold applied — no individual drill-down below minimum group size"],
];

function ReportingMockup() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="grid grid-cols-2 gap-2 p-3">
        {REPORT_TILES.map(([value, label]) => (
          <div key={label} className={`rounded-lg p-2.5 ${INSET}`}>
            <p className="font-heading text-base font-bold leading-6 text-white">
              {value}
            </p>
            <p className="text-[9px] leading-3 text-slate-400">{label}</p>
            <p className="mt-1 text-[8px] italic leading-3 text-slate-600">
              Example count
            </p>
          </div>
        ))}
      </div>

      <PanelLabel>Lifecycle completion — last 8 weeks (synthetic)</PanelLabel>
      <div className="h-16 px-3" />

      <PanelLabel>Metric definition</PanelLabel>
      <div className="px-3">
        {METRIC_DEFINITION.map(([label, value]) => (
          <div
            key={label}
            className={`grid grid-cols-[70px_minmax(0,1fr)] gap-3 border-b py-1.5 ${DIVIDER}`}
          >
            <span className="text-[9px] leading-3 text-slate-500">{label}</span>
            <span className="text-[9px] leading-3 text-slate-300">{value}</span>
          </div>
        ))}
      </div>

      <FootNote tone="amber">
        <span className="font-semibold">Export Gate:</span> Requires permission
        and approved purpose in real product. Not available in public tour.
      </FootNote>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 08 */

const CONNECTIONS: [string, string][] = [
  ["Identity (Generic)", "Outbound · Source: HR Platform · Last: 2m ago"],
  [
    "Time & Attendance (Generic)",
    "Bidirectional · Source: Time System · Last: 18m ago",
  ],
  ["Payroll Upstream (Generic)", "Outbound · Source: HR Platform · Last: 5m ago"],
  ["Finance (Generic)", "Outbound · Source: HR Platform · Last: 2h ago"],
  ["Documents (Generic)", "Bidirectional · Source: Doc Platform · Last: 12m ago"],
];

function IntegrationsMockup() {
  return (
    <div className="flex flex-1 flex-col">
      <PanelLabel>Connection health</PanelLabel>
      <div className="flex flex-col gap-2 px-3">
        {CONNECTIONS.map(([name, meta]) => (
          <div key={name} className={`rounded-lg p-2.5 ${INSET}`}>
            <p className="text-[10px] font-medium leading-4 text-slate-200">
              {name}
            </p>
            <p className="text-[9px] leading-3 text-slate-500">{meta}</p>
          </div>
        ))}

        <div className="rounded-lg border border-red-800/40 bg-red-900/20 p-2.5">
          <p className="text-[10px] font-semibold leading-4 text-red-400">
            Exception — Time &amp; Attendance
          </p>
          <p className="mt-0.5 text-[9px] leading-3 text-slate-400">
            Queue depth: 4 records. Action: Retry scheduled. Owner: Integration
            Admin. No silent overwrite — queued pending reconciliation.
          </p>
        </div>
      </div>

      <FootNote>
        No provider logos shown — categories only unless verified in registry.
        Availability varies by plan and jurisdiction.
      </FootNote>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 09 */

const EFFECTIVE_ACCESS: [string, string][] = [
  ["Identity", "HR Admin #221 — Emp. Ref."],
  ["Role", "HR Business Partner"],
  ["Org Scope", "EMEA only"],
  ["Object", "Employee Records"],
  ["Sensitivity", "Standard (Salary: Restricted)"],
  ["Purpose", "Lifecycle Management"],
  ["State", "Active assignment"],
];

const GOVERNANCE_CARDS: [string, string][] = [
  [
    "Security & Privacy",
    "Data classification, access logs, retention, deletion rights.",
  ],
  [
    "AI Governance",
    "No autonomous employment decisions. Human-accountable where applied.",
  ],
  [
    "Accessibility",
    "WCAG 2.2 AA target. Keyboard, screen reader, zoom/reflow support.",
  ],
  [
    "Audit & Evidence",
    "Actor, action, reason, timestamp, before/after reference recorded.",
  ],
];

function GovernanceMockup() {
  return (
    <div className="flex flex-1 flex-col gap-3 p-3">
      <div className={`rounded-lg p-3 ${INSET}`}>
        <p className="text-[8px] font-semibold uppercase leading-3 tracking-wider text-indigo-400">
          Effective access — example
        </p>
        <KeyValues className="mt-2" rows={EFFECTIVE_ACCESS} />
        <div className="mt-3 rounded-md border border-primary/30 bg-primary/15 px-3 py-2">
          <p className="text-[9px] font-semibold leading-3 text-indigo-300">
            Effective: View + Propose + Lifecycle (EMEA scope)
          </p>
          <p className="mt-1 text-[9px] leading-3 text-slate-400">
            Cannot: Approve salary changes · Export compensation · Administer
            other entities
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {GOVERNANCE_CARDS.map(([title, body]) => (
          <div key={title} className={`rounded-lg p-3 ${INSET}`}>
            <p className="text-[10px] font-medium leading-4 text-slate-200">
              {title}
            </p>
            <p className="mt-1 text-[9px] leading-4 text-slate-500">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter 10 */

const IMPLEMENTATION_STEPS: [string, string, string, "blue" | "slate"][] = [
  ["3", "Prepare Data", "Owner: Customer", "blue"],
  ["4", "Configure & Connect", "Owner: Zoiko + Customer", "slate"],
  ["5", "Validate", "Owner: Joint", "slate"],
  ["6", "Launch", "Owner: Joint", "slate"],
  ["7", "Adopt & Improve", "Owner: Ongoing", "slate"],
];

function ImplementationMockup() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-2 p-3">
        {IMPLEMENTATION_STEPS.map(([step, title, owner, tone]) => (
          <div
            key={title}
            className={`flex items-center gap-3 rounded-lg p-2.5 ${
              tone === "blue"
                ? "border border-primary/40 bg-primary/15"
                : INSET
            }`}
          >
            <span
              className={`flex size-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${
                tone === "blue"
                  ? "bg-primary text-white"
                  : "bg-[#152741] text-slate-500"
              }`}
            >
              {step}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium leading-4 text-slate-200">
                {title}
              </p>
              <p className="text-[9px] leading-3 text-slate-500">{owner}</p>
            </div>
            <Badge tone={tone === "blue" ? "blue" : "slate"}>
              {tone === "blue" ? "In Progress" : "Pending"}
            </Badge>
          </div>
        ))}
      </div>

      <FootNote>
        No fixed timeline, cost, outcome, migration volume or compliance result
        implied. Implementation scope varies by contract.
      </FootNote>
    </div>
  );
}

/* ------------------------------------------------------------------ chapters */

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    indexLabel: "Command Center",
    title: "People Operations Command Center",
    workspace: ["People Operations", "Command Center"],
    image: "/images/product-tour/chapter-01-command-center.png",
    mockup: <CommandCenterMockup />,
    shows: "Task-oriented operational attention and explicit ownership.",
    doesNotProve:
      "No promise of universal dashboard metrics, predictive scoring or live data refresh cadence.",
  },
  {
    number: "02",
    indexLabel: "Core HR & Records",
    title: "Core HR and Employee Records",
    workspace: ["Core HR", "Employee Records"],
    image: "/images/product-tour/chapter-02-core-hr.png",
    mockup: <EmployeeRecordMockup />,
    shows:
      "Structured, effective-dated, permission-aware record administration.",
    doesNotProve:
      "No guarantee every field, document type, or jurisdictional record is universally available.",
  },
  {
    number: "03",
    indexLabel: "Global HR",
    title: "Global HR and Organization Structure",
    workspace: ["Global HR", "Organization Structure"],
    image: "/images/product-tour/chapter-03-global-hr.png",
    mockup: <GlobalHrMockup />,
    shows:
      "Consistent organization structures with controlled local context and explicit ownership.",
    doesNotProve:
      "No assertion of legal ownership, employer status, tax group or compliance.",
  },
  {
    number: "04",
    indexLabel: "Lifecycle",
    title: "Onboarding and Lifecycle",
    workspace: ["Onboarding & Lifecycle", "Event Plan"],
    image: "/images/product-tour/chapter-04-lifecycle.png",
    mockup: <LifecycleMockup />,
    shows: "Structured event orchestration and accountability.",
    doesNotProve:
      "No automatic payroll, legal, immigration, government filing or compliance outcome.",
  },
  {
    number: "05",
    indexLabel: "Workflows",
    title: "Workflows and Approvals",
    workspace: ["Workflows & Approvals", "Action Review"],
    image: "/images/product-tour/chapter-05-workflows.png",
    mockup: <ApprovalsMockup />,
    shows: "Human-accountable routing and decision evidence.",
    doesNotProve:
      "The platform does not autonomously make employment decisions or guarantee policy/legal correctness.",
  },
  {
    number: "06",
    indexLabel: "Role Experiences",
    title: "Role-Based Experiences",
    workspace: ["Role Experiences", "Permission Boundaries"],
    image: "/images/product-tour/chapter-06-role-experiences.png",
    mockup: <RoleExperiencesMockup />,
    shows: "Role-aware experiences and permission boundaries.",
    doesNotProve:
      "A role title does not confer universal access — actual access depends on identity, scope, sensitivity, purpose, state and delegation.",
  },
  {
    number: "07",
    indexLabel: "Reporting",
    title: "Reporting and Operational Insights",
    workspace: ["Reporting", "Operational Insights"],
    image: "/images/product-tour/chapter-07-reporting.png",
    mockup: <ReportingMockup />,
    shows:
      "Operational visibility with explicit metric definitions and data state.",
    doesNotProve:
      "No employee productivity score, behavior monitoring, sentiment scoring or predictive employment decision.",
  },
  {
    number: "08",
    indexLabel: "Integrations",
    title: "Integrations and Connected Operations",
    workspace: ["Integrations", "Connected Operations"],
    image: "/images/product-tour/chapter-08-integrations.png",
    mockup: <IntegrationsMockup />,
    shows: "Governed integration concepts and operational health/recovery.",
    doesNotProve:
      "No universal provider availability, real-time latency, bidirectional sync, endpoint SLA or jurisdiction coverage.",
  },
  {
    number: "09",
    indexLabel: "Trust & Permissions",
    title: "Trust, Permissions and Governance",
    workspace: ["Trust, Permissions & Governance"],
    mockup: <GovernanceMockup />,
    shows: "Access is explainable and governance is visible.",
    doesNotProve:
      "No certification/compliance guarantee, unrestricted admin access, or legal/tax/payroll advice.",
  },
  {
    number: "10",
    indexLabel: "Implementation",
    title: "Implementation and Readiness",
    workspace: ["Implementation & Readiness"],
    mockup: <ImplementationMockup />,
    shows: "Implementation rigor and shared responsibility.",
    doesNotProve:
      "No fixed timeline, cost, outcome, migration volume, service scope or compliance result without contract-backed evidence.",
  },
];

export function TourChaptersSection() {
  return (
    <section
      id="tour-chapters"
      className="border-t border-white/10 bg-[#0a1220] py-16 text-white"
    >
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Product Tour
          </span>
          <h2 className="mt-3 max-w-[520px] font-heading text-3xl font-bold leading-10">
            10 representative product areas — each in its own section.
          </h2>
          <p className="mt-3 max-w-[560px] leading-6 text-slate-500">
            Scroll through all chapters or jump directly from the index. Each
            section shows a fully coded UI mockup with synthetic data.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[224px_minmax(0,1fr)]">
          <ChapterIndex />

          <div className="flex min-w-0 flex-col">
            {CHAPTERS.map((chapter, i) => (
              <ChapterBlock
                key={chapter.number}
                chapter={chapter}
                index={i}
                last={i === CHAPTERS.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChapterIndex() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className={`rounded-xl p-2 ${PANEL}`}>
        <p className="px-3 py-2 text-[9px] font-semibold uppercase leading-3 tracking-wider text-slate-600">
          10 Chapters
        </p>
        {CHAPTERS.map((chapter, i) => (
          <a
            key={chapter.number}
            href={`#chapter-${chapter.number}`}
            className={`mt-px flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              i === 0 ? "bg-primary/20" : "hover:bg-white/5"
            }`}
          >
            <span
              className={`flex h-4 w-6 items-center justify-center rounded-sm text-[10px] font-black leading-4 ${
                i === 0 ? "bg-primary text-white" : "bg-[#152741] text-slate-600"
              }`}
            >
              {chapter.number}
            </span>
            <span
              className={`text-xs font-medium leading-3 ${
                i === 0 ? "text-indigo-400" : "text-slate-500"
              }`}
            >
              {chapter.indexLabel}
            </span>
            {i === 0 ? (
              <span className="ml-auto text-[9px] leading-3 text-primary">
                ●
              </span>
            ) : null}
          </a>
        ))}
      </div>
    </aside>
  );
}

function ChapterBlock({
  chapter,
  index,
  last,
}: {
  chapter: Chapter;
  index: number;
  last: boolean;
}) {
  return (
    <div id={`chapter-${chapter.number}`} className="scroll-mt-24">
      <Reveal delay={0.06}>
        <div className="flex items-center gap-4">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 font-heading text-xl font-black text-primary">
            {chapter.number}
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase leading-4 tracking-wider text-primary">
              Chapter {index + 1} of 10
            </p>
            <p className="mt-1 font-heading text-xl font-bold leading-7 text-white">
              {chapter.title}
            </p>
          </div>
          <span aria-hidden className="hidden h-px flex-1 bg-white/5 sm:block" />
        </div>
      </Reveal>

      <Reveal delay={0.12} y={30}>
        <div
          className={`mt-6 grid overflow-hidden rounded-xl ${PANEL} ${
            chapter.image ? "lg:grid-cols-[minmax(0,1fr)_260px]" : ""
          }`}
        >
          <div className="flex min-w-0 flex-col">
            <div
              className={`flex items-center gap-2 border-b bg-[#14294d] px-4 py-1.5 ${DIVIDER}`}
            >
              <span aria-hidden className="size-1.5 rounded-full bg-indigo-400" />
              <span className="text-[9px] font-semibold uppercase leading-3 tracking-wide text-indigo-300">
                Tour Mode · Example Workspace · Synthetic Data
              </span>
            </div>
            <div
              className={`flex items-center justify-between border-b bg-[#0b1a2d] px-4 py-2 ${DIVIDER}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-xs font-semibold leading-4 text-white">
                  {chapter.workspace[0]}
                </span>
                {chapter.workspace[1] ? (
                  <span className="text-[10px] leading-4 text-slate-600">
                    {chapter.workspace[1]}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/60" />
                <span className="size-2.5 rounded-full bg-yellow-500/60" />
                <span className="size-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>
            <div className="flex flex-1 flex-col">{chapter.mockup}</div>
          </div>

          {chapter.image ? (
            <PlaceholderImage
              src={chapter.image}
              alt={chapter.title}
              label={chapter.title}
              className="min-h-48 w-full bg-white lg:h-full"
            />
          ) : null}
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase leading-4 tracking-wider text-indigo-400">
              What this shows
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              {chapter.shows}
            </p>
          </div>
          <div className="rounded-xl border border-orange-300/20 bg-orange-300/5 px-5 py-4">
            <p className="text-[10px] font-semibold uppercase leading-4 tracking-wider text-yellow-500">
              What this does not prove
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              {chapter.doesNotProve}
            </p>
          </div>
        </div>
      </Reveal>

      {!last ? <div className="my-10 h-px bg-white/5" /> : null}
    </div>
  );
}
