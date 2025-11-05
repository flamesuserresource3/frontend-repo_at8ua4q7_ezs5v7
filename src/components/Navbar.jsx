import ThemeToggle from './ThemeToggle';
import { Box, LayoutDashboard, Sparkles, Accessibility, User } from 'lucide-react';

export default function Navbar({ onOpenAccessibility }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-sm">
            <Box className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Cubed</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#dashboard" className="inline-flex items-center gap-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Go to dashboard">
            <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
            Dashboard
          </a>
          <a href="#generate" className="inline-flex items-center gap-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Generate cube">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Generate Cube
          </a>
          <button
            type="button"
            onClick={onOpenAccessibility}
            className="inline-flex items-center gap-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Open accessibility settings"
          >
            <Accessibility className="h-4 w-4" aria-hidden="true" />
            Accessibility
          </button>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Open profile"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
