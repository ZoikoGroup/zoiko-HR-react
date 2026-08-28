import { Container, Reveal } from "@/components/ui";

const TOPICS = [
  {
    title: "Object identity",
    description: "Canonical record name and purpose only from approved product source.",
  },
  {
    title: "States",
    description:
      "Approved lifecycle states and transition triggers; draft, current, archived, corrected, and superseded are kept distinct.",
  },
  {
    title: "Edit / correction",
    description:
      "Who may update a record and whether correction preserves history is source-approved only.",
  },
  {
    title: "Import / export",
    description:
      "Formats, fields, validation, permissions, and limits are documented only when approved.",
  },
];

export function DataLifecycleSection() {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Data, records &amp; lifecycle.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Object states, corrections, and history — only where an approved
            product source establishes the behavior.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 0.06}>
              <div className="h-full rounded-xl bg-white p-5">
                <h3 className="text-sm font-bold text-ink">{topic.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {topic.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
