import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    initial: "P",
    label: "Preparation",
    rule: "bg-primary",
    badge: "bg-primary",
    text: "text-primary",
    body: "Zoiko HR prepares and hands off approved employee and payroll-preparation information — it never calculates, approves, pays or files payroll.",
  },
  {
    initial: "A",
    label: "Acceptance",
    rule: "bg-teal-600",
    badge: "bg-teal-600",
    text: "text-teal-600",
    body: "Destination acceptance is an intake state. Sent is not accepted; accepted is not calculated, paid or filed.",
  },
  {
    initial: "T",
    label: "Timing",
    rule: "bg-yellow-600",
    badge: "bg-yellow-600",
    text: "text-yellow-600",
    body: "Payroll periods and cutoff rules are source-governed and versioned — unknown timing never silently defaults to the current period.",
  },
  {
    initial: "O",
    label: "Optionality",
    rule: "bg-violet-600",
    badge: "bg-violet-600",
    text: "text-violet-600",
    body: "Zoiko Payroll is an optional ecosystem relationship. Using it never requires adopting Zoiko One or the wider suite.",
  },
];

export function DirectAnswerSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,370px)] lg:gap-8">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Direct answer
              </p>
              <h2 className="mt-3 text-xl font-bold text-sky-950">
                What does connecting Zoiko HR to Zoiko Payroll mean?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Zoiko HR may coordinate approved employee and
                payroll-preparation information with Zoiko Payroll only within
                the configured source, purpose, permission, mapping and timing
                boundaries. It does not make Zoiko HR the payroll calculation,
                statutory-treatment, payment, filing, accounting-posting or
                payroll-result authority.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.label} delay={0.06 + i * 0.05}>
                  <div className="h-full overflow-hidden rounded-[10px] border border-slate-200 bg-slate-100">
                    <span aria-hidden className={`block h-1 ${pillar.rule}`} />
                    <div className="flex flex-col gap-2 px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex size-5 items-center justify-center rounded-[5px] text-[10px] font-extrabold text-white ${pillar.badge}`}
                        >
                          {pillar.initial}
                        </span>
                        <span
                          className={`text-xs font-bold uppercase tracking-wide ${pillar.text}`}
                        >
                          {pillar.label}
                        </span>
                      </div>
                      <p className="text-xs leading-5 text-slate-500">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/zoiko-payroll/direct-answer.webp"
              alt="Hands working through figures on a calculator"
              label="Payroll preparation"
              className="aspect-[370/333] w-full rounded-md bg-slate-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
