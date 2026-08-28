import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PATHS = [
  {
    eyebrow: "Learn how something works",
    title: "Documentation",
    description: "Conceptual and task guidance where Documentation owns the truth.",
    href: "/resources",
  },
  {
    eyebrow: "See what changed",
    title: "Product Updates",
    description:
      "Current release authority — Help Center routes but does not copy update detail.",
    href: "/resources",
  },
  {
    eyebrow: "Build or troubleshoot an integration",
    title: "Developer Documentation",
    description: "API, authentication, webhook, SDK and integration reference.",
    href: "/integrations",
  },
  {
    eyebrow: "I still need help",
    title: "Contact Support",
    description: "Human escalation after relevant context, or immediately when needed.",
    href: "#contact-support",
  },
];

function PathCard({ path }: { path: (typeof PATHS)[number] }) {
  return (
    <Link
      href={path.href}
      className="block h-full rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-teal-600">
        {path.eyebrow}
      </span>
      <h3 className="mt-1.5 font-bold text-ink">{path.title} →</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
        {path.description}
      </p>
    </Link>
  );
}

export function HelpPathsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Find the right help path.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Each destination is a distinct authority. The Help Center routes you
            there rather than duplicating its content.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PATHS.slice(0, 2).map((path, i) => (
              <Reveal key={path.title} delay={i * 0.06}>
                <PathCard path={path} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/help-center/help-paths.png"
              alt="Support specialists working at monitors in an operations centre"
              label="Zoiko HR support operations"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PATHS.slice(2).map((path, i) => (
              <Reveal key={path.title} delay={0.18 + i * 0.06}>
                <PathCard path={path} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
