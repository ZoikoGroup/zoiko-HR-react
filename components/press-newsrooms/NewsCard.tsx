import type { NewsItem, NewsType } from "./newsData";

const TYPE_STYLES: Record<NewsType, string> = {
  Announcement: "border-indigo-200 bg-indigo-50 text-blue-900",
  "Press Release": "border-green-300 bg-green-50 text-green-800",
  "External Coverage": "border-slate-300 bg-slate-50 text-slate-500",
};

const READ_LABEL: Record<NewsType, string> = {
  Announcement: "Read →",
  "Press Release": "Read press release →",
  "External Coverage": "Read external coverage ↗",
};

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase leading-4 tracking-wide ${TYPE_STYLES[item.type]}`}
          >
            {item.type}
          </span>
          {item.outlet && (
            <span className="text-xs font-medium leading-4 text-slate-400">via {item.outlet}</span>
          )}
        </div>
        <time className="text-xs leading-4 text-slate-400">{item.date}</time>
      </div>

      <h3 className="text-base font-extrabold leading-6 text-ink">{item.title}</h3>
      <p className="text-sm leading-6 text-slate-500">{item.summary}</p>

      <ul className="flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <li
            key={topic}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs leading-4 text-slate-400"
          >
            {topic}
          </li>
        ))}
      </ul>

      {item.correction && (
        <div className="flex gap-2.5 rounded-lg border border-orange-300 bg-orange-50 px-3.5 py-2.5 text-xs leading-4 text-yellow-800">
          <span aria-hidden>⚠</span>
          <div>
            <p className="font-bold">Correction · {item.correction.date}</p>
            <p className="mt-0.5">{item.correction.text}</p>
          </div>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs leading-4 text-slate-300">Zoiko HR</span>
        {/* No article pages exist yet, so the read link stays non-interactive. */}
        <span className="text-xs font-semibold leading-5 text-primary">{READ_LABEL[item.type]}</span>
      </div>
    </article>
  );
}
