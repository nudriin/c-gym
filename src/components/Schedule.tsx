import React, { useState } from 'react';
import { SCHEDULE_DATA, ScheduleItem } from '../types';
import { CalendarDays, Filter, UserCheck } from 'lucide-react';

export default function Schedule() {
  const [filterClass, setFilterClass] = useState<string>('all');

  const filterButtons = [
    { id: 'all', label: 'SEMUA' },
    { id: 'zumba', label: 'ZUMBA' },
    { id: 'trampoline', label: 'TRAMPOLINE' },
    { id: 'poundfit', label: 'POUNDFIT' },
    { id: 'aerobic', label: 'AEROBIC BL' },
    { id: 'yoga', label: 'YOGA' },
    { id: 'spinning', label: 'SPINNING' },
    { id: 'pilates', label: 'PILATES' },
  ];

  const getBadgeStyle = (workout: string) => {
    const w = workout.toLowerCase();
    if (w.includes('yoga')) {
      return 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20';
    }
    if (w.includes('zumba')) {
      return 'bg-brand-success-vibrant/10 text-brand-success-vibrant border border-brand-success-vibrant/20';
    }
    if (w.includes('poundfit')) {
      return 'bg-[#ffb786]/15 text-[#ffb786] border border-[#ffb786]/25';
    }
    if (w.includes('spinning')) {
      return 'bg-brand-intensity-red/10 text-brand-intensity-red border border-brand-intensity-red/20';
    }
    if (w.includes('trampoline')) {
      return 'bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20';
    }
    if (w.includes('aerobic')) {
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    }
    return 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20';
  };

  const isHighlighted = (workout: string) => {
    if (filterClass === 'all') return true;
    return workout.toLowerCase().includes(filterClass);
  };

  return (
    <section id="schedule" className="py-20 bg-brand-surface-container-low px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <span className="text-brand-primary font-display tracking-widest text-xs uppercase block font-semibold mb-1">
              WEEKLY ROUTINE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              Jadwal Kelas Digital
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-brand-secondary font-mono mr-2 flex items-center gap-1.5 uppercase font-semibold">
              <Filter size={14} className="text-brand-primary" /> Filter Kelas:
            </span>
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterClass(btn.id)}
                className={`py-1.5 px-3.5 font-display text-[11px] font-bold tracking-widest uppercase rounded cursor-pointer transition-all ${
                  filterClass === btn.id
                    ? 'bg-brand-primary text-brand-on-primary-fixed shadow-md'
                    : 'bg-brand-background-deep text-brand-secondary hover:text-white border border-brand-secondary/5'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table Container */}
        <div className="overflow-x-auto border border-brand-secondary/10 rounded-lg shadow-xl">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-brand-background-deep font-display tracking-widest text-[#ffb786] uppercase text-xs border-b border-brand-secondary/10">
              <tr>
                <th className="p-4 border-r border-brand-secondary/10 font-bold select-none text-center w-24">Waktu</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold">Senin</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold">Selasa</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold">Rabu</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold">Kamis</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold">Jumat</th>
                <th className="p-4 border-r border-brand-secondary/10 font-bold text-brand-primary">Sabtu</th>
                <th className="p-4 text-brand-primary font-bold">Minggu</th>
              </tr>
            </thead>
            
            <tbody className="text-xs select-none">
              {SCHEDULE_DATA.map((row) => (
                <tr
                  key={row.time}
                  className="border-b border-brand-secondary/10 hover:bg-brand-surface-elevated/20 transition-colors"
                >
                  {/* Row: Waktu cell */}
                  <td className="p-4 font-mono text-center text-brand-secondary border-r border-brand-secondary/10 font-bold text-sm sm:text-base tracking-wide bg-brand-background-deep/10">
                    {row.time}
                  </td>

                  {/* Days mappings */}
                  {(['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'] as const).map((day) => {
                    const classValue = row[day];
                    const classList = classValue !== '-' ? classValue.split(' / ') : [];
                    const isSession = classList.length > 0;

                    return (
                      <td
                        key={day}
                        className={`p-3 border-r last:border-r-0 border-brand-secondary/10 transition-all align-top min-w-[130px] ${
                          !isSession ? 'bg-black/5' : ''
                        }`}
                      >
                        {isSession ? (
                          <div className="flex flex-col gap-2">
                            {classList.map((subClass) => {
                              const activeHighlight = isHighlighted(subClass);
                              return (
                                <div
                                  key={subClass}
                                  className={`flex flex-col items-start gap-1 p-2.5 rounded border border-brand-secondary/5 duration-200 transition-all text-left ${getBadgeStyle(
                                    subClass
                                  )} ${
                                    activeHighlight
                                      ? 'bg-black/25 opacity-100'
                                      : 'opacity-20 bg-black/10'
                                  }`}
                                >
                                  <span className="text-[10px] font-mono tracking-wide font-extrabold uppercase leading-tight">
                                    {subClass}
                                  </span>
                                  
                                  <div className="flex items-center justify-between w-full mt-2 border-t border-white/5 pt-1.5 gap-1">
                                    <span className="text-[8px] font-mono text-brand-secondary">
                                      Lokasi Ruang
                                    </span>
                                    <span className="text-[8px] font-mono text-brand-secondary text-right truncate max-w-[70px]">
                                      {subClass.toLowerCase().includes('yoga') || subClass.toLowerCase().includes('pilates') ? 'Studio 2' : 'Studio L-1'}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <span className="font-mono text-[10px] block text-center select-none text-brand-secondary/15 py-3">
                            -
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informative Tip */}
        <p className="mt-4 text-center text-xs text-brand-secondary italic">
          💡 Catatan: Jadwal kelas dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu demi kenyamanan bersama.
        </p>

      </div>
    </section>
  );
}
