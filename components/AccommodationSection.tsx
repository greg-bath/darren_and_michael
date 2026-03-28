'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { villas, gameDriveGroups } from '@/data/itinerary';

export default function AccommodationSection() {
  const [query, setQuery] = useState('');

  const q = query.toLowerCase().trim();

  const filteredVillas = q
    ? villas.map(v => ({
        ...v,
        guests: v.guests.filter(g => g.toLowerCase().includes(q)),
      })).filter(v => v.guests.length > 0 || v.name.toLowerCase().includes(q))
    : villas;

  const filteredGroups = q
    ? gameDriveGroups.map(g => ({
        ...g,
        members: g.members.filter(m => m.toLowerCase().includes(q)),
        leaderMatch: g.leader.toLowerCase().includes(q),
      })).filter(g => g.members.length > 0 || g.leaderMatch || g.lodge.toLowerCase().includes(q))
    : gameDriveGroups.map(g => ({ ...g, leaderMatch: false }));

  return (
    <section id="accommodation" className="py-12">
      <h2
        className="text-4xl font-semibold mb-2"
        style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
      >
        Accommodation &amp; Game Drive Groups
      </h2>
      <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.7 }}>
        Kruger · Mjejane Private Game Reserve
      </p>

      {/* Search */}
      <div className="relative mb-8 max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--ochre)' }} />
        <input
          type="text"
          placeholder="Find your name…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            backgroundColor: 'var(--sand)',
            border: '1px solid var(--ochre)',
            color: 'var(--charcoal)',
          }}
        />
      </div>

      {/* Accommodation Table */}
      <div className="mb-10">
        <h3
          className="text-2xl font-semibold mb-3"
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
        >
          Accommodation
        </h3>
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--sand)' }}>
          <table className="min-w-full text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--forest)', color: '#fff' }}>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Villa / Lodge</th>
                <th className="text-left px-4 py-3 font-semibold">Guests</th>
              </tr>
            </thead>
            <tbody>
              {filteredVillas.map((villa, i) => (
                <tr
                  key={villa.name}
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--sand)' : 'var(--cream)' }}
                >
                  <td
                    className="px-4 py-3 font-medium whitespace-nowrap align-top"
                    style={{ color: 'var(--forest)', borderLeft: '3px solid var(--ochre)' }}
                  >
                    {villa.name}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {villa.guests.map(g => (
                        <span
                          key={g}
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: q && g.toLowerCase().includes(q) ? 'var(--ochre)' : 'rgba(200,135,42,0.12)',
                            color: q && g.toLowerCase().includes(q) ? '#fff' : 'var(--charcoal)',
                          }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Game Drive Groups Table */}
      <div>
        <h3
          className="text-2xl font-semibold mb-3"
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--forest)' }}
        >
          Game Drive Groups
        </h3>
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--sand)' }}>
          <table className="min-w-full text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--forest)', color: '#fff' }}>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Vehicle</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Lodge</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Leader</th>
                <th className="text-left px-4 py-3 font-semibold">Members</th>
              </tr>
            </thead>
            <tbody>
              {filteredGroups.map((group, i) => (
                <tr
                  key={group.vehicle}
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--sand)' : 'var(--cream)' }}
                >
                  <td
                    className="px-4 py-3 font-semibold align-top whitespace-nowrap"
                    style={{ color: 'var(--ochre)', borderLeft: '3px solid var(--ochre)' }}
                  >
                    Vehicle {group.vehicle}
                  </td>
                  <td className="px-4 py-3 align-top whitespace-nowrap" style={{ color: 'var(--forest)' }}>
                    {group.lodge}
                  </td>
                  <td
                    className="px-4 py-3 align-top whitespace-nowrap font-medium"
                    style={{
                      color: q && group.leader.toLowerCase().includes(q) ? 'var(--ochre)' : 'var(--charcoal)',
                    }}
                  >
                    {group.leader}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {group.members.map(m => (
                        <span
                          key={m}
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: q && m.toLowerCase().includes(q) ? 'var(--ochre)' : 'rgba(200,135,42,0.12)',
                            color: q && m.toLowerCase().includes(q) ? '#fff' : 'var(--charcoal)',
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
