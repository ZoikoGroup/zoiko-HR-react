import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BoundaryNote } from "./shared";

const ZOIKO_RESPONSIBILITIES = [
  "Build and maintain accessible product and public patterns within approved scope",
  "Publish and maintain this accessibility statement with current evidence",
  "Document known limitations and provide accessible workarounds where possible",
  "Operate an accessible, ungated feedback and barrier reporting route",
  "Provide accessible alternatives or contact for downloadable documents",
  "Disclose testing scope, methods and evidence access class",
  "Route accessibility feedback to the appropriate owner for triage",
  "Maintain version and correction history for material changes",
];

export function SharedResponsibilitySection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="12 / Product & Shared Responsibility"
          title="What Zoiko HR owns and what depends on your configuration."
        >
          Shared responsibility clarifies dependencies — it does not shift
          product defects onto users or customers. The boundary below reflects
          approved scope; exact services and timing depend on contract.
        </SectionHeading>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-0">
          <Reveal className="min-w-0 lg:pr-8">
            <h3 className="flex items-center gap-2.5 text-sm font-semibold text-slate-900">
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              Zoiko HR Responsibilities
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {ZOIKO_RESPONSIBILITIES.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-0.5 text-[10px] text-primary">
                    ▶
                  </span>
                  <span className="text-xs leading-5 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* The design shows the customer-side column as a plain empty
              panel, so nothing is written into it here. */}
          <Reveal
            delay={0.1}
            className="min-w-0 lg:border-l lg:border-slate-200 lg:pl-8"
          >
            <div
              aria-hidden
              className="h-full min-h-32 rounded-r-xl bg-slate-50/70 sm:min-h-60"
            />
          </Reveal>
        </div>

        <BoundaryNote label="Integration boundary:">
          Third-party integrations and embedded content have separate
          accessibility status. They do not inherit the Zoiko HR conformance
          record automatically. Review the relevant vendor&apos;s accessibility
          statement for their scope.
        </BoundaryNote>
      </Container>
    </section>
  );
}
