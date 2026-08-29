import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const DESTINATIONS = [
  {
    title: "Administrator Guide",
    description:
      "Primary authority for admin configuration and governance instructions.",
    linkLabel: "Open Administrator Guide",
    href: "/resources",
  },
  {
    title: "Implementation Guide",
    description: "Approved setup and migration guidance for a controlled rollout.",
    linkLabel: "Open Implementation Guide",
    href: "/Implementation-guide",
  },
  {
    title: "Developer Documentation",
    description:
      "Owns API, authentication, webhook and SDK reference truth.",
    linkLabel: "Open Developer Documentation",
    href: "/integrations",
  },
];

export function SpecialistHelpSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Admin, implementation &amp; developer help.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Specialist authority stays with its owning destination — Help Center
            provides the entry point.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {DESTINATIONS.map((destination, i) => (
            <Reveal key={destination.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <h3 className="font-bold text-ink">{destination.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {destination.description}
                </p>
                <Link
                  href={destination.href}
                  className="mt-auto pt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {destination.linkLabel} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
