import { Info, AlertTriangle, AlertCircle } from 'lucide-react';
import type { Callout as CalloutType } from '@/data/itinerary';

const config = {
  info: {
    icon: Info,
    bg: '#EFF6FF',
    border: '#BFDBFE',
    text: '#1E40AF',
  },
  warning: {
    icon: AlertTriangle,
    bg: '#FFFBEB',
    border: '#FDE68A',
    text: '#92400E',
  },
  important: {
    icon: AlertCircle,
    bg: '#FFF5F0',
    border: '#FECACA',
    text: 'var(--terracotta)',
  },
};

export default function Callout({ type, text }: CalloutType) {
  const { icon: Icon, bg, border, text: textColor } = config[type];
  return (
    <div
      className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm"
      style={{ backgroundColor: bg, border: `1px solid ${border}`, color: textColor }}
    >
      <Icon size={15} className="mt-0.5 shrink-0" />
      <span style={{ fontFamily: 'var(--font-dm-sans)' }}>{text}</span>
    </div>
  );
}
