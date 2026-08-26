import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TOPIC_CARDS = [
  { key: "product", title: "Product & Platform", dot: "bg-primary", description: "Core capabilities, modules, and platform behaviour.", href: "#product" },
  { key: "security", title: "Security & Privacy", dot: "bg-rose-500", description: "Data protection, access controls, and compliance frameworks.", href: "#security" },
  { key: "implementation", title: "Implementation", dot: "bg-amber-500", description: "Onboarding phases, timelines, and adoption support.", href: "#implementation" },
  { key: "support", title: "Support", dot: "bg-emerald-500", description: "Help Center, documentation, and service status.", href: "/help-center" },
];

export function BrowseByTopicSection() {
  return (
    <section id="browse-by-topic" className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Browse by topic.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-white/60">Select a topic to explore its FAQ set.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {TOPIC_CARDS.slice(0, 2).map((card, i) => (
              <Reveal key={card.key} delay={0.08 + i * 0.06}>
                <Link
                  href={card.href}
                  className="group block rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${card.dot}`} />
                  <p className="mt-3 font-semibold">{card.title}</p>
                  <span className="mt-1.5 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/70">
                    6 questions
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/faq/browse-by-topic.png"
              alt="Two colleagues collaborating at desks in an office"
              label="Browse by topic"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {TOPIC_CARDS.slice(2, 4).map((card, i) => (
              <Reveal key={card.key} delay={0.12 + i * 0.06}>
                <Link
                  href={card.href}
                  className="group block rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${card.dot}`} />
                  <p className="mt-3 font-semibold">{card.title}</p>
                  <span className="mt-1.5 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/70">
                    6 questions
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
