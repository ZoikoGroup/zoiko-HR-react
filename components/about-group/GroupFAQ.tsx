"use client"
import { useState } from "react"

const FAQAccordion = ({ question }: { question: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-8">{question}</span>
        <svg 
          className={`w-5 h-5 text-slate-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 border-t border-slate-100 text-slate-600">
          <p className="pt-4">Answer detail goes here.</p>
        </div>
      )}
    </div>
  )
}

export const GroupFAQ = () => {
  const questions = [
    "What is Zoiko Group?",
    "How is Zoiko HR related to Zoiko Group?",
    "What is included in the Zoiko Group portfolio?",
    "Are Zoiko Group products bundled?",
    "Do Zoiko Group products share customer data?",
    "Where are official announcements published?",
    "Where can I find careers information?",
    "How can organizations explore partnerships?"
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">
            Corporate FAQ — direct answers.
          </h2>
        </div>
        
        <div className="space-y-4">
          {questions.map((q, i) => (
            <FAQAccordion key={i} question={q} />
          ))}
        </div>
      </div>
    </section>
  )
}
