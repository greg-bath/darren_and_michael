'use client';

import { useMemo } from 'react';
import DaySection from './DaySection';
import { days } from '@/data/itinerary';

export default function UpcomingSection() {
  const upcoming = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD in local time
    return days.filter(d => d.isoDate >= today);
  }, []);

  if (upcoming.length === 0) {
    return (
      <section id="upcoming" className="py-12 text-center">
        <h2
          className="text-4xl font-semibold mb-3"
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
        >
          Upcoming Plans
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.6 }}>
          The adventure is over — see the full itinerary below.
        </p>
      </section>
    );
  }

  const isToday = upcoming[0].isoDate === new Date().toISOString().slice(0, 10);

  return (
    <section id="upcoming" className="py-4">
      <div className="flex items-baseline gap-3 mb-2">
        <h2
          className="text-4xl font-semibold"
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
        >
          {isToday ? "Today & Upcoming" : "Upcoming"}
        </h2>
        <span
          className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--ochre)',
            color: '#fff',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          {upcoming.length} day{upcoming.length !== 1 ? 's' : ''} left
        </span>
      </div>
      <p
        className="text-sm mb-2"
        style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.55 }}
      >
        See the full itinerary below.
      </p>

      <div>
        {upcoming.map((day, i) => (
          <div key={day.dayNumber}>
            {i === 0 && isToday && (
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-0 mt-6 px-3 py-1 rounded-full"
                style={{ backgroundColor: 'var(--forest)', color: '#fff', fontFamily: 'var(--font-dm-sans)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Today
              </div>
            )}
            <DaySection {...day} />
            {i < upcoming.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
