
import React from 'react';
import { Anchor } from 'lucide-react';

export const LifetimePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-amy-lightBlue flex flex-col font-sans text-slate-900 selection:bg-amy-gold/30">
        {/* Header */}
        <nav className="w-full py-12 flex justify-center">
            <div className="flex items-center gap-3 text-amy-navy opacity-60">
                <div className="w-6 h-6 bg-amy-navy text-white flex items-center justify-center rounded-md rotate-[-3deg] shadow-sm">
                    <Anchor className="w-3 h-3" />
                </div>
                <span className="font-sans font-bold text-sm tracking-widest uppercase">911 Calm Anchor</span>
            </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-start p-6">
            <div className="max-w-md w-full text-center space-y-10">
                
                <div className="space-y-6">
                    <h1 className="text-3xl font-serif text-amy-navy">
                        Lifetime Invite
                    </h1>
                    
                    <div className="space-y-4 text-slate-600 font-light leading-relaxed text-lg">
                        <p>For early supporters and staff.</p>
                        <p>
                            Weekly live calm reset.<br/>
                            Same Zoom link each week.<br/>
                            Reminders and replays.
                        </p>
                        <p className="text-sm pt-2 text-amy-navy font-medium">Enter your email to receive access.</p>
                    </div>
                </div>

                {/* Kit Embed */}
                <div className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-white">
                    <iframe 
                        src="https://thecalmanchor.kit.com/lifetime"
                        className="w-full h-[550px]"
                        frameBorder="0"
                        title="Lifetime Access"
                    ></iframe>
                </div>

                <div className="text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest opacity-60">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-40">
            <p>Tim Campbell</p>
            <p className="mt-2">Nova Scotia</p>
        </footer>
    </div>
  );
};
