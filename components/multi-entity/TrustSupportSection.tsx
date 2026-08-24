import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const EVALUATE_LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Implementation Guide", href: "/implementation-guide" },
  { label: "Contact Sales", href: "/contact-sales" },
];

export function TrustSupportSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Trust &amp; Support
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold text-sky-950">
            Evaluate and operate, without a forced sales funnel.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Support, docs and status are never replaced by Book a Demo.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
                Evaluate
              </p>
              <ul className="mt-3 space-y-2">
                {EVALUATE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-sky-950 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/trust-support.png"
              alt="Two people reviewing documents together on a sofa"
              label="Evaluate and operate"
              className="h-52 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
