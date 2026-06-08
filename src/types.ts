export interface Program {
  id: string;
  name: string;
  image: string;
  description: string;
  calories: number;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  whatsappUrl?: string;
}

export interface Facility {
  id: string;
  title: string;
  image: string;
  area: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  rating: number;
  specialties: string[];
}

export interface ScheduleItem {
  time: string;
  senin: string;
  selasa: string;
  rabu: string;
  kamis: string;
  jumat: string;
  sabtu: string;
  minggu: string;
}

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'zumba',
    name: 'CASADOVA STUDIO ZUMBA FITNESS',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'Bakar kalori secara maksimal dengan irama musik Latin dan internasional yang dinamis, seru, dan penuh energi kelompok zumba kami.',
    calories: 600,
    duration: '60 Menit',
    intensity: 'High',
    whatsappUrl: 'https://chat.whatsapp.com/F7ELzReug2d1z7NyWhAeza?mode=hqrc'
  },
  {
    id: 'poundfit',
    name: 'CGC POUNDFIT CLASS',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    description: 'Latihan kardio menggunakan Ripstix (stik drum ringan khusus) yang menggabungkan pilates, latihan kekuatan, dan gerakan aerobik berenergi tinggi.',
    calories: 500,
    duration: '50 Menit',
    intensity: 'High',
    whatsappUrl: 'https://chat.whatsapp.com/Go63IAG0s38HZY0wtLNRyq?mode=wwt'
  },
  {
    id: 'trampoline',
    name: 'CGC TRAMPOLINE CLASS (TDFI)',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=800',
    description: 'Metode latihan rebound kardio yang seru, berdampak rendah pada persendian, sangat efektif mengencangkan tubuh bagian bawah dan otot inti.',
    calories: 700,
    duration: '45 Menit',
    intensity: 'High',
    whatsappUrl: 'https://chat.whatsapp.com/HtxqfsOha7BB4n0hvkOLFM'
  },
  {
    id: 'spinning',
    name: 'CGC SPINNING CLASS',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'Sesi bersepeda statis intensitas tinggi berpemandu musik yang dirancang khusus untuk meningkatkan stamina jantung, daya tahan, dan membakar lemak tubuh.',
    calories: 650,
    duration: '45 Menit',
    intensity: 'High',
    whatsappUrl: 'https://chat.whatsapp.com/HInrgKtOqNZKA4zCLLiwnK?mode=hqrc'
  },
  {
    id: 'pilates',
    name: 'CGC PILATES CLASS',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    description: 'Fokus pada kekuatan otot inti, perataan tulang belakang, fleksibilitas fungsional menyeluruh, serta keselarasan postur tubuh Anda.',
    calories: 280,
    duration: '60 Menit',
    intensity: 'Medium',
    whatsappUrl: 'https://chat.whatsapp.com/IShLJVn3pUEBFESbfFu18i'
  },
  {
    id: 'trx',
    name: 'CGC TRX CLASS',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    description: 'Suspension training menggunakan berat badan sendiri sebagai resistensi untuk melatih kekuatan, keseimbangan, koordinasi, dan stabilitas sendi.',
    calories: 480,
    duration: '50 Menit',
    intensity: 'High',
    whatsappUrl: 'https://chat.whatsapp.com/HQQHLJ0jINW1cF9H9U2mp3?mode=hqrc'
  },
  {
    id: 'yoga',
    name: 'CGC YOGA CLASS',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    description: 'Sesi hatha, vinyasa, atau yin yoga terstruktur untuk melatih kelenturan tubuh total, kontrol napas, serta ketenangan batin yang seimbang.',
    calories: 220,
    duration: '60 Menit',
    intensity: 'Low',
    whatsappUrl: 'https://chat.whatsapp.com/LxnpAoq1ViSKDGYVQCL25r'
  },
  {
    id: 'mat-pilates',
    name: 'CGC MAT PILATES CLASS',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800',
    description: 'Latihan pilates fungsional di atas matras yang mengedepankan kontrol pernapasan presisi, stabilitas perut, pinggul, panggul, dan penguatan punggung bawah.',
    calories: 300,
    duration: '60 Menit',
    intensity: 'Medium',
    whatsappUrl: 'https://chat.whatsapp.com/EEufmP11xBcKQGHRxZEN2b'
  },
  {
    id: 'aerobic-bl',
    name: 'CGC AEROBIC BL CLASS',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    description: 'Sesi latihan aerobik dipadukan dengan gerakan Body Language (BL) intensif yang berfokus melatih kekuatan otot inti, stamina kardio, dan pembakaran lemak optimal.',
    calories: 400,
    duration: '50 Menit',
    intensity: 'Medium'
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'weight-area',
    title: 'Weight Area',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    area: 'Lantai 1 Utama',
    description: 'Area beban bebas modern dengan dumbbell set kokoh presisi (2kg - 50kg), power racks handal, squat stations, barbel olimpiade, dan aneka machines beban terkini.'
  },
  {
    id: 'cardio-zone',
    title: 'Cardio Zone',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000',
    area: 'Lantai 2 Balkon',
    description: 'Dilengkapi dengan puluhan treadmill profesional premium layar sentuh, stationary bikes modern, magnetic rowing machines, dan cross trainers berteknologi tinggi.'
  },
  {
    id: 'premium-lockers',
    title: 'Premium Lockers',
    image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&q=80&w=1000',
    area: 'Koridor Samping',
    description: 'Fasilitas loker aman ber-CCTV, ruang mandi air hangat premium, sabun sampo aromaterapi gratis, hairdryer higienis, serta ruang ganti eksekutif bersih.'
  }
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'coach-alex',
    name: 'Coach Alex',
    role: 'Strength & Conditioning Specialist',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
    description: 'Spesialis dalam pembentukan massa otot, pemulihan pasca cedera ringan, dan peningkatan kekuatan fungsional atletis.',
    rating: 4.9,
    specialties: ['Hypertrophy', 'Functional Training', 'Rehab Conditioning']
  },
  {
    id: 'coach-sarah',
    name: 'Coach Sarah',
    role: 'Cardio & Weight Loss Expert',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800',
    description: 'Membantu Anda mencapai berat badan ideal secara konsisten melalui program kardio efektif, HIIT, serta manajemen gizi kustom.',
    rating: 4.8,
    specialties: ['HIIT Sessions', 'Weight Management', 'Circuit Workouts']
  },
  {
    id: 'coach-rangga',
    name: 'Coach Rangga',
    role: 'Muay Thai Specialist',
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=800',
    description: 'Expert bela diri Muay Thai, bela diri taktis, dan melatih teknik serangan presisi tinggi untuk kardio ekstrem luar biasa.',
    rating: 5.0,
    specialties: ['Muay Thai Strikes', 'Self-Defense Tacts', 'High Intensity Punch']
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '07:30',
    senin: '-',
    selasa: '-',
    rabu: '-',
    kamis: '-',
    jumat: '-',
    sabtu: 'CGC YOGA CLASS',
    minggu: '-'
  },
  {
    time: '08:00',
    senin: 'CASADOVA STUDIO ZUMBA FITNESS',
    selasa: 'CASADOVA STUDIO ZUMBA FITNESS',
    rabu: 'CASADOVA STUDIO ZUMBA FITNESS',
    kamis: 'CASADOVA STUDIO ZUMBA FITNESS / CGC TRAMPOLINE CLASS (TDFI)',
    jumat: 'CASADOVA STUDIO ZUMBA FITNESS',
    sabtu: '-',
    minggu: '-'
  },
  {
    time: '09:00',
    senin: '-',
    selasa: '-',
    rabu: '-',
    kamis: '-',
    jumat: '-',
    sabtu: 'CASADOVA STUDIO ZUMBA FITNESS',
    minggu: 'CASADOVA STUDIO ZUMBA FITNESS'
  },
  {
    time: '09:30',
    senin: 'CGC YOGA CLASS',
    selasa: 'CGC YOGA CLASS',
    rabu: 'CGC YOGA CLASS',
    kamis: 'CGC YOGA CLASS',
    jumat: 'CGC YOGA CLASS',
    sabtu: '-',
    minggu: '-'
  },
  {
    time: '16:00',
    senin: 'CGC POUNDFIT CLASS',
    selasa: 'CASADOVA STUDIO ZUMBA FITNESS / CGC TRAMPOLINE CLASS (TDFI)',
    rabu: 'CASADOVA STUDIO ZUMBA FITNESS',
    kamis: 'CASADOVA STUDIO ZUMBA FITNESS',
    jumat: 'CGC AEROBIC BL CLASS',
    sabtu: 'CASADOVA STUDIO ZUMBA FITNESS',
    minggu: 'CASADOVA STUDIO ZUMBA FITNESS / CGC TRAMPOLINE CLASS (TDFI) / CGC YOGA CLASS'
  },
  {
    time: '18:30',
    senin: 'CASADOVA STUDIO ZUMBA FITNESS',
    selasa: 'CASADOVA STUDIO ZUMBA FITNESS / CGC TRAMPOLINE CLASS (TDFI)',
    rabu: 'CASADOVA STUDIO ZUMBA FITNESS',
    kamis: 'CGC POUNDFIT CLASS / CGC TRAMPOLINE CLASS (TDFI)',
    jumat: 'CASADOVA STUDIO ZUMBA FITNESS',
    sabtu: 'CGC POUNDFIT CLASS / CGC TRAMPOLINE CLASS (TDFI)',
    minggu: 'CASADOVA STUDIO ZUMBA FITNESS / CGC TRAMPOLINE CLASS (TDFI)'
  }
];
