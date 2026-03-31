
import React from 'react';
import { Anchor } from 'lucide-react';

export const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-amy-lightBlue flex flex-col font-sans text-slate-900 selection:bg-amy-gold/30">
        {/* Simple Brand Header - Minimal & Calm */}
        <nav className="w-full py-8 px-6 md:px-12 flex justify-center md:justify-start items-center">
            <div className="flex items-center gap-3 text-amy-navy font-bold tracking-tight opacity-70 hover:opacity-100 transition-opacity cursor-default">
                <div className="w-8 h-8 bg-amy-navy text-white flex items-center justify-center rounded-lg rotate-[-3deg] shadow-sm">
                    <Anchor className="w-4 h-4" />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-sans font-black text-lg tracking-tighter uppercase">Tim Campbell</span>
                    <span className="text-[10px] text-amy-orange font-bold uppercase tracking-widest">The Calm Anchor</span>
                </div>
            </div>
        </nav>

        <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
            <div className="max-w-xl w-full space-y-10 text-center">
                
                {/* Headlines */}
                <div className="space-y-4 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-amy-navy tracking-tight leading-none">
                        You’re in.
                    </h1>
                    <p className="text-xl text-slate-500 font-light">
                        Your access is on its way.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] p-8 md:p-12 text-left space-y-10 animate-fade-in" style={{animationDelay: '0.1s'}}>
                    
                    <div className="space-y-5">
                        <p className="text-lg text-slate-700 leading-relaxed font-light">
                            We’ve just sent you an email with a secure access link.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed font-light">
                            This link is how you’ll enter The Anchor Vault.<br/>
                            There’s no password to remember.
                        </p>
                    </div>

                    <div className="bg-amy-cream/60 p-8 rounded-2xl border border-amy-gold/10">
                        <p className="text-[10px] font-black text-amy-navy uppercase tracking-widest mb-6 opacity-80">When you open the email and tap the link:</p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 text-slate-600 text-base font-light items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-amy-gold flex-shrink-0"></span>
                                You’ll be signed in automatically
                            </li>
                            <li className="flex gap-4 text-slate-600 text-base font-light items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-amy-gold flex-shrink-0"></span>
                                You can return anytime using the same email
                            </li>
                            <li className="flex gap-4 text-slate-600 text-base font-light items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-amy-gold flex-shrink-0"></span>
                                There’s nothing else you need to set up
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-50">
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                            If you don’t see the email in a few minutes, check Promotions or Spam.
                        </p>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                            If you still can’t find it, email <a href="mailto:support@timcampbellcalm.com" className="text-amy-navy hover:text-amy-orange hover:underline transition-colors font-bold">support@timcampbellcalm.com</a>.
                        </p>
                    </div>

                </div>

                {/* Closing Whisper */}
                <p className="text-xs text-slate-300 font-medium italic animate-fade-in font-serif" style={{animationDelay: '0.3s'}}>
                    The Anchor Vault will be there when you’re ready.
                </p>

            </div>
        </main>

        <footer className="w-full py-12 px-6 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-40">
            <div className="flex flex-col gap-6">
                <p>Tim Campbell — The Calm Anchor</p>
                <div className="flex justify-center gap-8">
                    <a href="/talkitout" className="hover:text-amy-navy transition-colors">Talk It Out</a>
                    <a href="/privacy" className="hover:text-amy-navy transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-amy-navy transition-colors">Terms</a>
                    <a href="/support" className="hover:text-amy-navy transition-colors">Support</a>
                </div>
            </div>
        </footer>
    </div>
  );
};
