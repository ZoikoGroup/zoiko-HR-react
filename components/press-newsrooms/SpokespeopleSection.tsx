import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const PEOPLE = [
  {
    initials: "AM",
    name: "Alex Mercer",
    role: "Chief Executive Officer",
    topics: ["Platform strategy", "Workforce governance", "HR technology"],
  },
  {
    initials: "JO",
    name: "Jordan Osei",
    role: "Chief Trust & Privacy Officer",
    topics: ["Data governance", "AI ethics", "Privacy and security"],
  },
  {
    initials: "SW",
    name: "Sam Whitfield",
    role: "Head of Product Communications",
    topics: ["Product announcements", "Comparison methodology", "Media inquiries"],
  },
];

export function SpokespeopleSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Spokespeople & leadership context.">
          Approved public context for media routing. Interview availability is not
          implied by presence on this page. Submit a request through Media
          Inquiries.
        </SectionHeading>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PEOPLE.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 0.06} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 flex-none items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {p.initials}
                  </span>
                  <div>
                    <p className="text-base font-extrabold leading-5 text-ink">{p.name}</p>
                    <p className="mt-0.5 text-sm leading-5 text-slate-400">{p.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-300">
                  Approved topics
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {p.topics.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs leading-4 text-slate-500"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/media-inquiries"
                  className="mt-4 self-start rounded-full border border-indigo-200 px-4 py-2 text-xs font-semibold leading-5 text-primary transition-colors hover:bg-primary-light"
                >
                  Request interview →
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
