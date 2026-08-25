import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { TYPE_CLASS, type GuideType } from "./guides";

const RECENT: { type: GuideType; date: string; title: string }[] = [
  {
    type: "Core Guide",
    date: "Aug 2024",
    title: "Planning an onboarding workflow end-to-end",
  },
  {
    type: "Reference",
    date: "Aug 2024",
    title: "Approval routing: request types and paths",
  },
  {
    type: "Reference",
    date: "Aug 2024",
    title: "Managing multi-entity org context in Zoiko",
  },
];

export function FeaturedGuidesSection() {
  return (
    <section className="bg-slate-50 py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Featured &amp; Recently Reviewed
          </span>
        </Reveal>

        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <Reveal delay={0.08} className="h-full">
            <PlaceholderImage
              src="/images/hr-guides/featured.png"
              alt="A colleague walking through a collaborative office space"
              label="Featured guides"
              className="h-full min-h-56 w-full rounded-xl bg-white"
            />
          </Reveal>

          <div>
            <Reveal delay={0.12}>
              <p className="font-heading font-bold text-slate-900">
                Recently Reviewed
              </p>
            </Reveal>

            <div className="mt-4 flex flex-col gap-4">
              {RECENT.map((item, i) => (
                <Reveal key={item.title} delay={0.16 + i * 0.05}>
                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="flex items-center gap-2">
                        <span
                          className={`rounded-md border px-2 py-0.5 font-heading text-xs font-semibold leading-4 ${TYPE_CLASS[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs text-slate-500">
                          · {item.date}
                        </span>
                      </p>
                      <span className="shrink-0 text-xs font-semibold text-primary">
                        Read →
                      </span>
                    </div>
                    <p className="mt-2 font-heading text-sm font-bold text-slate-800">
                      {item.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
