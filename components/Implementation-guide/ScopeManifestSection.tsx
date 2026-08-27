import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const includedScope = [
  "Organization model",
  "Employee records",
  "Roles & permissions",
  "Lifecycle & workflows",
  "Integrations & identity",
  "Reports & localization",
];

const excludedScope = [
  "Universal jurisdiction availability",
  "Fixed implementation duration",
  "Compliance guarantee",
  "Specific pricing",
  "Customer-specific project plan",
];

export function ScopeManifestSection() {
  return (
    <section className="bg-white py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Scope Manifest — what is and is not included.
            </h2>
          </Reveal>

          {/* 3-Column Content Layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Included Scope Column */}
            <Reveal delay={0.08}>
              <div className="flex flex-col justify-start">
                <h3 className="text-sm font-bold tracking-tight text-emerald-400 uppercase">
                  Included scope
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {includedScope.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-base font-bold text-emerald-400">
                        ✓
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Excluded Scope Column */}
            <Reveal delay={0.14}>
              <div className="flex flex-col justify-start">
                <h3 className="text-sm font-bold tracking-tight text-gray-500 uppercase">
                  Excluded / Requires validation
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {excludedScope.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-base font-bold text-gray-400">
                        ×
                      </span>
                      <span className="text-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Image Column */}
            <Reveal delay={0.2}>
              <PlaceholderImage
                src="/images/implementation-guide/Manifest.png"
                alt="Scope manifest preview"
                label="Scope Manifest"
                className="aspect-[3/2] w-full rounded-2xl bg-slate-100 md:col-span-2 lg:col-span-1"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
