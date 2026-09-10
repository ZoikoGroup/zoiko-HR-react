import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const WITH_ZOIKO = [
  "Structured workforce records with defined ownership and access.",
  "Repeatable workflows with clear responsibilities and status.",
  "Authorized views and reporting make approved information easier to access.",
  "Shared operating structure can be adapted by entity, team and jurisdiction.",
  "Governed records and workflow history strengthen accountability.",
];

export function OperatingModelSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Operating model"
          title="From fragmented administration to a governed HR operating model."
          className="max-w-[600px]"
        >
          Zoiko HR is designed to replace the improvised systems that slow
          organizations down as they grow.
        </SectionHeading>

        <Reveal delay={0.1} amount={0}>
          {/*
            Each column owns its own header, so when they stack below lg the
            "With Zoiko HR" label stays attached to its checklist instead of
            landing above the Before photo.
          */}
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col lg:border-r lg:border-slate-200">
              <div className="border-b border-slate-200 bg-red-50 px-6 py-3">
                <p className="text-xs font-medium uppercase leading-4 tracking-wide text-red-600">
                  Before
                </p>
              </div>
              <PlaceholderImage
                src="/images/business-leaders/operating-model-before.webp"
                alt="A team presenting around a whiteboard covered in printed charts"
                label="Before"
                className="aspect-[619/278] w-full flex-1 bg-slate-100 lg:aspect-auto"
              />
            </div>

            <div className="flex flex-col border-t border-slate-200 lg:border-t-0">
              <div className="border-b border-slate-200 bg-green-50 px-6 py-3">
                <p className="text-xs font-medium uppercase leading-4 tracking-wide text-green-700">
                  With Zoiko HR
                </p>
              </div>
              {WITH_ZOIKO.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-slate-100 px-6 py-4 last:border-b-0"
                >
                  <span
                    aria-hidden
                    className="flex-none pt-0.5 text-xs font-bold leading-5 text-green-700"
                  >
                    ✓
                  </span>
                  <span className="break-words text-sm font-semibold leading-6 text-slate-950">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
