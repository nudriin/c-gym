import React from 'react';
import { TRAINERS_DATA } from '../types';
import { Star } from 'lucide-react';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-brand-primary font-display tracking-widest text-xs uppercase block font-semibold mb-1">
          PROFESSIONAL COACHING
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
          Meet Our Trainers
        </h2>
        <p className="text-brand-secondary text-sm max-w-md mx-auto mt-2 leading-relaxed">
          Tim pelatih elit bersertifikat akademis nasional yang siap memandu perjalanan kebugaran Anda secara presisi.
        </p>
      </div>

      {/* Trainers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRAINERS_DATA.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-brand-surface-elevated overflow-hidden group rounded transition-all duration-300 border border-brand-secondary/5 flex flex-col justify-between"
          >
            <div>
              {/* Picture container */}
              <div className="h-80 overflow-hidden relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute top-4 right-4 bg-brand-background-deep/90 backdrop-blur border border-brand-primary/25 px-2.5 py-1 rounded flex items-center gap-1 font-mono text-xs font-bold text-brand-primary">
                  <Star size={12} className="fill-brand-primary text-brand-primary" /> {trainer.rating.toFixed(1)}
                </div>
              </div>

              {/* Roster description contents */}
              <div className="p-6">
                <h4 className="font-display text-2xl font-black uppercase text-white mb-0.5">
                  {trainer.name}
                </h4>
                <p className="text-brand-primary font-display text-xs uppercase tracking-widest font-semibold mb-3">
                  {trainer.role}
                </p>
                <p className="text-xs text-brand-secondary leading-relaxed mb-4">
                  {trainer.description}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {trainer.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="bg-brand-background-deep text-brand-secondary text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-brand-secondary/5 font-semibold"
                    >
                      #{spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
