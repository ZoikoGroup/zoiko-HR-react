import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const UPSTREAM_CAN_PROVE = [
  "Approved source context and version",
  "Mapping/validation and effective date",
  "Release approval and cutoff decision",
  "Successful transmission and destination receipt",
  "Destination accepted/rejected/partial intake state",
  "Approved result/status reference returned from payroll",
  "Reconciliation status against defined references",
];

export function ResultBoundarySection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Payroll result reference boundary"
          title={
            <>
              A result reference is a payroll-owned fact —{" "}
              <span className="text-white">never relabeled as HR truth.</span>
            </>
          }
          tone="dark"
          className="max-w-[700px]"
        >
          What upstream preparation can prove stops well short of what only the
          approved payroll process can claim.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-blue-950 bg-slate-900 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-400">
                What upstream can prove
              </p>
              <div className="mt-4">
                {UPSTREAM_CAN_PROVE.map((item) => (
                  <p
                    key={item}
                    className="border-b border-white/5 py-3 text-sm text-slate-200 last:border-b-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-payroll/result-boundary.webp"
              alt="A presenter reviewing payroll reporting with colleagues"
              label="Payroll result reference"
              className="aspect-[612/378] w-full rounded-xl bg-slate-900 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
