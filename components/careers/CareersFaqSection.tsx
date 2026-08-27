import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "Are there open roles at Zoiko HR?",
    answer: "Current open roles are published from the approved Job Registry. Use the Open Roles Finder above to filter by team, location, and work mode.",
  },
  {
    question: "How do I apply for a role?",
    answer: "Apply through the registered apply link on the individual role page. Applications submitted through any other channel are not recognized.",
  },
  {
    question: "Where is Zoiko HR hiring?",
    answer: "Locations vary by role and are listed on each Job Registry record. Regional availability is confirmed on the role page, not on this page.",
  },
  {
    question: "Does Zoiko HR offer remote or hybrid roles?",
    answer: "Work-mode eligibility — Onsite, Hybrid, or Remote — is set per role and shown on the individual role page.",
  },
  {
    question: "What is the hiring process?",
    answer: "A typical process includes Apply, Initial Review, Conversation, Role Assessment, Final Discussion, and Decision. Stages and timing may vary by role.",
  },
  {
    question: "How do I request a hiring accommodation?",
    answer: "Use the accommodations pathway linked in the Interview & Candidate Expectations section to request an adjustment at any stage.",
  },
  {
    question: "Where is candidate privacy information?",
    answer: "Candidate data handling is described in the published candidate privacy notice, linked in the Fair Hiring & Candidate Privacy section.",
  },
  {
    question: "How can I verify a recruiting message?",
    answer: "Use only official Zoiko HR channels for outreach. If a message seems unusual, verify it through the official contact route before responding.",
  },
];

export function CareersFaqSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Careers FAQ
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-white/60">
              Common questions about roles, the hiring process,
              accommodations, and candidate privacy.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-200 open:bg-white/[0.08]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-white/60 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
