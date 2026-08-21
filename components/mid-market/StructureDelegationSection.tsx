import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function StructureDelegationSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Structure, policy ownership and delegation stay separate.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-slate-600">
            Reporting relationships and corporate hierarchy are not
            permission inheritance.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Organization
              </p>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                Business unit: Finance Operations
                <br />
                Location: London, UK
                <br />
                Reports to: VP Finance
                <br />
                Status: Active · Effective Jan 3, 2024
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/delegation.png"
              alt="Colleagues collaborating around laptops"
              label="Structure and delegation"
              className="h-full min-h-40 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <div className="h-full rounded-xl border border-primary bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                Delegation Record
              </p>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                Delegator: R. Chen
                <br />
                Delegate: M. Osei · Scope: Approve leave requests, Finance
                Ops
                <br />
                Effective Aug 1 – Sep 15, 2026 · Status: Active · Revocable
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-8 text-xs text-slate-500">
            Expired or revoked delegation is denied by current
            authorization, even if a browser session remains active.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
