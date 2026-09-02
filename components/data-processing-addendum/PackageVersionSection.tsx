import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatusBadge } from "./shared";

const DATES = ["Effective", "Published", "Reviewed"];

const META = [
  { label: "Package ID", value: "ZHR-TRUST-05-DPA" },
  { label: "Legal owner", value: "Legal / Privacy" },
  { label: "Review policy", value: "[From approved record]" },
  { label: "Access class", value: "Public / Request Required" },
];

function DateRows() {
  return (
    <dl className="flex flex-col gap-1">
      {DATES.map((label) => (
        <div key={label} className="flex items-center justify-between">
          <dt className="text-[10px] leading-4 text-slate-400">{label}</dt>
          <dd className="font-mono text-[10px] leading-4 text-slate-500">
            [From record]
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PackageVersionSection() {
  return (
    <section
      id="dpa-package"
      className="border-b border-slate-200 bg-white py-16"
    >
      <Container>
        <SectionHeading eyebrow="Section 4" title="DPA package, version and status.">
          Current approved package is primary. Scheduled versions are clearly
          not yet effective. Superseded packages link to current.
        </SectionHeading>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs leading-4 text-slate-400">
                  v[n-1]
                </span>
                <StatusBadge status="Superseded" />
              </div>
              <h3 className="font-heading text-lg font-extrabold leading-7 text-slate-700">
                Previous Package
              </h3>
              <DateRows />
              <div className="mt-auto border-t border-black/5 pt-2">
                <p className="text-xs leading-4 text-slate-400">
                  Link to current version required. Do not render as current.
                </p>
                <p className="mt-1 text-xs leading-4 text-slate-400">
                  See current version for active terms.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-primary/40 bg-blue-50 p-4 shadow-[0_4px_16px_rgba(49,94,251,0.10)]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs leading-4 text-slate-400">
                  v[n]
                </span>
                <StatusBadge status="Current" />
              </div>
              <h3 className="font-heading text-lg font-extrabold leading-7 text-primary">
                Current Package
              </h3>
              <DateRows />
              <div className="mt-auto border-t border-black/5 pt-2">
                <p className="text-xs leading-4 text-slate-400">
                  Approved and within review policy for stated scope.
                </p>
                <Link
                  href="#legal-review"
                  className="mt-1 inline-flex text-xs font-semibold leading-4 text-primary hover:text-primary-dark"
                >
                  Download / Review current DPA →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-2 lg:col-span-1">
            <PlaceholderImage
              src="/images/data-processing-addendum/dpa-package.png"
              alt="A specialist reviewing records across multiple monitors"
              label="Reviewing package records"
              className="aspect-[398/222] w-full rounded-2xl border border-slate-200 bg-slate-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <dl className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:grid-cols-2 lg:grid-cols-4">
            {META.map((item) => (
              <div key={item.label}>
                <dt className="text-[9px] uppercase leading-3 tracking-tight text-slate-400">
                  {item.label}
                </dt>
                <dd className="pt-0.5 font-mono text-xs leading-4 text-slate-700">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
