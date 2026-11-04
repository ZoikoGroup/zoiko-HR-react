import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "How do I replace HR spreadsheets?",
    answer: "Start by inventorying the files and processes that currently act as HR records, define the target structure and permissions, clean and validate priority data, then migrate and test in controlled phases. Zoiko HR is designed to provide a structured environment for workforce records and configured HR workflows.",
  },
  {
    question: "Do we need to migrate every historical spreadsheet?",
    answer: "No. Prioritize the records and workflows that are still operationally active, and retain historical files as reference rather than migrating them into the live system.",
  },
  {
    question: "Can Zoiko HR replace our legacy HR system?",
    answer: "In many cases, yes — subject to your approved scope. Where a legacy system must remain for a specific function, a coexistence or integration pattern can be used instead of full replacement.",
  },
  {
    question: "Can we keep payroll or time systems we already use?",
    answer: "Yes, where supported. Zoiko HR is designed to coordinate with existing time and payroll systems rather than requiring their replacement.",
  },
  {
    question: "How do you protect employee data during migration?",
    answer: "Imported data is handled under the same access, confidentiality and least-privilege controls that apply to records created directly in Zoiko HR.",
  },
  {
    question: "What if our current data has duplicates or inconsistent fields?",
    answer: "Data preparation — including deduplication and validation — is part of the implementation process, before records are migrated into the target structure.",
  },
];

export function ReplaceSpreadsheetsFaqSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Direct answers about replacing spreadsheets and legacy HR.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
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
