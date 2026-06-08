import React, { useState, useEffect } from 'react';
import { ShieldAlert, ThumbsUp, Activity, Users, Flame, CalendarRange } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  // A dynamic counter mock showing members active in real-time
  const [activeMembers, setActiveMembers] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      // randomly toggle between 38 and 54 members
      setActiveMembers((prev) => {
        const diff = Math.floor(Math.random() * 5) - 2;
        const next = prev + diff;
        return next > 60 || next < 30 ? 45 : next;
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-brand-background-deep"
    >
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-background-deep via-brand-background-deep/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-background-deep via-transparent to-brand-background-deep/10 z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC28j6XZPtMHkGKFIqeSAlqmXAYnfktfbXhUoVbPvGFZ-Bq91j9okJajIWgNBErFyu00WLsBqss4SBLZI09jeNYUIl0xM36h2bGJEAW8bXYPQ1_wxVcWYqaaYqpXigaafHcq5jYX7o7Pr_tkWox0QMm4wGipXAZCM1o4ZcZE3cPvhjupl-UnTmKqYxjOIulan1ntq28lo7b9QG7IfrCCCE_8GzXk930c47D8vYweOtkU1uo_2XgHAXwflrTpT3-3Jwe1IM0E0d-sEE"
          alt="Premium Dark Industrial Gym Space Palangka Raya"
          className="w-full h-full object-cover opacity-85 scale-105 transform transition-transform duration-[12000s]"
          loading="eager"
        />
      </div>

      <div className="relative z-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl flex flex-col items-start">
          {/* Logo Badge */}
          <div className="animate-fade-in mb-3 border border-brand-primary/20 bg-brand-background-deep/40 backdrop-blur pb-2 px-3 rounded flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA2iKLeT64ZTd1PtUvv27NFANDyTP9dmejWAKrJDXiIqRzr8UJ931a_-8ihq1WeqI-5H6tdNMcdq0kelIBzA2T6nvWvyBXYVAj8cdm0_D5X5iwlAK5FIonRUcIom54zyAcKPE4kiiB8lbHUMTLrrWjE0Ju5kgmesl9LuStTAnx3BmPPLetmbUCTIiCdS3kJuJK6K8Obld99NdV7FIGXBTE0VdqxDN6PmHK4axcCfOZ2-Fh0KRTYd2gz9-1cZx8p6FlFTsqhZXbOhY"
              alt="Casadova Gym Badge Logo"
              className="w-14 h-14 object-contain rounded-full border border-brand-primary/20 mt-1"
            />
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-primary font-mono mb-0.5 font-bold">● EXCLUSIVE CLUB</p>
              <p className="text-[10px] text-brand-secondary">PALANGKA RAYA</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7.5xl font-black uppercase tracking-tight leading-none mb-4 text-white text-glow-orange select-none">
            GET FIT & <br />
            <span className="text-brand-primary-container">LOOK GREAT</span>
          </h1>

          {/* Description */}
          <p className="text-brand-on-surface text-base sm:text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Pusat kebugaran terbaik di Palangka Raya. Transformasikan fisik dan performa Anda dengan jajaran alat premium terlengkap, pelatih bersertifikat profesional internasional, dan kenyamanan bintang lima.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onRegisterClick}
              className="bg-brand-primary-container hover:bg-brand-primary text-brand-on-primary-fixed uppercase font-display text-base font-bold tracking-widest px-8 py-4 cursor-pointer text-center hover:scale-102 transition-all duration-200 shadow-lg rounded"
            >
              Daftar Member
            </button>
          </div>

          {/* Live Capacity Indicator */}
          <div className="bg-brand-surface-container/85 border border-brand-outline-variant/30 backdrop-blur rounded p-4 flex flex-wrap items-center gap-6 text-sm max-w-lg mt-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success-vibrant opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-success-vibrant"></span>
              </span>
              <div>
                <p className="font-mono text-xs text-brand-secondary uppercase">STATUS CUACA LATIHAN</p>
                <p className="font-bold text-white text-[13px]">{activeMembers} Atlet Aktif Sekarang</p>
              </div>
            </div>
            <div className="h-6 w-[1px] bg-brand-outline-variant/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Activity className="text-brand-primary h-5 w-5" />
              <div>
                <p className="font-mono text-xs text-brand-secondary uppercase">KAPASITAS RUANG</p>
                <p className="font-bold text-brand-primary text-[13px]">Normal (42% Terisi)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Numbers Indicator (Oswald display) */}
      <div className="absolute bottom-12 right-10 z-20 hidden lg:block">
        <div className="flex flex-col gap-6 border-l-2 border-brand-primary pl-5">
          <div>
            <span className="font-mono text-xl font-bold text-brand-primary">01</span>
            <span className="text-xs font-display text-brand-secondary block uppercase tracking-widest font-semibold">STRENGTH</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-brand-secondary">02</span>
            <span className="text-xs font-display text-brand-secondary block uppercase tracking-widest font-semibold">AGILITY</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-brand-secondary">03</span>
            <span className="text-xs font-display text-brand-secondary block uppercase tracking-widest font-semibold">MINDSET</span>
          </div>
        </div>
      </div>
    </section>
  );
}
