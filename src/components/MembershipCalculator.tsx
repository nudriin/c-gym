import React, { useState, useEffect } from 'react';
import { 
  UserCheck, Shield, Sparkles, Building2, Check, QrCode, 
  Dumbbell, Flame, Activity, Sparkle, RefreshCw, 
  Users, User, AlertTriangle, Calendar, Award, MessageCircle
} from 'lucide-react';

type CategoryId = 'gym' | 'paket-gym-zumba' | 'pilates' | 'zumba' | 'trampoline' | 'poundfit' | 'aerobic';

interface Option {
  id: string;
  label: string;
  price: number;
  desc?: string;
  badge?: string;
}

export default function MembershipCalculator() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('gym');
  const [activeOption, setActiveOption] = useState<string>('1_month');
  const [groupSize, setGroupSize] = useState<number>(4); // for Pilates private group (4-12 people)
  
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  
  // Registration Form State
  const [nameInput, setNameInput] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [goal, setGoal] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState<'reception'>('reception');

  // Categories metadata
  const categories = [
    { id: 'gym', label: 'Member Gym', icon: Dumbbell, desc: 'Akses area angkat beban & alat premium' },
    { id: 'paket-gym-zumba', label: 'Gym + Zumba', icon: Flame, desc: 'Gabungan akses gym & kelas bulanan' },
    { id: 'pilates', label: 'Pilates Class', icon: Activity, desc: 'Sesi penguatan postural & core' },
    { id: 'zumba', label: 'Zumba Class', icon: Sparkle, desc: 'Irama senam latin energik' },
    { id: 'poundfit', label: 'Poundfit Class', icon: Sparkle, desc: 'Latihan stik drum Ripstix seru' },
    { id: 'trampoline', label: 'Trampoline Class', icon: Sparkle, desc: 'Latihan rebound low-impact' },
    { id: 'aerobic', label: 'Aerobic BL', icon: Sparkle, desc: 'Kelas Body Language & kardio' },
  ] as const;

  // Options by category
  const categoryOptions: Record<CategoryId, Option[]> = {
    gym: [
      { id: '1_day', label: 'Harian / 1 Hari', price: 35000, desc: 'Akses 1 hari bebas ke area gym, free locker & shower.' },
      { id: '1_month', label: 'Member 1 Bulan', price: 300000, desc: 'Akses tak terbatas selama 1 bulan penuh.', badge: 'POPULER' },
      { id: '3_month', label: 'Member 3 Bulan', price: 800000, desc: 'Leasing kesehatan 3 bulan hemat biaya.' },
      { id: '6_month', label: 'Member 6 Bulan', price: 1650000, desc: 'Paket setengah tahun untuk kebugaran konsisten.' },
      { id: '12_month', label: 'Member 1 Tahun', price: 3000000, desc: 'Investasi terbaik 12 bulan penuh, nilai hemat maksimal!', badge: 'BEST VALUE' },
    ],
    'paket-gym-zumba': [
      { id: 'combo_1_month', label: 'Paket Combo 1 Bulan', price: 500000, desc: 'Akses Gym tak terbatas + Kelas Zumba sepuasnya selama sebulan.', badge: 'REKOMENDASI' }
    ],
    pilates: [
      { id: 'single', label: 'Pilates Harian', price: 150000, desc: 'Sesi uji coba harian kelas Pilates.' },
      { id: 'member_8x', label: 'Member (8x Pertemuan)', price: 950000, desc: 'Sesi rutin 8 kali pertemuan terstruktur.', badge: 'KARTU MEMBER' },
      { id: 'private_solo_1', label: 'Private Solo (1 Sesi)', price: 300000, desc: 'Pendampingan privat 1-on-1 intensif.' },
      { id: 'private_solo_4', label: 'Private Solo (4 Sesi)', price: 1000000, desc: 'Program privat 4 sesi hasil lebih presisi.', badge: 'HEBAT' },
      { id: 'private_group', label: 'Private Group (4 - 12 Orang)', price: 480000, desc: 'Sesi korporat / grup privat. Min. 4 orang (Rp480.000). Tambahan di atas 4 orang dikenakan +Rp120.000/orang.' },
    ],
    zumba: [
      { id: 'single', label: '1x Pertemuan', price: 30000, desc: 'Ikuti 1 sesi kelas Zumba ceria harian.' },
      { id: 'pack_10x', label: 'Paket 10x Pertemuan', price: 250000, desc: 'Tiket multi-sesi zumba hemat harga paketan.', badge: 'HEMAT Rp50K' },
    ],
    trampoline: [
      { id: 'single', label: 'Trampoline Harian', price: 50000, desc: 'Sesi latihan rebounder seru harian di studio.' }
    ],
    poundfit: [
      { id: 'single', label: 'Poundfit Harian', price: 35000, desc: 'Ikuti 1 sesi olahraga gebuk stik Ripstix.' },
      { id: 'member_10x', label: 'Member (10x Pertemuan)', price: 300000, desc: 'Tiket paket 10 sesi Poundfit hemat & berenergi.', badge: 'BEST PRICE' },
    ],
    aerobic: [
      { id: 'single', label: 'Aerobic BL Harian', price: 25000, desc: 'Sesi harian kelas aerobik Body Language pembakar kalori.' }
    ]
  };

  // Switch option default whenever category change
  useEffect(() => {
    const options = categoryOptions[activeCategory];
    if (options && options.length > 0) {
      // Find default option (populer or first)
      const recommendedOption = options.find(o => o.badge) || options[0];
      setActiveOption(recommendedOption.id);
    }
  }, [activeCategory]);

  // Compute Active Price
  const getSelectedOptionObj = (): Option | undefined => {
    return categoryOptions[activeCategory]?.find(o => o.id === activeOption);
  };

  const calculateTotalPrice = (): number => {
    const currentOpt = getSelectedOptionObj();
    if (!currentOpt) return 0;

    if (activeCategory === 'pilates' && activeOption === 'private_group') {
      const baseGroupSize = 4;
      const basePrice = 480000;
      if (groupSize <= baseGroupSize) {
        return basePrice;
      } else {
        return basePrice + (groupSize - baseGroupSize) * 120000;
      }
    }

    return currentOpt.price;
  };

  const totalPrice = calculateTotalPrice();
  const formattedPrice = totalPrice.toLocaleString('id-ID');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput || !whatsapp) {
      alert('Mohon lengkapi Nama Anda dan nomor WhatsApp!');
      return;
    }
    const randId = `CSV-${Math.floor(Math.random() * 90000) + 10000}`;
    setBookingId(randId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setNameInput('');
    setWhatsapp('');
    setGoal('general');
    setPaymentMethod('reception');
    setIsSubmitted(false);
    setShowCheckoutModal(false);
  };

  const [copied, setCopied] = useState(false);

  const getWhatsAppMessage = () => {
    const categoryName = getCategoryLabel(activeCategory).toUpperCase();
    const optionName = getSelectedOptionObj()?.id === 'private_group' 
      ? `PRIVATE GROUP (${groupSize} ORANG)` 
      : (getSelectedOptionObj()?.label || '-').toUpperCase();
    
    const text = `Halo Admin Casadova, saya ingin mengonfirmasi booking kelas berikut:

*ID Booking:* ${bookingId}
*Nama:* ${nameInput.toUpperCase()}
*WhatsApp:* ${whatsapp}
*Layanan:* ${categoryName}
*Pilihan:* ${optionName}
*Total Tagihan:* Rp ${formattedPrice}
*Metode Pembayaran:* Manual di Resepsionis / Kasir

Mohon konfirmasi booking saya. Terima kasih!`;

    return encodeURIComponent(text);
  };

  const getWhatsAppLink = () => {
    return `https://api.whatsapp.com/send/?phone=6281225913828&text=${getWhatsAppMessage()}&type=phone_number&app_absent=0`;
  };

  const handleDownloadTicket = () => {
    const categoryName = getCategoryLabel(activeCategory).toUpperCase();
    const optionName = getSelectedOptionObj()?.id === 'private_group' 
      ? `PRIVATE GROUP (${groupSize} ORANG)` 
      : (getSelectedOptionObj()?.label || '-').toUpperCase();

    const fileContent = `====================================
        CASADOVA SPORT CLUB
       TIKET BOOKING RESMI
====================================
BILL ID: ${bookingId}
PELANGGAN: ${nameInput.toUpperCase()}
WHATSAPP: ${whatsapp}
LAYANAN: ${categoryName}
PILIHAN SESI: ${optionName}
TOTAL TAGIHAN: Rp ${formattedPrice}
STATUS BAYAR: BELUM BAYAR (BAYAR DI RESEPSIONIS)
====================================
Tunjukkan tiket ini kepada Resepsionis
saat kedatangan di Klub.
====================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Tiket-${bookingId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyTicket = () => {
    const categoryName = getCategoryLabel(activeCategory).toUpperCase();
    const optionName = getSelectedOptionObj()?.id === 'private_group' 
      ? `PRIVATE GROUP (${groupSize} ORANG)` 
      : (getSelectedOptionObj()?.label || '-').toUpperCase();

    const text = `*TIKET BOOKING CASADOVA*
BILL ID: ${bookingId}
PELANGGAN: ${nameInput.toUpperCase()}
WHATSAPP: ${whatsapp}
LAYANAN: ${categoryName}
OPSI: ${optionName}
TOTAL: Rp ${formattedPrice}
METODE: Manual di Resepsionis / Kasir`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getCategoryLabel = (id: CategoryId) => {
    return categories.find(c => c.id === id)?.label || id;
  };

  return (
    <section id="calculator" className="py-20 px-6 md:px-10 bg-brand-background scroll-mt-12">
      <div className="max-w-6xl mx-auto bg-brand-surface-container border-t-4 border-brand-primary p-6 sm:p-10 rounded shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs text-brand-primary font-mono block uppercase tracking-widest mb-1">
            ● SIMULATOR PRICELIST & INVESTASI KESEHATAN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-2 text-white">
            Kalkulator & Biaya Layanan
          </h2>
          <p className="text-brand-secondary text-sm max-w-lg mx-auto leading-relaxed">
            Pilih jenis keanggotaan gym atau kelas studio favorit Anda secara instan untuk melihat simulasi biaya transparan.
          </p>
        </div>

        {/* 1. Category Selector Cards Grid */}
        <div className="mb-8">
          <label className="block font-display text-xs uppercase tracking-widest text-brand-secondary mb-4 font-semibold text-center sm:text-left">
            Pilih Kategori Layanan / Kelas
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-3 rounded border text-center flex flex-col items-center justify-between transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                      : 'border-brand-secondary/15 bg-brand-background-deep hover:border-brand-primary/40 text-brand-secondary'
                  }`}
                >
                  <div className="p-2 bg-black/30 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <IconComp size={18} className={isSelected ? 'text-brand-primary' : 'text-brand-secondary'} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-tight uppercase font-display select-none">
                      {cat.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Dual Column Simulator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sub options inside currently selected category */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-brand-background-deep p-6 rounded border border-brand-secondary/10">
              <div className="flex justify-between items-center mb-4 border-b border-brand-secondary/10 pb-3">
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={16} className="text-brand-primary" />
                  Paket Pilihan: {getCategoryLabel(activeCategory)}
                </h3>
                <span className="text-[10px] font-mono text-brand-secondary uppercase bg-black/40 px-2.5 py-1 rounded">
                  {categoryOptions[activeCategory]?.length || 0} Pilihan
                </span>
              </div>

              {/* Grid Options list */}
              <div className="space-y-3">
                {categoryOptions[activeCategory]?.map((option) => {
                  const isSelected = activeOption === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => setActiveOption(option.id)}
                      className={`p-4 border rounded cursor-pointer transition-all duration-300 flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'border-brand-primary bg-brand-primary/5'
                          : 'border-brand-secondary/10 bg-brand-surface-container hover:border-brand-primary/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="pt-1">
                          <input
                            type="radio"
                            name="subOption"
                            checked={isSelected}
                            readOnly
                            className="w-4 h-4 text-brand-primary accent-brand-primary border-brand-secondary/30 bg-brand-background focus:ring-brand-primary"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm text-white uppercase">{option.label}</span>
                            {option.badge && (
                              <span className="text-[9px] font-mono font-bold bg-brand-primary text-black px-1.5 py-0.5 rounded tracking-wide leading-none">
                                {option.badge}
                              </span>
                            )}
                          </div>
                          {option.desc && (
                            <p className="text-xs text-brand-secondary mt-1 max-w-md leading-relaxed">
                              {option.desc}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-mono text-brand-primary font-bold">Rp</span>
                        <span className="text-base font-mono text-brand-primary font-bold ml-0.5">
                          {option.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Pilates Class Private Group Input */}
              {activeCategory === 'pilates' && activeOption === 'private_group' && (
                <div className="mt-5 p-4 bg-brand-surface-container border border-dashed border-brand-primary/30 rounded animate-fade-in space-y-3">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <h4 className="text-xs font-mono text-white uppercase font-bold flex items-center gap-1.5">
                        <Users size={14} className="text-brand-primary" /> Tentukan Jumlah Anggota Grup
                      </h4>
                      <p className="text-[10px] text-brand-secondary mt-0.5">
                        Kisaran kapasitas privat kelompok: 4 sampai 12 orang.
                      </p>
                    </div>
                    
                    {/* Control input */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGroupSize(Math.max(4, groupSize - 1))}
                        disabled={groupSize <= 4}
                        className="px-2.5 py-1 bg-brand-background-deep border border-brand-secondary/20 rounded hover:border-brand-primary text-white font-bold transition-colors disabled:opacity-30 disabled:pointer-events-none"
                      >
                        -
                      </button>
                      <span className="font-mono text-sm font-bold text-brand-primary px-3 text-center min-w-8">
                        {groupSize} Orang
                      </span>
                      <button
                        type="button"
                        onClick={() => setGroupSize(Math.min(12, groupSize + 1))}
                        disabled={groupSize >= 12}
                        className="px-2.5 py-1 bg-brand-background-deep border border-brand-secondary/20 rounded hover:border-brand-primary text-white font-bold transition-colors disabled:opacity-30 disabled:pointer-events-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Calculator Detail group breakdown */}
                  <div className="text-[11px] font-mono text-brand-secondary bg-black/30 p-2.5 rounded border border-brand-secondary/5 flex flex-col justify-between space-y-1">
                    <div className="flex justify-between">
                      <span>TARIF MINIMAL (4 ORANG):</span>
                      <span className="text-white">Rp 480.000</span>
                    </div>
                    {groupSize > 4 && (
                      <div className="flex justify-between">
                        <span>TAMBAHAN (+{groupSize - 4} ORANG x Rp 120k):</span>
                        <span className="text-white">Rp {((groupSize - 4) * 120000).toLocaleString('id-ID')}</span>
                      </div>
                    )}
                    <div className="border-t border-brand-secondary/15 mt-1.5 pt-1.5 flex justify-between font-bold text-brand-primary">
                      <span>TOTAL PILATES GROUP:</span>
                      <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic policy terms warning banner tailored based on selected category */}
            {activeCategory === 'pilates' && (
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded flex items-start gap-3 text-xs leading-relaxed animate-fade-in">
                <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wider mb-0.5 font-mono text-[10px]">⚠️ PERATURAN LAYANAN PILATES CLASS</p>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 text-brand-secondary">
                    <li>Tidak bisa di-reschedule / di-refund (batal / hangus otomatis).</li>
                    <li><strong className="text-white">Wajib menggunakan kaos kaki pilates</strong> demi faktor keselamatan higienis sendi.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live total price with action buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-background-deep p-6 sm:p-8 rounded border border-brand-secondary/10 flex flex-col justify-between items-center text-center relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <span className="font-display tracking-widest text-xs uppercase text-brand-secondary mb-3 font-semibold block">
                Total Nilai Investasi
              </span>
              
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-brand-primary text-xl font-bold font-display">Rp</span>
                <span className="text-4xl sm:text-5xl font-mono text-brand-primary font-black tracking-tight">
                  {formattedPrice}
                </span>
              </div>

              {/* Details of chosen */}
              <div className="bg-black/30 w-full p-4 rounded border border-brand-secondary/5 text-xs text-brand-secondary space-y-2 text-left mt-4 mb-6">
                <div className="flex justify-between">
                  <span>Kategori:</span>
                  <span className="text-white font-bold uppercase">{getCategoryLabel(activeCategory)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pilihan Sesi:</span>
                  <span className="text-white font-bold uppercase text-right max-w-[180px] truncate">
                    {getSelectedOptionObj()?.id === 'private_group' 
                      ? `Private Group (${groupSize} Orang)` 
                      : getSelectedOptionObj()?.label || '-'}
                  </span>
                </div>
                <div className="border-t border-brand-secondary/10 pt-2 flex justify-between font-bold text-[11px] font-mono text-brand-primary mt-1">
                  <span>METODE PEMBAYARAN:</span>
                  <span>QRIS INSTAN / CASH</span>
                </div>
              </div>

              {/* Live benefit icons checklist */}
              <div className="w-full text-xs text-brand-secondary text-left space-y-2 border-t border-brand-secondary/10 pt-4 mb-6">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-primary flex-shrink-0" />
                  <span>Akses studio & alat berstandar tinggi (CGC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-primary flex-shrink-0" />
                  <span>Free air mineral prima, shower panas & loker</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-brand-primary flex-shrink-0" />
                  <span>Pendampingan instruktur profesional yang ramah</span>
                </div>
              </div>

              <button
                onClick={() => setShowCheckoutModal(true)}
                className="w-full bg-brand-primary-container hover:bg-brand-primary text-brand-on-primary-fixed uppercase font-display text-sm font-extrabold tracking-widest py-4 cursor-pointer text-center hover:scale-102 transition-all duration-150 rounded"
              >
                Booking & Terbitkan Tiket
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Multi-step checkout receipt dialog */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
          {!isSubmitted ? (
            <div className="bg-brand-surface-container border border-brand-outline/30 w-full max-w-lg p-6 rounded relative text-left my-8">
              <h3 className="font-display text-xl font-bold uppercase text-brand-primary mb-1 border-b border-brand-secondary/10 pb-3 flex items-center gap-2">
                <Calendar size={18} /> FORMULIR REGISTRASI MEMBER
              </h3>
              
              <form onSubmit={handleRegisterSubmit} className="space-y-4 py-3">
                <div>
                  <label className="block text-xs font-mono text-brand-secondary uppercase mb-1.5 font-semibold">
                    1. Nama Lengkap Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full bg-brand-background-deep border border-brand-secondary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded p-2.5 text-sm uppercase text-white font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brand-secondary uppercase mb-1.5 font-semibold">
                    2. Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-brand-background-deep border border-brand-secondary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded p-2.5 text-sm text-white font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-brand-secondary uppercase mb-1.5 font-semibold">
                      3. Target Fitness Anda
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-brand-background-deep border border-brand-secondary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded p-2.5 text-sm text-brand-secondary"
                    >
                      <option value="general">Meningkatkan Stamina & Sehat</option>
                      <option value="hypertrophy">Bentuk Massa Otot (Athletic Body)</option>
                      <option value="weightloss">Penurunan Lemak (Fat Loss)</option>
                      <option value="flexibility">Postur & Kelenturan Tubuh</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-brand-secondary uppercase mb-1.5 font-semibold">
                      4. Metode Pembayaran
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-full bg-brand-background-deep border border-brand-secondary/20 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded p-2.5 text-sm text-brand-secondary"
                    >
                      <option value="reception">Bayar di Resepsionis (Manual)</option>
                    </select>
                  </div>
                </div>

                {/* Receipt In Calculator */}
                <div className="bg-brand-background-deep p-4 rounded border border-brand-secondary/10 whitespace-pre-wrap font-mono text-xs text-brand-secondary leading-normal">
                  <div className="text-center font-bold text-white border-b border-brand-secondary/15 pb-2 mb-2">
                    RINCIAN NOTA BOOKING CASADOVA GYM
                  </div>
                  <div className="flex justify-between">
                    <span>JENIS LAYANAN:</span>
                    <span className="text-white font-bold">{getCategoryLabel(activeCategory).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OPSI TARIF:</span>
                    <span className="text-white font-bold">
                      {getSelectedOptionObj()?.id === 'private_group' 
                        ? `PRIVATE GROUP (${groupSize} ORANG)` 
                        : (getSelectedOptionObj()?.label || '-').toUpperCase()}
                    </span>
                  </div>
                  {activeCategory === 'pilates' && (
                    <div className="flex justify-between text-yellow-500 font-bold">
                      <span>KETENTUAN PILATES:</span>
                      <span>WAJIB KAOS KAKI</span>
                    </div>
                  )}
                  <div className="border-t border-dashed border-white/10 my-2 pt-2 flex justify-between font-bold text-white">
                    <span>TOTAL TAGIHAN:</span>
                    <span className="text-brand-primary">Rp {formattedPrice}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2 text-xs sm:text-sm">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-brand-primary-container text-brand-on-primary-fixed uppercase font-display font-black text-center hover:scale-102 transition-all rounded"
                  >
                    Konfirmasi Member
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCheckoutModal(false)}
                    className="px-5 py-3 border border-brand-secondary text-brand-secondary font-display uppercase rounded hover:text-white"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-brand-surface-container border border-brand-outline/30 w-full max-w-md p-6 rounded relative text-center my-8">
              <div className="mx-auto w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-4">
                <Check size={32} />
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Booking Terdaftar!
              </h3>
              
              <p className="text-xs text-brand-secondary leading-relaxed mb-6">
                Terima kasih, <span className="text-white font-bold font-mono">{nameInput.toUpperCase()}</span>. Sesi Anda telah kami catat dalam antrean sistem Casadova. Silakan konfirmasi tiket Anda ke admin (via WhatsApp) atau bayar secara manual di kasir/resepsionis.
              </p>

              {/* Unique Receipt Layout - QRIS Removed */}
              <div className="bg-brand-background-deep p-4 rounded border border-brand-secondary/20 text-xs font-mono text-left mb-6 relative">
                <div className="text-center text-[10px] text-brand-primary uppercase tracking-widest font-bold border-b border-brand-secondary/15 pb-2 mb-3">
                  NOTA TIKET BOOKING CASADOVA
                </div>

                <div className="space-y-1.5 select-all">
                  <p className="text-brand-secondary">BILL ID: <span className="text-white font-bold">{bookingId}</span></p>
                  <p className="text-brand-secondary">PELANGGAN: <span className="text-white font-bold">{nameInput.toUpperCase()}</span></p>
                  <p className="text-brand-secondary">WHATSAPP: <span className="text-white font-bold">{whatsapp}</span></p>
                  <p className="text-brand-secondary">LAYANAN: <span className="text-white font-bold uppercase">{getCategoryLabel(activeCategory)}</span></p>
                  <p className="text-brand-secondary">PILIHAN: <span className="text-white font-bold uppercase">
                    {getSelectedOptionObj()?.id === 'private_group' 
                      ? `Private Group (${groupSize} Orang)` 
                      : getSelectedOptionObj()?.label || '-'}
                  </span></p>
                  <p className="text-brand-secondary">TOTAL BILL: <span className="text-brand-primary font-bold">Rp {formattedPrice}</span></p>
                  <div className="pt-2 border-t border-dashed border-brand-secondary/20 mt-2">
                    <p className="text-brand-secondary">STATUS PAY: <span className="text-yellow-500 font-bold uppercase">MANUAL DI RESEPSIONIS</span></p>
                  </div>
                </div>
              </div>

              {/* Booking Success Interactive Options */}
              <div className="space-y-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-success-vibrant hover:bg-brand-success-vibrant/90 text-white uppercase font-display text-xs sm:text-sm font-extrabold tracking-wider rounded flex items-center justify-center gap-2 transition-all duration-150"
                >
                  <MessageCircle size={18} /> Konfirmasi Tiket ke Admin (WA)
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDownloadTicket}
                    className="py-2.5 bg-black/40 border border-brand-secondary/20 hover:border-brand-primary text-brand-secondary hover:text-white uppercase font-display text-[10px] font-bold tracking-wider rounded transition-all"
                  >
                    Download (.txt)
                  </button>
                  <button
                    onClick={handleCopyTicket}
                    className="py-2.5 bg-black/40 border border-brand-secondary/20 hover:border-brand-primary text-brand-secondary hover:text-white uppercase font-display text-[10px] font-bold tracking-wider rounded transition-all"
                  >
                    {copied ? 'Tersalin!' : 'Salin Detail'}
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3 mt-4 bg-brand-primary text-brand-on-primary-fixed uppercase font-display text-xs sm:text-sm font-bold tracking-wider rounded"
                >
                  Kembali Ke Kalkulator
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
