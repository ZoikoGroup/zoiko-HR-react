export const GroupNextSteps = () => {
  const steps = [
    { icon: "🏢", title: "Explore Zoiko HR", desc: "Learn about the product mission, capabilities, and approach.", link: "About Zoiko HR →" },
    { icon: "👥", title: "Leadership", desc: "Accountable executives and governance structure.", link: "Company → Leadership →" },
    { icon: "🤝", title: "Partnerships", desc: "Technology, commercial, and strategic partner pathways.", link: "Company → Partners →" },
    { icon: "📰", title: "Newsroom", desc: "Official announcements and press publications.", link: "Company → Newsroom →" }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10 text-center">
          Where would you like to go next?
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#132338] border border-white/5 rounded-[20px] p-6 flex flex-col hover:bg-[#1a2c45] transition-colors cursor-pointer group shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="text-[24px] mb-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{step.icon}</div>
              <h3 className="text-[15px] font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
              <p className="text-[13px] text-slate-400 mb-8 flex-grow leading-relaxed">{step.desc}</p>
              <span className="text-[13px] font-bold text-blue-500 group-hover:text-blue-400">{step.link}</span>
            </div>
          ))}
        </div>
        
        <p className="text-[12px] text-slate-500 text-center">
          Careers destination is available through the Company navigation. No universal sales CTA is presented unless your intent is specifically commercial.
        </p>
      </div>
    </section>
  )
}
