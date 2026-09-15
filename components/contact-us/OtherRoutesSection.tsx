import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const ROUTES = [
  {
    title: "Contact Sales",
    description: "Demos, pricing, or commercial evaluation.",
    href: "/contact-sales",
  },
  {
    title: "Partner With Us",
    description: "Integration, implementation, or channel inquiries.",
    href: "/partner-with-us",
  },
  {
    title: "Careers",
    description: "Roles and opportunities at Zoiko HR.",
    href: "/careers",
  },
  {
    title: "Security Reporting",
    description: "Report a vulnerability or security incident.",
    href: "/security-reporting",
  },
];

export function OtherRoutesSection() {
  return (
    <section className="border-t border-slate-800 bg-sky-950 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Other routes" title="Find the right path" tone="dark" />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {ROUTES.map((route, i) => (
              <Reveal key={route.title} delay={Math.min(i * 0.06, 0.3)}>
                <Link
                  href={route.href}
                  className="flex items-center gap-4 border-b border-slate-800 p-4 transition-colors hover:bg-white/5"
                >
                  <span
                    aria-hidden
                    className="size-1.5 flex-none rounded-full bg-primary"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-5 text-white">
                      {route.title}
                    </span>
                    <span className="block pt-0.5 text-xs leading-4 text-slate-600">
                      {route.description}
                    </span>
                  </span>
                  <span aria-hidden className="flex-none text-sm leading-5 text-slate-700">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/contact-us/other-routes.png"
              alt="Colleagues in discussion around a meeting table"
              label="Find the right path"
              className="aspect-[576/288] w-full rounded-xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
