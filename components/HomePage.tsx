
import React, { useState, useEffect } from 'react';
import { Anchor } from 'lucide-react';

interface HomePageProps {
  onJoinReset: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
    onJoinReset, 
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white selection:bg-amy-gold/30">
      {/* Sticky Header */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-50">
        <div className="flex items-center gap-2 text-amy-navy font-bold tracking-tight cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-amy-navy text-white flex items-center justify-center rounded-xl rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-lg shadow-amy-navy/20">
             <Anchor className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans font-black text-xl tracking-tighter uppercase">Tim Campbell</span>
            <span className="text-[10px] text-amy-orange font-bold uppercase tracking-widest">The Calm Anchor</span>
          </div>
        </div>

        {/* Center Nav Link - Points to Kit Squeeze Page */}
        <a 
          href="https://thecalmanchor.kit.com/calm"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-700 mx-auto cursor-pointer group py-2 px-4 rounded-full ${
            scrolled 
              ? 'bg-amy-gold/10 text-amy-navy shadow-sm border border-amy-gold/20' 
              : 'text-slate-500 hover:text-amy-navy'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 bg-amy-orange rounded-full relative z-10 shadow-[0_0_8px_rgba(232,90,60,0.4)]"></div>
            <div className="absolute inset-0 w-2 h-2 bg-amy-orange rounded-full animate-calm-pulse"></div>
          </div>
          <span className={`${!scrolled ? 'border-b border-amy-gold/50' : ''} group-hover:border-amy-navy transition-colors`}>
            {scrolled ? 'Need a 10-Minute Reset?' : 'Free 10-Minute Reset'}
          </span>
        </a>

        <a 
          href="/landing"
          onClick={(e) => {
            e.preventDefault();
            onJoinReset();
          }}
          className="bg-amy-orange hover:bg-orange-600 text-white text-[10px] font-black py-3 px-8 rounded-full shadow-amy transition-all uppercase tracking-widest cursor-pointer active:scale-95 inline-block"
        >
          Explore the Anchor
        </a>
      </nav>

      <main className="pb-40">
        {/* Section 1: Hero Narrative */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 md:pt-32 grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h1 className="text-5xl md:text-7xl font-black text-amy-navy tracking-tighter leading-none">
              Hi, I'm Tim.
            </h1>
            
            <div className="space-y-8 text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-xl">
              <p>I run a weekly session for people whose nervous systems don't know how to switch off.</p>
              
              <p>If you're used to staying composed even when your body is working overtime, you'll know what I mean.</p>
              
              <p>Most people don't need more strategies.<br/>  
                 They need their system to <span className="font-bold text-amy-navy italic">actually stand down.</span></p>
              
              <p className="font-medium text-amy-navy pt-4">It’s all held in one place now.</p>
              <p>That’s where it starts to shift.</p>
            </div>

            {/* Hero CTA */}
            <div className="pt-4">
                <a 
                  href="/landing"
                  onClick={(e) => {
                    e.preventDefault();
                    onJoinReset();
                  }}
                  className="bg-amy-orange hover:bg-orange-600 text-white font-black py-4 px-10 rounded-full text-lg shadow-amy hover:shadow-xl transition-all uppercase tracking-widest cursor-pointer active:scale-95 inline-block"
                >
                  Explore the Anchor
                </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amy-gold/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="aspect-[3/4] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-white ring-1 ring-slate-100">
              <img 
                src="portrait.png" 
                alt="Tim Campbell" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 2: How I Got Here */}
        <section className="max-w-4xl mx-auto px-6 pt-40 space-y-24">
          <div className="space-y-12 text-2xl md:text-3xl text-slate-600 leading-relaxed font-light">
            <h2 className="text-amy-orange font-black uppercase tracking-[0.3em] text-[10px] mb-8">How I Got Here</h2>
            
            <p>I spent years in environments where regulation wasn't optional.</p>
            
            <p>Hospitals. Emergency situations. Places where calm changed outcomes.</p>
            
            <p>I taught hundreds of scuba students to <span className="font-serif italic text-amy-navy">anchor first, then choose.</span></p>
            
            <p><span className="font-bold text-amy-navy italic">Long exhale. Simple reset.</span> Saved lives more than once.</p>

            <p>I taught over a hundred wedding couples the same thing in a different form.</p>
            
            <p>I'd watch the groom's shoulders rise and jaw tighten when the bride's entrance music started.</p>
            
            <p>So I taught them: <span className="underline decoration-amy-gold decoration-4 underline-offset-4">drop the shoulders, breathe out.</span></p>

            <p>A quiet reset before the moment arrived.</p>
            
            <p>No one knew. It was invisible.</p>
            
            <p>Not to look better. <br/> To stay online when it mattered most.</p>
            
            <p>Hospital work brought it all together.</p>
            
            <div className="bg-amy-cream p-12 md:p-16 rounded-[3rem] border border-amy-gold/20 relative overflow-hidden group">
              <p className="text-amy-navy font-bold text-2xl uppercase tracking-widest mb-6 block">An ER doctor pulled me aside one day and said:</p>
              <p className="text-3xl md:text-5xl font-black text-amy-navy leading-tight relative z-10 tracking-tight italic">
                "You need to learn hypnosis. You're already doing half of it."
              </p>
              <div className="absolute -bottom-10 -right-10 font-script text-[10rem] text-amy-gold/5 -rotate-6 select-none">Truth</div>
            </div>

            <p>So I did.</p>
            
            <p>Formal training gave me language for what I was already doing: <br className="hidden md:block" /> 
               <span className="font-bold text-amy-navy underline decoration-amy-gold/30">attention, pacing, permission.</span></p>
            
            <p>The way a body settles when the room is steady.</p>
            
             <div className="pt-6">
                <a 
                  href="/landing"
                  onClick={(e) => {
                    e.preventDefault();
                    onJoinReset();
                  }}
                  className="inline-flex items-center gap-3 text-amy-navy font-black uppercase tracking-[0.2em] text-xs hover:text-amy-orange transition-colors group cursor-pointer"
                >
                  Explore the Anchor &rarr;
                  <div className="h-px w-8 bg-amy-gold group-hover:w-12 transition-all"></div>
                </a>
              </div>
          </div>
        </section>

        {/* Section 3: Why Groups */}
        <section className="w-full bg-amy-lightBlue py-40 mt-40 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <h2 className="text-amy-orange font-black uppercase tracking-[0.3em] text-[10px] mb-8">Why Groups</h2>
            
            <div className="space-y-12 text-2xl md:text-3xl text-slate-600 leading-relaxed font-light">
              <p>People told me this work needed one-on-one attention.</p>
              <p>That groups wouldn't work.</p>
              <p>That people needed to talk through their problems first.</p>
              
              <p className="text-amy-navy font-bold text-3xl md:text-5xl tracking-tight leading-none italic">
                I tested it anyway.
              </p>

              <p>Turns out when the space is held steady, people settle faster in groups than alone.</p>
              
              <p>The group setting doesn't dilute the work. <br className="hidden md:block" /> <span className="text-amy-navy font-bold">It amplifies it.</span></p>
              
              <p>When your system receives a clear signal of safety, it responds.</p>
              
              <p>Not because you talked it through. <br className="hidden md:block" />
                 Because your body recognized the <span className="font-serif italic text-amy-navy">exit ramp.</span></p>
            </div>
          </div>
        </section>

        {/* Section 4: What Actually Happens */}
        <section className="max-w-4xl mx-auto px-6 pt-40 space-y-16 text-2xl md:text-3xl text-slate-600 leading-relaxed font-light">
          <h2 className="text-amy-orange font-black uppercase tracking-[0.3em] text-[10px] mb-8">What Actually Happens</h2>
          
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-6">
                <p>You don't explain your problem.</p>
                <p>You don't dig up the past.</p>
                <p>You don't relive anything.</p>
            </div>

            <div className="bg-amy-navy text-white p-12 md:p-16 rounded-[4rem] shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amy-gold/10 rounded-full blur-2xl"></div>
              <p className="text-3xl md:text-5xl font-black text-amy-gold leading-tight">
                You show up. <br/>
                You listen. <br/>
                Your nervous system does what it already knows how to do.
              </p>
            </div>
          </div>

          <p>Some people tell me it's the steadiest hour of their week.</p>
          
          <p>Live each week. Replay included.</p>
          
          <div className="py-12 border-l-4 border-amy-gold pl-10 italic font-serif text-slate-500">
            <p>"Your body doesn't measure sincerity. <br className="hidden md:block" /> It responds to signal."</p>
          </div>
        </section>

        {/* Section 5: The Invitation */}
        <section className="max-w-4xl mx-auto px-6 pt-40 pb-40">
          <div className="mt-40 border-t border-slate-100 pt-40">
            <h2 className="text-5xl md:text-8xl font-black text-amy-navy mb-16 tracking-tighter">
              The 911 <br/> Calm Anchor
            </h2>
            
            <div className="space-y-8 text-2xl md:text-3xl text-slate-600 leading-relaxed font-light mb-20 max-w-2xl">
              <p>One hour a week.</p>
              <p>Body-first reset.</p>
              <p>No effort required.</p>
              
              <p className="pt-8">I hold the space steady.</p>
              <p><span className="font-bold text-amy-navy underline decoration-amy-gold decoration-4 underline-offset-4">Your system stands down.</span></p>
              
              <p className="pt-8 font-script text-5xl text-amy-orange rotate-[-2deg]">That's it.</p>
            </div>

            <a 
              href="/landing"
              onClick={(e) => {
                e.preventDefault();
                onJoinReset();
              }}
              className="bg-amy-orange hover:bg-orange-600 text-white font-black py-8 px-16 rounded-[2rem] text-2xl md:text-4xl shadow-amy hover:shadow-2xl transition-all transform hover:-translate-y-2 uppercase tracking-widest active:scale-95 cursor-pointer inline-block"
            >
              Explore the Anchor
            </a>
          </div>
        </section>
      </main>

      <footer id="site-footer" className="w-full py-20 bg-slate-50 text-slate-400 text-sm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col text-center md:text-left">
                <p className="font-bold tracking-widest uppercase text-xs mb-2 text-slate-500">Tim Campbell — The Calm Anchor</p>
                <p>&copy; {new Date().getFullYear()}. For those who stay steady.</p>
            </div>
            <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px]">
                <a href="/talkitout" className="hover:text-amy-navy transition-colors cursor-pointer">Talk It Out</a>
                <a href="/privacy" className="hover:text-amy-navy transition-colors cursor-pointer">Privacy</a>
                <a href="/terms" className="hover:text-amy-navy transition-colors cursor-pointer">Terms</a>
                <a href="/support" className="hover:text-amy-navy transition-colors cursor-pointer">Support</a>
            </div>
        </div>
      </footer>
    </div>
  );
};
