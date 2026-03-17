'use client';

import { useTheme } from '../context/ThemeContext';
import type { ThemeStyle } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Check } from 'lucide-react';
import { useState } from 'react';

const themes: { id: ThemeStyle; name: string; color: string }[] = [
  { id: 'minimalist', name: 'Minimalist', color: 'bg-black' },
  { id: 'glassmorphism', name: 'Glassmorphism', color: 'bg-indigo-500' },
  { id: 'neumorphism', name: 'Neumorphism', color: 'bg-gray-300' },
  { id: 'dark-modern', name: 'Dark Modern', color: 'bg-emerald-500' },
  { id: 'gradient-startup', name: 'Gradient Startup', color: 'bg-rose-500' },
];

export const ThemeSwitcher = () => {
  const { style, setStyle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 p-4 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold uppercase tracking-widest opacity-50 text-black dark:text-white">Switch Style</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full text-black dark:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setStyle(t.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                    style === t.id 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${t.color}`} />
                    <span className="text-sm font-medium">{t.name}</span>
                  </div>
                  {style === t.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-2xl border border-white/20"
      >
        <Palette size={24} />
      </motion.button>
    </div>
  );
};
