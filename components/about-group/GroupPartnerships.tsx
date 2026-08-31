import Image from "next/image"

export const GroupPartnerships = () => {
  const partnerships = [
    { icon: "🔗", title: "Technology & Integration", desc: "Technology organizations building integrations or connections with Zoiko Group products.", link: "Explore partnerships →" },
    { icon: "🏛️", title: "Strategic & Institutional", desc: "Institutional, academic, or strategic relationship inquiries for the broader group.", link: "Explore partnerships →" }
  ]

  const renderCard = (p: typeof partnerships[0]) => (
    <div className="bg-white border border-slate-200 rounded-[20px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col h-full hover:border-slate-300 transition-colors">
      <div className="text-[28px] mb-6 opacity-80 grayscale">{p.icon}</div>
      <h3 className="text-[16px] font-bold text-slate-900 mb-3">{p.title}</h3>
      <p className="text-[13px] text-slate-500 leading-relaxed flex-grow mb-8">{p.desc}</p>
      <a href="#" className="text-[13px] font-bold text-blue-600 hover:text-blue-800 flex items-center">{p.link}</a>
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            For partners and ecosystem — how external organizations engage.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div>
            {renderCard(partnerships[0])}
          </div>
          
          <div className="relative w-full h-full min-h-[300px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-sm">
            <Image 
              src="/images/about-group/Partnerships.png" 
              alt="Group Partnerships" 
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            {renderCard(partnerships[1])}
          </div>
        </div>

        <p className="text-[12px] text-slate-400 italic mt-8">
          Partnership applications and program details are managed through the Partners destination. No application form is available on this page.
        </p>
      </div>
    </section>
  )
}
