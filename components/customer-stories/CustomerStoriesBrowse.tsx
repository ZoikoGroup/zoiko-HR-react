import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const browseItems = [
  {
    title: "Core HR / Employee Records",
    description:
      "Structured employee data, record integrity, and audit-ready configuration.",
  },
  {
    title: "Global HR / Multi-Entity",
    description:
      "Entity management, jurisdiction handling, and cross-border administration.",
  },
  {
    title: "Onboarding & Lifecycle",
    description:
      "Hire-to-exit workflows, document collection, and lifecycle stage automation.",
  },
  {
    title: "Workflows & Approvals",
    description:
      "Conditional routing, approval chains, and delegation configuration.",
  },
  {
    title: "Reporting",
    description:
      "Operational HR reports built from structured, trusted record data.",
  },
  {
    title: "Integrations / Connected HR",
    description:
      "Connections to payroll, ATS, finance, and directory systems.",
  },
  {
    title: "Trust / Implementation",
    description:
      "Implementation approach, adoption patterns, and configuration governance.",
  },
];

export function CustomerStoriesBrowse() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            Browse by product and process area.
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {browseItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="flex min-h-[174px] flex-col rounded-2xl border border-black/10 bg-white p-5">
                {/* Title */}
                <h3 className="font-[IBM_Plex_Sans] text-sm font-bold leading-5 text-slate-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-[IBM_Plex_Sans] text-xs font-normal leading-5 text-gray-500">
                  {item.description}
                </p>

                {/* Eligible stories */}
                <p className="mt-3 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
                  0 eligible stories
                </p>

                {/* Documentation */}
                <a
                  href="/product"
                  className="mt-auto pt-3 font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-[#315EFB] transition-colors hover:text-[#315EFB]/80"
                >
                  Product documentation →
                </a>
              </div>
            </Reveal>
          ))}

          {/* Image */}
          <Reveal delay={0.35} y={24}>
            <div className="h-[174px] overflow-hidden rounded-2xl border border-black/10 bg-white">
              <PlaceholderImage
                src="/images/customer-stories/product-area.png"
                alt="Team working together on HR processes"
                label="Product and process areas"
                fit="cover"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}