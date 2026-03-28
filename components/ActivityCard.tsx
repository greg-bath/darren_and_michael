import { Shirt } from 'lucide-react';
import Callout from './Callout';
import LinkPill from './LinkPill';
import type { Activity } from '@/data/itinerary';

export default function ActivityCard({ time, title, description, tips, links, dresscode }: Activity) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--sand)',
        borderLeft: '3px solid var(--ochre)',
      }}
    >
      {time && (
        <span
          className="self-start text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--ochre)',
            color: '#fff',
            fontFamily: 'var(--font-dm-sans)',
            letterSpacing: '0.04em',
          }}
        >
          {time}
        </span>
      )}

      <h3
        className="text-xl font-semibold leading-snug"
        style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)' }}>
        {description}
      </p>

      {dresscode && (
        <div
          className="flex items-center gap-2 text-sm italic"
          style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-dm-sans)' }}
        >
          <Shirt size={14} />
          <span>{dresscode}</span>
        </div>
      )}

      {tips && tips.length > 0 && (
        <div className="flex flex-col gap-2">
          {tips.map((tip, i) => (
            <Callout key={i} {...tip} />
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {links.map((link, i) => (
            <LinkPill key={i} {...link} />
          ))}
        </div>
      )}
    </div>
  );
}
