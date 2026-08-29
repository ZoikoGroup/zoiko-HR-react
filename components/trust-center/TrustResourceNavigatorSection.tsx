import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RESOURCES = [
  {
    number: "01",
    title: "Trust Center",
    description: "Verified security, privacy, governance and assurance information.",
    linkLabel: "You are here",
    href: "#top",
    current: true,
  },
  {
    number: "02",
    title: "Security & Privacy",
    description:
      "Access controls, data protection, secure development and incident management.",
    linkLabel: "Review Security & Privacy",
    href: "#overviews",
  },
  {
    number: "03",
    title: "AI Governance",
    description:
      "Human review, permission controls, transparency, logging and prohibited AI uses.",
    linkLabel: "Review AI Governance",
    href: "#overviews",
  },
  {
    number: "04",
    title: "Accessibility",
    description:
      "Commitment, conformance information, limitations and feedback route.",
    linkLabel: "Review Accessibility",
    href: "#overviews",
  },
  {
    number: "05",
    title: "Data Processing Addendum",
    description: "Approved data-processing terms or a controlled request route.",
    linkLabel: "Review DPA",
    href: "#data-processing",
  },
  {
    number: "06",
    title: "Subprocessors",
    description:
      "Current approved subprocessors and the change-notification process.",
    linkLabel: "Review Subprocessors",
    href: "#data-processing",
  },
  {
    number: "07",
    title: "Security Reporting",
    description: "Responsible vulnerability-reporting route.",
    linkLabel: "Report an Issue",
    href: "#security-reporting",
  },
];

export function TrustResourceNavigatorSection() {
  return (
    <section id="trust-navigator" className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Trust Resource Navigator.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            The seven Legal &amp; Trust destinations, in order. Each is a
            distinct authority — this hub links to it rather than duplicating
            its content.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.number} delay={Math.min(i * 0.05, 0.3)}>
              <div
                className={`flex h-full flex-col rounded-xl border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5 ${
                  resource.current ? "border-teal-600" : "border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-bold text-slate-400">
                    {resource.number}
                  </span>
                  {resource.current && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold uppercase text-teal-600">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-bold text-ink">{resource.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                >
                  {resource.linkLabel} →
                </Link>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.35}>
            <PlaceholderImage
              src="/images/trust-center/navigator.png"
              alt="Colleagues greeting each other in an office lobby"
              label="Trust resources"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-white sm:h-full sm:aspect-auto"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
