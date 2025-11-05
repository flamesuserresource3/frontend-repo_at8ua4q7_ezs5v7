import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import AccessibilityPanel from './components/AccessibilityPanel';
import HeroSpline from './components/HeroSpline';

function App() {
  // Accessibility state persisted in localStorage
  const [a11yOpen, setA11yOpen] = useState(false);
  const [fontSize, setFontSize] = useState('medium'); // small | medium | large
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Initialize from storage
  useEffect(() => {
    const fs = localStorage.getItem('a11y:fontSize');
    const hc = localStorage.getItem('a11y:highContrast');
    const rm = localStorage.getItem('a11y:reduceMotion');
    if (fs) setFontSize(fs);
    if (hc) setHighContrast(hc === 'true');
    if (rm) setReduceMotion(rm === 'true');
  }, []);

  // Container classes reacting to contrast
  const containerClass = useMemo(() => {
    if (highContrast) {
      return 'bg-white text-black';
    }
    return 'bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950 dark:text-slate-100';
  }, [highContrast]);

  return (
    <div className={`min-h-screen ${containerClass}`}> 
      <Navbar onOpenAccessibility={() => setA11yOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 pb-24">
        <HeroSpline reduceMotion={reduceMotion} />

        {/* Feature cards */}
        <section id="generate" className="mx-auto mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="#generate"
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            aria-label="Generate a new cube"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-200/30 via-transparent to-cyan-200/30 dark:from-blue-500/10 dark:to-cyan-500/10" />
            <div className="relative">
              <h3 className="text-lg font-semibold">Generate Cube</h3>
              <p className="mt-1 text-sm opacity-80">Start from your mood and create a curated multimedia cube.</p>
            </div>
          </a>

          <a
            id="dashboard"
            href="#dashboard"
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            aria-label="Open your dashboard"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-200/30 via-transparent to-pink-200/30 dark:from-violet-500/10 dark:to-pink-500/10" />
            <div className="relative">
              <h3 className="text-lg font-semibold">Dashboard</h3>
              <p className="mt-1 text-sm opacity-80">Browse your saved cubes, favorites, and recent moods.</p>
            </div>
          </a>
        </section>
      </main>

      <AccessibilityPanel
        open={a11yOpen}
        onClose={() => setA11yOpen(false)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        reduceMotion={reduceMotion}
        setReduceMotion={setReduceMotion}
      />
    </div>
  );
}

export default App;
