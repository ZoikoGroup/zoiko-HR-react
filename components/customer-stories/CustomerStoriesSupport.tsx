import { Container, Reveal } from "@/components/ui";

const canSupport = [
  "Approved contextual evidence of product use in a defined environment.",
  "Implementation approach used by a specific customer with stated context.",
  "Product functionality description within the scope of that customer's configuration.",
  "Governance and operating context at the granularity the customer approved.",
  "Bounded outcomes with evidence label, observation period, and stated limitations.",
];

const cannotProve = [
  "Certification, legal compliance, or regulatory standing of any kind.",
  "Data processing agreement terms, data residency, or contractual guarantees.",
  "SLA commitments, service availability, or incident history.",
  "Security architecture, penetration test results, or vulnerability status.",
  "Universal privacy outcome applicable to another organization's operating context.",
];

const resources = [
  {
    label: "Security / Privacy",
    title: "Trust Center →",
    href: "/trust-center",
  },
  {
    label: "Accessibility",
    title: "Accessibility Statement →",
    href: "/accessibility",
  },
  {
    label: "Data Processing",
    title: "Data Processing Agreement →",
    href: "/data-processing-agreement",
  },
  {
    label: "Service",
    title: "Service Status →",
    href: "/service-status",
  },
  {
    label: "Commercial",
    title: "Pricing / Sales →",
    href: "/pricing",
  },
  {
    label: "Implementation",
    title: "Implementation Guide →",
    href: "/implementation-guide",
  },
];

export function CustomerStoriesSupport() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-white">
            What a customer story can and cannot support.
          </h2>
        </Reveal>

        {/* Support / Cannot Prove */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Can Support */}
          <Reveal delay={0.08}>
            <div>
              <h3 className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-green-400">
                A story can support
              </h3>

              <div className="mt-4 space-y-3">
                {canSupport.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 font-[IBM_Plex_Sans] text-sm font-normal leading-5"
                  >
                    <span className="shrink-0 text-green-400">✓</span>

                    <span className="text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cannot Prove */}
          <Reveal delay={0.16}>
            <div>
              <h3 className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-red-400">
                A story cannot prove
              </h3>

              <div className="mt-4 space-y-3">
                {cannotProve.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 font-[IBM_Plex_Sans] text-sm font-normal leading-5"
                  >
                    <span className="shrink-0 text-red-400">✗</span>

                    <span className="text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Resource Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={0.1 + index * 0.05}>
              <a
                href={resource.href}
                className="block rounded-xl border border-white/10 bg-sky-950 p-4 transition-colors duration-200 hover:border-indigo-400/40 hover:bg-[#102A43]"
              >
                <div className="font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
                  {resource.label}
                </div>

                <div className="mt-1 font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-indigo-400">
                  {resource.title}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}