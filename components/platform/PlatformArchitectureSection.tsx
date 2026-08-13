import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_DESTINATIONS = [
  {
    category: "Lifecycle",
    label: "Onboarding & Lifecycle",
    description: "Onboarding, changes, transitions, and separation administration.",
    href: "/platform/onboarding-lifecycle",
    categoryColor: "text-primary",
  },
];

const RIGHT_DESTINATIONS = [
  {
    category: "Records",
    label: "Employee Records",
    description: "Structured employee and employment information.",
    href: "/platform/employee-records",
    categoryColor: "text-emerald-400",
  },
  {
    category: "Commercial",
    label: "Pricing",
    description: "Packages, pricing method, and commercial route.",
    href: "/pricing",
    categoryColor: "text-amber-400",
  },
];

export function PlatformArchitectureSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Platform architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One connected platform, seven approved destinations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Core HR structures information; lifecycle and workflows
              coordinate action; global administration applies organization
              and location context; integrations connect approved systems;
              pricing supports commercial evaluation.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Current page
                </span>
                <p className="mt-2 font-semibold">Platform Overview</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Category, operating model, principal capabilities, trust,
                  implementation, and evaluation pathways.
                </p>
              </div>
            </Reveal>
            {LEFT_DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.label} delay={0.1 + i * 0.06}>
                <a
                  href={dest.href}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]"
                >
                  <span className={`text-xs font-semibold uppercase tracking-wide ${dest.categoryColor}`}>
                    {dest.category}
                  </span>
                  <p className="mt-2 font-semibold">{dest.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {dest.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/platform/architecture-tablet.png"
              alt="Hand holding a tablet displaying a holographic data network"
              label="One connected platform"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.label} delay={0.16 + i * 0.06}>
                <a
                  href={dest.href}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.08]"
                >
                  <span className={`text-xs font-semibold uppercase tracking-wide ${dest.categoryColor}`}>
                    {dest.category}
                  </span>
                  <p className="mt-2 font-semibold">{dest.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {dest.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
