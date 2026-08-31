import React from 'react';

export default function StatusDefinitions() {
  const statuses = [
    {
      label: 'Verified current',
      color: 'bg-emerald-400',
      textColor: 'text-green-950',
      description: 'Claim matches a current, dated, primary source.',
      example: 'Feature confirmed in current product docs.',
    },
    {
      label: 'Limited/conditional',
      color: 'bg-amber-500',
      textColor: 'text-amber-950',
      description: 'Claim is documented but subject to scope, plan or region conditions.',
      example: 'Available on Enterprise plan — not Standard.',
    },
    {
      label: 'Not verified',
      color: 'bg-slate-500',
      textColor: 'text-slate-50',
      description: 'No qualifying primary source was located at time of review.',
      example: 'Capability referenced but no source link found.',
    },
    {
      label: 'Not applicable',
      color: 'bg-blue-600',
      textColor: 'text-blue-50',
      description: 'Criterion does not apply to this product or use case.',
      example: 'Payroll criterion — platform does not include payroll.',
    },
    {
      label: 'Under review',
      color: 'bg-violet-400',
      textColor: 'text-violet-950',
      description: 'Source currency is being checked; status will be updated.',
      example: 'Source date exceeds review threshold — re-checking.',
    },
    {
      label: 'Source conflict',
      color: 'bg-red-400',
      textColor: 'text-red-950',
      description: 'Two qualifying sources contradict each other.',
      example: 'Pricing page differs from published data sheet.',
    },
    {
      label: 'Withdrawn',
      color: 'bg-sky-950',
      textColor: 'text-slate-200',
      description: 'A previously published claim has been retracted.',
      example: 'Feature removed in version update.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header */}
        <div className="flex flex-col mb-6 w-full">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider mb-3">
            Status definitions
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            How comparison status works — not binary yes or no.
          </h2>
        </div>

        {/* Status Legend (Pills) */}
        <div className="flex flex-wrap gap-2 mb-8 w-full">
          {statuses.map((status, index) => (
            <span 
              key={`legend-${index}`}
              className={`px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] leading-4 ${status.color} ${status.textColor}`}
            >
              {status.label}
            </span>
          ))}
        </div>

        {/* Detailed Status List / Table */}
        <div className="w-full rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col overflow-hidden mb-6">
          {statuses.map((status, index) => (
            <div 
              key={`row-${index}`}
              className={`w-full px-5 py-4 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 ${
                index !== statuses.length - 1 ? 'border-b border-black/10' : ''
              }`}
            >
              {/* Pill Column */}
              <div className="w-44 shrink-0">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] leading-4 ${status.color} ${status.textColor}`}>
                  {status.label}
                </span>
              </div>
              
              {/* Description Column */}
              <div className="flex-1">
                <p className="text-gray-700 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                  {status.description}
                </p>
              </div>

              {/* Example Column */}
              <div className="flex-1">
                <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
                  {status.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alert/Warning Callout */}
        <div className="w-full px-5 py-4 bg-amber-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-amber-500 flex flex-col justify-start items-start">
          <p className="text-amber-800 text-sm font-bold font-['Manrope'] leading-5">
            &quot;Not verified&quot; must never be rendered as &quot;No.&quot;
          </p>
        </div>

      </div>
    </section>
  );
}
