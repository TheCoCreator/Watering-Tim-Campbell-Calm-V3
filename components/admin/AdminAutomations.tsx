import React from 'react';
import { ToggleLeft, ToggleRight, Clock } from 'lucide-react';
import { WeeklyAutomation } from '../../data/memberContent';

interface AdminAutomationsProps {
  automations: WeeklyAutomation[];
  onAutomationsChange: (autos: WeeklyAutomation[]) => void;
}

export const AdminAutomations: React.FC<AdminAutomationsProps> = ({ automations, onAutomationsChange }) => {

  const toggleAutomation = (id: string) => {
    onAutomationsChange(automations.map(a => 
        a.id === id ? { ...a, active: !a.active } : a
    ));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Weekly Automations</h1>
        <p className="text-slate-600">Configure reminder emails and follow-up messages.</p>
      </header>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> In a real app, these settings would connect to your email tool (Kajabi, ConvertKit, etc.) and a job scheduler.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automations.map(auto => (
              <div key={auto.id} className={`p-6 rounded-xl border-2 transition-all ${auto.active ? 'bg-white border-teal-500 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-75'}`}>
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg text-slate-900">{auto.name}</h3>
                      <button onClick={() => toggleAutomation(auto.id)} className="text-slate-900 focus:outline-none">
                          {auto.active ? <ToggleRight className="w-8 h-8 text-teal-600" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
                      </button>
                  </div>
                  <p className="text-slate-600 mb-6 min-h-[3rem]">{auto.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 py-2 px-3 rounded inline-block">
                      <Clock className="w-4 h-4" />
                      Trigger: <span className="font-mono font-bold text-slate-700">{auto.timing}</span>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};