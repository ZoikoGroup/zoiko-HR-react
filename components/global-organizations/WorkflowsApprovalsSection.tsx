import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WorkflowsApprovalsSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Workflows, Approvals and Exceptions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Distributed operational work with visible ownership and evidence.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            No hidden AI confidence or recommendation is used as decision
            authority. High-impact items cannot be bulk-approved.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={36}>
          <PlaceholderImage
            src="/images/global-organizations/workflows.png"
            alt="Colleagues discussing approvals in front of a planning board"
            label="Visible ownership and evidence"
            className="mt-6 h-80 w-full rounded-xl border border-black/10 bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
