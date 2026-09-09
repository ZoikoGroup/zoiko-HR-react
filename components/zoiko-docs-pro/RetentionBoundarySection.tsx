import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const ACTIONS = [
  {
    glyph: "⊡",
    accent: "text-primary",
    headerBg: "bg-slate-50",
    title: "Remove relationship",
    lines: [
      "Stops or removes the Zoiko HR relationship to the document or artifact.",
      "Effect on source content is explicit and not assumed. Removing the link does not delete the source object.",
    ],
    warning:
      "If the relationship is acknowledged/distributed, removal may require a governed supersession decision.",
  },
  {
    glyph: "⊟",
    accent: "text-amber-600",
    headerBg: "bg-amber-50/60",
    title: "Delete HR artifact",
    lines: [
      "Removes the Zoiko HR-governed document artifact from HR scope.",
      "Requires HR object authority plus retention/hold/currentness checks. Does not delete source content.",
    ],
    warning:
      "If a retention policy or legal/admin hold is active, delete is blocked until policy permits. Hold state can differ between systems.",
  },
  {
    glyph: "◎",
    accent: "text-rose-600",
    headerBg: "bg-rose-50",
    title: "Delete source content",
    lines: [
      "Only source repository authority can establish or execute source deletion.",
      "HR action cannot imply or trigger source deletion. Source withdrawal is a separate, distinct lifecycle state.",
    ],
    warning:
      "Recovery, backup and RPO/RTO behavior is never claimed without approved repository capability.",
  },
];

const POLICIES = [
  {
    title: "Retention periods",
    body: "Only from current approved policy authority. No period is invented here.",
  },
  {
    title: "Legal / admin hold",
    body: "If approved, blocks incompatible lifecycle actions. Exact legal effect remains with policy authority.",
  },
  {
    title: "Archive / retrieval",
    body: "Source-governed semantics. No archive or retrieval claim made without registry definition.",
  },
];

export function RetentionBoundarySection() {
  return (
    <section
      id="document-controls"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Retention, hold & deletion boundary"
          title="Three distinct actions — relationship removal, HR artifact deletion and source deletion are never conflated"
        >
          Retention periods, legal hold and archive/recovery behavior come from
          the approved policy authority — not this page. No period is invented
          here.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {ACTIONS.map((action, i) => (
            <Reveal key={action.title} delay={0.06 + i * 0.06} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200">
                <div
                  className={`flex items-center gap-3 px-5 py-4 ${action.headerBg}`}
                >
                  <span aria-hidden className={`text-lg ${action.accent}`}>
                    {action.glyph}
                  </span>
                  <p className="text-base font-semibold text-slate-950">
                    {action.title}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  {action.lines.map((line, j) => (
                    <p
                      key={line}
                      className={`text-sm leading-6 text-slate-600 ${
                        j > 0 ? "border-t border-slate-100 pt-4" : ""
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                  <p className="mt-auto rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs leading-5 text-amber-800">
                    <span aria-hidden>⚠ </span>
                    {action.warning}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {POLICIES.map((policy, i) => (
            <Reveal key={policy.title} delay={0.24 + i * 0.05}>
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">
                  {policy.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {policy.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
