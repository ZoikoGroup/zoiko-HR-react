export const GroupAtAGlance = () => {
  const facts = [
    { label: "Focus Area", value: "HR & Workforce Software", desc: "Part of a broader portfolio", current: true },
    { label: "Portfolio type", value: "Multi-product Group", desc: "Independent entities with governance", current: true },
    { label: "Operational model", value: "Source-governed", desc: "Facts maintained via structured registry", current: true },
    { label: "Public status", value: "Active", desc: "Portfolio visible for evaluation", current: true },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
          Group at a glance — verified context.
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col hover:border-slate-300 transition-colors">
              <span className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-widest">{fact.label}</span>
              <p className="text-[18px] font-bold text-slate-900 mb-2 leading-tight">{fact.value}</p>
              <p className="text-[13px] text-slate-500 mb-6 flex-grow">{fact.desc}</p>
              {fact.current && (
                <div className="inline-flex w-fit items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Current
                </div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-[13px] text-slate-500 italic max-w-6xl">
          Material corporate facts such as employee count, revenue, customer volume, and founding details are maintained in a source-governed registry and published only when all required approvals and review dates are current.
        </p>
      </div>
    </section>
  )
}
