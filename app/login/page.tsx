'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // Full page reload ensures the cookie is sent with the next request
      // and the proxy sees it — works reliably on both localhost and IP access
      window.location.href = '/';
    } else {
      setError('Incorrect password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,26,0.65)' }} />

      <div
        className="relative z-10 w-full max-w-sm rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="leading-tight mb-1"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '36px',
              color: 'var(--forest)',
            }}
          >
            Darren &amp; Michael
          </h1>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ochre)' }}
          >
            April 2026 · South Africa
          </p>
        </div>

        <hr className="section-divider mb-8" />

        <p
          className="text-sm text-center mb-6"
          style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--charcoal)', opacity: 0.7 }}
        >
          This itinerary is private. Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <Lock
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--ochre)' }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              className="w-full pl-9 pr-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                backgroundColor: 'var(--sand)',
                border: `1px solid ${error ? 'var(--terracotta)' : 'rgba(200,135,42,0.4)'}`,
                color: 'var(--charcoal)',
              }}
            />
          </div>

          {error && (
            <p className="text-xs text-center" style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-dm-sans)' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="py-3 rounded-lg text-sm font-semibold text-white transition-opacity disabled:opacity-50"
            style={{
              backgroundColor: 'var(--forest)',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}
