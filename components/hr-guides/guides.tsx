export type GuideType = "Core Guide" | "Reference" | "Explainer";

export type Guide = {
  type: GuideType;
  status: "Current";
  title: string;
  tags: string[];
  reviewed: string;
};

export const TYPE_CLASS: Record<GuideType, string> = {
  "Core Guide": "border-primary/20 bg-primary/10 text-primary",
  Reference: "border-emerald-400/20 bg-emerald-400/10 text-emerald-500",
  Explainer: "border-violet-400/20 bg-violet-400/10 text-violet-400",
};

export const GUIDES: Guide[] = [
  {
    type: "Core Guide",
    status: "Current",
    title: "How employee records are structured in Zoiko",
    tags: ["Organize records", "HR Admin"],
    reviewed: "Reviewed Aug 2024",
  },
  {
    type: "Core Guide",
    status: "Current",
    title: "Planning an onboarding workflow end-to-end",
    tags: ["Plan onboarding", "HR Leader"],
    reviewed: "Reviewed Aug 2024",
  },
  {
    type: "Reference",
    status: "Current",
    title: "Approval routing: request types and paths",
    tags: ["Route approvals", "HR Admin"],
    reviewed: "Reviewed Aug 2024",
  },
  {
    type: "Reference",
    status: "Current",
    title: "Managing multi-entity org context in Zoiko",
    tags: ["Manage global context", "HR Leader"],
    reviewed: "Reviewed Aug 2024",
  },
  {
    type: "Explainer",
    status: "Current",
    title: "Supporting managers with self-service tools",
    tags: ["Support managers", "Manager"],
    reviewed: "Reviewed Aug 2024",
  },
  {
    type: "Explainer",
    status: "Current",
    title: "People ops review cycles and audit trails",
    tags: ["Review operations", "HR Leader"],
    reviewed: "Reviewed Aug 2024",
  },
];

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-black/10 bg-white p-5">
      <div className="flex items-center gap-2">
        <span
          className={`rounded-md border px-2 py-0.5 font-heading text-xs font-semibold leading-4 tracking-wide ${TYPE_CLASS[guide.type]}`}
        >
          {guide.type}
        </span>
        <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold leading-4 text-emerald-500">
          {guide.status}
        </span>
      </div>

      <p className="font-heading text-base font-bold leading-5 text-slate-800">
        {guide.title}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {guide.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[20px] bg-blue-50 px-2.5 py-0.5 text-xs font-medium leading-4 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="text-xs leading-4 text-slate-500">
          {guide.reviewed}
        </span>
        <span className="text-xs font-semibold leading-5 text-primary">
          Open Guide →
        </span>
      </div>
    </div>
  );
}
