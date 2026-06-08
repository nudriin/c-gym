import React from 'react';
import { Mail, ShieldCheck, MapIcon, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  // no props needed for now
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-brand-background-deep border-t border-brand-secondary/10 w-full py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand details */}
        <div className="text-center md:text-left">
          <span className="font-display text-3xl font-black text-brand-primary italic tracking-tight">
            CASADOVA GYM
          </span>
          <p className="text-xs text-brand-secondary mt-1 max-w-xs leading-normal">
            Pusat Kebugaran Premium & Ekosistem Atletis Performa Tinggi. Palangka Raya, Kalimantan Tengah.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <button
            onClick={() => alert('Kebijakan Privasi: Data pendaftaran Anda aman bersama Casadova Gym Center. Data tidak akan dibagikan ke pihak ketiga mana pun.')}
            className="text-brand-secondary hover:text-brand-primary text-sm font-medium hover:underline decoration-brand-primary"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => alert('Syarat Ketentuan: Keanggotaan gym bersifat non-transferable (tidak dapat dipindahtangankan). Patuhi protokol kebersihan dan kembalikan alat ke rak setelah digunakan.')}
            className="text-brand-secondary hover:text-brand-primary text-sm font-medium hover:underline decoration-brand-primary"
          >
            Terms of Service
          </button>
        </div>

        {/* Copyright or custom certification line */}
        <div className="text-center md:text-right">
          <p className="text-xs text-brand-secondary">
            © 2024 CASADOVA GYM CENTER.<br />
            <span className="font-mono text-[10px] uppercase font-bold text-brand-primary tracking-widest block mt-1.5">
              🚀 ENGINEERED FOR PERFORMANCE.
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
