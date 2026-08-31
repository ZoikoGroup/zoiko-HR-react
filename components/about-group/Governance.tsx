import React from "react"

export const Governance = () => {
  const workflow = [
    { step: "Source Owner", role: "Group Communications Owner" },
    { step: "Source Validation", role: "Portfolio Owner" },
    { step: "Legal / Trust Review", role: "Claim / Fact Owner" },
    { step: "Publisher Approval", role: "Accessibility Reviewer" },
    { step: "Scheduled Review", role: "Publisher" }
  ]

  const audiences = [
    { title: "Existing Customer", desc: "Understand adjacent approved capabilities and how the broader group provides governance consistency. No assumption of access to other products; each product operates independently.", link: "Explore portfolio →" },
    { title: "Enterprise Evaluator", desc: "Review group-level governance, ownership model, and operating principles as part of due diligence. Product-specific trust and security evidence belongs to the owning product destination.", link: "Zoiko HR Trust & Security →" },
    { title: "Prospective Buyer", desc: "Explore the relevant portfolio category before initiating a product conversation. This page provides group context; product capability details are on the owning product page.", link: "About Zoiko HR →" },
  ]

  return (
    <>
      <section className="py-20 md:py-32 bg-[#081121]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Governance & accountability — how corporate claims are controlled.
            </h2>
            <p className="text-[15px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Every material claim published by Zoiko Group follows a structured workflow. Source owners, validators, reviewers, and publishers are assigned before any fact reaches a public destination.
            </p>
          </div>
          
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              {workflow.map((w, i) => (
                <React.Fragment key={i}>
                  <div className="bg-[#132338] text-white font-medium text-[13px] px-6 py-3 rounded-xl border border-slate-700/50 shadow-sm">
                    {w.step}
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="text-blue-500 mx-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {workflow.map((w, i) => (
                <div key={`role-${i}`} className="bg-white/5 text-slate-400 px-4 py-1.5 rounded-full text-[12px] border border-white/5">
                  {w.role}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-[12px] text-slate-500 text-center mt-12">
            If a fact is disputed or under review, it is suppressed until resolved. Review dates are mandatory for all material claims.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              For customers and buyers — how group context is relevant to you.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((aud, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[20px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col hover:border-slate-300 transition-colors">
                <h3 className="text-[16px] font-bold text-slate-900 mb-4">{aud.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed flex-grow mb-8">{aud.desc}</p>
                <a href="#" className="text-[13px] font-bold text-blue-600 hover:text-blue-800 flex items-center">{aud.link}</a>
              </div>
            ))}
          </div>
          
          <p className="text-[12px] text-slate-400 mt-8">
            Do not interpret group-level governance consistency as a guarantee of equivalent capability across all products.
          </p>
        </div>
      </section>
    </>
  )
}
