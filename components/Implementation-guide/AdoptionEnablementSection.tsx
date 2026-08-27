import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

interface RoleCardProps {
  title: string;
  tasks: string[];
}

const roleCards: RoleCardProps[] = [
  {
    title: "HR Admin",
    tasks: [
      "Configure workflows and permissions",
      "Validate data after migration",
      "Support employee self-service",
    ],
  },
  {
    title: "HR Leader",
    tasks: [
      "Review reporting setup",
      "Confirm org model accuracy",
      "Approve handover record",
    ],
  },
  {
    title: "Manager",
    tasks: [
      "Learn team management interface",
      "Complete leave approval training",
      "Test self-service for team",
    ],
  },
  {
    title: "IT / Integration",
    tasks: [
      "Verify SSO configuration",
      "Monitor integration health",
      "Review API credential rotation",
    ],
  },
  {
    title: "Security / Privacy",
    tasks: [
      "Review role and access mapping",
      "Confirm data residency settings",
      "Sign privacy review record",
    ],
  },
  {
    title: "Payroll / Finance",
    tasks: [
      "Validate payroll data export",
      "Confirm field mapping",
      "Test reconciliation process",
    ],
  },
];

export function AdoptionEnablementSection() {
  return (
    <section className="bg-slate-100 py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
                Adoption, training and change enablement.
              </h2>
              <p className="text-base text-gray-500">
                Role readiness by audience.
              </p>
            </div>
          </Reveal>

          {/* Main Grid + Side Image Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Cards Container */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {roleCards.map((card, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-black/10 transition-shadow hover:shadow-sm">
                    <div>
                      <h3 className="text-base font-bold text-sky-950">
                        {card.title}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-1 text-xs text-gray-500">
                        {card.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="leading-5">
                            • {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-blue-600">
                      <Link href="#product-tour" className="hover:underline">
                        Product Tour →
                      </Link>
                      <Link href="#hr-guides" className="hover:underline">
                        HR Guides →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sidebar Image Panel */}
            <Reveal delay={0.15}>
              <PlaceholderImage
                src="/images/implementation-guide/Training.png"
                alt="Training and adoption overview"
                label="Adoption & Training"
                className="aspect-square w-full rounded-2xl bg-white ring-1 ring-black/10 lg:min-h-full"
              />
            </Reveal>
          </div>

          {/* Footer Note */}
          <Reveal delay={0.2}>
            <p className="text-xs text-gray-400">
              No hidden productivity or behavior scores.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
