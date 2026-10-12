import Image from "next/image"

export const BrowseByTopicSection = () => {
  const leftTopics = [
    { 
      title: "Product & Platform", 
      count: "6 questions", 
      desc: "Core capabilities, modules, and platform behaviour.", 
      dotColor: "bg-blue-500", 
      dotGlow: "shadow-[0_0_12px_rgba(59,130,246,0.6)]" 
    },
    { 
      title: "Implementation", 
      count: "6 questions", 
      desc: "Onboarding phases, timelines, and adoption support.", 
      dotColor: "bg-amber-500", 
      dotGlow: "shadow-[0_0_12px_rgba(245,158,11,0.6)]" 
    }
  ]
  
  const rightTopics = [
    { 
      title: "Security & Privacy", 
      count: "6 questions", 
      desc: "Data protection, access controls, and compliance frameworks.", 
      dotColor: "bg-rose-400", 
      dotGlow: "shadow-[0_0_12px_rgba(251,113,133,0.6)]" 
    },
    { 
      title: "Support", 
      count: "6 questions", 
      desc: "Help Center, documentation, and service status.", 
      dotColor: "bg-emerald-400", 
      dotGlow: "shadow-[0_0_12px_rgba(52,211,153,0.6)]" 
    }
  ]

  type Topic = { title: string; count: string; desc: string; dotColor: string; dotGlow: string };
  const Card = ({ topic }: { topic: Topic }) => (
    <div className="bg-[#213149] rounded-[20px] p-7 hover:bg-[#283a54] transition-colors cursor-pointer h-full flex flex-col">
      <div className="w-10 h-10 rounded-full bg-slate-900/30 flex items-center justify-center mb-6">
        <div className={`w-2.5 h-2.5 rounded-full ${topic.dotColor} ${topic.dotGlow}`}></div>
      </div>
      <h3 className="font-semibold text-white text-[15px] mb-2">{topic.title}</h3>
      <div className="mb-4">
        <span className="inline-block px-2.5 py-0.5 bg-blue-500/15 text-blue-300 text-[11px] font-medium rounded-full">
          {topic.count}
        </span>
      </div>
      <p className="text-[13px] text-slate-400 leading-relaxed mt-auto">{topic.desc}</p>
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Browse by topic.</h2>
          <p className="text-[15px] text-slate-400">Select a topic to explore its FAQ set.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          <div className="flex flex-col gap-5">
            {leftTopics.map((topic, i) => <Card key={i} topic={topic} />)}
          </div>
          
          <div className="relative w-full min-h-[300px] lg:min-h-0 rounded-[24px] overflow-hidden">
            <Image 
              src="/images/faq/FAQBrowse.png" 
              alt="Browse Topics" 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-5">
            {rightTopics.map((topic, i) => <Card key={i} topic={topic} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
