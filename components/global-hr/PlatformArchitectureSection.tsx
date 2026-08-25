import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_DESTINATIONS = [
  {
    label: "Onboarding & Lifecycle",
    description:
      "Onboarding, changes, transitions, and separation administration.",
    href: "/onboarding-lifecycle",
  },
];

const RIGHT_DESTINATIONS = [
  {
    label: "Employee Records",
    description: "Structured employee and employment information.",
    href: "/employee-records",
  },
  {
    label: "Pricing",
    description: "Packages, pricing method, and commercial route.",
    href: "/pricing",
  },
];

export function PlatformArchitectureSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Platform architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One governed platform. Eight approved destinations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Core HR structures information; lifecycle and workflows
              coordinate action; global administration applies organization
              and location context; integrations connect approved systems;
              pricing supports commercial evaluation.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="rounded-2xl bg-ink p-6 text-white shadow-xl shadow-ink/20">
                <span className="inline-flex items-center rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  Current page
                </span>
                <p className="mt-3 font-semibold">Global HR Management</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Coordinate people operations across entities and locations.
                </p>
                <p className="mt-3 text-xs font-semibold text-primary">
                  You are here
                </p>
              </div>
            </Reveal>
            {LEFT_DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.label} delay={0.1 + i * 0.06}>
                <a
                  href={dest.href}
                  className="group block rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <p className="font-semibold text-ink">{dest.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {dest.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {dest.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/global-hr/architecture-team.png"
              alt="Team applauding together in a meeting"
              label="One governed platform"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.label} delay={0.16 + i * 0.06}>
                <a
                  href={dest.href}
                  className="group block rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <p className="font-semibold text-ink">{dest.label}</p>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink/60">
                    {dest.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {dest.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
