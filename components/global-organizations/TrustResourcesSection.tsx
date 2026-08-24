import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TRUST_LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "DPA", href: "/dpa" },
  { label: "Subprocessors", href: "/subprocessors" },
  { label: "Security Reporting", href: "/security-reporting" },
  { label: "Service Status", href: "/service-status" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/help-center" },
  { label: "Documentation", href: "/documentation" },
  { label: "Administrator Guide", href: "/administrator-guide" },
  { label: "Developer Documentation", href: "/developer-documentation" },
  { label: "Product Updates", href: "/product-updates" },
  { label: "Contact Support", href: "/contact-support" },
];

export function TrustResourcesSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Trust, Procurement, Resources and Support
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Validate, evaluate, and get help — without a sales gate.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.08}>
            <LinkCard title="Trust & Security" links={TRUST_LINKS} />
          </Reveal>

          <Reveal delay={0.14} y={30} className="h-full">
            <PlaceholderImage
              src="/images/global-organizations/trust-resources.png"
              alt="A presenter walking colleagues through a report in a meeting room"
              label="Validate and evaluate"
              className="h-full min-h-64 w-full rounded-xl border border-black/10 bg-white"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <LinkCard title="Existing Customer Support" links={SUPPORT_LINKS} />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-3.5">
            <p className="text-xs font-semibold text-red-700">
              Professional boundary
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Zoiko HR provides software for workforce administration. It does
              not provide legal, tax, payroll, employment, immigration,
              compliance, or other professional advice and does not guarantee
              compliance with any law. Customers remain responsible for
              policies, employment decisions, configurations, professional
              review, and compliance obligations.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function LinkCard({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="h-full rounded-xl border border-black/10 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
        {title}
      </p>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.href} className="border-b border-black/10">
            <Link
              href={link.href}
              className="group flex items-center gap-1.5 py-2.5 text-sm text-primary hover:text-primary-dark"
            >
              {link.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
