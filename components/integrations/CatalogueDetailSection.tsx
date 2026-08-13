import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STATUS_STYLES: Record<string, string> = {
  "Verified available": "bg-emerald-100 text-emerald-700",
  "Sales-assisted": "bg-sky-100 text-sky-700",
  "Configuration required": "bg-amber-100 text-amber-700",
  Planned: "bg-slate-200 text-slate-500",
};

function ProviderCard({
  title,
  category,
  setup,
  status,
}: {
  title: string;
  category: string;
  setup: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="font-semibold text-ink">{title}</p>
        <span className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLES[status]}`}>
          {status}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-ink/50">{category}</p>
      <p className="mt-1 text-xs text-ink/40">Setup: {setup}</p>
    </div>
  );
}

export function CatalogueDetailSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Catalogue & detail pattern
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Governed discovery by status, not availability guesses.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              No provider or logo publishes without verification,
              permission, owner, status, and review date.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <ProviderCard title="ZoikoID" category="Identity & access" setup="Guided" status="Verified available" />
            </Reveal>
            <Reveal delay={0.16}>
              <ProviderCard title="Approved SSO provider" category="Identity & access" setup="Guided" status="Sales-assisted" />
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/integrations/catalogue-detail.png"
              alt="Person reviewing details with a colleague"
              label="Governed discovery"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.13}>
              <ProviderCard title="Zoiko Payroll" category="Payroll" setup="Sales-assisted" status="Configuration required" />
            </Reveal>
            <Reveal delay={0.19}>
              <ProviderCard title="Learning platform connector" category="Learning" setup="Sales-assisted" status="Planned" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
