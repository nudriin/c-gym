import React, { useState } from 'react';
import { PROGRAMS_DATA, Program } from '../types';
import { Flame, Clock, Award, CheckCircle2, Info, X, MessageCircle } from 'lucide-react';

interface ProgramsProps {
  // no props needed for now
}

export default function Programs({}: ProgramsProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleWhatsappJoin = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      window.open('https://chat.whatsapp.com/CasadovaGymCommunity', '_blank');
    }
  };

  return (
    <section id="classes" className="py-20 bg-brand-surface-container-low">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-12">
          <div>
            <span className="text-brand-primary font-display tracking-widest text-xs uppercase block font-semibold mb-1">
              TRAINING PROGRAMS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              Kelas & Layanan Komunitas
            </h2>
          </div>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS_DATA.map((prog, index) => {
            const isAsymmetric = index % 2 === 1;

            return (
              <div
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className={`group relative h-96 overflow-hidden rounded bg-black cursor-pointer md:hover:scale-[1.02] transition-all duration-300 ${
                  isAsymmetric ? 'lg:translate-y-4 shadow-lg' : ''
                }`}
              >
                {/* Image */}
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-background-deep via-brand-background-deep/40 to-transparent" />

                {/* Tags on Card */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="bg-brand-background-deep/80 backdrop-blur text-[10px] font-mono font-bold text-brand-primary px-2.5 py-1 rounded">
                    {prog.duration}
                  </span>
                </div>

                {/* Contents always visible at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white group-hover:text-brand-primary transition-colors leading-tight">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-brand-secondary line-clamp-2 mt-1.5">
                    {prog.description}
                  </p>
                  
                  {/* Indicator to tap */}
                  <div className="mt-3 flex items-center gap-2 text-brand-primary text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>LIHAT DETIL & GABUNG</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic program detailed modal */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <div className="bg-brand-surface-container border border-brand-outline/30 w-full max-w-lg p-6 rounded relative overflow-hidden max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 text-brand-secondary hover:text-white z-10 p-1.5 bg-black/45 rounded-full"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="aspect-[16/10] bg-black overflow-hidden rounded mb-6 relative">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand-success-vibrant text-white text-[10px] font-mono font-extrabold px-2.5 py-1 rounded">
                  🟢 GRUP WHATSAPP AKTIF
                </div>
              </div>

              <h4 className="text-brand-primary font-display tracking-widest text-[11px] uppercase block font-semibold mb-1">
                KOMUNITAS CASADOVA GYM
              </h4>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-3 tracking-tight leading-tight">
                {selectedProgram.name}
              </h3>
              
              <p className="text-sm leading-relaxed mb-6 text-brand-secondary">
                {selectedProgram.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6 bg-brand-background-deep p-4 rounded border border-brand-secondary/5">
                <div className="text-center">
                  <Flame className="mx-auto text-brand-primary h-5 w-5 mb-1" />
                  <span className="block text-[10px] font-mono text-brand-secondary uppercase">EST. KCAL</span>
                  <span className="block font-bold font-mono text-white text-xs sm:text-sm mt-0.5">{selectedProgram.calories} kcal</span>
                </div>
                <div className="text-center border-x border-brand-secondary/10">
                  <Clock className="mx-auto text-brand-primary h-5 w-5 mb-1" />
                  <span className="block text-[10px] font-mono text-brand-secondary uppercase">DURASI</span>
                  <span className="block font-bold font-mono text-white text-xs sm:text-sm mt-0.5">{selectedProgram.duration}</span>
                </div>
                <div className="text-center">
                  <Award className="mx-auto text-brand-primary h-5 w-5 mb-1" />
                  <span className="block text-[10px] font-mono text-brand-secondary uppercase">INTENSITAS</span>
                  <span className="block font-bold font-mono text-white text-xs sm:text-sm mt-0.5">{selectedProgram.intensity}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsappJoin(selectedProgram.whatsappUrl)}
                  className="w-full py-3.5 px-4 bg-brand-success-vibrant hover:bg-brand-success-vibrant/90 text-white rounded font-display text-xs sm:text-sm uppercase tracking-wider font-extrabold transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> Join WhatsApp Community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
