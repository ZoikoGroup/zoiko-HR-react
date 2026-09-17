import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StatusPill } from "./shared";
import type { Status } from "./shared";

type Cell = {
  status: Status;
  claim: string;
  condition: string;
  /** Warning-style condition box (amber) vs neutral (slate). */
  conditionTone: "warn" | "neutral";
  source?: string;
  reviewed: string;
};

type Row = { criterion: string; category: string; zoiko: Cell; subject: Cell };

const ROWS: Row[] = [
  {
    criterion: "Role-based permission model",
    category: "Roles & governance",
    zoiko: {
      status: "Verified current",
      claim:
        "Permissions are governed by role, organizational scope, object sensitivity, and state. Delegation is supported with defined constraints.",
      condition: "Condition: Scope and object-sensitivity details require product documentation review.",
      conditionTone: "warn",
      source: "Zoiko HR Platform Overview",
      reviewed: "Sep 2026 · Reviewed 12 Sep 2026",
    },
    subject: {
      status: "Limited / conditional",
      claim:
        "Role-based access is available; object-level sensitivity and scope constraints are documented for Enterprise tier.",
      condition: "Condition: Enterprise tier only. Standard tier has reduced granularity.",
      conditionTone: "warn",
      reviewed: "Reviewed 12 Sep 2026",
    },
  },
  {
    criterion: "Payroll integration authority model",
    category: "Integrations",
    zoiko: {
      status: "Limited / conditional",
      claim:
        "Payroll integrations support documented authority direction, monitoring, and reconciliation. Write-back behavior depends on approved connector configuration.",
      condition: "Condition: Behavior is connector-specific. See Integrations route for approved connections.",
      conditionTone: "warn",
      source: "Zoiko HR Integrations",
      reviewed: "Sep 2026 · Reviewed 12 Sep 2026",
    },
    subject: {
      status: "Not verified",
      claim: "Not verified from qualifying public evidence at this review date.",
      condition:
        "Not verified does not mean absent. Qualifying evidence was not located at this review date.",
      conditionTone: "neutral",
      reviewed: "Reviewed 12 Sep 2026",
    },
  },
  {
    criterion: "Headcount metric definition visibility",
    category: "Reporting & insights",
    zoiko: {
      status: "Verified current",
      claim:
        "Headcount metric includes denominator definition, inclusion/exclusion criteria, effective-date semantics, and data-quality state accessible within the reporting surface.",
      condition: "Condition: Definition access depends on user role and scope assignment.",
      conditionTone: "warn",
      source: "Zoiko Insights product documentation",
      reviewed: "Sep 2026 · Reviewed 12 Sep 2026",
    },
    subject: {
      status: "Under review",
      claim: "Documentation updated Jul 2026; under review for current applicability after reported changes.",
      condition: "Condition: Review in progress.",
      conditionTone: "warn",
      // Shown exactly as the design has it.
      reviewed: "Reviewed Reviewing",
    },
  },
];

function MatrixCell({ cell }: { cell: Cell }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <StatusPill status={cell.status} />
      <p className="text-xs leading-5 text-ink sm:text-sm sm:leading-6">{cell.claim}</p>
      <p
        className={`w-full rounded-lg border px-2.5 py-1.5 text-xs leading-4 ${
          cell.conditionTone === "warn"
            ? "border-orange-300 bg-orange-50 text-yellow-800"
            : "border-slate-200 bg-slate-50 text-slate-500"
        }`}
      >
        {cell.condition}
      </p>
      <p className="text-xs leading-4 text-slate-400">
        {cell.source ? (
          <>
            Source: <span className="text-slate-500">{cell.source}</span> · {cell.reviewed}
          </>
        ) : (
          cell.reviewed
        )}
      </p>
    </div>
  );
}

export function ComparisonMatrixSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Comparison matrix — sample">
          Three example criteria showing the status, claim, qualifier, and source
          format. Platform A · Large-suite HCM.
        </SectionHeading>

        <Reveal amount={0.1}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            {/* Column headers only where the three columns sit side by side. */}
            <div className="hidden grid-cols-3 border-b border-slate-200 bg-slate-50 lg:grid">
              {["Criterion", "Zoiko HR", "Comparison subject"].map((header, i) => (
                <p
                  key={header}
                  className={`px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-400 ${
                    i > 0 ? "border-l border-slate-200" : ""
                  }`}
                >
                  {header}
                </p>
              ))}
            </div>

            {ROWS.map((row, i) => (
              <div
                key={row.criterion}
                className={`grid lg:grid-cols-3 ${i > 0 ? "border-t border-slate-200" : ""}`}
              >
                <div className="bg-slate-50 px-5 py-4 lg:bg-white">
                  <h3 className="text-sm font-semibold leading-5 text-ink">{row.criterion}</h3>
                  <p className="mt-1 text-xs leading-4 text-slate-400">{row.category}</p>
                </div>
                <div className="border-t border-slate-200 px-5 py-4 lg:border-l lg:border-t-0">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400 lg:hidden">
                    Zoiko HR
                  </p>
                  <MatrixCell cell={row.zoiko} />
                </div>
                <div className="border-t border-slate-200 px-5 py-4 lg:border-l lg:border-t-0">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400 lg:hidden">
                    Comparison subject
                  </p>
                  <MatrixCell cell={row.subject} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-4 max-w-[680px] text-xs leading-4 text-slate-400">
          Example records only. Full comparisons are published after editorial and
          rights review. Comparison-subject names are illustrative placeholders; no
          capability claim is made about any named vendor without a qualifying
          source.
        </p>
      </Container>
    </section>
  );
}
