import React from 'react';
import { MapPin, Navigation, ShieldCheck } from 'lucide-react';

export default function GymLocation() {
  return (
    <section id="location" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="bg-brand-surface-container p-6 sm:p-10 border-t border-brand-secondary/10 rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <span className="text-brand-primary font-display tracking-widest text-xs uppercase mb-2 block font-semibold">
              OUR GYM STATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              LOKASI CASADOVA GYM CENTER
            </h2>
            <p className="text-brand-secondary text-sm max-w-xl">
              Akses mudah dan premium di Kota Palangka Raya. Kunjungi kami untuk memulai konsultasi kebugaran eksklusif dan melihat fasilitas lengkap kami secara langsung.
            </p>
          </div>
          <div>
            <a 
              href="https://maps.google.com/?q=Casadova+Gym+Center"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-3.5 bg-brand-primary-container hover:bg-brand-primary text-brand-on-primary-fixed uppercase font-display text-xs font-bold tracking-widest rounded transition-all duration-200 items-center gap-2"
            >
              <Navigation size={14} /> Buka Di Google Maps
            </a>
          </div>
        </div>

        {/* Embedded Iframe Container */}
        <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] bg-brand-background-deep rounded-lg border border-brand-primary/20 shadow-2xl overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7779289235846!2d113.928665!3d-2.2492525999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de34d0006f9e2b1%3A0x1853238dd61fa06b!2sCasadova%20Gym%20Center!5e1!3m2!1sen!2sid!4v1780936050200!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-90 contrast-110 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            title="Lokasi Casadova Gym Center"
          />
        </div>

        {/* Additional Location Info Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-brand-background-deep border border-brand-secondary/5 rounded flex items-start gap-3">
            <div className="p-2 bg-brand-primary/10 rounded shrink-0">
              <MapPin className="text-brand-primary h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white mb-1">
                Alamat Resmi Club
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Jl. Seth Adji No.27, Panarung, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 74874, Indonesia.
              </p>
            </div>
          </div>

          <div className="p-4 bg-brand-background-deep border border-brand-secondary/5 rounded flex items-start gap-3">
            <div className="p-2 bg-brand-primary/10 rounded shrink-0">
              <ShieldCheck className="text-brand-primary h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase text-xs tracking-wider text-white mb-1">
                Fasilitas Parkir Luas
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Dilengkapi dengan lahan parkir motor & mobil yang aman dan terlindungi pengawasan CCTV 24 jam non-stop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
