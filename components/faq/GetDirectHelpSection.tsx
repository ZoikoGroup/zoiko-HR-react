import Image from "next/image"

export const GetDirectHelpSection = () => {
  const routes = [
    { icon: "🛟", title: "Help Center", desc: "Step-by-step troubleshooting and how-to guides.", link: "Go to Help Center" },
    { icon: "📦", title: "Product Updates", desc: "Shipped changes, release notes, and what is new.", link: "View Updates" },
    { icon: "🟢", title: "Service Status", desc: "Live and historical service health information.", link: "Check Status" },
    { icon: "🔑", title: "Sign In", desc: "Access your authenticated Zoiko HR workspace.", link: "Sign In" }
  ]

  const renderCard = (route: typeof routes[0]) => (
    <div className="bg-[#213149] rounded-[24px] p-8 flex flex-col h-full hover:bg-[#283a54] transition-colors">
      <div className="text-3xl mb-5">{route.icon}</div>
      <h3 className="font-bold text-white text-[16px] mb-2">{route.title}</h3>
      <p className="text-slate-400 text-[13px] leading-relaxed mb-6 flex-grow">{route.desc}</p>
      <a href="#" className="text-[13px] text-blue-500 hover:text-blue-400 font-medium flex items-center group mt-auto w-fit">
        {route.link} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Already using Zoiko HR? Get direct help.</h2>
          <p className="text-[15px] text-slate-400">Support routes are always accessible and never hidden by sales UI.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-6 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex-1">{renderCard(routes[0])}</div>
            <div className="flex-1">{renderCard(routes[2])}</div>
          </div>
          
          <div className="relative w-full min-h-[400px] lg:min-h-0 h-full rounded-[24px] overflow-hidden">
            <Image 
              src="/images/faq/FAQSupport.png" 
              alt="Support Routes" 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex-1">{renderCard(routes[1])}</div>
            <div className="flex-1">{renderCard(routes[3])}</div>
          </div>
        </div>
        
        <p className="text-[13px] text-slate-500 italic">
          Support routes appear before conversion and are never hidden by sales UI.
        </p>
      </div>
    </section>
  )
}
