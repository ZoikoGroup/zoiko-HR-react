import React from 'react';

export default function CriterionTaxonomy() {
  const taxonomyItems = [
    {
      title: 'Platform scope',
      description: 'What does the platform cover end-to-end?',
      bullets: ['Module coverage', 'Deployment model', 'Multi-tenant'],
      borderColor: 'border-blue-600',
    },
    {
      title: 'Roles & governance',
      description: 'How are permissions and audit evidence managed?',
      bullets: ['Permission model', 'Audit trail', 'Approval evidence'],
      borderColor: 'border-emerald-400',
    },
    {
      title: 'Integrations',
      description: 'How are integrations authoritative and resilient?',
      bullets: ['Direction authority', 'Conflict handling', 'Event model'],
      borderColor: 'border-teal-400',
    },
    {
      title: 'Trust & support',
      description: 'What security, privacy and support evidence exists?',
      bullets: ['Certifications', 'Privacy controls', 'SLA evidence'],
      borderColor: 'border-red-400',
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Criterion taxonomy
          </span>
          <h2 className="text-white text-3xl font-bold font-['Manrope'] leading-9">
            What we compare: criterion taxonomy.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mt-1">
            Stable criteria with definitions.
          </p>
        </div>

        {/* Content Layout (List + Image) */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mb-10">
          
          {/* Left Column: Taxonomy List */}
          <div className="flex-1 flex flex-col gap-6">
            {taxonomyItems.map((item, index) => (
              <div 
                key={index}
                className={`w-full p-5 bg-sky-950 rounded-r-xl border-l-2 ${item.borderColor} flex flex-col justify-start items-start`}
              >
                <h3 className="text-white text-base font-bold font-['Manrope'] leading-6 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {item.bullets.map((bullet, idx) => (
                    <span 
                      key={idx} 
                      className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 flex items-center gap-1"
                    >
                      <span>&middot;</span> {bullet}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image Container */}
          <div className="flex-1 min-h-[300px] lg:min-h-full bg-sky-950 rounded-r-xl border-l-2 border-violet-400 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover object-left absolute inset-0" 
              src="https://placehold.co/734x477" 
              alt="Criterion Taxonomy Visual" 
            />
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
          Criteria are stable and versioned — comparison cannot change the test after results are known.
        </p>

      </div>
    </section>
  );
}
