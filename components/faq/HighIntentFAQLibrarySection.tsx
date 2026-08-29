"use client"

const SimpleFAQItem = ({ question }: { question: string }) => {
  return (
    <div className="border-b border-slate-100 last:border-b-0 bg-white">
      <button 
        className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-slate-50 transition-colors group"
      >
        <span className="font-bold text-[13px] text-slate-900">{question}</span>
        <span className="flex-shrink-0 text-blue-600 ml-4 group-hover:translate-x-1 transition-transform">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L0 8V0L6 4Z" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export const HighIntentFAQLibrarySection = () => {
  const productFaqs = [
    "What is Zoiko HR?",
    "Is Zoiko HR a cloud platform?",
    "Can Zoiko HR support multiple legal entities?",
    "Does Zoiko HR support multiple countries?",
    "Does Zoiko HR integrate with payroll systems?",
    "Does Zoiko HR have an API?"
  ]
  
  const securityFaqs = [
    "How does Zoiko HR protect employee data?",
    "Is Zoiko HR GDPR compliant?",
    "How long does implementation take?",
    "How is Zoiko HR priced?",
    "Is there a free trial?",
    "How do I get current pricing?"
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">High-intent FAQ library.</h2>
          <p className="text-[15px] text-slate-500">All primary FAQ entries with stable IDs and review dates.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-[14px] text-slate-900 mb-4">Product, Global & Integration</h3>
            <div className="bg-white rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 overflow-hidden flex flex-col">
              {productFaqs.map((q, i) => <SimpleFAQItem key={i} question={q} />)}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-[14px] text-slate-900 mb-4">Security, Implementation & Commercial</h3>
            <div className="bg-white rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 overflow-hidden flex flex-col">
              {securityFaqs.map((q, i) => <SimpleFAQItem key={i} question={q} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
