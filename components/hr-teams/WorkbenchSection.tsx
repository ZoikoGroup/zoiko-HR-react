import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WorkbenchSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            HR Operations Workbench
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Prioritized HR work across records, workflows, policy, services and
            reporting.
          </h2>
          <p className="mt-2 max-w-[600px] leading-6 text-slate-400">
            No employee surveillance dashboard — operational work queues and
            governance metrics only.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/hr-teams/workbench.png"
            alt="An HR team celebrating around a laptop in an open office"
            label="HR operations workbench"
            className="mt-8 h-[420px] w-full rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-xs leading-4 text-slate-500">
            Illustrative sample data only. Authenticated workbench visibility is
            role- and scope-gated.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
