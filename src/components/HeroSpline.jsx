import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

export default function HeroSpline({ reduceMotion = false }) {
  const prefersReduced = useReducedMotion();
  const shouldReduce = reduceMotion || prefersReduced;

  return (
    <section className="relative mx-auto mt-4 h-[70vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z4mFOe-VPbTX4W76/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end p-6 sm:p-10">
        <motion.h1
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={shouldReduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl text-2xl font-semibold tracking-tight text-gray-900 drop-shadow-sm dark:text-white sm:text-4xl"
        >
          Personalized Mood & Personality Multimedia
        </motion.h1>
        <motion.p
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={shouldReduce ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 max-w-2xl text-sm text-gray-700 dark:text-gray-200 sm:text-base"
        >
          Explore cubes tailored to your current vibe. Generate, explore, and revisit your mood-based media collections.
        </motion.p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <motion.a
            href="#generate"
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={shouldReduce ? false : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-white shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Generate your cube"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Generate Cube
          </motion.a>
          <motion.a
            href="#dashboard"
            initial={shouldReduce ? false : { opacity: 0, y: 10 }}
            animate={shouldReduce ? false : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/70 px-4 py-2 text-gray-900 shadow-sm backdrop-blur hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-black/60"
            aria-label="View dashboard"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            View Dashboard
          </motion.a>
        </div>
      </div>
    </section>
  );
}
