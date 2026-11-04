import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StatusPill } from "./shared";
import type { Status } from "./shared";

const STATUSES: { status: Status; definition: string; rule: string }[] = [
  {
    status: "Verified current",
    definition: "Claim matches a current qualifying source and review threshold.",
    rule: "Positive confirmation only within stated scope.",
  },
  {
    status: "Limited / conditional",
    definition:
      "Claim is supported only within a plan, region, configuration, role, edition, or other condition.",
    rule: "Qualifier is mandatory and adjacent. Cannot be hidden in a tooltip only.",
  },
  {
    status: "Not verified",
    definition: "No qualifying evidence was located or evidence could not be validated.",
    rule: 'Never render as "No" or "Unavailable." Absence of evidence is not evidence of absence.',
  },
  {
    status: "Not applicable",
    definition: "Criterion genuinely does not apply to the subject or comparison scope.",
    rule: "Show the reason. Do not leave unanswered.",
  },
  {
    status: "Under review",
    definition:
      "Source age or change signal requires re-check before publishing or maintaining current status.",
    rule: "Do not present as current. Show last verified date and reason.",
  },
  {
    status: "Source conflict",
    definition: "Two qualifying sources disagree on this criterion.",
    rule: "Show conflict and both source references. Block simplified conclusion until resolved.",
  },
  {
    status: "Withdrawn",
    definition: "A previously published claim was retracted or invalidated by a qualifying source.",
    rule: "Preserve audit history. Remove from active positive claims. Do not imply misconduct.",
  },
];

export function StatusModelSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="How status works — not binary yes or no." className="max-w-[640px]">
          Every criterion result carries one of seven governed statuses. Status
          meaning is communicated in text, not color alone. All pills meet contrast
          requirements in forced-colors and high-contrast modes.
        </SectionHeading>

        <ul className="mt-8 flex flex-col gap-3">
          {STATUSES.map((item, i) => (
            <li key={item.status}>
              <Reveal
                delay={Math.min(i * 0.04, 0.24)}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:gap-4"
              >
                <div>
                  <StatusPill status={item.status} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">Definition</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.definition}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">
                    Rendering rule
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.rule}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
