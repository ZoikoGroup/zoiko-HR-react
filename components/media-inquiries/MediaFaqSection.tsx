import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate routing and boundary rules already published in sections
 * E7-E10 of this page. No response time, executive detail, or company fact is
 * introduced here.
 */
const FAQS = [
  {
    question: "How do I contact Zoiko HR for press or media questions?",
    answer:
      "Submit a media inquiry through the form on this page. It covers press questions, company comment, interview requests, fact checks, and media-resource questions. For published announcements and current media materials, use the Zoiko HR Newsroom instead.",
  },
  {
    question: "Can I request a specific executive or spokesperson?",
    answer:
      "You can describe the request, but a named spokesperson is not guaranteed. Leadership profiles show current role and approved biography only — they do not imply media availability, and Zoiko HR assigns an appropriate spokesperson where it participates.",
  },
  {
    question: "How quickly will Zoiko HR respond?",
    answer:
      "No response time is guaranteed. Submission confirms receipt only when the system accepts your request; it does not guarantee response time, interview availability, comment, event participation, or embargo acceptance. The deadline field helps with prioritisation, not with a commitment.",
  },
  {
    question: "Where are Zoiko HR press releases and media assets?",
    answer:
      "In the Zoiko HR Newsroom, which is the authority for current announcements, press releases, corrections, approved media resources, and official publication dates. This page links to Newsroom content — it does not duplicate or distribute media assets.",
  },
  {
    question: "Can I send an attachment or confidential material?",
    answer:
      "No. This form takes no attachments. Do not send passwords, credentials, employee records, health information, private customer content, government identifiers, or other sensitive personal data. If a secure exchange is needed, the media team will provide an approved method after contact.",
  },
  {
    question:
      "Does submitting a deadline or embargo note mean Zoiko HR accepts an embargo?",
    answer:
      "No. Submission does not constitute embargo acceptance. Embargoed documents and confidential source material should not be submitted unless an approved secure process is provided first.",
  },
  {
    question: "Can freelancers or independent journalists use this form?",
    answer:
      "Yes. Media identity includes outlet or organization, independent, freelance, and student publication, and no corporate email domain is required.",
  },
  {
    question: "I am not contacting Zoiko HR as media. What should I use?",
    answer:
      "Use the dedicated route for your intent — sales, customer support, partnerships, careers, privacy requests, or security reporting each have their own path, listed at the top of this page. For anything else, use the general Contact Us route.",
  },
];

export function MediaFaqSection() {
  return (
    <section className="bg-[#071428] py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12">
          <SectionHeading
            eyebrow="FAQ · AEO · E8"
            title="Common press questions"
            tone="dark"
          >
            Answers are drawn from current approved source records only. No
            response times, executive details, or company facts are invented
            here.
          </SectionHeading>

          {/* Independent columns so opening one card cannot resize its neighbour;
              `display:contents` below lg keeps the cards in 1..n order there. */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
            {[0, 1].map((column) => (
              <div
                key={column}
                className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2"
              >
                {FAQS.map((faq, i) => ({ faq, i }))
                  .filter(({ i }) => i % 2 === column)
                  .map(({ faq, i }) => (
                    <div key={faq.question} style={{ order: i }}>
                      <Reveal delay={Math.min(i * 0.04, 0.3)}>
                        <details className="group overflow-hidden rounded-xl border border-blue-950 bg-slate-900">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                            <span className="text-sm font-semibold text-white">
                              {faq.question}
                            </span>
                            <span
                              aria-hidden
                              className="flex-none text-lg text-indigo-400 transition-transform duration-200 group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <p className="px-5 pb-4 text-sm leading-relaxed text-slate-400">
                            {faq.answer}
                          </p>
                        </details>
                      </Reveal>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
