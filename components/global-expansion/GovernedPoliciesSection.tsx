import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STATUS_STYLES: Record<string, string> = {
  Active: "bg-emerald-400/15 text-emerald-400",
  Scheduled: "bg-amber-400/15 text-amber-400",
};

const POLICIES = [
  { tag: "Entity variant · Meridian DE GmbH", title: "Germany Leave Policy", owner: "Sophie Bauer", version: "v1.2", status: "Active" },
  { tag: "Regional variant · Singapore", title: "APAC Performance Review Cycle", owner: "Regional HR Lead", version: "v1.0", status: "Active" },
  { tag: "Location variant · Singapore office", title: "Singapore Public Holiday Calendar", owner: "Local HR", version: "v2026.1", status: "Scheduled" },
  { tag: "Entity variant · Meridian DE GmbH", title: "DE Probation Period Workflow", owner: "Sophie Bauer", version: "v1.1", status: "Active" },
];

export function GovernedPoliciesSection() {
  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Governed policies
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Standardize the operating model. Govern the exceptions.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.3fr] lg:items-stretch">
          <Reveal delay={0.1} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/governed-policies.webp"
              alt="An HR leader presenting to a team seated around a table"
              label="Standardized model, governed exceptions"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {POLICIES.map((policy, i) => (
              <Reveal key={policy.title} delay={0.16 + i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    {policy.tag}
                  </span>
                  <p className="mt-3 font-semibold">{policy.title}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-white/40">
                    <span>Owner {policy.owner}</span>
                    <span>Version {policy.version}</span>
                  </div>
                  <span className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[policy.status]}`}>
                    <span className="size-1.5 rounded-full bg-current" />
                    {policy.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
