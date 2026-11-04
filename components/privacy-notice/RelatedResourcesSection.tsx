import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RESOURCES = [
  {
    title: "Cookie Notice",
    body: "Cookie categories, purposes, and preference controls.",
    href: "/cookie-notice",
  },
  {
    title: "Subprocessors",
    body: "Current list of approved subprocessors.",
    href: "/subprocessors",
  },
  {
    title: "Trust Center",
    body: "Enterprise trust, compliance context, and legal resources.",
    href: "/trust-center",
  },
];

export function RelatedResourcesSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-12">
      <Container>
        <Reveal>
          <h2 className="text-xl font-extrabold leading-7 tracking-tight text-ink">
            Related legal and trust resources
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,401px)]">
          <div className="flex flex-col gap-3">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 0.08}>
                <Link
                  href={resource.href}
                  className="block rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-primary hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold leading-5 text-ink">
                    {resource.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {resource.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/privacy-notice/related-resources.png"
              alt="Someone checking their phone next to a laptop showing a Zoiko HR screen"
              label="Reviewing resources on a laptop and phone"
              className="h-full min-h-[240px] w-full rounded-xl border border-slate-200"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
