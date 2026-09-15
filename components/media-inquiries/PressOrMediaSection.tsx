import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const ROUTES: {
  bar: string;
  link: string;
  label: string;
  description: string;
  linkLabel: string;
  href: string;
  highlight?: boolean;
}[] = [
  {
    bar: "bg-violet-400",
    link: "text-violet-400",
    label: "Evaluate Zoiko HR / pricing / procurement",
    description: "Talk with our sales team about product fit, pricing, and demos.",
    linkLabel: "Contact Sales →",
    href: "/contact-sales",
  },
  {
    bar: "bg-green-500",
    link: "text-green-500",
    label: "Existing customer or account help",
    description: "Get platform, account, billing, or product support.",
    linkLabel: "Customer Support →",
    href: "/contact-support",
  },
  {
    bar: "bg-primary",
    link: "text-primary",
    label: "Discuss a partnership",
    description:
      "Explore integration, implementation, advisory, or referral relationships.",
    linkLabel: "Partner With Us →",
    href: "/partner-with-us",
  },
  {
    bar: "bg-yellow-500",
    link: "text-yellow-500",
    label: "Career or employment inquiry",
    description: "Explore roles and opportunities on the Careers page.",
    linkLabel: "Careers →",
    href: "/careers",
  },
  {
    bar: "bg-orange-400",
    link: "text-orange-400",
    label: "Privacy request or data rights",
    description:
      "Submit a personal data rights request or privacy question through the dedicated route.",
    linkLabel: "Privacy →",
    href: "/security-privacy",
  },
  {
    bar: "bg-red-400",
    link: "text-red-400",
    label: "Security report or vulnerability",
    description:
      "Report security issues through the dedicated Security Reporting route, not this form.",
    linkLabel: "Security Reporting →",
    href: "/security-reporting",
  },
  {
    bar: "bg-slate-500",
    link: "text-slate-500",
    label: "General company question",
    description: "Not a press or media matter? Use the general Contact Us path.",
    linkLabel: "Contact Us →",
    href: "/contact-zoiko-hr",
  },
  {
    bar: "bg-primary",
    link: "text-primary",
    label: "I am a journalist, editor, producer, analyst, or independent media",
    description:
      "Continue below to select a request type and submit a media inquiry.",
    linkLabel: "Continue ↓",
    href: "#request-types",
    highlight: true,
  },
];

export function PressOrMediaSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Before you inquire · E7"
          title="Is this a press or media request?"
          className="max-w-[860px]"
        >
          Non-media intents have dedicated routes. Choose the right path before
          entering any press information — no data collected until you reach the
          form.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200">
            {ROUTES.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className={`flex items-stretch border-b border-slate-100 last:border-b-0 transition-colors ${
                  route.highlight ? "bg-blue-50" : "hover:bg-slate-50"
                }`}
              >
                {/* A short centred bar, not a full-height spine — the design
                    sizes it to the label's line box, so it stays the same
                    height even on rows whose description wraps to two lines. */}
                <span
                  aria-hidden
                  className={`h-5 w-1 flex-none self-center ${route.bar}`}
                />
                {/* The description column is a fixed 530px and the link sizes to
                    its own text, so both dividers shift with the link's width —
                    which is what makes them ragged row to row in the design.
                    The label flexes to absorb the difference. */}
                <span className="flex min-w-0 flex-1 flex-col gap-1 px-5 py-3.5 lg:flex-row lg:items-stretch lg:gap-0 lg:px-0 lg:py-0">
                  <span
                    className={`text-sm font-semibold leading-5 lg:flex-1 lg:px-5 lg:py-3.5 ${
                      route.highlight ? "text-primary" : "text-slate-900"
                    }`}
                  >
                    {route.label}
                  </span>
                  <span
                    className={`text-xs leading-5 text-slate-500 lg:w-[530px] lg:flex-none lg:border-l lg:px-5 lg:py-3.5 ${
                      route.highlight ? "lg:border-violet-200" : "lg:border-slate-100"
                    }`}
                  >
                    {route.description}
                  </span>
                  <span
                    className={`whitespace-nowrap text-xs font-semibold leading-5 lg:flex-none lg:border-l lg:px-6 lg:py-3.5 ${route.link} ${
                      route.highlight ? "lg:border-violet-200" : "lg:border-slate-100"
                    }`}
                  >
                    {route.linkLabel}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
