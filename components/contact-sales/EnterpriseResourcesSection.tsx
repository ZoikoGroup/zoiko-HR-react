import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const RESOURCES = [
  {
    bar: "bg-violet-400",
    link: "text-violet-400",
    title: "DPA / Subprocessors",
    description:
      "Direct links to approved data processing addendum and subprocessor documentation.",
    linkLabel: "Legal resources →",
    href: "/data-processing-addendum",
  },
  {
    bar: "bg-yellow-500",
    link: "text-yellow-500",
    title: "Integrations",
    description:
      "Review the approved integrations catalog for current supported-system truth. Sales can discuss categories.",
    linkLabel: "Integration catalog →",
    href: "/integrations",
  },
  {
    bar: "bg-orange-400",
    link: "text-orange-400",
    title: "Global / multi-entity",
    description:
      "Route to Global HR content. No country coverage or compliance claims are inferred from topic selection.",
    linkLabel: "Global HR →",
    href: "/global-hr-management",
  },
  {
    bar: "bg-primary",
    link: "text-primary",
    title: "Commercial discussion",
    description:
      "Sales can route commercial and pricing questions. No prices, discounts, terms or minimums are published here.",
    linkLabel: "Contact Sales ↑",
    href: "#sales-inquiry",
  },
];

export function EnterpriseResourcesSection() {
  return (
    <section className="bg-slate-950 py-16">
      <Container>
        <SectionHeading
          eyebrow="Enterprise evaluation · E7"
          title="Enterprise, security and procurement resources"
          tone="dark"
          className="max-w-[840px]"
        >
          These authoritative resources are available without submitting a sales
          inquiry. Trust, legal, and implementation sources are not lead-gated.
        </SectionHeading>

        {/* Figma gives the image and both card columns the same 384px width. At
            sm the image goes full width above a 2x2 card block. */}
        <div className="mt-10 grid items-stretch gap-0 overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-3">
          {/* Spans both card rows so the four cards sit as a 2x2 block beside
              it. Absolutely positioned inside so the photo's intrinsic height
              never drives the rows — the cards set the height. */}
          <div className="relative min-h-56 sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0">
            <Reveal className="absolute inset-0">
              <PlaceholderImage
                src="/images/contact-sales/enterprise-resources.png"
                alt="A specialist in conversation at a laptop"
                label="Enterprise evaluation"
                className="h-full w-full bg-slate-900"
              />
            </Reveal>
          </div>

          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={0.06 + i * 0.06}>
              <div
                className={`flex h-full flex-col border-t border-slate-800 bg-slate-900 p-6 lg:border-l ${
                  i > 1 ? "lg:border-t" : "lg:border-t-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`h-5 w-[3px] flex-none rounded-full ${resource.bar}`}
                  />
                  <h3 className="text-sm font-semibold leading-5 text-white">
                    {resource.title}
                  </h3>
                </div>
                <p className="pb-3.5 pt-2.5 text-xs leading-5 text-slate-400">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className={`mt-auto text-xs font-semibold leading-4 ${resource.link} hover:underline`}
                >
                  {resource.linkLabel}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
