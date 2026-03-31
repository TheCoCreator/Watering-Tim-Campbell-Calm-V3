import React, { useState } from 'react';
import { Calendar, Video, Clock, CheckCircle2, XCircle, Plus } from 'lucide-react';
import { SessionReplay } from '../../data/memberContent';

interface AdminSessionsProps {
  sessions: SessionReplay[];
  onSessionsChange: (sessions: SessionReplay[]) => void;
}

export const AdminSessions: React.FC<AdminSessionsProps> = ({ sessions, onSessionsChange }) => {
  // Simple form state for adding a new event
  const [newEvent, setNewEvent] = useState({
    date: '',
    time: '',
    title: '',
    description: '',
    zoomLink: ''
  });

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const newSession: SessionReplay = {
      id: Date.now().toString(),
      title: newEvent.title,
      date: `${newEvent.date} @ ${newEvent.time}`,
      description: newEvent.description,
      duration: "60 min",
      isUpcoming: true,
      zoomLink: newEvent.zoomLink
    };

    onSessionsChange([newSession, ...sessions]);
    setNewEvent({ date: '', time: '', title: '', description: '', zoomLink: '' });
    // TODO: Send to backend/calendar
  };

  const handleMarkComplete = (id: string) => {
    onSessionsChange(sessions.map(s => 
      s.id === id ? { ...s, isUpcoming: false } : s
    ));
  };

  const handleRemove = (id: string) => {
      if(window.confirm("Are you sure you want to remove this session?")) {
        onSessionsChange(sessions.filter(s => s.id !== id));
      }
  };

  return (
    <div className="space-y-10 animate-fade-in">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Sessions & Events</h1>
        <p className="text-slate-600">Create and update your live sessions and replay library.</p>
      </header>

      {/* Quick Add Event */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-teal-600" />
            Add next 911 Reset session
        </h2>
        <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input required type="date" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} className="w-full p-2 border border-slate-300 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
                <input required type="time" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} className="w-full p-2 border border-slate-300 rounded" />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Session Title</label>
                <input required type="text" placeholder="e.g. Grounding for the Holidays" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} className="w-full p-2 border border-slate-300 rounded" />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Zoom Link</label>
                <input type="text" placeholder="https://zoom.us/..." value={newEvent.zoomLink} onChange={e => setNewEvent({...newEvent, zoomLink: e.target.value})} className="w-full p-2 border border-slate-300 rounded" />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
                <textarea required rows={2} placeholder="What will this session cover?" value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} className="w-full p-2 border border-slate-300 rounded" />
            </div>
            <div className="md:col-span-2">
                <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    Add event
                </button>
            </div>
        </form>
      </section>

      {/* Upcoming Sessions List */}
      <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming</h2>
          <div className="space-y-4">
            {sessions.filter(s => s.isUpcoming).map(session => (
                <div key={session.id} className="bg-white p-4 rounded-lg border-l-4 border-teal-500 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="font-bold text-lg text-slate-900">{session.title}</h3>
                        <p className="text-slate-600 text-sm flex items-center gap-2">
                            <Calendar className="w-3 h-3" /> {session.date}
                            {session.zoomLink && <span className="text-teal-600 flex items-center gap-1 ml-2"><Video className="w-3 h-3" /> Zoom link set</span>}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => handleMarkComplete(session.id)} className="text-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Mark Completed
                        </button>
                        <button onClick={() => handleRemove(session.id)} className="text-sm border border-red-100 bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded">
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {sessions.filter(s => s.isUpcoming).length === 0 && (
                <p className="text-slate-400 italic">No upcoming sessions. Add one above.</p>
            )}
          </div>
      </section>

      {/* Past Sessions List */}
      <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Replay Library (Past)</h2>
          <div className="space-y-4">
            {sessions.filter(s => !s.isUpcoming).map(session => (
                <div key={session.id} className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="font-bold text-slate-900">{session.title}</h3>
                        <p className="text-slate-500 text-sm flex items-center gap-2">
                            <Clock className="w-3 h-3" /> {session.duration} • {session.date}
                        </p>
                    </div>
                    <button onClick={() => handleRemove(session.id)} className="text-sm text-slate-400 hover:text-red-500 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Remove
                    </button>
                </div>
            ))}
          </div>
      </section>
    </div>
  );
};