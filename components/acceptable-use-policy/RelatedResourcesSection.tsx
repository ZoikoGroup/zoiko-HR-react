import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const LEFT_CARDS = [
  {
    title: "Terms of Service",
    body: "Binding contractual terms and remedies.",
    href: "/terms-of-service",
  },
  {
    title: "Security Reporting",
    body: "Vulnerability reporting and testing authorization.",
    href: "/security-reporting",
  },
];

const RIGHT_CARDS = [
  {
    title: "AI Governance",
    body: "AI permissions, transparency and human review.",
    href: "/ai-governance",
  },
  {
    title: "Legal Notices",
    body: "Copyright, trademark and attribution.",
    href: "/legal-notices",
  },
];

function ResourceCard({
  card,
}: {
  card: { title: string; body: string; href: string };
}) {
  return (
    <Link
      href={card.href}
      className="block h-full rounded-[10px] border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-primary"
    >
      <p className="text-sm font-bold text-ink">{card.title}</p>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{card.body}</p>
    </Link>
  );
}

export function RelatedResourcesSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        <SectionHeading title="Related legal & trust resources.">
          Canonical links from the Legal Document Registry.
        </SectionHeading>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,578px)_minmax(0,1fr)]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {LEFT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <ResourceCard card={card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/related-resources.png"
              alt="Three colleagues reviewing documents together at a table"
              label="Reviewing documents together"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {RIGHT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <ResourceCard card={card} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
