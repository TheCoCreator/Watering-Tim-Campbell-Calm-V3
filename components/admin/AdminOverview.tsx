import React from 'react';
import { Calendar, PenTool, Mail, Users } from 'lucide-react';
import { SessionReplay, CalmTool, WeeklyAutomation } from '../../data/memberContent';

interface AdminOverviewProps {
  sessions: SessionReplay[];
  tools: CalmTool[];
  automations: WeeklyAutomation[];
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ sessions, tools, automations }) => {
  const upcomingSession = sessions.find(s => s.isUpcoming);
  const activeAutomations = automations.filter(a => a.active).length;

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Overview</h1>
        <p className="text-slate-600">This is a high-level snapshot to help you see what’s set up for this week.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Next Session Card */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-slate-500 uppercase text-xs font-bold tracking-wider">
              <Calendar className="w-4 h-4" />
              Next Live Session
            </div>
            {upcomingSession ? (
                <>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{upcomingSession.title}</h3>
                    <p className="text-slate-600 mb-4">{upcomingSession.date}</p>
                    {upcomingSession.zoomLink && (
                        <a href={upcomingSession.zoomLink} target="_blank" rel="noreferrer" className="text-sm text-teal-700 font-medium hover:underline">
                            Open Zoom Link &rarr;
                        </a>
                    )}
                </>
            ) : (
                <p className="text-slate-400 italic">No upcoming session scheduled.</p>
            )}
        </div>

        {/* Library Stats */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-500 uppercase text-xs font-bold tracking-wider">
              <PenTool className="w-4 h-4" />
              Content Library
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Sessions</span>
                    <span className="font-bold text-slate-900">{sessions.length}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Tools</span>
                    <span className="font-bold text-slate-900">{tools.length}</span>
                </div>
            </div>
        </div>

        {/* Automations Stats */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-500 uppercase text-xs font-bold tracking-wider">
              <Mail className="w-4 h-4" />
              Automations
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold text-slate-900">{activeAutomations} <span className="text-base font-normal text-slate-400">/ {automations.length}</span></p>
                <p className="text-sm text-slate-500">Active triggers</p>
            </div>
        </div>

      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
          <Users className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
              <p className="text-blue-900 font-medium text-sm">Member Activity</p>
              <p className="text-blue-700 text-sm">Recent logins and activity would appear here in a real connected app.</p>
          </div>
      </div>
    </div>
  );
};