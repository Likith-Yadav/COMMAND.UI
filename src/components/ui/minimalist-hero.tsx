"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface MinimalistHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function MinimalistHero({ title, subtitle, className }: MinimalistHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div ref={containerRef} className={cn("relative h-[200vh] bg-secondary", className)}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 text-center">
          <motion.div
             style={{ scale: textScale, y: textY }}
             className="space-y-4"
          >
             <motion.span 
               className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 block mb-6"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 0.3, y: 0 }}
             >
               Edition / 2026
             </motion.span>
             <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase flex flex-col">
               <span className="block">{title.split(' ')[0]}</span>
               <span className="block opacity-20 italic">{title.split(' ').slice(1).join(' ')}</span>
             </h1>
             <motion.p 
               className="text-lg md:text-xl font-bold max-w-xl mx-auto opacity-40 uppercase tracking-widest mt-12 leading-relaxed"
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.4 }}
               transition={{ delay: 0.5 }}
             >
               {subtitle}
             </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
