import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    initial: "O",
    label: "Optionality",
    rule: "bg-primary",
    badge: "bg-primary",
    text: "text-primary",
    body: "Wider Zoiko suite adoption is never a prerequisite — only capability-specific dependencies are stated as required.",
  },
  {
    initial: "C",
    label: "Compatibility",
    rule: "bg-teal-600",
    badge: "bg-teal-600",
    text: "text-teal-600",
    body: "Specific vendors, protocols and write-back behavior render only from the current approved Integration Catalog.",
  },
  {
    initial: "A",
    label: "Authority",
    rule: "bg-violet-600",
    badge: "bg-violet-600",
    text: "text-violet-600",
    body: "Every data domain names an authoritative system — bidirectional flow never implies equal authority both ways.",
  },
  {
    initial: "M",
    label: "Migration",
    rule: "bg-yellow-600",
    badge: "bg-yellow-600",
    text: "text-yellow-600",
    body: "Moving from coexistence to replacement is a separate, customer-directed decision owned by Data Import & Export.",
  },
];

export function DirectAnswerSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,333px)] lg:gap-8">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Direct answer
              </p>
              <h2 className="mt-3 text-xl font-bold text-sky-950">
                What is Controlled Interoperability in Zoiko HR?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                It&apos;s the Connect &amp; Control approach for coordinating
                approved information flows through explicit permissions, source
                authority and data boundaries — while avoiding any assumption
                that customers must adopt the wider Zoiko suite to use Zoiko HR.
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
              src="/images/controlled-interoperability/direct-answer.webp"
              alt="A team reviewing a risk assessment presentation"
              label="Controlled Interoperability"
              className="aspect-[351/333] w-full rounded-lg bg-slate-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
