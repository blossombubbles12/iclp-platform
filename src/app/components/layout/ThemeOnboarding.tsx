"use client";

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

// We rely on next-themes storageKey configured in ThemeProvider.

type Choice = 'light' | 'dark';

function PreviewCard({
  label,
  choice,
  active,
  onSelect,
}: {
  label: string;
  choice: Choice;
  active?: boolean;
  onSelect: (c: Choice) => void;
}){
  const light = choice === 'light';
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(choice)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className={`group relative w-full max-w-sm rounded-2xl p-5 transition-colors text-left outline-none ring-1 ring-inset ${
        light
          ? 'bg-white ring-black/10 hover:ring-amber-300/70 hover:shadow-[0_0_0_3px_rgba(251,191,36,0.25)]'
          : 'bg-[#0b1220] ring-white/10 hover:ring-cyan-300/60 hover:shadow-[0_0_0_3px_rgba(34,211,238,0.25)]'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${light ? 'text-black' : 'text-white'}`}>{label}</h3>
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${
            active
              ? light
                ? 'bg-amber-400 border-amber-400'
                : 'bg-cyan-400 border-cyan-400'
              : light
                ? 'border-black/20'
                : 'border-white/30'
          }`}
        />
      </div>
      {/* Simple mock UI */}
      <div className={`rounded-xl p-4 ${light ? 'bg-gray-50' : 'bg-white/5'}`}>
        <div className="h-2 w-16 rounded-full bg-current/20 mb-3"/>
        <div className="h-8 rounded-lg mb-3 bg-current/10"/>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg bg-current/10"/>
          <div className="h-16 rounded-lg bg-current/10"/>
          <div className="h-16 rounded-lg bg-current/10"/>
        </div>
      </div>
      <p className={`mt-4 text-sm ${light ? 'text-black/60' : 'text-white/70'}`}>
        {light ? 'Bright, clean, and airy interface.' : 'Sleek, focused, and cinematic feel.'}
      </p>
      <motion.div
        layoutId={light ? 'glow-light' : 'glow-dark'}
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
          light ? 'shadow-[0_0_80px_10px_rgba(251,191,36,0.25)]' : 'shadow-[0_0_80px_10px_rgba(34,211,238,0.25)]'
        }`}
      />
    </motion.button>
  );
}

export default function ThemeOnboarding(){
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<Choice | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If there is no resolved theme yet (first visit), show overlay; otherwise, skip.
    // resolvedTheme becomes defined after hydration when next-themes reads storage/system.
    // We delay to next tick to ensure resolvedTheme stabilizes.
    setTimeout(() => {
      setOpen(!(resolvedTheme === 'light' || resolvedTheme === 'dark'));
    }, 0);
  }, [resolvedTheme, setTheme]);

  // Allow opening the onboarding overlay later
  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('open-theme-onboarding', openHandler);
    return () => window.removeEventListener('open-theme-onboarding', openHandler);
  }, []);

  const bgClass = useMemo(() => {
    const c = hovered;
    if (c === 'light') return 'from-amber-200/40 via-white/60 to-white';
    if (c === 'dark') return 'from-[#0b1220] via-[#0b1220]/90 to-black';
    // neutral
    return 'from-slate-200/40 via-white/50 to-white dark:from-slate-900 dark:via-slate-950/90 dark:to-black';
  }, [hovered]);

  const select = (c: Choice) => {
    setTheme(c);
    // Close with nice transition
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center px-4 bg-gradient-to-b ${bgClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-dark_black dark:text-white">Choose Your Experience</h2>
              <p className="mt-2 text-dark_black/70 dark:text-white/70">Select a theme to personalize your browsing. You can change this anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onMouseEnter={() => setHovered('light')} onMouseLeave={() => setHovered(null)}>
                <PreviewCard label="Light Theme" choice="light" active={resolvedTheme === 'light'} onSelect={select} />
              </div>
              <div onMouseEnter={() => setHovered('dark')} onMouseLeave={() => setHovered(null)}>
                <PreviewCard label="Dark Theme" choice="dark" active={resolvedTheme === 'dark'} onSelect={select} />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-dark_black/60 dark:text-white/60 hover:text-dark_black dark:hover:text-white"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
