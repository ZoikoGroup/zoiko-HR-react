import Image from "next/image"

export const PortfolioMap = () => {
  const entities = [
    { title: "Zoiko HR", role: "Group member", type: "HR Software", desc: "Workforce administration platform for global and multi-entity organizations.", status: "Live" },
    { title: "Zoiko HR Documentation", role: "Shared group service", type: "Shared Services", desc: "Official product documentation and implementation knowledge base for Zoiko HR.", status: "Live" },
    { title: "Zoiko HR Trust & Security", role: "Shared group service", type: "Shared Services", desc: "Centralized trust, privacy, and security documentation for Zoiko HR platform.", status: "Live" },
    { title: "Partner Integrations", role: "Approved connection", type: "Integrations", desc: "Approved third-party connections for payroll, time, and adjacent systems.", status: "Registry-governed" },
  ]

  const relations = [
    { title: "Independent product", desc: "Each product operates with its own identity, billing, data handling, and contracts. Using one Zoiko Group product does not grant access to another." },
    { title: "Approved connection", desc: "Some entities have an explicitly published integration or connection. These connections are formally documented, scoped, and maintained." },
    { title: "Shared group service", desc: "Certain infrastructure or documentation capabilities are shared across the group under a defined service relationship. These are not independently sold products." }
  ]

  const getRoleStyle = (role: string) => {
    switch (role) {
      case "Group member":
        return "bg-emerald-900/30 text-emerald-400 border border-emerald-500/20";
      case "Shared group service":
        return "bg-indigo-900/30 text-indigo-400 border border-indigo-500/20";
      case "Approved connection":
        return "bg-blue-900/30 text-blue-400 border border-blue-500/20";
      default:
        return "bg-slate-800 text-slate-300 border border-slate-700";
    }
  }

  const getStatusStyle = (status: string) => {
    if (status === "Live") {
      return "bg-emerald-900/30 text-emerald-400 border border-emerald-500/20";
    }
    return "bg-[#18263a] text-teal-500 border border-[#2a3c5a]";
  }

  const getRelationIconStyle = (title: string) => {
    switch(title) {
      case "Independent product":
        return { outer: "bg-emerald-50 border-emerald-100", inner: "bg-emerald-500" };
      case "Approved connection":
        return { outer: "bg-blue-50 border-blue-100", inner: "bg-blue-500" };
      case "Shared group service":
        return { outer: "bg-indigo-50 border-indigo-100", inner: "bg-indigo-500" };
      default:
        return { outer: "bg-slate-50 border-slate-200", inner: "bg-slate-500" };
    }
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Portfolio map — approved entities.
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {['All', 'HR Software', 'Shared Services', 'Integrations'].map((tag) => (
                <span 
                  key={tag} 
                  className={`px-5 py-1.5 rounded-full text-[13px] font-medium cursor-pointer transition-colors ${
                    tag === 'All' 
                      ? 'bg-blue-600 text-white border border-blue-600 shadow-lg shadow-blue-900/20' 
                      : 'bg-transparent border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {entities.map((entity, i) => (
              <div key={i} className="bg-[#213149] rounded-[20px] p-6 flex flex-col hover:bg-[#263750] transition-colors border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[16px] text-white pr-2">{entity.title}</h3>
                  <span className={`text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap ${getRoleStyle(entity.role)}`}>
                    {entity.role}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-[12px] text-teal-400 font-medium">{entity.type}</span>
                </div>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-6 flex-grow">{entity.desc}</p>
                <div className="mt-auto">
                  <span className={`text-[11px] font-medium px-3 py-1 rounded-full w-fit flex items-center ${getStatusStyle(entity.status)}`}>
                    {entity.status}
                  </span>
                </div>
              </div>
            ))}
            
            <div className="lg:col-span-2 relative h-full min-h-[200px] w-full rounded-[20px] overflow-hidden border border-white/5">
              <Image 
                src="/images/about-group/PortfolioMap.png" 
                alt="Portfolio Map" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#1a1512] border border-orange-500/20 rounded-xl p-5">
            <p className="text-[13px] text-orange-400/90 text-center md:text-left">
              A relationship type does not imply bundled access, common billing, shared identity, or shared customer data. Entitlement depends on the specific product contract.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
            How portfolio entities relate — and what that does not mean.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {relations.map((rel, i) => {
              const styles = getRelationIconStyle(rel.title);
              return (
                <div key={i} className="bg-white rounded-[20px] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col">
                  <div className={`w-10 h-10 rounded-full mb-5 flex items-center justify-center border ${styles.outer}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${styles.inner}`}></div>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-3">{rel.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{rel.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-[#f8fafe] border border-blue-100/50 rounded-xl p-5">
            <p className="text-[13px] text-slate-500 text-center md:text-left">
              Availability, data flow, identity, billing, and commercial entitlement depend on the owning product or service. No visual connection on this page implies access rights.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
