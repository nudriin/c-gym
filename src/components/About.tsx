import React, { useState } from 'react';
import { MapPin, ShieldCheck, HeartPulse, Trophy, Award, Navigation, Dumbbell, Activity, Flame } from 'lucide-react';

export default function About() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const equipmentBrands = [
    { name: 'Hammer Strength', desc: 'Sistem isolater mekanis terbaik dunia untuk latihan daya beban asimetrik presisi tinggi.', icon: Dumbbell },
    { name: 'Life Fitness', desc: 'Mesin kardio elektronik cerdas dengan multi-sensor denyut jantung dan layar integrasi hiburan.', icon: Activity },
    { name: 'Rogue Fitness', desc: 'Barbel olimpiade, power racks baja grade militer tahan benturan luar biasa.', icon: Flame },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main large text card (Col-span 2) */}
        <div className="lg:col-span-2 bg-brand-surface-container p-6 sm:p-10 border-t border-brand-secondary/10 flex flex-col justify-between rounded-lg">
          <div>
            <span className="text-brand-primary font-display tracking-widest text-xs uppercase mb-2 block font-semibold">
              PREMIUM EXPERIENCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-4 text-white">
              The Best Gym in Palangka Raya
            </h2>
            <p className="text-brand-on-surface-variant text-base leading-relaxed mb-6">
              Casadova Gym Center bukan sekadar tempat latihan biasa. Kami adalah ekosistem performa tinggi yang dirancang khusus untuk membantu setiap individu mencapai potensi maksimal tubuh mereka. Kami menggabungkan peralatan standar kompetisi olahraga dengan kemewahan dan protokol kenyamanan bintang lima.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Lokasi Strategis */}
            <div className="p-5 bg-brand-background-deep border border-brand-secondary/5 relative group overflow-hidden rounded">
              <div className="absolute top-0 right-0 p-3 opacity-10 text-brand-primary group-hover:scale-110 transition-transform">
                <Navigation size={48} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded">
                  <MapPin className="text-brand-primary h-5 w-5" />
                </div>
                <h4 className="font-display font-bold uppercase text-sm tracking-widest text-white">
                  Lokasi Strategis
                </h4>
              </div>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Akses mudah di pusat kota Palangka Raya, memudahkan Anda berolahraga di sela aktivitas kerja harian.
              </p>
            </div>

            {/* Keamanan 24/7 */}
            <div className="p-5 bg-brand-background-deep border border-brand-secondary/5 relative group overflow-hidden rounded">
              <div className="absolute top-0 right-0 p-3 opacity-10 text-brand-primary group-hover:scale-110 transition-transform">
                <ShieldCheck size={48} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded">
                  <ShieldCheck className="text-brand-primary h-5 w-5" />
                </div>
                <h4 className="font-display font-bold uppercase text-sm tracking-widest text-white">
                  Keamanan & Sanitasi
                </h4>
              </div>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Lockers ber-CCTV, pembersihan berkala jaminan sanitasi tinggi demi menjaga rasa aman dan higienis Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Right Card (Col-span 1) */}
        <div className="bg-brand-primary-container p-6 sm:p-10 flex flex-col justify-center items-center text-brand-on-primary-container text-center rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-all duration-500" />
          
          <div className="bg-brand-on-primary-container/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <Trophy className="text-brand-primary h-12 w-12" />
          </div>
          
          <h3 className="font-display text-3xl font-bold uppercase mb-2 tracking-wide leading-none text-brand-on-primary font-black">
            FASILITAS LENGKAP
          </h3>
          <p className="font-medium text-sm leading-relaxed text-brand-on-primary/90">
            Jajaran beban bebas (free weights) terlengkap, mesin isolasi kardio modern, area fungsional terbuka yang luas, studio kelas full-AC, serta instruktur profesional ramah.
          </p>
        </div>
      </div>

      {/* Interactive Segment: Premium Gear Showcase */}
      <div className="mt-12 p-6 bg-brand-surface-container border border-brand-secondary/5 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <span className="text-xs text-brand-primary font-mono block uppercase tracking-widest">● GLOBAL MACHINERY STANDARD</span>
            <h3 className="font-display text-lg tracking-wider text-white uppercase mt-0.5">Alat Standar Kompetisi Atlet</h3>
          </div>
          <p className="text-xs text-brand-secondary max-w-md">
            Kami mengimpor merek-merek peralatan kebugaran tersertifikasi biomekanis demi memastikan latihan yang efektif dan meminimalkan risiko cedera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {equipmentBrands.map((brand) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.name}
                onClick={() => setSelectedBrand(selectedBrand === brand.name ? null : brand.name)}
                className={`p-4 rounded border transition-all duration-300 cursor-pointer ${
                  selectedBrand === brand.name
                    ? 'bg-brand-primary-container/10 border-brand-primary'
                    : 'bg-brand-background-deep border-brand-secondary/5 hover:border-brand-primary/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="text-brand-primary h-6 w-6" />
                  <span className="text-[10px] font-mono bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded uppercase">
                    ACTIVE GEAR
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm uppercase">{brand.name}</h4>
                <p className="text-xs text-brand-secondary mt-1 leading-relaxed">
                  {brand.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
