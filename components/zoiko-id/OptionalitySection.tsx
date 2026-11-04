import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const IS = [
  "An approved ecosystem identity and authentication relationship",
  "A governed option for connecting external identity to Zoiko HR",
  "Subject to approved configuration, currentness and access policy",
  "Bounded to defined relationship scope and capabilities",
  "Optional — usable alongside other approved approaches",
];

const IS_NOT = [
  "A replacement for Zoiko HR workforce authority",
  "Mandatory for Zoiko HR adoption",
  "The source of employment, manager or payroll truth",
  "A universal IAM/PAM platform for all enterprise systems",
  "An assurance guarantee without current approved source",
];

export function OptionalitySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Optionality & Ecosystem Posture"
          title="ZoikoID is an approved ecosystem identity option — never mandatory, never exclusive"
        >
          Controlled Interoperability allows heterogeneous environments. Existing
          identity and access management practices may coexist where supported.
          No forced suite adoption.
        </SectionHeading>

        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.06} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200">
              <p className="border-b border-slate-200 bg-green-700/5 px-5 py-4 text-sm font-bold text-slate-950">
                ZoikoID is
              </p>
              <ul className="flex flex-col gap-3 p-5">
                {IS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="flex-none text-xs leading-5 text-green-700"
                    >
                      ✓
                    </span>
                    <span className="text-xs leading-5 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.11} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200">
              <p className="border-b border-slate-200 bg-red-500/5 px-5 py-4 text-sm font-bold text-slate-950">
                ZoikoID is not
              </p>
              <ul className="flex flex-col gap-3 p-5">
                {IS_NOT.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="flex-none text-xs leading-5 text-red-500"
                    >
                      ✗
                    </span>
                    <span className="text-xs leading-5 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="h-full md:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-sky-700">
              <p className="bg-sky-700 px-5 py-4 text-sm font-bold text-white">
                Coexistence posture
              </p>
              <PlaceholderImage
                src="/images/zoiko-id/coexistence-posture.webp"
                alt="Colleagues collaborating around a laptop in a shared workspace"
                label="Coexistence posture"
                className="aspect-video w-full flex-1 bg-slate-100 lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
