import { Container, Reveal } from "@/components/ui";

const FAQS = [
  { question: "What are Zoiko HR Workflows & Approvals?", answer: "A governed workforce-operations capability for routing work through configured conditions, approval decisions and traceable evidence, subject to the product capabilities enabled for the organization." },
  { question: "Can workflows approve HR decisions automatically?", answer: "No. A workflow can route and provide context, but a consequential HR outcome keeps a named, authorized human decision at its center." },
  { question: "How does conditional routing work?", answer: "Configured conditions determine the eligible path; unknown or missing values route to an explicit branch or blocked state, never a silent default." },
  { question: "Can approvals be delegated?", answer: "Where delegation is configured, an approval can be routed to another authorized approver, with the delegation and outcome recorded." },
  { question: "Can I see who approved a request?", answer: "The instance timeline records who changed, routed, reviewed and decided each workflow step, subject to permission-sensitive access." },
  { question: "Does this replace Self-Service?", answer: "No. Workflows & Approvals routes and decides work; Employee & Manager Self-Service is where employees and managers submit and track requests." },
  { question: "Is reporting included?", answer: "This page shows aggregate workflow and approval health only. Deeper, permission-sensitive reporting belongs to Reporting & Insights." },
];

export function WorkflowsFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Direct answers about Workflows &amp; Approvals.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
