import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckIcon } from "./shared";

const STANDARDS = [
  "Every term has a named editorial owner and review date.",
  "Advice-sensitive terms include explicit professional-advice boundaries.",
  "Product claims link to approved source documentation only.",
  "General definitions do not imply Zoiko HR-specific behavior.",
];

export function AboutDefinitionsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,760px)_minmax(0,423px)] lg:justify-between">
          <Reveal>
            <h2 className="text-xl font-extrabold leading-7 text-ink">About these definitions</h2>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-600">
                Zoiko HR Glossary definitions are educational. Terminology,
                policies, legal requirements, calculations and employment practices
                can vary by organization and jurisdiction.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                For current Zoiko HR product behavior, follow the linked Product
                Documentation. For professional advice — legal, tax, payroll,
                employment, immigration, benefits, medical or compliance — use a
                qualified advisor.
              </p>
              <ul className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
                {STANDARDS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-3.5 flex-none text-green-600" />
                    <span className="text-xs leading-5 text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/hr-glossary/about-definitions.png"
              alt="Two colleagues reviewing a tablet together outside an office"
              label="Colleagues reviewing a tablet"
              loading="lazy"
              className="aspect-video w-full rounded-xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
