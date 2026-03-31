
import React, { useState, useRef } from 'react';
import { Anchor, Play, Pause, Volume2, Download, Image as ImageIcon } from 'lucide-react';

interface ResetPageProps {
  onBackToHome: () => void;
}

export const ResetPage: React.FC<ResetPageProps> = ({ 
    onBackToHome,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const AUDIO_SRC = "reset-audio.mp3";
  const GUIDE_SRC = "reset-guide.png";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio placeholder - no source configured"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-amy-lightBlue flex flex-col items-center selection:bg-amy-gold/30 font-sans">
      {/* Minimal Nav */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-transparent sticky top-0 z-50">
        <div 
          className="flex items-center gap-2 text-amy-navy font-bold tracking-tight cursor-pointer group opacity-60 hover:opacity-100 transition-opacity" 
          onClick={onBackToHome}
        >
          <div className="w-8 h-8 bg-amy-navy text-white flex items-center justify-center rounded-lg rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-md">
             <Anchor className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans font-black text-lg tracking-tighter uppercase">Tim Campbell</span>
            <span className="text-[10px] text-amy-orange font-bold uppercase tracking-widest hidden sm:block">The Calm Anchor</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-2xl px-6 py-12 md:py-20 flex flex-col items-center">
        
        {/* 1. Primary Focus: The Audio */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-amy-navy mb-6 shadow-sm">
                Free Audio Reset
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-amy-navy tracking-tighter mb-4">
                The 10-Minute Reset
            </h1>
            
            <p className="text-lg text-slate-500 font-light max-w-sm mx-auto">
                A calm transition to help you mark the end of the shift.
            </p>
        </div>

        {/* Hero Player */}
        <div className="w-full bg-white rounded-[2.5rem] p-2 shadow-[0_30px_60px_-15px_rgba(10,36,88,0.1)] border border-white mb-6 transform transition-transform hover:scale-[1.01] duration-500">
             <div className="bg-amy-navy text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
                 {/* Subtle Background Texture */}
                 <div className="absolute inset-0 bg-gradient-to-br from-amy-navy to-slate-900"></div>
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                 
                 <audio 
                    ref={audioRef} 
                    src={AUDIO_SRC} 
                    onEnded={() => setIsPlaying(false)}
                 />
                 
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <button 
                        onClick={togglePlay}
                        className="w-24 h-24 bg-white text-amy-navy rounded-full flex items-center justify-center hover:bg-amy-gold transition-colors shadow-2xl flex-shrink-0 active:scale-95"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
                    </button>
                    
                    <div className="text-center">
                        <p className="font-bold text-2xl leading-tight mb-2">Guided Transition</p>
                        <div className="flex items-center justify-center gap-2 text-blue-200/60 text-xs uppercase tracking-widest font-medium">
                            <Volume2 className="w-3 h-3" />
                            <span>10:00 • Tim Campbell</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        <div className="w-full flex justify-center mb-24">
            <a 
                href={AUDIO_SRC} 
                download 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-amy-navy transition-colors"
            >
                <Download className="w-4 h-4" /> Download Audio
            </a>
        </div>

        {/* 2. Visual Bonus (Lower, Smaller, quieter) */}
        <div className="w-full max-w-sm border-t border-slate-200/60 pt-16 mb-16 flex flex-col items-center text-center">
            
            <div className="mb-8 space-y-2">
                <h3 className="text-xs font-black text-amy-navy uppercase tracking-widest flex items-center justify-center gap-2">
                    Bonus: The Calm Anchor
                </h3>
                <p className="text-slate-500 font-serif italic text-lg leading-relaxed">
                    If you want something simple to glance at, it’s here.
                </p>
            </div>
            
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-white mb-6 rotate-[-1deg] hover:rotate-0 transition-transform duration-500 w-full">
                 <img 
                    src={GUIDE_SRC} 
                    alt="Reset Guide Infographic" 
                    className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                            target.parentElement.innerHTML = `<div class="p-8 text-center text-slate-300 text-xs italic bg-slate-50 rounded-xl">Visual guide placeholder</div>`;
                        }
                    }}
                 />
            </div>
            
            <a 
                href={GUIDE_SRC}
                download
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-amy-navy transition-colors"
            >
                <ImageIcon className="w-3 h-3" /> Download The Visual
            </a>
        </div>

        {/* 3. The Only Closing Needed */}
        <div className="text-center">
            <p className="text-slate-400/60 font-serif italic text-lg">
                "Stopping here is enough."
            </p>
        </div>

      </main>

      <footer className="w-full py-12 px-6 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black opacity-30">
        <div className="flex flex-col gap-4">
            <p>Tim Campbell — The Calm Anchor</p>
            <div className="flex justify-center gap-6">
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
