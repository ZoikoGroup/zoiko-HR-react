import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, CheckIcon, CrossIcon } from "./shared";

const ESTABLISHED = [
  "Approved country/region/location exactly as stated in governed registry source",
  "Multiple values preserved — not collapsed without approval",
  "'Global' only if approved source confirms",
  "Change in location creates a Change Event",
  "Unknown location: 'Not established in approved registry'",
];

const BLOCKED = [
  "Headquarters or legal registration address",
  "Cloud provider marketing region or availability zone",
  "DNS origin or CDN edge location",
  "Product region selection in Zoiko HR settings",
];

export function ProcessingLocationsSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="08 / Processing Locations & Transfer Context"
          title="Location and transfer mechanism are separate concepts."
        >
          Approved processing geography is published only from governed registry
          source. The DPA and transfer annexes own transfer mechanism authority
          — never inferred from location.
        </SectionHeading>

        {/* Figma gives the rules card and the image the same width (577 / 578)
            with the ≠ marker between them, and both sides end level. */}
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Reveal delay={0.06} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-gray-50 px-6 py-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-primary">
                Processing location
              </p>
              <ul className="mt-4 space-y-3">
                {ESTABLISHED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 size-3.5 flex-none text-emerald-500" />
                    <span className="text-xs leading-4 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="my-5 border-slate-200" />

              <p className="text-[11px] font-medium uppercase tracking-wide text-amber-600">
                Blocked inferences
              </p>
              <ul className="mt-3 space-y-2.5">
                {BLOCKED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CrossIcon className="mt-0.5 size-3.5 flex-none text-rose-400" />
                    <span className="text-xs leading-4 text-slate-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <div className="flex h-full items-center justify-center lg:flex-col">
              <span aria-hidden className="hidden w-px flex-1 bg-slate-200 lg:block" />
              <span
                aria-hidden
                className="flex size-9 flex-none items-center justify-center rounded-full border border-amber-400/40 bg-orange-50 text-sm text-amber-600"
              >
                ≠
              </span>
              <span aria-hidden className="hidden w-px flex-1 bg-slate-200 lg:block" />
            </div>
          </Reveal>

          <Reveal delay={0.18} className="h-full">
            <PlaceholderImage
              src="/images/subprocessors/processing-locations.png"
              alt="A manager briefing colleagues at a conference table"
              label="Transfer authority sits in the DPA"
              className="aspect-[578/424] w-full rounded-xl border border-slate-200 bg-gray-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
