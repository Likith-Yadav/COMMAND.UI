'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000); // Wait a bit before completing
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.5,
        filter: "blur(20px)",
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <div className="relative w-full max-w-md px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="text-[12rem] font-black leading-none tracking-tighter mix-blend-difference overflow-hidden">
            {progress.toString().padStart(3, '0')}
          </div>
          <div className="flex justify-between items-end mt-4">
            <span className="text-xs tracking-[0.3em] font-medium uppercase opacity-50">System Initializing</span>
            <div className="flex flex-col items-end">
                <span className="text-4xl font-light italic">VO.25</span>
                <span className="text-[10px] opacity-30 mt-1">BORN TO REEL</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        
        <div className="mt-4 flex justify-between text-[10px] uppercase tracking-widest opacity-30">
          <span>Loading Assets</span>
          <span>{progress}%</span>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 text-[10px] tracking-[0.5em] uppercase opacity-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Neural Core Interface Layer-X
      </motion.div>
    </motion.div>
  );
};
