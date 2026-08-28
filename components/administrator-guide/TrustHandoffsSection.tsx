import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const HANDOFFS = [
  {
    title: "Security & Privacy",
    description:
      "Owns security/privacy posture and evidence; this guide only explains where a control is configured.",
    linkLabel: "Open Security & Privacy",
    href: "/trust-center#overviews",
  },
  {
    title: "AI Governance",
    description: "Owns AI permission, transparency and prohibited-use detail.",
    linkLabel: "Open AI Governance",
    href: "/trust-center#overviews",
  },
  {
    title: "Security Reporting",
    description: "Owns responsible vulnerability-reporting intake.",
    linkLabel: "Open Security Reporting",
    href: "/trust-center#security-reporting",
  },
  {
    title: "Trust Center",
    description: "The hub for all Legal & Trust destinations above.",
    linkLabel: "Open Trust Center",
    href: "/trust-center",
  },
];

export function TrustHandoffsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Security, privacy &amp; trust administration handoffs.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            This guide may explain where an approved control is configured — the
            specialist authority owns the posture and evidence.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {HANDOFFS.map((handoff, i) => (
              <Reveal key={handoff.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold text-ink">
                    {handoff.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {handoff.description}
                  </p>
                  <Link
                    href={handoff.href}
                    className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    {handoff.linkLabel} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/administrator-guide/trust-handoffs.png"
              alt="Colleagues reviewing documents together at a desk"
              label="Trust administration handoffs"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
