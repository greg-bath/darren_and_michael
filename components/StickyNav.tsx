'use client';

import { useEffect, useRef, useState } from 'react';

const locationItems = [
  { label: 'Johannesburg', id: 'johannesburg', dayId: 'day-1' },
  { label: 'Kruger',       id: 'kruger',       dayId: 'day-2' },
  { label: 'Cape Town',    id: 'capetown',      dayId: 'day-6' },
  { label: 'Wedding',      id: 'wedding',       dayId: 'day-9' },
];

const dayToSection: Record<number, string> = {
  1: 'johannesburg',
  2: 'kruger', 3: 'kruger', 4: 'kruger', 5: 'kruger',
  6: 'capetown', 7: 'capetown', 8: 'capetown',
  9: 'wedding', 10: 'wedding', 11: 'wedding', 12: 'wedding',
};

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState('johannesburg');
  const [showLocationPills, setShowLocationPills] = useState(false);
  const heroRef = useRef<number>(0);

  useEffect(() => {
    const hero = document.querySelector('[data-hero]') as HTMLElement | null;
    if (hero) heroRef.current = hero.offsetHeight;

    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > (heroRef.current || 500) - 80);

      // Show location pills only when the full itinerary section is in view
      const fullEl = document.getElementById('full-itinerary');
      setShowLocationPills(!!fullEl && fullEl.getBoundingClientRect().top <= window.innerHeight);

      for (let d = 12; d >= 1; d--) {
        const el = document.getElementById(`day-${d}`);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveLocation(dayToSection[d]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Also listen for tab changes broadcast from ItineraryTabs
  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail;
      setShowLocationPills(tab === 'full');
    };
    window.addEventListener('itinerary-tab-change', handler);
    return () => window.removeEventListener('itinerary-tab-change', handler);
  }, []);

  const scrollTo = (dayId: string) => {
    const el = document.getElementById(dayId);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        backgroundColor: 'var(--forest)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto">
        {showLocationPills && (
          <>
            <span
              className="text-white/60 text-xs uppercase tracking-widest mr-1 shrink-0"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Jump to
            </span>
            {locationItems.map(({ label, id, dayId }) => (
              <button
                key={id}
                onClick={() => scrollTo(dayId)}
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  backgroundColor: activeLocation === id ? 'var(--ochre)' : 'transparent',
                  color: activeLocation === id ? '#fff' : 'rgba(255,255,255,0.7)',
                  border: `1px solid ${activeLocation === id ? 'var(--ochre)' : 'rgba(255,255,255,0.2)'}`,
                }}
              >
                {label}
              </button>
            ))}
          </>
        )}

        {!showLocationPills && (
          <span
            className="text-white/70 text-sm"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '18px' }}
          >
            Darren &amp; Michael · April 2026
          </span>
        )}
      </div>
    </nav>
  );
}
