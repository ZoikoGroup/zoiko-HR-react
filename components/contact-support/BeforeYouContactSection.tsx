import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const RESOURCES = [
  {
    icon: "🔍",
    title: "Search Help Center",
    destination: "Help Center",
    href: "/help-center",
  },
  {
    icon: "📄",
    title: "Browse Documentation",
    destination: "Documentation",
    href: "/documentation",
  },
  {
    icon: "🔴",
    title: "Check Service Status",
    destination: "Service Status",
    href: "/service-status",
  },
];

export function BeforeYouContactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Before you contact support.
          </h2>
          <p className="mt-1.5 max-w-xl leading-relaxed text-slate-500">
            These resources often resolve issues faster than a support request.
            They are shown as helpful suggestions — not a gate to a legitimate
            request.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={resource.href}
                className="group flex h-full items-start gap-3 rounded-2xl border border-black/10 px-5 py-4 transition-colors hover:border-primary/40"
              >
                <span aria-hidden className="flex-none text-xl leading-8">
                  {resource.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">
                    {resource.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-400">
                    {resource.destination}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="flex-none text-base text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-5 flex flex-col gap-2 rounded-xl border border-black/5 bg-slate-100 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-3">
            <span aria-hidden className="text-base leading-6">
              🔴
            </span>
            <p className="flex-1 text-sm leading-5 text-slate-700">
              For live availability and operational incidents, the authoritative
              destination is{" "}
              <Link
                href="/service-status"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Service Status →
              </Link>
            </p>
            <p className="text-xs leading-4 text-slate-400">
              Product Updates and Contact Support do not reflect live
              operational state.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <Link
            href="#support-request"
            className="mt-7 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Still need help? Continue to support request →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
