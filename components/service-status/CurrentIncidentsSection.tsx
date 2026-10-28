import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CurrentIncidentsSection() {
  return (
    <section id="current-incidents" className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-slate-200 bg-white p-7">
              <h2 className="text-lg font-extrabold tracking-tight text-ink">
                Current incidents
              </h2>
              <p className="mt-2.5 text-sm font-semibold text-ink">
                No active incidents are currently published.
              </p>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                This reflects the current incident registry only — it does not
                confirm that every component is healthy.
              </p>

              <details className="group mt-5 border-t border-gray-100 pt-3.5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-primary">
                  What appears when an incident is published
                  <span
                    aria-hidden
                    className="flex-none transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-500">
                  <li>
                    The affected approved component and its public scope, taken
                    from the registry label.
                  </li>
                  <li>
                    The current lifecycle state — investigating, identified,
                    mitigating, monitoring, or resolved.
                  </li>
                  <li>
                    Customer impact in plain language; internal severity may stay
                    unpublished.
                  </li>
                  <li>
                    Detected, published, updated, and resolved times, each
                    labeled separately.
                  </li>
                </ul>
              </details>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/service-status/current-incidents.png"
              alt="An operations lead monitoring dashboards at a desk"
              label="Monitoring operational dashboards"
              className="w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
