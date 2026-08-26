import React from 'react';

export default function TrustCriteria() {
  const criteriaCards = [
    {
      title: 'Security',
      icon: '🛡',
      iconBg: 'bg-red-400',
      items: [
        'SOC 2 Type II',
        'Encryption at rest and in transit',
        'Penetration testing cadence',
        'Vulnerability disclosure policy',
      ],
    },
    {
      title: 'Privacy',
      icon: '🔒',
      iconBg: 'bg-indigo-400',
      items: [
        'GDPR article compliance',
        'Data residency options',
        'Retention and deletion policy',
        'DPA availability',
      ],
    },
    {
      title: 'Accessibility',
      icon: '👁',
      iconBg: 'bg-emerald-400',
      items: [
        'WCAG 2.1 AA conformance',
        'Assistive technology testing',
        'Accessibility statement date',
        'Remediation process',
      ],
    },
    {
      title: 'AI Governance',
      icon: '🧠',
      iconBg: 'bg-violet-400',
      items: [
        'AI feature disclosure',
        'Training data policy',
        'Human review pathways',
        'AI ethics documentation',
      ],
    },
  ];

  return (
    <section className="w-full bg-slate-100 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-10 w-full">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Trust criteria
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            Trust, security, privacy and AI governance criteria.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {criteriaCards.map((card, index) => (
            <div 
              key={index} 
              className="w-full p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start"
            >
              {/* Card Header */}
              <div className={`w-10 h-10 ${card.iconBg} rounded-full flex justify-center items-center mb-4 shrink-0`}>
                <span className="text-white text-lg font-normal font-['Inter'] leading-7">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-slate-950 text-base font-bold font-['Manrope'] leading-6 mb-3">
                {card.title}
              </h3>
              
              {/* List Items */}
              <ul className="flex flex-col gap-1 w-full mb-6">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <span className="text-emerald-400 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                      &middot;
                    </span>
                    <span className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Card Footer */}
              <div className="w-full pt-4 border-t border-black/10 flex items-center gap-2 mt-auto">
                <span className="px-2 py-0.5 bg-emerald-400 rounded-full text-green-950 text-xs font-semibold font-['Inter'] leading-4">
                  Verified current
                </span>
                <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
                  See Trust Center
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Alert */}
        <div className="w-full px-5 py-4 bg-blue-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-600 flex flex-col justify-start items-start">
          <p className="text-blue-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
            Software comparison does not establish legal compliance or substitute professional review.
          </p>
        </div>

      </div>
    </section>
  );
}
