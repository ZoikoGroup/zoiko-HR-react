import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const PATHS = [
  {
    top: "bg-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    link: "text-green-600",
    title: "Explore current partners",
    description: "Find organizations that work with Zoiko HR today.",
    linkLabel: "Company Partners →",
    href: "/partners",
  },
  {
    top: "bg-violet-400",
    bg: "bg-purple-50",
    border: "border-violet-200",
    link: "text-violet-500",
    title: "Buy or evaluate Zoiko HR",
    description: "Speak with our sales team about Zoiko HR for your team.",
    linkLabel: "Contact Sales →",
    href: "/contact-sales",
  },
  {
    top: "bg-primary",
    bg: "bg-blue-50",
    border: "border-indigo-200",
    link: "text-primary",
    title: "Partner resources",
    description: "Access resources and support for existing relationships.",
    linkLabel: "Partner resources →",
    href: "/partners",
  },
  {
    top: "bg-slate-500",
    bg: "bg-slate-50",
    border: "border-slate-200",
    link: "text-slate-600",
    title: "General inquiry",
    description: "Not sure where to go? Route via Contact Us.",
    linkLabel: "Contact Us →",
    href: "/contact-zoiko-hr",
  },
];

export function AlternativePathsSection() {
  return (
    <section className="bg-white py-14">
      <Container>
        <SectionHeading eyebrow="Alternative paths · E4.10" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((path, i) => (
            <Reveal key={path.title} delay={0.06 + i * 0.06}>
              <Link
                href={path.href}
                className={`flex h-full flex-col overflow-hidden rounded-lg border ${path.border} ${path.bg} transition-shadow hover:shadow-sm`}
              >
                <span aria-hidden className={`h-1 w-full flex-none ${path.top}`} />
                <span className="flex flex-1 flex-col px-5 py-4">
                  <span className="text-base font-semibold leading-6 text-slate-900">
                    {path.title}
                  </span>
                  <span className="pt-1.5 text-xs leading-5 text-slate-500">
                    {path.description}
                  </span>
                  <span
                    className={`pt-4 text-xs font-semibold leading-5 ${path.link}`}
                  >
                    {path.linkLabel}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
