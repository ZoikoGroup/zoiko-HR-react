import { Container, Reveal } from "@/components/ui";

const ITEMS = [
  {
    title: "Access changes",
    description:
      'Only source-approved role/permission history is shown; no generic "immutable audit trail" claim.',
  },
  {
    title: "Configuration changes",
    description:
      "Actor, object, action and time are shown only where the product source establishes those fields.",
  },
  {
    title: "Operational health",
    description:
      "Configuration and connection health may be shown; live incidents remain owned by Service Status.",
  },
  {
    title: "Review cadence",
    description:
      "No automated review reminder or retention period is promised unless source-approved.",
  },
];

export function AuditHealthSection() {
  return (
    <section id="audit-health" className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Audit, history &amp; operational health.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Only user-visible, source-approved events. Live availability is
            never cached here — it belongs to Service Status.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
