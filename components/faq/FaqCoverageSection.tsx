export const FaqCoverageSection = () => {
  const coverage = [
    { title: "What is / how does it work", owns: "Core product answer", authority: "Product / Documentation" },
    { title: "Can it support our global context", owns: "General capability", authority: "Zoiko HR for your region" },
    { title: "Which integrations / providers", owns: "Integration categories", authority: "Integration documentation" },
    { title: "Is it secure / compliant", owns: "Framework overview", authority: "Trust Center / DPA" },
    { title: "How long / how much", owns: "Factors + process", authority: "Implementation Guide / Pricing" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            What this FAQ covers — and where it routes.
          </h2>
          <div className="border-l-[3px] border-blue-500 pl-4 py-1">
            <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl">
              This FAQ provides direct, reviewed answers to common questions about Zoiko HR. Where detail changes by configuration, region, or contract, it routes you to the authoritative source rather than overstating a fixed answer.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {coverage.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm transition-shadow hover:shadow-md">
              <div className="p-4 bg-white min-h-[4rem] flex items-center">
                <h3 className="font-semibold text-slate-900 text-[14px]">{item.title}</h3>
              </div>
              
              <div className="px-4 py-3 bg-[#f2faf3] border-t border-slate-100 text-[13px]">
                <span className="text-green-700 font-medium">FAQ owns:</span> <span className="text-green-800">{item.owns}</span>
              </div>
              
              <div className="px-4 py-3 bg-[#f2f7fd] border-t border-slate-100 text-[13px]">
                <span className="text-blue-700 font-medium">Authority:</span> <span className="text-blue-800">{item.authority}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-[13px] text-slate-400 italic">
          Professional boundary: Zoiko HR software does not provide legal, tax, payroll, employment, or compliance advice.
        </p>
      </div>
    </section>
  )
}
