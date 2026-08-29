import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is the Zoiko HR Newsroom?",
    answer:
      "The official source for Zoiko HR-authored and approved company news — announcements, press releases, curated external coverage, and approved media resources. All published content is source-governed, dated, and attributed.",
  },
  {
    question: "How can journalists contact Zoiko HR?",
    answer:
      "Through the official media inquiry form, which routes to the communications team. It is for journalists, editors, and analysts — support, sales, careers, and partner questions have their own dedicated routes.",
  },
  {
    question: "Where can I find Zoiko HR press releases?",
    answer:
      "In the Press releases section. Only items formally typed 'Press release' in the News Item Registry appear there — marketing blog posts are not press releases.",
  },
  {
    question: "Where can I download logos or media assets?",
    answer:
      "From Media resources. All materials are sourced from the Media Asset Registry and rights-governed; assets require valid rights, format, and dimensions, and expired assets are automatically suppressed.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "Correction notices appear on affected articles when material changes occur. No corrections are currently published.",
  },
  {
    question: "What does 'External coverage' mean?",
    answer:
      "A curated reference to third-party reporting, linked to the original outlet's publication. It is not authored or endorsed by Zoiko HR, and article body is never copied.",
  },
  {
    question: "Where can I find Zoiko HR leadership information?",
    answer:
      "Approved public spokespersons are listed with press-relevant role labels in the Spokespeople section, and the full published roster is on the Leadership page. Interview requests route through the media inquiry form.",
  },
  {
    question: "Where can I find partner information or job openings?",
    answer:
      "Partner programs are on the Partners page and open roles on the Careers page. Use those dedicated routes rather than the media inquiry form.",
  },
];

export function NewsroomFaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Newsroom FAQ.
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group rounded-xl border border-black/5 bg-white px-6 py-4 shadow-sm transition-colors duration-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-sm leading-none text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
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
