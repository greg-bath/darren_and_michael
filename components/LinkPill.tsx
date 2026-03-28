import { ExternalLink } from 'lucide-react';
import type { Link } from '@/data/itinerary';

export default function LinkPill({ icon, label, href }: Link) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors"
      style={{
        borderColor: 'var(--ochre)',
        color: 'var(--ochre)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ochre)';
        (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ochre)';
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
      <ExternalLink size={12} />
    </a>
  );
}
