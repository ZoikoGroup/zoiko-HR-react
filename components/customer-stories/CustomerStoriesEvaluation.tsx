import { Container, Reveal, Button } from "@/components/ui";

const evaluationFactors = [
  "Organization context (size, structure, multi-entity scope)",
  "Product and process areas required for your operating model",
  "Global / multi-entity complexity and jurisdictions in scope",
  "Integration requirements with existing payroll, ATS, or finance systems",
  "Implementation timeline and internal readiness",
  "Security, privacy, and commercial scope questions",
];

export function CustomerStoriesEvaluation() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            Evaluate Zoiko HR for your operating model.
          </h2>
        </Reveal>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <Reveal delay={0.08}>
            <div>
              <div className="flex flex-col items-start gap-3">
                <Button href="/book-a-demo">
                  Book a Demo
                </Button>

                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-blue-600 !text-blue-600 hover:!bg-blue-600 hover:!text-white"
                >
                  Request Pricing
                </Button>

                <a
                  href="/product-tour"
                  className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-blue-600 transition-colors duration-200 hover:text-blue-700"
                >
                  Take the Product Tour →
                </a>
              </div>

              <p className="mt-6 max-w-[553px] font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
                Customer stories are contextual evidence, not a guarantee of
                comparable results. Outcomes depend on your organization
                context, configuration, and operating environment.
              </p>
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.16}>
            <div>
              <h3 className="font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-slate-950">
                Evaluation factors to consider
              </h3>

              <div className="mt-4 space-y-2">
                {evaluationFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-start gap-2 font-[IBM_Plex_Sans] text-sm font-normal leading-5"
                  >
                    <span className="shrink-0 text-blue-600">→</span>

                    <span className="text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}