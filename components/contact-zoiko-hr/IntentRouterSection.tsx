import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, RouteRow, type RouteTone } from "./shared";

const ROUTES: {
  tone: RouteTone;
  label: string;
  description: string;
  linkLabel: string;
  href: string;
}[] = [
  {
    tone: "sales",
    label: "Sales",
    description:
      "Talk with Zoiko HR about product fit, pricing, rollout, or procurement.",
    linkLabel: "Contact Sales",
    href: "/contact-sales",
  },
  {
    tone: "support",
    label: "Current customer help",
    description:
      "Get help with an existing account, implementation, access, or product issue.",
    linkLabel: "Get support",
    href: "/contact-support",
  },
  {
    tone: "partner",
    label: "Partner",
    description:
      "Explore a business, services, integration, referral, or ecosystem relationship.",
    linkLabel: "Partner With Us",
    href: "/partners",
  },
];

export function IntentRouterSection() {
  return (
    <section id="intent-router" className="scroll-mt-24 bg-gray-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="02 / Contact Intent Router"
          title="What brings you here?"
        >
          Select the option that best matches your reason. Specialized paths
          connect you directly to the right team.
        </SectionHeading>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-r-lg border border-l-2 border-primary bg-white px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-700">
              <span className="font-semibold">
                Contact Us routes inquiries correctly.
              </span>{" "}
              Sales, customer help, partnerships, media, careers,
              privacy/security, and general inquiries are handled separately —
              each by its appropriate owner.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-col gap-2">
          {ROUTES.map((route, i) => (
            <Reveal key={route.label} delay={0.1 + i * 0.06}>
              <RouteRow {...route} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <PlaceholderImage
            src="/images/contact-zoiko-hr/intent-router.png"
            alt="A presenter showing a tablet to colleagues around a table"
            label="Routing your inquiry"
            className="mt-6 aspect-[16/9] w-full rounded-[10px] border border-slate-200 bg-white sm:aspect-[21/9] lg:aspect-[1217/256]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
