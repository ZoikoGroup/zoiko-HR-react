export const ImplementationAdoptionSection = () => {
  const phases = [
    { num: "1", name: "Discovery" },
    { num: "2", name: "Configuration" },
    { num: "3", name: "Data" },
    { num: "4", name: "Integration" },
    { num: "5", name: "Validation" },
    { num: "6", name: "Launch" },
    { num: "7", name: "Adoption" }
  ]

  const faqs = [
    { phase: "Discovery", q: "How long does implementation take?", a: "Implementation duration depends on approved scope, systems, services, contract, and jurisdiction. No universal timeline applies.", link: "Implementation Guide" },
    { phase: "Configuration", q: "What is involved in configuring Zoiko HR?", a: "Configuration covers org structure, workflows, approval chains, policies, and role assignments, scoped to contracted modules.", link: "Implementation Guide" },
    { phase: "Data", q: "How is historical data migrated?", a: "Data migration scope and method is agreed during the discovery phase and executed according to the data migration plan.", link: "Implementation Guide" },
    { phase: "Integration", q: "What integrations are set up during implementation?", a: "Integrations in scope are identified, configured, and tested as part of the integration workstream within the agreed project plan.", link: "Implementation Guide" },
    { phase: "Validation", q: "How is the system validated before launch?", a: "Validation includes user acceptance testing, data verification, and process walkthroughs against agreed acceptance criteria.", link: "Implementation Guide" },
    { phase: "Adoption", q: "What support is available after go-live?", a: "Post-launch adoption support is defined in the contract. Ongoing support is accessed through Help Center and Support channels.", link: "Help Center" }
  ]

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Implementation & adoption.</h2>
          <p className="text-[15px] text-slate-500">How Zoiko HR is deployed and adopted in your organisation.</p>
        </div>
        
        <div className="mb-8 w-full max-w-3xl">
          <div className="relative flex justify-between items-start">
            <div className="absolute top-4 left-0 w-full h-[1px] bg-slate-200 z-0"></div>
            {phases.map((phase, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 w-16">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-[13px] shadow-[0_0_0_6px_white] mb-2">
                  {phase.num}
                </div>
                <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">{phase.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#fffdf2] border border-amber-300 rounded-[12px] px-5 py-4 w-full mb-10">
          <p className="text-[14px] text-amber-800">
            No universal duration — timing depends on approved scope, systems, services, contract and jurisdiction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 p-6 flex flex-col transition-shadow hover:shadow-md">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-[14px] font-bold text-slate-900">{faq.q}</h3>
                <span className="inline-block px-2.5 py-0.5 bg-[#f0f5ff] text-blue-600 text-[11px] font-medium rounded-full shrink-0 border border-blue-100">
                  {faq.phase}
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed mb-6 flex-grow">{faq.a}</p>
              <div className="mt-auto">
                <a href="#" className="text-[12px] text-blue-500 hover:text-blue-700 font-medium flex items-center group w-fit">
                  {faq.link} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
