import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { BF } from "./data";

/**
 * Answers are not shown in the design (all panels are collapsed). Fill them in
 * once approved copy arrives — until then each row renders without a panel.
 */
const FAQS: { question: string; answer: string }[] = [
  { question: "What is the Zoiko HR Black Friday offer?", answer: "" },
  { question: "When does the sale run?", answer: "" },
  { question: "How is the price calculated?", answer: "" },
  { question: "What happens after the first year?", answer: "" },
  { question: "Are taxes included?", answer: "" },
  { question: "Can existing customers use the offer?", answer: "" },
];

function Plus() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 flex-none transition-transform duration-200 group-open:rotate-45" aria-hidden>
      <path d="M8 2v12M2 8h12" stroke={BF.blue} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function BlackFridayFaqSection() {
  return (
    <section id="faq" className="scroll-mt-36 py-20 sm:py-24" style={{ backgroundColor: BF.tint }}>
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BF.blue }}>
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Black Friday sale questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 divide-y divide-slate-200 border-b border-slate-200">
            {FAQS.map((f) =>
              f.answer ? (
                <details key={f.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-ink sm:text-base">
                    {f.question}
                    <Plus />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.answer}</p>
                </details>
              ) : (
                <div key={f.question} className="flex items-center justify-between gap-6 py-5 text-sm font-semibold text-ink sm:text-base">
                  {f.question}
                  <Plus />
                </div>
              )
            )}
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <PlaceholderImage
            src="/images/black-friday/faq-raised-hands.webp"
            alt="An audience raising their hands to ask questions"
            loading="lazy"
            className="aspect-[580/387] w-full"
          />
        </Reveal>
      </Container>
    </section>
  );
}
