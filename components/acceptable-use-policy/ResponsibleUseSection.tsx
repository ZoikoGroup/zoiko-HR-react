import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const SUMMARIES = [
  {
    title: "Lawful, authorized use",
    body: "Act only within your role, contract, and applicable law.",
  },
  {
    title: "Protect credentials & data",
    body: "Don't share credentials or export data outside your purpose.",
  },
  {
    title: "Don't disrupt the platform",
    body: "No overload, evasion, or resource abuse.",
  },
  {
    title: "Respect rights & authenticity",
    body: "No infringement, impersonation, or false records.",
  },
];

/**
 * Chips for sections that exist on this page link to them; the rest are plain
 * pills, because the sections they name were not part of the design handed
 * over. Adding the missing sections is all it takes to link them up.
 */
const TOPIC_CHIPS: { label: string; href?: string }[] = [
  { label: "Applicability", href: "#applicability" },
  { label: "Unlawful & harmful use" },
  { label: "Employment & AI decisions", href: "#employment-decisions" },
  { label: "AI assistance", href: "#ai-assistance" },
  { label: "Privacy & data", href: "#privacy-data" },
  { label: "Security", href: "#security" },
  { label: "Platform integrity", href: "#availability" },
  { label: "Content & IP" },
  { label: "Conduct" },
  { label: "Integrations" },
  { label: "Restricted uses" },
  { label: "Enforcement", href: "#enforcement" },
  { label: "Reporting", href: "#reporting" },
  { label: "Changes & FAQ", href: "#versioning" },
];

const CHIP_CLASSES =
  "inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600";

export function ResponsibleUseSection() {
  return (
    <section className="bg-slate-100 py-14 sm:py-16">
      <Container>
        <SectionHeading title="Eight ways to use Zoiko HR responsibly.">
          A fast model for non-lawyers. Each summary links to the full section —
          it is not an exhaustive list of permitted conduct.
        </SectionHeading>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,514px)]">
          <div className="grid gap-5 sm:grid-cols-2">
            {SUMMARIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-[10px] border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/responsible-use.png"
              alt="A presenter talking through guidance in front of a screen"
              label="Talking through responsible use"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-[10px] border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {TOPIC_CHIPS.map((chip) => (
              <li key={chip.label}>
                {chip.href ? (
                  <a
                    href={chip.href}
                    className={`${CHIP_CLASSES} transition-colors hover:border-primary hover:text-primary`}
                  >
                    {chip.label}
                  </a>
                ) : (
                  <span className={CHIP_CLASSES}>{chip.label}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
