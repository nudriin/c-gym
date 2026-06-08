import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onJoinClick, onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link checking
      const sections = ['hero', 'about', 'classes', 'facilities', 'calculator', 'schedule', 'trainers'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'classes', label: 'Programs' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'trainers', label: 'Trainers' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-brand-background-deep/95 border-brand-secondary/10 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('hero')}
        >
          <Dumbbell className="text-brand-primary h-7 w-7 rotate-[-30deg]" />
          <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-brand-primary italic">
            CASADOVA <span className="text-white">GYM</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display tracking-widest text-sm uppercase transition-all duration-300 relative py-1 hover:text-brand-primary ${
                activeSection === item.id
                  ? 'text-brand-primary font-semibold'
                  : 'text-brand-secondary/80'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary rounded" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button and Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onJoinClick}
            className="bg-brand-primary-container text-brand-on-primary-fixed uppercase font-display text-sm px-5 py-2 font-bold hover:scale-105 active:scale-95 transition-all tracking-wider duration-150 rounded"
          >
            Join Now
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-primary p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-brand-background-deep border-b border-brand-secondary/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[350px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-lg uppercase tracking-wider w-full text-center py-2 hover:text-brand-primary ${
                activeSection === item.id ? 'text-brand-primary font-bold' : 'text-brand-secondary/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
