import { useEffect } from 'react';
import { X, Type as TypeIcon, Contrast, VideoOff } from 'lucide-react';

export default function AccessibilityPanel({ open, onClose, fontSize, setFontSize, highContrast, setHighContrast, reduceMotion, setReduceMotion }) {
  useEffect(() => {
    // Apply font size to root for global scaling
    const root = document.documentElement;
    const map = { small: '14px', medium: '16px', large: '18px' };
    const size = map[fontSize] || '16px';
    root.style.fontSize = size;
    localStorage.setItem('a11y:fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('a11y:highContrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('a11y:reduceMotion', String(reduceMotion));
  }, [reduceMotion]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Accessibility settings"
      className="fixed right-4 bottom-4 z-30 w-80 rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/80 backdrop-blur shadow-xl"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-white/10">
        <h2 className="text-sm font-semibold">Accessibility</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close accessibility settings"
          className="rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="space-y-4 p-4 text-sm">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-medium">
            <TypeIcon className="h-4 w-4" aria-hidden="true" />
            Text size
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFontSize('small')}
              aria-label="Set text size to small"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${fontSize === 'small' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              Small
            </button>
            <button
              type="button"
              onClick={() => setFontSize('medium')}
              aria-label="Set text size to medium"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${fontSize === 'medium' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => setFontSize('large')}
              aria-label="Set text size to large"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${fontSize === 'large' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              Large
            </button>
          </div>
        </div>

        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-medium">
            <Contrast className="h-4 w-4" aria-hidden="true" />
            High contrast
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setHighContrast(false)}
              aria-label="Disable high contrast"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${!highContrast ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              Default
            </button>
            <button
              type="button"
              onClick={() => setHighContrast(true)}
              aria-label="Enable high contrast"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${highContrast ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              High
            </button>
          </div>
        </div>

        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-medium">
            <VideoOff className="h-4 w-4" aria-hidden="true" />
            Motion
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setReduceMotion(false)}
              aria-label="Enable animations"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${!reduceMotion ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              On
            </button>
            <button
              type="button"
              onClick={() => setReduceMotion(true)}
              aria-label="Reduce animations"
              className={`flex-1 rounded-md border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${reduceMotion ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              Reduce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
