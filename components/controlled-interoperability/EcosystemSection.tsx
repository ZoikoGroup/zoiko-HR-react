import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, ClaimAndBoundary, ProductBadge } from "./shared";

const ZOIKO = [
  {
    initials: "TM",
    badge: "bg-teal-600",
    name: "ZoikoTime",
    relationship:
      "Approved schedule, attendance and timesheet information reference.",
    guardrail:
      "Does not imply mandatory adoption or that Zoiko HR becomes timekeeping authority.",
  },
  {
    initials: "PR",
    badge: "bg-primary",
    name: "Zoiko Payroll",
    relationship: "Employee and payroll-preparation information reference.",
    guardrail:
      "Does not imply mandatory adoption or Zoiko HR ownership of payroll calculation.",
  },
  {
    initials: "DP",
    badge: "bg-violet-600",
    name: "Zoiko Docs Pro",
    relationship:
      "Workforce documentation, storage and templates reference.",
    guardrail: "Does not imply all documents replicate or must move.",
  },
  {
    initials: "CM",
    badge: "bg-yellow-600",
    name: "Zoiko Comply",
    relationship:
      "Policies, controls, evidence and compliance workflows reference.",
    guardrail: "Does not imply automatic compliance or mandatory use.",
  },
  {
    initials: "ID",
    badge: "bg-blue-950",
    name: "ZoikoID",
    relationship: "Identity, authentication and controlled access reference.",
    guardrail:
      "Identity detail stays with Identity & Single Sign-On; not an exclusive provider unless approved.",
  },
  {
    initials: "Z1",
    badge: "bg-primary",
    name: "Zoiko One",
    relationship: "Wider integrated-suite experience.",
    guardrail:
      "Presented as an optional suite path — never a default prerequisite.",
  },
];

const EXTERNAL = [
  {
    initials: "PR",
    name: "Payroll",
    body: "Generic capability class unless the current Integration Catalog supplies an approved vendor record.",
  },
  {
    initials: "ID",
    name: "Identity provider",
    body: "Approved identity/access class handled at the Identity & Single Sign-On boundary.",
  },
  {
    initials: "DOC",
    name: "Document management",
    body: "Generic capability class for storage/template systems outside Zoiko Docs Pro.",
  },
  {
    initials: "ERP",
    name: "Finance / ERP",
    body: "Generic capability class; no specific vendor or protocol assumed.",
  },
];

function ExternalCard({ initials, name, body }: (typeof EXTERNAL)[number]) {
  return (
    <div className="h-full rounded-[10px] border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 flex-none items-center justify-center rounded-lg border border-dashed border-slate-300 text-[10px] font-extrabold text-slate-400">
          {initials}
        </span>
        <p className="text-sm font-bold text-sky-950">{name}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{body}</p>
    </div>
  );
}

export function EcosystemSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Zoiko HR is one participant in your stack, not the center of it."
          className="max-w-[700px]"
        >
          Zoiko ecosystem products and external systems are treated as peers,
          subject to the same approved flow contracts.
        </SectionHeading>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm font-bold text-sky-950">
            Zoiko ecosystem — optional relationship paths
          </p>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ZOIKO.map((product, i) => (
            <Reveal key={product.name} delay={Math.min(0.06 + i * 0.04, 0.28)}>
              <div className="flex h-full flex-col gap-2 rounded-[10px] border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <ProductBadge
                    initials={product.initials}
                    className={product.badge}
                  />
                  <p className="text-sm font-bold text-sky-950">
                    {product.name}
                  </p>
                </div>
                <ClaimAndBoundary
                  claimLabel="Relationship"
                  claim={product.relationship}
                  boundaryLabel="Guardrail"
                  boundary={product.guardrail}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <p className="mt-10 text-sm font-bold text-sky-950">
            External systems — generic capability classes
          </p>
        </Reveal>

        {/* The photo sits between the two external-card columns on desktop and
            drops below them once the grid collapses. */}
        <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.18}>
            <ExternalCard {...EXTERNAL[0]} />
          </Reveal>

          <Reveal
            delay={0.22}
            className="order-last h-full sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <PlaceholderImage
              src="/images/controlled-interoperability/ecosystem.webp"
              alt="Colleagues reviewing printed material at a table"
              label="External systems"
              className="aspect-video w-full rounded-[10px] bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.26}>
            <ExternalCard {...EXTERNAL[1]} />
          </Reveal>

          <Reveal delay={0.3}>
            <ExternalCard {...EXTERNAL[2]} />
          </Reveal>

          <Reveal delay={0.34}>
            <ExternalCard {...EXTERNAL[3]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
