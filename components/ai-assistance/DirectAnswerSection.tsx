import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckIcon, Eyebrow } from "./shared";

const ESTABLISHES = [
  "The four approved assistance patterns and interaction model",
  "Human-review and no-automatic-high-impact-action boundary",
  "Permission-aware and source-linked product principles",
  "Publicly approved UI states and governance handoffs",
];

const ROUTES_ELSEWHERE = [
  "Specific model/provider identity (→ AI Governance when approved)",
  "Training, fine-tuning and retention claims (→ owning authority)",
  "Legal or compliance status conclusions (→ specialist route)",
  "Private assurance evidence (→ Trust Center / DPA)",
];

export function DirectAnswerSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,860px)_minmax(0,358px)] lg:gap-4 xl:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Direct answer</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                What is Zoiko HR AI Assistance?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Zoiko HR AI Assistance is a governed assistive experience for
                approved HR tasks such as finding authorized information,
                summarizing process status, preparing drafts for human review
                and identifying incomplete work. It operates within the
                user&apos;s permitted scope, links outputs to source context where
                available and does not authorize autonomous high-impact
                employment decisions.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="h-full rounded-2xl border border-green-300 bg-green-50 p-6">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-green-800">
                    What this page establishes
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {ESTABLISHES.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 size-4 flex-none text-green-800" />
                        <span className="text-xs leading-5 text-green-900 sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-slate-500">
                    What this page routes elsewhere
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {ROUTES_ELSEWHERE.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden className="w-4 flex-none text-slate-300">
                          —
                        </span>
                        <span className="text-xs leading-5 text-slate-400 sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-assistance/direct-answer.png"
              alt="Two colleagues smiling while reviewing work on a laptop"
              label="Colleagues reviewing work together"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl sm:aspect-video lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
