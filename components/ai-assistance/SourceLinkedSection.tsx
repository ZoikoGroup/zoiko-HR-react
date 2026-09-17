import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CONDITIONS = [
  { condition: "Sources agree", output: "Summarize and cite all material authorities." },
  {
    condition: "Sources conflict",
    output: "State conflict and route to owning authority — no false certainty.",
  },
  {
    condition: "Source stale",
    output: "Label stale; avoid authoritative action language; prompt refresh.",
  },
  {
    condition: "No approved source",
    output: "Say the answer is not established; offer safe route to Documentation or support.",
  },
  {
    condition: "Source outside permission",
    output: "Answer only from eligible sources or return restricted state.",
  },
];

const STATES = [
  { label: "Current", className: "border-green-300 bg-emerald-50 text-green-800" },
  { label: "Stale", className: "border-amber-200 bg-orange-50 text-yellow-800" },
  { label: "Conditional", className: "border-indigo-200 bg-indigo-50 text-blue-900" },
  { label: "Unavailable", className: "border-slate-300 bg-gray-100 text-slate-500" },
];

export function SourceLinkedSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Source-linked answers"
              title="Provenance and currentness matter more than a fluent answer."
            >
              Every AI output shows where the content came from — source title,
              owning module, version or effective date and currentness state.
              Unknown information stays unknown; it is not substituted with a
              generated guess.
            </SectionHeading>

            <Reveal delay={0.08}>
              {/* Two short columns fit a phone, so this stays a real list of rows. */}
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <div className="hidden grid-cols-[180px_minmax(0,1fr)] bg-slate-100 sm:grid">
                  <p className="px-4 py-3 text-xs font-semibold leading-5 text-slate-500">Condition</p>
                  <p className="px-4 py-3 text-xs font-semibold leading-5 text-slate-500">Required output</p>
                </div>
                <dl>
                  {CONDITIONS.map((row, i) => (
                    <div
                      key={row.condition}
                      className={`grid gap-1 border-t border-slate-100 px-4 py-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-0 sm:px-0 sm:py-0 ${
                        i % 2 === 1 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <dt className="text-xs font-semibold leading-5 text-ink sm:px-4 sm:py-3">
                        {row.condition}
                      </dt>
                      <dd className="text-xs leading-5 text-slate-500 sm:px-4 sm:py-3">{row.output}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {STATES.map((state) => (
                  <li
                    key={state.label}
                    className={`rounded-full border px-2 py-0.5 text-xs font-semibold leading-4 ${state.className}`}
                  >
                    {state.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/ai-assistance/source-linked.png"
              alt="Colleagues greeting each other with a handshake in an office"
              label="Colleagues meeting in an office"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl sm:aspect-video lg:aspect-[568/616]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
