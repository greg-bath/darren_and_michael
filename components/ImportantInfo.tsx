'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface InfoItem {
  emoji: string;
  title: string;
  content: string | React.ReactNode;
}

const items: InfoItem[] = [
  {
    emoji: '🦟',
    title: 'Malaria',
    content: 'Kruger is a malaria area. Bring tablets — consult your GP or travel clinic well in advance (ideally 4–6 weeks before departure). Take prophylaxis as prescribed and use repellent in the evenings.',
  },
  {
    emoji: '💧',
    title: 'Water',
    content: 'Tap water is safe to drink in Cape Town and Stellenbosch. Do NOT drink the tap water at any Kruger lodge — it is borehole water. Use bottled water for drinking and brushing teeth in Kruger.',
  },
  {
    emoji: '🚗',
    title: 'Car Rental',
    content: 'A hire car is required for Kruger. Standard sedan cars are fine on most roads; higher clearance is more comfortable on dirt tracks inside the reserve. Strictly obey all speed limits — for your safety and the wildlife.',
  },
  {
    emoji: '💳',
    title: 'Payments',
    content: 'Cards are accepted almost everywhere across South Africa. Note that American Express is often not accepted. Cash is rarely needed but handy for small tips and market stalls.',
  },
  {
    emoji: '📱',
    title: 'eSIM / Data',
    content: 'The Airalo app is recommended for a South African data eSIM. Purchase and activate before you travel. Coverage is generally good in Cape Town and Stellenbosch; more variable in Kruger.',
  },
  {
    emoji: '📞',
    title: 'Key Contacts',
    content: (
      <ul className="space-y-1.5 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
        <li><strong>Moira (Kruger):</strong> +27 83 308 6152</li>
        <li><strong>Vaughan (Kruger):</strong> +27 82 450 4462</li>
        <li><strong>Stuart Chamberlain (Golf):</strong> +27 83 309 3245</li>
        <li><strong>Alexander Leighton (Cape Town transport):</strong> +44 7981 481607</li>
        <li><strong>Game drive bookings (WhatsApp):</strong> +27 73 278-9158</li>
      </ul>
    ),
  },
  {
    emoji: '🛍️',
    title: 'Groceries — Kruger',
    content: 'Pick n Pay Malelane delivers to Kruger lodges. Pre-order by WhatsApp on +27 (0)13 790 1025 or email fmalelane@pnp.co.za. Highly recommended for stocking up on breakfast items, snacks, and drinks.',
  },
  {
    emoji: '🎒',
    title: 'What to Pack',
    content: 'Essentials: sunscreen (SPF 50+), strong insect repellent (DEET-based), hat, light jacket (mornings can be cold on game drives), swimwear, comfortable walking shoes, binoculars (optional but brilliant), and your passport for car rental and game reserve entry.',
  },
];

function AccordionItem({ emoji, title, content }: InfoItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(200,135,42,0.3)' }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{
          backgroundColor: open ? 'var(--sand)' : 'var(--cream)',
          fontFamily: 'var(--font-dm-sans)',
        }}
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{emoji}</span>
          <span className="font-semibold text-base" style={{ color: 'var(--forest)' }}>{title}</span>
        </span>
        <ChevronDown
          size={18}
          style={{ color: 'var(--ochre)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
        />
      </button>

      {open && (
        <div
          className="px-5 py-4 text-sm leading-relaxed"
          style={{
            backgroundColor: 'var(--sand)',
            color: 'var(--charcoal)',
            fontFamily: 'var(--font-dm-sans)',
            borderTop: '1px solid rgba(200,135,42,0.2)',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default function ImportantInfo() {
  return (
    <section id="important-info" className="py-12">
      <h2
        className="text-4xl font-semibold mb-2"
        style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
      >
        Important Information
      </h2>
      <p className="text-sm mb-8" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.7 }}>
        Everything you need to know before you go.
      </p>

      <div className="flex flex-col gap-3">
        {items.map(item => (
          <AccordionItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
