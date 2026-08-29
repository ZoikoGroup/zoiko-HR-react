export const GlobalMultiEntitySection = () => {
  const faqs = [
    { q: "Can Zoiko HR support multiple legal entities?", a: "Yes — Zoiko HR supports a product hierarchy that organises employees across multiple entities within one deployment.", link: "Documentation" },
    { q: "Does Zoiko HR support multiple countries?", a: "Multi-country availability varies by region and configuration. Specific country availability is confirmed through a regional evaluation.", link: "Global Coverage" },
    { q: "Can different entities have separate configurations?", a: "Yes — configuration and policy can be scoped to entity level within the product hierarchy.", link: "Documentation" },
    { q: "Does Zoiko HR handle local compliance requirements?", a: "The platform provides configurable policy frameworks; applicability to specific local requirements is assessed during implementation.", link: "Implementation Guide" },
    { q: "Can employees transfer between entities within Zoiko HR?", a: "Entity transfer workflows are supported within the platform. Process detail depends on configured workflow and HR policy.", link: "Documentation" },
    { q: "Does the product hierarchy establish legal relationships?", a: "No. A product hierarchy is an administrative model within the software only.", link: "Documentation" }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fc] border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Global, multi-entity & local use.</h2>
          <p className="text-[15px] text-slate-500">Capability across borders, entities, and configurations.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col transition-shadow hover:shadow-md">
              <h3 className="text-[14px] font-bold text-slate-900 mb-3">{faq.q}</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-grow">{faq.a}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-[11px] text-blue-500 hover:text-blue-700 font-medium flex items-center group uppercase tracking-wider">
                  {faq.link} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="text-[11px] text-slate-400">Reviewed Aug 2024</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#fffdf2] border border-amber-300 rounded-xl p-5">
          <h4 className="font-bold text-amber-700 text-[13px] mb-1.5">Boundary</h4>
          <p className="text-[13px] text-slate-600">
            A product hierarchy is an administrative model; it does not by itself establish legal ownership, tax grouping, employer status or regulatory relationships.
          </p>
        </div>
      </div>
    </section>
  )
}
