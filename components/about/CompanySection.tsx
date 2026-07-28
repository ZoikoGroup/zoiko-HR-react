import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COMPANY_LINKS = [
  { label: "Company Overview", href: "/company" },
  { label: "About Zoiko Group", href: "/company/about-zoiko-group" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Careers", href: "/company/careers" },
  { label: "Partners", href: "/company/partners" },
  { label: "Newsroom", href: "/company/newsroom" },
  { label: "Contact", href: "/contact-us" },
  { label: "Trust Center", href: "/trust-center" },
];

export function CompanySection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                The company behind the platform
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Built within Zoiko Group. Operated as an independent
                product.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Zoiko HR is a platform owned and operated by Zoiko Tech
                Inc., a Zoiko Group company, with its own commercial
                proposition, subscription, onboarding, documentation, and
                support.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/about/company-team.png"
              alt="Colleagues walking together with coffee"
              label="The Zoiko team"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
          <Reveal>
            <p className="font-serif text-sm italic text-white/50">
              Headquarters
            </p>
            <p className="mt-3 text-sm text-white/70">
              1401 21st Street, Suite R
              <br />
              Sacramento, CA 95811
              <br />
              USA
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-serif text-sm italic text-white/50">
              European Headquarters
            </p>
            <p className="mt-3 text-sm text-white/70">
              167–169 Great Portland Street, 5th Floor
              <br />
              London W1W 5PF
              <br />
              UK
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8">
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/60 underline decoration-white/20 underline-offset-4 transition-colors duration-150 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <Link
            href="/company/about-zoiko-group"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Learn About Zoiko Group
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
