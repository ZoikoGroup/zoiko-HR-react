"use client"
import { useState } from "react"

export const RoleQuestionsSection = () => {
  const roles = [
    { name: "Employee", dot: "bg-emerald-400" },
    { name: "Manager", dot: "bg-blue-500" },
    { name: "HR Teams", dot: "bg-purple-400" },
    { name: "Approver", dot: "bg-amber-500" },
    { name: "Delegated", dot: "bg-cyan-400" }
  ]
  const [activeRole, setActiveRole] = useState("Employee")
  
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fc]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Employee, manager & HR role questions.</h2>
          <p className="text-[15px] text-slate-500">What each role can see and do in Zoiko HR.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {roles.map((role, i) => (
            <button 
              key={i} 
              onClick={() => setActiveRole(role.name)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors flex items-center gap-2 border ${activeRole === role.name ? 'bg-white border-slate-300 text-slate-900 shadow-sm' : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white'}`}
            >
              <div className={`w-2 h-2 rounded-full ${role.dot}`}></div>
              {role.name}
            </button>
          ))}
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 p-6 flex flex-col">
            <h3 className="font-bold text-[14px] text-slate-900 mb-2.5">What can employees access in Zoiko HR?</h3>
            <p className="text-slate-600 text-[13px] leading-relaxed">Employees access their own profile, absence requests, time records, and any self-service features enabled by their HR team.</p>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 p-6 flex flex-col">
            <h3 className="font-bold text-[14px] text-slate-900 mb-2.5">Can employees update their own records?</h3>
            <p className="text-slate-600 text-[13px] leading-relaxed">Self-service editing is configurable. What employees can edit depends on their organisation's configuration.</p>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 p-6 flex flex-col">
            <h3 className="font-bold text-[14px] text-slate-900 mb-2.5">How do employees submit absence requests?</h3>
            <p className="text-slate-600 text-[13px] leading-relaxed">Absence requests are submitted through the employee self-service portal, subject to configured approval workflows.</p>
          </div>
        </div>
        
        <div className="bg-[#fffdf2] border border-amber-300 rounded-[12px] p-5">
          <p className="text-[13px] text-amber-800">
            A role title does not equal unrestricted permission. Access is always scope, configuration and context dependent.
          </p>
        </div>
      </div>
    </section>
  )
}
