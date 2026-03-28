'use client';

import { useState, useMemo } from 'react';
import DaySection from './DaySection';
import { days } from '@/data/itinerary';

type Tab = 'today' | 'tomorrow' | 'full';

function getLocalISODate(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-20 text-center">
      <p
        className="text-2xl mb-2"
        style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'var(--forest)' }}
      >
        {message}
      </p>
      <p
        className="text-sm"
        style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.5 }}
      >
        Switch to Full Itinerary to see all 12 days.
      </p>
    </div>
  );
}

export default function ItineraryTabs() {
  const [active, setActive] = useState<Tab>('today');

  const switchTab = (tab: Tab) => {
    setActive(tab);
    window.dispatchEvent(new CustomEvent('itinerary-tab-change', { detail: tab }));
  };

  const todayISO    = useMemo(() => getLocalISODate(0), []);
  const tomorrowISO = useMemo(() => getLocalISODate(1), []);

  const todayDay    = useMemo(() => days.find(d => d.isoDate === todayISO), [todayISO]);
  const tomorrowDay = useMemo(() => days.find(d => d.isoDate === tomorrowISO), [tomorrowISO]);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'today',    label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'full',     label: 'Full Itinerary' },
  ];

  return (
    <div>
      {/* Tab bar */}
      <div
        className="flex gap-1 p-1 rounded-xl w-fit mt-8 mb-6"
        style={{ backgroundColor: 'var(--sand)' }}
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              backgroundColor: active === tab.id ? 'var(--forest)' : 'transparent',
              color: active === tab.id ? '#fff' : 'var(--charcoal)',
              opacity: active === tab.id ? 1 : 0.6,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {active === 'today' && (
        todayDay
          ? <DaySection {...todayDay} />
          : <EmptyState message="No plans today." />
      )}

      {active === 'tomorrow' && (
        tomorrowDay
          ? <DaySection {...tomorrowDay} />
          : <EmptyState message="No plans tomorrow." />
      )}

      {active === 'full' && (
        <div id="full-itinerary">
          {days.map((day, i) => (
            <div key={day.dayNumber}>
              <DaySection {...day} />
              {i < days.length - 1 && <hr className="section-divider" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
