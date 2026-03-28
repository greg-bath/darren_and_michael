'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('itinerary-start');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="relative grain-overlay flex items-center justify-center"
      style={{ height: '100dvh', minHeight: '600px' }}
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 26, 26, 0.55)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-up">
          <h1
            className="text-white leading-none mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(64px, 10vw, 96px)',
              textShadow: '0 2px 24px rgba(0,0,0,0.4)',
            }}
          >
            Darren &amp; Michael
          </h1>
        </div>

        <div className="animate-fade-up-d1">
          <p
            className="text-white/90 uppercase tracking-[0.25em] text-sm md:text-base"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
          >
            April 2026 · South Africa
          </p>
        </div>

        <div className="animate-fade-up-d2 mt-3">
          <p
            className="text-white/70 text-base md:text-lg"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '22px' }}
          >
            12 days · Johannesburg · Kruger · Cape Town · Stellenbosch
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="animate-fade-up-d3 absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          Scroll
        </span>
        <ChevronDown size={22} className="animate-chevron" />
      </button>
    </div>
  );
}
