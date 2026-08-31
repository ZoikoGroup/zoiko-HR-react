export const EvaluationNextStepsSection = () => {
  const steps = [
    { title: "See the product", badge: "no signup", link: "Product Tour →" },
    { title: "Plan implementation", link: "Implementation Guide →" },
    { title: "Compare options", link: "Compare Zoiko HR →" },
    { title: "Review proof", link: "Customer Stories →" },
    { title: "Get current pricing", link: "Request Pricing →" },
    { title: "Get tailored evaluation", badge: "primary", link: "Book a Demo →" },
    { title: "Need customer help", link: "Help / Docs / Support →" }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Ready to evaluate Zoiko HR for your organization?</h2>
          <p className="text-[15px] text-slate-400">Choose the path that matches where you are in your evaluation.</p>
        </div>
        
        <div className="bg-[#0e1828] border border-white/10 rounded-2xl overflow-hidden mb-12 shadow-lg max-w-3xl mx-auto">
          {steps.map((step, i) => {
            const isPrimary = step.badge === 'primary';
            return (
              <div key={i} className={`flex justify-between items-center px-6 py-4 border-b border-white/5 last:border-b-0 transition-colors ${isPrimary ? 'bg-[#15233a]' : 'hover:bg-[#121f33]'}`}>
                <span className={`text-[14px] ${isPrimary ? 'text-white font-medium' : 'text-slate-300'}`}>
                  {step.title}
                </span>
                <div className="flex items-center gap-3">
                  {step.badge && (
                    <span className={`text-[11px] uppercase tracking-wider ${isPrimary ? 'text-slate-400 font-medium' : 'text-slate-500 font-medium'}`}>
                      {step.badge}
                    </span>
                  )}
                  <a href="#" className={`text-[13px] font-medium transition-colors ${isPrimary ? 'text-white' : 'text-blue-400 hover:text-blue-300'}`}>
                    {step.link}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <button className="px-8 py-3 bg-white text-slate-900 text-[14px] font-bold rounded-full hover:bg-slate-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Book a Demo
          </button>
          <button className="px-8 py-3 bg-transparent text-white border border-slate-600 text-[14px] font-medium rounded-full hover:bg-slate-800 transition-colors">
            Request Pricing
          </button>
          <a href="#" className="inline-flex items-center justify-center px-4 py-3 text-blue-400 text-[14px] font-medium hover:text-blue-300 transition-colors sm:ml-2 group">
            Take the Product Tour <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-[12px] text-slate-500">
            No urgency. No countdown. Your data is handled according to the Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
