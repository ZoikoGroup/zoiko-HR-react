import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const REGISTRY_TASKS = [
  { label: "View Current Subprocessors", href: "#current-registry" },
  { label: "Review Recent Changes", href: "#change-history" },
  { label: "Print/Share current snapshot", href: "#change-history" },
  { label: "How Change Notices Work", href: "#change-notices" },
];

const EXISTING_CUSTOMERS = [
  { label: "Help Center", href: "/help-center" },
  { label: "Documentation", href: "/documentation" },
  { label: "Product Updates", href: "/product-updates" },
  { label: "Contact Support", href: "/contact-support" },
  { label: "Service Status", href: "/service-status" },
];

function LinkCard({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="h-full rounded-xl border border-slate-200 px-6 py-6">
      <p className="text-[11px] font-medium uppercase tracking-wide text-primary">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-700 transition-colors hover:text-primary"
            >
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NextStepsSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="15 / Next Steps — Legal, Trust, Support & Commercial"
          title="Registry tasks first. Commercial routes last."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <LinkCard title="Registry tasks" links={REGISTRY_TASKS} />
          </Reveal>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/subprocessors/next-steps.png"
              alt="A team presenting results to colleagues in a boardroom"
              label="Next steps"
              className="h-full min-h-52 w-full rounded-xl border border-slate-200 bg-gray-50"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <LinkCard title="Existing customers" links={EXISTING_CUSTOMERS} />
          </Reveal>
        </div>

        <hr className="mt-10 border-slate-200" />

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-primary hover:text-primary"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-primary hover:text-primary"
              >
                Request Pricing
              </Link>
            </div>
            <p className="text-xs leading-5 text-slate-400">
              Commercial routes appear after registry and legal tasks. No
              countdown, scarcity or preselected consent.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
