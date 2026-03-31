import React, { useState } from 'react';
import { PenTool, Plus, Trash2, Edit2 } from 'lucide-react';
import { CalmTool } from '../../data/memberContent';

interface AdminToolsProps {
  tools: CalmTool[];
  onToolsChange: (tools: CalmTool[]) => void;
}

export const AdminTools: React.FC<AdminToolsProps> = ({ tools, onToolsChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTool, setNewTool] = useState<Partial<CalmTool>>({});

  const handleAddTool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTool.title || !newTool.shortDescription) return;

    const tool: CalmTool = {
      id: Date.now().toString(),
      title: newTool.title,
      shortDescription: newTool.shortDescription,
      tag: newTool.tag || 'General',
      audioUrl: newTool.audioUrl,
      pdfUrl: newTool.pdfUrl,
      notes: newTool.notes
    };

    onToolsChange([...tools, tool]);
    setNewTool({});
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this tool?")) {
        onToolsChange(tools.filter(t => t.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-end">
        <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Calm Anchor Tools</h1>
            <p className="text-slate-600">Edit your weekly tools and add new resets as your library grows.</p>
        </div>
        <button 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
            <Plus className="w-4 h-4" /> New Tool
        </button>
      </header>

      {/* Add Tool Form */}
      {isAdding && (
          <div className="bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4">New Tool Details</h3>
            <form onSubmit={handleAddTool} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="Tool Title" value={newTool.title || ''} onChange={e => setNewTool({...newTool, title: e.target.value})} required />
                    <input className="border p-2 rounded" placeholder="Tag (e.g. On Shift)" value={newTool.tag || ''} onChange={e => setNewTool({...newTool, tag: e.target.value})} />
                </div>
                <textarea className="border p-2 rounded w-full" placeholder="Short description" value={newTool.shortDescription || ''} onChange={e => setNewTool({...newTool, shortDescription: e.target.value})} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="Audio URL (placeholder)" value={newTool.audioUrl || ''} onChange={e => setNewTool({...newTool, audioUrl: e.target.value})} />
                    <input className="border p-2 rounded" placeholder="PDF URL (placeholder)" value={newTool.pdfUrl || ''} onChange={e => setNewTool({...newTool, pdfUrl: e.target.value})} />
                </div>
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 text-slate-500">Cancel</button>
                    <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Save to Library</button>
                </div>
            </form>
          </div>
      )}

      <div className="grid grid-cols-1 gap-4">
          {tools.map(tool => (
              <div key={tool.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded uppercase font-bold">{tool.tag}</span>
                        <h3 className="font-bold text-lg text-slate-900">{tool.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-2">{tool.shortDescription}</p>
                      <div className="text-xs text-slate-400 flex gap-3">
                          {tool.audioUrl && <span>Has Audio</span>}
                          {tool.pdfUrl && <span>Has PDF</span>}
                      </div>
                  </div>
                  <div className="flex gap-2">
                      <button className="p-2 text-slate-400 hover:text-slate-900" title="Edit (Demo only)"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(tool.id)} className="p-2 text-slate-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};