import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    label: "Global operating structure",
    icon: (
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Role-based access",
    icon: (
      <path
        d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Lifecycle auditability",
    icon: (
      <path
        d="M12 8v4l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Employee self-service",
    icon: (
      <path
        d="M17 20h5v-1a4 4 0 00-3-3.87M9 20H4v-1a4 4 0 013-3.87m5-3.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-2-7.46"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Connected ecosystem",
    icon: (
      <path
        d="M8 7a4 4 0 118 0M8 7v3a4 4 0 004 4h0a4 4 0 004-4V7M12 14v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for structured, secure, global people operations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Centralize workforce information and HR processes while
              preserving clear permissions, accountable workflows and
              jurisdiction-aware administration.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    {pillar.icon}
                  </svg>
                </div>
                <p className="text-sm font-semibold text-ink">
                  {pillar.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} y={36}>
          <PlaceholderImage
            src="/images/home/capabilities-map.png"
            alt="Global network map showing connected HR operations across regions"
            label="Global network map"
            className="mt-10 w-full rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/trust-center"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View the Trust Center
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
