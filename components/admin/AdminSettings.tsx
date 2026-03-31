import React, { useState } from 'react';
import { Save } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const [notes, setNotes] = useState("Focus for next month: Introduce more somatic breathing.");

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings & Notes</h1>
      </header>

      <div className="max-w-2xl space-y-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Admin Notes</h3>
            <textarea 
                className="w-full border border-slate-200 rounded-lg p-4 min-h-[150px] focus:ring-2 focus:ring-slate-200 outline-none"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            <div className="flex justify-end mt-4">
                <button className="flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900">
                    <Save className="w-4 h-4" /> Save Notes
                </button>
            </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Integrations (Placeholder)</h3>
            <p className="text-slate-600 mb-4">
                Manage your connections to Stripe and Email providers here.
            </p>
            <button 
                onClick={() => alert("This would open your Stripe Dashboard")}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium transition-colors"
            >
                Open Stripe Dashboard
            </button>
        </section>
      </div>
    </div>
  );
};