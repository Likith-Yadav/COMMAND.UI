'use client';

import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export const Navbar = () => {
  const { style } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isMinimalist = style === 'minimalist';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b",
      style === 'glassmorphism' ? "glass-effect border-white/10" : (style === 'neumorphism' ? "bg-transparent border-white/5" : "bg-secondary border-black/5 dark:border-white/5"),
      isMinimalist ? "py-8" : "py-5 px-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <div className="text-xl font-black tracking-tighter uppercase cursor-pointer">
            COMMAND<span className="opacity-30">.UI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Production', 'Features', 'Gallery', 'Specs'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="p-2 opacity-50 hover:opacity-100 transition-opacity">
            <Search size={18} strokeWidth={3} />
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-black/5 dark:border-white/5 overflow-hidden"
          >
             <div className="flex flex-col p-6 gap-6">
                {['Production', 'Features', 'Gallery', 'Specs'].map((link) => (
                  <a 
                    key={link} 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-black uppercase tracking-[0.4em] opacity-40"
                  >
                    {link}
                  </a>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
