export default function Footer() {
  return (
    <footer className="py-10 text-center" style={{ backgroundColor: 'var(--forest)' }}>
      <p
        className="text-white/80 text-2xl mb-1"
        style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
      >
        Darren &amp; Michael
      </p>
      <p
        className="text-white/40 text-xs uppercase tracking-widest"
        style={{ fontFamily: 'var(--font-dm-sans)' }}
      >
        7 April 2026 · Cavalli Estate · Stellenbosch
      </p>
      <p
        className="text-white/20 text-xs mt-4"
        style={{ fontFamily: 'var(--font-dm-sans)' }}
      >
        Made with love for the best guests in the world.
      </p>
    </footer>
  );
}
