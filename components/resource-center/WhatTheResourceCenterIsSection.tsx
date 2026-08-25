import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PURPOSES = [
  {
    icon: "📖",
    number: "01",
    title: "Learn",
    body: "Guides, explainers and product education.",
  },
  {
    icon: "🔍",
    number: "02",
    title: "Evaluate",
    body: "Product Tour, Customer Stories, comparisons and implementation resources.",
  },
  {
    icon: "⚙️",
    number: "03",
    title: "Use",
    body: "Route to product documentation and Help for current behavior or troubleshooting.",
  },
  {
    icon: "✅",
    number: "04",
    title: "Verify",
    body: "Route to Trust, Pricing, Status and contractual authorities when required.",
  },
];

export function WhatTheResourceCenterIsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What the Resource Center Is
          </span>
          <h2 className="mt-3 max-w-[560px] font-heading text-3xl font-bold text-slate-900">
            What is the Zoiko HR Resource Center?
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_345px]">
          <div>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
                <div className="flex">
                  <span aria-hidden className="w-1 shrink-0 bg-primary" />
                  <p className="px-6 py-5 leading-6 text-slate-700">
                    The Zoiko HR Resource Center is the{" "}
                    <strong className="font-semibold text-slate-900">
                      public discovery hub
                    </strong>{" "}
                    for approved guides, research, explainers and product
                    education. Use it to find resources by task, audience, topic
                    and content type. When a question depends on{" "}
                    <strong className="font-semibold text-slate-900">
                      current product behavior, troubleshooting, security
                      evidence, service status, pricing or contractual terms
                    </strong>
                    , follow the linked authoritative Zoiko HR source rather than
                    treating an educational resource as final operational truth.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {PURPOSES.map((purpose, i) => (
                <Reveal
                  key={purpose.number}
                  delay={0.12 + i * 0.05}
                  className="h-full"
                >
                  <div className="h-full rounded-xl border border-black/10 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-3">
                      <span aria-hidden className="text-xl leading-8">
                        {purpose.icon}
                      </span>
                      <span className="text-xs font-black leading-4 text-primary">
                        {purpose.number}
                      </span>
                    </div>
                    <p className="mt-3 font-heading text-sm font-bold leading-5 text-slate-900">
                      {purpose.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {purpose.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/resource-center/what-the-resource-center-is.png"
              alt="Three colleagues talking over a laptop in a lounge"
              label="Resource Center"
              className="h-full min-h-72 w-full rounded-2xl border border-black/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
