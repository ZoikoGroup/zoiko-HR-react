import { Container, Reveal } from "@/components/ui";

const TYPES = [
  {
    title: "Independent product",
    dot: "bg-emerald-500",
    dotBg: "bg-emerald-50",
    description:
      "Each product operates with its own identity, billing, data handling, and contracts. Using one Zoiko Group product does not grant access to another.",
  },
  {
    title: "Approved connection",
    dot: "bg-primary",
    dotBg: "bg-primary-light",
    description:
      "Some entities have an explicitly published integration or connection. These connections are formally documented, scoped, and maintained.",
  },
  {
    title: "Shared group service",
    dot: "bg-violet-500",
    dotBg: "bg-violet-50",
    description:
      "Certain infrastructure or documentation capabilities are shared across the group under a defined service relationship. These are not independently sold products.",
  },
];

export function RelationshipTypesSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How portfolio entities relate — and what that does not mean.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {TYPES.map((type, i) => (
            <Reveal key={type.title} delay={0.08 + i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${type.dotBg}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${type.dot}`} />
                </span>
                <p className="mt-3 font-semibold text-ink">{type.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {type.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.34}>
          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <p className="text-sm leading-relaxed text-ink/60">
              Availability, data flow, identity, billing, and commercial
              entitlement depend on the owning product or service. No
              visual connection on this page implies access rights.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
