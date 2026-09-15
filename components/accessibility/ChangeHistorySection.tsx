import { Container, Reveal } from "@/components/ui";
import { SectionHeading, ChangeTag } from "./shared";

const CHANGES = [
  {
    id: "CHG-004",
    tag: "Publication",
    date: "Pending approval",
    record: "Accessibility Statement — ZHR-TRUST-04",
    description:
      "Initial public Accessibility page prepared for approval. Conformance claim state: Not Established. 3 known limitations disclosed.",
    impact: "Public — new page",
    owner: "Accessibility Program Owner",
    dot: "border-blue-500 bg-blue-500",
  },
  {
    id: "CHG-003",
    tag: "Scope Update",
    date: "Pending",
    record: "Scope Matrix — ZHR-A11Y-SCOPE-001",
    description:
      "Initial scope matrix created. Mobile application and admin console confirmed as excluded from this statement pending separate scope record.",
    impact: "Public — scope clarification",
    owner: "Accessibility Program Owner",
    dot: "border-blue-300 bg-blue-400",
  },
  {
    id: "CHG-002",
    tag: "Limitation Added",
    date: "2024-Q4",
    record: "Limitation — LIM-002",
    description:
      "Mobile application scope identified as not established. Workaround: use web application on desktop browser.",
    impact: "Public — new known limitation",
    owner: "Product Accessibility Lead",
    dot: "border-amber-400 bg-amber-500",
  },
  {
    id: "CHG-001",
    tag: "Limitation Added",
    date: "2024-Q4",
    record: "Limitation — LIM-001",
    description:
      "PDF accessibility status identified as not yet audited. Workaround: HTML statement primary; contact support for accessible format.",
    impact: "Public — new known limitation",
    owner: "Content Team",
    dot: "border-amber-400 bg-amber-500",
  },
];

export function ChangeHistorySection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="14 / Currentness, Corrections & Change History"
          title="What changed and when."
        >
          Material changes to conformance claims, known limitations, scope or
          evidence trigger a change record. Superseded claims point to the
          current record. Resolved limitations are verified before removal.
        </SectionHeading>

        {/* The rail runs continuously behind the dots rather than being drawn
            per row, so it never breaks between entries. */}
        <div className="relative mt-10 pl-10 sm:pl-14">
          <span
            aria-hidden
            className="absolute bottom-6 left-[11px] top-6 w-px bg-slate-200 sm:left-[19px]"
          />

          <div className="flex flex-col gap-5">
            {CHANGES.map((change, i) => (
              <Reveal key={change.id} delay={Math.min(i * 0.06, 0.24)}>
                <div className="relative">
                  <span
                    aria-hidden
                    className={`absolute -left-10 top-5 size-6 rounded-full border-4 bg-slate-50 sm:-left-14 ${change.dot}`}
                  />
                  <div className="rounded-xl border border-slate-200 bg-white px-6 py-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-[11px] uppercase text-slate-400">
                          {change.id}
                        </span>
                        <ChangeTag tag={change.tag} />
                      </span>
                      <span className="text-xs text-slate-500">
                        {change.date}
                      </span>
                    </div>

                    <p className="mt-2.5 text-sm font-medium text-primary">
                      {change.record}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      {change.description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
                      <span>Impact: {change.impact}</span>
                      <span>Owner: {change.owner}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
