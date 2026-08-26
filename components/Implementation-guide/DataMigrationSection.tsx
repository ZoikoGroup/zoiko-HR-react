import { Container, Reveal, PlaceholderImage } from "@/components/ui";

interface MigrationDataset {
  title: string;
  status: string;
  statusColor: string;
  progressPercentage: number;
  progressBarColor: string;
  sourceSystem: string;
}

const datasets: MigrationDataset[] = [
  {
    title: "Employee records",
    status: "Quality Issue",
    statusColor: "bg-amber-500/10 text-amber-500 outline-amber-500/25",
    progressPercentage: 78,
    progressBarColor: "bg-amber-500",
    sourceSystem: "HRIS Legacy",
  },
  {
    title: "Organization structure",
    status: "Mapping Complete",
    statusColor: "bg-emerald-400/10 text-emerald-400 outline-emerald-400/25",
    progressPercentage: 95,
    progressBarColor: "bg-emerald-400",
    sourceSystem: "HR System",
  },
  {
    title: "Document history",
    status: "Test Failed",
    statusColor: "bg-red-400/10 text-red-400 outline-red-400/25",
    progressPercentage: 42,
    progressBarColor: "bg-red-400",
    sourceSystem: "Document Store",
  },
  {
    title: "Integration identifiers",
    status: "In Progress",
    statusColor: "bg-blue-600/10 text-blue-600 outline-blue-600/25",
    progressPercentage: 60,
    progressBarColor: "bg-blue-600",
    sourceSystem: "IdP / IAM",
  },
];

export function DataMigrationSection() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          {/* Left Column: Heading, Description & Image */}
          <div className="flex max-w-[616px] flex-col justify-start">
            <Reveal>
              <h2 className="whitespace-nowrap font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:leading-[48px]">
                Data readiness and migration.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 flex flex-col gap-1 leading-7 text-slate-400">
                <p>Data migration is a multi-stage process: extraction from source</p>
                <p>systems, schema mapping, transformation, quality assessment,</p>
                <p>test migration and reconciliation, followed by authorised</p>
                <p>acceptance by the customer data owner. Each dataset is tracked</p>
                <p>independently. Quality issues and variances remain open until resolved — they are not automatically closed.</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <PlaceholderImage
                src="/images/implementation-guide/Migration.png"
                alt="Data readiness dashboard illustration"
                label="Data Migration"
                className="mt-8 aspect-[3/2] w-full rounded-[10px] bg-slate-900 md:h-80"
              />
            </Reveal>
          </div>

          {/* Right Column: Migration Control Card */}
          <Reveal delay={0.12} y={20}>
            <div className="flex w-full min-h-[500px] flex-1 flex-col rounded-2xl bg-sky-950 p-8 ring-1 ring-white/10">
              {/* Header */}
              <span className="font-mono text-xs leading-5 text-slate-200">
                Data Migration Control
              </span>

              {/* Dataset Status List */}
              <div className="mt-4 flex flex-col gap-3">
                {datasets.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col rounded-lg bg-blue-950 p-3"
                  >
                    {/* Title & Status Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs leading-5 text-slate-200">
                        {item.title}
                      </span>
                      <span
                        className={`rounded-sm px-2 py-0.5 font-mono text-xs outline outline-1 outline-offset-[-1px] ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-sm bg-sky-950">
                      <div
                        className={`h-full rounded-sm ${item.progressBarColor}`}
                        style={{ width: `${item.progressPercentage}%` }}
                      />
                    </div>

                    {/* Quality Percentage & Source */}
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>{item.progressPercentage}% quality</span>
                      <span>{item.sourceSystem}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reconciliation Warning Callout */}
              <div className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 outline outline-1 outline-offset-[-1px] outline-amber-500/25">
                <span className="font-mono text-xs leading-4 text-amber-500">
                  Reconciliation: 2 variances open
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
