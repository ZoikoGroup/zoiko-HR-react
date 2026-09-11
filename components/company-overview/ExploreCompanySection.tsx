import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  { title: "About Zoiko HR", recommended: true, description: "Mission, scope and standalone commercial model.", linkLabel: "Explore About Zoiko HR", href: "/about", position: "lg:col-start-1 lg:row-start-1" },
  { title: "About Zoiko Group", recommended: false, description: "The parent group and product portfolio.", linkLabel: "Explore About Zoiko Group", href: "/company/about-zoiko-group", position: "lg:col-start-2 lg:row-start-1" },
  { title: "Leadership", recommended: false, description: "Approved executive and governance leadership.", linkLabel: "Explore Leadership", href: "/leadership", position: "lg:col-start-3 lg:row-start-1" },
  { title: "Careers", recommended: false, description: "Roles, culture and recruitment process.", linkLabel: "Explore Careers", href: "/company/careers", position: "lg:col-start-1 lg:row-start-2" },
  { title: "Contact", recommended: false, description: "General, media, partnership and privacy inquiries.", linkLabel: "Explore Contact", href: "/contact-zoiko-hr", position: "lg:col-start-2 lg:row-start-2" },
];

export function ExploreCompanySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Company navigation
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Explore the company.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Seven destinations covering every dimension of the company
              — each with a clear purpose and a single-sentence
              descriptor.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:auto-rows-fr">
          {DESTINATIONS.map((dest, i) => {
            return (
              <Reveal
                key={dest.title}
                delay={0.06 + i * 0.06}
                className={dest.position}
              >
                <a
                  href={dest.href}
                  className="block h-full rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-ink">{dest.title}</p>
                    {dest.recommended && (
                      <span className="rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-semibold text-primary">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{dest.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {dest.linkLabel} →
                  </span>
                </a>
              </Reveal>
            );
          })}

          <Reveal delay={0.36} y={30} className="lg:col-start-3 lg:row-start-1 lg:row-span-2 flex">
            <PlaceholderImage
              src="/images/company-overview/explore-company.webp"
              alt="A leader presenting at a whiteboard to a seated team"
              label="Every dimension of the company"
              className="h-full min-h-[220px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
