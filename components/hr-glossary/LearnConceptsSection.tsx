import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionTitle } from "./shared";

const PATHS = [
  {
    icon: "🎓",
    title: "Buyer education",
    body: "Understand key HR and people-operations concepts before evaluating software. Start with Core HR, workforce lifecycle and governance basics.",
    cta: "Explore HR Guides",
    href: "/hr-guides",
  },
  {
    icon: "⚙️",
    title: "HR operations",
    body: "Learn the data objects, processes and metrics that support day-to-day people operations — employee records, workflows, approvals and reporting.",
    cta: "View Resource Center",
    href: "/resource-center",
  },
  {
    icon: "🔒",
    title: "Platform & governance",
    body: "Explore HR technology, data governance, access control and the principles behind a governed HR operating model.",
    cta: "Explore the Platform",
    href: "/platform",
  },
];

export function LearnConceptsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle>Learn the concepts behind better people operations</SectionTitle>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {PATHS.map((path, i) => (
            <li key={path.title}>
              <Reveal
                delay={i * 0.06}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span aria-hidden className="text-2xl leading-8">
                  {path.icon}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-6 text-ink">{path.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{path.body}</p>
                <Link
                  href={path.href}
                  className="mt-4 text-sm font-semibold leading-5 text-primary transition-colors hover:text-primary-dark"
                >
                  {path.cta} →
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
