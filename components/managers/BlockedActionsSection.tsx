import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function BlockedActionsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Blocked and Restricted Actions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Every blocked action explains the safe reason and provides a clear
            next step.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            No disabled-button-only experience. Restricted sensitive objects are
            excluded from delivery — not merely hidden in the browser. The block
            message never reveals inaccessible record existence beyond the safe
            reason category.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/managers/blocked-actions.png"
            alt="A manager working at a laptop in a quiet office"
            label="Blocked and restricted actions"
            className="mt-8 h-[420px] w-full rounded-xl bg-slate-950"
          />
        </Reveal>
      </Container>
    </section>
  );
}
