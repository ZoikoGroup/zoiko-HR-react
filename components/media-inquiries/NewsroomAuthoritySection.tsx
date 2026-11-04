import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const RESOURCES = [
  {
    bar: "bg-primary",
    arrow: "text-primary",
    title: "Current press releases",
    description: "Published corporate announcements and statements.",
    href: "/newsroom",
  },
  {
    bar: "bg-green-500",
    arrow: "text-green-500",
    title: "Approved media resources",
    description: "Logos, boilerplate, and approved imagery with rights status.",
    href: "/newsroom",
  },
  {
    bar: "bg-violet-400",
    arrow: "text-violet-400",
    title: "Leadership profiles",
    description:
      "Current role and approved biography. Does not imply media availability.",
    href: "/leadership",
  },
];

export function NewsroomAuthoritySection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Newsroom authority · E9"
              title="Looking for published information?"
            >
              Use the Zoiko HR Newsroom for current announcements, press
              releases, corrections, approved media resources, and official
              publication dates. This page links to current Newsroom content —
              it does not duplicate or distribute media assets.
            </SectionHeading>

            <Reveal delay={0.12}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/newsroom"
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Browse Newsroom
                </Link>
                <Link
                  href="/newsroom"
                  className="text-xs font-semibold leading-5 text-primary hover:underline"
                >
                  View approved media resources →
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-2.5">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={0.08 + i * 0.06}>
                <Link
                  href={resource.href}
                  className="flex items-stretch overflow-hidden rounded-[10px] border border-slate-200 bg-white transition-shadow hover:shadow-sm"
                >
                  <span aria-hidden className={`w-[3px] flex-none ${resource.bar}`} />
                  <span className="min-w-0 flex-1 px-4 py-3.5">
                    <span className="block text-xs font-semibold leading-5 text-slate-900">
                      {resource.title}
                    </span>
                    <span className="block pt-0.5 text-xs leading-4 text-slate-500">
                      {resource.description}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`flex flex-none items-center px-3.5 text-sm leading-5 ${resource.arrow}`}
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
