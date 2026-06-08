import React from 'react';
import { X, MessageSquare, ShieldCheck, Mail, Map, Navigation, Heart, ExternalLink, QrCode } from 'lucide-react';

interface ModalsProps {
  showContact: boolean;
  onCloseContact: () => void;
  showMap: boolean;
  onCloseMap: () => void;
}

export default function Modals({
  showContact,
  onCloseContact,
  showMap,
  onCloseMap,
}: ModalsProps) {

  // Simulate contact redirect URIs or alert sequences safely
  const handleContactAction = (topic: string) => {
    const encodedMsg = encodeURIComponent(`Halo Casadova Gym Center, saya tertarik bertanya mengenai: [${topic}]. Mohon info lebih lanjut.`);
    const waUrl = `https://api.whatsapp.com/send/?phone=6281225913828&text=${encodedMsg}&type=phone_number&app_absent=0`;
    window.open(waUrl, '_blank');
    onCloseContact();
  };

  return (
    <>
      {/* 1. WHATSAPP / CONTACT ROUTING MODAL */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-brand-surface-container w-full max-w-sm border-t-4 border-brand-success-vibrant p-6 rounded-lg relative shadow-2xl">
            <button
              onClick={onCloseContact}
              className="absolute top-4 right-4 text-brand-secondary hover:text-white"
              aria-label="Close Contact"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="p-2.5 bg-brand-success-vibrant/15 text-brand-success-vibrant rounded-full">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-white">Hubungi Kami</h3>
                <p className="text-xs text-brand-secondary">Customer Care Casadova Gym</p>
              </div>
            </div>

            <p className="text-xs text-brand-secondary leading-relaxed mb-6">
              Silakan pilih topik bantuan di bawah ini. Anda akan langsung diarahkan ke nomor WhatsApp ofisial kami di Palangka Raya.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleContactAction('Membership & Harga')}
                className="w-full text-left flex items-center gap-4 p-4 bg-brand-background-deep border border-brand-secondary/10 hover:border-brand-success-vibrant transition-all hover:bg-brand-success-vibrant/5 rounded"
              >
                <span className="p-1.5 bg-brand-success-vibrant/10 text-brand-success-vibrant rounded text-xs font-mono font-bold">● TANYA</span>
                <span className="font-bold text-sm uppercase text-white">Tanya Membership</span>
              </button>

              <button
                onClick={() => handleContactAction('Personal Trainer Trial')}
                className="w-full text-left flex items-center gap-4 p-4 bg-brand-background-deep border border-brand-secondary/10 hover:border-brand-success-vibrant transition-all hover:bg-brand-success-vibrant/5 rounded"
              >
                <span className="p-1.5 bg-brand-success-vibrant/10 text-brand-success-vibrant rounded text-xs font-mono font-bold">● SEWA</span>
                <span className="font-bold text-sm uppercase text-white">Sewa Personal Trainer</span>
              </button>

              <button
                onClick={() => handleContactAction('Kemitraan')}
                className="w-full text-left flex items-center gap-4 p-4 bg-brand-background-deep border border-brand-secondary/10 hover:border-brand-success-vibrant transition-all hover:bg-brand-success-vibrant/5 rounded"
              >
                <span className="p-1.5 bg-brand-success-vibrant/10 text-brand-success-vibrant rounded text-xs font-mono font-bold">● BRAND</span>
                <span className="font-bold text-sm uppercase text-white">Kemitraan / Kerjasama</span>
              </button>
            </div>
            
            <p className="text-[10px] text-brand-secondary text-center mt-5">
              Hubungi CS reps pada Jam Kerja (06:00 - 21:00 WIB)
            </p>
          </div>
        </div>
      )}

      {/* 3. PREMIUM LOCATION MAPS MODAL */}
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-brand-surface-container w-full max-w-lg border-t-4 border-brand-primary p-6 rounded-lg relative shadow-2xl">
            <button
              onClick={onCloseMap}
              className="absolute top-4 right-4 text-brand-secondary hover:text-white-80"
              aria-label="Close Map"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="text-brand-primary font-mono text-xs uppercase tracking-widest block font-bold">🏢 PHYSICAL HEADQUARTERS</span>
              <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                LOKASI CASADOVA GYM
              </h3>
            </div>

            {/* Simulated Interactive Vector Map */}
            <div className="bg-brand-background-deep border border-brand-secondary/15 rounded p-4 mb-4 text-center text-xs text-brand-secondary relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-brand-success-vibrant/10 text-brand-success-vibrant font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold">
                ● BUKA (06:00-21:00)
              </div>
              
              <div className="my-8 py-2">
                <p className="text-base text-white font-bold font-display uppercase tracking-widest">
                  🏢 JL. RAJAWALI KM 4.5
                </p>
                <p className="text-xs text-brand-secondary max-w-xs mx-auto mt-2 leading-relaxed">
                  Samping Toko Buku Bintang Terang Raya, Palangka Raya, Kalimantan Tengah
                </p>
              </div>

              {/* Steps */}
              <div className="border-t border-brand-secondary/5 pt-3 text-left space-y-2 text-[11px]">
                <p className="text-brand-primary flex gap-2 font-mono">
                  <span>1.</span>
                  <span><strong>Area Parkir Luas:</strong> Tersedia parkir mobil & motor aman gratis ber-CCTV di lantai dasar.</span>
                </p>
                <p className="text-brand-primary flex gap-2 font-mono">
                  <span>2.</span>
                  <span><strong>Lantai Utama:</strong> Naik ke Lantai 2 ruko untuk resepsionis pendaftaran & area beban.</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://google.com/maps?q=Jl.+Rajawali,+Palangka+Raya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-brand-primary-container text-brand-on-primary-fixed uppercase font-display font-black text-xs text-center py-3.5 tracking-wider rounded inline-flex items-center justify-center gap-1.5 hover:bg-brand-primary"
              >
                Buka di Google Maps <ExternalLink size={14} />
              </a>
              <button
                onClick={onCloseMap}
                className="px-5 py-3.5 border border-brand-secondary text-brand-secondary hover:text-white font-display text-xs uppercase tracking-wider rounded"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
