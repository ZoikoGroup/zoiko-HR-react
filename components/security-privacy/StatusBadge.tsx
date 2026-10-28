const STATUS_STYLES: Record<string, string> = {
  Current: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  "Request Required": "border-blue-400/30 bg-blue-400/10 text-blue-500",
  Restricted: "border-rose-400/30 bg-rose-400/10 text-rose-400",
  Public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
        STATUS_STYLES[status] ?? "border-slate-200 bg-slate-100 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}
