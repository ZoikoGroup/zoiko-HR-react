import { Container, Reveal, Button } from "@/components/ui";

const OPERATIONS = [
  { title: "Create record", description: "Check for existing person, capture minimum approved fields, assign owner, validate, review, create." },
  { title: "Bulk update", description: "Select population, choose permitted fields, preview sample and counts, approve, execute, reconcile." },
  { title: "Import", description: "Template mapping, required fields, validation, error file, idempotency key, approval, result." },
  { title: "Duplicate / merge", description: "Matching evidence, source precedence, surviving IDs, field decisions, rollback/review." },
  { title: "Archive / end relationship", description: "Reason, effective date, downstream impacts, access changes, retention, confirmation." },
];

export function BulkOperationsSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Bulk and destructive operations, previewable and
              reversible.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Create, import, bulk update, merge, and archive actions run
              through validation, preview, approval, and audit — never
              silent mass overwrite.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {OPERATIONS.map((op, i) => (
            <Reveal key={op.title} delay={0.08 + i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-semibold text-ink">{op.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {op.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-6 max-w-3xl text-xs text-ink/40">
            Prohibited: silent mass overwrite, bulk export by default,
            merge without evidence, deleting records solely because
            employment ended, or using name/email alone as unique
            identity.
          </p>
        </Reveal>

        <Reveal delay={0.46}>
          <Button href="/book-a-demo" className="mt-6">
            Book a Demo
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
