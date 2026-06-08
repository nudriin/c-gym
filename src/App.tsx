import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import MembershipCalculator from './components/MembershipCalculator';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import GymLocation from './components/GymLocation';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { MessageCircle, CheckCircle, BellRing, Sparkles, X } from 'lucide-react';

export default function App() {
  // Global SPA UI States
  const [showContact, setShowContact] = useState(false);
  const [showMap, setShowMap] = useState(false);
  
  // Custom Toast notifications state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div id="root-layout" className="min-h-screen bg-brand-background-deep text-brand-on-surface relative selection:bg-brand-primary-container selection:text-brand-on-primary-fixed antialiased">
      
      {/* 1. Header Navigation */}
      <Navbar
        onJoinClick={() => {
          // Open calculator registration
          const calcEl = document.getElementById('calculator');
          if (calcEl) {
            calcEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onContactClick={() => setShowContact(true)}
      />

      {/* 2. Main Page Layout Sections */}
      <main className="relative">
        {/* Hero Banner Section */}
        <Hero
          onRegisterClick={() => {
            const calcEl = document.getElementById('calculator');
            if (calcEl) {
              calcEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Bento About Section */}
        <About />

        {/* Asymmetric Core Classes training programs */}
        <Programs />

        {/* Exclusive Facilities Gallery */}
        <Facilities />

        {/* Membership simulator */}
        <MembershipCalculator />

        {/* Class digital routine schedule */}
        <Schedule />

        {/* Meet the Coaching Elite roster */}
        <Trainers />

        {/* Dynamic Embedded Interactive Map Location */}
        <GymLocation />
      </main>

      {/* 3. Footer and addresses */}
      <Footer />

      {/* 4. Global Modals and drawers manager */}
      <Modals
         showContact={showContact}
         onCloseContact={() => setShowContact(false)}
         showMap={showMap}
         onCloseMap={() => setShowMap(false)}
      />

      {/* 5. Smart Floating WhatsApp bubble (bottom right corner) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowContact(true)}
          className="bg-brand-success-vibrant hover:scale-110 active:scale-95 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 group relative"
          aria-label="Contact support on WhatsApp"
        >
          {/* Subtle pulsative green glow rings */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success-vibrant opacity-30 pointer-events-none" />
          
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Badge popup showing count of active assistants online */}
          <span className="absolute -top-1 -right-1 bg-brand-intensity-red text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-full">
            1
          </span>
        </button>
      </div>

      {/* 6. Dynamic high-contrast minimal toast notification banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 animate-fade-in">
          <div className="bg-brand-surface-container border border-brand-primary/30 p-4 rounded shadow-2xl flex items-center gap-3 max-w-sm">
            <div className="p-1.5 bg-brand-primary/10 text-brand-primary rounded-full">
              <BellRing size={16} />
            </div>
            <p className="text-xs font-mono font-bold tracking-wide uppercase text-white leading-normal">
              {toastMessage}
            </p>
            <button
              onClick={() => setToastMessage(null)}
              className="text-brand-secondary hover:text-white ml-2 text-xs"
              aria-label="Dismiss message"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
