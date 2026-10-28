import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const QUESTIONS = [
  "Flow ID / version",
  "Purpose",
  "Source / destination",
  "Direction",
  "Source authority",
  "Data boundary",
  "Permission",
  "Dependency type",
  "Runtime state",
  "Reconciliation",
];

const ACTIVE = 4;

export function FlowContractSection() {
  return (
    <section id="flow-contract" className="scroll-mt-24 bg-sky-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Screen B — flow contract detail"
          title="Every flow contract answers the same ten questions."
          tone="dark"
          className="max-w-[680px]"
        >
          Flow ID and version, purpose, direction, source authority, data
          boundary, permission, dependency type, runtime and reconciliation are
          all fixed and versioned — nothing here implies a connector or
          write-back that isn&apos;t approved.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-blue-950 bg-slate-900">
            <div className="gap-px bg-blue-950 lg:flex">
              <div className="flex flex-col gap-1.5 bg-slate-900 p-4 lg:w-72 lg:flex-none">
                {QUESTIONS.map((question, i) => {
                  const active = i === ACTIVE;
                  return (
                    <div
                      key={question}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${
                        active ? "bg-blue-950" : ""
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`size-1.5 flex-none rounded-[3px] ${
                          active ? "bg-teal-400" : "bg-slate-600"
                        }`}
                      />
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {question}
                      </span>
                    </div>
                  );
                })}
              </div>

              <PlaceholderImage
                src="/images/controlled-interoperability/flow-contract.webp"
                alt="A team reviewing system monitoring screens together"
                label="Flow contract detail"
                className="aspect-video w-full bg-slate-900 lg:aspect-auto lg:min-w-0 lg:flex-1"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
