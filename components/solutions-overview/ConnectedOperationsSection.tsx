import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ConnectedOperationsSection() {
  return (
    <section className="border-t border-white/10 bg-[#102A43] py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Connected Operations
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Connect approved HR context with time and payroll
            workflows—without hiding authority boundaries.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 max-w-3xl text-white/70">
            Authorized coordination across Zoiko HR, ZoikoTime, and Zoiko
            Payroll. Authoritative sources, approvals, timing, exceptions,
            and reconciliation remain explicit.
          </p>
        </Reveal>

        <Reveal delay={0.18} y={36}>
          <PlaceholderImage
            src="/images/solutions-overview/connected-operations.png"
            alt="A team reviewing a workflow diagram on a large screen"
            label="Connected HR, time, and payroll"
            fit="contain"
            className="mt-10 w-full rounded-xl border border-white/10 shadow-2xl shadow-black/40"
          />
        </Reveal>
      </Container>
    </section>
  );
}
