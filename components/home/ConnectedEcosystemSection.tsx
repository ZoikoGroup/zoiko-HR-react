import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_PRODUCTS = [
  {
    name: "ZoikoTime",
    description:
      "Approved leave and attendance data flows to and from time tracking.",
  },
  {
    name: "Zoiko Comply",
    description:
      "Shares compliance-relevant workforce evidence when enabled.",
  },
];

const RIGHT_PRODUCTS = [
  {
    name: "Zoiko Docs Pro",
    description: "Document storage and distribution for HR records.",
  },
  {
    name: "ZoikoID",
    description: "Unified identity and access across connected products.",
  },
];

function ProductCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      <p className="font-semibold text-ink">{name}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        {description}
      </p>
    </div>
  );
}

export function ConnectedEcosystemSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Use Zoiko HR independently. Connect more when your
              organization is ready.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR has its own subscription, onboarding, support and
              commercial journey. Authorized data and workflows can connect
              with other Zoiko products when enabled.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4">
            {LEFT_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <ProductCard {...p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} y={30}>
            <PlaceholderImage
              src="/images/home/ecosystem-team.png"
              alt="Colleagues celebrating with a high-five"
              label="Connected teams"
              className="h-full min-h-[16rem] w-full rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="grid gap-4">
            {RIGHT_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <ProductCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-primary-light p-6 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-ink/80">
              Need a connected business suite?{" "}
              <span className="font-semibold text-ink">
                Zoiko One brings unified identity, workflows and reporting
                across Zoiko products.
              </span>
            </p>
            <Link
              href="/zoiko-one"
              className="group inline-flex flex-none items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Discover Zoiko One
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/integrations"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore integrations
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
