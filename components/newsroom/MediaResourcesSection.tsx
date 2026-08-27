import { Container, Reveal } from "@/components/ui";

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <path d="M12 3a9 9 0 100 18c1 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.6-.4-1 0-.8.7-1.4 1.5-1.4H16a5 5 0 005-5c0-4.4-4-8-9-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 5a1 1 0 011-1h4a1 1 0 011 1v2H9V5zM9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 16l5-4 4 3 3-2 6 4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

const RESOURCES = [
  {
    title: "Logo assets",
    Icon: PaletteIcon,
    description:
      "Current approved logo variants for press use. Format, dimensions, and usage guidance included. Rights expiry enforced.",
    linkLabel: "View logos →",
    tag: "Rights-governed",
    tagClass: "border-emerald-400/25 bg-emerald-400/10 text-emerald-600",
  },
  {
    title: "Company boilerplate",
    Icon: ClipboardIcon,
    description:
      "Source-governed company description with last-reviewed date. Use the approved text without modification.",
    linkLabel: "View boilerplate →",
    tag: "Reviewed: [Date]",
    tagClass: "border-black/10 bg-slate-100 text-ink/50",
  },
  {
    title: "Company imagery",
    Icon: ImageIcon,
    description:
      "Approved photography and product imagery with captions, credits, and usage rights.",
    linkLabel: "View imagery →",
    tag: "Rights required",
    tagClass: "border-amber-500/25 bg-amber-500/10 text-amber-600",
  },
  {
    title: "Media kit",
    Icon: BoxIcon,
    description:
      "Overview of available approved press materials, usage guidance, and contact route for media requests.",
    linkLabel: "View media kit →",
    tag: "Accessible HTML primary",
    tagClass: "border-primary/20 bg-primary/10 text-primary",
  },
];

export function MediaResourcesSection() {
  return (
    <section id="media-resources" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Media resources — approved press materials.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/50">
            All materials sourced from the Media Asset Registry.
            Rights-governed.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={0.1 + i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <resource.Icon />
                <p className="mt-3 font-heading text-base font-bold text-ink">
                  {resource.title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/50">
                  {resource.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {resource.linkLabel}
                </p>
                <span
                  className={`mt-2 self-start rounded-full border px-2 py-0.5 text-xs ${resource.tagClass}`}
                >
                  {resource.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <p className="mt-6 text-xs leading-relaxed text-ink/40">
            All downloadable assets require valid rights, format, and dimensions
            in the Media Asset Registry. Expired assets are automatically
            suppressed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
