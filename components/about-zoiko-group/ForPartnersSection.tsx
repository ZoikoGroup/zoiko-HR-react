import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path
        d="M9 15l6-6M10 6l1.5-1.5a3.5 3.5 0 015 5L15 11M14 18l-1.5 1.5a3.5 3.5 0 01-5-5L9 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstitutionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path
        d="M4 10l8-5 8 5M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PARTNERS = [
  {
    title: "Technology & Integration",
    Icon: LinkIcon,
    description: "Technology organizations building integrations or connections with Zoiko Group products.",
  },
  {
    title: "Strategic & Institutional",
    Icon: InstitutionIcon,
    description: "Institutional, academic, or strategic relationship inquiries for the broader group.",
  },
];

export function ForPartnersSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            For partners and ecosystem — how external organizations
            engage.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
                <LinkIcon />
              </span>
              <p className="mt-3 font-semibold text-ink">
                {PARTNERS[0].title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {PARTNERS[0].description}
              </p>
              <Link
                href="/company/partners"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore partnerships
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/about-zoiko-group/for-partners.png"
              alt="Colleagues meeting behind a glass partition"
              label="Ecosystem partnerships"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <Reveal delay={0.24}>
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
                <InstitutionIcon />
              </span>
              <p className="mt-3 font-semibold text-ink">
                {PARTNERS[1].title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {PARTNERS[1].description}
              </p>
              <Link
                href="/company/partners"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore partnerships
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <p className="mt-6 text-xs text-ink/40">
            Partnership applications and program details are managed
            through the Partners destination. No application form is
            available on this page.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
