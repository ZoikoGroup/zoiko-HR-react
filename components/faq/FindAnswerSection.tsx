"use client"
import { useState } from "react"

export const FindAnswerSection = () => {
  const categories = ["All", "Product", "Global", "Integrations", "Security", "Implementation", "Pricing", "Roles"]
  const [activeTab, setActiveTab] = useState("Product")

  const faqs = [
    { q: "What is Zoiko HR?", a: "Zoiko HR is a workforce-administration platform for managing employee records, time, absence, and connected operations.", category: "Product" },
    { q: "Is Zoiko HR a cloud platform?", a: "Yes — Zoiko HR is delivered as a cloud-hosted service with no on-premise installation required.", category: "Product" },
    { q: "What modules does Zoiko HR include?", a: "Core modules cover employee records, org structure, time and attendance, absence, and reporting.", category: "Product" },
    { q: "Can administrators configure the platform?", a: "Yes — configuration options span workflows, approval chains, fields, and role-based access controls.", category: "Product" },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe] border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">Find an answer.</h2>
          
          <div className="mb-5">
            <input 
              type="text" 
              placeholder="Search questions..." 
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 shadow-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors border ${activeTab === cat ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:justify-between gap-6 transition-shadow hover:shadow-md">
              <div className="sm:w-3/4">
                <h3 className="font-bold text-slate-900 mb-2 text-[15px]">{faq.q}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
              
              <div className="flex flex-col items-start sm:items-end justify-between min-w-[140px] pt-1 sm:pt-0">
                <div className="flex flex-col items-start sm:items-end gap-1.5 mb-6 sm:mb-0">
                  <span className="inline-block px-2.5 py-1 bg-[#f0f5ff] text-blue-700 rounded-md text-[11px] font-semibold tracking-wide border border-blue-100">
                    {faq.category}
                  </span>
                  <span className="text-[11px] text-slate-400">Reviewed Aug 2024</span>
                </div>
                <a href="#" className="text-[13px] text-blue-500 hover:text-blue-700 font-medium flex items-center group">
                  View answer <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
          <span className="text-slate-500">Can&apos;t find it? Browse</span>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Documentation</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Help Center</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Contact Support</a>
        </div>
      </div>
    </section>
  )
}
