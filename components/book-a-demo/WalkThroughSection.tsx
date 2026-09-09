import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const LEFT = [
  {
    title: "Core HR & Employee Records",
    body: "Profiles, employment information, documents and history in one structured record.",
    href: "/core-hr",
  },
  {
    title: "Global & Multi-Entity Administration",
    body: "Coordinate administration across entities, units and jurisdictions.",
    href: "/global-hr-management",
  },
];

const RIGHT = [
  {
    title: "Workflows & Approvals",
    body: "Routing, conditions, approvals and audit evidence for HR processes.",
    href: "/workflows-approvals",
  },
  {
    title: "Integrations & Security",
    body: "Connect ZoikoTime, Zoiko Payroll and identity providers with controlled access.",
    href: "/integration-security",
  },
];

function TopicCard({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-base font-bold text-sky-950">{title}</p>
      <p className="pb-2 text-sm leading-5 text-slate-500">{body}</p>
      <Link
        href={href}
        className="mt-auto text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        Learn more →
      </Link>
    </div>
  );
}

export function WalkThroughSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we'll walk through"
          title="Tell us where to focus — here's the ground we usually cover."
          className="max-w-[640px]"
        />

        {/*
          Three columns at lg: two stacked cards, the photo, two stacked cards.
          Below lg the photo drops to the end so the four topics read in order.
        */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {LEFT.map((topic, i) => (
              <Reveal key={topic.title} delay={0.06 + i * 0.05}>
                <TopicCard {...topic} />
              </Reveal>
            ))}
          </div>

          <div className="order-last md:col-span-2 lg:order-none lg:col-span-1">
            <Reveal delay={0.12} className="h-full">
              <PlaceholderImage
                src="/images/book-a-demo/walkthrough.webp"
                alt="Colleagues taking notes around a laptop during a working session"
                label="What we'll walk through"
                className="aspect-video w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {RIGHT.map((topic, i) => (
              <Reveal key={topic.title} delay={0.06 + i * 0.05}>
                <TopicCard {...topic} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
