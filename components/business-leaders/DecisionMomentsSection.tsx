import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The heading says six moments; the design publishes four cards plus the photo.
 * Only the four that exist are rendered — see the note handed back with this
 * page.
 */
const MOMENTS = [
  {
    id: "01",
    icon: "◎",
    accent: "text-primary",
    title: "Hiring & joining",
    body: "Know who is joining, where they belong and what must happen next.",
    route: "Platform → Onboarding / Employee Records",
  },
  {
    id: "02",
    icon: "◷",
    accent: "text-sky-500",
    title: "Team or role changes",
    body: "Keep organization structure and employee details aligned with approved changes.",
    route: "Platform → Workforce Records",
  },
  {
    id: "03",
    icon: "⊞",
    accent: "text-amber-500",
    title: "Policy administration",
    body: "Keep current policies and workforce acknowledgments organized.",
    route: "Resources / Policies",
  },
  {
    id: "04",
    icon: "⊟",
    accent: "text-green-500",
    title: "Workforce review",
    body: "Use authorized summaries and reports to understand workforce status and trends.",
    route: "Platform → Reporting",
  },
];

export function DecisionMomentsSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Decision moments"
          title="Six leadership moments Zoiko HR can help simplify."
          tone="dark"
          className="max-w-[600px]"
        >
          These are the recurring operating decisions where structured HR
          administration reduces friction and improves visibility.
        </SectionHeading>

        {/* Cards fill a 2x2 block at lg with the photo spanning both rows. */}
        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MOMENTS.map((moment, i) => (
            <Reveal
              key={moment.id}
              delay={0.06 + i * 0.05}
              className="h-full"
              amount={0}
            >
              <div className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden className={`text-lg leading-7 ${moment.accent}`}>
                    {moment.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] leading-4 text-white/30">
                      {moment.id}
                    </p>
                    <p className="break-words text-base font-extrabold leading-5 text-white">
                      {moment.title}
                    </p>
                  </div>
                </div>
                <p className="flex-1 break-words text-xs leading-5 text-white/60">
                  {moment.body}
                </p>
                <p className={`break-words text-xs font-medium leading-4 ${moment.accent}`}>
                  {moment.route}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="h-full md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1"
          >
            <PlaceholderImage
              src="/images/business-leaders/decision-moments.webp"
              alt="A manager explaining a report to a colleague at a desk"
              label="Decision moments"
              // md:aspect-video — it spans both columns at md, so the near-square
              // design ratio would render it about 700px tall there.
              className="aspect-[402/354] w-full rounded-xl border border-white/10 bg-white/5 md:aspect-video lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
