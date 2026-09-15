import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const MOMENTS = [
  {
    id: "01",
    moment: "Before joining",
    outcome:
      "Know what information or documents are required and what has been completed.",
    principle:
      "Guided checklist; avoid overwhelming new joiners with the full platform.",
  },
  {
    id: "02",
    moment: "First days",
    outcome:
      "See onboarding actions, policies and essential organization information.",
    principle: "Prioritize required tasks and clear due states.",
  },
  {
    id: "03",
    moment: "Role or team change",
    outcome:
      "Understand assigned actions or updated information connected to an approved change.",
    principle:
      "Show effective dates and only information relevant to the employee.",
  },
  {
    id: "04",
    moment: "Leave or absence request",
    outcome:
      "Submit and track configured leave or absence requests where the organization has enabled the workflow.",
    principle:
      "Do not imply universal statutory entitlement calculation without jurisdiction-validated functionality.",
  },
  {
    id: "05",
    moment: "Document or policy action",
    outcome:
      "Read, acknowledge or complete required steps for assigned documents where configured.",
    principle: "Show version, action required and completion status.",
  },
  {
    id: "06",
    moment: "Offboarding",
    outcome:
      "Complete assigned exit actions and receive appropriate final information.",
    principle: "Respect access cut-off, retention and security policy.",
  },
];

const COLUMNS = ["Moment", "Employee outcome", "Experience principle"];

export function LifecycleMomentsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Lifecycle moments"
          title="Make important moments obvious."
          className="max-w-[600px]"
        >
          Zoiko HR should make each transition in an employee&apos;s working life
          legible and manageable without requiring employees to figure out what to
          do next.
        </SectionHeading>

        {/* Stacks into labelled blocks below lg so no column is dropped. */}
        <Reveal delay={0.1} amount={0}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="hidden border-b border-slate-200 bg-slate-50 lg:grid lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)_minmax(0,240px)]">
              {COLUMNS.map((column) => (
                <p
                  key={column}
                  className="px-5 py-3 text-[10px] font-medium uppercase leading-4 tracking-wide text-gray-400"
                >
                  {column}
                </p>
              ))}
            </div>

            {MOMENTS.map((row, i) => (
              <div
                key={row.id}
                className={`border-b border-slate-100 last:border-b-0 lg:grid lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)_minmax(0,240px)] ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-start gap-3 px-5 pt-4 lg:py-4">
                  <span className="pt-0.5 font-mono text-[10px] leading-4 text-primary">
                    {row.id}
                  </span>
                  <span className="break-words text-sm font-semibold leading-5 text-slate-950">
                    {row.moment}
                  </span>
                </div>

                <div className="px-5 pt-2 lg:border-l lg:border-slate-100 lg:py-4">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 lg:hidden">
                    {COLUMNS[1]}
                  </p>
                  <p className="break-words text-xs leading-5 text-slate-600">
                    {row.outcome}
                  </p>
                </div>

                <div className="px-5 pb-4 pt-2 lg:border-l lg:border-slate-100 lg:py-4">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400 lg:hidden">
                    {COLUMNS[2]}
                  </p>
                  <p className="break-words text-xs font-medium leading-4 text-gray-500">
                    {row.principle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
