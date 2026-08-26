import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M5 21V5a1 1 0 011-1h6a1 1 0 011 1v16M13 21v-8a1 1 0 011-1h4a1 1 0 011 1v8M9 7h.01M9 11h.01M9 15h.01M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 8a3 3 0 110 6M21 20c0-2.5-1.8-4.6-4.2-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M2 13l4-4 4 3 3-3 4 4M6 9l3 3-2 2a1.4 1.4 0 01-2-2l1-1M14 12l2 2a1.4 1.4 0 01-2 2l-1-1M17 9l4 4-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M4 5h13a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 5v13a1 1 0 001 1M8 9h7M8 12h7M8 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const DESTINATIONS = [
  {
    title: "Explore Zoiko HR",
    Icon: BuildingIcon,
    description: "Learn about the product mission, capabilities, and approach.",
    linkLabel: "About Zoiko HR",
    href: "/about",
  },
  {
    title: "Leadership",
    Icon: PeopleIcon,
    description: "Accountable executives and governance structure.",
    linkLabel: "Company → Leadership",
    href: "/company/leadership",
  },
  {
    title: "Partnerships",
    Icon: HandshakeIcon,
    description: "Technology, commercial, and strategic partner pathways.",
    linkLabel: "Company → Partners",
    href: "/company/partners",
  },
  {
    title: "Newsroom",
    Icon: NewspaperIcon,
    description: "Official announcements and press publications.",
    linkLabel: "Company → Newsroom",
    href: "/company/newsroom",
  },
];

export function GroupFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where would you like to go next?
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, i) => (
            <Reveal key={dest.title} delay={0.08 + i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <dest.Icon />
                </span>
                <p className="mt-3 font-semibold">{dest.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {dest.description}
                </p>
                <Link
                  href={dest.href}
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  {dest.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-white/40">
            Careers destination is available through the Company
            navigation. No universal sales CTA is presented unless your
            intent is specifically commercial.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
