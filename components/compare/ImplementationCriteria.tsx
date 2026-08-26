import React from 'react';

export default function ImplementationCriteria() {
  const timelineSteps = [
    {
      step: '1',
      title: 'Discovery',
      description: 'Scope requirements, stakeholder needs and data audit.',
    },
    {
      step: '2',
      title: 'Configuration',
      description: 'System setup, custom fields and business rules.',
    },
    {
      step: '3',
      title: 'Data',
      description: 'Migration mapping, validation rules and transformation.',
    },
    {
      step: '4',
      title: 'Integration',
      description: 'Connection to existing systems, direction and error handling.',
    },
    {
      step: '5',
      title: 'Validation',
      description: 'UAT, data integrity checks and sign-off criteria.',
    },
    {
      step: '6',
      title: 'Launch',
      description: 'Cutover plan, rollback readiness and go-live support.',
    },
    {
      step: '7',
      title: 'Adoption',
      description: 'Training, change management and post-launch review.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Implementation
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            Implementation and migration criteria.
          </h2>
          <p className="text-slate-500 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mt-1">
            Seven-phase comparison map aligned to the Zoiko HR Implementation Guide.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-10 lg:gap-y-0 mb-12">
          {timelineSteps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              
              {/* Connector line - hidden on the last item, responsive hiding on grid breaks */}
              {index < timelineSteps.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-1/2 w-full h-0.5 bg-indigo-200 -z-10" />
              )}
              {/* Add partial connectors for md breakpoints */}
              {(index === 0 || index === 1 || index === 2 || index === 4 || index === 5) && (
                <div className="hidden md:block lg:hidden absolute top-4 left-1/2 w-full h-0.5 bg-indigo-200 -z-10" />
              )}
              {/* Add partial connectors for sm breakpoints */}
              {(index % 2 === 0 && index < 6) && (
                 <div className="block md:hidden absolute top-4 left-1/2 w-full h-0.5 bg-indigo-200 -z-10" />
              )}

              <div className="w-9 h-9 bg-blue-600 rounded-full flex justify-center items-center shrink-0 z-10">
                <span className="text-white text-sm font-bold font-['JetBrains_Mono'] leading-5">
                  {item.step}
                </span>
              </div>
              <div className="mt-3 flex flex-col items-center max-w-[112px]">
                <h3 className="text-slate-950 text-sm font-bold font-['Manrope'] leading-5 mb-1 text-center">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full p-5 bg-amber-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-amber-500 flex flex-col justify-start items-start">
          <p className="text-amber-800 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
            Timeline rule: Do not compare &quot;go live in X weeks&quot; without current equivalent evidence and material scope qualifiers.
          </p>
        </div>

      </div>
    </section>
  );
}
