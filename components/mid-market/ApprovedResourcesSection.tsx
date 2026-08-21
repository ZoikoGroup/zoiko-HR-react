import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RESOURCES = [
  {
    eyebrow: "Product Tour",
    title: "Self-guided, no-signup evaluation",
    linkLabel: "Take the tour",
    href: "/resources/product-tour",
  },
  {
    eyebrow: "Resources",
    title: "HR guides and glossary",
    linkLabel: "Browse resources",
    href: "/resources",
  },
];

export function ApprovedResourcesSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Approved Proof &amp; Resources
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-sky-950">
            Evaluate with verifiable resources.
          </h2>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-6">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.href} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    {resource.eyebrow}
                  </p>
                  <p className="mt-1 font-bold text-sky-950">
                    {resource.title}
                  </p>
                  <Link
                    href={resource.href}
                    className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    {resource.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/resources.png"
              alt="Colleagues reviewing resources together on a laptop"
              label="Verifiable resources"
              className="h-full min-h-64 w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
