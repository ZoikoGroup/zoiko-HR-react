export const IntegrationsSection = () => {
  const faqs = [
    { q: "Does Zoiko HR integrate with payroll systems?", a: "Zoiko HR connects to payroll providers through a defined integration layer. Specific provider availability is listed in integration documentation.", link: "Integration Docs" },
    { q: "Does Zoiko HR integrate with time and attendance systems?", a: "Yes — time and attendance data can flow between Zoiko HR and connected time systems via configured integration.", link: "Integration Docs" },
    { q: "Can Zoiko HR connect to finance or ERP systems?", a: "Finance and ERP connectors are available. Specific systems and data scope depend on configuration and subscription.", link: "Integration Docs" },
    { q: "Does Zoiko HR have an API?", a: "Yes — Zoiko HR exposes APIs for integration. API documentation is available through the developer documentation portal.", link: "API Docs" },
    { q: "Can third-party tools connect to Zoiko HR?", a: "Third-party integrations are supported within the defined integration framework. Availability varies by provider.", link: "Integration Docs" },
    { q: "Does Zoiko HR process payroll?", a: "No. Zoiko HR is a workforce-administration platform. Payroll calculation and processing is performed by connected payroll systems.", link: "Documentation" }
  ]

  const borderColors = [
    'border-emerald-400',
    'border-blue-500',
    'border-purple-500',
    'border-amber-500',
    'border-cyan-400',
    'border-rose-500'
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Integrations & connected operations.</h2>
          <p className="text-[15px] text-slate-400">How Zoiko HR connects to payroll, time, finance, and third-party systems.</p>
        </div>
        
        <div className="bg-[#111c2e] border border-white/5 rounded-xl overflow-hidden shadow-lg mb-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-6 border-b border-white/5 last:border-b-0 border-l-[3px] ${borderColors[i % borderColors.length]} hover:bg-[#152336] transition-colors`}>
              <div className="sm:w-3/4 pr-4 mb-4 sm:mb-0">
                <h3 className="text-[15px] font-bold text-white mb-1.5">{faq.q}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">{faq.a}</p>
              </div>
              <div className="flex flex-col sm:items-end w-full sm:w-auto">
                <a href="#" className="text-blue-500 hover:text-blue-400 font-medium text-[13px] mb-1 flex items-center group">
                  {faq.link} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="text-slate-500 text-[11px]">Reviewed Aug 2024</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#192b45] border border-white/5 rounded-xl p-7 shadow-lg">
          <h4 className="font-bold text-white text-[14px] mb-2">Connected HR-Time-Payroll boundary</h4>
          <p className="text-[13px] text-slate-400 leading-relaxed">
            Integration between Zoiko HR and a payroll system means workforce data flows across a defined interface. It does not imply payroll calculation, tax determination, filing or payment. Those functions belong to the connected payroll system and its governing authorities.
          </p>
        </div>
      </div>
    </section>
  )
}
