import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, ClaimAndBoundary, ProductBadge } from "./shared";

const ADJACENT = [
  {
    initials: "IO",
    badge: "bg-sky-950",
    name: "Integrations Overview",
    references:
      "Approved connection model, availability and information-boundary context.",
    doesNotOwn: "Integration catalog and generic discovery.",
  },
  {
    initials: "ID",
    badge: "bg-sky-950",
    name: "Identity & Single Sign-On",
    references: "Identity/access connection class and authentication state.",
    doesNotOwn: "Provider support, SSO setup and account recovery.",
  },
  {
    initials: "DE",
    badge: "bg-sky-950",
    name: "Data Import & Export",
    references:
      "Migration/import/export route and data movement contract reference.",
    doesNotOwn: "Bulk transfer, file, mapping, transformation and cutover mechanics.",
  },
  {
    initials: "IS",
    badge: "bg-sky-950",
    name: "Integration Security",
    references:
      "Permission, minimization, service identity, exception, revocation and audit evidence.",
    doesNotOwn: "",
  },
  {
    initials: "EX",
    badge: "bg-sky-950",
    name: "External system owner",
    references: "Current source/target capability and source-of-truth facts.",
    doesNotOwn: "Never overwritten by Zoiko marketing narrative.",
  },
];

function AdjacentCard({ product }: { product: (typeof ADJACENT)[number] }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-[10px] border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2.5">
        <ProductBadge initials={product.initials} className={product.badge} />
        <p className="text-sm font-bold text-sky-950">{product.name}</p>
      </div>
      {product.doesNotOwn ? (
        <ClaimAndBoundary
          claimLabel="References"
          claim={product.references}
          boundaryLabel="Does not own"
          boundary={product.doesNotOwn}
        />
      ) : (
        <p className="pt-1 text-xs font-semibold leading-4">
          <span className="text-teal-600">References — </span>
          <span className="text-slate-500">{product.references}</span>
        </p>
      )}
    </div>
  );
}

export function AdjacentProductsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Controlled Interoperability coordinates flows. It doesn't own their meaning."
          className="max-w-[700px]"
        >
          Every adjacent product keeps authority over its own domain — this page
          only ever references them, including how a flow relates to migration.
        </SectionHeading>

        {/* Three cards on the top row, two on the left of the second with the
            photo filling the remaining span. */}
        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADJACENT.slice(0, 3).map((product, i) => (
            <Reveal key={product.name} delay={0.06 + i * 0.05}>
              <AdjacentCard product={product} />
            </Reveal>
          ))}

          <div className="flex flex-col gap-6">
            {ADJACENT.slice(3).map((product, i) => (
              <Reveal
                key={product.name}
                delay={0.21 + i * 0.05}
                className="flex-1"
              >
                <AdjacentCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="h-full sm:col-span-1 lg:col-span-2">
            <PlaceholderImage
              src="/images/controlled-interoperability/adjacent-products.webp"
              alt="Colleagues reviewing architecture documents around a table"
              label="Adjacent product authority"
              className="aspect-video w-full rounded-xl bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
