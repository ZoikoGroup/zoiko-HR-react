import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CustomerEvidenceSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 18 — Customer evidence
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              See how organizations structure people operations with Zoiko
              HR.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/global-hr/customer-evidence.png"
            alt="HR administrator discussing results with colleagues"
            label="Customer evidence"
            fit="contain"
            className="mx-auto mt-10 w-full max-w-3xl rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
