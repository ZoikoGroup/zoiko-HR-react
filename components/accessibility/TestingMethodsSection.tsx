import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatusChip } from "./shared";

const METHODS = [
  {
    name: "Automated Checks",
    scope: "Public website pages",
    detail: "Automated checks are a baseline — not complete proof of conformance.",
  },
  {
    name: "Focus Management",
    scope: "Forms, dialogs, page navigation",
    detail: "Visible focus; programmatic focus recovery after interactions.",
  },
  {
    name: "Contrast & Visual",
    scope: "Body text, interactive elements",
    detail: "AA contrast ratio targets; non-color-only meaning.",
  },
  {
    name: "Semantics & Tables",
    scope: "Scope matrix, change log tables",
    detail: "Header scope, captions and programmatic relationships.",
  },
];

export function TestingMethodsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="06 / How Accessibility Is Evaluated"
          title="Testing methods and evidence."
          tone="dark"
        >
          Method categories describe how we evaluate accessibility. Named
          testing results require current evidence records. Automated checks are
          useful but never presented as complete proof.
        </SectionHeading>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
          <div className="flex min-w-0 flex-col gap-1">
            {METHODS.map((method, i) => (
              <Reveal key={method.name} delay={Math.min(i * 0.06, 0.24)}>
                <div className="flex items-stretch gap-4 px-6 py-4">
                  <span
                    aria-hidden
                    className="w-[3px] flex-none rounded-full bg-primary/50"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <h3 className="text-sm font-semibold leading-5 text-white">
                        {method.name}
                      </h3>
                      <StatusChip
                        status="Not Established"
                        className="self-start sm:self-auto"
                      />
                    </div>
                    <p className="mt-1 text-xs font-medium leading-4 text-slate-600">
                      Scope: {method.scope}
                    </p>
                    <p className="mt-1 text-xs leading-4 text-slate-400">
                      {method.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14} className="lg:h-full">
            <PlaceholderImage
              src="/images/accessibility/testing-methods.png"
              alt="Two colleagues reviewing a printed report at a desk"
              label="Reviewing testing evidence"
              className="aspect-[607/417] w-full lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-6 text-xs leading-4 text-slate-500">
            Testing evidence records are published only when scope, date,
            environment, reviewer and result state are approved. No cadence is
            implied.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
