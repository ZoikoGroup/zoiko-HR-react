import { Container, Reveal } from "@/components/ui";

interface IntegrationCard {
  title: string;
  status: "Connected" | "Auth Pending" | "Not Configured";
  authType: string;
  direction: "Bidirectional" | "Outbound" | "Inbound";
  environment: "Production" | "Staging" | "Not set";
  note: string;
}

const integrations: IntegrationCard[] = [
  {
    title: "HR-Time",
    status: "Connected",
    authType: "OAuth 2.0",
    direction: "Bidirectional",
    environment: "Production",
    note: "Token rotation required on expiry.",
  },
  {
    title: "Payroll",
    status: "Auth Pending",
    authType: "API Key",
    direction: "Outbound",
    environment: "Staging",
    note: "Credential delivery outstanding.",
  },
  {
    title: "Identity / SSO",
    status: "Connected",
    authType: "SAML 2.0",
    direction: "Inbound",
    environment: "Production",
    note: "Attribute mapping validated.",
  },
  {
    title: "Document Mgmt",
    status: "Not Configured",
    authType: "Not set",
    direction: "Outbound",
    environment: "Not set",
    note: "Scope decision required first.",
  },
  {
    title: "Reporting / Analytics",
    status: "Auth Pending",
    authType: "Service account",
    direction: "Outbound",
    environment: "Staging",
    note: "Schema agreement pending.",
  },
  {
    title: "API / Webhooks",
    status: "Connected",
    authType: "Bearer token",
    direction: "Outbound",
    environment: "Staging",
    note: "Event schema version locked.",
  },
];

const statusStyles: Record<IntegrationCard["status"], string> = {
  Connected: "bg-emerald-400/10 text-emerald-400 outline-emerald-400/25",
  "Auth Pending": "bg-amber-500/10 text-amber-500 outline-amber-500/25",
  "Not Configured": "bg-gray-500/10 text-gray-500 outline-gray-500/25",
};

export function IntegrationsSection() {
  return (
    <section className="bg-white py-20 text-slate-900 sm:py-24">
      <Container>
        {/* Title */}
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
            Integrations, identity and environment readiness.
          </h2>
        </Reveal>

        {/* Integration Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-slate-50 p-6 ring-1 ring-black/10">
                <div>
                  {/* Header: Title & Status Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-sky-950">
                      {item.title}
                    </h3>
                    <span
                      className={`rounded-sm px-2 py-0.5 font-mono text-xs outline outline-1 outline-offset-[-1px] ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Metadata Details */}
                  <div className="mt-4 flex flex-col gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Auth type</span>
                      <span className="text-gray-700">{item.authType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Direction</span>
                      <span className="text-gray-700">{item.direction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Environment</span>
                      <span className="text-gray-700">
                        {item.environment}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Note / Footer */}
                <div className="mt-4 border-t border-black/5 pt-3 text-xs text-gray-500">
                  {item.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Environment Separation Banner */}
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-xl bg-slate-50 p-4 text-center ring-1 ring-black/10">
            <p className="text-sm text-gray-700">
              <span className="font-bold">Test → Staging → Production</span> —
              environments remain separate.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
