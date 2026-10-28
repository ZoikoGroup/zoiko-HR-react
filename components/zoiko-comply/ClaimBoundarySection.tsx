import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CAN_SHOW = [
  "Current policy, control and evidence relationship, scope and version",
  "Evidence requirement, source, sensitivity and currentness rule",
  "A reviewer decision bounded to the stated requirement, scope, version and period",
  "An exception case with owner, action plan and closure criteria",
  "Workflow routing and evidence dependency reference, via Workflows & Approvals",
  "Audit history of state, decision, reason, actor, time and evidence version",
  "Named framework or jurisdiction coverage, only when a current Coverage Registry record exists",
];

export function ClaimBoundarySection() {
  return (
    <section id="claim-boundary" className="bg-slate-900 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Compliance claim boundary"
          title="A compliance-related fact is a governance-owned fact. It is never relabeled as a legal verdict."
          tone="dark"
          className="max-w-[720px]"
        >
          What Zoiko Comply can show stops well short of what only a separately
          approved legal or compliance authority can claim.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-blue-950 bg-slate-900 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-400">
                What this page can show
              </p>
              <div className="mt-3.5">
                {CAN_SHOW.map((item) => (
                  <p
                    key={item}
                    className="border-b border-slate-800 py-3 text-sm leading-5 text-slate-200 last:border-b-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-comply/compliance-claim-boundary.webp"
              alt="A presenter walking colleagues through a control status board"
              label="Compliance claim boundary"
              className="aspect-video w-full rounded-xl border border-blue-950 bg-slate-900 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
