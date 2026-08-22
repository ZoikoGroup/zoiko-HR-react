import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PolicyDocumentsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Policy and Document Operations
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Controlled versions, scope, assignment and review — not legal
            advice.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            Policy administration software. Delivery or acknowledgment does not
            establish legal sufficiency, enforceability, or compliance.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-white/10 bg-white/5 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-400">
              Professional and legal review status is explicit in the policy
              catalog. Owner, reviewer, and effective date are required fields.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <PlaceholderImage
            src="/images/hr-teams/policy-documents.png"
            alt="A person working at a laptop in a meeting room"
            label="Policy and document operations"
            className="mt-8 h-72 w-full rounded-xl border border-white/10 bg-slate-900"
          />
        </Reveal>
      </Container>
    </section>
  );
}
