import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface AdminLoginGateProps {
  onAuthenticated: () => void;
}

export const AdminLoginGate: React.FC<AdminLoginGateProps> = ({ onAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [passphrase, setPassphrase] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace this demo admin login with real auth (e.g., Supabase/Firebase + Stripe webhooks + role checks).
    onAuthenticated();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Login</h1>
          <p className="text-slate-600 text-sm">
            Enter your admin passphrase to manage sessions, tools, and automations.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Admin Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
              placeholder="admin@calmanchor.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Admin Passphrase</label>
            <input
              type="password"
              required
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
          >
            Enter admin dashboard
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          In the real app, this would check your credentials and subscription in a backend.
        </p>
      </div>
    </div>
  );
};