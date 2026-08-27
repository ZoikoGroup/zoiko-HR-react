import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M10 14a4 4 0 005.66 0l3-3A4 4 0 1013 5.34l-1 1M14 10a4 4 0 00-5.66 0l-3 3A4 4 0 1011 18.66l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-500">
      <path d="M14.5 6.5a3.5 3.5 0 004.7 3.3l-8.4 8.4a2 2 0 11-2.8-2.8l8.4-8.4a3.5 3.5 0 00-1.9-.5zM5 5l4 4M4 14l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-500">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-amber-500">
      <path d="M4 10v4a1 1 0 001 1h3l6 4V5L8 9H5a1 1 0 00-1 1zM18 9a4 4 0 010 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-500">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const TYPES = [
  {
    title: "Technology & Integration",
    Icon: LinkIcon,
    iconBg: "bg-primary/10",
    description:
      "Organizations providing approved connections between Zoiko HR and adjacent software systems.",
    tags: [
      "Identity & access",
      "Payroll and finance",
      "Collaboration, data & analytics",
      "Workflow automation",
    ],
  },
  {
    title: "Implementation & Services",
    Icon: ToolsIcon,
    iconBg: "bg-emerald-400/10",
    description:
      "Organizations supporting deployment, migration, configuration, change management, training, or adoption services.",
    tags: [
      "Implementation support",
      "Data migration",
      "Change & adoption",
      "Technical configuration",
    ],
  },
  {
    title: "Advisory & Consulting",
    Icon: CompassIcon,
    iconBg: "bg-cyan-400/10",
    description:
      "Organizations providing strategic, operational, or HR advisory expertise that informs Zoiko HR deployment or use.",
    tags: ["HR strategy", "Organizational design", "Workforce transformation"],
  },
  {
    title: "Referral & Channel",
    Icon: MegaphoneIcon,
    iconBg: "bg-amber-500/10",
    description:
      "Organizations in approved referral or channel arrangements that route qualified buyer introductions.",
    tags: ["Technology VAR", "HR consultancy", "Managed service provider"],
  },
  {
    title: "Strategic Alliance",
    Icon: GlobeIcon,
    iconBg: "bg-violet-400/10",
    description:
      "Organizations with a formally documented broader strategic relationship. Specific terms, exclusivity, and scope are defined in the relationship record — not assumed from proximity.",
    tags: ["Formal documentation required", "Scope defined per record"],
  },
];

export function RelationshipTypesSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Partner relationship types.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((type, i) => (
            <Reveal key={type.title} delay={0.08 + i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${type.iconBg}`}
                >
                  <type.Icon />
                </span>
                <p className="mt-4 font-heading text-lg font-bold text-ink">
                  {type.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {type.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-ink/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#find-a-partner"
                  className="mt-4 pt-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Explore →
                </Link>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.33}>
            <PlaceholderImage
              src="/images/partners/relationship-types.png"
              alt="Two colleagues reviewing documents in a meeting room"
              label="Partner relationship types"
              className="h-full min-h-64 w-full rounded-2xl border border-primary/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
