import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Non-partner intents are routed away before anyone enters partnership
 * information — only the last row continues into the inquiry flow.
 */
const INTENTS: {
  bar: string;
  link: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  primary?: boolean;
}[] = [
  {
    bar: "bg-violet-400",
    link: "text-violet-400",
    title: "Buying or evaluating Zoiko HR",
    description: "Talk with our sales team about pricing, features, and demos.",
    linkLabel: "Contact Sales →",
    href: "/contact-sales",
  },
  {
    bar: "bg-green-500",
    link: "text-green-500",
    title: "Finding a current Zoiko HR partner",
    description: "Explore current public partner relationships and capabilities.",
    linkLabel: "Explore partners →",
    href: "/partners",
  },
  {
    bar: "bg-primary",
    link: "text-primary",
    title: "Already a Zoiko HR partner",
    description: "Access partner resources or support without reapplying.",
    linkLabel: "Partner resources →",
    href: "/partners",
  },
  {
    bar: "bg-yellow-500",
    link: "text-yellow-500",
    title: "Need customer or product support",
    description: "Get platform, account, or billing help from the support team.",
    linkLabel: "Get support →",
    href: "/contact-support",
  },
  {
    bar: "bg-green-500",
    link: "text-primary",
    title: "Proposing a new partnership",
    description: "Continue to select a relationship area and submit an inquiry.",
    linkLabel: "Continue →",
    href: "#relationship-areas",
    primary: true,
  },
];

export function WhichDescribesYouSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Before you inquire"
          title="Which describes you best?"
          className="max-w-[840px]"
        >
          Non-partner intents have dedicated routes. Choose the right path
          before entering any partnership information.
        </SectionHeading>

        <div className="mt-10 flex flex-col gap-1.5">
          {INTENTS.map((intent, i) => (
            <Reveal key={intent.title} delay={Math.min(0.06 + i * 0.05, 0.3)}>
              <Link
                href={intent.href}
                className="flex items-stretch overflow-hidden rounded-[10px] border border-slate-200 transition-shadow hover:shadow-sm"
              >
                <span aria-hidden className={`w-1 flex-none ${intent.bar}`} />
                <div className="flex min-w-0 flex-1 flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {intent.title}
                    </p>
                    <p className="pt-0.5 text-xs leading-5 text-slate-500">
                      {intent.description}
                    </p>
                  </div>
                  {intent.primary ? (
                    <span className="inline-flex flex-none items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold leading-5 text-white">
                      {intent.linkLabel}
                    </span>
                  ) : (
                    <span
                      className={`flex-none whitespace-nowrap text-xs font-semibold leading-5 ${intent.link}`}
                    >
                      {intent.linkLabel}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
