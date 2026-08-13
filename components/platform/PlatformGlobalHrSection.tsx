import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const JURISDICTION_STYLES: Record<string, string> = {
  Configured: "text-emerald-400",
  "Professional review required": "text-amber-400",
  "Not yet configured": "text-white/40",
};

const ENTITIES = [
  { entity: "Acme US Inc.", location: "California, USA", owner: "D. Okafor", status: "Verified", jurisdiction: "Configured" },
  { entity: "Acme UK Ltd.", location: "London, UK", owner: "S. Patel", status: "Verified", jurisdiction: "Configured" },
  { entity: "Acme DE GmbH", location: "Berlin, Germany", owner: "L. Hoffmann", status: "Review needed", jurisdiction: "Professional review required" },
  { entity: "Acme SG Pte. Ltd.", location: "Singapore", owner: "M. Tan", status: "Pending setup", jurisdiction: "Not yet configured" },
];

export function PlatformGlobalHrSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Global HR management
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Coordinate people operations across entities and locations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Zoiko HR supports consistent organizational structures and
              shared HR operating practices while allowing approved local
              configuration, ownership, data, documents, workflows, and
              review.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="py-3 pr-6 font-medium">Entity</th>
                  <th className="py-3 pr-6 font-medium">Location</th>
                  <th className="py-3 pr-6 font-medium">HR Owner</th>
                  <th className="py-3 pr-6 font-medium">Data Status</th>
                  <th className="py-3 pr-6 font-medium">Jurisdiction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {ENTITIES.map((row) => (
                  <tr key={row.entity} className="transition-colors duration-150 hover:bg-white/[0.04]">
                    <td className="py-3.5 pr-6 font-medium">{row.entity}</td>
                    <td className="py-3.5 pr-6 text-white/60">{row.location}</td>
                    <td className="py-3.5 pr-6 text-white/60">{row.owner}</td>
                    <td className="py-3.5 pr-6 text-white/60">{row.status}</td>
                    <td className={`py-3.5 pr-6 font-semibold ${JURISDICTION_STYLES[row.jurisdiction]}`}>
                      {row.jurisdiction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-6 max-w-2xl text-xs text-white/40">
            Zoiko HR does not provide legal, tax, payroll, employment, or
            compliance advice and does not guarantee compliance with law.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/platform/global-hr-management"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore Global HR Management
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
