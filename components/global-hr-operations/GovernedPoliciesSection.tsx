import { Container, Reveal, PlaceholderImage } from "@/components/ui";

type Status = "Active" | "Scheduled" | "Draft";

const STATUS_STYLES: Record<Status, string> = {
  Active: "bg-emerald-500/10 text-emerald-600",
  Scheduled: "bg-amber-500/10 text-amber-600",
  Draft: "bg-ink/[0.06] text-ink/40",
};

const STATUS_DOT: Record<Status, string> = {
  Active: "bg-emerald-500",
  Scheduled: "bg-amber-500",
  Draft: "bg-ink/30",
};

const POLICIES: {
  variant: string;
  title: string;
  owner: string;
  version: string;
  status: Status;
}[] = [
  {
    variant: "Entity variant · Meridian DE GmbH",
    title: "Germany Leave Policy",
    owner: "Sophie Bauer",
    version: "v1.2",
    status: "Active",
  },
  {
    variant: "Regional variant · Singapore",
    title: "APAC Performance Review Cycle",
    owner: "Regional HR Lead",
    version: "v1.0",
    status: "Active",
  },
  {
    variant: "Location variant · Singapore office",
    title: "Singapore Public Holiday Calendar",
    owner: "Local HR",
    version: "v2026.1",
    status: "Scheduled",
  },
  {
    variant: "Entity variant · Meridian DE GmbH",
    title: "DE Probation Period Workflow",
    owner: "Sophie Bauer",
    version: "v1.1",
    status: "Draft",
  },
];

export function GovernedPoliciesSection() {
  return (
    <section className="bg-[#040d18] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Governed Policies
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Standardize the operating model. Govern the exceptions.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[415fr_832fr]">
          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/global-hr-operations/governed-policies.png"
              alt="HR leaders reviewing governed policy documents in an office"
              label="Standardized, with governed exceptions"
              fit="cover"
              className="aspect-square w-full rounded-xl border border-white/10"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {POLICIES.map((policy, i) => (
              <Reveal key={policy.title} delay={0.16 + i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-primary/25 bg-primary/5 p-5">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded border border-primary/30 bg-primary/15 px-2 py-1 text-[11px] font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {policy.variant}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {policy.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/30">Owner</p>
                      <p className="mt-0.5 text-xs text-white/60">
                        {policy.owner}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/30">Version</p>
                      <p className="mt-0.5 font-mono text-xs text-white/60">
                        {policy.version}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 border-t border-white/[0.08] pt-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium ${STATUS_STYLES[policy.status]}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[policy.status]}`}
                      />
                      {policy.status}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
