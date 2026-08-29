import Image from "next/image"

export const FreshnessAndSourcingSection = () => {
  const sources = [
    { name: "FAQ", owns: "Direct, reviewed answers", notOwn: "Not own commercial, legal, or compliance truth" },
    { name: "Product / Docs", owns: "Current feature behaviour", notOwn: "Not own pricing or legal advice" },
    { name: "Trust", owns: "Security, privacy, AI governance", notOwn: "Not own implementation scope" },
    { name: "Pricing", owns: "Current commercial terms", notOwn: "Not own product configuration detail" },
    { name: "Implementation", owns: "Project scope and timeline", notOwn: "Not own pricing or legal obligations" },
    { name: "Support / Status", owns: "Live issues and history", notOwn: "Not own product roadmap" }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">How answers are kept current.</h2>
          <p className="text-[15px] text-slate-500">Answer lifecycle and source interpretation.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative w-full min-h-[400px] lg:min-h-0 rounded-[24px] overflow-hidden">
            <Image 
              src="/images/faq/FAQSource.png" 
              alt="Source Interpretation Workflow" 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-[18px] text-slate-900 mb-5">Source interpretation</h3>
            
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#f9fafb] border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-4 font-semibold text-[13px] text-slate-900">Source</th>
                      <th className="px-5 py-4 font-semibold text-[13px] text-slate-900">Owns</th>
                      <th className="px-5 py-4 font-semibold text-[13px] text-slate-900">FAQ does not own</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sources.map((src, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-4 font-bold text-[13px] text-slate-900">{src.name}</td>
                        <td className="px-5 py-4 text-[13px] text-slate-600">{src.owns}</td>
                        <td className="px-5 py-4 text-[12px] text-slate-400">{src.notOwn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-[#f0f5ff] border border-blue-200 rounded-[12px] p-5">
              <span className="font-bold text-blue-700 text-[13px] block mb-1.5">Correction path</span>
              <p className="text-[13px] text-blue-600 leading-relaxed">
                Report an outdated answer → sends stable question ID and context. No sensitive free text required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
