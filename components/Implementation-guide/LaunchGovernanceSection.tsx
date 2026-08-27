import { Container, Reveal } from "@/components/ui";

type ItemStatus = "success" | "warning" | "error";

interface ChecklistItem {
  label: string;
  status: ItemStatus;
}

interface GovernanceCategory {
  title: string;
  items: ChecklistItem[];
}

const governanceData: GovernanceCategory[] = [
  {
    title: "Scope & Config",
    items: [
      { label: "Scope manifest signed", status: "success" },
      { label: "Configuration reviewed", status: "warning" },
      { label: "Exception log cleared", status: "error" },
    ],
  },
  {
    title: "Data Acceptance",
    items: [
      { label: "Reconciliation complete", status: "warning" },
      { label: "Data owner sign-off", status: "warning" },
      { label: "Test migration passed", status: "success" },
    ],
  },
  {
    title: "Validation",
    items: [
      { label: "Functional tests passed", status: "success" },
      { label: "Access tests passed", status: "warning" },
      { label: "Recovery tests complete", status: "error" },
    ],
  },
];

const decisionOutcomes = [
  {
    title: "GO",
    sentences: ["All evidence complete.", "Launch authorized."],
    borderColor: "ring-emerald-400",
    textColor: "text-emerald-400",
  },
  {
    title: "HOLD",
    sentences: ["Outstanding blockers.", "Launch not authorized."],
    borderColor: "ring-red-400",
    textColor: "text-red-400",
  },
  {
    title: "PARTIAL GO",
    sentences: ["Scoped launch with documented exceptions."],
    borderColor: "ring-amber-500",
    textColor: "text-amber-500",
  },
];

const statusIcons: Record<ItemStatus, { symbol: string; color: string }> = {
  success: { symbol: "✓", color: "text-emerald-400" },
  warning: { symbol: "–", color: "text-amber-500" },
  error: { symbol: "×", color: "text-red-400" },
};

export function LaunchGovernanceSection() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <Container className="max-w-5xl">
        <div className="flex flex-col items-center gap-10">
          {/* Title */}
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Launch governance and decision authority.
            </h2>
          </Reveal>

          {/* Card Panel */}
          <Reveal delay={0.08}>
            <div className="flex w-full flex-col rounded-[20px] bg-white p-6 sm:p-10">
              {/* Header Label */}
              <span className="text-center font-mono text-xs tracking-widest text-gray-400">
                LAUNCH GATE
              </span>

              {/* Governance Categories Grid */}
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
                {governanceData.map((category, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <h3 className="text-sm font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <ul className="flex flex-col gap-2 text-xs text-gray-700">
                      {category.items.map((item, itemIdx) => {
                        const icon = statusIcons[item.status];
                        return (
                          <li
                            key={itemIdx}
                            className="flex items-center gap-2"
                          >
                            <span
                              className={`w-4 text-base font-bold leading-none ${icon.color}`}
                            >
                              {icon.symbol}
                            </span>
                            <span>{item.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Decision Outcomes Row */}
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {decisionOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center rounded-xl p-4 text-center ring-1 ring-inset ${outcome.borderColor}`}
                  >
                    <span
                      className={`font-mono text-base font-bold ${outcome.textColor}`}
                    >
                      {outcome.title}
                    </span>
                    <div className="mt-1.5 flex flex-col gap-1">
                      {outcome.sentences.map((sentence, sIdx) => (
                        <p key={sIdx} className="whitespace-nowrap text-sm leading-5 text-gray-500">
                          {sentence}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footnote */}
              <p className="mt-8 text-center text-xs text-gray-400">
                Launch is an authorized evidence-based human decision.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
