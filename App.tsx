
import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { LandingPage } from './components/LandingPage';
import { JoinPage } from './components/JoinPage';
import { WelcomePage } from './components/WelcomePage';
import { ResetPage } from './components/ResetPage';
import { LifetimePage } from './components/LifetimePage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { SupportPage } from './components/SupportPage';
import { TalkItOutPage } from './components/TalkItOutPage';
import { LtcPage } from './components/LtcPage';
import { AdminLoginGate } from './components/admin/AdminLoginGate';
import { AdminApp } from './components/admin/AdminApp';

type ViewState = 'home' | 'landing' | 'checkout' | 'admin' | 'welcome' | 'reset' | 'lifetime' | 'privacy' | 'terms' | 'support' | 'talkitout' | 'ltc';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [scrollToFooter, setScrollToFooter] = useState(false);

  // Helper to sync State + URL
  const navigate = (newView: ViewState, path: string) => {
    try {
      window.history.pushState(null, '', path);
    } catch (e) {
      console.warn('Navigation state update failed (expected in sandbox):', e);
    }
    setView(newView);
    window.scrollTo(0, 0);
  };

  // 1. Handle Initial Load based on URL
  useEffect(() => {
    const path = window.location.pathname;
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

    if (normalizedPath === '/welcome' || normalizedPath === '/thank-you') {
      setView('welcome');
    } else if (normalizedPath === '/admin') {
      setView('admin');
    } else if (normalizedPath === '/reset') {
      setView('reset');
    } else if (normalizedPath === '/landing') {
      setView('landing');
    } else if (normalizedPath === '/checkout' || normalizedPath === '/join') {
      setView('checkout');
    } else if (normalizedPath === '/lifetime') {
      setView('lifetime');
    } else if (normalizedPath === '/privacy') {
      setView('privacy');
    } else if (normalizedPath === '/terms') {
      setView('terms');
    } else if (normalizedPath === '/support') {
      setView('support');
    } else if (normalizedPath === '/talkitout') {
      setView('talkitout');
    } else if (normalizedPath === '/ltc') {
      setView('ltc');
    } else {
      // Default to home if route not found
      if (path !== '/') {
        try {
          window.history.replaceState(null, '', '/');
        } catch (e) {
          console.warn('History replace failed (expected in sandbox):', e);
        }
      }
      setView('home');
    }
  }, []);

  // 2. Handle Browser "Back" Button (PopState)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

      if (normalizedPath === '/') setView('home');
      else if (normalizedPath === '/landing') setView('landing');
      else if (normalizedPath === '/reset') setView('reset');
      else if (normalizedPath === '/checkout' || normalizedPath === '/join') setView('checkout');
      else if (normalizedPath === '/welcome') setView('welcome');
      else if (normalizedPath === '/lifetime') setView('lifetime');
      else if (normalizedPath === '/privacy') setView('privacy');
      else if (normalizedPath === '/terms') setView('terms');
      else if (normalizedPath === '/support') setView('support');
      else if (normalizedPath === '/talkitout') setView('talkitout');
      else if (normalizedPath === '/ltc') setView('ltc');
      else if (normalizedPath === '/admin') setView('admin');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll Behavior Control
  useEffect(() => {
    if (scrollToFooter) {
      setTimeout(() => {
        const footer = document.getElementById('site-footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setScrollToFooter(false);
    }
  }, [view, scrollToFooter]);

  // Navigation Handlers
  const handleGoHome = () => navigate('home', '/');
  const handleGoToLanding = () => navigate('landing', '/landing');
  const handleGoToReset = () => navigate('reset', '/reset');
  const handleStartCheckout = () => navigate('checkout', '/join');
  
  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <HomePage 
            onJoinReset={handleGoToLanding} 
            onGoToReset={handleGoToReset}
          />
        );
      case 'landing':
        return (
          <LandingPage 
            onStartCheckout={handleStartCheckout} 
            onGoToReset={handleGoToReset}
            onBackToHome={handleGoHome}
          />
        );
      case 'checkout':
        return <JoinPage />;
      case 'welcome':
        return <WelcomePage />;
      case 'reset':
        return <ResetPage onBackToHome={handleGoHome} />;
      case 'lifetime':
        return <LifetimePage />;
      case 'privacy':
        return <PrivacyPage onBack={handleGoHome} />;
      case 'terms':
        return <TermsPage onBack={handleGoHome} />;
      case 'support':
        return <SupportPage onBack={handleGoHome} />;
      case 'talkitout':
        return <TalkItOutPage onBackToHome={handleGoHome} />;
      case 'ltc':
        return <LtcPage onBackToHome={handleGoHome} />;
      case 'admin':
        if (!isAdminAuthenticated) {
            return (
                <AdminLoginGate 
                    onAuthenticated={() => {
                        setIsAdminAuthenticated(true);
                    }}
                />
            )
        }
        return (
            <AdminApp 
                onLogout={() => {
                    setIsAdminAuthenticated(false);
                    navigate('home', '/');
                }}
            />
        )
      default:
        return (
            <HomePage 
                onJoinReset={handleGoToLanding} 
                onGoToReset={handleGoToReset}
            />
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans">
      {renderView()}
      
      {/* Hidden Admin Access for Demo purposes - Bottom Right Corner */}
      <div className="fixed bottom-2 right-2 opacity-0 hover:opacity-100 transition-opacity z-50">
        <button 
            onClick={() => navigate('admin', '/admin')}
            className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-500"
        >
            Admin
        </button>
      </div>
    </div>
  );
};

export default App;
