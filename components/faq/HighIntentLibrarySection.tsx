import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const LEFT_COLUMN = [
  { question: "What is Zoiko HR?", href: "#product" },
  { question: "Is Zoiko HR a cloud platform?", href: "#product" },
  { question: "Can Zoiko HR support multiple legal entities?", href: "#global" },
  { question: "Does Zoiko HR support multiple countries?", href: "#global" },
  { question: "Does Zoiko HR integrate with payroll systems?", href: "#integrations" },
  { question: "Does Zoiko HR have an API?", href: "#integrations" },
];

const RIGHT_COLUMN = [
  { question: "How does Zoiko HR protect employee data?", href: "#security" },
  { question: "Is Zoiko HR GDPR compliant?", href: "#security" },
  { question: "How long does implementation take?", href: "#implementation" },
  { question: "How is Zoiko HR priced?", href: "#pricing" },
  { question: "Is there a free trial?", href: "/pricing" },
  { question: "How do I get current pricing?", href: "#pricing" },
];

function LibraryColumn({ title, items }: { title: string; items: { question: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <div className="mt-3 space-y-2.5">
        {items.map((item) => (
          <Link
            key={item.question}
            href={item.href}
            className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
          >
            {item.question}
            <span className="flex-none text-primary transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HighIntentLibrarySection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            High-intent FAQ library.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/60">
            All primary FAQ entries with stable IDs and review dates.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <LibraryColumn title="Product, Global & Integration" items={LEFT_COLUMN} />
          </Reveal>
          <Reveal delay={0.16}>
            <LibraryColumn title="Security, Implementation & Commercial" items={RIGHT_COLUMN} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
