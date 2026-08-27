import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    title: "Clear Accountability",
    accent: "bg-primary",
    description:
      "Each published leader has a defined public role, title, and approved area of accountability. Titles and scope labels come from the Role Registry.",
  },
  {
    title: "Customer Responsibility",
    accent: "bg-emerald-400",
    description:
      "Published leadership roles reflect accountability to customers, product quality, trust, and the continued delivery of Zoiko HR's approved capabilities.",
  },
  {
    title: "Source-Governed Public Facts",
    accent: "bg-violet-400",
    description:
      "Every name, title, biography, credential, and external link renders from an approved source record with a named owner and review date.",
  },
  {
    title: "Responsible Technology",
    accent: "bg-amber-500",
    description:
      "Leadership accountability for privacy, security, accessibility, and AI is described only to the extent supported by current published role and claim records.",
  },
];

export function HowLeadershipPresentedSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How leadership is presented at Zoiko HR.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.08}>
            <PlaceholderImage
              src="/images/leadership/how-leadership-presented.png"
              alt="Colleagues talking in a meeting room overlooking a city skyline"
              label="How leadership is presented"
              className="h-full min-h-64 w-full rounded-2xl border border-black/10"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.14 + i * 0.06}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 sm:p-8 hover:-translate-y-1 hover:shadow-md">
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[3px] ${pillar.accent}`}
                  />
                  <p className="text-lg font-bold text-ink">{pillar.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 text-center">
            <Link
              href="#executive-leadership"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Explore leadership ↓
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
