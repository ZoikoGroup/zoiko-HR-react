import React from 'react';

export default function EvaluationQuestions() {
  const questions = [
    "How does each platform structure workforce and organization information?",
    "How are onboarding, workflows and approvals handled?",
    "How does global or multi-entity administration work?",
    "How are roles, permissions and evidence governed?",
    "How do integrations handle source authority and failures?",
    "What reporting and operational evidence is available?",
    "What does implementation, migration and validation involve?",
    "What trust, support and commercial information can be verified?",
  ];

  return (
    <section className="w-full bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start w-full">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider mb-3">
            Evaluation questions
          </span>
          <h2 className="text-white text-3xl font-bold font-['Manrope'] leading-9 mb-2">
            Start with your evaluation question.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            Select what matters to your organization — no account required.
          </p>
        </div>

        {/* Questions Grid */}
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {questions.map((question, index) => (
            <button 
              key={index}
              className="w-full p-4 bg-blue-950 hover:bg-blue-900 transition-colors rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-between items-start gap-3 group text-left"
            >
              <span className="flex-1 text-slate-200 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                {question}
              </span>
              <span className="text-indigo-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6 group-hover:translate-x-1 transition-transform shrink-0">
                &rarr;
              </span>
            </button>
          ))}
        </div>

        {/* Footer Note */}
        <div className="w-full mt-8 pt-6 border-t border-white/5">
          <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
            These questions filter criteria; they do not infer your company, role or eligibility.
          </p>
        </div>

      </div>
    </section>
  );
}
