import Image from "next/image"

export const SharedPrinciples = () => {
  const principles = [
    { title: "Customer Clarity", desc: "All group communications prioritize accuracy and verifiability over promotional appeal. Material claims require source, owner, and review date.", color: "bg-blue-600" },
    { title: "Security-by-Design", desc: "Security requirements are defined per product and service. This principle governs design and development standards, not certification status.", color: "bg-rose-500" },
    { title: "Accessibility", desc: "Accessibility requirements apply across group products and communications. WCAG 2.2 AA is the baseline standard.", color: "bg-cyan-500" },
    { title: "Accountable Change Management", desc: "Material changes to portfolio, facts, and public claims follow a governed workflow with source validation before publication.", color: "bg-amber-500" },
  ]

  const renderCard = (p: typeof principles[0]) => (
    <div className="bg-white rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 p-6 flex flex-col h-full hover:border-slate-300 transition-colors">
      <div className={`w-2 h-2 rounded-full mb-4 ${p.color}`}></div>
      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{p.title}</h3>
      <p className="text-[13px] text-slate-500 leading-relaxed flex-grow">{p.desc}</p>
      <p className="text-[11px] text-slate-400 italic mt-4">A commitment; not a certification or compliance guarantee.</p>
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
          Shared operating principles.
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex-1">{renderCard(principles[0])}</div>
            <div className="flex-1">{renderCard(principles[2])}</div>
          </div>
          
          <div className="relative w-full min-h-[400px] lg:min-h-0 h-full rounded-[16px] overflow-hidden shadow-sm">
            <Image 
              src="/images/about-group/SharedPrinciples.png" 
              alt="Shared Principles" 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex-1">{renderCard(principles[1])}</div>
            <div className="flex-1">{renderCard(principles[3])}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
