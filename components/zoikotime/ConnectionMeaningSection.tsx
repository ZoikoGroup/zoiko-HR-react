import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SCOPE = [
  {
    kind: "does",
    text: "Explains the governed Zoiko HR relationship with ZoikoTime.",
  },
  {
    kind: "does",
    text: "Defines permission, purpose, effective-time, currentness, correction and reconciliation semantics.",
  },
  {
    kind: "not",
    text: "Does not make Zoiko HR the time-record authority.",
  },
  {
    kind: "not",
    text: "Does not use time context for productivity, risk or disciplinary scoring.",
  },
];

export function ConnectionMeaningSection() {
  return (
    <section
      id="operating-model"
      className="scroll-mt-24 border-b border-slate-200 bg-white py-16"
    >
      <Container>
        {/* At sm the quote runs full width above the scope cards and photo,
            which pair up; three columns only from lg. */}
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,384px)_minmax(0,405px)_minmax(0,405px)]">
          <Reveal className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
              What ZoikoTime connection means
            </p>
            <blockquote className="mt-3 border-l-[3px] border-primary pl-5">
              <p className="text-xl font-extrabold leading-7 text-slate-950">
                &quot;A connected time record is usable only when its source
                authority, effective period, timezone, currentness,
                approval/status, purpose, destination and correction state are
                explicit. Connection does not erase source ownership.&quot;
              </p>
            </blockquote>
          </Reveal>

          <div>
            <Reveal delay={0.06}>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Scope boundary — what this page does and does not claim
              </p>
            </Reveal>

            <div className="mt-4 flex flex-col gap-3">
              {SCOPE.map((item, i) => {
                const isDoes = item.kind === "does";
                return (
                  <Reveal key={item.text} delay={0.1 + i * 0.05}>
                    <div
                      className={`flex gap-2.5 rounded-lg border p-3 ${
                        isDoes
                          ? "border-green-100 bg-green-50"
                          : "border-red-100 bg-red-50"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`text-xs leading-5 ${
                          isDoes ? "text-green-900" : "text-red-900"
                        }`}
                      >
                        {isDoes ? "✓" : "✗"}
                      </span>
                      <p
                        className={`text-xs leading-5 ${
                          isDoes ? "text-green-900" : "text-red-900"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/zoikotime/scope-boundary.webp"
              alt="Colleagues reviewing plans together at a desk"
              label="Scope boundary"
              className="aspect-[405/296] w-full rounded-lg border border-green-100 bg-green-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
