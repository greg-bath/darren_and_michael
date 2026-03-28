'use client';

import { useEffect, useRef, useState } from 'react';
import ActivityCard from './ActivityCard';
import type { Day } from '@/data/itinerary';

const locationColors: Record<string, { bg: string; text: string }> = {
  johannesburg: { bg: '#2D4A3E', text: '#fff' },
  kruger:       { bg: '#8B4513', text: '#fff' },
  capetown:     { bg: '#1B3A5C', text: '#fff' },
  wedding:      { bg: '#A0522D', text: '#fff' },
};

export default function DaySection({ dayNumber, date, location, locationGroup, emoji, activities }: Day) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const colors = locationColors[locationGroup];

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Before JS runs (SSR + initial hydration): fully visible, no animation
  // After JS runs and element is in viewport: fade in
  // After JS runs but element not yet in viewport: hidden, waiting to animate
  const style = !mounted
    ? {}
    : visible
      ? { opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
      : { opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' };

  return (
    <div ref={ref} id={`day-${dayNumber}`} className="py-10" style={style}>
      <div className="flex flex-wrap items-start gap-3 mb-6">
        <div>
          <div
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ochre)' }}
          >
            Day {dayNumber}
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
          >
            {emoji} {date}
          </h2>
        </div>
        <span
          className="self-start mt-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          {location}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {activities.map((activity, i) => (
          <ActivityCard key={i} {...activity} />
        ))}
      </div>
    </div>
  );
}
